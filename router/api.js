const router = require('express').Router();
const { Company } = require('../global');

const companies = [
    new Company('CBA.AX', 'COMMONWEALTH BANK OF AUSTRALIA', 80.72, 698140),
    new Company('SRX.AX', 'SIRTEX MEDICAL LIMITED', 15.2, 216416),
    new Company('ANZ.AX', 'AUSTRALIA AND NEW ZEALAND BANKING GROUP LIMITED', 29.86, 672960),
    new Company('BHP.AX', 'BHP BILLITON LIMITED', 25.95, 675960),
    new Company('WBC.AX', 'WESTPAC BANKING CORPORATION', 32.31, 275960),
    new Company('NAB.AX', 'NATIONAL AUSTRALIA BANK LIMITED', 29.74, 969031),
    new Company('MQG.AX', 'MACQUARIE GROUP LIMITED', 85.12, 369031),
    new Company('QBE.AX', 'QBE INSURANCE GROUP LIMITED', 12.51, 869031),
    new Company('RIO.AX', 'RIO TINTO LIMITED', 62.94, 169031),
    new Company('WES.AX', 'WESFARMERS LIMITED', 40.86, 669031),
    new Company('CSL.AX', 'CSL LIMITED', 95.22, 369031),
    new Company('FMG.AX', 'FORTESCUE METALS GROUP LTD', 61.69, 769031),
    new Company('TLS.AX', 'TELSTRA CORPORATION LIMITED', 47.99, 569031),
    new Company('CWIN.AX', 'CROWN RESORTS LIMITED', 11.38, 269031),
    new Company('ABU.AX', 'ABM RESOURCES NL', 24.41, 169031),
    new Company('AKG.AX', 'ACADEMIES AUSTRALASIA GROUP LIMITED', 16.35, 969031),
    new Company('ACW.AX', 'ACTINOGEN MEDICAL LIMITED', 27.53, 769031),
    new Company('DAU.AX', 'DAMPIER GOLD LIMITED', 41.91, 269031),
    new Company('DTM.AX', 'DART MINING NL', 17.24, 969031),
    new Company('DSX.AX', 'DECIMAL SOFTWARE LIMITED', 67.38, 469031),
    new Company('D13.AX', 'DEPARTMENT 13 INTERNATIONAL LTD', 21.54, 369031),
    new Company('DDR.AX', 'DICKER Company LIMITED', 67.18, 869031),
    new Company('GEM.AX', 'G8 EDUCATION LIMITED', 92.56, 169031),
    new Company('GDF.AX', 'GARDA DIVERSIFIED PROPERTY FUND', 5.22, 969031),
    new Company('GES.AX', 'GENESIS RESOURCES LIMITED', 20.05, 369031),
    new Company('RAC.AX', 'RACE ONCOLOGY LTD', 26.03, 869031),
    new Company('RCG.AX', 'RCG CORPORATION LIMITED', 72.91, 369031),
    new Company('ROG.AX', 'RED SKY ENERGY LIMITED.', 51.32, 769031),
    new Company('RRL.AX', 'REGIS RESOURCES LIMITED', 29.66, 169031),
    new Company('WAK.AX', 'WAKENBY LIMITED', 8.32, 969031),
];

router.get('/', (req, res) => {
    companies.map((e) => e.goChange());
    res.send(JSON.stringify({ companies }));
});
module.exports = router;
