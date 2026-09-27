# Discount Store

Intentionally buggy mini app for **DevResolve AI** testing.

## Bug
Checkout ignores the configured discount.

**Expected:** Rp100.000 with 20% discount should total Rp80.000.

**Actual:** Checkout still shows Rp100.000.

## Run
```bash
npm install
npm run dev
```

## Reproduce with tests
```bash
npm test
```
The failing test is intentional. The repository should be fixed by the coding agent later.

## Deploy
Import this repository into Vercel and deploy with the default Next.js settings.
