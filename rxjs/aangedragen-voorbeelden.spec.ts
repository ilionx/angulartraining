import {of} from 'rxjs';
import {catchError, concatMap} from 'rxjs/operators';

describe('Aangedragen voorbeelden', () => {
  it('Geneste concatmap', done => {
    const risicoObjectId = null;
    const that = {
      getMdmNumber: (a) => of({mdmRelatieId: 1}),
      getOrganizationId: (a) => of({Items: [{Id: 2}]}),
      getFecSectorDuration: (a) => of({Items: [{FecSectorId: 3}]}),
      getFecSector: (a) => of('fec sector'),
      handleError: (a) => of('')
    };

    const callChain$ =
      that.getMdmNumber(risicoObjectId).pipe(
        concatMap(val => that.getOrganizationId(val.mdmRelatieId).pipe(
          concatMap(resp => that.getFecSectorDuration(resp.Items[0].Id).pipe(
            concatMap(duration => that.getFecSector(duration.Items[0].FecSectorId)),
            catchError(err => that.handleError(err))
          )),
          catchError(err => that.handleError(err))
        )),
        catchError(err => that.handleError(err))
      );

    // TEST:
    callChain$.subscribe(fecSector => {
      expect(fecSector).toEqual('fec sector');
      done();
    });
  });

  it('Geneste subscribes', done => {
    const detailsRequest = null;
    const bestandUploadService = {
      getBestandDetails: (a) => of({data: [{}, {}, {}, {}]}),
      getBestandExtensie: (a) => of({data: [{extensie: 'gif'}, {extensie: 'png'}]})
    };
    const that = {
      aanleveringenBestandDetails: null,
      aanleveringBestandExtensieRequest: null
    };

    bestandUploadService.getBestandDetails(detailsRequest).subscribe(
      result => {
        that.aanleveringenBestandDetails = result.data;

        that.aanleveringenBestandDetails.forEach((details) => {
          const extensieRequest = that.aanleveringBestandExtensieRequest = {
            bestandsTypeCode: details.bestandsTypeCode
          };

          bestandUploadService.getBestandExtensie(extensieRequest).subscribe(
            result => {
              details.bestandExtensieProperties = result.data;
              let allowedExtensions = [];
              result.data.forEach(r => {
                allowedExtensions.push('.' + r.extensie);
              });
              details.allowedExtensions = allowedExtensions;
            }
          );
        });
      });

    expect(that.aanleveringenBestandDetails).toEqual([
      {allowedExtensions: ['.gif', '.png'], bestandExtensieProperties: [{extensie: 'gif'}, {extensie: 'png'}]},
      {allowedExtensions: ['.gif', '.png'], bestandExtensieProperties: [{extensie: 'gif'}, {extensie: 'png'}]},
      {allowedExtensions: ['.gif', '.png'], bestandExtensieProperties: [{extensie: 'gif'}, {extensie: 'png'}]},
      {allowedExtensions: ['.gif', '.png'], bestandExtensieProperties: [{extensie: 'gif'}, {extensie: 'png'}]}
    ]);
    done();
  });
});
