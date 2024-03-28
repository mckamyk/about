/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "about",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const isProd = $app.stage === "prod";
    new sst.aws.Remix("MyWeb", {
      domain: isProd
        ? {
            domainName: "about.mckamyk.io",
            hostedZone: "mckamyk.io",
          }
        : undefined,
    });
  },
});
