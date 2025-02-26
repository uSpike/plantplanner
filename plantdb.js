const plants = [
    {
        "id": 0,
        "name": "Black Eyed Susan",
        "picture": "https://images.squarespace-cdn.com/content/v1/666b5a11683916156cbe4532/1718570802470-BCMY44UQI03TOZFIAWWG/1024px-Rudbeckia_hirta_216602109.jpeg",
        "light": { "full": 2, "partial": 2, "shade": 0 },
        "height": "1-3",
        "spacing": 1,
        "bloom": {
        "June": ["Yellow"],
        "July": ["Yellow"],
        "August": ["Yellow"],
        "September": ["Yellow"]
        },
        "soilType": { "clay": 2, "loam": 2, "sand": 2 },
        "soilMoisture": { "wet": 0, "moist": 2, "medium": 2, "dry": 2 },
        "lifecycle": "biannual",
        "otherFactors": { "deerResistance": true }
    },
    {
        "id": 1,
        "name": "Blue False Indigo",
        "picture": "https://images.squarespace-cdn.com/content/v1/666b5a11683916156cbe4532/1718397420052-YXVTV55WAJVVU81XEEDW/Baptisia+australis1.jpeg",
        "light": { "full": 2, "partial": 2, "shade": 0 },
        "height": "3-5",
        "spacing": 2,
        "bloom": {
        "June": ["Purple", "Blue"],
        "July": ["Purple", "Blue"]
        },
        "soilType": { "clay": 2, "loam": 2, "sand": 2 },
        "soilMoisture": { "wet": 0, "moist": 2, "medium": 2, "dry": 0 },
        "lifecycle": "perennial",
        "otherFactors": { "deerResistance": true }
    },
    {
        "id": 2,
        "name": "Brown Eyed Susan",
        "picture": "https://images.squarespace-cdn.com/content/v1/666b5a11683916156cbe4532/1718570038876-AC34UBJSYZH2BI1LFML8/1024px-Rudbeckia_triloba2.jpeg",
        "light": { "full": 2, "partial": 2, "shade": 0 },
        "height": "2-5",
        "spacing": 1.5,
        "bloom": {
        "July": ["Yellow"],
        "August": ["Yellow"],
        "September": ["Yellow"]
        },
        "soilType": { "clay": 0, "loam": 2, "sand": 2 },
        "soilMoisture": { "wet": 0, "moist": 2, "medium": 2, "dry": 0 },
        "lifecycle": "biannual",
        "otherFactors": { "deerResistance": false }
    },
    {
        "id": 3,
        "name": "Butterflyweed",
        "picture": "https://images.squarespace-cdn.com/content/v1/666b5a11683916156cbe4532/1718397138302-3RLT9C3UF9GR7ATL9VS4/butterflyweed1.jpg",
        "light": { "full": 2, "partial": 0, "shade": 0 },
        "height": "2",
        "spacing": 1,
        "bloom": {
        "June": ["Orange"],
        "July": ["Orange"]
        },
        "soilType": { "clay": 2, "loam": 2, "sand": 0 },
        "soilMoisture": { "wet": 0, "moist": 0, "medium": 2, "dry": 2 },
        "lifecycle": "perennial",
        "otherFactors": { "deerResistance": true }
    },
    {
        "id": 4,
        "name": "Common Milkweed",
        "picture": "https://images.squarespace-cdn.com/content/v1/666b5a11683916156cbe4532/1718824076930-T2AHPJM6MEAGIQ05NUM7/PXL_20240619_152240191.MP.jpg",
        "light": { "full": 2, "partial": 2, "shade": 0 },
        "height": "2-4",
        "spacing": 1,
        "bloom": {
        "June": ["Purple", "Pink"],
        "July": ["Purple", "Pink"],
        "August": ["Purple", "Pink"]
        },
        "soilType": { "clay": 2, "loam": 2, "sand": 2 },
        "soilMoisture": { "wet": 0, "moist": 0, "medium": 2, "dry": 2 },
        "lifecycle": "perennial",
        "otherFactors": { "deerResistance": false }
    },
    {
        "id": 5,
        "name": "Culver's Root",
        "picture": "https://images.squarespace-cdn.com/content/v1/666b5a11683916156cbe4532/945ebd2b-39c0-43f4-bff3-9b7a208c9e29/1024px-Veronicastrum_virginicum_NRCS-1.jpeg",
        "light": { "full": 2, "partial": 2, "shade": 2 },
        "height": "3-6",
        "spacing": 1.5,
        "bloom": {
        "July": ["White"],
        "August": ["White"]
        },
        "soilType": { "clay": 2, "loam": 2, "sand": 2 },
        "soilMoisture": { "wet": 0, "moist": 2, "medium": 2, "dry": 0 },
        "lifecycle": "perennial",
        "otherFactors": { "deerResistance": true }
    },
    {
        "id": 6,
        "name": "Golden Alexander",
        "picture": "https://images.squarespace-cdn.com/content/v1/666b5a11683916156cbe4532/1718551337407-SL1HQWLXXL4UVAPDL46Q/PXL_20240529_170227717.jpg",
        "light": { "full": 2, "partial": 2, "shade": 2 },
        "height": "1-2",
        "spacing": 1,
        "bloom": {
        "May": ["Yellow"],
        "June": ["Yellow"]
        },
        "soilType": { "clay": 2, "loam": 2, "sand": 2 },
        "soilMoisture": { "wet": 2, "moist": 2, "medium": 2, "dry": 0 },
        "lifecycle": "perennial",
        "otherFactors": { "deerResistance": true }
    },
    {
        "id": 7,
        "name": "Great Blue Lobelia",
        "picture": "https://images.squarespace-cdn.com/content/v1/666b5a11683916156cbe4532/9f1a7e2b-8160-46a4-86de-e993b95c8c79/signal-2025-02-12-105407_002.jpeg",
        "light": { "full": 2, "partial": 2, "shade": 0 },
        "height": "1-4",
        "spacing": 1,
        "bloom": {
        "July": ["Blue"],
        "August": ["Blue"],
        "September": ["Blue"]
        },
        "soilType": { "clay": 2, "loam": 2, "sand": 2 },
        "soilMoisture": { "wet": 0, "moist": 2, "medium": 2, "dry": 0 },
        "lifecycle": "perennial",
        "otherFactors": { "deerResistance": true }
    },
    {
        "id": 8,
        "name": "Ironweed",
        "picture": "https://images.squarespace-cdn.com/content/v1/666b5a11683916156cbe4532/1718552184245-DZV2QU4WKN2RNBWILVR6/1024px-Tall_Ironweed%2C_August_2017--Jessie_Snow_%2825353353587%29.jpeg",
        "light": { "full": 2, "partial": 0, "shade": 0 },
        "height": "4-6",
        "spacing": 1.5,
        "bloom": {
        "July": ["Purple"],
        "August": ["Purple"],
        "September": ["Purple"]
        },
        "soilType": { "clay": 2, "loam": 2, "sand": 2 },
        "soilMoisture": { "wet": 0, "moist": 2, "medium": 0, "dry": 0 },
        "lifecycle": "perennial",
        "otherFactors": { "deerResistance": true }
    },
    {
        "id": 9,
        "name": "Lance-Leaf (Sand) Coreopsis",
        "picture": "https://images.squarespace-cdn.com/content/v1/666b5a11683916156cbe4532/224bdd6f-e324-4f2f-98f2-b189aadb80fb/PXL_20240814_214620942%281%29.jpg",
        "light": { "full": 2, "partial": 0, "shade": 0 },
        "height": "1-2",
        "spacing": 1,
        "bloom": {
        "June": ["Yellow"],
        "July": ["Yellow"]
        },
        "soilType": { "clay": 0, "loam": 2, "sand": 2 },
        "soilMoisture": { "wet": 0, "moist": 0, "medium": 2, "dry": 2 },
        "lifecycle": "perennial",
        "otherFactors": { "deerResistance": true }
    },
    {
        "id": 10,
        "name": "Little Bluestem",
        "picture": "https://images.squarespace-cdn.com/content/v1/666b5a11683916156cbe4532/1718567597375-415S2FS7BNK783WCLDBZ/1024px-SchizachyriumScoparium.jpeg",
        "light": { "full": 2, "partial": 0, "shade": 0 },
        "height": "2-3",
        "spacing": 1,
        "bloom": {
        "August": ["Green", "blue"],
        "September": ["Green", "blue"],
        "October": ["Green", "blue"]
        },
        "soilType": { "clay": 0, "loam": 2, "sand": 0 },
        "soilMoisture": { "wet": 0, "moist": 0, "medium": 2, "dry": 2 },
        "lifecycle": "perennial",
        "otherFactors": { "deerResistance": true }
    },
    {
        "id": 11,
        "name": "Meadow Blazingstar",
        "picture": "https://images.squarespace-cdn.com/content/v1/666b5a11683916156cbe4532/1718741552193-7XGZ79GVCWLBP97Q3KUS/1024px-Badlands_Flowers_-_Liatris_ligulistylis_-_Badlands_National_Park_%2835a1fbea-ba9c-4763-a8d9-7bb2ac3864dc%29.jpeg",
        "light": { "full": 2, "partial": 0, "shade": 0 },
        "height": "3-5",
        "spacing": 0.5,
        "bloom": {
        "August": ["Purple"],
        "September": ["Purple"]
        },
        "soilType": { "clay": 0, "loam": 2, "sand": 0 },
        "soilMoisture": { "wet": 0, "moist": 2, "medium": 2, "dry": 0 },
        "lifecycle": "perennial",
        "otherFactors": { "deerResistance": false }
    },
    {
        "id": 12,
        "name": "New England Aster",
        "picture": "https://images.squarespace-cdn.com/content/v1/666b5a11683916156cbe4532/1718463445306-JZ69Q83IVGJAIXWOF3HC/NEAster1.jpeg",
        "light": { "full": 2, "partial": 2, "shade": 0 },
        "height": "3-6",
        "spacing": 1,
        "bloom": {
        "August": ["Purple", "Pink"],
        "September": ["Purple", "Pink"],
        "October": ["Purple", "Pink"]
        },
        "soilType": { "clay": 2, "loam": 2, "sand": 2 },
        "soilMoisture": { "wet": 0, "moist": 0, "medium": 2, "dry": 0 },
        "lifecycle": "perennial",
        "otherFactors": { "deerResistance": true }
    },
    {
        "id": 13,
        "name": "Ohio Goldenrod",
        "picture": "https://images.squarespace-cdn.com/content/v1/666b5a11683916156cbe4532/1718463186347-PYYDZBHIFSU4GEDSW8ZC/Solidago_ohioensis.jpg",
        "light": { "full": 2, "partial": 0, "shade": 0 },
        "height": "3-4",
        "spacing": 1.5,
        "bloom": {
        "August": ["Yellow"],
        "September": ["Yellow"]
        },
        "soilType": { "clay": 2, "loam": 2, "sand": 2 },
        "soilMoisture": { "wet": 0, "moist": 0, "medium": 2, "dry": 0 },
        "lifecycle": "perennial",
        "otherFactors": { "deerResistance": true }
    },
    {
        "id": 14,
        "name": "Ohio Spiderwort",
        "picture": "https://images.squarespace-cdn.com/content/v1/666b5a11683916156cbe4532/1718397200066-BC5N1653ZEG3ZT8D6A9S/PXL_20240609_165842656.MP.jpg",
        "light": { "full": 2, "partial": 2, "shade": 0 },
        "height": "2-4",
        "spacing": 1,
        "bloom": {
        "June": ["Purple", "Blue"],
        "July": ["Purple", "Blue"]
        },
        "soilType": { "clay": 2, "loam": 2, "sand": 2 },
        "soilMoisture": { "wet": 0, "moist": 2, "medium": 2, "dry": 2 },
        "lifecycle": "perennial",
        "otherFactors": { "deerResistance": true }
    },
    {
        "id": 15,
        "name": "Prairie Dropseed",
        "picture": "https://images.squarespace-cdn.com/content/v1/666b5a11683916156cbe4532/1718823629317-YTO7585YTU3ESIEEW8II/PXL_20240619_150115610%7E2.jpg",
        "light": { "full": 2, "partial": 0, "shade": 0 },
        "height": "2-4",
        "spacing": 1.5,
        "bloom": {
        "August": ["Green"],
        "September": ["Green"]
        },
        "soilType": { "clay": 0, "loam": 2, "sand": 2 },
        "soilMoisture": { "wet": 0, "moist": 0, "medium": 2, "dry": 2 },
        "lifecycle": "perennial",
        "otherFactors": { "deerResistance": true }
    },
    {
        "id": 16,
        "name": "Purple Coneflower",
        "picture": "https://images.squarespace-cdn.com/content/v1/666b5a11683916156cbe4532/1718568603472-XTSPDJ7LDKGBSZMC71EC/1024px-Purple_Coneflower_%28Echinacea_purpurea%29-1.jpeg",
        "light": { "full": 2, "partial": 2, "shade": 0 },
        "height": "3-4",
        "spacing": 1,
        "bloom": {
        "July": ["Purple"],
        "August": ["Purple"],
        "September": ["Purple"]
        },
        "soilType": { "clay": 2, "loam": 2, "sand": 2 },
        "soilMoisture": { "wet": 0, "moist": 0, "medium": 2, "dry": 2 },
        "lifecycle": "perennial",
        "otherFactors": { "deerResistance": true }
    },
    {
        "id": 17,
        "name": "Purple Prairie Clover",
        "picture": "https://images.squarespace-cdn.com/content/v1/666b5a11683916156cbe4532/1718398329068-NR8T0N7JBT6KWLPRSE9Z/PXL_20230807_230134543.jpg",
        "light": { "full": 2, "partial": 0, "shade": 0 },
        "height": "1-2",
        "spacing": 1,
        "bloom": {
        "July": ["Purple"],
        "August": ["Purple"]
        },
        "soilType": { "clay": 2, "loam": 2, "sand": 2 },
        "soilMoisture": { "wet": 0, "moist": 0, "medium": 2, "dry": 2 },
        "lifecycle": "perennial",
        "otherFactors": { "deerResistance": true }
    },
    {
        "id": 18,
        "name": "Showy Goldenrod",
        "picture": "https://images.squarespace-cdn.com/content/v1/666b5a11683916156cbe4532/1718463213045-VHFT1ZKG9R1BR2AF2GG3/ShowyGoldenrod.jpeg",
        "light": { "full": 2, "partial": 0, "shade": 0 },
        "height": "2-4",
        "spacing": 1,
        "bloom": {
        "August": ["Yellow"],
        "September": ["Yellow"]
        },
        "soilType": { "clay": 2, "loam": 2, "sand": 0 },
        "soilMoisture": { "wet": 0, "moist": 0, "medium": 2, "dry": 2 },
        "lifecycle": "perennial",
        "otherFactors": { "deerResistance": true }
    },
    {
        "id": 19,
        "name": "Sky Blue Aster",
        "picture": "https://images.squarespace-cdn.com/content/v1/666b5a11683916156cbe4532/230fb5ff-0984-4cb9-890a-b2df2472321f/SBA_pretty_grouping2.jpg",
        "light": { "full": 2, "partial": 2, "shade": 0 },
        "height": "2-3",
        "spacing": 1,
        "bloom": {
        "August": ["Blue"],
        "September": ["Blue"],
        "October": ["Blue"]
        },
        "soilType": { "clay": 0, "loam": 2, "sand": 2 },
        "soilMoisture": { "wet": 0, "moist": 0, "medium": 2, "dry": 2 },
        "lifecycle": "perennial",
        "otherFactors": { "deerResistance": false }
    },
    {
        "id": 20,
        "name": "Smooth Penstemon",
        "picture": "https://images.squarespace-cdn.com/content/v1/666b5a11683916156cbe4532/1718397060947-SAXQXE07THONCY4LDWQJ/smoothpen1.jpg",
        "light": { "full": 2, "partial": 2, "shade": 0 },
        "height": "2-3",
        "spacing": 1,
        "bloom": {
        "June": ["Yellow"],
        "July": ["Yellow"]
        },
        "soilType": { "clay": 2, "loam": 2, "sand": 2 },
        "soilMoisture": { "wet": 0, "moist": 2, "medium": 2, "dry": 0 },
        "lifecycle": "perennial",
        "otherFactors": { "deerResistance": true }
    },
    {
        "id": 21,
        "name": "Stiff Coreopsis",
        "picture": "https://images.squarespace-cdn.com/content/v1/666b5a11683916156cbe4532/1718397473739-CG1QG2NFTRWE1L8A8BNI/stiff_coreopsis.jpeg",
        "light": { "full": 2, "partial": 0, "shade": 0 },
        "height": "2-3",
        "spacing": 1,
        "bloom": {
        "June": ["Yellow"],
        "July": ["Yellow"],
        "August": ["Yellow"]
        },
        "soilType": { "clay": 0, "loam": 2, "sand": 2 },
        "soilMoisture": { "wet": 0, "moist": 0, "medium": 2, "dry": 2 },
        "lifecycle": "perennial",
        "otherFactors": { "deerResistance": false }
    },
    {
        "id": 22,
        "name": "Sweet Joe Pye Weed",
        "picture": "https://images.squarespace-cdn.com/content/v1/666b5a11683916156cbe4532/1718742536852-XSRS4MCUQOUNPJO83A2B/PXL_20230803_232858629%7E4.jpg",
        "light": { "full": 2, "partial": 2, "shade": 2 },
        "height": "4-7",
        "spacing": 1.5,
        "bloom": {
        "August": ["Pink"],
        "September": ["Pink"]
        },
        "soilType": { "clay": 2, "loam": 2, "sand": 2 },
        "soilMoisture": { "wet": 0, "moist": 0, "medium": 2, "dry": 0 },
        "lifecycle": "perennial",
        "otherFactors": { "deerResistance": true }
    },
    {
        "id": 23,
        "name": "Wild Bergamot",
        "picture": "https://images.squarespace-cdn.com/content/v1/666b5a11683916156cbe4532/1718392551470-2AYG76MQNQ781N51EG95/PXL_20220718_231648868_exported_483.jpg",
        "light": { "full": 2, "partial": 2, "shade": 0 },
        "height": "2-5",
        "spacing": 2,
        "bloom": {
        "July": ["Purple"],
        "August": ["Purple"],
        "September": ["Purple"]
        },
        "soilType": { "clay": 2, "loam": 2, "sand": 2 },
        "soilMoisture": { "wet": 0, "moist": 0, "medium": 2, "dry": 2 },
        "lifecycle": "perennial",
        "otherFactors": { "deerResistance": true }
    },
    {
        "id": 24,
        "name": "Wild Quinine",
        "picture": "https://images.squarespace-cdn.com/content/v1/666b5a11683916156cbe4532/110f85bc-24c9-4a40-b1ca-c2c18a386017/PXL_20240906_145013333.jpg",
        "light": { "full": 2, "partial": 0, "shade": 0 },
        "height": "3-5",
        "spacing": 1.5,
        "bloom": {
        "June": ["White"],
        "July": ["White"],
        "August": ["White"],
        "September": ["White"]
        },
        "soilType": { "clay": 2, "loam": 2, "sand": 2 },
        "soilMoisture": { "wet": 0, "moist": 2, "medium": 2, "dry": 0 },
        "lifecycle": "perennial",
        "otherFactors": { "deerResistance": true }
    },
    {
        "id": 25,
        "name": "Wild Senna",
        "picture": "https://images.squarespace-cdn.com/content/v1/666b5a11683916156cbe4532/1718398529987-5MT0W9R84L5Y3M5HSJJA/PXL_20230718_154658400.jpg",
        "light": { "full": 2, "partial": 2, "shade": 0 },
        "height": "4-6",
        "spacing": 2,
        "bloom": {
        "July": ["Yellow"],
        "August": ["Yellow"]
        },
        "soilType": { "clay": 2, "loam": 2, "sand": 2 },
        "soilMoisture": { "wet": 2, "moist": 2, "medium": 2, "dry": 0 },
        "lifecycle": "perennial",
        "otherFactors": { "deerResistance": true }
    }
];