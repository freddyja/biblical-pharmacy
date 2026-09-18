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
      scientificName: "*Punica granatum* L. (Lythraceae; formerly Punicaceae)",
      scientificNote:
        "Hebrew *rimmon* is securely identified with the cultivated pomegranate. The same fruit appears among the seven species of the Promised Land (Deuteronomy 8:8), on the high priest’s robe, and in Solomon’s temple ornament—food, symbol, and sacred craft together.",
      commonName: "Pomegranate; rimmon (Hebrew); granada",
      benefits: "Fruit of abundance — traditional food of vitality & richly pigmented arils",
      botanicalSummary:
        "A large deciduous shrub or small tree with glossy leaves, scarlet funnel-shaped flowers, and a leathery-skinned fruit packed with jewel-like arils (seed-covered pulp). The rind is thick and tannin-rich; the juice is tart-sweet and deeply red from polyphenols. Fresh arils pop with juice; dried peel is astringent and bitter.",
      intro:
        "When the spies returned from Canaan, they carried pomegranates as proof that the land was rich (Numbers 13:23). God named the pomegranate among the gifts of the Promised Land (Deuteronomy 8:8), and Israel wove its shape into priestly garments and temple capitals—fruit as both food and holy art. Traditional kitchens prized the arils and juice; folk practice sometimes used the astringent rind for diarrhea and sore-throat gargles. Modern interest centers on **punicalagins**, **ellagic acid**, and other polyphenols studied for antioxidant and heart-health markers. A fruit of abundance—not a capsule to replace medical care.",
      region:
        "Native to the region from Iran through the Himalayan foothills; long cultivated across the Mediterranean, Levant, North Africa, and warm-temperate gardens worldwide. Biblical-era orchards of Israel and the wider Near East prized the fruit.",
      identityNotes: [
        "**Hebrew *rimmon*:** Standard botanical identification is *Punica granatum*—not a later English substitution.",
        "**Promised Land fruit:** Listed with wheat, barley, vines, figs, olives, and honey in Deuteronomy 8:8.",
        "**Sacred ornament:** Pomegranates of blue, purple, and scarlet decorated the high priest’s robe (Exodus 28:33–34; 39:24–26) and the bronze capitals of Solomon’s temple (1 Kings 7:18–20).",
      ],
      ancientUses: [
        "**Spies’ evidence:** Clusters of grapes, pomegranates, and figs brought from Eshcol as signs of Canaan’s fruitfulness (Numbers 13:23).",
        "**Priestly robe & temple:** Pomegranate motifs on Aaron’s hem and on temple pillars—beauty and abundance in worship.",
        "**Song of Songs:** The fruit and orchard of pomegranates appear in love poetry of the ancient Near East (e.g., Song of Songs 4:3, 13; 6:7, 11; 8:2).",
        "**Food of the land:** Fresh arils, juice, and later thickened molasses (*dibs rumman*) in Levantine kitchens.",
        "**Classical folk medicine:** Dioscorides and later writers note the astringent rind and fruit for digestive complaints, worms, and mouth rinses—historical practice, not a modern protocol.",
        "**Symbol:** Across the Near East, a sign of fertility, blessing, and plenty—read in Scripture as God’s provision, not a charm.",
      ],
      modernResearch: [
        "NCCIH notes **limited but interesting** human research, often using **juice** rather than peel or capsules; many claims remain unproven.",
        "Some trials suggest pomegranate juice may modestly affect **blood-pressure** or other cardiovascular markers; evidence is mixed and **not** a substitute for heart treatment.",
        "Laboratory and review interest focuses on polyphenols (punicalagins, ellagic acid) and antioxidant activity—this does **not** equal a proven clinical “cure.”",
        "Traditional uses for parasites, diarrhea, or wounds have **not** been established as modern medical treatments.",
        "Juice as food is the best-studied form; concentrated peel, bark, or root preparations are a different (and potentially harsher) material.",
      ],
      sideEffects:
        "Fruit and juice are generally well tolerated as food. Juice is acidic and may bother reflux or sensitive teeth. Digestive upset and, rarely, allergy can occur. NCCIH cautions that **root, stem, and peel** may be unsafe in large amounts because they contain harsher constituents. Talk with a clinician before regular medicinal juice or extracts if you take **warfarin**, blood-pressure medicines, or other prescriptions—interaction reports exist though they are not all confirmed. This is educational food history, not a treatment plan.",
      partsUsed:
        "Arils (pulp-covered seeds) and expressed juice as food; dried rind/peel in traditional astringent preparations (use caution). Flowers appear in some folk uses. Avoid casual use of root or bark.",
      preparations: [
        "**Fresh fruit:** Score the rind, break open, and eat the arils (seeds may be swallowed with the pulp).",
        "**Juice:** Press or blend arils and strain; dilute with water if the flavor is intense. Prefer food-grade juice without unlisted concentrates.",
        "**Culinary molasses:** Traditional Levantine pomegranate molasses for dressing and stews—food, not medicine.",
        "**Dried peel tea (historical):** A strongly astringent folk infusion of rinsed dried rind—educational tradition only; do not treat as a parasite or diarrhea remedy.",
        "**Storage:** Whole fruit cool and dry; juice refrigerated and used promptly; dried peel in airtight jars away from light.",
      ],
      dosage: [
        "**Food:** A serving of arils or about **4–8 oz (120–240 mL)** juice with meals is a common food-level amount in studies and kitchens—not a prescribed “dose.”",
        "**Peel / bark / root:** **Do not** self-dose large amounts; these parts are not equivalent to eating the fruit.",
        "**Extracts & capsules:** Follow a reputable label and clinician advice; they are **not** proven treatments for heart disease, cancer, or infection.",
        "Do not use pomegranate products to replace prescribed cardiac, blood-pressure, or cancer care.",
      ],
      traditionalUses:
        "Celebrated across the ancient Near East as a symbol of abundance and vitality. Traditionally valued for its richly pigmented arils and rind, long associated with supporting general wellness and circulation in folk herbal practice.",
      prepNote:
        "Enjoy fresh arils, pressed juice diluted with water, or—only as historical education—modest dried-peel tea. Seeds may be eaten with the aril. Store fruit in a cool place.",
      emoji: "🍎",
      icon: "pomegranate",
    },
    {
      id: "coriander",
      name: "Coriander",
      verse: "Exodus 16:31",
      verseText:
        "And the house of Israel called the name thereof Manna: and it was like coriander seed, white; and the taste of it was like wafers made with honey.",
      scientificName: "*Coriandrum sativum* L. (Apiaceae / parsley family)",
      scientificNote:
        "Hebrew *gad* in Exodus 16:31 and Numbers 11:7 is the usual identification for coriander seed—the pale, round fruit to which manna was compared. Leaf (cilantro) and seed are the same species at different stages, not two different biblical plants.",
      commonName: "Coriander; cilantro (fresh leaf); Chinese parsley; dhanyaka (Ayurvedic name for the fruit)",
      benefits: "Seed of manna’s likeness — traditional kitchen spice & after-meal ease",
      botanicalSummary:
        "An annual herb with lacy lower leaves (cilantro) and more thread-like upper leaves; umbels of small white to pale-pink flowers yield round, ridged, pale-tan fruits commonly called seeds. The seed scent is warm-citrus and spicy; the leaf is bright and citrusy—or soapy to people with a well-known odor-receptor variant. Crushing the seed releases a **linalool**-rich aroma.",
      intro:
        "When Israel described manna, they reached for coriander seed—white, round, and familiar from the kitchen (Exodus 16:31; Numbers 11:7). God fed His people in the wilderness with bread they could only compare to a common spice. Coriander has seasoned Egyptian, Levantine, and Mediterranean food for millennia. Folk herbalism used the **carminative** seeds for after-meal “wind” and unsettled digestion. That heritage is culinary and traditional—not a proven “detox,” heavy-metal cleanse, or cure. A humble spice of Scripture, best met first on the plate.",
      region:
        "Native to the eastern Mediterranean and western Asia; now grown worldwide. Biblical-era kitchens of Egypt and Canaan knew the seed well; it remains a staple from the Levant to India and Latin America (as cilantro leaf).",
      identityNotes: [
        "**Manna’s likeness:** Exodus and Numbers compare manna to coriander seed in appearance (and, in Exodus, imply a known household spice).",
        "**One plant, two foods:** Fresh aerial parts are cilantro; ripe dried fruits are coriander seed.",
        "**Not a mystery botanical:** Standard identification is *Coriandrum sativum*, not a lost desert shrub.",
      ],
      ancientUses: [
        "**Scripture’s comparison:** Manna “like coriander seed, white,” with a taste like honey wafers (Exodus 16:31); “as coriander seed” in Numbers 11:7.",
        "**Egyptian & Near Eastern spice:** Seeds recovered from ancient Mediterranean contexts; a seasoning of breads, stews, and pickles.",
        "**Greek & Roman herbalism:** Dioscorides and later writers list coriander among aromatic, digestive kitchen remedies.",
        "**Ayurveda, Unani & Chinese folk use:** Seeds as a traditional digestive (*deepana* / carminative) spice; leaves in cooling culinary preparations.",
        "**Medieval Europe:** Seed in sausages, breads, and gripe-type folk teas—food first, physic second.",
      ],
      modernResearch: [
        "Culinary coriander is widely eaten; **clinical evidence for disease treatment is limited** despite many traditional claims.",
        "Reviews describe laboratory antimicrobial, antioxidant, and digestive-smooth-muscle findings—mostly preclinical.",
        "Small human studies have explored lipids, blood sugar, or digestive comfort; results are preliminary and **not conclusive**.",
        "Cilantro “heavy-metal detox” or chelation claims are **not** established medical fact and should not replace clinical care for poisoning.",
        "Essential-oil chemistry (often **linalool**-rich in seed) is well described; that is flavor chemistry, not a license to swallow oil.",
      ],
      sideEffects:
        "Food amounts of seed and leaf are generally well tolerated. True allergy can occur, especially in people sensitive to other Apiaceae (celery, fennel, caraway, dill). Occupational spice allergy (asthma, hives) is reported. Cilantro’s soapy taste is usually genetic, not an allergy. Concentrated extracts may lower blood sugar or blood pressure in some experimental settings—talk with a clinician if you use medicines for those conditions. **Pregnancy and breastfeeding: stay with food amounts** unless a clinician advises otherwise; concentrated extracts are not well studied. **Coriander essential oil is not for ingestion.** Educational use only.",
      partsUsed:
        "Ripe dried fruit (seed); fresh leaves and young stems (cilantro); occasionally root in some cuisines. Essential oil distilled from the fruit.",
      preparations: [
        "**Culinary seed:** Toast lightly, crush or grind, and add to stews, breads, pickles, and spice blends.",
        "**Fresh leaf:** Chop into salads, salsas, and finishing dishes; heat dulls the aroma—add late.",
        "**Mild seed tea:** Crush **about 1 teaspoon** of seeds, warm them briefly to open the aroma, and steep covered in hot water **5–10 minutes**; strain.",
        "**Storage:** Whole seeds in airtight jars, cool and dark (they keep aroma longer than powder); leaves refrigerated briefly or used fresh.",
        "**Essential oil:** Flavoring or diluted external aroma only when professionally appropriate—**never swallow** as a home remedy.",
      ],
      dosage: [
        "**Culinary:** Use freely as a kitchen spice and herb in meals.",
        "**Seed infusion (traditional educational range):** about **1 teaspoon** (roughly **2 g**) crushed seed per cup, **1–2 cups** after meals when used short-term.",
        "**Powdered seed in traditional herbal literature:** sometimes **1–5 g** up to three times daily—**not** a prescription; prefer food-level use unless guided by a qualified practitioner.",
        "**Essential oil:** **Do not ingest.** Food-flavoring amounts in commercial products are not the same as dropping oil into a cup.",
        "Do not use coriander as a detox protocol, diabetes treatment, or substitute for prescribed care.",
      ],
      traditionalUses:
        "Coriander seed and leaf (cilantro) have been used in biblical-era kitchens and folk traditions to season food and ease after-meal discomfort. Seeds were likened to manna in Scripture.",
      prepNote:
        "Crush seeds lightly and steep as a mild tea, or use fresh leaves in meals. Warm seeds gently to release aroma before brewing. Educational tasting only—not a cleanse.",
      emoji: "🌿",
      icon: "coriander",
    },
    {
      id: "dill",
      name: "Dill",
      verse: "Matthew 23:23",
      verseText:
        "Woe unto you, scribes and Pharisees, hypocrites! for ye pay tithe of mint and anise and cummin…",
      scientificName: "*Anethum graveolens* L. (Apiaceae / parsley family)",
      scientificNote:
        "Greek *anēthon* in Matthew 23:23 is widely identified as dill, though the KJV rendered it “anise.” Garden anise is *Pimpinella anisum*—a related but different spice. This monograph follows the dill identification common among botanists of the Gospels.",
      commonName: "Dill; dill weed; dill seed; biblical “anise” (KJV of *anēthon*)",
      benefits: "Tithed garden herb — traditional digestive comfort & gentle aroma",
      botanicalSummary:
        "A slender annual with blue-green, finely divided, feathery leaves and flat umbels of tiny yellow flowers that ripen into flattened, aromatic fruits (seeds). The scent is fresh, slightly sweet, and anise-like—hence the historic translation overlap. Seed aroma is rich in **carvone**; the green herb also carries **limonene**, **phellandrene**, and related monoterpenes.",
      intro:
        "Jesus named dill among the garden herbs meticulously tithed while justice, mercy, and faith were neglected (Matthew 23:23). The plant was ordinary enough to grow beside mint and cumin, yet carefully counted in religious accounting—even stems and leaves, according to later rabbinic discussion. Mediterranean folk kitchens have long used dill fronds and seeds to season fish, bread, and pickles, and to steep a mild cup for “wind” after meals. A small garden mercy: calming in the cup, not a sedative drug, and never a homemade medicine for infants.",
      region:
        "Native to the Mediterranean and western Asia; cultivated and sometimes wild in the Levant. Now a temperate garden and pickling herb worldwide. Prefers sun and well-drained soil.",
      identityNotes: [
        "**Matthew 23:23 *anēthon*:** Best read as dill (*Anethum graveolens*), not sweet anise.",
        "**KJV “anise”:** Reflects later English spice names; keep cumin and mint as the companion tithed herbs in the same verse.",
        "**Luke 11:42:** A parallel woe lists mint, rue, and garden herbs—same lesson, slightly different kitchen list.",
        "**Isaiah “dill” in some versions:** Hebrew *qetsach* is usually nigella (black cumin), not this plant.",
      ],
      ancientUses: [
        "**Gospel tithe:** Mint, dill (*anēthon*), and cumin counted to the last sprig while weightier matters of the law were left undone (Matthew 23:23).",
        "**Levantine kitchen:** Fresh fronds and seed heads in fish, bread, and preserved vegetables—everyday flavor of the region.",
        "**Greek & Roman herbalism:** Aromatic, carminative seed; Dioscorides-type kitchen medicine for digestion and “wind.”",
        "**Pickling & spice:** Flowering umbels and ripe fruits to flavor cucumbers, vinegar, and breads across the Mediterranean and later Europe.",
        "**Folk “gripe water” tradition:** Dill water historically given for infant colic in some cultures—**do not** dose babies from this page; seek pediatric care.",
        "**Ayurveda:** Seed as a traditional digestive and diuretic spice (*shatapushpa* / related dill uses)—historical, not a diagnosis.",
      ],
      modernResearch: [
        "Dill herb and seed are **GRAS** as foods in the United States; that speaks to culinary safety, not proven drug effects.",
        "Traditional carminative and spasmolytic uses have some laboratory and limited clinical exploration; **human evidence for treating disease remains modest**.",
        "Essential-oil studies report antimicrobial or antioxidant findings in vitro—interesting chemistry, **not** a home infection treatment.",
        "Do not confuse food seasoning with concentrated oil or extracts used in experiments.",
        "No high-quality evidence supports dill as a treatment for anxiety disorders, infection, or infant colic in place of medical care.",
      ],
      sideEffects:
        "Culinary amounts of leaf and seed are generally food-like. Strong teas or the essential oil may irritate mouth or stomach. Allergy is possible, especially with other Apiaceae (celery-carrot-spice family). **Dill essential oil is not for ingestion** as a home remedy. Medicinal (not food) amounts in pregnancy or while breastfeeding: ask a clinician; ordinary cooking is different from concentrated extracts. **Never give herbal preparations to infants** based on this site. Educational information only—not a treatment plan.",
      partsUsed:
        "Fresh and dried leaves (dill weed); ripe fruits (dill seed); flowering umbels. Essential oils separately distilled from herb or seed.",
      preparations: [
        "**Culinary:** Chop fresh fronds into fish, yogurt, potatoes, and salads; add late to keep aroma.",
        "**Infusion (tea):** Steep **1–2 teaspoons** fresh or dried fronds, or **about 1 teaspoon** lightly crushed seed, in hot water **5–8 minutes**, covered; strain. Pair with meals.",
        "**Pickling:** Whole umbels and seeds in vinegar brines—food preservation, not medicine.",
        "**Harvesting:** Cut leafy stems before full seed-set for “weed”; let umbels brown for seed; dry in shade.",
        "**Storage:** Airtight jars, cool and dark; freeze extra fresh fronds if needed.",
        "**Essential oil:** Flavoring or diluted scent only—**not for oral use** as a homemade dose.",
      ],
      dosage: [
        "**Culinary:** Season food freely with leaf and seed.",
        "**Tea (traditional educational range for adults):** **1–2 teaspoons** dried herb or **about 1 teaspoon** crushed seed per cup, up to **2–3 cups** daily short-term with meals.",
        "**Essential oil:** **Never a homemade internal dose.** Commercial food flavoring is not the same as swallowing drops.",
        "Infants and young children: **do not** administer dill preparations from this guide.",
        "Prefer culinary-grade herb; discontinue if you feel unwell; seek professional advice for ongoing digestive symptoms.",
      ],
      traditionalUses:
        "Dill (often linked with anise/dill of the Gospels) was among the garden herbs tithed in Jesus’ day. Folk use centers on its feathery fronds and seeds for gentle digestive comfort and a calming cup.",
      prepNote:
        "Steep fresh or dried fronds and seeds in hot water for 5–8 minutes. Pair with meals; avoid overly strong decoctions. Not for infant dosing.",
      emoji: "🌱",
      icon: "dill",
    },
    {
      id: "spikenard",
      name: "Spikenard",
      verse: "John 12:3",
      verseText:
        "Then took Mary a pound of ointment of spikenard, very costly, and anointed the feet of Jesus, and wiped his feet with her hair: and the house was filled with the odour of the ointment.",
      scientificName:
        "*Nardostachys jatamansi* (D.Don) DC. (Caprifoliaceae; formerly placed in Valerianaceae)",
      scientificNote:
        "Greek *nardos pistikē* (“pure” or “genuine” nard) in John 12:3 and Mark 14:3 is the costly imported ointment of the Gospels. Hebrew *nerd* in Song of Songs belongs to the same perfume tradition. The plant is Himalayan—not native to Israel—which is why a pound of ointment was “very costly.” Later English “spikenard” has also been misapplied to spike lavender; that is a different plant.",
      commonName:
        "Spikenard; nard; Indian nard; jatamansi; muskroot (trade names vary; quality and identity often mixed)",
      benefits: "Costly ointment of devotion — traditional perfume & calming aromatic",
      botanicalSummary:
        "A small perennial of high Himalayan slopes, with clusters of pink to pale-purple flowers and an aromatic rhizome sheathed in fibrous leaf bases. Distilled oil is amber, thick, and warm-earthy or musky-sweet. Characteristic constituents include **sesquiterpenes** such as jatamansone (valeranone). The wild plant is conservation-sensitive; genuine nard has long been imitated with cheaper valerians and lavenders.",
      intro:
        "Mary of Bethany poured a pound of very costly spikenard on Jesus’ feet; the house filled with fragrance (John 12:3; cf. Mark 14:3). Judas objected to the price; Jesus received the act as devotion preparing Him for burial. Song of Songs already knew nard as love’s perfume (1:12; 4:13–14). This is a plant of worship and worth—Himalayan roots carried by incense and spice routes to the Levant. Traditional Ayurvedic practice (*jatamansi*) used the rhizome as a calming aromatic. Scripture’s lesson is costly love, not a protocol to ingest essential oils or to treat disease.",
      region:
        "Alpine Himalaya (India, Nepal, Bhutan, and adjacent highlands of China/Tibet), typically at high elevation on rocky slopes. Ancient trade—not local Israeli gardens—brought the processed ointment westward into Egypt, Rome, and Judea.",
      identityNotes: [
        "**Gospels:** *nardos pistikē*—genuine nard ointment in an alabaster (or similar) flask; Mark notes it could have been sold for more than three hundred denarii (Mark 14:3–5).",
        "**Song of Songs:** Hebrew *nerd* as luxury perfume, not a field herb of Canaan.",
        "**Not spike lavender:** *Lavandula latifolia* and some valerians have been sold as “spikenard”; biblical nard is the Himalayan *Nardostachys* tradition.",
        "**Conservation:** *N. jatamansi* is threatened by overharvest in parts of its range and is listed on **CITES Appendix II**; prefer not to drive wild collection for curiosity.",
      ],
      ancientUses: [
        "**Anointing of Jesus:** Mary’s pound of ointment poured in Bethany (John 12:3; Mark 14:3)—fragrance filling the house as an act of worship.",
        "**Song of Songs:** Nard among the precious scents of love poetry (Song of Songs 1:12; 4:13–14).",
        "**Roman luxury:** Pliny and perfume-makers knew costly nard (*nardinum*); cheaper substitutes were already a problem in antiquity.",
        "**Classical herbalism:** Dioscorides describes nard as a warming aromatic used in perfume and folk recipes for the stomach and other complaints—historical lists, not home protocols.",
        "**Ayurveda & Himalayan tradition:** Rhizome (*jatamansi*) as a traditional nervine, incense, and hair/perfume material—practitioner-guided in its home systems.",
        "**Temple & trade:** An imported luxury of the incense routes, akin in costliness to other Gospel aromatics.",
      ],
      modernResearch: [
        "Laboratory and review papers describe antioxidant, calming, and neuropharmacological interest in *N. jatamansi*—**mostly preclinical**.",
        "Small human studies of jatamansi preparations for sleep or stress markers exist; they are **preliminary** and do not establish a treatment for anxiety, insomnia, or neurological disease.",
        "Essential-oil chemistry (sesquiterpenes, including jatamansone) is documented; commercial “nard” is **frequently adulterated**.",
        "There is **no** high-quality evidence that spikenard prevents or treats medical conditions, and it must never replace mental-health or medical care.",
        "Conservation science is part of the modern story: demand for oil has pressured wild Himalayan populations.",
      ],
      sideEffects:
        "Diluted topical or aromatic use may cause skin irritation or allergy—patch-test a high dilution first. **Never ingest spikenard essential oil.** Internal use of the rhizome is not a kitchen experiment; identity and strength of “nard” products vary widely. Pregnancy, breastfeeding, epilepsy, liver disease, or regular medicines: avoid concentrated nard unless a qualified clinician and aromatherapy professional agree. Keep oils away from children and pets. Because the species is conservation-sensitive, skip casual purchasing of wild-harvested oil. This is educational history of a Gospel perfume—not a sedative prescription.",
      partsUsed:
        "Rhizome and roots; traditional fatty ointments (roots macerated in oil—more likely what filled Mary’s flask than modern steam-distilled essential oil); distilled essential oil in contemporary trade.",
      preparations: [
        "**Historical ointment:** Roots infused in a carrier oil or perfume base for anointing and fragrance—the probable form of New Testament “ointment of spikenard.”",
        "**Diluted aroma today:** If a legally sourced oil is used at all, **1 drop in a teaspoon of carrier oil** for adult external scent only; never undiluted on skin.",
        "**Incense (traditional):** Dried rhizome in some Himalayan and temple practices—ventilate; not for children’s rooms.",
        "**Storage:** Dark glass, tightly capped, cool and away from light.",
        "**Stewardship:** Consider that many readers can honor the Gospel story **without buying** an endangered plant product.",
      ],
      dosage: [
        "**Fragrance / symbolic anointing:** a highly diluted drop for adult external aroma is a cautious ceiling—not a “dose” for disease.",
        "**Essential oil:** **Do not ingest. Do not use undiluted on skin.**",
        "**Internal Ayurvedic preparations:** only under practitioners who can identify genuine *jatamansi* and who accept responsibility for safety—**not DIY from this site**.",
        "Do not use nard as a treatment for anxiety, insomnia, heart disease, or any diagnosis.",
        "If you do not have a clearly legal, traceable source, the educational choice is **not to purchase** the oil.",
      ],
      traditionalUses:
        "A costly aromatic ointment of the New Testament, poured in devotion. Historically prized as a precious perfume oil associated with calm, reverence, and anointing.",
      prepNote:
        "Traditionally used as a diluted aromatic oil for scent and anointing—never ingest essential oils. A drop diluted in carrier oil for fragrance only, and only from a clearly legal source. Conservation-sensitive species.",
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
      scientificName:
        "*Boswellia* spp. — especially *Boswellia sacra* Flueck. (syn. often linked historically with *B. carteri*), *B. papyrifera*, *B. frereana*, and Indian *B. serrata* Roxb.",
      scientificNote:
        "Biblical frankincense is the aromatic oleo-gum-resin of Arabian/African *Boswellia* trees traded on ancient incense routes; *B. sacra* (Southern Arabia / Horn of Africa trade) is the species most often tied to Scripture’s “frankincense,” while *B. serrata* (“Indian frankincense”) is the species most studied in modern joint-health research.",
      commonName:
        "Frankincense; olibanum; sacred incense resin; Indian frankincense (*B. serrata*)",
      benefits:
        "Sacred resin of worship — traditional incense & soothing folk ally",
      botanicalSummary:
        "Frankincense comes from small, drought-hardy trees or shrubs with peeling papery bark. Harvesters make shallow cuts in the trunk; milky sap hardens into pale golden to amber “tears” of fragrant resin. Fresh resin is sticky and balsamic; aged tears are brittle and deeply aromatic when warmed or burned.",
      intro:
        "Few gifts of the Magi are as memorable as frankincense—precious enough to stand beside gold (Matthew 2:11). Long before that night in Bethlehem, the Lord prescribed frankincense in the holy incense of the tabernacle (Exodus 30:34–38), teaching Israel that worship engages scent as well as word. Traditional medicine from Arabia to India valued the same resin for comfort of joints, chest, and digestion. Key constituents include **boswellic acids** (pentacyclic triterpenes) and fragrant essential-oil terpenes. God filled dry hills with trees that “weep” fragrance—an invitation to reverence and careful stewardship, not self-medication.",
      region:
        "Southern Arabia (notably Oman and Yemen), the Horn of Africa (Somalia, Ethiopia, Eritrea), and—for *B. serrata*—dry forests of India and parts of Pakistan. Classical incense trade moved resin westward into Egypt, Israel, Greece, and Rome.",
      ancientUses: [
        "**Sacred incense:** Pure frankincense was a required ingredient of the holy incense compounded “after the art of the apothecary” (Exodus 30:34–38); unauthorized personal perfume use of that exact blend was forbidden.",
        "**Offerings & worship:** Frankincense accompanied grain offerings (e.g., Leviticus 2:1–2, 15–16; 6:15) and appears in temple and prophetic imagery of prayer rising like incense (cf. Psalm 141:2; Revelation 8:3–4 in Christian reading).",
        "**Magi’s gift:** Gold, frankincense, and myrrh presented to the young Jesus (Matthew 2:11)—traditionally read as honor for King, God, and suffering Servant.",
        "**Song of Songs & luxury trade:** Frankincense marks costly perfume and love poetry of the ancient Near East (Song of Songs 3:6; 4:6, 14).",
        "**Egypt, Greece & Rome:** Burned in temples and funerals; Pliny and Dioscorides note aromatic and wound-related folk uses; Egyptian embalming and temple rites prized imported resins.",
        "**Ayurveda & Arabian folk medicine:** *B. serrata* (*shallaki* / salai guggul) traditionally for joint discomfort and inflammatory complaints; Arabian practice used *B. sacra* resin for colds, digestion, oral care, and incense.",
      ],
      modernResearch: [
        "NCCIH and systematic reviews note that oral *Boswellia* extracts have been studied mainly for **osteoarthritis** and inflammatory joint discomfort; several small trials suggest possible benefit for pain and function, but larger, higher-quality studies are still needed.",
        "Preliminary research has explored asthma symptoms and other inflammatory conditions; evidence is limited and not conclusive.",
        "Laboratory interest focuses on boswellic acids and pathways involved in inflammation; this does **not** equal proven clinical “cures.”",
        "Cancer-related research exists (including early work on brain-tumor–related swelling), but NCCIH stresses there is **no** evidence boswellia prevents or treats cancer—and it must never replace oncology care.",
        "Safety data from trials suggest oral standardized extracts are often well tolerated short-term at studied doses; research quality varies by species and product standardization.",
      ],
      sideEffects:
        "Oral *Boswellia* extracts may cause mild digestive upset (nausea, reflux, diarrhea, or constipation), headache, or skin reactions in sensitive people. Interactions are possible with blood-thinning and anti-inflammatory medicines—talk with a clinician if you take warfarin, NSAIDs, or other prescriptions. **Medicinal amounts** of boswellia / frankincense are **not established as safe in pregnancy or breastfeeding**; food-level incense aroma is different from swallowing concentrated extracts. Frankincense **essential oil** is for diluted topical or aromatic use only—**do not ingest**. Smoke from burning resin can irritate lungs; use ventilation and avoid around infants or those with respiratory disease. Educational use only—not a substitute for medical care.",
      partsUsed:
        "Oleo-gum-resin (hardened “tears”) collected from the bark; occasionally bark preparations in traditional systems. Essential oil distilled from the resin.",
      preparations: [
        "**Incense:** Small resin tears on charcoal or an electric incense burner for prayerful atmosphere (ventilate well).",
        "**Chewing resin:** Traditional in some cultures in tiny amounts—only food-grade resin from a trusted source; not for children.",
        "**Standardized capsules / extracts:** Modern *B. serrata* supplements standardized to boswellic acids—choose reputable brands; this is educational context, not a recommendation to self-treat.",
        "**Diluted oil / salve:** Frankincense essential oil heavily diluted in a carrier oil for external fragrance; patch-test first.",
        "**Storage:** Resin in airtight jars, cool and dry, away from light; oils in dark glass, tightly capped.",
      ],
      dosage: [
        "**Incense / aromatic use:** a few small tears as needed for fragrance—not a “dose.”",
        "**Oral *B. serrata* extracts (studied ranges):** often roughly **300–500 mg** standardized extract, **two to three times daily**, or total daily amounts in the ballpark of **1,000 mg** (some trials used up to about **2,400 mg** short-term). Product potency varies widely—**read the label**.",
        "**Essential oil:** **Never oral.** For scent, 1 drop diluted in a teaspoon of carrier oil is a cautious starting point for adult topical aroma only if skin-tolerant.",
        "Do not use medicinal frankincense as a replacement for prescribed arthritis, asthma, or cancer therapies.",
      ],
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
      scientificName:
        "*Commiphora* spp. — chiefly *Commiphora myrrha* (Nees) Engl. (also cited as *C. molmol* in older European monographs); related Arabian/African *Commiphora* species yield true myrrh. (Genesis “myrrh” *lot* may instead mean ladanum from *Cistus*—a separate fragrant resin.)",
      commonName: "Myrrh; bitter myrrh; herbal myrrh gum; murmakki (Unani)",
      benefits: "Bitter resin of anointing & burial — traditional mouth & skin care",
      botanicalSummary:
        "Myrrh is an oleo-gum-resin from thorny, drought-adapted shrubs and small trees of the Burseraceae family. Pale sap darkens to reddish-brown, bitter, aromatic tears or irregular lumps. The scent is warm, balsamic, and slightly medicinal; the taste is distinctly bitter—fitting its ancient name.",
      intro:
        "Myrrh threads through Scripture from the holy anointing oil (Exodus 30:23–25) to the Magi’s gifts (Matthew 2:11) and the burial spices Nicodemus brought (John 19:39). It is a resin of honor, suffering, and farewell—costly, fragrant, and sobering. Traditional healers from Egypt to Greece to Unani and Chinese practice used diluted myrrh for gums, minor wounds, and inflammatory discomfort. Characteristic constituents include **furanosesquiterpenes** and other terpenoids that give myrrh its bitterness and have drawn antimicrobial and anti-inflammatory interest in the lab. Like other gifts of the desert, myrrh reminds us that God provided plants for sacred and practical purposes—always to be handled with humility.",
      region:
        "Native to arid regions of the Horn of Africa (Somalia, Ethiopia, Eritrea) and southern Arabia (Yemen, Oman). Ancient incense and spice routes carried myrrh into Egypt, Israel, Greece, and Rome alongside frankincense.",
      ancientUses: [
        "**Holy anointing oil:** Liquid myrrh was a principal ingredient of the sacred anointing oil Moses was commanded to make (Exodus 30:23–25).",
        "**Perfume & poetry:** Myrrh scents garments and love imagery in Psalm 45:8, Proverbs 7:17, and throughout Song of Songs (e.g., 1:13; 3:6; 4:6, 14; 5:1, 5, 13).",
        "**Magi’s gift:** Presented with gold and frankincense to Jesus (Matthew 2:11).",
        "**Crucifixion:** Wine mixed with myrrh offered to Jesus (Mark 15:23)—likely as a bitter anesthetic draught, which He did not accept.",
        "**Burial:** Nicodemus brought about a hundred pounds of myrrh and aloes to wrap Jesus’ body (John 19:39–40)—a costly act of devotion.",
        "**Egypt & classical medicine:** Embalming, incense, and wound washes; Dioscorides and Galen describe myrrh for mouth, wounds, and respiratory folk use.",
        "**Later herbal traditions:** Tinctures and powders for sore gums, mouth rinses, and topical liniments across European, Unani, and folk pharmacies.",
      ],
      modernResearch: [
        "The European Medicines Agency recognizes traditional **oromucosal and cutaneous** use of myrrh tincture for mouth and throat irritation and minor wounds—based on long-standing use, not modern large-scale trials.",
        "Reviews of *Commiphora myrrha* describe laboratory antimicrobial, anti-inflammatory, antioxidant, and analgesic findings; **clinical evidence in people remains limited**.",
        "Pharmacological interest includes furanosesquiterpenes and interaction with pain pathways in experimental models—interesting, not a proven home treatment for disease.",
        "Some regions have studied specific myrrh preparations (e.g., under medical supervision for parasitic disease); such uses are **not** general DIY protocols and require clinician oversight.",
        "Overall: strong traditional topical / mouth-rinse heritage; modern research is preliminary and must not be overstated.",
      ],
      sideEffects:
        "Diluted topical or mouth-rinse use may cause local stinging, contact dermatitis, or allergic reaction—especially with undiluted tincture or essential oil. Alcohol-based tinctures can irritate mucosa. **Avoid myrrh in pregnancy and while breastfeeding**; traditional and case literature raise concern for uterine stimulation and pregnancy risk. High oral doses have been linked with stomach upset and, in reports, more serious effects—**do not self-dose concentrated myrrh internally**. **Myrrh essential oil is not for ingestion.** Keep away from eyes; do not use on deep or infected wounds without medical care. Children under 12: EMA advises against recommended tincture use. Seek help for persistent mouth sores, fever, or spreading skin infection.",
      partsUsed:
        "Oleo-gum-resin (gummi-resina); essential oil distilled from the resin; traditional tinctures of the gum.",
      preparations: [
        "**Incense / perfume:** Historically burned or compounded with other aromatics (ventilate; not for children’s rooms).",
        "**Tincture (traditional):** Alcohol extract of the gum for diluted mouth rinse or dabbing on minor skin spots—per herbal pharmacy tradition.",
        "**Powdered resin:** Occasionally in tooth powders or balms in historical formulas.",
        "**Salves & liniments:** Diluted myrrh in oils/waxes for external aroma and folk skin care.",
        "**Essential oil:** External aromatic use only, heavily diluted; **never swallow**.",
        "**Storage:** Cool, dry, airtight; protect oils from heat and light.",
      ],
      dosage: [
        "**Oromucosal rinse (EMA traditional guidance for myrrh tincture):** about **0.5–5 mL** tincture diluted in **150 mL** water, as a rinse or gargle **up to 3 times daily**; or dab undiluted tincture sparingly on affected spots with a cotton bud **2–3 times daily**. Stop and seek advice if symptoms last beyond about a week.",
        "**Cutaneous:** dab diluted or (preferably cautious) undiluted tincture on minor furuncles/wounds **2–3 times daily**—not for serious wounds.",
        "**Capsules / internal resins:** only under qualified supervision; do not invent home “parasite cleanse” doses.",
        "**Essential oil:** **Do not ingest.** Dilute heavily for adult external fragrance only if appropriate.",
        "Pregnancy: **avoid.**",
      ],
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
      scientificName: "*Hyssopus officinalis* L. (Lamiaceae / mint family)",
      scientificNote:
        "The Hebrew *ezov* (“hyssop”) of Exodus and the Psalms is often identified by botanists with Syrian oregano (*Origanum syriacum*) or a related Near Eastern mint, not necessarily European garden hyssop. This entry covers *Hyssopus officinalis*, the classic Western herbal “hyssop,” while honoring the biblical plant’s cleansing symbolism.",
      commonName:
        "Hyssop; garden hyssop; biblical cleansing herb (traditional association)",
      benefits:
        "Cleansing herb of Scripture — traditional respiratory & digestive ally",
      botanicalSummary:
        "A compact, evergreen perennial shrublet, usually 1–2 feet tall, with narrow aromatic leaves and spikes of blue-violet (sometimes pink or white) flowers. The whole plant carries a warm, camphoraceous, mint-like scent when crushed.",
      intro:
        "For generations, hyssop has been remembered as a plant of purification—both in the language of Scripture and in Mediterranean folk kitchens. God placed fragrant herbs among His creation for purpose and care; as Ezekiel 47:12 pictures leaves “for healing,” traditional communities have long steeped hyssop’s flowering tops for coughs, congestion, and after-meal ease. Its aroma comes largely from a volatile oil rich in pinocamphone, isopinocamphone, and related monoterpenes, along with flavonoids and phenolic acids studied for antioxidant activity. Warm and practical—not a miracle cure—hyssop invites respectful, modest use.",
      region:
        "Native to southern Europe and the Mediterranean basin; naturalized and cultivated in temperate gardens across Europe, North Africa, and parts of Asia and North America. Prefers sunny, well-drained, somewhat dry soils.",
      ancientUses: [
        "**Passover / Exodus:** Branches of “hyssop” were used to apply the blood of the Passover lamb to the doorposts (Exodus 12:22)—a vivid image of covering and deliverance.",
        "**Levitical cleansing:** Hyssop appears in purification rites for skin affliction and house cleansing (Leviticus 14:4–7, 49–52) and in Numbers 19:6, 18 with cedar and scarlet yarn for waters of purification.",
        "**Psalm of repentance:** “Purge me with hyssop, and I shall be clean” (Psalm 51:7)—spiritual cleansing language that later Christian readers linked with forgiveness and renewal.",
        "**John’s Gospel:** A sponge of sour wine was lifted to Jesus on the cross “upon hyssop” (John 19:29)—another Scriptural appearance of the plant’s name at a moment of sacrifice.",
        "**Greek & Roman herbalism:** Hippocrates and later writers mentioned hyssop for the chest and digestion; Dioscorides described aromatic, warming uses.",
        "**Medieval & folk Europe:** Infusions and syrups for colds, coughs, and “wind”; Culpeper and later herbalists called it a cleansing, expectorant kitchen herb; flowering tops flavored soups, salads, and cordials.",
      ],
      modernResearch: [
        "Laboratory and review literature describe antimicrobial, antioxidant, and antispasmodic properties of hyssop extracts and essential oil—mostly preclinical (cell or animal) work.",
        "Traditional respiratory (expectorant / anticatarrhal) and digestive (carminative) uses are recognized in herbal monographs such as Health Canada’s hyssop monograph.",
        "A small clinical trial of hyssop syrup as an add-on in mild-to-moderate asthma has been published; results were mixed, and some participants with dry cough stopped because of worsened coughing or breathing—evidence remains limited, not definitive.",
        "Essential-oil constituents (notably pinocamphone / isopinocamphone) are well documented as convulsant at high exposure—central to modern safety warnings about ingesting the oil.",
      ],
      sideEffects:
        "Culinary amounts of the dried herb are generally considered food-like when used occasionally. Strong medicinal teas or extracts may cause stomach upset, dry mouth, or throat irritation in sensitive people. **Do not use in pregnancy**; ask a clinician before use while breastfeeding. People with seizure disorders, epilepsy, or a history of convulsions should avoid hyssop essential oil entirely and use the herb only with professional guidance. **Never take hyssop essential oil by mouth**—it has been associated with seizures and serious toxicity. Stop use and seek care if breathing worsens, rash develops, or unusual neurological symptoms appear. This is educational information, not a treatment plan.",
      partsUsed:
        "Flowering aerial parts (herb tops)—leaves and flowering spikes.",
      preparations: [
        "**Culinary:** Fresh or dried leaves sparingly in salads, bean dishes, soups, and herbal vinegars (strong flavor—start small).",
        "**Infusion (tea):** Steep dried flowering tops in hot (not violently boiling) water, covered, 5–10 minutes; strain.",
        "**Syrup / honey:** Traditional folk preparation combining a mild infusion with honey for cough support (educational tradition, not a cure).",
        "**Harvesting:** Cut flowering tops on a dry morning; hang in small bundles out of direct sun until crisp.",
        "**Storage:** Airtight jars, cool and dark; best within about one year for aroma.",
        "**Essential oil:** Aromatherapy / external use only when professionally advised and properly diluted—**not for oral use**.",
      ],
      dosage: [
        "Traditional educational ranges (adults; not medical prescriptions):",
        "**Dried herb top:** about **1–2 teaspoons** (roughly 1–2 g) per cup of tea, up to **2–3 cups** daily when used short-term—or, per some herbal monographs, **3–16 g dried herb per day**, not exceeding about **4 g in a single dose**.",
        "**Tincture / fluid extract:** follow a reputable product label and a qualified herbalist’s guidance.",
        "**Essential oil:** **Do not ingest.** If used at all, only highly diluted topical or inhalation under trained guidance; keep away from children and pets.",
        "Prefer culinary-grade herb; discontinue if you feel unwell; seek professional advice for ongoing symptoms.",
      ],
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
      scientificName:
        "*Aloe vera* (L.) Burm.f. (syn. *Aloe barbadensis* Mill.) — and, in many Old Testament verses, fragrant agarwood (*Aquilaria* spp.)",
      scientificNote:
        "This monograph focuses on *Aloe vera* for practical herbal education while clearly separating it from Old Testament lignum aloes. Do not assume every “aloe” in a Bible translation means the modern houseplant—context usually points to costly imported fragrance.",
      commonName:
        "Aloe vera; medicinal aloe; (Scripture) aloes, lign-aloes, eaglewood / agarwood when referring to biblical aromatic wood",
      benefits:
        "Soothing leaf of tradition — gel for skin; latex is a strong laxative (use caution)",
      botanicalSummary:
        "*Aloe vera* is a stemless or short-stemmed succulent forming a rosette of thick, fleshy, gray-green leaves edged with soft teeth; tubular yellow flowers rise on tall spikes in season. The leaf holds a clear inner gel and, just under the rind, a yellow bitter latex. By contrast, biblical lignum aloes is dense, resinous **wood** from tropical *Aquilaria* trees—valued for perfume, not kitchen gel.",
      intro:
        "Whether in Nicodemus’s costly burial spices (John 19:39) or in the perfume lists of Psalm 45:8, Proverbs 7:17, and Song of Songs 4:14, “aloes” speak of honor, fragrance, and devotion. Separately, God also gave hot-land peoples the gel-filled aloe leaf—used from Egypt and Greece to China for soothing skin. Modern *Aloe vera* gel is rich in **polysaccharides** (including acemannan), while the latex contains **anthraquinone laxatives** (aloins). Two gifts, often confused by name: perfume wood in many Bible verses, and a healing-looking succulent in the garden—both worth understanding with care.",
      region:
        "*Aloe vera*—likely originated on the Arabian Peninsula; now cultivated worldwide in subtropical and tropical climates (Mediterranean, India, Mexico, southern U.S., Caribbean, Africa). Agarwood (*Aquilaria*)—Southeast Asia and parts of South Asia (the lignum aloes of classical trade).",
      identityNotes: [
        "**Biblical “aloes” / lignum aloes (Old Testament):** Most scholars identify Hebrew *’ahalim / ’ahaloth* with fragrant **agarwood** (*Aquilaria* spp., e.g. *A. malaccensis* / historically *A. agallocha*)—aromatic heartwood, **not** the succulent gel plant.",
        "**John 19:39 “aloes”:** Debated—some prefer the same aromatic wood used with myrrh for burial perfume; others suggest a true *Aloe* (e.g. Socotrine aloe, *Aloe perryi* / related species) known in antiquity for bitter juice and embalming.",
        "**Modern “God’s pharmacy” aloe:** *Aloe vera* (L.) Burm.f. (syn. *Aloe barbadensis* Mill.)—the familiar medicinal succulent. This monograph focuses on *Aloe vera* for practical herbal education while clearly separating it from Old Testament lignum aloes.",
      ],
      ancientUses: [
        "**Old Testament fragrance:** Aloes appear with myrrh and cassia as precious perfume (Psalm 45:8; Proverbs 7:17; Song of Songs 4:14); Numbers 24:6 uses “lign-aloes” in Balaam’s poetic blessing—almost certainly aromatic trees/wood, not gel aloe.",
        "**Burial of Jesus:** Nicodemus brought a mixture of myrrh and aloes, about a hundred pounds (John 19:39)—a lavish, reverent preparation of the body.",
        "**Egypt:** True aloe juices were known for embalming and skin applications in the wider ancient world.",
        "**Greece & Rome:** Dioscorides and others describe bitter aloe for the bowels and for wounds; Greek physicians distinguished healing leaf preparations from strong purgatives.",
        "**China, India & folk tropics:** Long topical use of leaf gel for burns, scrapes, and irritated skin; latex used traditionally as a stimulant laxative.",
        "**Note:** Do not assume every “aloe” in a Bible translation means the modern houseplant—context usually points to costly imported fragrance.",
      ],
      modernResearch: [
        "**Topical gel:** Clinical research suggests aloe gel may support **burn healing** and comfort; smaller studies explore acne, psoriasis, oral lesions, and other skin uses—results vary; gel is not a cure-all.",
        "**Oral gel:** Preliminary interest in blood-sugar and weight-related markers in some small studies; evidence is limited and products differ greatly.",
        "**Latex (anthraquinones):** Effective as a **stimulant laxative**, but safety concerns led the U.S. FDA (2002) to require removal of aloe latex from OTC laxative drug products for lack of adequate safety data.",
        "**Whole-leaf extracts:** IARC has classified **non-decolorized whole-leaf** *Aloe vera* extract as a **possible human carcinogen** (Group 2B) based largely on animal data—another reason to avoid casual oral whole-leaf products.",
        "Distinguish **inner gel** (topical tradition) from **latex / whole leaf** (stronger risks)—labels matter.",
      ],
      sideEffects:
        "**Topical gel** is usually well tolerated; occasional burning, itching, or rash can occur—patch-test first; discontinue if irritation appears. **Oral latex or whole-leaf** products can cause cramping, diarrhea, potassium loss, dehydration, and—with overuse—kidney injury; rare hepatitis reports exist with oral leaf extracts. Overuse may interact dangerously with heart medicines such as digoxin. **Pregnancy and breastfeeding: avoid oral aloe** (gel, latex, or whole leaf); discuss any use with a clinician. Children should not take aloe latex. Do not put gel in deep puncture wounds or serious burns without medical care. Agarwood essential oils/woods are fragrance materials—not edible medicines. This guide does not diagnose or prescribe.",
      partsUsed:
        "*Aloe vera:* inner leaf gel; leaf latex (cathartic); whole leaf (not recommended for casual oral use). Biblical lignum aloes: aromatic wood / powdered wood for perfume (historical)—not a modern gel substitute.",
      preparations: [
        "**Fresh leaf gel:** Split a mature outer leaf; scoop clear inner gel for external soothing of minor burns or dry skin (clean leaf; discard yellow latex layer if avoiding laxative constituents).",
        "**Commercial gels & juices:** Choose clear labeling (inner-leaf vs whole-leaf); prefer reputable brands; follow package directions.",
        "**Latex / “aloe bitter”:** Traditional stimulant laxative powders or extracts—**short-term only under professional guidance**, if at all.",
        "**Agarwood (lignum aloes):** Historical incense and perfume chips/oils—aromatic appreciation, not internal herbal dosing.",
        "**Storage:** Use fresh gel promptly or refrigerate briefly; commercial products per label; keep latex preparations away from children.",
      ],
      dosage: [
        "**Topical gel:** Apply a thin layer to clean, unbroken skin as needed for minor irritation; do not use as sole care for severe burns.",
        "**Oral inner-leaf gel products:** Only if labeled food-grade; short-term use has been studied in limited settings—**follow the product label** and clinician advice. There is no single universal “correct” homemade oral dose.",
        "**Dried latex (traditional laxative monograph ranges):** on the order of **50–300 mg dried latex per day** (providing hydroxyanthracene derivatives)—**short-term only**, not beyond a few days without medical advice; **contraindicated in pregnancy, nursing, IBD, undiagnosed abdominal pain, and in children**. Prefer not to self-experiment given modern safety concerns.",
        "**Essential oils of agarwood / aloe preparations:** fragrance or highly diluted external use only—**never ingest essential oils**.",
        "When in doubt, use aloe **on the skin**, not as a swallowed remedy.",
      ],
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
  // Catalog first, featured last so featured monographs win on duplicate ids.
  [...HERBS.catalog, ...HERBS.featured].forEach((h) => map.set(h.id, h));
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
