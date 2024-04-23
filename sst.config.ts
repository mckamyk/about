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
            name: "about.mckamyk.io",
            dns: sst.aws.dns({
              zone: "Z03383253DRRF3ZSA5C6K",
            }),
          }
        : undefined,
    });
  },
});
