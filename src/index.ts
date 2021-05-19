import RingCentral from '@rc-ex/core';
import Rest from '@rc-ex/core/lib/Rest';
import path from 'path';
import fs from 'fs';

const rc = new RingCentral({
  server: Rest.productionServer,
});

rc.token = {
  access_token: process.env.RINGCENTRAL_ACCESS_TOKEN,
};

(async () => {
  const messageReport = await rc
    .restapi()
    .account()
    .messageStoreReport(process.env.RINGCENTRAL_REPORT_ID)
    .get();
  console.log(messageReport);

  const archives = await rc
    .restapi()
    .account()
    .messageStoreReport(process.env.RINGCENTRAL_REPORT_ID)
    .archive()
    .list();
  console.log(archives);

  const buffer0 = await rc
    .restapi()
    .account()
    .messageStoreReport(process.env.RINGCENTRAL_REPORT_ID)
    .archive('0')
    .get();
  fs.writeFileSync(path.join(__dirname, '..', 'temp0.zip'), buffer0);

  const buffer1 = await rc
    .restapi()
    .account()
    .messageStoreReport(process.env.RINGCENTRAL_REPORT_ID)
    .archive('1')
    .get();
  fs.writeFileSync(path.join(__dirname, '..', 'temp1.zip'), buffer1);
})();
