const cashDbItem1 = {
    cardTitle: "Beginner",
    cardData: [
        { name: "Stock Cash", Charges: "8500" },
        { name: "Stock Future", Charges: "11000" },
        { name: "Stock Option", Charges: "11000" },
        { name: "MCX", Charges: "15000" }
    ],
    title: "Beginner",
    caption: "Equitas Research Investment Advisor is a leading stock market advisory company in India Equitas Research Investment Advisor is a leading stock market advisory company in India",
    list1: [
        "You get 5-6 NSE stock , derivative & Commodity market purely intraday recommendations.",
        "Each recommendation has 2 targets and 1 stop Loss.",
        "Nifty & Bank Nifty Trend, Reviews and Support & resistance.",
        "Stocks result updates, RBI Policy updates.",
        "Calls given through SMS and tele phonically",
    ],
    list2: [
        "Do trade with equal investment on each call.",
        "SL is compulsory to maintain.",
        "Above / below Strategy.",
        "Revise SL as per follow up SMS."
    ],
    buy : "cashprice1"
}

const cashDbItem2 = {
    cardTitle: "STANDARD CASH",
    cardData: [
        { name: "Monthly", Charges: "15,000" },
        { name: "Quarterly", Charges: "40,000" },
        { name: "Half Yearly", Charges: "90,000" },
        { name: "Yearly", Charges: "1.60 Lac" }
    ],
    title: "STANDARD CASH",
    caption: "In this pack we cover completely research based intraday calls with 2-3 calls will be provided with two targets one stop loss. Calls are given through well-tested SMS the sector-wise or news based calls are also availed according to clients need. The calls accuracy can be judged in intraday basis.",
    list1: [
        "You get 2-3 NSE cash market recommendations where each recommendation has 2 targets and a stop Loss.",
        "Risk and reward ratio will be 1:1 in percentage terms. (according to market condition ratio can be change).",
        "Follow-up messages of the calls.",
        "Nifty Reviews and Support & resistance.",
        "Stocks in news, Nifty and Bank Nifty Trend and Support and resistance.",
        "Follow up of all news and information."
    ],
    list2: [
        "CALL UPDATE:-",
        "BUY IOC ABOVE 118 SL 116 TGT 120/123.",
        "BACKUP CALL :-",
        "STANDARD CASH UPDATE – IOC BUY CALL OUR FIRST TGT ACHIEVED BOOK PARTIAL PROFIT HIGH 120."
    ],
    buy : "cashprice2"
}

const cashDbItem3 = {
    cardTitle: "PREMIUM CASH",
    cardData: [
        { name: "Monthly", Charges: "25,000" },
        { name: "Quarterly", Charges: "60,000" },
        { name: "Half Yearly", Charges: "2.30 Lac" },
        { name: "Yearly", Charges: "4 Lac" }
    ],
    title: "PREMIUM CASH",
    caption: "This service is designed for traders who want to get higher returns when compared with stock cash regular service. In this service we generate calls in scripts in which bigger movement is expected in intraday. We select the script based on thorough technical and fundamental analysis, so as to get maximum returns out of intraday movement.",
    list1: [
        "We provide you around 1-2 Super Premium Intraday Cash market calls.",
        "Here risk will be lower than reward in percentage term. (according to market condition ratio can be change).",
        "Updates on important news & information.",
        "In this plan we have achieved a high level of accuracy on consistent basis.",
        "Important Global Market Updates.",
        "Telephonic support from 9:00 AM to 6:00 PM."
    ],
    list2: [
        "CALL UPDATE:-",
        "BUY BPCL ABOVE 355 SL 351.50 TGT 359 / 365.",
        "BACKUP CALL :-",
        "BPCL BUY CALL OUR FIRST TGT ACHIEVED BOOK PARTIAL PROFIT HIGH 360."
    ],
    buy : "cashprice3"
}

