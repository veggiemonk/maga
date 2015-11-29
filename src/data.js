import {
    formatExtension,
    formatSize,
    labelDocI18n
}
    from './utils'
import moment from 'moment'
import _ from 'lodash'
export const groupMenu = (category, files) => {
  let refDocUsed = _.sortBy( _.uniq( _.pluck( files, 'referenceDocument' ) ) )
  return _.groupBy(
      _.filter( category, (obj) => {
        if ( _.contains( refDocUsed, obj.referenceDocument ) ) {
          return obj
        }
      } ),
      obj => obj.categoryNumber
  )
}
const notNaNPlease     = val => Number( val ) ? Number( val ) : ''
export const sanitize  = (files, category) => {
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
        date:              () => { row.dateFormatted = moment( row.date, 'YYYY-MM-DD' ).format( 'DD/MM/YYYY' )        },
        fileId:            () => { row[ key ] ? row[ key ] = Number( row[ key ] ) : '' },
        fileName:          () => {},
        employerNumber:    () => { row[ key ] ? row[ key ] = Number( row[ key ] ) : '' },
        uploadUserName:    () => {
          if ( row[ key ] === 'trf_fich' ) { row[ key ] = 'Group S' }
          row.dlClass = row.uploadUserName === username ? 'fa-upload' : 'fa-download'
        },
        label:             () => {
          row[key] = labelDocI18n(
              _.find( category, {
                referenceDocument: Number( row.referenceDocument )
              } ), 'fr' /* TODO: I18N */
          )
        },
        referenceDocument: () => { row[ key ] ? row[ key ] = Number( row[ key ] ) : '' },
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

