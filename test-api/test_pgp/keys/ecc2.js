module.exports = (function() {
  var keyDescription = {
    Service: false,//
    FingerPrint: "",//uppsercase+no spaces
    KeySize: "0",// 0 !== false
    PrivKeyPW: "G2SaK_v[ST_hS,-z",//key passphrase to unlock
    PrivKey: (`-----BEGIN PGP PRIVATE KEY BLOCK-----
Version: OpenPGP.js v4.10.4
Comment: https://openpgpjs.org

xYYEXwMi3BYJKwYBBAHaRw8BAQdAAfXO6lu5meapEWHgyjjL0N6NWQ32Ods9
0glMWsHptRz+CQMISoLRHVQMXGRgM1Mbj4T69w2s/14a3EmGw7Na4DUEjlXn
QV1vFDxrCP1AMQtXBACb4M7iHU+22EBk7VmoIUAes+eTRHg9Ri4cUsYs9LwK
9M0vY3JwdGVzdEBwcm90b25tYWlsLmNvbSA8Y3JwdGVzdEBwcm90b25tYWls
LmNvbT7CeAQQFgoAIAUCXwMi3AYLCQcIAwIEFQgKAgQWAgEAAhkBAhsDAh4B
AAoJEP3Ku9NMdjsQOxgA/0RbEQXfilev24Juk+PFPOW6ZJ9W6qBlWo+osdot
12cLAQDwSBG6DL7Fc/aJ3hbBqeMQjE3z9f8MhK4EQBdRGBOKC8eLBF8DItwS
CisGAQQBl1UBBQEBB0Cf8zipkZrBwXP0+fL4REUgEr7SRs9KcLvk8zYwWnM+
fgMBCAf+CQMI4xgojXklHh5gOhvFTNdbVcUsmi7bUqOXoHGgYDdUYKRUDakH
M8rsoXatfEp07XlHOc4Vuy8GjuEU1Qiz73G7CqW8hxoHYeP/BPq3WTXa1cJh
BBgWCAAJBQJfAyLcAhsMAAoJEP3Ku9NMdjsQunUBAIYhsAzZCRPtrsNbY8AZ
ZGj4SiROlLxcLdOiMyXhicMFAQDk7cqja8Ms2ouu8HIKoBAjJU2BxQLyJaAP
A560SEQNAA==
=79RC
-----END PGP PRIVATE KEY BLOCK-----`),//turn to false for services
    PubKey: (``)//pubkey
  };

  return keyDescription;
})();