const cashDbItem4 = {
    cardTitle: "HNI CASH",
    cardData: [
        { name: "Monthly", Charges: "55,000" },
        { name: "Quarterly", Charges: "1.40 Lac" },
        { name: "Half Yearly", Charges: "2.50 Lac" },
        { name: "Yearly", Charges: "4.50 Lac" }
    ],
    title: "HNI CASH",
    caption: "This is our leading pack in Intraday Cash market segment. This service is only for those clients who believe in less number of trades with high accuracy and bigger targets. We recommend you to trade with our experienced expert research team who generate limited number of calls in highly potential stocks to get good returns with minimum number of trades.",
    list1: [
        "We provide you around 1-2 Intraday Cash market calls.",
        "Here risk will be lower than reward in percentage term. (according to market condition ratio can be change).",
        "Updates on important news & information.",
        "In this plan we have achieved a high level of accuracy on consistent basis.",
        "Domestic and Global Market position Overview.",
        "Economic Update."
    ],
    list2: [
        "CALL UPDATE:-",
        "BUY ACC ABOVE 1450 TGT 1470 / 1490 SL- 1437.",
        "BACKUP CALL :-",
        "CRYSTAL CASH UPDATE – ACC BUY CALL OUR FIRST TGT ACHIEVED BOOK PARTIAL PROFIT HIGH 1470."
    ],
    buy : "cashprice4"
}

const cashArr = [cashDbItem1, cashDbItem2, cashDbItem3, cashDbItem4];

const cashDb = new Map([
    ["cash1", cashDbItem1],
    ["cash2", cashDbItem2],
    ["cash3", cashDbItem3],
    ["cash4", cashDbItem4],
]
);
const cashPriceDb = new Map([
    ["cashprice1", cashDbItem1],
    ["cashprice2", cashDbItem2],
    ["cashprice3", cashDbItem3],
    ["cashprice4", cashDbItem4],
]
);


const futureDbItem1 = {
    cardTitle: "PREMIUM INDEX",
    cardData: [
        { name: "Weekly", Charges: "12,000" },
        { name: "Monthly", Charges: "30,000" },
        { name: "Quarterly", Charges: "75,000" },
        { name: "Half Yearly", Charges: "1.20 Lac" },
        { name: "Yearly", Charges: "2.30 Lac" }
    ],
    title: "PREMIUM INDEX",
    caption: "In this service we provide Stock Futures calls with high accuracy. Deep research and strong observations made by our research team in order to give Stock Future tips delivers good returns over trading investments of traders.",
    list1: [
        "We will provide you around 2-3 Intraday Future Market calls.",
        "Risk and reward ratio will be 1:1 in percentage terms. (according to market condition ratio can be change).",
        "Updates on important news & information.",
        "Follow-up messages of the calls.",
        "Nifty Review Support & resistance."
    ],
    list2: [
        "CALL UPDATE :-",
        "BUY GRASIM FUTURE ABOVE 700 SL 695 TGT 705 /715.",
        "BACKUP CALL :-",
        "GRASIM BUY CALL OUR FIRST TGT ACHIEVED BOOK PARTIAL PROFIT HIGH 705.",
        " GRASIM BUY CALL OUR FINAL TGT ACHIEVED ENJOY BOOK FULL PROFIT HIGH 715."
    ],
    buy : "futureprice1"
}

