import RingCentral from '@rc-ex/core';
import Rest from '@rc-ex/core/lib/Rest';

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
})();
