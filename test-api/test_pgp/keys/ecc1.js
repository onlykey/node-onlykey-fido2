module.exports = (function() {
  var keyDescription = {
    Service: false,//
    FingerPrint: "",//uppsercase+no spaces
    KeySize: "0",// 0 !== false
    PrivKeyPW: "G2SaK_v[ST_hS,-z",//key passphrase to unlock
    PrivKey: (`-----BEGIN PGP PRIVATE KEY BLOCK-----
Version: OpenPGP.js v4.10.4
Comment: https://openpgpjs.org

xYYEXwMeqRYJKwYBBAHaRw8BAQdAbnRYP53m7rXE1huNToWCUbxD22TigANr
0JmMV1oxr6L+CQMIyQ8FPhKtk8tgnboheeFbDwnZ2YofKANbTbfOJDwnO8iB
02ZZ9e/L4bRLdjJF2CojqcFZMwYr8VA392F4hjHk8/wK18MyrtKWhDp5jMzz
aM0vY3JwdGVzdEBwcm90b25tYWlsLmNvbSA8Y3JwdGVzdEBwcm90b25tYWls
LmNvbT7CeAQQFgoAIAUCXwMeqQYLCQcIAwIEFQgKAgQWAgEAAhkBAhsDAh4B
AAoJEGJPfHwjnCZ1J6wBAM6imkIVk/pwRqGCVHR8OKPotdSUGlZniNxdsKPg
ri1gAQC8BIQEPQceH+/svleU8sgR33QZiWc8o495axXWR0byBMeLBF8DHqkS
CisGAQQBl1UBBQEBB0DqFr4CpAyaeQPb0OeRpKXIQetRHm2Lr6wbHQ0KDFat
cQMBCAf+CQMIrRWzEbU+zzlg3KiYoolL4+fdh6PgCR5efjeqK47R1sePEsrn
xt4ESUytGo4eZKBNYSkXFbKZuPt0CMkdlDXhw4quWEh940lVNiyQREsakcJh
BBgWCAAJBQJfAx6pAhsMAAoJEGJPfHwjnCZ1NLkA/iMBaMud8CiRRLo1z672
hmWZGTbw4uecHx/DGSGN99v4AQCOPrKyVzyu0IPbVcrBXBzKG1mtnKr8opVH
tZtm/3pFBQ==
=a2/l
-----END PGP PRIVATE KEY BLOCK-----`),//turn to false for services
    PubKey: (``)//pubkey
  };

  return keyDescription;
})();
