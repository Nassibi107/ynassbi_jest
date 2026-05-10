
> ynassbi_jest@1.0.0 test
> jest

FAIL test/main.test.js
  √ checkNumber -  (7 ms)
  testing string - 
    × should return ynassibi (8 ms)

  ● testing string -  › should return ynassibi

    expect(received).toBe(expected) // Object.is equality

    Expected: "ynassibix"
    Received: "ynassibi"

    [0m [90m 17 |[39m
     [90m 18 |[39m   it([32m"should return ynassibi"[39m[33m,[39m () [33m=>[39m {
    [31m[1m>[22m[39m[90m 19 |[39m     expect(loginName())[33m.[39mtoBe([32m"ynassibix"[39m)[33m;[39m
     [90m    |[39m                         [31m[1m^[22m[39m
     [90m 20 |[39m   })[33m;[39m
     [90m 21 |[39m
     [90m 22 |[39m[0m

      at Object.toBe (test/main.test.js:19:25)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        1.075 s
Ran all test suites.
