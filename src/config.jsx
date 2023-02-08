export const config = {
    appName: 'ContractDeployer',
    contract: {
        address: '0xbE5091ca8eE651808758A8804eEA71F9A6B1F170',
        jsonFile: 'Dhakon.json',
    },

    network: {
        name: 'Polygon Mumbai',
        id: 80001
    },

    token: {
        name: 'MATIC',           // 'Ether'   
        platform: 'Polygon',     // 'Ethereum'
        shortName: 'MATIC',      // 'Ether'
        unitName: 'MATIC',       // 'ETH'
        explorerUrl: 'https://mumbai.polygonscan.com/tx/'
    },
 }