const futureDbItem2 = {
    cardTitle: "HNI INDEX",
    cardData: [
        { name: "Weekly", Charges: "21,000" },
        { name: "Monthly", Charges: "50,000" },
        { name: "Quarterly", Charges: "1.50 lac" },
        { name: "Half Yearly", Charges: "3 Lac" },
        { name: "Yearly", Charges: "5.90 Lac" }
    ],
    title: "HNI INDEX",
    caption: "The Capital Gainer Future service is designed for those customers who can trade with good number of lot and in which we can earn a handsome amount and can diversify the lots to diversify the risk. A tip/ call is being provided after a deep technical and fundamental analysis, so as to get maximum returns in an Intra-day movement.",
    list1: [
        "We provide you around 1-2 Premium Intraday Future market calls.",
        "Here risk will be lower than reward (according to market condition ratio can be change).",
        "In this plan we have achieved a high level of accuracy on consistent basis.",
        "Important Global Market Updates.",
        "Telephonic support will be provided from 9:00 AM to 6:00 PM."
    ],
    list2: [
        "CALL UPDATE :-",
        "BUY HEXAWARE ABOVE 390 SL 386 TGT 394 / 400.",
        "BACKUP CALL :-",
        "HEXAWARE BUY CALL OUR FIRST TGT ACHIEVED BOOK PARTIAL PROFIT HIGH 394.",
        " HEXAWARE BUY CALL OUR FINAL TGT ACHIEVED ENJOY BOOK FULL PROFIT HIGH 400."
    ],
    buy : "futureprice2"
}

const futureDbItem3 = {
    cardTitle: "PREMIUM F&O",
    cardData: [
        { name: "Weekly", Charges: "12,000" },
        { name: "Monthly", Charges: "30,000" },
        { name: "Quarterly", Charges: "75,000" },
        { name: "Half Yearly", Charges: "1.20 Lac" },
        { name: "Yearly", Charges: "2.30 Lac" }
    ],
    title: "PREMIUM F&O",
    caption: "This service is a result of a lot of information derived from volume traders in stock futures. In this service we provide bigger targets for intraday stock futures trading and also telephonic support on position of the traders. In this service utmost care is taken in deciding on levels of calls execution and profit booking, as traders with volume should get proper time to enter and exit the trades. Also the scripts in which calls are provided are voluminous. While generating a crystal call, The capital gainer analysts first analyze broader market, followed by analyzing the sector to which script belongs and its respective sector index, then moving down to analysis of technical patterns and finally the level for buying and selling is generated.Please review the service features to get in depth of value proposition of the crystal futures package:",
    list1: [
        "We provide you around 1-2 Crystal Intraday Futures market calls.",
        "Here risk will be lower than reward (according to market condition ratio can be change).",
        "In this plan we have achieved a high level of accuracy on consistent basis.",
        "Economic Update.",
        "Market trend with Support and resistance."
    ],
    list2: [
        "CALL UPDATE :-",
        "BUY HINDALCO ABOVE 180 TGT 182/185 SL 178.",
        "BACKUP CALL :-",
        "HINDALCO BUY CALL OUR FIRST TGT ACHIEVED BOOK PARTIAL PROFIT HIGH 182."
    ],
    buy : "futureprice3"
}

const futureDbItem4 = {
    cardTitle: "HNI F&O",
    cardData: [
        { name: "Weekly", Charges: "21,000" },
        { name: "Monthly", Charges: "50,000" },
        { name: "Quarterly", Charges: "1.50 Lac" },
        { name: "Half Yearly", Charges: "3 Lac" },
        { name: "Yearly", Charges: "5.90 Lac" }
    ],
    title: "HNI F&O",
    caption: "This service is uniquely designed for index traders who trade in Nifty and Bank Nifty Future. The Capital Gainer Investment Advisory provides best tips to day traders for making money. We have a team of analysts who are specialized in Tracking Index and to make complete global track of all the national and international events and Major Sectors.",
    list1: [
        "We provide you around 1-2 Intraday Nifty Future or bank nifty future calls on an average basis Follow-up messages of the calls.",
        "World Market, Singapore Nifty Updates.",
        "We have achieved a high level of accuracy in this plan on consistent basis.",
        "Economic Update.",
        "We will be Provide Nifty Review Support & resistance level."
    ],
    list2: [
        "CALL UPDATE :-",
        "INDEX FUTURE – BUY NIFTY ABOVE 11150 TGT 11190 /11250 SL 11120.",
        "BACKUP CALL :-",
        "INDEX FUTURE UPDATE – NIFTY BUY CALL OUR FIRST TGT ACHIEVED BOOK PARTIAL PROFIT HIGH 11195."
    ],
    buy : "futureprice4"
}

