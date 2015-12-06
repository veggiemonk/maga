import { formatExtension, formatSize } from './utils'

import moment from 'moment'
import _ from 'lodash'

const LANG = 'fr'

/***
 *
 * @param item
 * @param lang
 * @returns {*}
 */
export const labelDocI18n = ( item, lang ) => {

  let doc = {
    fr:      () => item.labelDocFR,
    nl:      () => item.labelDocNL,
    de:      () => item.labelDocDE,
    default: () => item.labelDocX,
  }
  return (doc[ lang ] || doc[ 'default' ])()
}

export const groupMenu = ( category, files ) => {
  const refDocUsed   = _.sortBy( _.uniq( _.pluck( files, 'referenceDocument' ) ) )
  const categoryUsed = _.filter( category, cat => _.contains( refDocUsed, cat.referenceDocument ) )
  const filesPerRef  = _.countBy( files, 'referenceDocument' )
  const filesPerCat  = _.reduce( categoryUsed, ( acc, curr ) => {
    acc[ curr.categoryNumber ]
      ? acc[ curr.categoryNumber ] += filesPerRef[ curr.referenceDocument ]
      : acc[ curr.categoryNumber ] = filesPerRef[ curr.referenceDocument ]
    return acc
  }, [] )

  return _.chain( categoryUsed )
    .map( cat => {
      cat.filesPerRef = filesPerRef[ cat.referenceDocument ]
      cat.filesPerCat = filesPerCat[ cat.categoryNumber ]
      return cat
    } )
    .groupBy( cat => cat.categoryNumber )
    .value()
}

export const sanitize = ( files, category ) => {
  let username = sessionStorage.username || ''
  return files.map( row => {
    Object.keys( row ).map( key => {
      let options = {
        index:             () => {},
        checkbox:          () => { row[ key ] = '< input type = "checkbox" / >' },
        notDownloaded:     () => {
          row[ key ]
            ? row[ key ] = '<i style="color:green" class="fa fa-download"></i>'
            : row[ key ] = '<i style="color:red" class="fa fa-download"></i>'
        },
        downloadCount:     () => {},
        date:              () => {
          row[ key ] = moment( row[ key ], 'YYYY-MM-DD')
          row.dateFormatted = row[ key ].format( 'DD/MM/YYYY' )
        },
        fileId:            () => { row[ key ] ? row[ key ] = Number( row[ key ] ) : '' },
        fileName:          () => {},
        employerNumber:    () => { row[ key ] ? row[ key ] = Number( row[ key ] ) : '' },
        uploadUserName:    () => {
          if ( row[ key ] === 'trf_fich' ) { row[ key ] = 'Group S' }
          row.dlClass = row.uploadUserName === username ? 'fa-upload' : 'fa-download'
        },
        label:             () => {
          const ref = Number( row.referenceDocument )
          ref
            ? row[ key ] = labelDocI18n(
            _.find( category, {
              referenceDocument: ref
            } ), LANG /* TODO: I18N */
          )
            : row[ key ] = row.fileName
        },
        referenceDocument: () => { row[ key ] ? row[ key ] = Number( row[ key ] ) : '_' },
        size:              () => { row.sizeFormatted = formatSize( row[ key ] ) },
        extension:         () => { row.extensionFormatted = formatExtension( row[ key ] ) },
        path:              () => {},
        referenceClient:   () => {},
        counter:           () => {},
        referenceGroupS:   () => {},
        uploadStamp:       () => {},
        uploaderComment:   () => {
          row.uploaderCommentLimit = row[ key ].substring( 0, 20 )
        },
        default:           () => {}, //noop
      };
      (options[ key ] || options[ 'default' ])()
    } )
    //Meta-data
    row.checkbox             = '<input type="checkbox" />'
    row.remove               = '<i class="fa fa-ban fa-lg text-danger"></i>'
    row.alreadyDL            = row.downloadCount > 0 ? 'text-muted' : 'text-primary'
    const date               = moment( row.uploadStamp, 'MM/DD/YYYY hh:mm:ss a' )
    row.uploadStampFormatted = date.format( 'DD/MM/YYYY HH:mm:ss' )
    row.uploadStamp          = date.format( 'YYYY/MM/DD HH:mm:ss' )
    return row
  } )
}

