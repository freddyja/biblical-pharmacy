/**
 * Biblical Pharmacy — educational plant catalog
 * Traditional / historical references only. Not medical advice.
 */
const HERBS = {
  featured: [
    {
      id: "pomegranate",
      name: "Pomegranate",
      verse: "Numbers 13:23",
      verseText:
        "And they came unto the brook of Eshcol, and cut down from thence a branch with one cluster of grapes… and they brought of the pomegranates, and of the figs.",
      benefits: "Antioxidant, heart health",
      traditionalUses:
        "Celebrated across the ancient Near East as a symbol of abundance and vitality. Traditionally valued for its richly pigmented arils and rind, long associated with supporting general wellness and circulation in folk herbal practice.",
      prepNote:
        "Enjoy fresh arils, pressed juice diluted with water, or dried peel tea. Seeds may be eaten whole. Store fruit in a cool place.",
      emoji: "🍎",
      icon: "pomegranate",
    },
    {
      id: "coriander",
      name: "Coriander",
      verse: "Exodus 16:31",
      verseText:
        "And the house of Israel called the name thereof Manna: and it was like coriander seed, white; and the taste of it was like wafers made with honey.",
      benefits: "Digestive, detox support",
      traditionalUses:
        "Coriander seed and leaf (cilantro) have been used in biblical-era kitchens and folk traditions to season food and ease after-meal discomfort. Seeds were likened to manna in Scripture.",
      prepNote:
        "Crush seeds lightly and steep as a mild tea, or use fresh leaves in meals. Warm seeds gently to release aroma before brewing.",
      emoji: "🌿",
      icon: "coriander",
    },
    {
      id: "dill",
      name: "Dill",
      verse: "Matthew 23:23",
      verseText:
        "Woe unto you, scribes and Pharisees, hypocrites! for ye pay tithe of mint and anise and cummin…",
      benefits: "Calming, digestive comfort",
      traditionalUses:
        "Dill (often linked with anise/dill of the Gospels) was among the garden herbs tithed in Jesus’ day. Folk use centers on its feathery fronds and seeds for gentle digestive comfort and a calming cup.",
      prepNote:
        "Steep fresh or dried fronds and seeds in hot water for 5–8 minutes. Pair with meals; avoid overly strong decoctions.",
      emoji: "🌱",
      icon: "dill",
    },
    {
      id: "spikenard",
      name: "Spikenard",
      verse: "John 12:3",
      verseText:
        "Then took Mary a pound of ointment of spikenard, very costly, and anointed the feet of Jesus, and wiped his feet with her hair: and the house was filled with the odour of the ointment.",
      benefits: "Calming, precious oil",
      traditionalUses:
        "A costly aromatic ointment of the New Testament, poured in devotion. Historically prized as a precious perfume oil associated with calm, reverence, and anointing.",
      prepNote:
        "Traditionally used as a diluted aromatic oil for scent and anointing—never ingest essential oils without qualified guidance. A drop diluted in carrier oil for fragrance only.",
      emoji: "💧",
      icon: "spikenard",
    },
  ],

  catalog: [
    {
      id: "frankincense",
      name: "Frankincense",
      verse: "Matthew 2:11",
      verseText:
        "…they presented unto him gifts; gold, and frankincense, and myrrh.",
      benefits: "Resin incense, reflective calm",
      traditionalUses:
        "Sacred resin of ancient temples and the Magi’s gift. Burned as incense for worship and reflection; gum resin traditionally used in aromatic and folk preparations.",
      prepNote:
        "Use as incense resin on charcoal, or dilute resin extract for fragrance. Educational use only—do not ingest raw resin.",
      emoji: "✨",
    },
    {
      id: "myrrh",
      name: "Myrrh",
      verse: "Song of Solomon 1:13",
      verseText:
        "A bundle of myrrh is my wellbeloved unto me; he shall lie all night betwixt my breasts.",
      benefits: "Anointing resin, skin care tradition",
      traditionalUses:
        "Bitter aromatic resin used in biblical anointing oils, burial preparations, and perfume. Folk herbalists have long valued diluted myrrh for topical aromatic care.",
      prepNote:
        "Historically mixed into balms and diluted tinctures for external aroma. Not for undiluted skin use or self-diagnosis.",
      emoji: "🪵",
    },
    {
      id: "hyssop",
      name: "Hyssop",
      verse: "Psalm 51:7",
      verseText: "Purge me with hyssop, and I shall be clean…",
      benefits: "Cleansing herb of Scripture",
      traditionalUses:
        "Symbol of spiritual cleansing in the Psalms and Passover narratives. In folk practice, leafy sprigs were steeped as a simple herbal infusion.",
      prepNote:
        "Mild leaf tea; use culinary-grade dried herb. Keep infusions light and infrequent for educational tasting only.",
      emoji: "🍃",
    },
    {
      id: "aloes",
      name: "Aloes",
      verse: "John 19:39",
      verseText:
        "And there came also Nicodemus… and brought a mixture of myrrh and aloes, about an hundred pound weight.",
      benefits: "Burial spices, soothing tradition",
      traditionalUses:
        "Costly aromatic wood/spice (often linked with aquilaria or bitter aloe traditions) brought for Jesus’ burial. Associated with fragrance and soothing preparations in antiquity.",
      prepNote:
        "Distinguish biblical aloes (aromatic spice) from modern aloe vera gel. Use only clearly labeled culinary or topical products as directed on packaging.",
      emoji: "🪴",
    },
    {
      id: "mint",
      name: "Mint",
      verse: "Luke 11:42",
      verseText:
        "But woe unto you, Pharisees! for ye tithe mint and rue and all manner of herbs…",
      benefits: "Fresh breath, digestive ease",
      traditionalUses:
        "Garden mint was among herbs tithed in the Gospels. Universally used in food and tea for a cooling, refreshing cup after meals.",
      prepNote:
        "Steep fresh leaves 5 minutes. Excellent culinary herb; enjoy as tea or garnish.",
      emoji: "🌿",
    },
    {
      id: "garlic",
      name: "Garlic",
      verse: "Numbers 11:5",
      verseText:
        "We remember the fish, which we did eat in Egypt freely; the cucumbers, and the melons, and the leeks, and the onions, and the garlick.",
      benefits: "Kitchen staple, traditional vitality",
      traditionalUses:
        "Recalled fondly by Israel in the wilderness as food of Egypt. A foundational culinary bulb in Mediterranean and Near Eastern cooking and folk kitchens.",
      prepNote:
        "Crush and rest cloves before cooking to develop flavor. Culinary use in meals is the traditional approach.",
      emoji: "🧄",
    },
    {
      id: "fig",
      name: "Fig",
      verse: "Isaiah 38:21",
      verseText:
        "For Isaiah had said, Let them take a lump of figs, and lay it for a plaister upon the boil, and he shall recover.",
      benefits: "Fruit of Scripture, gentle fiber",
      traditionalUses:
        "Figs appear throughout Scripture—from Eden imagery to Hezekiah’s poultice. Dried figs remain a nourishing fruit of the biblical lands.",
      prepNote:
        "Eat fresh or dried as food. Historical poultice references are educational, not treatment instructions.",
      emoji: "🫒",
    },
    {
      id: "olive",
      name: "Olive Oil",
      verse: "James 5:14",
      verseText:
        "Is any sick among you? let him call for the elders of the church; and let them pray over him, anointing him with oil in the name of the Lord.",
      benefits: "Anointing oil, nourishing fat",
      traditionalUses:
        "Olive oil saturates biblical life—light, food, and sacred anointing. Extra-virgin oil remains a cornerstone of Mediterranean nourishment.",
      prepNote:
        "Use quality extra-virgin olive oil in cooking and salads. Anointing practices are matters of faith tradition, not medical protocol.",
      emoji: "🫒",
    },
    {
      id: "cumin",
      name: "Cumin",
      verse: "Isaiah 28:25",
      verseText:
        "When he hath made plain the face thereof, doth he not cast abroad the fitches, and scatter the cummin…",
      benefits: "Warming spice, digestive kitchen ally",
      traditionalUses:
        "A carefully sown field spice in Isaiah’s agricultural parable and among New Testament tithed herbs. Warm, earthy seeds flavor breads and stews.",
      prepNote:
        "Toast seeds lightly before grinding. Use as a culinary spice in everyday cooking.",
      emoji: "🌾",
    },
    {
      id: "mustard",
      name: "Mustard",
      verse: "Matthew 13:31",
      verseText:
        "The kingdom of heaven is like to a grain of mustard seed, which a man took, and sowed in his field…",
      benefits: "Tiny seed, warming condiment",
      traditionalUses:
        "Jesus’ parable of the mustard seed highlights faith’s growth from something small. Mustard greens and seeds have long been kitchen staples of the region.",
      prepNote:
        "Use seeds in pickling and condiments; young greens in salads. Culinary amounts only.",
      emoji: "🟡",
    },
    {
      id: "balm-gilead",
      name: "Balm of Gilead",
      verse: "Jeremiah 8:22",
      verseText: "Is there no balm in Gilead; is there no physician there?",
      benefits: "Healing balm of poetry & hope",
      traditionalUses:
        "A fragrant resinous balm from the region of Gilead, evoked by Jeremiah as a metaphor for restoration. Later Christian hymnody kept the image of healing hope alive.",
      prepNote:
        "Historical balsams vary by species. Seek reputable botanical sources if exploring aromatic resins; educational context only.",
      emoji: "🧴",
    },
    {
      id: "cedar",
      name: "Cedar of Lebanon",
      verse: "Psalm 92:12",
      verseText: "The righteous shall flourish like the palm tree: he shall grow like a cedar in Lebanon.",
      benefits: "Strength, aromatic wood",
      traditionalUses:
        "Towering cedars supplied temple timber and symbolized strength and flourishing. Aromatic wood and oils have been used historically for fragrance and craft.",
      prepNote:
        "Appreciate as Scripture’s tree of strength. Essential oils, if used, only heavily diluted for scent—never ingest.",
      emoji: "🌲",
    },
  ],
};

function getAllHerbs() {
  const map = new Map();
  [...HERBS.featured, ...HERBS.catalog].forEach((h) => map.set(h.id, h));
  return [...map.values()];
}

function findHerb(id) {
  return getAllHerbs().find((h) => h.id === id);
}

// Export for browsers without modules and for module use
if (typeof window !== "undefined") {
  window.HERBS = HERBS;
  window.getAllHerbs = getAllHerbs;
  window.findHerb = findHerb;
}
