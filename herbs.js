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
        "**Hebrew rimmon:** Standard botanical identification is *Punica granatum*—not a later English substitution.",
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
        "**Matthew 23:23 anēthon:** Best read as dill (*Anethum graveolens*), not sweet anise.",
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
      scientificName:
        "*Mentha* spp. (Lamiaceae / mint family) — Levantine horse mint *Mentha longifolia* (L.) L. is the species most often named for Gospel gardens; spearmint (*M. spicata*) and peppermint (*M. × piperita*) are later kitchen stand-ins.",
      scientificNote:
        "Greek *hēduosmon* (“sweet-smelling”) in Matthew 23:23 and Luke 11:42 is garden mint, not a single modern cultivar. Exact first-century species cannot be pinned with certainty. **Pennyroyal** (*Mentha pulegium*) is a different, harsher mint and is **not** a tea to experiment with.",
      commonName:
        "Mint; garden mint; horse mint; spearmint; peppermint (modern culinary hybrids)",
      benefits:
        "Tithed garden herb — traditional cooling leaf for meals, breath & after-dinner ease",
      botanicalSummary:
        "Perennial herbs of damp ground, with square stems, opposite aromatic leaves, and spikes or whorls of small lilac to pink flowers. Bruising the leaf releases a volatile oil; peppermint is rich in **menthol**, spearmint more in **carvone**. Several Near Eastern mints look and smell enough alike that one garden patch could supply the “mint” of the Gospels.",
      intro:
        "Jesus named mint among the tiny garden dues paid with scrupulous care while justice and the love of God were neglected (Luke 11:42; Matthew 23:23). The plant was ordinary—strewn on floors, chopped into food, steeped after meals—yet counted in religious accounting. God filled wet ditches with a leaf that cools the tongue. Traditional kitchens still use mint as a carminative condiment. That heritage is culinary, not a proven treatment for irritable bowel, infection, or headache, and concentrated peppermint oil is not the same as a handful of leaves in a cup.",
      region:
        "Native and naturalized across the Mediterranean, Levant, and temperate Eurasia; prefers moist soils, stream banks, and irrigated gardens. Horse mint is among the common wild mints of Bible lands; spearmint and peppermint are now grown worldwide.",
      identityNotes: [
        "**Gospel mint:** Greek *hēduosmon* in Matthew 23:23 and Luke 11:42—tithed with dill (or “anise”) and cumin.",
        "**Likely botany:** *Mentha longifolia* (horse mint) is a frequent scholarly identification; other local *Mentha* species could equally have filled a first-century garden.",
        "**Not pennyroyal:** Do not treat *M. pulegium* as the same kitchen mint; it has a separate, more toxic reputation.",
      ],
      ancientUses: [
        "**Gospel tithe:** Mint measured to the last sprig while weightier matters of the law were left undone (Matthew 23:23; Luke 11:42).",
        "**Household fragrance:** Classical and rabbinic notices of mint strewn on floors and in gathering places for its sweet scent.",
        "**Kitchen condiment:** Fresh leaf with meats, salads, yogurt, and cooling drinks across the eastern Mediterranean.",
        "**Greek & Roman herbalism:** Pliny and Dioscorides list mint among warming, digestive, and aromatic kitchen remedies.",
        "**Folk infusions:** Mild leaf teas for after-meal “wind,” breath, and a comforting cup—historical practice, not a diagnosis.",
      ],
      modernResearch: [
        "Culinary mint is widely eaten; **disease-treatment evidence depends on the preparation** and is often limited.",
        "Enteric-coated **peppermint oil** has been studied for irritable-bowel-type discomfort in some trials; that is a specialized product, **not** proof that garden tea treats IBS.",
        "Laboratory work on mint oils describes antimicrobial and antispasmodic findings—preclinical chemistry, not a home infection protocol.",
        "Peppermint may relax the lower esophageal sphincter and worsen **reflux** in some people.",
        "Do not confuse food-level leaf with swallowing essential oil, which has caused serious harm, especially in young children.",
      ],
      sideEffects:
        "Culinary amounts of garden mint are generally food-like. Strong teas or peppermint oil may cause heartburn, mouth or stomach irritation, or allergy. **Do not put peppermint (or other mint) essential oil on an infant’s face or chest**—breathing distress has been reported. People with reflux may feel worse after peppermint. **Pennyroyal is not a substitute kitchen mint** and has a history of severe toxicity. Pregnancy: stay with food amounts of ordinary culinary mint unless a clinician advises otherwise. **Never ingest essential oil.** Educational use only.",
      partsUsed:
        "Fresh and dried leaves (and flowering tops). Essential oil distilled from the herb is a separate, concentrated material.",
      preparations: [
        "**Culinary:** Chop fresh leaves into salads, yogurt, lamb, and fruit; add late to keep aroma.",
        "**Infusion (tea):** Steep **a small handful of fresh leaves** or **1–2 teaspoons dried** in hot water **about 5 minutes**, covered; strain.",
        "**Garnish / breath:** A sprig after meals as food, not medicine.",
        "**Storage:** Use fresh promptly, or dry in shade and keep airtight, cool, and dark.",
        "**Essential oil:** Flavoring or highly diluted scent only—**not a homemade internal dose.**",
      ],
      dosage: [
        "**Culinary:** Use freely as a kitchen herb.",
        "**Tea (traditional educational range for adults):** **1–2 teaspoons** dried leaf (or a few fresh sprigs) per cup, **1–3 cups** with meals when used short-term.",
        "**Peppermint oil capsules:** only if labeled enteric-coated and used under product directions plus clinician advice—**not** the same as steeping leaves.",
        "**Essential oil:** **Do not ingest. Keep away from infants.**",
        "Do not use mint preparations to replace care for digestive disease, reflux, or infection.",
      ],
      traditionalUses:
        "Garden mint was among herbs tithed in the Gospels. Universally used in food and tea for a cooling, refreshing cup after meals.",
      prepNote:
        "Steep fresh leaves about 5 minutes. Excellent culinary herb; enjoy as tea or garnish. Not pennyroyal; never give essential oil to infants.",
      emoji: "🌿",
    },
    {
      id: "garlic",
      name: "Garlic",
      verse: "Numbers 11:5",
      verseText:
        "We remember the fish, which we did eat in Egypt freely; the cucumbers, and the melons, and the leeks, and the onions, and the garlick.",
      scientificName: "*Allium sativum* L. (Amaryllidaceae; onion family)",
      scientificNote:
        "Hebrew *shum* in Numbers 11:5 is garlic—the pungent bulb of Egyptian kitchens. It appears only there in the Hebrew Bible, listed with leeks and onions as food the people missed in the wilderness, not as a prescribed medicine.",
      commonName: "Garlic; cultivated garlic; shum (Hebrew)",
      benefits:
        "Pungent bulb of Egypt — traditional kitchen staple & folk ally of vitality",
      botanicalSummary:
        "A perennial grown as an annual crop, with a composite bulb of cloves wrapped in papery skins, flat leaves, and, in bolting types, a tall scape with a round flower umbel. Crushing a clove starts an enzymatic reaction that forms **allicin** and related sulfur compounds—the smell of garlic and the focus of much modern research. Cooked garlic is milder; raw is sharper on breath and stomach.",
      intro:
        "In the wilderness Israel remembered garlic with the free fish and garden food of Egypt (Numbers 11:5). The complaint was about manna’s sameness; the botanical note is that garlic was ordinary slave-and-laborer fare along the Nile, not a luxury spice. Egyptian, Greek, and later folk medicine loaded the same bulb with hopes for the chest, digestion, and “blood.” NCCIH and evidence reviews describe **modest, mixed** findings for cholesterol and blood pressure with **supplements**—never a reason to stop prescribed heart medicines. God gave a kitchen bulb. Meals are the biblical pattern; capsules are a modern extra.",
      region:
        "Long cultivated from Central Asia through Egypt and the Mediterranean; now grown worldwide. Biblical-era Egypt produced garlic in quantity; it remains a staple of Levantine and Mediterranean cooking.",
      identityNotes: [
        "**Numbers 11:5:** Hebrew *shum*—garlic among the remembered foods of Egypt, with cucumbers, melons, leeks, and onions.",
        "**Culinary, not a prescription:** Scripture names it as food missed in the desert, not as a temple drug or healing rite.",
        "**Related alliums:** Leeks and onions in the same verse are sister kitchen plants, not substitutes in every recipe or study.",
      ],
      ancientUses: [
        "**Wilderness complaint:** Garlic listed with Nile fish and garden vegetables as food Israel ate “freely” in Egypt (Numbers 11:5).",
        "**Egyptian diet:** Classical writers and later travelers note garlic and onions as laborer staples of the Nile—the same food-world the verse assumes.",
        "**Greek & Roman folk use:** Dioscorides, Pliny, and others describe garlic for the chest, digestion, and as a pungent food-medicine.",
        "**Ayurveda, Unani & later kitchens:** A warming culinary bulb used in stews, pickles, and folk preparations across the Near East and India.",
        "**Traditional vitality:** Folk reputation as a strengthening food in winter kitchens—historical diet, not a proven immune “cure.”",
      ],
      modernResearch: [
        "NCCIH: garlic **supplements** may reduce total and LDL cholesterol **to a small extent** in some people with high cholesterol; results vary by product.",
        "Blood-pressure findings are **inconsistent**; garlic is **not** a replacement for antihypertensive drugs.",
        "Cancer-prevention claims (diet or supplements) remain **unproven** as a reason to self-treat; food-pattern studies are not the same as a garlic protocol.",
        "Allicin forms when raw clove is crushed; cooking and aging change the chemistry—**products are not interchangeable**.",
        "Laboratory antimicrobial findings do **not** make raw garlic a treatment for infection.",
      ],
      sideEffects:
        "Food amounts are generally tolerated; raw garlic more often causes breath and body odor, heartburn, gas, nausea, or allergy. **Raw garlic on skin can burn**—do not make poultices from this page. **Supplements may increase bleeding risk**, especially with warfarin, aspirin, or before surgery—tell your clinician. Garlic can interact with some medicines. Large medicinal amounts in pregnancy: prefer ordinary food unless advised otherwise. This is kitchen history, not a reason to change prescriptions.",
      partsUsed:
        "Fresh cloves (bulb); dried, powdered, and aged extracts in modern supplements; green garlic and scapes as vegetables. Garlic “essential oil” is a concentrated distillate—not everyday food.",
      preparations: [
        "**Culinary:** Crush or chop cloves and **let them rest a few minutes** before cooking if you want more developed aroma; then sauté or stew in meals.",
        "**Raw (food):** A small amount in dressings or sauces if your stomach allows—not a medical “shot.”",
        "**Storage:** Whole bulbs cool, dry, and airy; do not store chopped garlic in oil at room temperature (botulism risk in homemade oil infusions).",
        "**Supplements:** Aged extracts, powders, and oils differ widely—read labels; this site does not recommend self-treating with them.",
        "**Topical:** **Do not** apply crushed raw garlic to skin as a home remedy.",
      ],
      dosage: [
        "**Food:** **1–2 cloves** cooked in a meal is a common kitchen amount—not a prescribed dose.",
        "**Supplements:** Follow a reputable label and clinician; studied products vary (often on the order of several hundred milligrams of extract, or fresh-garlic equivalents). **Do not** match internet “mega-doses.”",
        "**Essential oil / oil macerates:** **Do not ingest** concentrated oil; homemade garlic-in-oil must be refrigerated and used promptly if made at all.",
        "Do not use garlic to replace prescribed cholesterol, blood-pressure, diabetes, or blood-thinning therapy, and do not stop those medicines because of this page.",
      ],
      traditionalUses:
        "Recalled fondly by Israel in the wilderness as food of Egypt. A foundational culinary bulb in Mediterranean and Near Eastern cooking and folk kitchens.",
      prepNote:
        "Crush and rest cloves before cooking to develop flavor. Culinary use in meals is the traditional approach. Do not put raw garlic on skin or replace prescribed medicines.",
      emoji: "🧄",
    },
    {
      id: "fig",
      name: "Fig",
      verse: "Isaiah 38:21",
      verseText:
        "For Isaiah had said, Let them take a lump of figs, and lay it for a plaister upon the boil, and he shall recover.",
      scientificName: "*Ficus carica* L. (Moraceae / mulberry family)",
      scientificNote:
        "Hebrew *te’enah* is the common fig. Isaiah 38:21 and 2 Kings 20:7 describe a **cake of pressed figs** (*debelah*) laid on Hezekiah’s boil—fruit pulp, not milky tree latex. Figs are among the seven species of the Promised Land (Deuteronomy 8:8).",
      commonName: "Common fig; te’enah (Hebrew); dried fig / fig cake",
      benefits:
        "Fruit of the land — traditional sweet fiber food; Scripture’s poultice is history, not a home protocol",
      botanicalSummary:
        "A spreading deciduous tree with large lobed leaves and milky latex in stems and unripe fruit. The “fruit” is a **syconium**—a fleshy hollow receptacle lined with tiny flowers. Ripe figs may be green, brown, or purple; dried cakes travel well. Latex contains the enzyme **ficin** and can irritate skin, especially in sun.",
      intro:
        "From Eden’s covering leaves (Genesis 3:7) to the quiet picture of every one under his vine and fig tree (Micah 4:4), Scripture treats the fig as ordinary blessing. God listed it among the Promised Land’s gifts (Deuteronomy 8:8). When Hezekiah was sick, Isaiah directed a lump of figs onto the boil (Isaiah 38:21; 2 Kings 20:7)—a prophet’s instruction in a story of prayer and mercy, **not** a standing recipe for skin disease. Traditional diets prized fresh and dried figs as sweet, fiber-rich food. Eat the fruit. Do not turn a king’s healing into self-treatment, and do not put fig-tree sap on skin because a verse mentions figs.",
      region:
        "Native to the Mediterranean and western Asia; cultivated since deep antiquity in the Levant, Egypt, Greece, and Rome. Prefers hot, relatively dry summers and well-drained soil. Now grown in warm-temperate orchards worldwide.",
      identityNotes: [
        "**Hebrew te’enah:** The common edible fig *Ficus carica*, not the rubber-fig houseplant *F. benjamina*.",
        "**Hezekiah’s poultice:** A pressed **fig cake** (*debelah*), parallel in 2 Kings 20:7—food fruit applied outwardly in that narrative.",
        "**Promised Land fruit:** Deuteronomy 8:8 lists figs with wheat, barley, vines, pomegranates, olives, and honey.",
      ],
      ancientUses: [
        "**Promised Land food:** Figs among the seven species; spies also brought figs from Eshcol (Numbers 13:23).",
        "**Hezekiah:** Isaiah’s fig-cake poultice on a boil, in a passage where healing is attributed to the Lord’s word and the king’s prayer (Isaiah 38; 2 Kings 20).",
        "**Peace & plenty:** “Vine and fig tree” as a picture of security (e.g., 1 Kings 4:25; Micah 4:4; Zechariah 3:10).",
        "**Jesus & the fig:** The barren fig tree (Mark 11:12–14, 20–21) and the lesson of tender branches (Matthew 24:32)—spiritual teaching, not horticultural medicine.",
        "**Classical food-medicine:** Greeks and Romans ate fresh and dried figs; writers mention fig preparations for the bowels and, historically, for drawing skin sores—folk lists, not modern protocols.",
        "**Travel food:** Pressed fig cakes as portable sweetness (cf. 1 Samuel 25:18; 30:12).",
      ],
      modernResearch: [
        "Ripe figs are a **food** source of fiber, potassium, and various polyphenols; that is nutrition, not a drug monograph.",
        "Laboratory studies of fig extracts describe antioxidant or antimicrobial findings—**not** evidence to treat boils, cancer, or diabetes with figs.",
        "Dried figs can help with **dietary fiber** toward ordinary regularity; they are not a stimulant-laxative drug and are not appropriate as sole care for bowel obstruction or unexplained pain.",
        "Fig **latex** is a different material from the ripe fruit and is irritating; do not use sap as a wart or wound medicine from this site.",
        "Hezekiah’s recovery is a **biblical narrative of God’s mercy**, not a clinical trial of fig poultices.",
      ],
      sideEffects:
        "Ripe fruit is generally food-like; large amounts of dried figs may loosen stools or bother those sensitive to sugar alcohols and fiber. **Latex and unripe sap can blister skin**, especially with sunlight (phytophotodermatitis). Fig allergy occurs and may cross-react with other *Ficus* or latex-related fruits in some people. Do not put fig cakes or sap on infected, deep, or undiagnosed sores. This page does not instruct anyone to treat boils at home. Educational history only.",
      partsUsed:
        "Ripe fresh fruit; dried fruit and pressed cakes. Leaves appear in some traditional cuisines. Latex from stems/unripe fruit is **not** recommended for home use.",
      preparations: [
        "**Fresh fruit:** Eat fully ripe figs as food; wash first.",
        "**Dried figs:** A traditional traveling sweet; soak if very dry. Culinary use in stews, breads, and breakfasts.",
        "**Fig cake (historical):** Pressed dried figs as in biblical food stores—food, not a skin-treatment kit.",
        "**Harvest note:** Some people get a rash from pruning or picking—wear sleeves if you are sensitive; rinse sap off skin and keep that skin out of strong sun.",
        "**Storage:** Fresh figs refrigerate and spoil quickly; dried fruit airtight, cool, and dry.",
      ],
      dosage: [
        "**Food:** A few fresh figs or **2–4 dried figs** with a meal is a common serving—not a medical dose.",
        "**Poultice:** **Do not** reproduce Hezekiah’s plaster as home care for boils, ulcers, or infections—seek medical care.",
        "**Latex / sap:** **Do not** apply as a remedy.",
        "Do not use figs to replace prescribed care for skin infection, diabetes, or digestive disease.",
      ],
      traditionalUses:
        "Figs appear throughout Scripture—from Eden imagery to Hezekiah’s poultice. Dried figs remain a nourishing fruit of the biblical lands.",
      prepNote:
        "Eat fresh or dried as food. Historical poultice references are educational, not treatment instructions. Avoid milky sap on skin.",
      emoji: "🫒",
    },
    {
      id: "olive",
      name: "Olive Oil",
      verse: "James 5:14",
      verseText:
        "Is any sick among you? let him call for the elders of the church; and let them pray over him, anointing him with oil in the name of the Lord.",
      scientificName: "*Olea europaea* L. (Oleaceae)",
      scientificNote:
        "The oil of Scripture is pressed fruit of the olive tree, a Promised Land species (Deuteronomy 8:8). James 5:14 joins **prayer** with anointing; the accent of the passage is the Lord and the prayer of faith, not oil as a drug. Lamp oil, food oil, and sacred anointing oil share the same orchard.",
      commonName:
        "Olive; olive oil; extra-virgin olive oil; zayit / shemen (Hebrew)",
      benefits:
        "Oil of light, table & anointing — traditional food fat of the Mediterranean orchard",
      botanicalSummary:
        "A long-lived evergreen tree with narrow silvery leaves, gnarled trunk, and drupes that ripen from green to violet-black. Fruit is crushed and pressed; **virgin** oils are mechanical, not solvent-extracted. The fat is mostly **oleic acid** (a monounsaturated oil); extra-virgin grades also carry **polyphenols** (e.g., hydroxytyrosol, oleuropein-related compounds) that give peppery bitterness. Leaf extracts sold as supplements are not the same as table oil.",
      intro:
        "Olive oil runs through biblical life: the lamp of the tabernacle, the widow’s cruse, the Good Samaritan’s dressing of wounds (Luke 10:34), the horn of anointing, and the elders’ oil in James 5:14. God planted a tree that feeds, lights, and marks people as set apart. Extra-virgin oil remains the signature fat of Mediterranean tables. Modern diet research associates olive-oil-rich patterns with heart-health markers—**as food in a pattern**, not as a bottle that replaces cardiology. Anointing is a practice of faith and prayer. It is not a protocol to stop medicines or to treat disease with salad oil.",
      region:
        "Native to the Mediterranean basin; cultivated from Israel and the Levant across Greece, Italy, Spain, North Africa, and now California, Australia, and other warm-summer climates. Ancient terraces of the hill country still speak of the crop’s endurance.",
      identityNotes: [
        "**Promised Land tree:** Olives listed with the seven species (Deuteronomy 8:8).",
        "**James 5:14:** Anointing **in the name of the Lord** with prayer—faith practice, not a pharmacy label.",
        "**Not olive-leaf capsules:** Food oil from the fruit is the biblical kitchen material; concentrated leaf extracts are a modern supplement category.",
        "**Not “essential oil”:** Olive oil is a fatty pressed oil. Do not confuse it with steam-distilled essential oils of other plants.",
      ],
      ancientUses: [
        "**Food of the land:** Oil, olives, and cakes of oil as daily nourishment and offering (e.g., Deuteronomy 8:8; 1 Kings 17:12–16).",
        "**Light:** Beaten olive oil for the lampstand (Exodus 27:20; Leviticus 24:2).",
        "**Sacred anointing:** Kings, priests, and furnishings set apart with oil (e.g., Exodus 30:22–33; 1 Samuel 16:13).",
        "**James 5:14–15:** Elders pray and anoint the sick; **the Lord** raises up—oil is accompaniment, not a substitute for the gospel or for ordinary care.",
        "**Mercy on the road:** The Samaritan poured oil and wine on wounds (Luke 10:34)—first-century first aid in a parable of neighbor-love.",
        "**Cosmetics & hospitality:** Oil for the head and skin in a dry climate (e.g., Psalm 23:5; Luke 7:46).",
      ],
      modernResearch: [
        "Extra-virgin olive oil is a well-studied **food fat**; Mediterranean-style patterns that use it in place of some saturated fats are associated with better cardiovascular markers in observational and some trial literature.",
        "Phenolic compounds and oleic acid are research focuses; **this does not make olive oil a medicine that treats heart disease, cancer, or diabetes.**",
        "Refined (“light”) olive oil has fewer of the peppery phenolics of extra-virgin grades; food quality varies.",
        "Olive-leaf extracts are a separate supplement literature—limited and not a biblical food equivalent.",
        "Topical olive oil is a traditional emollient; evidence for specific dermatologic diseases is mixed, and it is **not** sterile wound care for serious injury.",
      ],
      sideEffects:
        "Food amounts are generally well tolerated. Oil is calorie-dense; large extra servings may bother gallbladder or reflux in some people. Rare allergy to olive fruit or pollen exists. Do not pour oil into ears or deep wounds as a home treatment. **Anointing oil is not a reason to delay emergency care or to stop prescribed medicines.** If you have pancreatitis, fat-malabsorption, or take medicines that require dietary consistency, ask a clinician about fat intake. Educational and historical only.",
      partsUsed:
        "Pressed fruit oil; table olives (cured fruit); wood historically for craft. Leaves used in some folk teas and in modern extracts—not the main biblical food use.",
      preparations: [
        "**Table oil:** Use extra-virgin olive oil in salads, vegetables, and moderate cooking according to kitchen tradition.",
        "**Cured olives:** Food from the same tree, after proper curing (raw uncured olives are very bitter).",
        "**Lamp / anointing:** Historical and congregational uses as Scripture and church practice direct—not a medical dose.",
        "**Storage:** Dark glass or tin, cool and away from light; rancid oil smells like crayons or putty—discard.",
        "**Leaf tea / capsules:** Optional modern products—follow labels and clinicians; they are not required by James 5.",
      ],
      dosage: [
        "**Food:** A tablespoon or two (about **15–30 mL**) as part of meals is a common culinary amount in Mediterranean-style eating—not a prescription.",
        "**Anointing:** A small amount for prayerful practice as a congregation understands James 5—**not** measured as milligrams of drug.",
        "**Supplements (leaf, etc.):** Only with labeled products and professional advice.",
        "Do not use olive oil to replace prescribed cardiac, diabetic, or infection care, and do not delay calling elders **or** clinicians when seriously ill.",
      ],
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
      scientificName: "*Cuminum cyminum* L. (Apiaceae / parsley family)",
      scientificNote:
        "Hebrew *kammon* (Isaiah 28:25, 27) and Greek *kyminon* (Matthew 23:23) are culinary cumin. Isaiah’s parable distinguishes its gentle threshing from heavy sledges used on grain. Black cumin / nigella (*Nigella sativa*; Hebrew *qetsach*, the “fitches” of some translations) is a **different** seed in the same chapter.",
      commonName: "Cumin; cummin (KJV spelling); kammon (Hebrew)",
      benefits:
        "Carefully sown field spice — traditional warm seed for breads, stews & after-meal ease",
      botanicalSummary:
        "A slender annual with finely cut leaves and umbels of tiny white to rose flowers. The “seeds” are elongated, ridged, yellowish-brown fruits (schizocarps) with a warm, earthy, slightly bitter aroma from an essential oil rich in **cuminaldehyde**. Plants are low and easily bruised in harvest—the agronomic fact behind Isaiah’s threshing lesson.",
      intro:
        "Isaiah pictures a farmer who knows how to treat each crop: cumin is scattered, then beaten lightly with a rod, not crushed under a cart (Isaiah 28:25–29). The wisdom is the Lord’s, even in the field. Jesus later named cumin among herbs tithed to the gram while justice, mercy, and faith were neglected (Matthew 23:23). Near Eastern and Indian kitchens still toast the seed for stews and bread. Folk herbalism calls it carminative. That is spice-lore, not a proven treatment for diabetes, iron deficiency, or infection.",
      region:
        "Native to the eastern Mediterranean and nearby West Asia; long grown in Egypt, the Levant, Iran, India, and North Africa. Prefers a hot, dry ripening season. Now a global spice crop.",
      identityNotes: [
        "**Isaiah 28:** *kammon* = cumin, threshed with a staff; *qetsach* (fitches / black cumin / nigella in many notes) is the companion small seed, not this plant.",
        "**Matthew 23:23:** Greek *kyminon* tithed with mint and dill.",
        "**Not caraway:** *Carum carvi* looks related but is a different kitchen spice.",
      ],
      ancientUses: [
        "**Isaiah’s parable:** Cumin sown and threshed according to its delicate nature—an image of God’s fitting instruction (Isaiah 28:23–29).",
        "**Gospel tithe:** Counted with mint and dill while weightier matters were omitted (Matthew 23:23).",
        "**Egyptian & Levantine spice:** Seeds in breads, legumes, and meat dishes of the ancient eastern Mediterranean.",
        "**Greek & Roman kitchen-medicine:** Cumin among digestive, warming condiments in classical lists.",
        "**Later Jewish practice:** Rabbinic discussion of tithing garden spices, which the Gospel woe assumes.",
      ],
      modernResearch: [
        "Cumin is **GRAS** as a food spice; medicinal claims rest on much thinner evidence.",
        "Small trials and traditional use explore digestion, lipids, or blood-sugar markers; results are **preliminary** and products vary.",
        "Laboratory antimicrobial and antioxidant findings do **not** equal a clinical therapy.",
        "Essential-oil chemistry (cuminaldehyde and related compounds) explains aroma, not a license to swallow oil.",
        "Do not use cumin capsules as a substitute for diabetes, anemia, or infection care.",
      ],
      sideEffects:
        "Culinary amounts are generally food-like. Large medicinal doses may cause heartburn or belching. Allergy is possible, including in people sensitive to other Apiaceae (celery, carrot, coriander). **Cumin essential oil is not for ingestion** as a home remedy. Pregnancy: ordinary cooking is the cautious path; concentrated extracts are not well studied. This is spice education, not a treatment plan.",
      partsUsed:
        "Ripe dried fruits (“seeds”). Essential oil distilled from the fruit is a concentrated flavoring, not a tea ingredient.",
      preparations: [
        "**Culinary:** Toast seeds lightly in a dry pan until fragrant, then grind or add whole to stews, beans, breads, and spice blends.",
        "**Mild seed tea (folk):** Crush **about 1 teaspoon** of seeds and steep covered **5–10 minutes**; strain. Educational tasting with meals.",
        "**Storage:** Whole seeds in airtight jars, cool and dark; grind as needed.",
        "**Essential oil:** Food-flavoring amounts in commercial products only—**do not** drop oil into water as a “dose.”",
      ],
      dosage: [
        "**Culinary:** **½–1 teaspoon** (about **1–3 g**) of seed in a dish is a usual cooking amount.",
        "**Tea (traditional educational range):** about **1 teaspoon** crushed seed per cup, **1–2 cups** with food short-term.",
        "**Supplements:** Follow labels and a clinician if used at all; they are **not** proven medicines.",
        "**Essential oil:** **Do not ingest.**",
        "Do not use cumin to replace prescribed metabolic, digestive, or infection care.",
      ],
      traditionalUses:
        "A carefully sown field spice in Isaiah’s agricultural parable and among New Testament tithed herbs. Warm, earthy seeds flavor breads and stews.",
      prepNote:
        "Toast seeds lightly before grinding. Use as a culinary spice in everyday cooking. Not the same seed as nigella (“fitches”) in Isaiah 28.",
      emoji: "🌾",
    },
    {
      id: "mustard",
      name: "Mustard",
      verse: "Matthew 13:31",
      verseText:
        "The kingdom of heaven is like to a grain of mustard seed, which a man took, and sowed in his field…",
      scientificName:
        "*Brassica nigra* (L.) W.D.J.Koch (black mustard; Brassicaceae) — the plant most often identified with Gospel *sinapi*; white mustard (*Sinapis alba*) is a close kitchen relative.",
      scientificNote:
        "Greek *sinapi* in the mustard-seed parables (Matthew 13:31–32; Mark 4:30–32; Luke 13:18–19) and the “faith as a grain of mustard seed” sayings (Matthew 17:20; Luke 17:6) is proverbially tiny seed that becomes a large garden herb. **Black mustard** fits Galilean fields: minute seeds, rapid growth, plants tall enough for small birds to perch. *Salvadora persica* (toothbrush tree), sometimes nicknamed mustard by later Arabic usage, is unlikely—it is not a sown garden annual and its fruits are not “least of seeds.” “Smallest of all seeds” is popular hyperbole, not a botany exam.",
      commonName:
        "Mustard; black mustard; white/yellow mustard; sinapi (Greek)",
      benefits:
        "Tiny seed of the parables — traditional pungent condiment & pot herb",
      botanicalSummary:
        "Annuals of the cabbage family with lobed lower leaves, clusters of four-petaled yellow flowers, and slender pods (siliques) packed with tiny round seeds. Black mustard seed is dark and sharp; white mustard paler and milder. Crushed seed mixed with liquid yields the familiar condiment; greens are eaten as a bitter pot herb. In rich Jordan-valley soil the herb can shoot up several feet in a season—an annual that behaves, in parable speech, like a “tree.”",
      intro:
        "Jesus compared the kingdom to mustard seed: sown small, then unexpectedly large, with birds lodging in its branches (Matthew 13:31–32). He also used the seed as a picture of faith that looks tiny and moves what seems immovable (Matthew 17:20). The lesson is the reign of God, not a gardening manual and not a mustard plaster. Mediterranean tables have long used the seed as a warming condiment and the leaves as food. Allyl isothiocyanates give the sinus-clearing bite. Enjoy mustard as a food. Do not swallow mustard essential oil, and do not treat chest colds or tumors with poultices from this page.",
      region:
        "Black mustard is widespread in the Mediterranean and West Asia and was both wild and cultivated in Galilee. It favors disturbed, fertile ground. White mustard and related species are now global crops for seed and greens.",
      identityNotes: [
        "**Parable plant:** *sinapi* as a sown herb of field or garden, not a desert shrub.",
        "**Best fit:** *Brassica nigra* (black mustard); *Sinapis alba* remains a kitchen cousin.",
        "**Unlikely:** *Salvadora persica*—wrong habit, habitat, and seed size for the parable’s image.",
        "**Proverb of smallness:** Talmud and later speech also use mustard seed for something tiny; Jesus speaks in that idiom.",
      ],
      ancientUses: [
        "**Kingdom parable:** Seed sown in field or garden, growing greater than the garden herbs, birds in the branches (Matthew 13:31–32 and parallels).",
        "**Faith proverb:** Faith like a mustard grain (Matthew 17:20; Luke 17:6).",
        "**Galilean kitchen:** Leaves as a pot herb; seed as pungent seasoning—ordinary food of the land.",
        "**Classical condiment:** Greeks and Romans mixed crushed seed with must (unfermented grape) or vinegar—the ancestor of table mustard.",
        "**Folk plasters (later):** Warming mustard poultices in European folk practice for chests and aches—**historical, irritating, and not recommended here as treatment.**",
      ],
      modernResearch: [
        "Mustard seed and greens are **foods**; glucosinolates and isothiocyanates are well-described plant chemicals, not proven anti-cancer drugs in kitchen amounts.",
        "Condiment mustard is generally recognized as safe as food; **medicinal** claims for cholesterol, immunity, or respiratory disease lack strong clinical backing.",
        "Mustard oil sold in some countries as a cooking fat is a different, region-specific product and is **not** interchangeable with table mustard or with essential oil.",
        "Allyl isothiocyanate (in “mustard oil” essential oil / concentrated distillates) is a **potent irritant**—not a homemade medicine.",
        "Do not read the parable as agronomic or medical instruction.",
      ],
      sideEffects:
        "Food amounts of prepared mustard and cooked greens are generally tolerated; the bite can inflame mouth, stomach, or reflux. **Mustard plasters and essential oil can blister skin and airways**—do not apply concentrated mustard to skin or chest from this site. Allergy to mustard is recognized and can be serious (it is a priority allergen in some labeling rules). **Never ingest mustard essential oil.** Infants and young children should not be given strong mustard preparations. Educational use only.",
      partsUsed:
        "Ripe seeds; young leaves and flowering shoots as greens. Expressed or distilled mustard oils are concentrated industrial or traditional fats/irritants, not the parable’s “grain.”",
      preparations: [
        "**Condiment:** Grind or soak seeds with vinegar or water (and optional salt/honey) for table mustard; prepared mustard from a jar is the everyday form.",
        "**Greens:** Cook young leaves as a bitter vegetable; start small if you are unused to them.",
        "**Pickling:** Whole seeds in brines and spice mixes.",
        "**Storage:** Whole seed airtight, cool, and dry; prepared mustard refrigerated after opening.",
        "**Plasters / essential oil:** **Do not** use as home therapy.",
      ],
      dosage: [
        "**Culinary condiment:** **½–1 teaspoon** prepared mustard with a meal is a typical adult food amount.",
        "**Greens:** A cooked side-dish serving as you would other bitter vegetables.",
        "**Essential oil / plasters:** **Not for home dosing.**",
        "Do not use mustard to treat chest illness, pain, or cancer, and do not read medicinal doses out of Matthew 13.",
      ],
      traditionalUses:
        "Jesus’ parable of the mustard seed highlights faith’s growth from something small. Mustard greens and seeds have long been kitchen staples of the region.",
      prepNote:
        "Use seeds in pickling and condiments; young greens in salads or cooked dishes. Culinary amounts only. No mustard plasters or essential-oil “remedies” from this page.",
      emoji: "🟡",
    },
    {
      id: "balm-gilead",
      name: "Balm of Gilead",
      verse: "Jeremiah 8:22",
      verseText: "Is there no balm in Gilead; is there no physician there?",
      scientificName:
        "Uncertain aromatic resin — candidates include *Pistacia atlantica* Desf. (Atlantic terebinth of the Gilead highlands), *Commiphora gileadensis* (L.) C.Chr. (Mecca / Arabian balsam, later famed as Judean balsam), and other storax- or mastic-type gums of trade.",
      scientificNote:
        "Hebrew *tsori* (also spelled *zori*) is the “balm” tied to Gilead in Genesis 37:25; 43:11; Jeremiah 8:22; 46:11; 51:8; and Ezekiel 27:17. Ancient readers knew a valued medicinal resin of that region; **modern botanists do not agree on one tree.** North American **poplar buds** (*Populus balsamifera* / *P. × jackii*), sold today as “Balm of Gilead,” are **not** Jeremiah’s plant. Judean balsam of Roman writers is a related historical luxury, possibly a *Commiphora*, cultivated near the Dead Sea—again, not a bottle on a supermarket herb rack.",
      commonName:
        "Balm of Gilead; tsori (Hebrew); balsam of Gilead; (later) Judean balsam / opobalsamum — names that have been applied to more than one resin",
      benefits:
        "Resin of a prophet’s cry — traditional image of healing hope, not a identified drugstore balsam",
      botanicalSummary:
        "Whatever tree yielded biblical *tsori*, the product was a fragrant, sticky oleoresin gathered from wounded bark or fruit, traded east of the Jordan and down to Egypt. Terebinth pistacios still grow in highland Gilead and bleed a pale resin. *Commiphora* balsams are desert shrubs of Arabia and the Horn of Africa, later farmed as a royal crop. Storax and mastic are still other fragrant gums of the wider Levant. The honest botanical summary is a **cluster of possibilities**, not a single leaf to pick.",
      intro:
        "“Is there no balm in Gilead? is there no physician there?” (Jeremiah 8:22). The prophet is not writing a recipe. He is grieving a people who will not be healed, though the land even had a famous salve. Later the same image became a Christian hymn of hope: there *is* a balm in Gilead. Genesis already lists Gilead’s balm among goods on the caravan that carried Joseph (Genesis 37:25). God allowed a costly gum to grow in the hills—and used it as a mirror for spiritual sickness. Study the history. Do not buy “Balm of Gilead oil” as a cure, and do not confuse American poplar salve with Jeremiah’s *tsori*.",
      region:
        "Gilead: the highlands east of the Jordan (modern Jordan). Trade moved the resin toward Egypt and the coast (Genesis 37:25; Ezekiel 27:17). Later “Judean balsam” was associated with oasis cultivation near Jericho and the Dead Sea. True source plants, depending on the identification, range from Levantine terebinth woodland to Arabian *Commiphora* scrub.",
      identityNotes: [
        "**Hebrew tsori:** Six Old Testament texts; medicinal and trade resin of Gilead, identity debated.",
        "**Leading proposals:** *Pistacia atlantica* resin (local to Gilead); *Commiphora gileadensis* / related balsam (Mecca balsam; later Judean opobalsamum); storax-type gums in some older handbooks.",
        "**Not North American poplar:** *Populus* “Balm of Gilead” buds are a different continent and species, named by later settlers.",
        "**Hymn & hope:** The spiritual “There Is a Balm in Gilead” reads Jeremiah through the gospel—theology, not a botanical ID.",
      ],
      ancientUses: [
        "**Joseph’s caravan:** Ishmaelites carrying spicery, balm, and myrrh from Gilead toward Egypt (Genesis 37:25).",
        "**Gift to Egypt:** Balm among the choice products Jacob’s sons took to Joseph (Genesis 43:11).",
        "**Jeremiah’s lament:** Balm and physician as the healing Israel would not receive (Jeremiah 8:22; cf. 46:11; 51:8).",
        "**Tyre’s trade:** Judah and Israel trading wheat, honey, oil, and balm (Ezekiel 27:17).",
        "**Classical luxury:** Greek and Roman writers praise a rare balsam of Judea/Arabia for perfume and folk salves—expensive, often adulterated, not a village weed.",
        "**Metaphor of restoration:** The land’s famous medicine became language for the wound only God can bind.",
      ],
      modernResearch: [
        "There is **no single standardized “Balm of Gilead” extract** that corresponds securely to *tsori*, so clinical claims cannot be honest.",
        "Resins from *Pistacia* and *Commiphora* species have laboratory anti-inflammatory or antimicrobial papers—**species, dose, and product vary**; none is Jeremiah’s proven formula.",
        "Commercial “Balm of Gilead” oils are frequently **poplar-bud** macerates or generic fragrance blends.",
        "Judean balsam’s exact chemistry is a matter of archaeology and botany still in discussion (including rare germinated *Commiphora* material in recent reports)—interesting history, not a supplement aisle.",
        "Do not treat spiritual or medical illness with an unidentified gum.",
      ],
      sideEffects:
        "Unidentified resins can irritate skin, trigger allergy (especially in people sensitive to pistacia, frankincense/myrrh-family gums, or poplar buds), or be adulterated with unknown solvents. **Do not ingest “balsam” essential oils.** Pregnancy: avoid concentrated balsam products. If a labeled poplar-bud salve is used at all, patch-test and keep away from broken skin unless a clinician agrees. This monograph is about Scripture’s image and the limits of identification—not a treatment.",
      partsUsed:
        "Historically: oleoresin / gum from bark or fruit of the (debated) source tree. Modern labeled products may instead use poplar buds, mixed essential oils, or perfume bases.",
      preparations: [
        "**Historical trade resin:** Collected tears or scrapings, sometimes boiled into a thicker “balm”—described by travelers, not reconstructed here as a recipe.",
        "**Perfume & incense:** Costly balsams compounded with other aromatics in antiquity.",
        "**Hymn & study:** The primary “use” this site recommends is reading Jeremiah and the gospel hope the hymn draws from it.",
        "**If exploring aroma:** Only a clearly labeled, legally sourced product; dilute any essential oil in a carrier; **never swallow.**",
        "**Stewardship:** Do not harvest wild desert *Commiphora* or rare trees for curiosity.",
      ],
      dosage: [
        "**Scripture’s balm:** not a milligram dose—Jeremiah asks a rhetorical, spiritual question.",
        "**Commercial oils / salves:** follow the actual plant on the label (often poplar, not *tsori*) and a clinician; there is **no authentic biblical dose.**",
        "**Essential oil:** **Do not ingest.**",
        "Do not use any balsam to replace medical or pastoral care for body or soul.",
      ],
      traditionalUses:
        "A fragrant resinous balm from the region of Gilead, evoked by Jeremiah as a metaphor for restoration. Later Christian hymnody kept the image of healing hope alive.",
      prepNote:
        "Historical balsams vary by species and are often confused with North American poplar bud salve. Educational and devotional context only—not a cure in a bottle.",
      emoji: "🧴",
    },
    {
      id: "cedar",
      name: "Cedar of Lebanon",
      verse: "Psalm 92:12",
      verseText: "The righteous shall flourish like the palm tree: he shall grow like a cedar in Lebanon.",
      scientificName: "*Cedrus libani* A.Rich. (Pinaceae)",
      scientificNote:
        "Hebrew *erez* in contexts of Lebanon is the true cedar *Cedrus libani*—not North American “red cedar” (*Juniperus virginiana*) and not every tree later called cedar. Solomon imported this timber for the temple (1 Kings 5–6). Remaining wild groves are conservation treasures.",
      commonName:
        "Cedar of Lebanon; Lebanon cedar; erez (Hebrew); (not) Eastern red cedar",
      benefits:
        "Tree of strength & temple timber — traditional aromatic wood of worship, not a tea herb",
      botanicalSummary:
        "A massive evergreen conifer of mountain slopes, with tiered, spreading crown in age, clusters of needle-like leaves, and barrel-shaped upright cones. Heartwood is fragrant, durable, and historically prized. Distilled wood and cone oils contain **himachalenes**, **himachalol**, and related sesquiterpenes. The living tree is the biblical subject; a bottle of “cedarwood oil” is often a different species entirely.",
      intro:
        "“The righteous shall flourish like the palm tree: he shall grow like a cedar in Lebanon” (Psalm 92:12). Scripture uses this mountain giant for stature, durability, and sometimes for pride brought low (Isaiah 2:13). Hiram of Tyre floated cedar to Solomon for the Lord’s house (1 Kings 5:6–10; 6:9–10, 15–18). Cedar also appears with hyssop in purification rites (Leviticus 14:4–6, 49–52; Numbers 19:6). God made a forest that could roof a temple. That is a call to reverence and conservation, not to drink essential oil or to strip remaining groves for souvenirs.",
      region:
        "Mountains of Lebanon, Syria, and south-central Turkey (Taurus), generally at elevation with winter snow and dry summers. Ancient range was wider before millennia of felling for ships, palaces, and temples. Protected remnants (including famous Lebanese cedar reserves) are the rightful focus today.",
      identityNotes: [
        "**Hebrew erez / Lebanon:** *Cedrus libani* in temple, palace, and psalm imagery.",
        "**Not juniper “cedar”:** American red cedar and many “cedarwood oils” are *Juniperus* or other genera.",
        "**Temple wood:** 1 Kings 5–7; 2 Chronicles 2—imported, costly, worked by Tyrian craftsmen.",
        "**Conservation:** Centuries of cutting left fragments of the old forest; admire, do not wild-harvest.",
      ],
      ancientUses: [
        "**Temple & palace:** Cedar beams, paneling, and furnishings for Solomon’s temple and royal buildings (1 Kings 5–7).",
        "**Psalm of flourishing:** The righteous compared to Lebanon’s cedar (Psalm 92:12; cf. Psalm 104:16; Hosea 14:5–6).",
        "**Purification rites:** Cedar wood with hyssop and scarlet yarn in cleansing of skin affliction and house (Leviticus 14) and in Numbers 19:6.",
        "**Phoenician ships & trade:** Durable, fragrant timber of Tyre’s fleets and exports—the economic backdrop of Solomon’s contract with Hiram.",
        "**Egypt:** Imported cedar for boats, coffins, and resinous preparations in the wider ancient world.",
        "**Poetry of pride:** Prophets fell the cedar as an image of arrogance laid low (e.g., Isaiah 2:13; Ezekiel 31).",
      ],
      modernResearch: [
        "Wood and cone essential oils have laboratory papers on antimicrobial or antiviral activity—**in vitro is not a treatment** for infection.",
        "There is **no** high-quality clinical tradition of drinking *Cedrus libani* as an herbal tea for disease.",
        "Commercial “cedarwood oil” is frequently *Juniperus virginiana* or *Cedrus atlantica*, not verified Lebanese temple cedar.",
        "The living conservation story (reforestation, reserves, climate and grazing pressure) is the modern research most relevant to this tree’s future.",
        "Do not turn Psalm 92 into a supplement claim.",
      ],
      sideEffects:
        "Handling wood is usually well tolerated; sawdust and oils may irritate skin or airways in sensitive people. **Cedar essential oil is not for ingestion** and can irritate skin undiluted. Keep oils away from children and pets. Pregnancy: avoid concentrated cedar oils. Do not burn large amounts of resinous wood in unventilated space. Buying rare wild-harvested Lebanese cedar products can harm remaining groves. Educational and historical only.",
      partsUsed:
        "Heartwood timber (historical construction and craft); sawdust or wood for distilled oil in modern trade; cones in some oil studies. Not a culinary leaf or fruit.",
      preparations: [
        "**Scripture & woodland:** The primary “use” is to read the psalms and to value living trees in their mountains.",
        "**Craft wood:** Historically worked into beams, chests, and ships—durable and insect-resistant in ancient testimony.",
        "**Incense / aroma:** Small amounts of authentic wood aroma in a ventilated space if a legal craft source exists.",
        "**Diluted oil (if used at all):** **1 drop in a teaspoon of carrier oil** for adult external scent only, and only if the label names the species honestly; patch-test.",
        "**Storage of oils:** Dark glass, tightly capped; **never** a beverage.",
      ],
      dosage: [
        "**Timber / symbol:** not a dose.",
        "**Essential oil:** **Do not ingest. Do not use undiluted on skin.** Fragrance-level dilution only, if at all.",
        "There is **no** traditional internal “cup of cedar” recommended on this site.",
        "Do not use cedar oil to treat infection, skin disease, or spiritual struggle, and do not harvest from protected groves.",
      ],
      traditionalUses:
        "Towering cedars supplied temple timber and symbolized strength and flourishing. Aromatic wood and oils have been used historically for fragrance and craft.",
      prepNote:
        "Appreciate as Scripture’s tree of strength. Essential oils, if used, only heavily diluted for scent—never ingest. Prefer not to buy wild-harvested Lebanese cedar.",
      emoji: "🌲",
    },
    {
      id: "almond",
      name: "Almond",
      verse: "Jeremiah 1:11–12",
      verseText:
        "Moreover the word of the LORD came unto me, saying, Jeremiah, what seest thou? And I said, I see a rod of an almond tree. Then said the LORD unto me, Thou hast well seen: for I will hasten my word to perform it.",
      scientificName:
        "*Prunus dulcis* (Mill.) D.A.Webb (Rosaceae / rose family); formerly *Amygdalus communis*",
      scientificNote:
        "**Sweet almond** (var. *dulcis*) is the familiar edible nut. **Bitter almond** (var. *amara*) contains amygdalin, which can release **hydrogen cyanide**—**not for casual eating or home “medicinal” use**.",
      commonName:
        "Almond; sweet almond; bitter almond (caution species/variety)",
      benefits:
        "Early-blooming tree of watchfulness — nourishing kernel and traditional oil (sweet only)",
      botanicalSummary:
        "A small deciduous tree related to peach and apricot, with lance-shaped leaves and pale pink to nearly white blossoms that appear before the leaves—often the first orchard tree to “wake” in late winter. The fruit is a leathery hull around a hard shell holding the familiar kernel. Sweet almonds are mild and nutty; bitter almonds smell strongly of marzipan and are toxic if mishandled.",
      intro:
        "In Scripture the almond (*shaqed*) is a living parable of vigilance. Jeremiah saw “a branch of an almond tree,” and the Lord answered that He was *watching* (*shoqed*) over His word to perform it (Jeremiah 1:11–12)—a wordplay rooted in the tree that blossoms first. Aaron’s staff “put forth buds, produced blossoms, and bore ripe almonds” (Numbers 17:8), a sign of God’s choosing. Jacob sent almonds among the “best products of the land” to Egypt (Genesis 43:11), and almond-blossom cups adorned the menorah (Exodus 25:33–34). God packed meaning into an early-blooming tree—and also a nourishing kernel for His people. Sweet almond oil and food use remain gifts of creation; bitter almond chemistry demands sober caution.",
      region:
        "Native to Southwest and Central Asia; long cultivated across the Mediterranean, Levant, and now California and other warm-temperate orchard regions. Prefers sunny, well-drained sites.",
      ancientUses: [
        "**Scripture — gift and food:** Almonds listed among Canaan’s prized products sent to Joseph (Genesis 43:11).",
        "**Scripture — Aaron’s rod:** Budding almond staff as divine confirmation of the priesthood (Numbers 17:8; recalled in Hebrews 9:4).",
        "**Scripture — menorah design:** Cups “shaped like almond blossoms” on the lampstand (Exodus 25:33–34; 37:19–20).",
        "**Scripture — watchfulness:** Almond branch vision and wordplay in Jeremiah 1:11–12; blossoming almond as an image of age in Ecclesiastes 12:5.",
        "**Genesis *luz*:** Jacob’s rods of “almond” (*luz*; older KJV “hazel”) in Genesis 30:37—often linked with wild almond.",
        "**Near Eastern diet and oil:** Kernels eaten fresh, roasted, or pressed for oil; classical writers knew sweet vs. bitter types.",
        "**Folk cosmetics:** Sweet almond oil traditionally for dry skin and massage (external).",
      ],
      modernResearch: [
        "Sweet almonds are well studied as a **nutrient-dense food** (healthy fats, vitamin E, fiber, plant protein); dietary research explores heart-health markers and satiety when nuts replace less wholesome snacks—food science, not a drug claim.",
        "Sweet almond oil is widely used in cosmetics as an emollient; contact allergy is uncommon but possible.",
        "Bitter almond and raw apricot/peach kernels have been linked to **cyanide poisoning** when eaten or used in unregulated “cures”—a documented safety issue, not a folk curiosity.",
        "No need to invent clinical “miracle” trials: the strongest modern case for sweet almond is **food and gentle topical oil**, handled with ordinary food safety.",
      ],
      sideEffects:
        "Culinary sweet almonds are generally well tolerated; rare tree-nut allergy can be severe (anaphylaxis)—anyone with nut allergy must avoid. Large amounts of nuts may upset digestion. **Bitter almonds and concentrated bitter-almond preparations can cause cyanide toxicity**—nausea, headache, dizziness, difficulty breathing, seizures; seek emergency care. Do not give bitter almond products to children. Sweet almond **essential oil** (and especially bitter almond oil) is **not for casual oral use**. This is educational information, not a treatment plan.",
      partsUsed:
        "Sweet almond kernels (food); sweet almond fixed (carrier) oil from pressed kernels; historically shells and hulls in some folk uses. **Avoid bitter almond kernels** except under industrial/food-regulatory control (trace flavor manufacturing).",
      preparations: [
        "**Food:** Raw or roasted sweet almonds; almond butter; almond milk (commercial or carefully homemade).",
        "**Culinary oil:** Expeller-pressed sweet almond oil for low-heat cooking or dressings (follow food-grade labeling).",
        "**Carrier oil:** Cosmetic-grade sweet almond oil for diluting essential oils or massage—patch-test first.",
        "**Storage:** Cool, airtight; nuts and oils can go rancid—refrigerate oils if kept long.",
        "**Essential / bitter oils:** Not for home internal use.",
      ],
      dosage: [
        "Educational / food ranges (adults; not prescriptions):",
        "**Food:** A small handful of sweet almonds (often cited in nutrition education around **~1 ounce / ~28 g**) as part of meals—not a medicine dose.",
        "**Topical oil:** As needed for skin; not a “dose.”",
        "**Bitter almond / EO:** **Do not ingest casually.** No home oral dosing.",
        "Prefer labeled sweet culinary almonds; ask a clinician about nut use if you have digestive disease, chewing difficulty, or allergy risk.",
      ],
      traditionalUses:
        "Scripture’s early-blooming tree of watchfulness and the priestly rod that budded. Sweet kernels as food and oil of the Levant; bitter almond is a separate, toxic chemistry.",
      prepNote:
        "Eat labeled sweet almonds as food. Use sweet almond oil topically if desired. Never treat bitter almond as a home remedy.",
      emoji: "🌰",
    },
    {
      id: "anise",
      name: "Anise",
      verse: "Matthew 23:23",
      verseText:
        "Woe unto you, scribes and Pharisees, hypocrites! for ye pay tithe of mint and anise and cummin…",
      scientificName: "*Pimpinella anisum* L. (Apiaceae / carrot family)",
      scientificNote:
        "The KJV’s “anise” in Matthew 23:23 translates Greek *anēthon*, which most modern scholars and translations identify as **dill** (*Anethum graveolens*), not true anise. True anise is still a gift of creation and a classic herbal spice; it simply is **not** the plant Jesus most likely named in that verse.",
      commonName:
        "Anise; aniseed; sweet cumin (folk name—do not confuse with true cumin)",
      benefits:
        "Sweet seed of the spice routes — traditional digestive and aromatic ally",
      botanicalSummary:
        "An annual herb, usually 1–2 feet tall, with finely divided leaves and umbrella-like clusters of tiny white flowers that ripen into small, gray-brown, ridged seeds. The aroma is sweet, licorice-like (anethole), warmer and sweeter than dill’s grassy scent.",
      intro:
        "God filled the Apiaceae family with fragrant seeds that settle the stomach after meals—anise among them. Mediterranean and Near Eastern kitchens have long sweetened breads, cordials, and after-dinner teas with these seeds. Whether or not *Pimpinella* appears under a Bible plant name, it fits the larger biblical pattern of herbs used in food and careful living (cf. the spirit of Genesis 1:29 and the garden wisdom of many cultures). We honor Scripture by being accurate about *anēthon*, and we honor creation by using anise wisely as the spice it is.",
      region:
        "Likely originated in the eastern Mediterranean and Southwest Asia; long cultivated in Egypt, the Levant, southern Europe, and later worldwide in warm-temperate climates.",
      ancientUses: [
        "**Biblical naming debate:** Matthew 23:23 (KJV “anise”)—Greek *anēthon* is now usually rendered **dill**; Mishnah tithing practice fits garden dill. True anise (*P. anisum*) was known in the wider Greco-Roman world but is a separate plant.",
        "**Egypt and classical spice trade:** Seeds used as condiment and in aromatic drinks; Dioscorides and later writers note carminative (gas-easing) folk use.",
        "**Roman and medieval Europe:** Flavoring for breads, sausages, and digestive cordials; aniseed biscuits and comfits in later European tradition.",
        "**Middle Eastern and Indian kitchens:** Seeds in spice blends, sweets, and after-meal chewing traditions.",
        "**Folk herbalism:** Warm teas for “wind,” mild cough folklore, and breath fragrance—kitchen medicine, not temple ritual.",
      ],
      modernResearch: [
        "Anise seed and oil are rich in **trans-anethole**; laboratory work explores antimicrobial and antispasmodic effects—mostly preclinical.",
        "Traditional European herbal use as a **carminative** and aromatic digestive is reflected in older pharmacopeial descriptions; modern human trials are limited compared with the depth of kitchen tradition.",
        "Anise oil shares chemistry with related “licorice-scent” spices; quality and adulteration (e.g., with star anise look-alikes in some markets) matter for safety.",
        "Do not confuse culinary anise with toxic look-alike seeds sold dishonestly—buy from reputable spice sources.",
      ],
      sideEffects:
        "Culinary amounts are generally recognized as safe for most adults. Concentrated tea or oil may cause stomach upset or allergic reactions (Apiaceae sensitivity; cross-reaction possible with celery, carrot, etc.). **Anise essential oil is not for casual oral use**—concentrated anethole can be toxic in excess. Medicinal amounts in **pregnancy** should be discussed with a clinician (traditional caution with strong estrogenic folklore around anethole-rich plants—evidence mixed; prudence is wise). Infants: do not give essential oil; even teas need professional guidance. This is educational, not a prescription.",
      partsUsed:
        "Dried ripe fruits (“seeds”); occasionally leaf as a minor culinary herb; essential oil distilled from the fruit.",
      preparations: [
        "**Culinary:** Whole or lightly crushed seeds in breads, cookies, stews, and spice blends.",
        "**Infusion:** 1 teaspoon crushed seeds per cup, steeped covered 5–10 minutes; strain.",
        "**Cordial / honey:** Traditional folk sweetening of a mild infusion (educational tradition).",
        "**Essential oil:** Aromatic or highly diluted topical use only when appropriate—**not casual internal use**.",
        "**Storage:** Airtight, cool, dark; seeds keep aroma about a year.",
      ],
      dosage: [
        "Educational ranges (adults):",
        "**Tea:** about **1–2 g** (roughly ½–1 teaspoon) crushed seed per cup, up to **1–3 cups** daily short-term as a digestive tea tradition.",
        "**Culinary:** pinch to ½ teaspoon in cooking as flavor—not a drug dose.",
        "**Essential oil:** **Do not ingest casually.** Dilute heavily for scent only if used at all.",
        "Separate from biblical dill (*Anethum*) when teaching Scripture; both can live in a Christian herbal kitchen with clear labels.",
      ],
      traditionalUses:
        "A sweet licorice-scented spice of Mediterranean kitchens. The KJV’s “anise” in Matthew 23:23 is almost certainly dill; true *Pimpinella* remains a creation gift used after meals.",
      prepNote:
        "Crush seeds lightly for tea or baking. Do not ingest anise essential oil. Label clearly beside garden dill.",
      emoji: "🌱",
    },
    {
      id: "arnica",
      name: "Arnica",
      verse: "Revelation 22:2",
      verseText:
        "…the leaves of the tree were for the healing of the nations.",
      scientificName:
        "*Arnica montana* L. (Asteraceae / daisy family); related North American *Arnica* species appear in some topical products—identify the label.",
      scientificNote:
        "**EXTERNAL ONLY. Toxic if swallowed.** Herbal-strength arnica (teas, material-dose tinctures, “bruise cures” taken internally) must never be swallowed. Do not apply to broken skin, open wounds, or mucous membranes. Homeopathic pellets are a different dilution category—do not assume they make strong arnica safe to drink. Arnica is not a named Bible plant; Revelation 22:2 is a prophetic picture of healing, not a license to ignore plant toxicity.",
      commonName:
        "Arnica; mountain arnica; leopard’s bane; wolf’s bane (folk names—do not confuse naming with other toxic “banes”)",
      benefits:
        "EXTERNAL ONLY — mountain daisy for bruises; toxic if swallowed",
      botanicalSummary:
        "A perennial alpine daisy with opposite leaves and bright yellow-orange flower heads on upright stems, often 1–2 feet tall. It thrives in mountain meadows. The flowers and root have a sharp, aromatic scent; the plant contains sesquiterpene lactones (notably helenalin) that underlie both folk topical use and internal toxicity.",
      intro:
        "Arnica is **not** a named Bible plant—and inventing a verse would dishonor Scripture. It is still part of the wider garden of creation: a highland flower that European mountain peoples learned to apply **outside** the body for bumps and strains. That boundary is the wisdom. What soothes when diluted on unbroken skin can harm when swallowed. Faithful herbal education means gratitude without recklessness—“the leaves of the tree were for the healing of the nations” (Revelation 22:2) is a prophetic picture, not a license to ignore plant toxicity.",
      region:
        "Mountain regions of Europe (Alps, Pyrenees, Balkans, and similar elevations); related species in western North America. Prefers acidic, nutrient-poor meadow soils; wild populations are often protected—prefer cultivated sources.",
      ancientUses: [
        "**No clear biblical citation**—frame as later European folk provision, not a tabernacle herb.",
        "**Alpine and Germanic folk medicine:** Fresh or dried flower preparations as rubs and compresses for bruises, sore muscles, and sprains (external).",
        "**Homeopathic tradition:** Extremely diluted oral arnica is a separate practice with its own debates; this monograph addresses **herbal-strength** arnica, which must not be swallowed.",
        "**Classical continuity:** Mountain peoples’ topical liniments rather than kitchen spice use.",
        "**Modern herbal pharmacy:** Gels, ointments, and oils standardized for external application.",
      ],
      modernResearch: [
        "Topical arnica preparations have been studied for **bruise appearance, muscle soreness, and osteoarthritis discomfort** with mixed results; some small trials suggest modest benefit, others do not—evidence is not definitive.",
        "Anti-inflammatory activity of helenalin and related lactones is documented in laboratory models; that does **not** prove safe or effective self-treatment of disease.",
        "Regulatory and safety literature consistently warn that **oral herbal arnica is unsafe**; the U.S. FDA has classified *Arnica montana* among herbs not generally recognized as safe for oral use.",
        "LiverTox notes topical use has not been linked to liver injury in the way oral botanicals sometimes are—still, broken skin increases absorption risk.",
      ],
      sideEffects:
        "**Never swallow herbal arnica** (teas, tinctures at material doses, or “bruise cures” taken internally)—poisoning can include vomiting, internal bleeding, organ stress, and worse. **Do not apply to broken skin, open wounds, or mucous membranes.** Topical use may cause redness, itching, blistering, or contact dermatitis—especially in people allergic to Asteraceae (ragweed, chrysanthemum, etc.). Stop if rash worsens. Keep away from eyes and children. Homeopathic pellets are a different dilution category—do not assume they make strong arnica “safe to drink.” Educational only—not first aid that replaces medical care for serious injury.",
      partsUsed:
        "Flower heads (most common in modern gels); sometimes root/rhizome in traditional external formulas.",
      preparations: [
        "**Commercial gel / ointment / cream:** Follow label; apply thinly to unbroken skin.",
        "**Oil / liniment:** Traditional external rubs from infused flowers—only on intact skin.",
        "**Compress:** Diluted external wash historically—avoid broken skin.",
        "**Do not prepare “arnica tea” for drinking.**",
        "**Storage:** Follow product dating; homemade oils need careful hygiene and labeling **EXTERNAL ONLY**.",
      ],
      dosage: [
        "Educational external guidance (adults; not prescriptions):",
        "**Topical gel/cream:** thin layer to affected unbroken skin **1–3 times daily** as labeled—typically short-term.",
        "**Tincture (external only):** sometimes diluted for compress per traditional pharmacy—**never oral**.",
        "**Oral herbal arnica:** **None. Zero.**",
        "Seek medical care for severe swelling, suspected fracture, head injury, or infection.",
      ],
      traditionalUses:
        "European mountain folk used diluted flower preparations on unbroken skin for bruises and strains. Not a biblical species. Never a tea.",
      prepNote:
        "EXTERNAL ONLY. Follow labeled gels on intact skin. Do not swallow. Do not put on open wounds.",
      emoji: "🌼",
    },
    {
      id: "ashwagandha",
      name: "Ashwagandha",
      verse: "James 1:17",
      verseText:
        "Every good gift and every perfect gift is from above, and cometh down from the Father of lights…",
      scientificName:
        "*Withania somnifera* (L.) Dunal (Solanaceae / nightshade family)",
      scientificNote:
        "Ashwagandha is rooted in Indian Ayurvedic tradition, not in the Hebrew or Greek Bible. James 1:17 frames botanical knowledge from many lands as a gift—not a forced plant identification. “Indian ginseng” is a marketing name; it is not true ginseng.",
      commonName:
        "Ashwagandha; winter cherry; Indian ginseng (marketing name—not true ginseng)",
      benefits:
        "Ayurvedic “strength of a horse” root — traditional calm and resilience ally (use with care)",
      botanicalSummary:
        "A small shrub with dull green leaves, pale yellow-green bell flowers, and red berry-like fruits enclosed in papery calyces (physalis-like lanterns). The thick root is the primary traditional medicine part—earthy, slightly bitter, and horse-scented (hence the Sanskrit name). It contains withanolides (steroidal lactones) studied as signature constituents.",
      intro:
        "Ashwagandha is rooted in Indian Ayurvedic tradition, not in the Hebrew or Greek Bible. Christians need not force a false verse onto it. We can still receive it—if at all—as part of God’s global provision of plants that cultures have stewarded for restlessness, fatigue, and seasonal strain, always under wisdom and medical accountability. “Every good gift and every perfect gift is from above” (James 1:17) includes botanical knowledge from many lands; it never cancels caution, pregnancy warnings, or the call to test everything carefully (1 Thessalonians 5:21).",
      region:
        "Native to dry regions of India, the Middle East, and parts of Africa; widely cultivated in India and increasingly elsewhere for the supplement trade.",
      ancientUses: [
        "**Ayurveda:** Classed among *rasayana* (rejuvenative) herbs; traditionally for vitality, sleep quality, stress fortitude, and “strength”—root powders and medicated ghees/milks.",
        "**Unani and folk India/Pakistan/Africa:** Tonics and calming preparations in regional practice.",
        "**Name lore:** “Ashwa” (horse) + “gandha” (smell/essence)—folk image of vigor.",
        "**Not a biblical plant:** Honest teaching separates Near Eastern Scripture flora from South Asian materia medica.",
        "**Modern global use:** Capsules and extracts marketed for stress and sleep support—quality varies widely.",
      ],
      modernResearch: [
        "Clinical research (varying quality) has explored ashwagandha extracts for **perceived stress, anxiety symptoms, sleep, and physical performance** markers; some randomized trials report benefits versus placebo, but products and doses differ, and not all results replicate cleanly.",
        "NCCIH and similar summaries note promising but still developing evidence—**not** a proven cure for medical anxiety disorders, infertility, or thyroid disease.",
        "Case reports have linked some ashwagandha products to **liver injury** (uncommon but serious)—a reason for clinician oversight, not panic or denial.",
        "Withanolide content and extract standardization vary; “root only” vs. leaf-containing products are not identical.",
      ],
      sideEffects:
        "May cause drowsiness, stomach upset, diarrhea, or rare allergic reactions. **Avoid in pregnancy** (traditional and modern caution for possible abortifacient risk). Breastfeeding safety is not well established—ask a clinician. People with **autoimmune disease**, hormone-sensitive conditions, thyroid disorders, or those on sedatives, thyroid medicine, diabetes medicine, or immunosuppressants need professional guidance before use. Stop and seek care for yellowing skin/eyes, dark urine, severe fatigue, or upper-right abdominal pain (possible liver warning signs). Nightshade-family sensitivity is uncommon but possible. Educational only.",
      partsUsed:
        "Root (primary); sometimes leaf in modern extracts (know your product); berries traditionally less emphasized for internal tonic use.",
      preparations: [
        "**Powdered root:** Mixed traditionally with warm milk or water (classic Ayurvedic style).",
        "**Capsules / standardized extracts:** Common modern form—choose reputable brands with clear plant part labeling.",
        "**Tea / decoction:** Root simmered gently—earthy taste; potency less predictable than extracts.",
        "**Storage:** Cool, dry, airtight; protect from moisture.",
        "**Essential oil:** Not a typical ashwagandha preparation; ignore trendy “EO” marketing for this root.",
      ],
      dosage: [
        "Educational ranges drawn from studied extract traditions (adults; **not** a self-prescription):",
        "**Root powder (traditional ballpark):** often about **1–3 g** daily in divided amounts with food—start low.",
        "**Standardized extracts:** many trials used roughly **300–600 mg** once or twice daily of concentrated extract—**follow the specific product label** and a qualified practitioner.",
        "Duration in studies is often weeks to a few months—not indefinite unsupervised use.",
        "Discontinue before surgery if advised; never replace prescribed mental-health or thyroid care.",
      ],
      traditionalUses:
        "Ayurvedic rasayana root traditionally used for vitality, rest, and stress fortitude. Not a biblical plant. Quality and liver-safety literacy matter.",
      prepNote:
        "Prefer labeled root products if a clinician agrees. Avoid in pregnancy. This is not a substitute for mental-health or thyroid care.",
      emoji: "🌿",
    },
    {
      id: "astragalus",
      name: "Astragalus",
      verse: "Genesis 1:29",
      verseText:
        "And God said, Behold, I have given you every herb bearing seed, which is upon the face of all the earth…",
      scientificName:
        "*Astragalus membranaceus* (Fisch.) Bunge (syn. often cited *A. propinquus*); Fabaceae / pea family. Chinese *huang qi*. (Do not confuse with toxic locoweed *Astragalus* species of western rangelands.)",
      scientificNote:
        "Astragalus belongs to Chinese herbal medicine, not to the flora of biblical Israel. No responsible Scripture verse attaches to *huang qi*; Genesis 1:29 is creation framing only. Do not confuse medicinal milkvetch root with toxic locoweed *Astragalus* species.",
      commonName: "Astragalus; milkvetch root; huang qi",
      benefits:
        "Yellow “qi” root of Chinese tradition — folk deep immune and vitality ally",
      botanicalSummary:
        "A perennial pea-family herb with pinnate leaves and pale yellow flowers, grown for its long, fibrous, yellowish taproot. Slices of dried root look like pale tongue depressors and smell faintly sweet-beany. Key studied fractions include polysaccharides and triterpenoid saponins (astragalosides).",
      intro:
        "Astragalus belongs to Chinese herbal medicine, not to the flora of biblical Israel. Still, the Creator’s botanical generosity spans continents. Many believers quietly include such roots in a broader “pharmacy of creation” mindset—grateful, curious, and unwilling to overclaim. Pair that gratitude with honesty: astragalus is a traditional tonic, not a substitute for vaccines, antibiotics, or oncology care, and autoimmune or immunosuppressant situations require a clinician’s eye.",
      region:
        "Native to northern China, Mongolia, and adjacent regions; major cultivation in China for decoction slices and extracts.",
      ancientUses: [
        "**Traditional Chinese Medicine (TCM):** Premier qi-tonifying root—traditionally for fatigue, appetite, spontaneous sweating, and “wei qi” (surface defense) support in classical pattern language.",
        "**Soups and decoctions:** Long-simmered with other foods/herbs in Chinese kitchens and pharmacies.",
        "**Not biblical:** No responsible Scripture verse attaches to *huang qi*; teach it as East Asian stewardship of a pea-family root.",
        "**Folk continuity:** Used for centuries in combination formulas more often than as a lone “miracle herb.”",
        "**Modern diaspora:** Teas, capsules, and liquid extracts in integrative settings.",
      ],
      modernResearch: [
        "Research interest focuses on **immune modulation**, fatigue, and supportive care contexts; many studies are preliminary, small, or combination-formula designs hard to isolate.",
        "Astragalus polysaccharides are widely studied in laboratory immune models—lab activity ≠ proven disease treatment.",
        "Some clinical exploration exists in chronic viral and quality-of-life supportive settings; results are mixed and must not replace standard care.",
        "Quality control matters: species authentication and avoidance of adulterants are ongoing herbal-industry concerns.",
      ],
      sideEffects:
        "Usually well tolerated in traditional food-like decoction amounts; possible digestive upset, bloating, or rash. **Theoretical and practical cautions:** may stimulate immune activity—people with **autoimmune disease** or on **immunosuppressant drugs** (including after transplant) should avoid or use only with specialist approval. Limited safety data in pregnancy/breastfeeding—prefer avoidance of medicinal doses unless a clinician agrees. Rare allergy to legumes possible. Educational information only.",
      partsUsed:
        "Dried root (radix); sometimes root preparations standardized to astragalosides or polysaccharides.",
      preparations: [
        "**Decoction:** Simmer dried root slices 20–40 minutes; traditional soup stock use.",
        "**Capsules / extracts:** Convenient modern forms—verify *A. membranaceus* / *A. propinquus* on the label.",
        "**Combination teas:** Common in TCM-inspired blends.",
        "**Storage:** Dry slices in airtight containers; discard if moldy or musty.",
        "**EO:** Not applicable as a primary preparation.",
      ],
      dosage: [
        "Educational traditional ranges (adults):",
        "**Dried root decoction:** commonly about **9–30 g** dried root per day in classical decoction practice (often toward the lower/mid range for general tonic soups)—this is TCM pharmacy context, not a Western OTC default.",
        "**Extracts/capsules:** follow label (often hundreds of mg extract, 1–3 times daily)—potency varies.",
        "Use short-to-moderate courses unless supervised; stop if illness suggests infection needing medical diagnosis.",
      ],
      traditionalUses:
        "Chinese *huang qi*, a pea-family tonic root simmered in soups. Not a biblical plant. Not a substitute for vaccines, antibiotics, or oncology care.",
      prepNote:
        "Verify *A. membranaceus* / *A. propinquus*. Avoid locoweed species. Ask a specialist if you have autoimmune disease or take immunosuppressants.",
      emoji: "🌾",
    },
    {
      id: "basil",
      name: "Basil",
      verse: "Psalm 34:8",
      verseText: "O taste and see that the LORD is good…",
      scientificName: "*Ocimum basilicum* L. (Lamiaceae / mint family)",
      scientificNote:
        "Holy basil / tulsi (*Ocimum tenuiflorum*, syn. *O. sanctum*) is a related but distinct species—worthy of its own later monograph; this entry focuses on **sweet culinary basil**. Basil is a joy of the summer garden more than a named Hebrew Bible herb.",
      commonName: "Basil; sweet basil; Genovese basil (culinary types)",
      benefits: "Fragrant kitchen mint — traditional digestive and culinary joy",
      botanicalSummary:
        "A tender annual (perennial in frost-free climates) with glossy, aromatic leaves and spikes of white to purple flowers. Scent varies by cultivar—from clove-spice (eugenol types) to lemon or cinnamon notes—thanks to a complex essential-oil profile (linalool, eugenol, methyl chavicol/estragole depending on chemotype).",
      intro:
        "Basil is a joy of the summer garden more than a named Hebrew Bible herb. Mediterranean Christian cooks have long paired it with tomatoes and olive oil—simple table fellowship that echoes the goodness of created flavors. “Taste and see that the Lord is good” (Psalm 34:8) is about trusting God, yet it also licenses gratitude for fragrant leaves that make ordinary meals feel like celebration. Use basil freely as food; reserve concentrated oil for cautious external or aromatic use.",
      region:
        "Likely tropical Asia origin with deep Mediterranean cultivation history; now grown worldwide in warm seasons. Loves sun, rich moist soil, and pinching to delay flowering.",
      ancientUses: [
        "**India and Asia:** Sacred and culinary relatives (especially tulsi) in spiritual and household practice—keep sweet basil distinct in teaching.",
        "**Mediterranean antiquity:** Known to Greeks and Romans as an aromatic garden herb; folklore mixed reverence and superstition around the plant.",
        "**Medieval and Renaissance Europe:** Culinary herb for sauces, salads, and vinegars; digestion-supporting folk teas after rich meals.",
        "**Italian Christian foodways:** Pesto and summer dishes—hospitality in a mortar and pestle.",
        "**No forced Bible verse:** Honest creation framing rather than inventing “biblical basil.”",
      ],
      modernResearch: [
        "Culinary basil provides dietary polyphenols and aroma compounds; health interest is mainly as part of herb-rich diets.",
        "Essential oil shows laboratory antimicrobial activity; chemotypes high in **estragole** raise theoretical long-term high-dose concerns in toxicology literature—another reason **not** to drink basil essential oil.",
        "Preliminary research on basil extracts exists for metabolic and stress-related markers; evidence is limited and cultivar-dependent.",
        "Holy basil (*O. tenuiflorum*) has a separate, larger clinical literature—do not paste those results onto sweet pesto basil.",
      ],
      sideEffects:
        "Food amounts are safe for most people. Rare allergy to Lamiaceae herbs. Concentrated extracts or oils may irritate skin or stomach. **Basil essential oil: not for casual oral use**; keep away from children. Medicinal concentrated use in pregnancy should be clinician-guided (culinary seasoning is different from oil capsules). Estragole-rich chemotypes: avoid chronic high-dose oil exposure. Educational only.",
      partsUsed:
        "Fresh and dried leaves; flowering tops; seeds occasionally in drinks (different texture tradition); essential oil from flowering herb.",
      preparations: [
        "**Culinary:** Fresh leaves in salads, pesto, pasta, Thai curries (different cultivars); add late in cooking to preserve aroma.",
        "**Infusion:** Mild leaf tea after meals (culinary strength).",
        "**Pesto / oil infusions:** Food preparations; refrigerate and practice safe garlic-oil hygiene.",
        "**Essential oil:** Aromatherapy / diluted topical only—**not casual internal use**.",
        "**Storage:** Fresh short-term; dried leaves lose aroma quickly—use within months.",
      ],
      dosage: [
        "Educational ranges (adults):",
        "**Food:** liberally as culinary herb.",
        "**Tea:** about **1–2 teaspoons** dried leaf (or a few fresh leaves) per cup, 1–2 cups as desired.",
        "**Essential oil:** **Do not ingest casually.** If used on skin, dilute heavily and patch-test.",
        "Save holy basil details for a dedicated entry later.",
      ],
      traditionalUses:
        "Sweet kitchen basil of Mediterranean tables—pesto, salads, and after-meal teas. Distinct from holy basil (tulsi), which deserves its own later page.",
      prepNote:
        "Use fresh leaves in food. Mild culinary tea is fine. Do not drink basil essential oil. Holy basil is a different species.",
      emoji: "🌿",
    },
    {
      id: "bay-laurel",
      name: "Bay Laurel",
      verse: "Psalm 37:35",
      verseText:
        "I have seen the wicked in great power, and spreading himself like a green bay tree.",
      scientificName: "*Laurus nobilis* L. (Lauraceae / laurel family)",
      scientificNote:
        "Psalm 37:35 in the KJV speaks of a wicked man spreading “like a green bay tree,” but the Hebrew *ezrach* more literally means a **native tree** flourishing in its own soil—not a guaranteed ID of *Laurus nobilis*. Modern translations usually drop the “bay” specificity. **Do not confuse** true bay with mountain laurel (*Kalmia*, toxic), cherry laurel (*Prunus laurocerasus*, toxic cyanogenic leaves), or California bay (*Umbellularia californica*, different intensity).",
      commonName: "Bay leaf; sweet bay; true laurel; bay laurel",
      benefits:
        "Noble leaf of the Mediterranean kitchen — aromatic stew herb and traditional digestive spice",
      botanicalSummary:
        "An evergreen shrub or small tree with leathery, fragrant dark-green leaves, creamy flowers, and (on female trees) dark berries. Crushed leaves release a warm camphoraceous-spice aroma from cineole and related volatiles. Ancient victors’ “laurel wreaths” came from this plant’s cultural fame.",
      intro:
        "Psalm 37:35 in the KJV speaks of a wicked man spreading “like a green bay tree,” but the Hebrew *ezrach* more literally means a **native tree** flourishing in its own soil—not a guaranteed ID of *Laurus nobilis*. Modern translations usually drop the “bay” specificity. So we teach bay laurel with humility: a Mediterranean evergreen God caused to thrive around the biblical world, beloved in cooking, possible but not certain in that one English rendering. The leaf still flavors the Christian table—soups, beans, and Sabbath stews—without needing a forced proof text.",
      region:
        "Native to the Mediterranean basin; cultivated in similar climates worldwide. Prefers sun to part shade and well-drained soil; container-friendly in colder zones.",
      ancientUses: [
        "**Greek and Roman culture:** Laurel wreaths for poets, athletes, and emperors; sacred associations with Apollo in pagan myth (historical note, not Christian practice).",
        "**Culinary antiquity:** Leaves in stews, sauces, and preserved foods across the Mediterranean.",
        "**Classical herbalism:** Digestive and aromatic folk uses; berries and leaves in historical pharmacy.",
        "**Psalm 37:35 (KJV):** Traditional English “bay tree” reading—botanically uncertain; teach the textual caution.",
        "**Folk Europe:** Leaf in pickling spices and winter broths; “laurel” as household evergreen.",
      ],
      modernResearch: [
        "Bay leaf tea and extracts show antioxidant and laboratory antimicrobial activity; human clinical evidence for specific diseases is limited.",
        "Culinary use contributes aroma compounds and polyphenols as part of herb-seasoned diets.",
        "Essential oil (cineole-rich) is potent—studied more in food science and aromatics than as an oral medicine.",
        "Distinguish true bay from toxic look-alike “laurels” in gardening education—safety first.",
      ],
      sideEffects:
        "Whole culinary leaves are used to flavor food and should be **removed before eating** (choking/irritation hazard if swallowed whole). Allergic contact dermatitis possible. **Bay essential oil is not for casual oral use** and can irritate skin undiluted. Medicinal concentrated use in pregnancy: seek advice; food seasoning is generally fine. Do not use toxic look-alike laurels in cooking. Educational only.",
      partsUsed:
        "Dried (or fresh) leaves; occasionally berries in traditional formulas; essential oil from leaves.",
      preparations: [
        "**Culinary:** 1 leaf in soups, beans, sauces, and stews; remove before serving.",
        "**Infusion:** Light tea from 1 small crumbled leaf—mild digestive tradition.",
        "**Bouquet garni:** Tied with thyme and parsley in French Christian-kitchen heritage cooking.",
        "**Essential oil:** Diluted aromatic / external use only—**not casual ingestion**.",
        "**Storage:** Whole dried leaves in jars; replace when aroma fades.",
      ],
      dosage: [
        "Educational ranges (adults):",
        "**Cooking:** 1–2 leaves per pot of soup/stew.",
        "**Tea:** about **1 small leaf** per cup, steeped 5–10 minutes, occasionally.",
        "**Essential oil:** **Do not ingest casually.**",
        "Verify plant ID before foraging or garden use.",
      ],
      traditionalUses:
        "Mediterranean stew leaf and classical wreath plant. The KJV “green bay tree” of Psalm 37:35 is botanically uncertain. Never cook with toxic look-alike laurels.",
      prepNote:
        "Add 1–2 true bay leaves to soups and remove before serving. Confirm *Laurus nobilis*—not mountain or cherry laurel.",
      emoji: "🍃",
    },
    {
      id: "bilberry",
      name: "Bilberry",
      verse: "Genesis 1:29",
      verseText:
        "And God said, Behold, I have given you every herb bearing seed, which is upon the face of all the earth…",
      scientificName: "*Vaccinium myrtillus* L. (Ericaceae / heath family)",
      scientificNote:
        "Bilberry is a northern European blessing, not a desert plant of Canaan. Blueberry (*Vaccinium corymbosum* and others) is a cousin—similar gifts, not identical phytochemistry. Genesis 1:29 is creation framing, not a biblical species claim.",
      commonName: "Bilberry; European blueberry; whortleberry",
      benefits:
        "Dark northern berry — traditional eyes and microcirculation folk ally (food first)",
      botanicalSummary:
        "A low deciduous shrub of acidic woodlands and moors, with small urn-shaped flowers and dark blue-black berries that stain fingers deeply. Leaves are small and finely toothed. Berries are rich in **anthocyanins** (the purple pigments), which draw research interest for vascular and antioxidant themes.",
      intro:
        "Bilberry is a northern European blessing, not a desert plant of Canaan. Yet the same Lord who gave Israel grapes and pomegranates also filled heaths with dark berries for other peoples. Christians can receive bilberry as food and as a carefully studied traditional eye-support herb—without inventing a Bible scene in a Finnish bog. Eat the fruit with gratitude; treat concentrated extracts as supplements that deserve label literacy and medical common sense.",
      region:
        "Native to northern and central Europe, parts of Asia, and similar cool acidic habitats; wild-harvested and cultivated. Prefers moist, acidic soils and partial shade to sun.",
      ancientUses: [
        "**European folk food:** Fresh berries, preserves, and dried fruit for winter.",
        "**Traditional herbalism:** Dried berries for mild diarrhea; leaf teas in older folk practice (leaf internal use is more cautioned today than fruit).",
        "**WWII folklore:** Stories of RAF pilots and bilberry jam for night vision are popular—and **often overstated**; treat as legend needing evidence, not proof.",
        "**No biblical species claim:** Frame as creation provision in northern lands.",
        "**Pharmacy tradition:** Anthocyanin-rich extracts in twentieth-century European phytotherapy for microcirculation folklore.",
      ],
      modernResearch: [
        "Bilberry fruit extracts have been studied for **eye comfort, retinal blood-flow markers, and venous/capillary symptoms** with mixed-quality trials; some traditional European monographs support berry preparations for mild circulatory discomfort—**not** a cure for macular degeneration or glaucoma.",
        "Anthocyanins are well characterized chemically; clinical outcomes depend on dose, extract, and study design.",
        "Dried fruit has traditional use recognition in some herbal frameworks for mild diarrhea.",
        "Leaf preparations are a different risk/benefit profile—prefer fruit for general educational recommendation.",
      ],
      sideEffects:
        "Culinary berries are safe for most people. High-dose extracts may upset the stomach or, theoretically, affect bleeding risk—use caution with anticoagulant medicines and before surgery. Diarrhea leaf teas and excessive dried fruit can alter digestion both ways. **Pregnancy:** food berries are fine; high-dose extracts need clinician advice. Diabetes medicines: monitor if using concentrated products (theoretical glucose effects). Educational only—eye disease requires an optometrist/ophthalmologist, not berries alone.",
      partsUsed:
        "Ripe fruit (fresh, dried, or extract); leaves historically (use caution; not the focus here).",
      preparations: [
        "**Food:** Fresh berries, jam, smoothies, baked goods.",
        "**Dried fruit:** Chewed or simmered for traditional mild digestive use.",
        "**Standardized extracts / capsules:** Often standardized to anthocyanins—follow label.",
        "**Tea:** Fruit decoction; leaf tea only with informed caution.",
        "**Storage:** Freeze fresh berries; keep dried fruit dry and sealed.",
      ],
      dosage: [
        "Educational ranges (adults):",
        "**Food:** a serving of berries as desired in the diet.",
        "**Dried fruit (traditional):** often roughly **5–10 g** as needed for mild, short-term digestive folklore use.",
        "**Extracts:** many products land around **160–480 mg** concentrated extract daily in divided doses—**read the label**; anthocyanin % varies.",
        "Seek eye care for vision changes; supplements are adjunct conversation, not diagnosis.",
      ],
      traditionalUses:
        "Northern European food berry later used in phytotherapy for eyes and microcirculation folklore. Not a biblical species. Fruit first; extracts with label literacy.",
      prepNote:
        "Eat as food. Prefer fruit over leaf teas. Eye disease needs an eye doctor, not berries alone.",
      emoji: "🫐",
    },
    {
      id: "black-cohosh",
      name: "Black Cohosh",
      verse: "Genesis 1:29",
      verseText:
        "And God said, Behold, I have given you every herb bearing seed, which is upon the face of all the earth…",
      scientificName:
        "*Actaea racemosa* L. (syn. *Cimicifuga racemosa* (L.) Nutt.); Ranunculaceae / buttercup family",
      scientificNote:
        "Black cohosh grows in American forests, far from biblical geography. Genesis 1:29 is creation framing only—no invented verse. **Critical distinction:** this is **not** blue cohosh (*Caulophyllum thalictroides*), which has serious safety problems especially around labor induction. Liver reports and pregnancy avoidance are part of loving our neighbor.",
      commonName: "Black cohosh; black bugbane; fairy candle",
      benefits:
        "Woodland root of Native and later women’s folk tradition — menopause symptom ally with liver and pregnancy cautions",
      botanicalSummary:
        "A tall woodland perennial of eastern North America, with compound leaves and long white bottlebrush flower spikes in summer. The knotted dark rhizome/root is the medicinal part traditionally dried for teas and extracts. It is **not** a phytoestrogen in the simple soy sense; its mechanism remains debated (serotonergic and other pathways have been proposed).",
      intro:
        "Black cohosh grows in American forests, far from biblical geography. We include it because this pharmacy serves real households navigating midlife change—and because honesty about **liver reports** and **pregnancy avoidance** is part of loving our neighbor. God’s provision includes the humility to say “ask your doctor” and “stop if warning signs appear.” No invented verse; plenty of pastoral care in clear cautions.",
      region:
        "Eastern North American deciduous forests (Canada to Georgia, west toward Missouri); commercial cultivation and wildcraft with sustainability concerns for wild stands.",
      ancientUses: [
        "**Indigenous North American practice:** Traditional use by several First Nations for women’s health, rheumatism folklore, and ceremonial/medicine contexts (specific tribal knowledge varies—avoid flattening into one story).",
        "**Nineteenth-century Eclectic physicians:** Popularized “black cohosh” in American botanical medicine for gynecologic and musculoskeletal complaints.",
        "**European phytotherapy adoption:** Later became a leading herbal option in menopause symptom products.",
        "**Not biblical:** North American woodland species—creation framing only.",
        "**Modern supplements:** Capsules and liquid extracts widely sold—adulteration with related Asian *Actaea* species has been a quality scandal in some liver-case investigations.",
      ],
      modernResearch: [
        "NCCIH summarizes that black cohosh has been studied for **menopause symptoms** (especially hot flashes) with **inconsistent results**—some trials suggest benefit, others do not.",
        "EMA has assessed certain rhizome preparations in a well-established-use framework for menopause complaints in parts of Europe—regulatory status differs by region and product.",
        "**Liver injury:** Rare but serious reports exist with products labeled black cohosh; causality is sometimes uncertain (adulteration possible), yet labels and clinicians take the risk seriously.",
        "Not established as safe or effective for preventing breast cancer recurrence—hormone-sensitive cancer history needs oncology advice before use.",
      ],
      sideEffects:
        "Digestive upset, headache, rash, or weight gain are possible. **Stop immediately and seek care** for symptoms of liver injury: unusual fatigue, loss of appetite, yellowing of skin/eyes, dark urine, severe upper abdominal pain, nausea/vomiting. **Do not use in pregnancy or while breastfeeding.** Avoid or use only with specialist guidance if you have liver disease, hormone-sensitive cancers, or unexplained vaginal bleeding. Do not combine casually with hormone therapies unless a clinician agrees. Choose identity-tested products. Educational—not a HRT replacement plan.",
      partsUsed: "Dried rhizome and root.",
      preparations: [
        "**Standardized extracts / tablets:** Most common modern form.",
        "**Tincture:** Traditional liquid extract—follow professional guidance.",
        "**Decoction:** Historical tea of the root—bitter; less standardized than extracts.",
        "**Storage:** Cool, dry; respect expiration dates.",
        "**Never substitute blue cohosh** for black cohosh.",
      ],
      dosage: [
        "Educational ranges (adults; clinician-guided):",
        "**Commercial extracts:** commonly about **20–80 mg** standardized extract daily (some European preparations use lower mg of highly concentrated extract—e.g., single-digit mg ranges of specific extracts)—**always follow the exact product monograph/label**.",
        "Traditional crude root doses vary; modern practice prefers characterized extracts.",
        "Many sources suggest not using continuously beyond about **6 months** without medical review.",
        "**Pregnancy: do not use.**",
      ],
      traditionalUses:
        "Eastern North American woodland root later used in menopause products. Not biblical. Not blue cohosh. Liver and pregnancy cautions are non-negotiable.",
      prepNote:
        "Use identity-tested extracts only with clinician guidance. Never in pregnancy. Stop for any liver-warning symptoms. Never substitute blue cohosh.",
      emoji: "🕯️",
    },
    {
      id: "black-pepper",
      name: "Black Pepper",
      verse: "Proverbs 15:17",
      verseText:
        "Better is a dinner of herbs where love is, than a stalled ox and hatred therewith.",
      scientificName: "*Piper nigrum* L. (Piperaceae)",
      scientificNote:
        "Black, white, and green peppercorns are the same species at different processing stages. Scripture lists costly aromatics more often than table pepper; there is no unambiguous “black pepper” verse. Proverbs 15:17 is a peaceable-table framing, not a species proof text.",
      commonName:
        "Black pepper; peppercorn (black, white, and green are the same species at different processing stages)",
      benefits: "King of spices — digestive fire and piperine companion of meals",
      botanicalSummary:
        "A tropical perennial climbing vine with heart-shaped leaves and hanging spikes of small berries (drupes). Harvested green and dried, they become black peppercorns; soaked ripe berries yield white pepper. The bite comes largely from **piperine**, an alkaloid that also affects how some nutrients and drugs are absorbed.",
      intro:
        "Black pepper traveled the ancient spice routes that also carried cinnamon and frankincense toward the Mediterranean world. Scripture lists costly aromatics more often than table pepper, yet the Roman appetite for *Piper nigrum* shaped trade in the same era the New Testament church spread along imperial roads. Whether or not a given verse names pepper, the spice reminds us that God wired human culture to seek flavor—and that “better a dinner of herbs where love is” (Proverbs 15:17) can still include a grateful grind of pepper at a peaceable table.",
      region:
        "Native to South India’s Western Ghats; major production in India, Vietnam, Indonesia, Brazil, and other tropical zones. Needs heat, humidity, and support to climb.",
      ancientUses: [
        "**Indian antiquity:** Long used in cooking and Ayurvedic formulas; often paired with long pepper (*Piper longum*).",
        "**Greco-Roman luxury:** Highly prized import; Pliny complains of Rome’s pepper bill—economic history tied to appetite.",
        "**Medieval Europe:** Currency-like value in some trade; staple of spice cabinets and sauces.",
        "**Folk digestion:** “Heating” spice to wake appetite and move stagnant meals in traditional systems.",
        "**Scripture:** No unambiguous “black pepper” verse; teach via trade-route context and creation gratitude.",
      ],
      modernResearch: [
        "Piperine is extensively studied for **bioavailability** effects (e.g., enhancing absorption of some compounds such as curcumin in research settings)—clinically relevant for **drug interaction** awareness.",
        "Culinary pepper as part of diet is ordinary food science; concentrated piperine supplements are a different category.",
        "Laboratory antimicrobial and digestive-secretion themes appear in reviews—do not overstate into infection treatment claims.",
        "White vs. black pepper differ slightly in processing and flavor, less so in basic safety as food.",
      ],
      sideEffects:
        "Food amounts are safe for most people. Large amounts may heartburn, especially with reflux. Pepper in the eyes or nose is intensely irritating. **Piperine supplements** can alter levels of medicines (including some seizure, blood-thinning, and other drugs)—check with a pharmacist. Essential oil / oleoresin is concentrated—**not for casual oral use**. Infants should not be given pepper oils. Educational only.",
      partsUsed:
        "Dried berries (peppercorns); occasionally leaf in local cuisines; oil/oleoresin in food manufacturing.",
      preparations: [
        "**Culinary:** Freshly cracked black pepper on savory foods; whole corns in pickling and stocks.",
        "**Decoction / chai spices:** Occasional crushed corn in spiced teas (culinary strength).",
        "**Combined formulas:** Classic pairing with turmeric in modern wellness cooking (food context).",
        "**Essential oil / oleoresin:** Food-industry and aromatic use—**not casual home ingestion**.",
        "**Storage:** Whole corns keep potency far longer than pre-ground pepper.",
      ],
      dosage: [
        "Educational ranges (adults):",
        "**Food:** to taste—often **1/8–1/2 teaspoon** ground pepper in a meal.",
        "**Supplements with piperine:** only as labeled and pharmacist-reviewed if you take medications.",
        "**Essential oil:** **Do not ingest casually.**",
        "Prefer whole peppercorns milled fresh for flavor and quality.",
      ],
      traditionalUses:
        "King of the spice trade from India’s Western Ghats to Roman tables. Kitchen heat for digestion; piperine supplements are a different, interaction-prone category.",
      prepNote:
        "Crack whole peppercorns at the table. Food amounts are the teaching. Ask a pharmacist before piperine capsules if you take medicines.",
      emoji: "⚫",
    },
    {
      id: "black-seeds",
      name: "Black Seeds",
      verse: "Isaiah 28:25",
      verseText:
        "When he hath made plain the face thereof, doth he not cast abroad the fitches, and scatter the cummin…",
      scientificName:
        "*Nigella sativa* L. (Ranunculaceae / buttercup family)",
      scientificNote:
        "Many botanists and translators identify Hebrew *qetsach* in Isaiah 28:25, 27 (“fitches,” “dill,” or “caraway” in various English Bibles) with **nigella / black cumin**. The harvest image—beaten with a stick, not crushed under a heavy cartwheel—fits a small seed crop. **Certainty is not absolute**; teach it as a **plausible, widely held identification**, not as dogma. Islamic hadith praise of black seed is an important Near Eastern cultural witness—not Christian Scripture, and not a promise that it “cures all disease.”",
      commonName:
        "Black seed; black cumin (not true cumin); nigella; kalonji; fennel flower; charnushka",
      benefits:
        "Small dark seed of Near Eastern bread and Prophetic tradition — culinary spice with careful, non-overclaimed heritage notes",
      botanicalSummary:
        "An annual with finely cut, fennel-like leaves and delicate pale blue to white flowers. The inflated seedpod holds numerous small, matte black, angular seeds with a peppery-oregano-onion aroma. Signature constituents include **thymoquinone** and fixed oil components studied in modern labs.",
      intro:
        "Many botanists and translators (following scholars such as Zohary and the Greek *melanthion* tradition) identify Hebrew *qetsach* in Isaiah 28:25, 27 with **nigella / black cumin**. The harvest image—beaten with a stick, not crushed under a heavy cartwheel—fits a small seed crop. Certainty is not absolute; ancient plant names can blur. In Islamic hadith literature the Prophet Muhammad is reported to have spoken of black seed as a healing common to diseases except death. A Biblical Pharmacy may acknowledge this as historical Near Eastern witness without treating hadith as Scripture, without promising “cures all disease,” and without erasing Jewish and broader Mediterranean culinary use. Humility honors everyone at the table.",
      region:
        "Southwest Asia and the eastern Mediterranean; long cultivated from Egypt and Turkey through Iran and India; naturalized in similar climates.",
      ancientUses: [
        "**Isaiah 28:25–27 (*qetsach*):** Agricultural parable of wisely differing harvest methods—commonly linked to nigella; English “fitches/dill/caraway” show translator uncertainty.",
        "**Bread spice:** Seeds scattered on flatbreads and cakes across Jewish, Arab, and wider Near Eastern foodways to this day.",
        "**Classical sources:** Greek *melanthion* / Latin *gith* described as black aromatic seed added to bread—aligned with nigella by many historians.",
        "**Prophetic Islamic tradition:** Hadith praise of black seed as general healing except death—report accurately; do not inflate into a medical guarantee.",
        "**Unani, Ayurvedic, and folk Levantine use:** Oils and seeds for respiratory, digestive, and skin folklore across centuries.",
        "**Christian educational stance:** Possible biblical spice + clear creation gift + honest interfaith historical note—no overclaim.",
      ],
      modernResearch: [
        "*N. sativa* seed and oil are among the more researched culinary-medicinal seeds; reviews describe antioxidant and anti-inflammatory laboratory activity centered on thymoquinone.",
        "Human trials have explored metabolic markers, allergy symptoms, and other outcomes with **variable quality and mixed results**—promising areas exist, but this is not a license to abandon prescribed care.",
        "Topical oil is traditionally used for skin comfort; patch-test for allergy.",
        "Product quality (seed freshness, oil oxidation, adulteration) strongly affects real-world experience.",
      ],
      sideEffects:
        "Culinary seed amounts are generally safe. Concentrated oil or high doses may cause stomach upset or allergic reactions (Ranunculaceae). **Pregnancy:** food sprinkling is usually fine; medicinal high-dose oil/capsules should be clinician-approved (traditional caution in some texts). May affect blood sugar or clotting in theory—monitor with relevant medicines. Do not delay care for serious illness because of hadith- or wellness-based certainty. Essential oil of nigella is uncommon in home use—**fixed oil** is the usual traditional product; neither replaces emergency medicine. Educational only.",
      partsUsed:
        "Seeds; cold-pressed fixed (fatty) oil from seeds; occasionally flowering herb in folk practice.",
      preparations: [
        "**Culinary:** Sprinkle on bread, salads, stir into yogurt or curries; lightly toast to bloom aroma.",
        "**Capsule / ground seed:** Modern supplement forms—verify freshness.",
        "**Fixed oil:** Traditional teaspoon amounts or topical rubs—quality matters (dark bottle, not rancid).",
        "**Tea:** Crushed seeds steeped—peppery taste.",
        "**Storage:** Cool, airtight; refrigerate oil after opening if advised on label.",
      ],
      dosage: [
        "Educational ranges (adults; not prescriptions):",
        "**Culinary seeds:** about **1–2 g** (roughly ¼–½ teaspoon) in food.",
        "**Oil (traditional adult folklore ranges):** often about **½–1 teaspoon** (roughly **2–5 mL**) once or twice daily with food in cultural practice—start low; this is **not** a proven drug dose.",
        "**Capsules:** follow label (commonly 500–1000 mg seed powder equivalents).",
        "**Do not** promise “heals every disease”; celebrate provision, practice wisdom, seek care.",
      ],
      traditionalUses:
        "Near Eastern bread spice; plausible (not certain) ID of Isaiah’s *qetsach*. Esteemed in later Prophetic tradition—without turning hadith into a cure-all claim.",
      prepNote:
        "Sprinkle culinary seeds on bread. Fixed oil is traditional; quality and rancidity matter. Do not delay medical care.",
      emoji: "🖤",
    },
    {
      id: "chamomile",
      name: "Chamomile",
      verse: "Genesis 1:29",
      verseText:
        "And God said, Behold, I have given you every herb bearing seed, which is upon the face of all the earth…",
      scientificName:
        "*Matricaria chamomilla* L. (syn. *Matricaria recutita* L.) — German (Hungarian) chamomile; *Chamaemelum nobile* (L.) All. (syn. *Anthemis nobilis* L.) — Roman (English) chamomile (Asteraceae)",
      scientificNote:
        "Both are legitimate “chamomile,” but they are **different plants**. German is the annual with hollow flower receptacles used in most modern tea bags and EMA-style monographs; Roman is a low perennial, apple-scented, common in lawns and some British herbal traditions. Not a named desert shrub of Exodus; Genesis 1:29 is household-provision framing.",
      commonName:
        "Chamomile; camomile; German chamomile; Roman chamomile; ground apple (folk etymology from Greek *kamai melon*)",
      benefits:
        "Gentle daisy of evening cups — traditional calm, belly, and skin soother (clarify species)",
      botanicalSummary:
        "Both bear white ray florets around a golden disk and smell sweetly apple-herbal. German chamomile grows upright (to ~2 feet) with finely divided leaves; its conical center is **hollow**. Roman chamomile creeps as a mat-forming perennial with denser foliage. Key constituents include essential-oil azulenes (chamazulene forms during distillation of German oil), bisabolol, and flavonoids such as apigenin glycosides.",
      intro:
        "Chamomile is not a named desert shrub of Exodus, yet countless Christian households end the day with its steam rising like a small evening sacrifice of thanks. God gave bitter herbs for Passover memory and gentle flowers for ordinary nights. Whether German or Roman, the cup teaches slower breathing and kinder digestion—practical mercy in a teapot—without needing a forged Bible citation.",
      region:
        "German chamomile—Europe and western Asia, naturalized widely; Roman—western Europe, cultivated in herb gardens and “chamomile lawns.” Both prefer sun and well-drained soils; German thrives as a field annual.",
      ancientUses: [
        "**Egypt, Greece and Rome:** Aromatic flowers in compresses and calming preparations; name linked to “ground apple” scent.",
        "**Medieval monastery gardens:** Classic infirmary and kitchen-garden plant across Christian Europe.",
        "**Folk Europe:** Tea for restlessness, teething households (caution with infants—see safety), women’s comfort folklore, and blonde hair rinses.",
        "**Species split:** British herbalism often favored Roman; Central European pharmacy favored German—*know which you buy*.",
        "**No direct biblical species requirement:** Monastery and household provision framing.",
      ],
      modernResearch: [
        "EMA and other regulators recognize traditional use of **German chamomile flower** for mild gastrointestinal discomfort, minor mouth/throat irritation, and supportive care of minor skin inflammations (product-specific).",
        "Tea is widely used for **relaxation and sleep hygiene** support; clinical evidence for insomnia is modest/mixed but cultural use is deep.",
        "Topical preparations studied for skin comfort; results vary by formula.",
        "Roman chamomile has overlapping folk uses and a distinct essential-oil profile; do not assume identical dosing monographs.",
      ],
      sideEffects:
        "Usually gentle. **Asteraceae allergy** (ragweed, chrysanthemums, etc.) can trigger rash, itching, or rarely more serious reactions—stop if this occurs. Eye rinses with homemade tea risk contamination—avoid. **Essential oils are not for casual oral use** and must be diluted on skin. Pregnancy: culinary-strength tea is commonly used, but medicinal concentrates and oils need clinician advice. Infants and young children: do not give essential oil; even tea should be pediatrician-guided. May potentiate sedatives slightly in sensitive people. Educational only.",
      partsUsed: "Dried flower heads (primarily); essential oil distilled from flowers.",
      preparations: [
        "**Infusion:** Cover flowers with hot water 5–10 minutes for tea; keep covered to hold aroma.",
        "**Compress / rinse:** Cooled tea for minor skin or mouth comfort traditions—clean utensils.",
        "**Bath:** Strained tea added to bathwater in folk practice.",
        "**Essential oil:** German (blue) or Roman—aromatic / diluted topical only—**not casual internal use**.",
        "**Storage:** Whole flowers in airtight jars away from light; best within a year.",
      ],
      dosage: [
        "Educational ranges (adults):",
        "**German flower tea:** about **2–3 g** dried flowers (roughly 1 tablespoon whole heads) per cup, **1–4 cups** daily as traditionally used.",
        "**Roman:** similar tea strength when used as herb tea—confirm species on package.",
        "**Essential oil:** **Do not ingest casually.** Dilute heavily for scent or skin if appropriate.",
        "Choose clear labeling: *Matricaria* vs. *Chamaemelum*.",
      ],
      traditionalUses:
        "Monastery-garden daisy for evening tea, gentle belly comfort, and minor skin washes. German and Roman are different plants—read the label.",
      prepNote:
        "Steep whole flower heads covered 5–10 minutes. Confirm *Matricaria* vs. *Chamaemelum*. Do not give essential oil to children.",
      emoji: "🌼",
    },
    {
      id: "cinnamon",
      name: "Cinnamon",
      verse: "Exodus 30:23",
      verseText:
        "Take thou also unto thee principal spices, of pure myrrh five hundred shekels, and of sweet cinnamon half so much…",
      scientificName:
        "*Cinnamomum verum* J.Presl (syn. *C. zeylanicum*) — true / Ceylon cinnamon; *Cinnamomum cassia* (L.) J.Presl (and related *Cinnamomum* spp. sold as cassia) — Chinese cinnamon / common grocery cinnamon",
      scientificNote:
        "Scripture itself distinguishes cinnamon (*qinnamon*) from cassia (*qiddah*) in the holy anointing oil (Exodus 30:23–24). Exact botanical match to modern Ceylon vs. Chinese cassia is debated among historians. **Cassia is typically much higher in coumarin**, a compound that can stress the liver in chronic high doses—choose species wisely for daily sprinkling. Do not casually duplicate the exact holy blend (Exodus 30:32–33).",
      commonName: "Cinnamon; Ceylon cinnamon; cassia; bast of cinnamon",
      benefits:
        "Sacred spice of anointing and love poetry — warming bark with coumarin caution on cassia",
      botanicalSummary:
        "Tropical evergreen trees in the laurel family. Harvesters strip inner bark that curls into quills. Ceylon cinnamon forms thin, layered, fragile sticks with a delicate sweet aroma; cassia forms thicker, harder bark with a stronger, spicier punch. Both contain cinnamaldehyde; **cassia is typically much higher in coumarin**, a compound that can stress the liver in chronic high doses.",
      intro:
        "Cinnamon (*qinnamon*) appears among the “finest spices” of the holy anointing oil (Exodus 30:23), in the seductive perfume of Proverbs 7:17, and in the enclosed-garden imagery of Song of Songs 4:14; Revelation 18:13 lists it among luxury cargoes. Cassia (*qiddah* / related terms) is separately measured in the anointing oil formula (Exodus 30:24)—Scripture itself distinguishes two costly barks. Exact botanical match to modern Ceylon vs. Chinese cassia is debated among historians, but the theological picture is clear: fragrance set apart for worship, and precious bark carried along trade routes God used to connect nations. Today, choose species wisely for daily sprinkling on oatmeal.",
      region:
        "*C. verum*—Sri Lanka and southern India traditionally; *C. cassia*—southern China and Southeast Asia; global tropical cultivation and trade.",
      ancientUses: [
        "**Holy anointing oil:** Sweet cinnamon in the sacred formula Moses was commanded to compound (Exodus 30:23–25); not for ordinary personal duplication of that exact holy blend (Exodus 30:32–33).",
        "**Cassia alongside:** Separate ingredient in the same oil (Exodus 30:24)—costly bark distinct in the text.",
        "**Perfume and poetry:** Proverbs 7:17; Song of Songs 4:14.",
        "**New Testament trade list:** Revelation 18:13.",
        "**Egyptian, Arab, and classical trade:** Aromatic bark and oils along incense/spice routes; exact species in antiquity remain scholarly discussion.",
        "**Culinary later history:** From medicine-perfume toward everyday sweet and savory cooking in medieval and modern kitchens.",
      ],
      modernResearch: [
        "Cinnamon has been studied for **blood-sugar support** and antioxidant effects; meta-analyses show mixed, modest findings—food spice, not a replacement for diabetes medication.",
        "Distinguishing **Ceylon vs. cassia** matters for chronic supplemental dosing because of **coumarin** content.",
        "Essential oil is strongly antimicrobial in laboratory settings and a dermal sensitizer—handle with respect.",
        "Quality issues include mixing species and labeling “cinnamon” without clarity.",
      ],
      sideEffects:
        "Culinary amounts of either type are fine for most people. Chronic high intake of **cassia** can contribute excess **coumarin**—European food-safety bodies warn sensitive individuals and heavy users to moderate cassia and prefer Ceylon for frequent use. Cinnamon can irritate mouth and skin; oil may cause burning or allergic contact dermatitis. **Essential oil is not for casual oral use** and must be diluted on skin. Pregnancy: food use OK; medicinal megadoses and oils need advice. May interact with diabetes drugs (additive glucose lowering)—monitor. Educational only.",
      partsUsed:
        "Dried inner bark (quills or powder); essential oil from bark or leaf (different chemistries—know which).",
      preparations: [
        "**Culinary:** Quills in stews and teas; powder in baking and oatmeal—prefer Ceylon for daily high use.",
        "**Infusion:** Stick simmered gently in milk or water (café-style).",
        "**Supplements:** Capsules—check species and coumarin discussion with a clinician if used daily.",
        "**Essential oil:** Aromatic / diluted topical only—**not casual ingestion**.",
        "**Storage:** Whole quills keep aroma longer than powder.",
      ],
      dosage: [
        "Educational ranges (adults):",
        "**Food spice:** about **¼–1 teaspoon** (roughly 0.5–3 g) powder daily in food is a common culinary range—favor **Ceylon** if you use cinnamon heavily every day.",
        "**Cassia:** keep supplemental powdered intake modest over time due to coumarin; follow local food-safety guidance.",
        "**Essential oil:** **Do not ingest casually.** Dilute for scent (e.g., a drop in a carrier for adult diffuser jewelry/topical fragrance if tolerated).",
        "Never stop prescribed diabetes medicine for cinnamon experiments.",
      ],
      traditionalUses:
        "Holy anointing spice (*qinnamon*) distinguished from cassia (*qiddah*) in Exodus 30. Everyday warming bark today—prefer Ceylon if you use it heavily, because cassia is higher in coumarin.",
      prepNote:
        "Use as food spice. Prefer Ceylon cinnamon for daily high use. Do not ingest cinnamon essential oil. Never replace diabetes medicine.",
      emoji: "🪵",
    },
    {
      id: "calendula",
      name: "Calendula",
      verse: "Genesis 1:29",
      verseText:
        "And God said, Behold, I have given you every herb bearing seed, which is upon the face of all the earth…",
      scientificName: "*Calendula officinalis* L. (Asteraceae / daisy family)",
      scientificNote:
        "Not the same as common garden tagetes “marigolds” (*Tagetes* spp.), though folk names overlap. Calendula is not a Hebrew Bible species; it filled Christian monastery *officinas* and cottage gardens. Genesis 1:29 is provision framing, not a forged citation.",
      commonName: "Calendula; pot marigold; poet’s marigold",
      benefits:
        "Sunny pot marigold — traditional skin-mending flower of monastery gardens",
      botanicalSummary:
        "A cheerful annual (sometimes short-lived perennial) with pale green leaves and bright orange to yellow daisy-like flower heads that open with the sun. Sticky resinous florets hold carotenoids, triterpenoid esters, and flavonoids tied to traditional skin applications. Easy to grow, prolific, and historically “of the kitchen” (*officinalis*).",
      intro:
        "Calendula’s Latin name nods to the calendar—flowers for many months—and its species name *officinalis* marks it as a plant of the apothecary shelf. It is not a Hebrew Bible species, yet it filled Christian monastery *officinas* and cottage gardens with practical mercy for scrapes and irritated skin. That history is baptism enough for a Biblical Pharmacy chapter: provision, patience, and poultice-level kindness without fake verses.",
      region:
        "Likely western Mediterranean / southern European origin; naturalized and cultivated worldwide in temperate gardens. Thrives in sun and modest soils; self-seeds readily.",
      ancientUses: [
        "**Roman and medieval Europe:** Flowers in broths (“pot” marigold) and topical salves.",
        "**Monastery and folk pharmacy:** Infused oils and ointments for minor wounds, chapped skin, and inflammatory folklore.",
        "**Culinary color:** Petals as poor-man’s saffron to tint cheese and rice.",
        "**Not biblical flora:** Teach as European Christian herbal heritage within God’s wider garden.",
        "**Modern natural products:** Creams, balms, and baby skincare lines (quality varies; patch-test).",
      ],
      modernResearch: [
        "EMA recognizes traditional cutaneous use of calendula flower preparations for **minor inflammations of the skin and minor wounds**, and traditional use for minor inflammations in the mouth/throat—based largely on long use and pharmacological plausibility.",
        "Clinical studies on wound healing and skin comfort exist with generally supportive but not spectacular evidence—results depend on preparation.",
        "Anti-inflammatory and antimicrobial laboratory findings for extracts are frequently reviewed.",
        "Distinguish true *Calendula officinalis* from *Tagetes* in research and shopping.",
      ],
      sideEffects:
        "Topical use is usually well tolerated; Asteraceae allergy can cause dermatitis—patch-test. Do not apply to severe, deep, or heavily infected wounds without medical care. Internal use of strong teas is traditional in some places but less emphasized than external use in modern European monographs—seek advice before drinking medicinal amounts in pregnancy. Essential oil is uncommon; infused oil is the classic preparation—still **not a casual “drink the oil” product**. Educational only.",
      partsUsed:
        "Flower heads (ray florets and whole capitula); occasionally leaf in folk practice.",
      preparations: [
        "**Infused oil:** Fresh or dried flowers steeped in olive oil (solar or gentle heat methods)—base for salves.",
        "**Salve / ointment:** Infused oil thickened with beeswax for external use.",
        "**Tea / compress:** Flower infusion cooled for skin compress or used as mild tea.",
        "**Creams:** Commercial calendula creams—follow label.",
        "**Storage:** Dry flowers in paper bags then jars; keep oils cool and watch for rancidity.",
      ],
      dosage: [
        "Educational ranges (adults):",
        "**Topical cream/ointment:** thin layer to clean, minor skin areas **1–3 times daily** as labeled.",
        "**Tea (when used):** about **1–2 g** dried flowers per cup, up to **2–3 cups** daily short-term in folk internal tradition—external use is the primary teaching emphasis here.",
        "**Mouth rinse:** cooled tea as traditional soothing rinse—spit out; don’t replace dental care.",
        "Seek medical help for spreading infection, fever, or wounds that won’t close.",
      ],
      traditionalUses:
        "Monastery pot marigold for salves, chapped skin, and a pinch of gold in the soup pot. Not biblical flora and not garden tagetes marigold.",
      prepNote:
        "Infused oil and salve for minor intact or barely broken skin. Patch-test. Buy *Calendula officinalis*, not *Tagetes*. Seek care for infected wounds.",
      emoji: "🧡",
    },
    {
      id: "caraway",
      name: "Caraway",
      verse: "Psalm 104:14",
      verseText:
        "He causeth the grass to grow for the cattle, and herb for the service of man…",
      scientificName: "*Carum carvi* L. (Apiaceae / carrot family)",
      scientificNote:
        "Caraway is **not** named as a distinct Bible plant. Do not force identity with cumin (*Cuminum*) or dill. Cousins (cumin, dill/“anise” of Matthew 23:23, coriander) appear in Scripture; Psalm 104:14 is a creation hymn, not a pharmacy label.",
      commonName:
        "Caraway; caraway seed; meridian fennel (folk name—not true fennel)",
      benefits:
        "Ridged seed of European and Near Eastern kitchens — traditional digestive and aromatic ally",
      botanicalSummary:
        "A biennial (sometimes grown as an annual) with finely cut, feathery leaves and umbrella-like clusters of tiny white to pale pink flowers. The “seeds” are actually dried fruits—crescent-shaped, ridged, and warmly aromatic with a distinctive rye-bread scent. Caraway belongs to the same plant family as cumin, dill, coriander, and fennel—the fragrant seed kitchen God filled with after-meal comforts.",
      intro:
        "Caraway is **not** named as a distinct Bible plant, though its cousins (cumin, dill/“anise” of Matthew 23:23, coriander) appear in Scripture and Near Eastern foodways. Christians need not invent a verse. We can still thank the Creator who stocked the Apiaceae family with carminative spices that cultures from Central Europe to the Levant have stirred into breads, cheeses, and tea. “He causeth the grass to grow for the cattle, and herb for the service of man” (Psalm 104:14) is a creation hymn, not a pharmacy label—yet it invites grateful, careful use of kitchen seeds.",
      region:
        "Native to western Asia, Europe, and North Africa; long cultivated across temperate Eurasia. Prefers cool summers and well-drained soils; often grown as a field spice crop.",
      ancientUses: [
        "**No clear biblical citation** as *Carum carvi*—do not force identity with cumin (*Cuminum*) or dill.",
        "**Greco-Roman and medieval Europe:** Seeds as condiment and digestive aromatic; Dioscorides-era and later herbals note carminative folk use.",
        "**Central and Northern European kitchens:** Classic flavoring for rye bread, sauerkraut, cheese, and cabbage dishes.",
        "**Near Eastern and North African cooking:** Occasional spice-blend and tea use alongside related seeds.",
        "**Folk herbalism:** Warm seed teas after heavy meals for “wind” and mild bloating—kitchen medicine tradition.",
      ],
      modernResearch: [
        "Caraway fruit contains essential oil rich in **carvone** and limonene; laboratory work explores antimicrobial and antispasmodic properties—mostly preclinical.",
        "Traditional European herbal monographs describe caraway as a **carminative** and aromatic digestive; modern human trial evidence is modest compared with the depth of culinary tradition.",
        "Sometimes studied in combination formulas with other digestive herbs (e.g., peppermint, fennel)—results apply to those mixes, not to caraway alone as a drug.",
        "Quality matters: buy culinary-grade whole seed from reputable sources; ground spice loses aroma quickly.",
      ],
      sideEffects:
        "Culinary amounts are generally well tolerated. Strong teas or concentrated oil may cause heartburn or allergic reactions in people sensitive to Apiaceae (celery, carrot, birch-pollen related oral allergy syndrome possible). **Caraway essential oil is not for casual oral use.** Medicinal amounts in pregnancy should be discussed with a clinician—culinary seasoning is ordinarily fine; strong “medicinal” dosing is a different question. This is educational information, not a treatment plan.",
      partsUsed:
        "Dried ripe fruits (“seeds”); occasionally fresh leaf as a minor culinary herb; essential oil distilled from the fruit.",
      preparations: [
        "**Culinary:** Whole or lightly crushed seeds in breads, stews, sauerkraut, cheese, and spice blends.",
        "**Infusion:** 1 teaspoon lightly crushed seeds per cup, steeped covered 5–10 minutes; strain.",
        "**Chewing:** Traditional after-meal chewing of a few seeds (educational folk custom).",
        "**Essential oil:** Aromatic or highly diluted topical use only when appropriate—**not casual internal use**.",
        "**Storage:** Airtight, cool, dark; whole seeds keep aroma longer than ground.",
      ],
      dosage: [
        "Educational ranges (adults; not prescriptions):",
        "**Tea:** about **1–2 g** (roughly ½–1 teaspoon) crushed fruit per cup, up to **1–3 cups** daily short-term as a digestive tea tradition.",
        "**Culinary:** pinch to ½ teaspoon in cooking as flavor—not a drug dose.",
        "**Essential oil:** **Do not ingest casually.**",
        "Ask a clinician before concentrated use if you have gallbladder disease, reflux, or Apiaceae allergy.",
      ],
      traditionalUses:
        "Ridged kitchen seed of European and Near Eastern foodways. Not a distinct Bible plant—cousin to cumin, dill, and coriander, used after meals as a carminative spice.",
      prepNote:
        "Crush seeds lightly for tea or rye bread. Culinary amounts only. Do not ingest caraway essential oil.",
      emoji: "🌾",
    },
    {
      id: "cardamom",
      name: "Cardamom",
      verse: "Romans 12:13",
      verseText: "Distributing to the necessity of saints; given to hospitality.",
      scientificName:
        "*Elettaria cardamomum* (L.) Maton (Zingiberaceae / ginger family); related “black/Nepal cardamom” is *Amomum subulatum*—a different spice with a smokier profile",
      scientificNote:
        "Green cardamom (*Elettaria*) is the classic “true” cardamom of chai and Arabic coffee. Black cardamom (*Amomum subulatum*) is a different spice. Cardamom does **not** appear by name in the Hebrew or Greek Bible; Romans 12:13 frames hospitality, not a forced plant identification.",
      commonName:
        "Cardamom; green cardamom; true cardamom; elaichi (Hindi/Urdu)",
      benefits:
        "Queen of spices — fragrant pod of Indian and Middle Eastern hospitality",
      botanicalSummary:
        "A tropical perennial in the ginger family, with tall leafy shoots and low flowering stems that bear green, three-sided pods filled with dark, intensely aromatic seeds. The scent is citrusy-camphoraceous and sweet—eucalyptus-meets-floral—driven largely by 1,8-cineole and related terpenes. Green cardamom (*Elettaria*) is the classic “true” cardamom of chai and Arabic coffee; do not confuse it with cheaper look-alike pods or with ginger root itself.",
      intro:
        "Cardamom does **not** appear by name in the Hebrew or Greek Bible. It traveled the ancient spice routes that also carried frankincense, myrrh, and cinnamon into the biblical world—so it belongs to the same *story of trade and hospitality*, not to a forced verse. Middle Eastern coffee rituals and Indian chai both honor guests with fragrance; Christians can receive that hospitality pattern as echoing “practice hospitality” (Romans 12:13) without pretending Moses packed cardamom in the wilderness kit.",
      region:
        "Native to the moist forests of southern India (Western Ghats) and Sri Lanka; major cultivation in India, Guatemala, and other tropical highlands. Needs shade, humidity, and rich soil.",
      ancientUses: [
        "**No biblical plant name**—honest teaching keeps it in the spice-trade / creation-provision category.",
        "**Ayurveda and classical India:** Digestive aromatic, breath fragrance, and flavoring for sweets and rice.",
        "**Arabic and Ottoman coffee culture:** Crushed pods in *qahwa*—hospitality in a cup.",
        "**Greco-Roman luxury trade:** Costly imported spice among Eastern aromatics (related *Amomum* names in classical texts can be confusing—identification debates exist).",
        "**Scandinavian baking:** Later European adoption in sweet breads and cookies.",
      ],
      modernResearch: [
        "Cardamom’s essential oil and extracts have been studied in lab settings for antioxidant and antimicrobial activity—preliminary, not proof of disease treatment.",
        "Small human studies have explored cardamom as a **dietary spice** for metabolic or blood-pressure markers with mixed, limited results; treat headlines with caution.",
        "Culinary use remains the strongest, safest modern case: a fragrant food spice, not a substitute for medicine.",
        "Adulteration and age degrade quality—prefer green, plump pods with intact aroma.",
      ],
      sideEffects:
        "Culinary amounts are generally safe for most adults. Large supplemental doses may cause heartburn or gallstone discomfort in susceptible people. **Essential oil is concentrated—not for casual swallowing.** Allergy is uncommon but possible. Discuss medicinal amounts in pregnancy with a clinician; food seasoning is ordinarily acceptable. Gallbladder disease: spicy aromatics can aggravate symptoms in some—use prudence. Educational only.",
      partsUsed:
        "Dried fruit pods and seeds; essential oil from seeds/pods; occasionally ground seed powder.",
      preparations: [
        "**Whole pods:** Lightly crush before brewing in tea, coffee, or rice to release oils.",
        "**Ground seed:** Freshly ground for baking and spice blends (loses aroma fast).",
        "**Chai / coffee:** Traditional simmering with other spices.",
        "**Infusion:** Crushed seeds/pods steeped 5–10 minutes covered.",
        "**Essential oil:** Fragrance / highly diluted topical only—**not casual internal use**.",
        "**Storage:** Whole pods airtight; refrigerate or freeze for long keeping.",
      ],
      dosage: [
        "Educational ranges (adults):",
        "**Culinary:** 1–3 pods or **¼–½ teaspoon** ground seed per recipe as flavor.",
        "**Tea tradition:** about **1–2 g** crushed seed/pod material per cup, 1–2 cups as an aromatic beverage—not a drug protocol.",
        "**Supplements:** follow labeled products only under professional advice—food first.",
        "Prefer *Elettaria* (green) when a recipe calls for classic cardamom; note black cardamom’s different smoke-forward taste.",
      ],
      traditionalUses:
        "Fragrant green pods of Indian chai and Arabic coffee hospitality. Not named in Scripture; cousin to the spice-route story of frankincense and cinnamon.",
      prepNote:
        "Crush whole green pods for tea, coffee, or rice. Prefer *Elettaria* over smoky black cardamom for classic flavor. Do not ingest the essential oil.",
      emoji: "💚",
    },
    {
      id: "cayenne",
      name: "Cayenne Pepper",
      verse: "Genesis 1:29",
      verseText:
        "And God said, Behold, I have given you every herb bearing seed, which is upon the face of all the earth…",
      scientificName:
        "*Capsicum annuum* L. and related *Capsicum* species (Solanaceae / nightshade family); “cayenne” often refers to hot chili cultivars and powdered products, not a single wild species",
      scientificNote:
        "Cayenne is a **New World** plant—unknown in the biblical Near East until after Columbus. There is **no honest Bible verse** that names chili pepper. Genesis 1:29 is creation-provision framing, not a Capsicum citation. Heat comes from **capsaicinoids** (especially capsaicin).",
      commonName:
        "Cayenne; cayenne pepper; chili pepper; red pepper (hot); capsicum",
      benefits:
        "New World fire-spice — culinary heat and traditional warming rub (capsaicin caution)",
      botanicalSummary:
        "Annual or short-lived perennial shrubs with glossy leaves, white starry flowers, and upright or hanging fruits that ripen from green to yellow, orange, or red. Heat comes from **capsaicinoids** (especially capsaicin) concentrated in the inner membranes. Cayenne-style powders are usually made from slender, hot red chilies; paprika and sweet peppers are milder relatives in the same genus.",
      intro:
        "Cayenne is a **New World** plant—unknown in the biblical Near East until after Columbus. There is **no honest Bible verse** that names chili pepper. Forcing “fiery” metaphors onto capsicum dishonors Scripture. We can still praise God for a spice that indigenous American peoples stewarded for millennia and that now seasons tables worldwide. Creation’s gifts keep arriving in history; wisdom means using heat with respect, not pretending Jesus ate cayenne in Galilee.",
      region:
        "Domesticated in the Americas (Mexico and South America centers of diversity); now cultivated worldwide in warm climates. Needs sun and warmth; frost-tender.",
      ancientUses: [
        "**Pre-Columbian Americas:** Fundamental spice, food, and folk topical/warming traditions among Indigenous cultures—millennia before European contact.",
        "**Post-1492 global kitchen:** Rapid adoption into African, Asian, and European cuisines.",
        "**Folk herbalism (later):** Cayenne in warming liniments, sore-muscle rubs, and “circulatory” folklore—external and culinary emphases vary by tradition.",
        "**Not a biblical flora item**—teach the Columbian exchange honestly.",
        "**Traditional Chinese / Ayurvedic adoption:** Later incorporation as a heating spice in regional systems.",
      ],
      modernResearch: [
        "**Capsaicin** is well studied: topical creams are used in conventional medicine for certain neuropathic pain contexts under clinical guidance—this is pharmacy-grade use, not a kitchen DIY claim.",
        "Dietary chili research explores metabolism, appetite, and cardiovascular markers; results are mixed and dose-/population-dependent—do not treat cayenne as a weight-loss drug.",
        "Laboratory antimicrobial and antioxidant work exists; it does not authorize self-treatment of infection.",
        "Eye, airway, and skin exposure accidents are common with careless handling—practical safety is part of modern “research culture.”",
      ],
      sideEffects:
        "Expect burning of mouth, lips, and stomach with hot peppers—usually transient. Can aggravate **GERD, ulcers, IBS**, or hemorrhoids in sensitive people. Handling powders then touching eyes causes severe pain—wash hands; consider gloves. Topical capsaicin causes burning; do not apply to broken skin or mucous membranes. **Capsicum essential oil / oleoresin is hazardous if misused—not for casual internal use.** Allergy or nightshade sensitivity possible. Children and pets: keep powders away. Asthma/airway irritation from inhaling powder. Educational only—not a pain clinic substitute.",
      partsUsed:
        "Ripe fruit (fresh or dried); powdered cayenne; standardized capsaicin topical products (clinical); occasionally seed-containing flakes.",
      preparations: [
        "**Culinary:** Fresh chilies, flakes, or cayenne powder in cooking—start mild.",
        "**Infusion / “cayenne tea”:** Traditional folk thimbleful of powder in hot water or food—**very** irritating if overdone; not for everyone.",
        "**Topical cream:** Use only labeled commercial capsaicin products as directed—or avoid.",
        "**Infused oil (external warming rub tradition):** Patch-test; label clearly; keep away from eyes.",
        "**Storage:** Dry powders airtight, cool, dark; potency fades slowly with age.",
      ],
      dosage: [
        "Educational guidance (adults; not prescriptions):",
        "**Food:** a **pinch to ¼ teaspoon** cayenne powder in a dish is a common culinary start—tolerance varies wildly.",
        "**Tea folklore:** often only a **dash** in a cup—stop if burning distress occurs.",
        "**Topical OTC capsaicin:** follow package exactly; wash in/wash out protocols matter.",
        "**Oleoresin / EO:** **Do not ingest casually.**",
        "Seek care for severe abdominal pain, vomiting, or eye exposure that does not resolve with irrigation.",
      ],
      traditionalUses:
        "New World chili heat unknown in biblical Galilee. Indigenous American spice later adopted worldwide; capsaicin rubs are a caution story, not a kitchen nerve treatment.",
      prepNote:
        "Start with a pinch in food. Gloves help with powder. Do not touch eyes. Do not ingest oleoresin or treat cayenne as a weight-loss drug.",
      emoji: "🌶️",
    },
    {
      id: "celery-seed",
      name: "Celery Seed",
      verse: "Genesis 1:29",
      verseText:
        "And God said, Behold, I have given you every herb bearing seed, which is upon the face of all the earth…",
      scientificName:
        "*Apium graveolens* L. (Apiaceae / carrot family); culinary celery stalks are the same species (different cultivar groups); **celery seed** is the dried fruit used as spice",
      scientificNote:
        "Celery seed is **not** a named Scripture spice. Related Apiaceae seeds (cumin, dill, coriander) *are* part of the biblical and Second Temple food world—so celery seed sits nearby in creation’s kitchen without a forged citation. Genesis 1:29 is provision framing. **Celery allergy** can be severe.",
      commonName:
        "Celery seed; celery fruit; smallage (older name for wild/bitter celery)",
      benefits:
        "Tiny seed, big aroma — traditional diuretic and joint folklore spice (Apiaceae caution)",
      botanicalSummary:
        "Biennial herb with pinnate leaves, grooved stems, and umbrella clusters of tiny white flowers ripening to minute brown ridged fruits (“seeds”). Wild celery (smallage) is stronger and more bitter than modern bland stalk celery; seed retains a concentrated, warm, slightly bitter celery aroma rich in phthalides and essential oil components.",
      intro:
        "Celery as a garden vegetable fits the broad biblical theme of cultivated plants for food (Genesis 1:29), but **celery seed is not a named Scripture spice**. Related Apiaceae seeds (cumin, dill, coriander) *are* part of the biblical and Second Temple food world—so celery seed sits nearby in creation’s kitchen without a forged citation. Accuracy is reverence.",
      region:
        "Likely Mediterranean and marshy Eurasian wetlands in wild form; stalk and seed crops now global in temperate zones. Prefers moisture and rich soil.",
      ancientUses: [
        "**Classical Mediterranean:** Wild celery (*selinon*) woven into Greek cultural symbolism (garlands) and used as food/aromatic; Roman cooks knew celery-type herbs.",
        "**Ayurvedic and later European folk use:** Seed preparations in traditional formulas for “water” balance and rheumatic folklore—historical practice, not modern proof.",
        "**Culinary spice trade:** Pickling spice blends, soups, coleslaw seasoning, and Bloody Mary folklore in later Western kitchens.",
        "**No forced Bible verse**—distinct from cumin/dill references.",
        "**Stalk vs. seed:** Modern Pascal celery is a bred vegetable; seed use is the concentrated spice tradition.",
      ],
      modernResearch: [
        "Celery seed extracts and oil have been examined in lab models for anti-inflammatory and diuretic themes; human evidence for joint or blood-pressure claims is **limited and inconclusive**.",
        "Phthalides (e.g., sedanenolide) are characteristic aroma compounds under study—chemistry ≠ cure.",
        "Celery (stalk and seed) is a recognized **allergen** in some regions (especially Europe)—serious reactions documented.",
        "Diuretic folklore should never replace evaluation of edema, kidney disease, or heart failure.",
      ],
      sideEffects:
        "**Celery allergy** can be severe (including anaphylaxis), often linked with birch-pollen cross-reactivity—avoid entirely if allergic. Seed and oil may increase photosensitivity or interact with theoretical bleeding risk in concentrated supplemental form—discuss with a clinician if you take anticoagulants. **Pregnancy:** medicinal celery seed traditionally cautioned in some herbals (possible uterine-stimulant folklore)—culinary pinches differ from “medicine” doses; ask a professional. Concentrated oils: not for casual internal use. May lower blood pressure modestly in theory—monitor if already on BP medicines. Educational only.",
      partsUsed:
        "Dried ripe fruits (celery seed); occasionally leaf/stalk as food; seed essential oil and extracts in supplements.",
      preparations: [
        "**Culinary spice:** Whole or ground seed in pickles, soups, dressings, and spice blends.",
        "**Infusion:** ½–1 teaspoon crushed seed per cup, steeped covered 10 minutes—taste is strong/bitter.",
        "**Food first:** celery stalks and leaves as vegetables.",
        "**Supplements / extracts:** only with professional guidance and clear labeling.",
        "**Essential oil:** aromatic caution—**not casual internal use**.",
        "**Storage:** airtight; ground seed stales within months.",
      ],
      dosage: [
        "Educational ranges (adults):",
        "**Culinary:** **¼–½ teaspoon** seed per recipe as spice.",
        "**Tea tradition:** about **0.5–2 g** crushed seed per cup, occasionally—not chronic self-medication.",
        "**Extracts:** follow product labels only under clinician advice.",
        "Stop and seek care for allergic symptoms (hives, swelling, wheezing).",
      ],
      traditionalUses:
        "Concentrated spice fruit of *Apium graveolens*, distinct from bland stalk celery and from biblical cumin or dill. Joint and “water” folklore is history, not proof.",
      prepNote:
        "Use as pickle and soup spice. Avoid entirely if celery-allergic. Medicinal extracts and pregnancy caution belong with a clinician.",
      emoji: "🥗",
    },
    {
      id: "cherry",
      name: "Cherry",
      verse: "Genesis 2:16",
      verseText:
        "And the LORD God commanded the man, saying, Of every tree of the garden thou mayest freely eat:",
      scientificName:
        "**Sweet cherry** *Prunus avium* L.; **tart/sour cherry** *Prunus cerasus* L. (Rosaceae / rose family). Related wild cherries exist; ornamental flowering cherries are not fruit substitutes",
      scientificNote:
        "**Clarify the orchard cousins:** sweet cherry (*P. avium*) is table fruit; tart/sour cherry (*P. cerasus*) is the pie and juice fruit of sleep/exercise-recovery folklore. Cherries are **not** clearly named as a biblical Levant orchard fruit. Kernels inside pits contain amygdalin—**do not casually chew pits**.",
      commonName:
        "Cherry; sweet cherry; tart cherry; sour cherry; pie cherry",
      benefits:
        "Two orchard cousins — sweet table fruit and tart traditional sleep/exercise-recovery folklore",
      botanicalSummary:
        "Deciduous trees with serrated leaves, white to pinkish blossoms, and drupe fruits—sweet cherries typically heart-shaped and eaten fresh; tart cherries smaller, brighter red, and too sharp for many palates raw but excellent dried, juiced, or baked. Both are *Prunus* relatives of almond, peach, and plum. Kernels inside pits contain amygdalin (cyanogenic potential)—**do not casually chew pits or make “pit kernel medicine.”**",
      intro:
        "Cherries are **not** clearly named as a biblical fruit of the Levant orchard lists (pomegranate, fig, olive, grape dominate Scripture’s fruit vocabulary). Wild *Prunus* species grow in wider Eurasia, but inventing a “Bible cherry” verse would be dishonest. Receive the orchard as later providence: “Of every tree of the garden thou mayest freely eat” (Genesis 2:16) establishes the pattern of permitted fruit—cherries fit that creational generosity when they arrived in cultivated history.",
      region:
        "Sweet cherry likely western Asia / Europe; tart cherry with more cold-hardy Eurasian roots; major modern orchards in temperate zones (Turkey, U.S., Europe, etc.). Need winter chill and pollination partners for many cultivars.",
      ancientUses: [
        "**Classical and medieval Europe:** Fresh fruit, preserves, and syrups; tart types for cooking wines and tonics in folk kitchens.",
        "**Anatolian and Eurasian orchards:** Long cultivation along Silk Road-adjacent fruit cultures.",
        "**Folk herbalism:** Tart cherry bark and fruit in various traditional American and European formulas—bark is a different preparation with its own cautions.",
        "**Not a primary biblical orchard fruit**—teach alongside apple/peach as later temperate gifts.",
        "**Ceremonial/seasonal food:** First-fruits joy in many agrarian cultures when cherries ripen.",
      ],
      modernResearch: [
        "**Tart cherry juice** has been studied for exercise-recovery soreness and for sleep-related melatonin/polyphenol themes—some small trials suggest modest benefits; results vary and commercial juices differ in concentration.",
        "Sweet cherries are nutrient-dense fruits (fiber, vitamin C, polyphenols)—best framed as **food**, not medicine.",
        "Gout and uric-acid folklore around cherries is popular; evidence is suggestive but not definitive enough to replace medical gout care.",
        "Avoid overstating “clinical proof”; fruit studies are not drug approvals.",
      ],
      sideEffects:
        "Fruit is generally safe; large amounts of juice add sugar and may loosen stools. **Pits/kernels:** choking hazard and cyanogenic glycoside risk if crushed/eaten in quantity—do not make pit teas. Cherry fruit allergy possible (often oral allergy syndrome). Medications: theoretically discuss concentrated extracts if on blood thinners—food amounts are ordinary. Dental enamel: frequent tart juice sipping can erode enamel—use with meals or dilute. Educational only.",
      partsUsed:
        "Fruit (sweet or tart); juice and concentrate from tart cherries; occasionally dried fruit; **not** casual use of pits or bitter kernels.",
      preparations: [
        "**Fresh fruit:** Sweet cherries as food; tart cherries cooked or sweetened.",
        "**Tart cherry juice / concentrate:** Commercial products used in research contexts—choose unsweetened when possible; follow label serving sizes as food.",
        "**Dried tart cherries:** Snacks and baking.",
        "**Tea:** Fruit infusions are food-like; bark teas are a separate traditional category—avoid self-experimenting with wild bark.",
        "**Storage:** Refrigerate fresh fruit; freeze; keep juices sealed and dated.",
      ],
      dosage: [
        "Educational / food ranges (adults):",
        "**Fresh fruit:** a serving of cherries as part of meals (often ~1 cup) —food, not a dose.",
        "**Tart juice (research-ballpark folklore):** many study protocols used roughly **8–12 oz (240–350 mL)** juice daily in divided amounts for limited weeks—**this is not a prescription**; diabetics must account for carbohydrate.",
        "**Concentrate:** follow manufacturer food serving—do not “megadose.”",
        "Clarify sweet (*P. avium*) vs. tart (*P. cerasus*) when teaching or buying.",
      ],
      traditionalUses:
        "Two *Prunus* cousins: sweet *P. avium* for the table and tart *P. cerasus* for pies, juice, and later recovery folklore. Not a named biblical orchard fruit. Never chew the pits.",
      prepNote:
        "Eat sweet cherries as fruit. Choose tart juice by label if exploring food-level folklore. Do not make pit teas. Say which species you mean.",
      emoji: "🍒",
    },
    {
      id: "chia",
      name: "Chia Seeds",
      verse: "Psalm 24:1",
      verseText:
        "The earth is the LORD’s, and the fulness thereof; the world, and they that dwell therein.",
      scientificName:
        "*Salvia hispanica* L. (Lamiaceae / mint family); related *Salvia columbariae* (golden chia) is a different North American species used by some Indigenous peoples",
      scientificNote:
        "Chia is indigenous to **Central America**—unknown to the biblical world. There is no Scripture verse for chia; Psalm 24:1 includes New World seeds without rewriting Genesis geography. Always mix seed with fluid; dry spoons of seed can obstruct the esophagus.",
      commonName: "Chia; chia seed; Mexican chia",
      benefits:
        "Aztec and Maya staple seed — modern omega-3 gel food (not a Bible plant)",
      botanicalSummary:
        "An annual sage relative with opposite leaves and spikes of blue or white flowers, producing tiny oval seeds—gray, black, or white—that become mucilaginous (gel-like) when soaked. Seeds are rich in **alpha-linolenic acid (ALA)** (plant omega-3), fiber, and protein. The gel property makes chia popular in puddings and as an egg-substitute binder in baking.",
      intro:
        "Chia is indigenous to **Central America**—unknown to the biblical world. There is no Scripture verse for chia; claiming otherwise would be false teaching about the text. Christians can still honor Indigenous agricultural wisdom and receive chia as a creational food gift that entered global diets in modern centuries. “The earth is the Lord’s, and the fulness thereof” (Psalm 24:1) includes New World seeds without rewriting Genesis geography.",
      region:
        "Native to central and southern Mexico and Guatemala; now grown in Latin America, Australia, and other dry-warm regions. Drought-tolerant relative to many crops.",
      ancientUses: [
        "**Mesoamerican civilizations:** Aztec and earlier cultures used chia as a staple food, tribute item, and endurance provision—historical nutrition, not a European medieval herb.",
        "**Indigenous North America:** Related salvia seeds in regional foodways.",
        "**Spanish colonial disruption and later revival:** Cultivation declined then returned with modern health-food interest.",
        "**Not biblical**—keep the Columbian-exchange timeline clear for students.",
        "**Traditional preparation:** Ground or soaked seeds in drinks and porridges.",
      ],
      modernResearch: [
        "Chia is well characterized as a **high-fiber, ALA-rich food**; nutrition science supports its role in dietary fiber intake and plant omega-3 contribution (ALA conversion to EPA/DHA in humans is limited).",
        "Studies on satiety, blood sugar response with meals, and cardiovascular markers exist with mixed practical effect sizes—chia is food, not a statin substitute.",
        "Gel-forming fiber can alter meal texture and digestion speed—useful culinary science, not miracle claims.",
        "Quality: watch for rancidity in old ground seed; whole seed keeps better.",
      ],
      sideEffects:
        "Generally recognized as safe as food. Dry seeds can pose a **choking / esophageal obstruction risk** if swallowed by the spoonful without liquid—**always mix with fluid** and allow gelling, especially important for people with swallowing difficulty. High fiber may cause gas or bloating if introduced suddenly—increase gradually. Blood-thinning or diabetes medicines: discuss large supplemental intakes with a clinician (food amounts ordinary). Allergy rare but possible (mint-family). Educational only.",
      partsUsed:
        "Dried seeds (whole or ground); oil pressed from seed in some products; sprouts occasionally as microgreens.",
      preparations: [
        "**Soaked gel / pudding:** 1 part seed to ~6–12 parts liquid; rest 15+ minutes.",
        "**Smoothies and oatmeal:** spoonful stirred in with enough moisture.",
        "**Baking:** whole or ground as binder/egg replacer in some recipes.",
        "**Sprouting:** edible sprouts with careful hygiene.",
        "**Storage:** cool, airtight, dark; refrigerate ground seed and oil.",
      ],
      dosage: [
        "Educational food ranges (adults):",
        "Common culinary use: about **1–2 tablespoons (8–20 g)** seeds daily mixed into food—start with 1 tablespoon if fiber-sensitive.",
        "Drink extra water with higher fiber intake.",
        "Not a medicine dose; children: smaller food amounts, fully hydrated gel only.",
        "Do not dry-swallow spoons of seed.",
      ],
      traditionalUses:
        "Aztec and Maya staple seed, now a gel food rich in fiber and plant omega-3 (ALA). Not a Bible plant. Always soak or mix with liquid.",
      prepNote:
        "Soak into a gel before eating. Start with a tablespoon if fiber-sensitive. Do not dry-swallow seeds. Honor the Mesoamerican food history honestly.",
      emoji: "⚫",
    },
    {
      id: "clove",
      name: "Clove",
      verse: "Matthew 2:11",
      verseText:
        "…they presented unto him gifts; gold, and frankincense, and myrrh.",
      scientificName:
        "*Syzygium aromaticum* (L.) Merr. & L.M.Perry (Myrtaceae / myrtle family); formerly *Eugenia caryophyllata*",
      scientificNote:
        "Clove is native to island Southeast Asia, not the Levant. Scripture does **not** name cloves. Matthew 2:11 teaches costly scent and honor, not botany. Bud oil (eugenol-rich) differs from harsher leaf/stem oils—labels matter. **Do not treat toothache with undiluted oil.**",
      commonName: "Clove; cloves; clove bud",
      benefits:
        "Nail-shaped spice of the Moluccas — dental folklore, kitchen warmth, and EO caution",
      botanicalSummary:
        "An evergreen tropical tree producing fragrant flower buds harvested before opening—dried buds look like tiny reddish-brown nails (Latin *clavus* = nail). The aroma is pungent, sweet-spicy, and numbing, dominated by **eugenol**. Clove leaf and stem oils differ in composition and harshness from bud oil—labels matter.",
      intro:
        "Clove is native to island Southeast Asia, not the Levant. Scripture does not name cloves. The broader biblical world *did* know costly imported aromatics (frankincense, myrrh, cinnamon, cassia, nard)—clove entered that same luxury spice economy in later centuries of Indian Ocean trade. Teach it as a gift of distant islands that joined the church’s global table, not as a forced Exodus ingredient. Hospitality and anointing cultures understand precious scent (cf. the Magi’s costly gifts, Matthew 2:11) without rewriting botany.",
      region:
        "Native to the Maluku Islands (Spice Islands) of Indonesia; major cultivation in Indonesia, Madagascar, Tanzania (Zanzibar), Sri Lanka, and other tropics.",
      ancientUses: [
        "**Moluccan and Malay spice culture:** Indigenous use long before European monopoly wars over the clove trade.",
        "**Chinese and Indian traditional medicine/cuisine:** Warming spice, dental-comfort folklore, and food preservative aromatic.",
        "**Medieval and Renaissance Europe:** Costly spice for food, pomanders, and apothecary blends.",
        "**Dental folk practice:** Clove bud or diluted oil near a painful tooth—traditional stopgap, **not** a modern dental standard of care.",
        "**No biblical citation**—pair teaching with frankincense/myrrh trade history for context.",
      ],
      modernResearch: [
        "Eugenol has documented local anesthetic and antimicrobial properties in laboratory and dental-material contexts; dentists have historically used eugenol-containing materials—**professional context**, not DIY nerve treatment.",
        "Culinary clove is studied as an antioxidant-rich spice; human “disease cure” evidence is not established.",
        "Essential oil is highly concentrated—safety literature warns about dosing errors, especially in children.",
        "Quality and adulteration: whole buds are easier to authenticate than powders.",
      ],
      sideEffects:
        "Culinary amounts in food are generally safe. **Clove essential oil can burn mucosa, injure gums, and is toxic in overdose**—especially dangerous for children (case reports of serious poisoning). Do not undilute oil in the mouth as routine practice; see a dentist for toothache. May slow blood clotting in concentrated supplemental amounts—discuss before surgery or with anticoagulant use. Liver caution with high eugenol exposure. Pregnancy: food seasoning fine; medicinal oil not for casual use. This is educational—not dental advice.",
      partsUsed:
        "Dried flower buds; clove bud essential oil; leaf/stem oils (different profiles); ground clove spice.",
      preparations: [
        "**Culinary:** Whole buds in stews, rice, chai, baked ham, and spice blends (remove before serving if whole).",
        "**Infusion:** 1–2 crushed buds per cup, steeped briefly—strong flavor.",
        "**Dental folklore:** traditional brief topical use of diluted preparations—prefer professional dental care.",
        "**Essential oil:** highly diluted for aroma only if used; **not casual internal use**.",
        "**Storage:** whole buds airtight; retain oil content for a year or more if cool/dark.",
      ],
      dosage: [
        "Educational ranges (adults):",
        "**Culinary:** 1–4 whole buds or a **pinch to ¼ teaspoon** ground per dish.",
        "**Tea:** 1–2 buds per cup occasionally.",
        "**Essential oil oral:** **Do not casually ingest.** Dilute heavily for any external/aromatic experiment; keep away from children.",
        "Tooth pain: see a dentist—clove is not a cure for abscess or decay.",
      ],
      traditionalUses:
        "Nail-shaped Moluccan flower buds of later spice-route luxury. Kitchen warmth and dental folklore—not a named Bible plant, and not a substitute for a dentist.",
      prepNote:
        "Use whole buds in cooking and chai. Do not put undiluted clove oil in a child’s mouth. See a dentist for toothache.",
      emoji: "🟤",
    },
    {
      id: "coconut-oil",
      name: "Coconut Oil",
      verse: "Genesis 2:9",
      verseText:
        "And out of the ground made the LORD God to grow every tree that is pleasant to the sight, and good for food…",
      scientificName: "*Cocos nucifera* L. (Arecaceae / palm family)",
      scientificNote:
        "Coconut palms are coastal tropical plants—**not** part of Israel’s native flora or biblical orchard lists. No verse names coconut. Genesis 2:9 states a principle of creational food trees; coconut fits that principle geographically where God planted it. Virgin kernel oil differs from copra oil and from MCT isolates.",
      commonName:
        "Coconut; coconut oil; virgin coconut oil; copra oil (dried-kernel industrial oil)",
      benefits:
        "Tropical palm fat — kitchen staple, skin emollient, and saturated-fat conversation",
      botanicalSummary:
        "A tall palm bearing large fibrous drupes (“coconuts”) with liquid endosperm (water) and solid white kernel (meat). Oil is pressed from fresh kernel (**virgin** / cold-pressed styles) or from dried copra. Coconut oil is predominantly **saturated fat**, rich in medium-chain fatty acids such as lauric acid; it is solid at cool room temperature and melts near body temperature.",
      intro:
        "Coconut palms are coastal tropical plants—**not** part of Israel’s native flora or biblical orchard lists. No verse names coconut. Pacific and Indian Ocean cultures received this tree as daily providence: food, fiber, vessels, and oil. Christians in those regions rightly give thanks without relocating the palm into Song of Solomon by force. “And out of the ground made the Lord God to grow every tree that is pleasant to the sight, and good for food” (Genesis 2:9) states a principle of creational food trees; coconut fits that principle geographically where God planted it.",
      region:
        "Likely originated in the Indian Ocean / western Pacific coastal tropics; now pantropical along beaches and plantations. Requires warmth; salt-tolerant.",
      ancientUses: [
        "**Austronesian, South Asian, Pacific Islander, and African coastal cultures:** Coconut as food, drink, oil for cooking and hair/skin, and material culture (shells, fiber, leaves).",
        "**Ayurveda and tropical folk care:** Oil pulling folklore, skin/hair oils, and medicinal-food traditions—cultural practice varies.",
        "**Not biblical Levant flora**—teach as tropical provision.",
        "**Colonial trade:** Copra became a global commodity oil.",
        "**Religious/cultural uses:** In some Hindu and Pacific contexts coconut appears in offerings—distinct from biblical temple practice; note respectfully without syncretism pressure.",
      ],
      modernResearch: [
        "Nutrition science debates coconut oil’s place among dietary fats: it raises HDL in some studies but also LDL; major heart associations often prefer unsaturated oils for routine cooking—**educated disagreement exists**; this monograph does not settle the debate.",
        "Virgin coconut oil is researched for skin emollient use and minor antimicrobial fatty-acid themes—topical moisturization is the clearest gentle use-case.",
        "“Oil pulling” and Alzheimer’s marketing claims are **not** established as medical treatment.",
        "MCT oil isolates differ from whole coconut oil—do not conflate product types.",
      ],
      sideEffects:
        "High calorie density—excess weight gain if added carelessly. May raise LDL cholesterol in many people—those with heart disease risk should follow clinician diet advice. Allergic reactions to coconut are uncommon but real. Topical use can clog pores for some (comedogenicity varies). Fractionated vs. virgin behave differently on skin and in cooking. Never pour oil down drains carelessly (plumbing). Educational food/cosmetic talk—not a cardiac prescription.",
      partsUsed:
        "Kernel oil (virgin or refined); coconut cream/milk as food; coconut water (different product); flour from processed meat; husk/fiber not dietary oil.",
      preparations: [
        "**Cooking:** Sautéing and baking where solid fat is desired; smoke point depends on refinement.",
        "**Spreads and fat bombs:** culinary trends—moderation.",
        "**Skin/hair:** small amount as moisturizer or pre-wash hair oil—patch-test.",
        "**Oil pulling:** traditional swish folklore—do not swallow; not a substitute for brushing/flossing/dental care.",
        "**Storage:** cool cupboard; virgin oil lasts months; smell rancidity (paint-like off notes).",
      ],
      dosage: [
        "Educational food guidance (adults):",
        "Treat as a **cooking fat**, not a medicine: often **1–2 tablespoons** in recipes replaces other fats—not an add-on megadose.",
        "Topical: thin layer as needed.",
        "Therapeutic claims (weight loss, Alzheimer’s, infection cure): unsupported as self-treatment—see clinicians for disease.",
        "Choose virgin for flavor/aroma; refined for neutral high-heat cooking if appropriate.",
      ],
      traditionalUses:
        "Tropical palm fat of coastal cultures—food, hair, and skin. Not Levant flora. A cooking fat in a saturated-fat conversation, not an Alzheimer’s protocol.",
      prepNote:
        "Use as a cooking fat that replaces other fats, not a megadose. Virgin for flavor; patch-test on skin. Oil pulling is not dental care.",
      emoji: "🥥",
    },
    {
      id: "coffee",
      name: "Coffee",
      verse: "1 Corinthians 10:31",
      verseText:
        "Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God.",
      scientificName:
        "*Coffea arabica* L. (Arabica); *Coffea canephora* Pierre ex A.Froehner (Robusta). Rubiaceae / madder family",
      scientificNote:
        "Coffee is **not** a biblical beverage—the Hebrew Bible’s drink vocabulary centers on water, wine, and milk. Cultivation spreads from Ethiopia into Yemen in the late medieval period. **Arabica** is milder and higher-grown; **Robusta** is hardier, more bitter, and higher in caffeine. 1 Corinthians 10:31 is stewardship of the cup, not a plant ID.",
      commonName:
        "Coffee; Arabica coffee; Robusta coffee; qahwa / kahve (cultural names)",
      benefits:
        "Ethiopian highland berry — alertness gift and stewardship of caffeine",
      botanicalSummary:
        "Evergreen tropical shrubs/trees with glossy leaves, fragrant white jasmine-like flowers, and drupes (“cherries”) that ripen red or yellow, each usually holding two seeds (coffee beans). **Arabica** is milder and higher-grown; **Robusta** is hardier, more bitter, and higher in caffeine. The seeds are fermented, dried, roasted, and brewed. Primary active compound of interest: **caffeine**, with chlorogenic acids and other phenolics contributing to flavor and research interest.",
      intro:
        "Coffee is **not** a biblical beverage—the Hebrew Bible’s drink vocabulary centers on water, wine, and milk; coffee cultivation spreads from Ethiopia into Yemen and the wider Islamic world in the late medieval period, then globally. Inventing a “Bible coffee” verse would be absurd. Yet alertness, sobriety, and gratitude for simple morning mercies fit Christian wisdom: “whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God” (1 Corinthians 10:31). Steward the cup; do not enslave yourself to it.",
      region:
        "*C. arabica* originated in Ethiopian highlands; *C. canephora* in western/central Africa; now grown across the “Bean Belt” (Latin America, Africa, Asia-Pacific). Prefers tropical elevations (Arabica) or warmer lowlands (Robusta).",
      ancientUses: [
        "**Ethiopian and Yemeni origins:** oral histories of discovery; Sufi and later wider use to stay alert for night devotion and work.",
        "**Ottoman and European coffeehouses:** social drinking culture from the 15th–17th centuries onward.",
        "**Not ancient Israelite**—keep timelines honest for Biblical Pharmacy students.",
        "**Folk use:** wake-up beverage, after-meal digestif culture in some regions, and headache folklore (caffeine context).",
        "**Ceremonial hospitality:** Ethiopian coffee ceremony as community practice—hospitality parallel, not a sacrament.",
      ],
      modernResearch: [
        "Extensive epidemiology links moderate coffee intake with various health associations (some favorable for certain outcomes, mixed for others)—**observational associations are not proof of causation** and must not be sold as disease treatment.",
        "Caffeine’s pharmacology is well known: adenosine receptor antagonism, alertness, athletic-performance aid in studied doses, sleep disruption if mistimed.",
        "Pregnancy guidance typically advises **limiting caffeine**—follow obstetric advice.",
        "Unfiltered coffee (e.g., French press, boiled) contains cafestol/kahweol that can raise cholesterol in some people—filter method matters.",
      ],
      sideEffects:
        "Insomnia, jitteriness, raised heart rate, anxiety amplification, reflux, and dependence/withdrawal headaches are common with excess. May aggravate arrhythmias in sensitive people—follow clinician guidance. Diuretic effect mild in habitual users. **Children and teens:** limit; avoid energy-drink stacking. Pregnancy/breastfeeding: respect caffeine caps from prenatal care. Interactions: some medicines and psychiatric conditions need personalized advice. Moldy/ochratoxin concerns: buy quality beans. Educational only—not cardiology advice.",
      partsUsed:
        "Roasted seeds (“beans”); green coffee extracts (different supplemental category); leaves occasionally as tea in some cultures (uncommon in West).",
      preparations: [
        "**Brewed coffee:** drip, pour-over, espresso, French press, cold brew—grind and ratio affect strength.",
        "**Traditional qahwa:** lightly roasted, often with cardamom (Arabian style).",
        "**Decaf:** residual caffeine still present in small amounts.",
        "**Green coffee supplements:** not the same as a morning cup—use only with professional advice if at all.",
        "**Storage:** beans airtight, away from heat/light; grind fresh when possible.",
      ],
      dosage: [
        "Educational adult ranges (not prescriptions):",
        "Many health discussions treat about **3–4 cups (roughly ≤400 mg caffeine/day)** as a common upper ballpark for healthy non-pregnant adults—individual tolerance varies widely; this is **not** a mandate to drink that much.",
        "Pregnancy: often advised to stay near **≤200 mg caffeine/day** from all sources—confirm with your obstetric provider.",
        "Stop afternoon/evening cups if sleep suffers.",
        "Robusta and espresso shots concentrate caffeine—count carefully.",
      ],
      traditionalUses:
        "Ethiopian highland berry turned late-medieval drink of alertness and hospitality. Not a Bible beverage. Steward caffeine; do not enslave yourself to the cup.",
      prepNote:
        "Brew as hospitality, not as medicine. Count caffeine in pregnancy. Filter method can matter for cholesterol. Green coffee pills are not a morning cup.",
      emoji: "☕",
    },
    {
      id: "comfrey",
      name: "Comfrey",
      verse: "Genesis 2:16–17",
      verseText:
        "And the LORD God commanded the man, saying, Of every tree of the garden thou mayest freely eat: But of the tree of the knowledge of good and evil, thou shalt not eat of it…",
      scientificName:
        "*Symphytum officinale* L. (Boraginaceae / borage family); related *Symphytum × uplandicum* (Russian comfrey) and other species appear in gardens—identify carefully",
      scientificNote:
        "**EXTERNAL ONLY. Internal dose: ZERO.** Unsaturated **pyrrolizidine alkaloids (PAs)** can damage the liver (hepatic sinusoidal obstruction) with internal use—teas, tinctures, capsules, “green drinks.” **Avoid in pregnancy, breastfeeding, and in children.** Do not apply to broken skin. Comfrey is a European folk herb, **not** a Bible plant; Genesis 2:16–17 is a principle that limits exist, not a plant ID.",
      commonName:
        "Comfrey; knitbone; boneset (folk name—do not confuse with *Eupatorium* boneset); slippery root",
      benefits:
        "EXTERNAL ONLY — classic knitbone; INTERNAL dose ZERO (PA liver warning)",
      cardWarning: "EXTERNAL ONLY · Internal dose ZERO · PA liver warning",
      botanicalSummary:
        "A perennial with large hairy leaves, winged stems, and drooping clusters of purple, pink, or cream bell flowers. Roots are dark and mucilaginous. Comfrey contains allantoin (historically linked with topical soothing) and—critically—**unsaturated pyrrolizidine alkaloids (PAs)** that can damage the liver with internal use. That chemistry defines modern safety teaching.",
      intro:
        "Comfrey is a European folk herb, **not** a Bible plant. Do not invent a verse. The Christian posture here is sober stewardship: God made plants with real power for harm and help (cf. the tree of knowledge narrative’s warning pattern about boundaries—Genesis 2:16–17 as a principle that limits exist). “Knitbone” fame tempted generations to drink comfrey tea; modern toxicology says **do not**. External traditional use on unbroken skin is the only educational emphasis this monograph endorses.",
      region:
        "Native to Europe and western Asia; naturalized elsewhere in temperate zones. Moist soils, ditch edges, and gardens.",
      ancientUses: [
        "**European folk medicine:** Famous poultice herb for bruises, sprains, and “knitting” folklore around bones and soft tissue—**external**.",
        "**Medieval and early modern herbals:** Leaf and root preparations as poultices and ointments; internal use appeared historically but is now considered unsafe.",
        "**Garden usefulness:** Compost activator lore (“comfrey tea” fertilizer for plants—not for people).",
        "**No biblical citation.**",
        "**Name lore:** Greek *symphyo* (“grow together”) underlies the “knit” reputation—etymology is not clinical proof.",
      ],
      modernResearch: [
        "Regulatory agencies (including European and U.S. contexts) have warned against **internal comfrey** due to PA-associated **hepatic sinusoidal obstruction / liver toxicity** and other risks; some jurisdictions restrict comfrey products.",
        "Topical comfrey preparations have been studied for **muscle and joint discomfort** with some positive trial signals for short-term external use on intact skin—still not a license for deep wounds or long unlimited use.",
        "Allantoin is used in cosmetics as a soothing agent; presence does not make PA-containing crude herb safe to drink.",
        "PA content varies by species, plant part, and season—uncertainty itself argues against internal use.",
      ],
      sideEffects:
        "**Do not take comfrey internally** (teas, tinctures, capsules, “green drinks”)—risk of serious **liver injury**, including delayed toxicity; PAs may also have genotoxic concerns. **Avoid in pregnancy, breastfeeding, and in children.** External use: do not apply to **broken skin, deep wounds, or large areas for prolonged periods** (absorption risk). Allergic contact dermatitis possible. Livestock poisoning history underscores agricultural seriousness. If past internal use occurred and liver symptoms appear (jaundice, dark urine, abdominal pain, fatigue), seek medical care and disclose the herb. Educational only—not orthopedic care.",
      partsUsed:
        "Leaf and root for traditional **external** poultices/ointments; modern commercial creams sometimes use PA-reduced extracts—read labels. **No internal part is recommended here.**",
      preparations: [
        "**Poultice (external, unbroken skin):** traditionally mashed fresh leaf or moistened dried leaf wrapped on skin for short periods.",
        "**Ointment / oil / commercial cream:** follow external labels; prefer reputable PA-aware products.",
        "**Garden fertilizer “comfrey tea”:** for plants only—label buckets clearly **NOT FOR DRINKING**.",
        "**Do not prepare drinking teas or internal tinctures.**",
        "**Storage:** dry leaf airtight; label **EXTERNAL ONLY**.",
      ],
      dosage: [
        "Educational external guidance (adults; not prescriptions):",
        "**Topical cream/ointment:** thin layer to intact skin **1–3 times daily** short-term as labeled.",
        "**Poultice:** short traditional applications—minutes to a few hours historically; stop if rash; never on open wounds.",
        "**Internal use:** **None. Zero.** No safe educational oral dose offered here.",
        "Fractures and serious injuries need medical imaging and care—not comfrey folklore alone.",
      ],
      traditionalUses:
        "European “knitbone” poultice herb for unbroken skin. Not a Bible plant. Internal tea is unsafe: pyrrolizidine alkaloids can injure the liver. Internal dose: none.",
      prepNote:
        "EXTERNAL ONLY. Intact skin, short-term labeled creams or poultices. Internal dose ZERO. Garden “comfrey tea” is fertilizer—not a drink.",
      emoji: "💜",
    },
    {
      id: "cranberry",
      name: "Cranberry",
      verse: "Genesis 1:29",
      verseText:
        "And God said, Behold, I have given you every herb bearing seed, which is upon the face of all the earth…",
      scientificName:
        "*Vaccinium macrocarpon* Aiton (Ericaceae / heath family); related European *V. oxycoccos* is small cranberry—similar culinary role, different scale of U.S. cultivation",
      scientificNote:
        "Cranberry is a **New World bog plant**—absent from biblical Canaan. There is no honest Scripture link. Genesis 1:29 is provision framing. Proanthocyanidins (PACs) are discussed in urinary-tract research; cranberry is **not** a reliable treatment for active infection.",
      commonName: "Cranberry; American cranberry; large cranberry",
      benefits:
        "Bog berry of North America — culinary tartness and urinary folklore (not a Bible fruit)",
      botanicalSummary:
        "A low, evergreen, trailing shrub of acidic peat bogs and sandy wetlands, with small leaves, pink flowers, and bright red berries. Fruit is sharply tart due to organic acids; popular as juice cocktail (often sweetened), dried sweetened berries, and holiday sauce. Proanthocyanidins (PACs) are the constituents most discussed in urinary-tract research.",
      intro:
        "Cranberry is a **New World bog plant**—absent from biblical Canaan. There is no honest Scripture link. Indigenous peoples of northeastern North America used the berry for food and pemmican-style preservation long before European settlers coined “crane berry.” Christians thank God for Indigenous stewardship and for a tart fruit that now aids winter tables—without rewriting Leviticus’s flora lists.",
      region:
        "Native to acidic wetlands of eastern North America; major commercial bogs in Wisconsin, Massachusetts, New Jersey, Quebec, Chile, and similar cool regions.",
      ancientUses: [
        "**Indigenous North American foodways:** Fresh, dried, and pounded with meat/fat; also traditional dye and folk uses varying by nation.",
        "**Colonial American kitchens:** Sauces with game and, later, Thanksgiving tradition.",
        "**Sailor/scurvy-era food history:** Vitamin C–containing fruits mattered on voyages—cranberry among New England provisions.",
        "**Not biblical.**",
        "**Folk urinary tradition:** Later herbalism popularized cranberry juice for bladder comfort—tradition preceded modern PAC research.",
      ],
      modernResearch: [
        "Cranberry products have been studied for **reducing recurrent UTI risk** in some populations; meta-analyses show mixed but sometimes modest preventive signals—**not a reliable treatment for active infection**.",
        "Mechanisms discussed include anti-adhesion effects of A-type proanthocyanidins on certain *E. coli*—plausible and still nuanced by dose/product.",
        "NCCIH-style summaries typically: possible help for prevention in some groups; see a clinician for symptoms of UTI (fever, flank pain, burning)—antibiotics may be required.",
        "Sugar-laden cocktail juices complicate metabolic health; look at unsweetened or encapsulated PAC products carefully.",
      ],
      sideEffects:
        "Generally safe as food. High-oxalate content may matter for **kidney stone** formers—ask a clinician. Sweetened juices add large sugar loads. Concentrated extracts may increase INR slightly in warfarin users in some reports—medication review needed. Stomach upset with excess. Allergy rare. Children: juice portions should be age-appropriate and not a UTI DIY protocol. Educational only—not urology care.",
      partsUsed:
        "Fruit; juice and juice concentrate; dried sweetened fruit; powdered extracts standardized to PACs in supplements.",
      preparations: [
        "**Sauce and cooking:** classic sweetened sauce; savory uses with meat.",
        "**Unsweetened juice / diluted concentrate:** tart; often mixed with water.",
        "**Dried cranberries:** check added sugar.",
        "**Capsules / PAC extracts:** follow labels only with professional advice for prevention contexts.",
        "**Storage:** refrigerate juice after opening; freeze berries.",
      ],
      dosage: [
        "Educational food/research-ballpark notes (adults; **not** prescriptions):",
        "Food: ½ cup berries or a small glass of juice with meals.",
        "Study products vary widely (e.g., juices ~8–16 oz or capsules with stated PAC mg)—**match the product to clinician advice**, not internet megadosing.",
        "Active UTI symptoms: seek medical care promptly—do not wait on cranberry alone.",
        "Prefer low-sugar forms if using routinely.",
      ],
      traditionalUses:
        "North American bog berry of Indigenous foodways and later urinary folklore. Not a Bible fruit. Not a substitute for UTI medical care.",
      prepNote:
        "Food and unsweetened juice first. Do not wait out fever, flank pain, or burning on cranberry alone. Watch sugar and oxalate.",
      emoji: "🔴",
    },
    {
      id: "dandelion",
      name: "Dandelion",
      verse: "1 Timothy 6:17",
      verseText:
        "…the living God, who giveth us richly all things to enjoy;",
      scientificName:
        "*Taraxacum officinale* F.H.Wigg. (Asteraceae / daisy family); related *Taraxacum* species worldwide—common dandelion is the familiar lawn plant",
      scientificNote:
        "Dandelion is not named in Scripture. The Passover “bitter herbs” (*maror*) are **not** identified as dandelion—do not claim they are. 1 Timothy 6:17 frames overlooked greens as gifts to enjoy when clean and correctly identified. Bitters that stimulate bile are inappropriate in gallbladder obstruction.",
      commonName:
        "Dandelion; lion’s tooth; puffball (seed head); bitterwort (folk)",
      benefits:
        "Humble bitter of lawns and tables — traditional liver/digestive tonic folklore and spring green",
      botanicalSummary:
        "Perennial with a deep taproot, jagged “lion-toothed” leaves in a basal rosette, hollow milky stems, and bright yellow composite flower heads that mature into spherical seed clocks. Every part has been used as food or folk tea: bitter leaves, flowers for wine/fritters, roasted root as a coffee-like drink. Bitterness comes from sesquiterpene lactones; root stores inulin (a prebiotic fiber).",
      intro:
        "Dandelion is not named in Scripture, yet bitters and greens fit the wider biblical food world of herbs of the field. The Passover “bitter herbs” (*maror*) are not identified as dandelion—do not claim they are—but the *category* of bitterness in redemptive memory (Exodus 12:8) reminds us God can teach through taste. A lawn weed that nourishes may humble our pride: “God… giveth us richly all things to enjoy” (1 Timothy 6:17), including overlooked greens when clean and correctly identified.",
      region:
        "Likely Eurasian origin; now cosmopolitan weed and wild food across temperate continents. Thrives in disturbed soils, lawns, and meadows.",
      ancientUses: [
        "**Eurasian folk food and medicine:** spring tonic greens; root decoctions as traditional “liver and bile” bitters; leaf as mild diuretic folklore (“wet the bed” plant in older English lore).",
        "**Traditional Chinese medicine:** related dandelion species (*pu gong ying*) in cooling/clearing formulas—species and theory differ; do not casually equate systems.",
        "**European roasting tradition:** root as caffeine-free coffee substitute.",
        "**No specific Bible plant ID**—bitter-herb category teaching only with humility.",
        "**Whole-plant foraging culture:** careful ID needed (look-alikes exist in the daisy family).",
      ],
      modernResearch: [
        "Nutrient profile of leaves (vitamin K, potassium, etc.) supports its identity as a **leafy green food**.",
        "Diuretic and digestive-bitter traditions have limited modern clinical trial depth; some small studies exist on leaf extracts and digestion—evidence is not robust drug-level proof.",
        "Inulin-rich root is of interest for prebiotic fiber research generally—not a unique dandelion monopoly.",
        "Allergy to Asteraceae can include dandelion—latex-like milky sap may irritate skin in some.",
      ],
      sideEffects:
        "Generally safe as food when correctly identified and harvested from clean (unsprayed) ground. May cause stomach upset or allergic reactions (Asteraceae). **Gallbladder obstruction / bile duct blockage:** bitters that stimulate bile are inappropriate—seek medical evaluation for biliary pain. Sap can cause contact irritation. High vitamin K in leaves may affect warfarin management—keep intake consistent and inform clinicians. Diuretic effect could matter with lithium or blood-pressure drugs—ask a professional. Pregnancy: food amounts of leaf usually fine; strong medicinal extracts need advice. Educational only.",
      partsUsed: "Leaf; root; flower; whole young plant as spring green.",
      preparations: [
        "**Salad greens:** young leaves less bitter; older leaves better cooked.",
        "**Leaf infusion:** 1–2 teaspoons dried leaf per cup, steep 5–10 minutes.",
        "**Root decoction:** simmer dried root 10–15 minutes.",
        "**Roasted root “coffee”:** traditional beverage—flavor differs from true coffee.",
        "**Tincture:** traditional bitter tonic form—professional guidance for medicinal intent.",
        "**Storage:** dry cool airtight; freeze fresh greens.",
      ],
      dosage: [
        "Educational ranges (adults):",
        "**Food:** a serving of leaves as vegetable greens.",
        "**Tea:** about **2–8 g** dried leaf or **2–6 g** dried root daily in divided cups in traditional herbal ballparks—start low; not chronic self-treatment of liver disease.",
        "Seek medical care for jaundice, severe abdominal pain, or suspected gallbladder attack—do not “dandelion” those emergencies.",
      ],
      traditionalUses:
        "Humble lawn bitter eaten as spring greens and roasted-root “coffee.” Not Passover maror. Liver-tonic folklore is not a treatment for jaundice or a blocked bile duct.",
      prepNote:
        "Harvest from unsprayed ground. Young leaves in salad; root as decoction or roasted drink. Seek care for biliary pain—do not self-treat liver disease.",
      emoji: "💛",
    },
    {
      id: "echinacea",
      name: "Echinacea",
      verse: "Acts 17:26",
      verseText:
        "And hath made of one blood all nations of men for to dwell on all the face of the earth…",
      scientificName:
        "*Echinacea purpurea* (L.) Moench (purple coneflower); *Echinacea angustifolia* DC. (narrow-leaf coneflower); *Echinacea pallida* (Nutt.) Nutt. also appears in products—**species are not identical**",
      scientificNote:
        "**Clarify species:** *E. purpurea* (common garden/aerial-part products), *E. angustifolia* (stronger historical Native American and Eclectic root reputation), and *E. pallida* are **not identical**. Echinacea is native to **North American prairies**—unknown in the biblical Near East. Acts 17:26 grounds humility, not a hyssop swap.",
      commonName:
        "Echinacea; purple coneflower; narrow-leaf echinacea; snakeroot (folk—confusing; other plants share the name)",
      benefits:
        "Plains Nation medicine plant — traditional cold-season ally (clarify species and limits)",
      botanicalSummary:
        "Perennial prairie coneflowers with daisy-like heads—purple to pink rays around a spiny orange-brown cone (*echinos* = hedgehog). *E. purpurea* is the common garden species with broader leaves; *E. angustifolia* has narrower leaves and a stronger historical Native American and early Eclectic physician reputation; roots, flowering tops, or both appear in modern extracts. Alkylamides (tingling on the tongue), caffeic acid derivatives, and polysaccharides are among studied constituent classes.",
      intro:
        "Echinacea is native to **North American prairies**—unknown in the biblical Near East. No verse applies. Respect for Indigenous ethnobotany is part of honest Christian herbal education: receive wisdom from the Nations who knew this plant first, without cultural theft or fake Scripture. “From one blood all nations” (cf. Acts 17:26) grounds humility; it does not turn echinacea into hyssop.",
      region:
        "Central North American prairies and open woodlands; *E. purpurea* widely cultivated in gardens globally; wild *E. angustifolia* populations need ethical sourcing (overharvest concerns historically).",
      ancientUses: [
        "**Indigenous Nations of the Plains:** multiple tribes used echinacea root and tops for wounds, snakebite folklore, toothache, and infectious-season support—specific practices vary by nation; honor sources, avoid caricature.",
        "**19th–early 20th century Eclectic physicians (U.S.):** popularized *E. angustifolia* in Western herbal practice.",
        "**Modern European phytotherapy:** *E. purpurea* aerial parts especially common in researched preparations.",
        "**Not biblical.**",
        "**Garden history:** ornamental coneflower boom secondary to medicinal fame.",
      ],
      modernResearch: [
        "Dozens of trials and reviews examine echinacea for **common cold** duration/severity with **mixed results**—some meta-analyses suggest small benefits for some preparations; others find little effect. Product, species, and timing differ hugely.",
        "NCCIH and similar bodies: evidence inconclusive for preventing colds; possible slight reduction in length for some—**not** an antibiotic or COVID treatment.",
        "Immune-stimulation marketing should not be used by people with autoimmune disease without clinician approval.",
        "Quality varies; some products have been adulterated or misidentified historically—choose reputable brands with species and plant-part listed.",
      ],
      sideEffects:
        "Generally well tolerated short-term. Allergic reactions possible—higher risk if allergic to Asteraceae (ragweed, chrysanthemums, daisies). Tingling tongue from alkylamides is expected with some tinctures, not always a danger sign—but rash, swelling, or breathing difficulty is an emergency. **Autoimmune conditions, immunosuppressant drugs, or atopic eczema history:** professional advice first. Pregnancy/breastfeeding: safety data limited—ask before use. Rare liver issues reported inconsistently—stop if jaundice appears. Educational only.",
      partsUsed:
        "Root (*E. angustifolia* tradition strong); aerial flowering parts (*E. purpurea* common); combinations; fresh-pressed juice products in European styles.",
      preparations: [
        "**Tincture / liquid extract:** follow labeled species and dose; note tongue tingle.",
        "**Capsules / tablets:** dried herb or standardized extracts.",
        "**Tea:** dried root or herb simmered/steeped—earthy flavor; potency less predictable than extracts.",
        "**Topical:** historical wound washes—modern first aid still prefers clinical wound care.",
        "**Storage:** cool, dark; liquids per label dating.",
      ],
      dosage: [
        "Educational ranges (adults; **not** prescriptions):",
        "Follow the **specific product label**—studied doses vary (often hundreds of mg of extract, or mL of tincture, several times daily at first onset of cold symptoms for short courses).",
        "Typical folk short course: days to 1–2 weeks—not indefinite daily “immune boosting” without advice.",
        "Clarify whether your bottle is *purpurea*, *angustifolia*, or mixed.",
        "Bacterial sinusitis, pneumonia, or high fever: medical evaluation—not echinacea alone.",
      ],
      traditionalUses:
        "Plains Nation coneflower later adopted in Eclectic and European phytotherapy. Species are not identical (*purpurea* vs. *angustifolia* vs. *pallida*). Not biblical, not an antibiotic.",
      prepNote:
        "Read the species and plant part on the label. Short cold-season courses only with professional advice if autoimmune. High fever needs medical care.",
      emoji: "🟣",
    },
    {
      id: "elderflower",
      name: "Elderflower",
      verse: "Genesis 1:29",
      verseText:
        "And God said, Behold, I have given you every herb bearing seed, which is upon the face of all the earth…",
      scientificName:
        "*Sambucus nigra* L. (flowers)—Adoxaceae (formerly Caprifoliaceae); American elder is *Sambucus canadensis* / *S. nigra* subsp. *canadensis* (taxonomy debated). **Flowers** are the subject of this monograph; **berries** are a separate food/herb topic with their own preparation rules",
      scientificNote:
        "**Flowers vs. berries:** this page prioritizes **elderflower**. **Uncooked berries, leaves, bark, and roots** contain cyanogenic glycosides and lectins that can cause nausea—**berries must be cooked** for food use. The Bible does not name *Sambucus*. Crucifixion-tree “elder” legends are **legend, not biblical text**.",
      commonName: "Elderflower; elder blossom; European elder flowers",
      benefits:
        "Creamy midsummer blossoms — traditional feverish-cold tea and cordial (berry safety noted separately)",
      botanicalSummary:
        "A large shrub or small tree with pinnate leaves, corky bark, and flat-topped clusters of tiny cream-white fragrant flowers in early summer, followed by dark purple-black berry clusters. Elderflowers smell musky-sweet (honey, lychee, and a hint of cat musk to some noses) and brew into pale gold teas and famous cordials. **Uncooked berries, leaves, bark, and roots** contain cyanogenic glycosides and lectins that can cause nausea—flowers are the gentler traditional part when properly dried; berries must be cooked for food use.",
      intro:
        "Elder appears in European folklore far more than in Scripture. The Bible does not name *Sambucus*. Some older writers speculated about “elder” in crucifixion legends—that is **legend, not biblical text**, and should not be taught as Scripture. Keep the plant in the creation-and-folk-wisdom category. A cup of blossom tea in feverish seasons can be received with thanks—and with clear botanical boundaries around raw berries.",
      region:
        "*S. nigra* native to Europe, western Asia, and North Africa; American elder across eastern North America. Hedgerows, moist edges, and gardens.",
      ancientUses: [
        "**European folk medicine:** elderflower infusions as a traditional diaphoretic (sweat-promoting) tea for chilly/feverish colds; flowers in eye-wash folklore (modern hygiene standards differ—do not DIY eye treatments casually).",
        "**Culinary:** fritters, cordials, sparkling drinks, and flavoring for desserts.",
        "**Rural hedgerow culture:** seasonal marker of early summer.",
        "**Not a biblical plant**—reject crucifixion-tree myths as Scripture teaching.",
        "**Berry tradition (separate):** cooked syrups and wines—see safety below; this page prioritizes flowers.",
      ],
      modernResearch: [
        "Elderflower preparations appear in traditional European herbal monographs for cold/feverish upper-respiratory comfort; modern trial evidence is thinner than for elder**berry** extracts (which themselves have mixed but more publicized data).",
        "Flowers contain flavonoids (e.g., rutin, quercetin glycosides) and aromatic compounds—chemistry supports antioxidant interest, not drug claims.",
        "Do not transfer elderberry product headlines wholesale onto elderflower teas—they are related but not identical preparations.",
        "Allergy and contaminant quality (insect debris in wildcrafted flowers) matter—sift and buy clean food-grade flowers.",
      ],
      sideEffects:
        "Elderflower tea is generally well tolerated. Allergic reactions possible. Large amounts may loosen stools or upset stomach. **Berry / leaf / bark caution (important separation):** raw or undercooked berries and other plant parts can cause nausea, vomiting, and diarrhea; always cook berries thoroughly for jams/syrups; do not improvise leaf or bark teas. People with elder allergy or severe pollen allergies should be careful. Pregnancy: culinary cordial amounts vs. strong medicinal teas—ask a clinician. Educational only—not fever protocol for infants (seek pediatric care).",
      partsUsed:
        "Dried or fresh flower heads (corollas; remove thick green stems when possible); berries only as a **separate, cooked** food/herb category; avoid leaf/bark for casual internal use.",
      preparations: [
        "**Infusion:** 1–2 teaspoons dried flowers per cup, steep covered 5–10 minutes; strain well.",
        "**Cordial / syrup:** traditional sugar extractions of fresh flowers for flavoring water—food product.",
        "**Fritters:** fresh clusters dipped in batter (ensure correct ID).",
        "**Tea blends:** often paired with peppermint and yarrow in European cold-season folklore blends.",
        "**Berry syrups:** cook berries fully; do not treat raw juice as safe.",
        "**Storage:** dry flowers pale and fragrant airtight; discard if brown/musty.",
      ],
      dosage: [
        "Educational ranges (adults):",
        "**Flower tea:** about **1–2 g** (roughly 1–2 teaspoons) dried flowers per cup, up to **1–3 cups** daily short-term during seasonal discomfort traditions.",
        "**Cordial:** food use by taste, diluted—watch sugar.",
        "**Berries:** only cooked; follow separate elderberry guidance—**not raw**.",
        "High fever, stiff neck, breathing distress, or infant fever: medical care immediately—not herbal self-reliance.",
      ],
      traditionalUses:
        "Creamy midsummer blossoms for cordial and feverish-cold tea. Not a biblical plant; crucifixion-elder legends are not Scripture. Berries are a separate, must-cook topic.",
      prepNote:
        "Steep dried flowers for tea; strain well. Cook berries thoroughly if using fruit. Never improvise leaf or bark teas. Infant fever needs a clinician.",
      emoji: "🤍",
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
