# Angular Architects Performance Demo

## Analyze Bundle Size (esbuild variant)

Understanding the size of your application bundle is crucial for performance optimization. To facilitate this analysis, we utilize a `stats.json` file that describes all generated bundles in detail. The Angular CLI makes this easy with the `--stats-json` flag, which creates the necessary Esbuild metadata file.

### Steps to Generate Bundle Analysis

Follow these steps to generate the `stats.json` file and visualize the bundle size with an `stats.html` file:

```shell
npm run build:stats
npm run analyze:bundle
open stats/stats.html
```

This process compiles your application with the Angular CLI, incorporating the `--stats-json` flag to produce the metadata file. Subsequently, it generates a visualization of your bundle size, making it easier to understand and optimize.

### Online Analysis Tool

Alternatively, for a more interactive analysis, you can use the online tool available at [esbuild.github.io](https://esbuild.github.io) to analyze your bundle directly in your browser.