const futureDbItem5 = {
    cardTitle: "STANDARD F&O",
    cardData: [
        { name: "Monthly", Charges: "28,000" },
        { name: "Quarterly", Charges: "70,000" },
        { name: "Half Yearly", Charges: "1.50 Lac" },
        { name: "Yearly", Charges: "2.90 Lac" }
    ],
    title: "STANDARD F&O",
    caption: "In this product we recommend to buy a script and to hold it for overnight and sell it on next trading session to get handsome profit from next day’s opening. The Capital Gainer investment advisor. Provide more than 16-20 BTST/STBT calls in a month with an Higher accuracy.",
    list1: [
        "Each call consists of 2 targets and 1 Stop loss..",
        "Proper follow-ups and Market News Updates.",
        "We assure our Clients high accuracy in this plan..",
        "Economic Update.",
        "Domestic and Global Market position Overview"
    ],
    list2: [
        "CALL UPDATE :-",
        "INDEX FUTURE – BUY NIFTY ABOVE 11150 TGT 11190 /11250 SL 11120.",
        "BACKUP CALL :-",
        "INDEX FUTURE UPDATE – NIFTY BUY CALL OUR FIRST TGT ACHIEVED BOOK PARTIAL PROFIT HIGH 11195."
    ],
    buy : "futureprice5"
}

const futureArr = [futureDbItem1, futureDbItem2, futureDbItem3, futureDbItem4, futureDbItem5];

const futureDb = new Map([
    ["future1", futureDbItem1],
    ["future2", futureDbItem2],
    ["future3", futureDbItem3],
    ["future4", futureDbItem4],
    ["future5", futureDbItem5]
]
);

const futurePriceDb = new Map([
    ["futureprice1", futureDbItem1],
    ["futureprice2", futureDbItem2],
    ["futureprice3", futureDbItem3],
    ["futureprice4", futureDbItem4],
    ["futureprice5", futureDbItem5]
]
);

const mcxDbItem1 = {
    cardTitle: "PREMIUM C.O & N.G",
    cardData: [
        { name: "Monthly", Charges: "18,000" },
        { name: "Quarterly", Charges: "45,000" },
        { name: "Half Yearly", Charges: "90,000" },
        { name: "Yearly", Charges: "1.50 Lac" }
    ],
    title: "PREMIUM C.O & N.G",
    caption: "Equitas Research Investment Advisor is a leading stock market advisory company in India Equitas Research Investment Advisor is a leading stock market advisory company in India",
    list1: [
        "list-detail1",
        "list-detail2",
        "list-detail3",
        "list-detail4",
        "list-detail5",
    ],
    list2: [
        "list-detail1",
        "list-detail1",
        "list-detail1",
        "list-detail1"
    ],
    buy : "mcxprice1"
}

const mcxDbItem2 = {
    cardTitle: "C.O & N.G HNI",
    cardData: [
        { name: "Monthly", Charges: "35,000" },
        { name: "Quarterly", Charges: "90,000" },
        { name: "Half Yearly", Charges: "1.75 Lac" },
        { name: "Yearly", Charges: "3.40 Lac" }
    ],
    title: "C.O & N.G HNI",
    caption: "Equitas Research Investment Advisor is a leading stock market advisory company in India",
    list1: [
        "list-detail1",
        "list-detail2",
        "list-detail3",
        "list-detail4",
        "list-detail5",
    ],
    list2: [
        "list-detail1",
        "list-detail1",
        "list-detail1",
        "list-detail1"
    ],
    buy : "mcxprice2"
}

