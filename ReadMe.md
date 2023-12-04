initilization

```bash
npm init -y
npm init wdio
```

run code
```bash
npm run wdio
```

test result
```bash
 "spec" Reporter:
------------------------------------------------------------------
[chrome 119.0.6045.199 linux #0-1] Running: chrome (v119.0.6045.199) on linux
[chrome 119.0.6045.199 linux #0-1] Session ID: bff363b9c74d577b69157abf2a5b876b
[chrome 119.0.6045.199 linux #0-1]
[chrome 119.0.6045.199 linux #0-1] » /test/specs/test.machine.js
[chrome 119.0.6045.199 linux #0-1] test one position
[chrome 119.0.6045.199 linux #0-1]    ✓ 08 price btn color
[chrome 119.0.6045.199 linux #0-1]    ✓ 09 btnBuy size
[chrome 119.0.6045.199 linux #0-1]    ✖ 10 image is visable
[chrome 119.0.6045.199 linux #0-1]
[chrome 119.0.6045.199 linux #0-1] 2 passing (23.3s)
[chrome 119.0.6045.199 linux #0-1] 1 failing
[chrome 119.0.6045.199 linux #0-1]
[chrome 119.0.6045.199 linux #0-1] 1) test one position 10 image is visable
[chrome 119.0.6045.199 linux #0-1] expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
[chrome 119.0.6045.199 linux #0-1] Error: expect(received).toBe(expected) // Object.is equality
[chrome 119.0.6045.199 linux #0-1]
[chrome 119.0.6045.199 linux #0-1] Expected: true
[chrome 119.0.6045.199 linux #0-1] Received: false
[chrome 119.0.6045.199 linux #0-1]     at Context.<anonymous> (/home/akakiy/javaScript/Epam_course/Marafon/test/specs/test.machine.js:34:56)
[chrome 119.0.6045.199 linux #0-1]     at processTicksAndRejections (node:internal/process/task_queues:96:5)
------------------------------------------------------------------
[chrome 119.0.6045.199 linux #0-0] Running: chrome (v119.0.6045.199) on linux
[chrome 119.0.6045.199 linux #0-0] Session ID: 5f38d9e4d1c464c6d115167fd9db5b50
[chrome 119.0.6045.199 linux #0-0]
[chrome 119.0.6045.199 linux #0-0] » /test/specs/test.filters.js
[chrome 119.0.6045.199 linux #0-0] first case
[chrome 119.0.6045.199 linux #0-0]    ✓ 01 half screen view button filter
[chrome 119.0.6045.199 linux #0-0]    ✓ 02 select checkbox
[chrome 119.0.6045.199 linux #0-0]    ✖ 03 check rating list
[chrome 119.0.6045.199 linux #0-0]
[chrome 119.0.6045.199 linux #0-0] second case
[chrome 119.0.6045.199 linux #0-0]    ✓ 04 check rating list
[chrome 119.0.6045.199 linux #0-0]    ✓ 05 compare prise
[chrome 119.0.6045.199 linux #0-0]    ✓ 06 type mim price
[chrome 119.0.6045.199 linux #0-0]    ✓ 07 check trandmark
[chrome 119.0.6045.199 linux #0-0]
[chrome 119.0.6045.199 linux #0-0] 6 passing (58.7s)
[chrome 119.0.6045.199 linux #0-0] 1 failing
[chrome 119.0.6045.199 linux #0-0]
[chrome 119.0.6045.199 linux #0-0] 1) first case 03 check rating list
[chrome 119.0.6045.199 linux #0-0] expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
[chrome 119.0.6045.199 linux #0-0] Error: expect(received).toBe(expected) // Object.is equality
[chrome 119.0.6045.199 linux #0-0]
[chrome 119.0.6045.199 linux #0-0] Expected: true
[chrome 119.0.6045.199 linux #0-0] Received: false
[chrome 119.0.6045.199 linux #0-0]     at Context.<anonymous> (/home/akakiy/javaScript/Epam_course/Marafon/test/specs/test.filters.js:29:66)
[chrome 119.0.6045.199 linux #0-0]     at processTicksAndRejections (node:internal/process/task_queues:96:5)


Spec Files:      0 passed, 2 failed, 2 total (100% completed) in 00:01:02  
```