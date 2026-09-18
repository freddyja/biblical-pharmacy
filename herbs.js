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