const mcxDbItem3 = {
    cardTitle: "METAL PREMIUM",
    cardData: [
        { name: "Monthly", Charges: "30,000" },
        { name: "Quarterly", Charges: "80,000" },
        { name: "Half Yearly", Charges: "1.50 Lac" },
        { name: "Yearly", Charges: "2.90 Lac" }
    ],
    title: "METAL PREMIUM",
    caption: "Equitas Research Investment Advisor is a leading stock market advisory company in India",
    list1: [
        "list-detail1",
        "list-detail2",
        "list-detail3",
        "list-detail4",
        "list-detail5",
    ],
    list2: [
        "list-detail1",
        "list-detail1",
        "list-detail1",
        "list-detail1"
    ],
    buy : "mcxprice3"
}

const mcxDbItem4 = {
    cardTitle: "HNI METAL",
    cardData: [
        { name: "Monthly", Charges: "65,000" },
        { name: "Quarterly", Charges: "1.70 Lac" },
        { name: "Half Yearly", Charges: "3.20 Lac" },
        { name: "Yearly", Charges: "6.50 Lac" }
    ],
    title: "HNI METAL",
    caption: "Equitas Research Investment Advisor is a leading stock market advisory company in India",
    list1: [
        "list-detail1",
        "list-detail2",
        "list-detail3",
        "list-detail4",
        "list-detail5",
    ],
    list2: [
        "list-detail1",
        "list-detail1",
        "list-detail1",
        "list-detail1"
    ],
    buy : "mcxprice4"
}

const mcxDbItem5 = {
    cardTitle: "BULLIONS PREMIUM",
    cardData: [
        { name: "Monthly", Charges: "90,000" },
        { name: "Quarterly", Charges: "2.50 Lac" },
        { name: "Half Yearly", Charges: "4.50 Lac" },
        { name: "Yearly", Charges: "8.50 Lac" }
    ],
    title: "BULLIONS PREMIUM",
    caption: "Equitas Research Investment Advisor is a leading stock market advisory company in India",
    list1: [
        "list-detail1",
        "list-detail2",
        "list-detail3",
        "list-detail4",
        "list-detail5",
    ],
    list2: [
        "list-detail1",
        "list-detail1",
        "list-detail1",
        "list-detail1"
    ],
    buy : "mcxprice5"
}

const mcxDbItem6 = {
    cardTitle: "BULLIONS HNI",
    cardData: [
        { name: "Monthly", Charges: "2.50 Lac" },
        { name: "Quarterly", Charges: "6.50 Lac" },
        { name: "Half Yearly", Charges: "13.50 Lac" },
        { name: "Yearly", Charges: "25 Lac" }
    ],
    title: "BULLIONS HNI",
    caption: "Equitas Research Investment Advisor is a leading stock market advisory company in India",
    list1: [
        "list-detail1",
        "list-detail2",
        "list-detail3",
        "list-detail4",
        "list-detail5",
    ],
    list2: [
        "list-detail1",
        "list-detail1",
        "list-detail1",
        "list-detail1"
    ],
    buy : "mcxprice6"
}

const mcxArr = [mcxDbItem1, mcxDbItem2, mcxDbItem3, mcxDbItem4, mcxDbItem5, mcxDbItem6];

const mcxDb = new Map([
    ["mcx1", mcxDbItem1],
    ["mcx2", mcxDbItem2],
    ["mcx3", mcxDbItem3],
    ["mcx4", mcxDbItem4],
    ["mcx5", mcxDbItem5],
    ["mcx6", mcxDbItem6]
]
);

const mcxPriceDb = new Map([
    ["mcxprice1", mcxDbItem1],
    ["mcxprice2", mcxDbItem2],
    ["mcxprice3", mcxDbItem3],
    ["mcxprice4", mcxDbItem4],
    ["mcxprice5", mcxDbItem5],
    ["mcxprice6", mcxDbItem6]
]
);

export { cashDb, futureDb, mcxDb, cashArr, futureArr, mcxArr, cashPriceDb, futurePriceDb, mcxPriceDb };