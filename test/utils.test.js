import { expect } from 'chai'
import { validateDate } from '../src/utils'


suite( 'UTILS', function () {

  test( 'Date Parsing', () => {
    const test     = [ '22/5', '10/10/15', '03/5', '41/10', '10/10/2010', 'x', '06/06/15', '5/5/13', '5/5' ]
    const expected = [ '22/05/2016', '10/10/2015', '03/05/2016', null, '10/10/2010', null, '06/06/2015', '05/05/2013', '05/05/2016' ]
    test.forEach( ( a, i ) => {
      expect( validateDate( a ) ? validateDate( a ).format( 'DD/MM/YYYY' ).toString() : null).to.equal(expected[i])
    } )
  } )
} )

