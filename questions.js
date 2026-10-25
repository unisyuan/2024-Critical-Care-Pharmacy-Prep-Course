// 題庫依使用者提供之 PDF 校訂；藥名保留學名，專有名詞採中文（原文）。
// 網站章節順序沿用原版；source.chapter / source.question 對應 PDF 章節與總題號。
const allChapters = {
  "1": [
    {
      "id": 1,
      "question": "在 1982 年，哪一本期刊率先發表了重症治療學專欄（critical care therapeutics column）？",
      "options": [
        "A. Drug Intelligence and Clinical Pharmacy。",
        "B. Pharmacotherapy。",
        "C. Chest。",
        "D. Heart & Lung。"
      ],
      "answer": "A",
      "explanation": "Drug Intelligence and Clinical Pharmacy 期刊（現稱 Annals of Pharmacotherapy）於 1982 年率先發表重症治療學專欄（critical care therapeutics column），這是重症藥學（critical care pharmacy）演進過程中的重要里程碑事件（選項 A 正確）。儘管所列出的其他期刊 — Pharmacotherapy（選項 B）、Chest （選項 C）與 Heart and Lung（選項 D） — 也會發表重症治療學相關文章，但 Annals of Pharmacotherapy 是最早將重症治療學專欄納入出版物的期刊。\n\n【教材出處】PDF 第 1 章，Q1。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 1,
        "question": 1,
        "type": "SAQ",
        "number": 1
      }
    },
    {
      "id": 2,
      "question": "加護病房（intensive care unit, ICU）內的藥學執業範疇，是由 2001 年成立的兩個工作小組（task forces）所勾勒，其聚焦於重症照護傳遞模式（models of critical care delivery）、重症專科醫師之定義（definition of an intensivist），以及在三種不同擬議模式下的重症醫學執業。下列何者最能代表成立這兩個工作小組的專業組織？",
      "options": [
        "A. 美國國家醫學院（National Academy of Medicine，前身為美國醫學研究院 [Institute of Medicine]）。",
        "B. 美國臨床藥學會（American College of Clinical Pharmacy, ACCP）。",
        "C. 美國重症醫學學院（American College of Critical Care Medicine, ACCM）。",
        "D. 美國重症醫學會之臨床藥學與藥理學分會（Clinical Pharmacy and Pharmacology Section of the Society of Critical Care Medicine [SCCM]）。"
      ],
      "answer": "C",
      "explanation": "2001 年，隸屬於美國重症醫學會（Society of Critical Care Medicine, SCCM）組織架構下的美國重症醫學學院（American College of Critical Care Medicine, ACCM）成立了這兩個工作小組，專注於探討重症照護傳遞模式、重症專科醫師（intensivist）的定義，以及在三種不同擬議模式下的重症醫學執業（選項 C 正確）。美國醫學研究院（選項 A）與美國臨床藥學會（選項 B）皆未參與制定重症照護傳遞分級。雖然 美國重症醫學會（Society of Critical Care Medicine, SCCM）的臨床藥學與藥理學分會（選項 D）可能對該文件有所貢獻，但在該發表文獻中並未被提及。\n\n【教材出處】PDF 第 1 章，Q2。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 1,
        "question": 2,
        "type": "SAQ",
        "number": 2
      }
    },
    {
      "id": 3,
      "question": "與未配置臨床藥師（clinical pharmacists）的加護病房（intensive care units, ICUs）相比，配置有臨床藥師的 加護病房（intensive care units, ICUs）在下列哪一項醫療事件中已被文獻證實與較低的死亡率（lower mortality）相關？",
      "options": [
        "A. 校正後 QT 間期延長（Corrected QT [QTc]-interval prolongation）。",
        "B. 可預防的藥物不良交互作用（Preventable adverse drug interactions）。",
        "C. 藥物 - 藥物交互作用（Drug-drug interactions）。",
        "D. 血栓栓塞／梗塞相關事件（Thromboembolic/infarction-related events）。"
      ],
      "answer": "D",
      "explanation": "在 MacLaren 與 Bond 於 2009 年發表的研究中，與接受臨床藥事服務（clinical pharmacy services）的 加護病房（intensive care unit, ICU）病人相比，未接受臨床藥事服務的 ICU 病人在血栓栓塞與梗塞相關事件（thromboembolic and infarction-related events, TIE）上的死亡率增加了 37% （p<0.0001）（選項 D 正確）。儘管臨床藥師在影響 QTc 間期延長（選項 A）、可預防的藥物不良交互作用（選項 B）及藥物 - 藥物交互作用（選項 C）方面的作用皆已被評估過，但並未記錄到死亡率上的差異。因此，這些選項皆不正確。\n\n【教材出處】PDF 第 1 章，Q3。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 1,
        "question": 3,
        "type": "SAQ",
        "number": 3
      }
    },
    {
      "id": 4,
      "question": "下列何者最符合照護重症病人（critically ill patients）的藥師所應具備的核心知識庫領域（core knowledge base area）？",
      "options": [
        "A. 腎臟醫學（Nephrology）。",
        "B. 皮膚醫學（Dermatology）。",
        "C. 風濕免疫學（Rheumatology）。",
        "D. 產科學（Obstetrics）。"
      ],
      "answer": "A",
      "explanation": "照護重症病人的藥師所需具備的核心知識領域包括：胸腔醫學（pulmonary）、心臟醫學（cardiology）、精神醫學（psychiatry）、腫瘤學（oncology）、神經科學（neuroscience）、腎臟醫學（nephrology）、肝臟醫學（hepatology）、營養學（nutrition）、胃腸病學（gastroenterology）、外科學（surgery）、外傷（trauma）、燒傷（burn）、藥理學（pharmacology）、移植醫學（transplantation）、支持性照護（supportive care）、醫療急症（medical emergencies）、免疫學（immunology）、內分泌學（endocrinology）、血液學（hematology）與毒理學（toxicology）。因此，腎臟醫學（選項 A）為正確答案。皮膚醫學（選項 B）、風濕免疫學（選項 C）與產科學（選項 D）不被視為核心知識領域，故不正確。\n\n【教材出處】PDF 第 1 章，Q4。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 1,
        "question": 4,
        "type": "SAQ",
        "number": 4
      }
    },
    {
      "id": 5,
      "question": "哪一本期刊發表了一項具里程碑意義的研究，證實將藥師納入跨專業醫療查房（interdisciplinary medical rounds）後，可減少可預防的藥物不良反應（preventable adverse drug reactions）？",
      "options": [
        "A. New England Journal of Medicine。",
        "B. Lancet。",
        "C. Journal of the American Medical Association。",
        "D. Annals of Internal Medicine。"
      ],
      "answer": "C",
      "explanation": "證實將藥師納入跨專業醫療查房後可減少可預防之藥物不良反應（preventable ADEs）的里程碑研究，是由 Lucian Leape 醫師及其同事發表於《美國醫學會雜誌》 （Journal of the American Medical Association, JAMA） （選項 C 正確）。這篇由醫師發表於主流醫學期刊並受到高度關注的文章，至今仍是證實重症藥事服務與良好醫療照護結果相關的奠基性研究之一。所列出的其他主流醫學期刊 — New England Journal of Medicine（選項 A）、Lancet（選項 B）與 Annals of Internal Medicine（選項 D） — 並未發表過關於藥師參與跨專業醫療查房減少可預防藥物不良反應的類似文章。\n\n【教材出處】PDF 第 1 章，Q5。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 1,
        "question": 5,
        "type": "SAQ",
        "number": 5
      }
    },
    {
      "id": 6,
      "question": "年時，全美共有 8 個獲得美國衛生系統藥師學會（American Society of Health- System Pharmacists, ASHP）認證的重症藥學住院藥師訓練計畫（critical care pharmacy residencies）。在 2001 年至 2021 年間， 美國衛生系統藥師學會（American Society of Health-System Pharmacists, ASHP）認證之重症住院藥師訓練計畫每年約略增加的絕對數值（annual absolute value）為何？",
      "options": [
        "A. 5。",
        "B. 8。",
        "C. 12。",
        "D. 15。"
      ],
      "answer": "B",
      "explanation": "如題所述， 2001 年有 8 個 美國衛生系統藥師學會（American Society of Health-System Pharmacists, ASHP）認證的重症藥學住院藥師訓練計畫；到了 2021 年， ASHP 記錄有 168 個獲得認證的重症藥學住院藥師訓練計畫。假設呈現線性成長， 20 年間增加 160 個訓練計畫，相當於每年增加 8 個住院藥師訓練計畫（選項 B 正確）。儘管這代表顯著的成長，但以 2009 年全美超過 67,000 張成人 加護病房（intensive care unit, ICU）病床、假設每位藥師照護 30 名病人計算，仍需要超過 2,200 名藥師才能提供完整的重症藥事服務。選項 A （每年 5 個）、選項 C （每年 12 個）與選項 D （每年 15 個）皆不正確。\n\n【教材出處】PDF 第 1 章，Q6。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 1,
        "question": 6,
        "type": "SAQ",
        "number": 62001
      }
    },
    {
      "id": 7,
      "question": "若要在提供第一級服務（level I services）的加護病房（intensive care unit, ICU）從事臨床藥學執業，下列何者最符合目前傳統或首選的畢業後訓練途徑（conventional or preferred postgraduate training pathway）？",
      "options": [
        "A. 畢業後第一年（Postgraduate year 1, PGY1）住院藥師訓練，並搭配重點重症照護輪訓（focused critical care rotations）。",
        "B. PGY1 住院藥師訓練，接著接受在職導師指導訓練（on-the-job mentored training）。",
        "C. PGY1 與 PGY2 重症照護住院藥師訓練（PGY1 and PGY2 critical care residency）。",
        "D. PGY1 與重症照護見習／專科培訓計畫（critical care traineeship）。"
      ],
      "answer": "C",
      "explanation": "重症藥學訓練的首選與建議途徑為完成 PGY1 藥學執業住院藥師訓練（PGY1 pharmacy practice residency），接著完成 PGY2 重症照護住院藥師訓練（PGY2 critical care residency）。對於在提供第一級與第二級（level I and II）服務的 加護病房（intensive care unit, ICU）中提供建議至最佳等級（desirable-to-optimal）的藥事服務而言，尤其如此。重症照護研究員訓練（critical care fellowship）也是被視為首選的選項之一，但其目標更偏重於研究與學術發展。職場上的需求往往超過受過 PGY2 訓練之重症藥師的供給量；儘管許多取得重症藥學經驗、知識與技能的替代途徑也相當成功，但由於支持這些途徑的資源存在高度變異性與不一致性，因此不被視為首選途徑（選項 A、 B 與 D 為非首選之替代途徑，故不正確）。\n\n【教材出處】PDF 第 1 章，Q7。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 1,
        "question": 7,
        "type": "SAQ",
        "number": 7
      }
    },
    {
      "id": 8,
      "question": "考量美國醫學研究院（Institute of Medicine，現稱美國國家醫學院 [National Academy of Medicine]）討論文件中所闡述的五項團隊合作醫療照護原則（five principles of team-based health care），「有效溝通（effective communication） 」與其他四項原則中的哪一項連結最為緊密？",
      "options": [
        "A. 共同目標（Shared goals）。",
        "B. 明確角色（Clear roles）。",
        "C. 相互信任（Mutual trust）。",
        "D. 可衡量的過程與結果（Measurable processes and outcomes）。"
      ],
      "answer": "C",
      "explanation": "儘管團隊合作醫療照護的各項原則彼此相互依存，但「有效溝通（effective communication） 」與「相互信任（mutual trust） 」的連結最為緊密。開放且坦誠的溝通、願意表達自身信念並向隊友提出質疑，都需要高度的相互信任，才能使彼此的關係與對話維持在專業且不針對個人的層面。若缺乏相互信任，溝通可能會變得更加防備、無效且流於政治化。選項 A、 B 與 D 雖同為團隊合作醫療照護的重要原則，但與有效溝通的直接連結不如相互信任緊密，故不正確。\n\n【教材出處】PDF 第 1 章，Q8。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 1,
        "question": 8,
        "type": "SAQ",
        "number": 8
      }
    },
    {
      "id": 9,
      "question": "關於重症藥師訓練與發展過程中的導師 - 學員關係（mentor-mentee relationship），下列敘述何者最為準確？",
      "options": [
        "A. 正式的導師指導關係（formal mentoring relationships）僅限於住院藥師與研究員訓練（residency and fellowships）期間。",
        "B. 透過共同興趣自然演進發展出的自發性關係（voluntary relationships），具有最高的成功機率。",
        "C. 導師指導訓練計畫（mentored training programs）是非傳統途徑訓練重症藥師唯一可靠的途徑。",
        "D. 大多數成功的重症藥師在其訓練與發展過程中，僅有一段重要的導師 - 學員關係。"
      ],
      "answer": "B",
      "explanation": "儘管結構化的導師 - 學員計畫也能成功，但源自共同興趣與認知到互利機會而自然發展出的自發性關係（voluntary relationships），成功的機率更高。導師必須願意承擔此角色（這需要投入大量的時間與精力），且希望與具有高度動機、有接受挑戰紀錄的學員合作；此外，學員也必須對回饋與教導有所回應。學員會尋找具共同興趣、願意分享時間與專業，且在組織中具備足夠聲望與地位能為其創造機會的導師。在指派安排的關係（arranged relationship）中，這些要素較難同時兼備。導師關係可存在於正式訓練計畫（如住院藥師與研究員）之內與之外（選項 A 錯誤）；且臨床藥師在職涯的不同階段往往會有多位導師，以因應其在執業與學術活動成熟過程中不斷演變的需求（選項 D 錯誤）。最後，雖然導師指導訓練計畫是非傳統訓練的可行選項之一，但並非唯一途徑（選項 C 錯誤）。\n\n【教材出處】PDF 第 1 章，Q9。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 1,
        "question": 9,
        "type": "SAQ",
        "number": 9
      }
    },
    {
      "id": 10,
      "question": "關於臨床藥師之繼續藥學教育（continuing pharmacy education, CPE）與繼續專業發展（continuing professional development, CPD）之間的關係，下列描述何者最為準確？",
      "options": [
        "A. CPE 與 CPD 是兩種截然不同的持續發展過程。",
        "B. CPD 是一種個人化、自我導向且反覆進行（iterative）的發展過程，用於取代傳統的 CPE。",
        "C. CPE 嚴格來說是一種講授式過程（didactic process），而 CPD 則結合了多種不同的學習策略與技巧。",
        "D. CPD 是一種個人化、自我導向的過程，通常會將相關的 CPE 納入作為其中一種學習策略。"
      ],
      "answer": "D",
      "explanation": "繼續藥學教育（CPE）應被納入作為繼續專業發展（CPD）個人發展計畫（PDP）中的一項重要策略，因此選項 A 與 B 錯誤。自我導向的學習者應選擇與其 PDP 相關、結合主動學習策略、最好是以課程為基礎（curricular based）且無商業或其他偏差的 CPE 課程。 CPD 並非 CPE 的替代品；相反地，它是由藥師學習者隨時間發展出、旨在解決特定學習目標的個人化、自我導向、持續且反覆循環的過程。 CPE 是此過程的重要組成部分，但不應是唯一的學習策略。 CPD 與 CPE 皆可包含多種學習策略，因此選項 C 錯誤。\n\n【教材出處】PDF 第 1 章，Q10。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 1,
        "question": 10,
        "type": "SAQ",
        "number": 10
      }
    },
    {
      "id": 11,
      "question": "考量重症藥學執業時，關於近期發表的臨床藥學照護標準（standards of care）與標準化照護流程（standardized process of care），下列敘述何者最為準確？",
      "options": [
        "A. 加護病房（intensive care units, ICUs）是高度個人化的執業環境，無法輕易遵循廣泛、跨領域的通用標準。",
        "B. 重症藥師具備特定於其執業風格與環境的知識與技能組合，與該標準並不一致。",
        "C. 該照護標準與標準化照護流程，與重症藥學執業標準及期望非常一致。",
        "D. 標準照護流程是圍繞著爭取「醫療服務提供者地位（provider status） 」的努力而演進，主要適用於門診、基層照護（ambulatory, primary care）的執業環境。"
      ],
      "answer": "C",
      "explanation": "近期發表的《臨床藥師執業標準》 （Standards of Practice for Clinical Pharmacists）包含了獲所有主要藥學執業組織背書的標準化照護流程，其設計旨在適用於任何執業環境，無論疾病的急迫度或複雜度為何。如同其他醫療專業（如醫師、護理師、物理治療師），臨床藥學必須定義並應用照護標準，以在所有利害關係人之間建立一致的期望。常有人爭論不同複雜或獨特執業環境中的臨床藥師不可能遵循統一的照護標準；然而，仔細審視《臨床藥學執業標準》即可發現，它可以輕易地融入任何執業環境中，因此選項 A、 B 與 D 皆不正確。\n\n【教材出處】PDF 第 1 章，Q11。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 1,
        "question": 11,
        "type": "SAQ",
        "number": 11
      }
    },
    {
      "id": 12,
      "question": "下列哪一個對象最符合「傳統上並非重症藥師教育與教學工作重要焦點」的受眾？",
      "options": [
        "A. 病人與家屬（Patients and families）。",
        "B. 藥學系學生（Pharmacy students）。",
        "C. 重症專科醫師（Critical care physicians）。",
        "D. 重症護理師（Critical care nurses）。"
      ],
      "answer": "A",
      "explanation": "在 加護病房（intensive care unit, ICU）執業的臨床藥師長期以來扮演廣泛的教育角色，目標受眾包括藥學專業的學生與住院藥師、其他專業的住院醫師與學生、重症照護團隊的同僚，以及藥劑部門的同事。臨床藥師運用多種不同的策略與技巧，在不同的學習環境中教導這些多元的受眾。儘管有少數例外，但頻繁或常規地將「病人與家屬（patients and families） 」納入其教育活動中，是較近期的發展。促成此轉變的因素包括：更加重視以病人及家屬為中心的照護（patient- and family-centered care）、將病人與家屬納為團隊成員、病人與家屬對參與決策的需求增加、論質計酬指標（pay-for-performance metrics）納入病人滿意度分數（包含疼痛控制與對藥物的了解），以及鎮靜目標改變使 ICU 病人的清醒度與互動增加。預計未來 ICU 臨床藥師將更直接參與病人及家屬的討論與衛教。選項 B、 C 與 D 皆為臨床藥師傳統上的教育受眾，故不正確。\n\n【教材出處】PDF 第 1 章，Q12。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 1,
        "question": 12,
        "type": "SAQ",
        "number": 12
      }
    },
    {
      "id": 13,
      "question": "在繼續專業發展（CPD）流程的反思階段（reflection stage）中，下列何者是「偶發性自我評估機會（episodic opportunity for self-assessment） 」的最佳範例？",
      "options": [
        "A. 年度 360 度同儕評估（annual 360-degree peer evaluation）提供的回饋指出，您的同事認為您在部門計畫上的貢獻不足。",
        "B. 意識到平時用來訓練與評估輪訓中具挑戰性學生的方法並無效果。",
        "C. 為直屬主管撰寫過去一年工作成果的自我評估（self-evaluation）。",
        "D. 包含來年具體目標的年度績效評估（annual performance evaluation）。"
      ],
      "answer": "B",
      "explanation": "在 CPD 的脈絡中，偶發性反思機會（episodic opportunities for reflection）是指自發、非排定的事件，促使藥師自我評估學習與訓練需求，並將其納入整體個人發展計畫（PDP）中。排定性反思（scheduled reflection）則通常涉及可預測的週期，例如年度績效評估、年度自我評估、作為年度考核一部分的同儕回饋，或決定在特定紀念日（如到職日、生日、學年度結束）進行反思，因此選項 A、 C 與 D 皆不正確。偶發性反思機會的範例包括：處理極為困難個案的挑戰、急救反應的事件後檢討（post-event debriefings）、指導困難學生或住院藥師的經驗，或是被要求制定超出平時專業領域的治療指引。\n\n【教材出處】PDF 第 1 章，Q13。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 1,
        "question": 13,
        "type": "SAQ",
        "number": 13
      }
    },
    {
      "id": 14,
      "question": "身為科學期刊的同儕審查員（scientific reviewer），下列何者是建議退稿（rejection of a manuscript）最正當的理由？",
      "options": [
        "A. 句法與用字遣詞不佳（Poor syntax and word choices）。",
        "B. 導致數據不正確的研究方法學瑕疵（A methodological flaw that results in incorrect data）。",
        "C. 對稿件中所呈現的統計分析方法有不同意見。",
        "D. 摘要（abstract）中呈現的結果與表格（table）中呈現的結果不一致。"
      ],
      "answer": "B",
      "explanation": "導致收集與報告錯誤數據的方法學瑕疵（methodological flaw）被視為「致命瑕疵（fatal flaw） 」，無論如何改寫或重新分析都無法修正（選項 B 正確）。寫作不佳可由作者修改或在文字編輯（copyediting）過程中修正，只要研究執行良好且具價值，這不必然是建議退稿的理由（選項 A 錯誤）。對統計分析有不同意見並不少見，但作者可能有合理的解釋，或在不偏離原研究意圖的前提下修正統計分析（選項 C 錯誤）。摘要與內文或表格有所出入亦不少見，這可在修稿過程中予以更正（選項 D 錯誤）。\n\n【教材出處】PDF 第 1 章，Q14。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 1,
        "question": 14,
        "type": "SAQ",
        "number": 14
      }
    }
  ],
  "2": [
    {
      "id": 1,
      "question": "一項臨床試驗正計畫用來決定外傷病人（trauma patients）的最佳復甦輸液（optimal resuscitation fluid）。此研究旨在探討於外傷現場給予晶體輸液（如 lactated Ringer solution）或包含濃縮紅血球（packed red blood cells）的輸血策略，是否能改善存活出院率（survival to hospital discharge）。研究團隊已諮詢多位倫理學者在試驗設計中需解決的相關問題。下列哪一項議題與本研究的倫理執行（ethical conduct）最為相關？",
      "options": [
        "A. 治療盲性處理（Treatment blinding）。",
        "B. 缺乏資訊價值的研究族群（Uninformative study population）。",
        "C. 向受傷受試者取得知情同意（Consent obtained from injured subjects）。",
        "D. 設計為不劣性試驗（Design as a noninferiority trial）。"
      ],
      "answer": "C",
      "explanation": "本研究旨在比較外傷病人低血容性休克（hypovolemic shock）的兩種可行治療。由於受試者是來自社區的外傷病人，且治療將在事故現場啟動，每種治療皆伴隨潛在風險，且預期許多潛在受試者在需要知情同意時缺乏決策能力（decisional capacity）。雖然治療盲性處理是限制研究者與臨床醫師偏差的重要試驗設計要素，但它並非倫理考量（選項 A 錯誤）。鑑於外傷在一般族群中的發生率及其對社會的負擔，改善外傷病人預後的治療是必要且具資訊價值的（選項 B 錯誤）。考量血液製品的供應有限，必須採用優越性試驗（superiority trial）以協助妥善管理有限資源（選項 D 錯誤）。在本研究中取得知情同意極具挑戰性，但為了符合研究倫理必須妥善處理（選項 C 正確）。根據美國食品藥物管理局（Food and Drug Administration, FDA）法規，此類試驗有獲得豁免知情同意要求（exception for informed consent requirements）的先例。\n\n【教材出處】PDF 第 2 章，Q15。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 2,
        "question": 15,
        "type": "SAQ",
        "number": 1
      }
    },
    {
      "id": 2,
      "question": "一項新研究的研究者正尋求最佳的評估指標（end point）或研究族群（study population），以測試一種新型藥物化合物治療敗血性休克（septic shock）的有效性。該新型藥物是一種調節敗血症發炎級聯反應（inflammatory cascade）的重組蛋白（recombinant protein），在臨床前動物研究中對所有病因引起的敗血性休克皆有令人印象深刻的效果。過去 10 年來的先前研究顯示，敗血性休克的歷史死亡率估計為 35%–40%；研究者據此計算出需納入約 800 名病人才能達到 80% 的檢定力（power）。然而，近期一項敗血性休克研究報告指出，標準治療組的 28 天死亡率為 20%。關於選擇研究族群或主要評估指標的理由，下列敘述何者最佳？",
      "options": [
        "A. 該研究應將納入條件限制為基準期共病症程度不高的病人，以限制干擾因子（confounders）。",
        "B. 該研究應擴大目標族群以納入敗血症（sepsis）而不僅是敗血性休克的病人，以顯示出 28 天死亡率的效益。",
        "C. 新研究的樣本數（sample size）將需要比早期研究更大，以增加達到統計檢定力（power）的可能性。",
        "D. 該研究應將納入條件限制為由肺炎（pneumonia）引起的敗血性休克病人，以測試具相關性的研究族群。"
      ],
      "answer": "C",
      "explanation": "本研究旨在確立新型藥物對敗血性休克的有效性。由於過去十年間 28 天死亡率已有顯著改善，這使得研究變得具挑戰性。為了證明新型藥物的有效性，應在具代表性的疾病族群中進行測試；排除有基準期共病症的病人會限制外部效度（external validity） （選項 A 錯誤）。納入 28 天死亡率比敗血性休克更低的敗血症（sepsis）病人，並無法解決評估指標的問題（選項 B 錯誤）。除非該新藥的藥理機轉專門針對肺炎的病理生理學，否則限制納入肺炎病因的病人並不恰當（選項 D 錯誤）。由於預期死亡率隨時間改變，且預期的最小可偵測效應（minimum detectable effect）亦隨之改變，在所有其他假設不變的情況下，作者必須增加收案人數（sample size）才能偵測出相對於先前試驗的效應（選項 C 正確）。\n\n【教材出處】PDF 第 2 章，Q16。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 2,
        "question": 16,
        "type": "SAQ",
        "number": 2
      }
    },
    {
      "id": 3,
      "question": "一項品質改善（quality improvement, QI）計畫正在實施，以改善至急診室就診之敗血性休克（septic shock）病人的抗微生物藥物劑量給予。身為藥師代表，您已與藥局營運團隊合作，確保自動調劑藥櫃（automated drug-dispensing machines）中備有適當種類與劑量的抗菌藥物。在證明此 QI 計畫的有效性方面，下列哪一項因素最為重要？",
      "options": [
        "A. 取得參與此 QI 計畫的知情同意（informed consent）。",
        "B. 在檢傷分類（triage）時辨識出患有敗血性休克的病人。",
        "C. 發起社區宣傳活動以提高對此計畫的認識。",
        "D. 確定此 QI 計畫的社會價值（social value）。"
      ],
      "answer": "B",
      "explanation": "QI 研究通常會使用介入前後世代設計（pre/postintervention cohort design）來展示有效性。在這類研究中，由於治療是作為標準照護提供給所有病人，因此通常不需要取得知情同意（選項 A 錯誤）。社區宣傳活動或許能改善照護傳遞與病人順從性，但對於衡量 QI 計畫的有效性並非必要（選項 C 錯誤）。該 QI 計畫因被認為有必要而啟動，因此已被認定具有內在的社會價值（選項 D 錯誤）。為了展現介入措施的有效性，必須在開始治療前先在檢傷分類時辨識出該症候群（選項 B 正確）。\n\n【教材出處】PDF 第 2 章，Q17。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 2,
        "question": 17,
        "type": "SAQ",
        "number": 3
      }
    },
    {
      "id": 4,
      "question": "一項流行病學研究（epidemiologic study）欲探討加護病房（intensive care unit, ICU）中藥物不良事件（adverse drug events, ADEs） （估計發生率為 52%）對病人預後的影響。下列何者是執行此研究的最佳方法？",
      "options": [
        "A. 隨機對照試驗（Randomized controlled trial），並使用連續變數檢定來決定預後的差異。",
        "B. 回溯性病例對照研究（Retrospective case-control study），並使用比例檢定來決定預後的差異。",
        "C. 前瞻性觀察性研究（Prospective observational study），並使用存活分析（survival analysis）來決定世代（cohorts）之間的差異。",
        "D. 回溯性世代研究（Retrospective cohort study），並使用比例檢定來決定預後的差異。"
      ],
      "answer": "C",
      "explanation": "為了有效確定 加護病房（intensive care unit, ICU）中藥物不良事件的發生率及其對臨床預後的影響，將病人隨機分派去經歷不良事件是不符合倫理的（選項 A 錯誤）。回溯性設計亦不理想，因為在資料擷取、事件歸因與因果關係判讀上皆存在限制（選項 B 與 D 錯誤）。前瞻性觀察性設計（prospective observational design）能讓研究團隊確認不良事件的發生率、發生時序與後續預後（sequential outcomes），並判定因果關係（選項 C 正確）。\n\n【教材出處】PDF 第 2 章，Q18。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 2,
        "question": 18,
        "type": "SAQ",
        "number": 4
      }
    },
    {
      "id": 5,
      "question": "一項病例對照研究（case-control study）旨在探討使用氫離子幫浦抑制劑（proton pump inhibitor, PPI）是否與發生困難梭狀桿菌感染（Clostridium difficile infection, CDI）的風險增加有關。最終分析顯示，暴露於 PPI 發生 CDI 的勝算比（odds ratio, OR）為 1.3 （95% 信賴區間 [CI] 為 0.8–1.5）。下列何者最能準確描述此結果？",
      "options": [
        "A. 暴露於 PPI 會使 CDI 的風險增加 130%。",
        "B. 暴露於 PPI 會使 CDI 的風險降低 20%。",
        "C. 暴露於 PPI 會使 CDI 的風險增加 30%。",
        "D. 暴露於 PPI 與 CDI 風險增加無關。"
      ],
      "answer": "D",
      "explanation": "對此結果的正確判讀需認識到：儘管 勝算比（odds ratio, OR）為 1.3 顯示暴露於 PPI 似乎與 CDI 風險增加 30% 相關，但其 95% 信賴區間（0.8–1.5）跨越了 1.0，這意味著暴露於 PPI 增加風險與降低風險的可能性相當，不具統計顯著意義（選項 D 正確；選項 A–C 錯誤）。\n\n【教材出處】PDF 第 2 章，Q19。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 2,
        "question": 19,
        "type": "SAQ",
        "number": 5
      }
    },
    {
      "id": 6,
      "question": "一項系統性文獻回顧（systematic review）評估了使用 albumin 進行體液復甦的效果。其中一項統合分析（meta-analysis）評估使用 albumin 與 sodium chloride 溶液（normal saline）對 28 天死亡率的影響，結果顯示在治療外傷引起的低血容性休克（hypovolemic shock）時，合併勝算比（combined OR）為 0.45 （95% CI, 0.3–0.75）。而在治療敗血性休克（septic shock）時，評估 28 天死亡率的合併 勝算比（odds ratio, OR）為 1.1 （95% CI, 0.98–1.21）。下列何者最能代表該文獻回顧的發現？",
      "options": [
        "A. albumin 增加了外傷病人的死亡率，但在敗血性休克的治療中不影響存活率。",
        "B. albumin 提高了外傷病人的存活率，但在敗血性休克的治療中不影響存活率。",
        "C. albumin 在外傷引起的低血容性休克治療中不影響存活率，但在敗血性休克的治療中改善了存活率。",
        "D. albumin 在外傷引起的低血容性休克或敗血性休克的治療中皆不影響存活率。"
      ],
      "answer": "B",
      "explanation": "在治療外傷引起的低血容性休克中，使用 albumin 降低了死亡的勝算（反之即增加了存活的勝算），其 勝算比（odds ratio, OR）為 0.45 且 95% 信賴區間（confidence interval, CI）完全小於 1 （0.3–0.75）。此外，在敗血性休克中， OR 為 1.1 且 95% CI 跨越了 1 （0.98–1.21），顯示 albumin 增加死亡率與降低死亡率的可能性相當（即無顯著影響）（選項 B 正確；選項 A、 C 與 D 錯誤）。\n\n【教材出處】PDF 第 2 章，Q20。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 2,
        "question": 20,
        "type": "SAQ",
        "number": 6
      }
    },
    {
      "id": 7,
      "question": "一名重症藥師面臨急性藥品短缺，目前完全沒有 furosemide 可立即用於病人照護。在 加護病房（intensive care unit, ICU）查房期間，醫療團隊決定對一名患有急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）的病人實施保守性輸液策略（fluid- conservative strategy） （中心靜脈壓 [CVP] 目標小於 4 mm Hg）。重症藥師調度取得了一批 bumetanide。下列哪一項敘述最能描述針對此病人的處置方針？",
      "options": [
        "A. 藥師運用對醫學文獻的理解與經驗知識（experiential knowledge），制定使用 bumetanide 的劑量滴定方案，以達到中心靜脈壓小於 4 mm Hg 的目標。",
        "B. 藥師運用對研究試驗設計的理解與經驗知識，制定使用 bumetanide 的劑量滴定方案，以達到中心靜脈壓小於 4 mm Hg 的目標。",
        "C. 藥師利用友好的關係說服腎臟科醫師使用血液透析（hemodialysis）治療此病人，以達到中心靜脈壓小於 4 mm Hg 的目標。",
        "D. 藥師運用對研究倫理的理解，向病人的代理人取得使用 bumetanide 治療的知情同意。"
      ],
      "answer": "A",
      "explanation": "本案例提供了重症藥師整合各類知識以最佳化病人照護的實務範例。 FACT 試驗顯示，保守性輸液策略可改善急性肺損傷與 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）病人的無呼吸器使用天數（ventilator-free days）。該研究中使用 furosemide 來展現預後效益；然而，該研究測試的是一種「治療策略」，而非特定的「單一藥物策略」。因此可以合理推論，當研究藥物因短缺而無法取得時，使用同類藥物也能達到相似的治療結果。對試驗設計的了解雖有幫助，但對於最佳化此病人的 bumetanide 治療並非關鍵（選項 B 錯誤）。血液透析具侵入性、消耗有限資源且伴隨併發症風險（選項 C 錯誤）。由於此病人個案並非在系統性研究設計下進行廣泛的假設檢定，這不屬於研究活動，因此不需要取得研究知情同意（選項 D 錯誤）。重症藥師可運用對 FACT 試驗的了解（醫學文獻知識）結合對 bumetanide 治療的理解與臨床經驗（經驗知識）來制定治療計畫（選項 A 正確）。\n\n【教材出處】PDF 第 2 章，Q21。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 2,
        "question": 21,
        "type": "SAQ",
        "number": 7
      }
    },
    {
      "id": 8,
      "question": "在一項 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）的研究中，病人接受神經肌肉阻斷劑（neuromuscular blocking agent, NMBA）或安慰劑治療，以確定在就診後前 48 小時內給予 神經肌肉阻斷劑（neuromuscular blocking agent, NMBA）是否能改善 28 天與 90 天存活率。該研究收案的病人分佈不均，重度 ARDS 病人多於中度與輕度 ARDS 病人。結果的事後分析（post hoc analysis）顯示，給予 NMBA 對重度 ARDS 病人具有存活效益。下列哪一項理由最能解釋為何不應對輕度至中度 ARDS 病人給予 神經肌肉阻斷劑（neuromuscular blocking agents, NMBAs）？",
      "options": [
        "A. 輕度 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）病人的死亡率較低，因此從測試治療中獲益的可能性較小。",
        "B. 輕度與中度 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）病人因其病因與臨床表現，在本質上與重度 ARDS 病人完全不同。",
        "C. 神經肌肉阻斷劑（neuromuscular blocking agents, NMBAs）時常發生藥廠短缺，需要優先保留給必要的醫療適應症。",
        "D. 所選擇的評估指標不具足夠的社會價值（social value）來支持治療。"
      ],
      "answer": "A",
      "explanation": "急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）是一種臨床症候群，隨著疾病階段進展（輕度、中度與重度）具有相應的死亡率。儘管 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）包含一系列臨床表徵與病理觀察，但患有此疾病的病人皆呈現由共同病因引起的嚴重、難治性低血氧症（選項 B 錯誤）。鑑於重度 ARDS 的相關死亡率約為 45%，雖應優先考慮治療，但短缺並非不治療輕中度病人的主要科學理由（選項 C 錯誤）。死亡率／存活率顯然是研究設計中具高度社會價值的評估指標（選項 D 錯誤）。由於輕度 ARDS 的相關死亡率相對較低（約 20%，相較於重度 ARDS 的約 45%），且存活效益僅見於重度 ARDS 次族群，若對輕度 ARDS 病人系統性地給予 神經肌肉阻斷劑（neuromuscular blocking agents, NMBAs），改善存活率的可能性較低，反而更可能增加傷害（選項 A 正確）。\n\n【教材出處】PDF 第 2 章，Q22。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 2,
        "question": 22,
        "type": "SAQ",
        "number": 8
      }
    },
    {
      "id": 9,
      "question": "您正與一個多中心團隊合作開發一項群集交叉隨機試驗（cluster-crossover randomized trial）。病人將在 8 個大都會城市的 12 家大型醫學中心進行招募。該研究將比較靜脈注射 haloperidol 與靜脈注射 droperidol 用於急診室急性躁動（acute agitation）的治療。下列何者「不屬於」此擬議研究設計的必要實務考量？",
      "options": [
        "A. 知情同意（Informed consent） — 由於兩種藥物皆可能被視為當前的標準照護，尚不清楚豁免知情同意（waiver of informed consent）是否恰當，或者社區同意（community consent）是否更為合適。",
        "B. 健康之社會決定因素（Social determinants of health） — 是否某些病人會因當地對躁動病因（如藥物使用、心理疾病）的認知差異，而更有可能被納入研究中。",
        "C. 受試者招募（Subject recruitment） — 儘管存在可能顯著影響結果的機構與地理差異，確保納入同質性族群（homogeneous populations）仍相當重要。",
        "D. 盲性處理（Blinding） — 由於無法對病人與醫療人員隱瞞藥物選擇，將對研究引入不必要的偏差（unnecessary bias）。"
      ],
      "answer": "D",
      "explanation": "本研究需要考量選項 A、 B 與 C。由於兩種藥物皆可視為標準照護，或許可豁免知情同意，但不同機構的 IRB 可能會要求使用社區同意措施；因介入措施的急迫性，直接向病人或家屬取得知情同意是不可能的。各地對急診病人躁動原因的認知差異，可能導致研究藥物使用的異質性，進而影響後續結果。此外，多中心試驗在收案時存在病人特徵差異的風險，可能需要在研究中加以控制。根據研究設計，選項 D 並非有效的實務考量：群集交叉試驗（cluster crossover trial）可比較兩種已知的標準照護，且交叉設計允許醫院／單位作為自身的對照組。偏差的風險雖然永遠不為零，但未盲性處理並不會對此試驗結果引入不必要的偏差（選項 D 正確；選項 A、 B 與 C 錯誤）。\n\n【教材出處】PDF 第 2 章，Q23。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 2,
        "question": 23,
        "type": "Case",
        "number": 1
      }
    },
    {
      "id": 10,
      "question": "【臨床案例】您是內科加護病房（medical ICU）的重症藥師，希望回溯性研究四因子凝血酶原複合濃縮物（four-factor prothrombin complex concentrate, 4F-PCC）用於末期肝病（end-stage liver disease）病人矯正凝血病變的安全性與療效。您決定的主要結果（primary outcome）為院內死亡率（in-hospital mortality），次要結果為 國際標準化比值（international normalized ratio, INR）矯正、黏彈性檢測（viscoelastic test）矯正以及血栓事件（thrombotic events）。\n\n下列何者最可能是適合本研究的試驗設計？",
      "options": [
        "A. 病例對照研究（Case-control）。",
        "B. 世代研究（Cohort）。",
        "C. 病例系列（Case series）。",
        "D. 藥物動力學試驗（Pharmacokinetic trial）。"
      ],
      "answer": "B",
      "explanation": "本研究的目標是確定暴露於 4F-PCC 是否會導致死亡率（或所關注的結果），且是在皆患有末期肝病的病人世代（cohort）中進行（選項 B 正確）。病例對照研究（case-control study）是依「是否發生所關注的結果」來分組，以找出導致該結果的相關危險因子（選項 A 錯誤）。病例系列（case series）較適合無對照組的單一群體，通常用於描述新穎的介入措施或結果（選項 C 錯誤）。藥物動力學試驗通常涉及檢體採集與藥物濃度評估，以描述藥物的動力學而非臨床結果（選項 D 錯誤）。\n\n【教材出處】PDF 第 2 章，Q24。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 2,
        "question": 24,
        "type": "Case",
        "number": 2
      }
    },
    {
      "id": 11,
      "question": "【臨床案例】您是內科加護病房（medical ICU）的重症藥師，希望回溯性研究四因子凝血酶原複合濃縮物（four-factor prothrombin complex concentrate, 4F-PCC）用於末期肝病（end-stage liver disease）病人矯正凝血病變的安全性與療效。您決定的主要結果（primary outcome）為院內死亡率（in-hospital mortality），次要結果為 國際標準化比值（international normalized ratio, INR）矯正、黏彈性檢測（viscoelastic test）矯正以及血栓事件（thrombotic events）。\n\n下列哪一項因素會在本研究中造成最高的偏差風險（highest risk of bias）？",
      "options": [
        "A. 選擇偏差（Selection bias） — 在您的機構中，通常只有正在出血的病人才會接受 4F-PCC。",
        "B. 測量偏差（Measurement bias） — 由多名學生與一名藥學住院醫師為本研究收集數據。",
        "C. 錯誤分類偏差（Misclassification bias） — 將病人分類為患有末期肝病需要人工審閱病歷（manual chart review）。",
        "D. 觀察偏差（Observation bias） — 對於有接受或未接受 4F-PCC 的組別並未進行盲性處理。"
      ],
      "answer": "A",
      "explanation": "如果根據機構標準或醫師偏好，正在出血的病人更常接受 4F-PCC，則兩個研究組別（有接受與未接受 4F-PCC 者）之間的疾病嚴重度很可能存在差異，這會在死亡率結果上導致嚴重的選擇偏差（selection bias） （選項 A 正確）。儘管由多人收集數據可能產生測量偏差，但只要制定並遵循一致的數據收集計畫，對結果造成重大影響的可能性較低（選項 B 錯誤）。錯誤分類偏差亦有可能，但只要遵循一致的數據收集與病歷審閱計畫，其對結果的影響程度遠不及選擇偏差（選項 C 錯誤）。觀察偏差在前瞻性試驗中通常比回溯性試驗更為重要，前瞻性試驗需透過盲性處理以確保所有其他標準照護均被一致遵循（選項 D 錯誤）。\n\n【教材出處】PDF 第 2 章，Q25。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 2,
        "question": 25,
        "type": "Case",
        "number": 3
      }
    },
    {
      "id": 12,
      "question": "【臨床案例】貴機構的神經外科醫師團隊希望您協助評估前降鈣素（procalcitonin）在區分神經源性發燒（neurogenic fevers）與真正感染性發燒病因上的實用性。該研究的另一個目標是評估前降鈣素陽性與陰性數值的危險因子與可能的干擾因子（confounders）。您決定將預測切點（predictive cutoff）設為 0.5 ng/mL （陽性為 0.5 ng/mL 或更高；陰性為小於 0.5 ng/mL）。\n\n若要評估前降鈣素陽性與陰性病人之間的肌酸酐清除率（creatinine clearance, mL/min）是否有任何差異，下列哪一種統計檢定最為適當？",
      "options": [
        "A. 卡方檢定（Chi-square）。",
        "B. Wilcoxon 符號等級檢定（Wilcoxon signed rank）。",
        "C. 用於母數資料的 Student t 檢定（Student t-test for parametric data）。",
        "D. 用於母數資料的 Mann-Whitney U 檢定（Mann Whitney U for parametric data）。"
      ],
      "answer": "C",
      "explanation": "Student t 檢定適用於比較兩組獨立樣本的平均值，作為母數（parametric）或常態分佈連續資料的檢定方法（選項 C 正確）。卡方分析用於類別資料（categorical data） （選項 A 錯誤）。 Wilcoxon 符號等級檢定用於比較兩組相關／成對樣本的中位數，屬於無母數資料檢定（選項 B 錯誤）。 Mann-Whitney U 檢定則用於比較兩組獨立樣本的中位數，屬於無母數（nonparametric）資料檢定，而非母數資料（選項 D 錯誤）。\n\n【教材出處】PDF 第 2 章，Q26。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 2,
        "question": 26,
        "type": "Case",
        "number": 4
      }
    },
    {
      "id": 13,
      "question": "【臨床案例】貴機構的神經外科醫師團隊希望您協助評估前降鈣素（procalcitonin）在區分神經源性發燒（neurogenic fevers）與真正感染性發燒病因上的實用性。該研究的另一個目標是評估前降鈣素陽性與陰性數值的危險因子與可能的干擾因子（confounders）。您決定將預測切點（predictive cutoff）設為 0.5 ng/mL （陽性為 0.5 ng/mL 或更高；陰性為小於 0.5 ng/mL）。\n\n在存在可能干擾因子（confounders）的情況下，若要確定前降鈣素陽性與真正感染之間的獨立關聯性（independent association），下列哪一種統計檢定最為適當？",
      "options": [
        "A. 線性迴歸（Linear regression）。",
        "B. 邏輯斯迴歸（Logistic regression）。",
        "C. Cox 比例風險模型（Cox proportional hazards model）。",
        "D. 相關性分析（Correlation analysis）。"
      ],
      "answer": "B",
      "explanation": "迴歸分析可用於在存在其他危險因子的情況下，找出與結果之間的獨立關聯性。當所關注的依變數／結果（例如：前降鈣素陽性或陰性，或有無真正感染）本質上屬於二元類別變數（categorical in nature）時，應使用邏輯斯迴歸（logistic regression） （選項 B 正確）。線性迴歸則是當依變數為連續變數時使用（選項 A 錯誤）。 Cox 比例風險模型作為存活分析或事件發生時間分析（time-to-event analysis），不適用於本案例的結果或問題（選項 C 錯誤）。雖然相關性分析可以決定前降鈣素陽性與感染之間的關聯強度，但它無法將可能干擾結果的其他危險因子納入考量（選項 D 錯誤）。\n\n【教材出處】PDF 第 2 章，Q27。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 2,
        "question": 27,
        "type": "Case",
        "number": 5
      }
    },
    {
      "id": 14,
      "question": "【臨床案例】貴機構的神經外科醫師團隊希望您協助評估前降鈣素（procalcitonin）在區分神經源性發燒（neurogenic fevers）與真正感染性發燒病因上的實用性。該研究的另一個目標是評估前降鈣素陽性與陰性數值的危險因子與可能的干擾因子（confounders）。您決定將預測切點（predictive cutoff）設為 0.5 ng/mL （陽性為 0.5 ng/mL 或更高；陰性為小於 0.5 ng/mL）。\n\n您納入了 201 名真正有感染的病人與 200 名未感染的病人。在 201 名有感染的病人中， 189 名前降鈣素呈陽性， 12 名呈陰性。在 200 名無感染的病人中， 100 名前降鈣素呈陽性， 100 名呈陰性。下列何者最能準確描述前降鈣素在此族群中的敏感度（sensitivity）與特異度（specificity）？",
      "options": [
        "A. 94% 敏感度與 89% 特異度。",
        "B. 65% 敏感度與 89% 特異度。",
        "C. 65% 敏感度與 50% 特異度。",
        "D. 94% 敏感度與 50% 特異度。"
      ],
      "answer": "D",
      "explanation": "敏感度（sensitivity）約為 94%，特異度（specificity）為 50% （選項 D 正確）。敏感度的計算方式為真陽性除以所有有疾病者： 189 / 201 ≈ 94%；特異度的計算方式為真陰性除以所有無疾病者： 100 / 200 = 50%。陽性預測值（PPV）約為 65% （189 / 289），陰性預測值（NPV）約為 89% （100 / 112）（選項 A、 B 與 C 錯誤）。\n\n【教材出處】PDF 第 2 章，Q28。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 2,
        "question": 28,
        "type": "Case",
        "number": 6
      }
    },
    {
      "id": 15,
      "question": "【臨床案例】您正在閱讀一項評估使用 hydrocortisone 對比安慰劑，於收案 3 天後降低 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）病人 C- 反應蛋白（C- reactive protein, CRP）的研究。作者推論，假設基準濃度為 35 mg/L 且 α 水準為 0.05，他們需要納入 100 名病人才能達到 90% 的檢定力（power）以發現 CRP 下降 10 mg/L。他們最終在 hydrocortisone 組納入了 50 名病人，在安慰劑組納入了 51 名病人。介入組與安慰劑組的 CRP 濃度中位數 [ 四分位距 ] 分別為 23 [19–31] 與 29 [20–40] （p<0.05）。介入組與安慰劑組達到 CRP 下降至少 10 mg/L 的病人百分比分別為 15% 與 18% （p>0.05）。\n\n在判讀此研究的效度（validity）時，您最大的疑慮為何？",
      "options": [
        "A. 該研究未達到統計檢定力（statistical power）。",
        "B. 樣本數太小，無法提供代表該疾病狀態的族群。",
        "C. 降低 CRP 的結果不應被二分為二元變數（dichotomized），而只能作為連續變數分析。",
        "D. CRP 的結果屬於替代指標（surrogate），很可能無法良好代表在 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）中使用類固醇的臨床意義。"
      ],
      "answer": "D",
      "explanation": "在評估此研究時，必須考量與生物標記（biomarker）相關的結果僅是一個替代指標（surrogate outcome），而非真正的臨床結果（true clinical outcome）。這可能會有問題或缺乏臨床效度，因為過去其他類固醇的研究是針對呼吸器使用天數與死亡率等臨床結果進行評估（選項 D 正確）。該研究不僅達到了作者原定檢定力分析的收案標準（101 人 > 100 人），且在主要結果上找到了具統計顯著性的差異（選項 A 錯誤）。儘管樣本數不大，但仍可能代表具內部效度的合理族群，特別是在執行該研究的機構內可有限度地參考（選項 B 錯誤）。雖然檢定力分析是針對連續結果設計，但只要讀者理解該研究並非針對二元結果計算檢定力，以兩種不同方式呈現數據（包含達到 CRP 下降至少 10 mg/L 的比例）仍是合理的（選項 C 錯誤）。\n\n【教材出處】PDF 第 2 章，Q29。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 2,
        "question": 29,
        "type": "Case",
        "number": 7
      }
    },
    {
      "id": 16,
      "question": "【臨床案例】您正在閱讀一項評估使用 hydrocortisone 對比安慰劑，於收案 3 天後降低 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）病人 C- 反應蛋白（C- reactive protein, CRP）的研究。作者推論，假設基準濃度為 35 mg/L 且 α 水準為 0.05，他們需要納入 100 名病人才能達到 90% 的檢定力（power）以發現 CRP 下降 10 mg/L。他們最終在 hydrocortisone 組納入了 50 名病人，在安慰劑組納入了 51 名病人。介入組與安慰劑組的 CRP 濃度中位數 [ 四分位距 ] 分別為 23 [19–31] 與 29 [20–40] （p<0.05）。介入組與安慰劑組達到 CRP 下降至少 10 mg/L 的病人百分比分別為 15% 與 18% （p>0.05）。\n\n在此研究中，達到 CRP 下降至少 10 mg/L 的益一需治人數（number needed to treat, NNT）最接近下列何者？",
      "options": [
        "A. 34。",
        "B. 17。",
        "C. 50。",
        "D. 6。"
      ],
      "answer": "A",
      "explanation": "NNT 的計算公式為 1 / 絕對風險差（ARR）。兩組達到 CRP 下降至少 10 mg/L 的比例分別為 15% 與 18%，絕對風險差為 3% （即 0.03）。因此 NNT = 1 / 0.03 = 33.3，無條件進位至最接近的整數為 34 （選項 A 正確；選項 B、 C 與 D 錯誤）。\n\n【教材出處】PDF 第 2 章，Q30。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 2,
        "question": 30,
        "type": "Case",
        "number": 8
      }
    }
  ],
  "3": [
    {
      "id": 1,
      "question": "身為臨床協調員／主管，您收到一項要求讓重症藥師審閱所有加護病房（intensive care unit, ICU）病人的申請。您意識到目前缺乏必要的人力來完成這項要求。若要為爭取該職位提供依據，下列哪一種佐證方法能對機構產生最顯著的財務影響（financial impact）？",
      "options": [
        "A. 制定重症病人的治療方案（protocols）。",
        "B. 減少處方開立疏失（prescribing errors）。",
        "C. 減少給藥疏失（medication administration errors）。",
        "D. 實施抗凝血反轉劑管理計畫（anticoagulation reversal stewardship program）。"
      ],
      "answer": "D",
      "explanation": "重症藥師的財務價值可透過臨床藥師對重症病人的影響來證實。重症藥師能減少重症族群的不良事件、減少醫囑開立疏失、針對疾病選擇並最佳化正確藥物、縮短住院天數（LOS）、減少給藥疏失，並減少不適當的抗生素與高價藥品使用。在各選項中，抗凝血反轉劑（如 4F-PCC、 andexanet alfa、 idarucizumab）單劑成本極為高昂，因此實施抗凝血反轉劑管理計畫（anticoagulation reversal stewardship program）將對機構產生最直接且顯著的財務影響（選項 D 正確）。制定治療方案、減少處方疏失與減少給藥疏失雖能降低醫療成本並預防病人傷害，但其直接財務效益皆不如高價反轉劑管理計畫顯著（選項 A、 B 與 C 錯誤）。\n\n【教材出處】PDF 第 4 章，Q52。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 4,
        "question": 52,
        "type": "SAQ",
        "number": 1
      }
    },
    {
      "id": 2,
      "question": "您是根據美國重症醫學會（Society of Critical Care Medicine, SCCM）指引在 加護病房（intensive care unit, ICU）推動譫妄篩檢工具（delirium screening tool）的重症藥師。在您的 ICU 實施譫妄篩檢時，下列何者最符合「執業環境障礙（practice environment barrier） 」的描述？",
      "options": [
        "A. 護理標準作業流程（nursing standard work）未包含譫妄篩檢。",
        "B. 篩檢過程佔用了寶貴的護理時間。",
        "C. 醫療人員不熟悉如何執行譫妄篩檢。",
        "D. 醫療人員認為自己對床邊譫妄的認知已足夠，不需要篩檢工具。"
      ],
      "answer": "B",
      "explanation": "執業環境限制（組織脈絡 [organizational context]）包括財務誘因不足（無足夠人力支持篩檢）、組織限制（篩檢過程佔用寶貴的護理時間）、責任風險認知（擔心篩檢陽性會被歸咎）以及病人期望（選項 B 正確）。主要利害關係人的標準或常規作業流程未包含該項目，屬於主流意見／社會脈絡（prevailing opinion / social context）的障礙（選項 A 錯誤）。醫療人員不熟悉如何執行篩檢，或是因對自身技能過度自信而認為不需要篩檢工具，則屬於專業脈絡中的知識、技能與態度（knowledge, skills, and attitudes）障礙（選項 C 與 D 錯誤）。\n\n【教材出處】PDF 第 4 章，Q53。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 4,
        "question": 53,
        "type": "SAQ",
        "number": 2
      }
    },
    {
      "id": 3,
      "question": "藥事委員會（P&T committee）希望評估加護病房（intensive care unit, ICU）中壓力性潰瘍預防（stress ulcer prophylaxis, SUP）藥物治療的使用情形。下列何者是進行此評估的最佳方法？",
      "options": [
        "A. 執行藥物使用評估（Perform a medication use evaluation, MUE）。",
        "B. 執行績效改善計畫（Administer a performance improvement [PI] initiative）。",
        "C. 審查來自 加護病房（intensive care unit, ICU）的藥物不良事件（adverse drug event, ADE）數據。",
        "D. 審查來自 加護病房（intensive care unit, ICU）的用藥疏失（medication error）數據。"
      ],
      "answer": "A",
      "explanation": "評估 加護病房（intensive care unit, ICU）中 SUP 的藥物治療使用情形，最適合採用藥物使用評估（medication-use evaluation, MUE） （選項 A 正確）。 藥物使用評估（medication-use evaluation, MUE）的目標是確保最佳的藥物治療管理，並改善特定藥物相關流程的病人安全與結果。雖然績效改善（PI）是 MUE 的一部分，但在決定是否需要啟動 PI 專案之前，應先進行品質審查（選項 B 錯誤）。審查 ICU 的 藥物不良事件（adverse drug event, ADE）數據與用藥疏失數據雖有助於偵測問題，但這些屬於孤立事件且依賴通報者主動回報，沒有通報並不代表 SUP 的使用恰當（選項 C 與 D 錯誤）。唯有 MUE 是全面且嚴謹評估 SUP 藥物使用的方法。\n\n【教材出處】PDF 第 4 章，Q54。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 4,
        "question": 54,
        "type": "SAQ",
        "number": 3
      }
    },
    {
      "id": 4,
      "question": "下列哪一項藥物使用流程最適合進行藥物使用評估（medication-use evaluation, MUE）？",
      "options": [
        "A. 藥師對 加護病房（intensive care unit, ICU）常規醫囑的審核時間（verification times）。",
        "B. warfarin 引起之低凝血酶原血症（hypoprothrombinemia）的處置。",
        "C. 醫令輸入電腦化系統（CPOE）上的藥物交互作用警示。",
        "D. CPOE 系統上的重複用藥警示。"
      ],
      "answer": "B",
      "explanation": "評估 warfarin 引起之低凝血酶原血症的處置最適合進行 藥物使用評估（medication-use evaluation, MUE），因為 MUE 是針對特定藥物、藥物類別或特定疾病狀態（在此例中為 warfarin 相關過度抗凝血的處置），旨在確保最佳藥物治療管理並改善病人安全與結果（選項 B 正確）。品質保證（Quality assurance, QA）則是監測整體用藥流程（包含開立、調劑、給藥）有效性與安全性的過程；評估常規醫囑審核時間、 CPOE 藥物交互作用警示與重複用藥警示並非針對特定藥物或疾病狀態，因此較適合進行 QA 審查（選項 A、 C 與 D 錯誤）。\n\n【教材出處】PDF 第 4 章，Q55。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 4,
        "question": 55,
        "type": "SAQ",
        "number": 4
      }
    },
    {
      "id": 5,
      "question": "您受命為您的 加護病房（intensive care unit, ICU）制定一項品質改善（QI）策略，規範何時應對心跳停止（cardiac arrest）後的病人啟動目標溫控治療（targeted temperature management, TTM）。目前的流程已經界定清楚，且目標溫控治療的最佳實務也已勾勒完成。您已找出此病人族群的主要利害關係人與您合作進行流程改善。在制定此 QI 計畫時，下一步最佳的步驟為何？",
      "options": [
        "A. 確定哪些心跳停止病人應該接受目標溫控治療。",
        "B. 評估目前與目標溫控治療相關的臨床指引。",
        "C. 確定目前目標溫控治療的流程。",
        "D. 評估接受目標溫控治療病人的相關數據。"
      ],
      "answer": "A",
      "explanation": "由於目前的流程已經確定（排除選項 C），且最佳實務與指引也已勾勒完成，無需再進行額外的文獻指引評估（排除選項 B）。下一步最佳步驟是明確界定目標族群與標準，即「確定哪些心跳停止病人應該接受目標溫控治療」（選項 A 正確）。在此之後，才會收集並評估接受目標溫控治療病人的相關數據，以找出需要改善的領域（排除選項 D）。\n\n【教材出處】PDF 第 4 章，Q56。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 4,
        "question": 56,
        "type": "SAQ",
        "number": 5
      }
    },
    {
      "id": 6,
      "question": "您從 CPOE 系統中取得了敗血症立即給予抗生素的時間數據，以確定品質改善的基準指標（baseline metric）。若使用定義、衡量、分析、改善、控制（DMAIC）方法，哪一個步驟描述了處理這些已收集數據以決定基準給藥時間的階段？",
      "options": [
        "A. 收集數據（Data are collected）。",
        "B. 建立方法（Methods are established）。",
        "C. 實施變革流程（Change process is implemented）。",
        "D. 分析數據（Data are analyzed）。"
      ],
      "answer": "D",
      "explanation": "由於數據已經從 CPOE 系統中收集完成，接下來的步驟是必須對數據進行分析（Data are analyzed），以確定基準的抗生素給藥時間並找出變異原因（即 Analyze 階段）（選項 D 正確）。衡量（Measure）階段包含收集數據，而這已經完成了（選項 A 錯誤）。建立方法屬於設計／定義階段的一部分（選項 B 錯誤）。實施變革流程則是改善（Improve）階段（選項 C 錯誤）。\n\n【教材出處】PDF 第 4 章，Q57。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 4,
        "question": 57,
        "type": "SAQ",
        "number": 6
      }
    },
    {
      "id": 7,
      "question": "下列哪一項指標最能全面量化（quantifies）重症藥師的臨床活動？",
      "options": [
        "A. 對每個變數進行加權以量化所衡量的活動（Weighing each variable to quantify measured activities）。",
        "B. 每月參與心跳停止急救（cardiac arrest codes）的次數。",
        "C. 每年院內感染困難梭狀桿菌（Clostridioides difficile）的數量與嚴重度。",
        "D. 每年提供的在職教育（in-services）場次數量。"
      ],
      "answer": "A",
      "explanation": "對每項重症藥師活動使用加權衡量指標（weighted metrics）— 隨時間量化並按年計算 — 最能準確且全面地量化重症藥師的多元活動與嚴重度影響（例如使用 Overhage and Lukes Scale）（選項 A 正確）。每月參與急救的次數、每年院內感染 C. difficile 的數量與嚴重度，以及每年提供的在職教育場次雖然都很重要，但單憑個別項目無法全面量化重症藥師的所有綜合活動（選項 B、 C 與 D 錯誤）。\n\n【教材出處】PDF 第 4 章，Q58。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 4,
        "question": 58,
        "type": "SAQ",
        "number": 7
      }
    },
    {
      "id": 8,
      "question": "身為 加護病房（intensive care unit, ICU）的臨床藥師，您被要求評估針對重症病人的品質計畫。下列何者最符合聯邦醫療保險與醫療補助服務中心（CMS）的品質衡量指標（quality metric）？",
      "options": [
        "A. 敗血症處置組合式照護（Sepsis management bundle）與靜脈血栓栓塞預防（venous thromboembolism prophylaxis）。",
        "B. 中風的血栓溶解治療（Thrombolytic therapy for stroke）與壓力性潰瘍預防（SUP）。",
        "C. 心臟衰竭再入院率（Heart failure readmission）與肺炎疫苗接種率。",
        "D. 呼吸器組合式照護（Ventilator bundles）與急性冠心症再入院率。"
      ],
      "answer": "A",
      "explanation": "嚴重敗血症與敗血性休克處置組合式照護（Sepsis management bundle）以及 加護病房（intensive care unit, ICU）靜脈血栓栓塞預防（VTE-2）皆屬於向 CMS 通報的醫院住院品質通報（IQR）衡量指標（選項 A 正確）。中風的血栓溶解治療屬於核心指標，但壓力性潰瘍預防（SUP）並非 CMS 通報指標（選項 B 錯誤）。心臟衰竭再入院率屬於通報指標，但肺炎疫苗接種率已不再是必報指標（選項 C 錯誤）。急性冠心症／心肌梗塞再入院率屬於通報指標，但呼吸器組合式照護（ventilator bundles）並非 CMS 通報指標（選項 D 錯誤）。\n\n【教材出處】PDF 第 4 章，Q59。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 4,
        "question": 59,
        "type": "SAQ",
        "number": 8
      }
    },
    {
      "id": 9,
      "question": "身為重症藥師，您受命制定一份用於抗凝血治療相關出血之反轉劑（reversal agents）的臨床指引。下列何者是建立此臨床路徑（clinical pathway）時應包含的最佳要素範例？",
      "options": [
        "A. 評估支持臨床路徑的閉環技術（closed-loop technology），並建立一位醫師推動者（physician champion）。",
        "B. 運用實證醫學（EBM）來支持臨床路徑，並在執業人員之間取得共識（agreement among practitioners）。",
        "C. 制定臨床治療方案（clinical protocol），並在執業人員之間取得共識。",
        "D. 評估處方集提案（formulary proposals）以及支持該臨床實務的實證醫學。"
      ],
      "answer": "B",
      "explanation": "運用實證醫學（evidence-based medicine, EBM）檢視證據，並在跨領域執業人員之間取得共識，是建立臨床指引與臨床路徑的核心基礎（選項 B 正確）。閉環技術與醫師推動者雖對後續執行有幫助，但並非建立臨床指引內容的核心定義（選項 A 錯誤）。制定具體臨床治療方案與路徑是在評估實證之後才進行的步驟（選項 C 錯誤）。處方集提案並非實施臨床路徑的主要因素（選項 D 錯誤）。\n\n【教材出處】PDF 第 4 章，Q60。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 4,
        "question": 60,
        "type": "Case",
        "number": 1
      }
    },
    {
      "id": 10,
      "question": "神經肌肉阻斷劑（neuromuscular blocking agents, NMBAs）屬於高警訊藥品（high alert medications），曾導致嚴重的用藥疏失與病人傷害。您到內科 加護病房（intensive care unit, ICU）新工作就職時，去自動調劑藥櫃（Pyxis）取用 rocuronium，發現藥櫃螢幕上沒有任何警示，且藥品放在開放式的藥格中。您記得安全用藥實務學會（ISMP）曾發布相關安全警訊與安全儲存及處理 神經肌肉阻斷劑（neuromuscular blocking agents, NMBAs）的最佳實務。下列何者是執行差距分析（gap analysis）的最佳範例？",
      "options": [
        "A. 對其他醫療機構進行問卷調查，了解他們如何處理 NMBs 的儲存，並與您新機構的實務進行比較。",
        "B. 根據您前一家服務機構的做法，直接建議實施相同的儲存解決方案。",
        "C. 建立一份 ISMP 針對安全儲存與處理 NMBs 之最佳實務建議的表格，並與您新機構目前的實務進行比較。",
        "D. 對院內員工進行調查，詢問他們認為哪種儲存方式最安全且同時仍方便取用。"
      ],
      "answer": "C",
      "explanation": "差距分析（gap analysis）是將「最佳實務標準（best practice） 」與「機構目前現況（current state） 」進行比較，以找出改善的機會。因此，建立 ISMP 最佳實務建議表格並與新機構現行實務逐項比對，是找出改善機會的最佳方法（選項 C 正確）。調查其他機構的做法雖有參考價值，但無法確保其他機構皆符合最佳實務（選項 A 錯誤）。未完成差距分析就直接跳到前機構的解決方案並不恰當（選項 B 錯誤）。調查院內員工的個人意見並無法提供與最佳實務標準之間存在哪些落差的客觀資訊（選項 D 錯誤）。\n\n【教材出處】PDF 第 4 章，Q61。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 4,
        "question": 61,
        "type": "Case",
        "number": 2
      }
    },
    {
      "id": 11,
      "question": "您正在審查手術室周術期環境（perioperative setting）對國家病人安全目標（National Patient Safety Goals, NPSG）中「適當藥品標示（appropriate medication labeling） 」的遵循度。透過現場觀察，您注意到抽取至針筒中的 propofol 在標示方式上不一致（甚至有時完全未標示）。在大多數有標示的情況下，標籤上僅寫了藥品名稱。針筒標籤上還應該包含哪些其他資訊？",
      "options": [
        "A. 病人姓名、藥品名稱、劑量，以及有效日期／時間。",
        "B. 藥品名稱、濃度（concentration）、稀釋液（若適用， diluent if applicable），以及有效日期／時間（expiration date/time）。",
        "C. 病人姓名、藥品名稱、藥品劑量，以及濃度。",
        "D. 藥品名稱、藥品劑量、濃度，以及稀釋液（若適用）。"
      ],
      "answer": "B",
      "explanation": "根據聯合委員會（TJC）國家病人安全目標（NPSG）的規定，在手術或處置前抽取至針筒、藥杯或器皿中的藥品或溶液，除非由授權人員親自準備並立即不間斷地直接給予病人，否則標籤上必須包含：藥品名稱（name）、含量／濃度（strength/concentration）、稀釋液與容積（若適用， diluent and volume），以及有效日期／時間（expiration date/time） （選項 B 正確）。在周術期環境的針筒標籤上， NPSG 並未要求標示病人姓名與總劑量（選項 A、 C 與 D 錯誤）。\n\n【教材出處】PDF 第 4 章，Q62。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 4,
        "question": 62,
        "type": "Case",
        "number": 3
      }
    },
    {
      "id": 12,
      "question": "身為重症藥師，您參與了一項品質改善（QI）計畫。下列哪一項聯合委員會（TJC）的核心衡量指標最廣為人知會受到重症藥師的影響？",
      "options": [
        "A. 急診收治住院病人從抵達急診至離開急診的中位數時間（ED-1a）。",
        "B. 腦內出血（intracerebral hemorrhage, ICH）病人啟動促凝血反轉劑治療（Procoagulant reversal agent initiation for intracerebral hemorrhage, CSTK-04）。",
        "C. 接受靜脈注射 alteplase 或機械性血管內再灌流治療病人的出血性轉化（Hemorrhagic transformation, CSTK-05b）。",
        "D. 嚴重敗血症與敗血性休克處置組合式照護（Severe sepsis and septic shock management bundle）。"
      ],
      "answer": "B",
      "explanation": "根據聯合委員會（TJC）現行《國家品質指標規範手冊》 （Specifications Manual for Joint Commission National Quality Measures）中要求必報的病歷擷取核心指標，全方位中風指標中的「腦內出血（intracerebral hemorrhage, ICH）啟動促凝血反轉劑治療（CSTK-04） 」直接受到重症藥師的介入與影響（選項 B 正確）。急診停留中位數時間（選項 A）與治療後的出血性轉化率（選項 C）並非直接受藥師控制的指標。雖然重症藥師對嚴重敗血症與敗血性休克組合式照護有重大影響，但該項目屬於 CMS 指標而非 TJC 要求的必報中風／急診核心指標（選項 D 錯誤）。\n\n【教材出處】PDF 第 4 章，Q63。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 4,
        "question": 63,
        "type": "Case",
        "number": 4
      }
    },
    {
      "id": 13,
      "question": "作為 QI 計畫的一部分，您發現您所在的 加護病房（intensive care unit, ICU）每月導管相關血流感染（catheter-related bloodstream infections）的發生率有所上升。您決定使用精實方法學（LEAN methodology）來評估現行實務。下列何者是 LEAN 組成要素的最佳範例？",
      "options": [
        "A. 定義問題（Define the problem）。",
        "B. 詢問您的護理師，為何他們認為導管相關血流感染會突然增加。",
        "C. 找出運送障礙（transportation barriers）。",
        "D. 描述過去的流程（Describe the past process）。"
      ],
      "answer": "A",
      "explanation": "定義問題並釐清現況是品質改善與精實評估的第一步（選項 A 正確）。精實策略強調透過實際觀察流程（「走訪現場 [walk the line] 」）來消除個人主觀意見與情緒對流程評估的影響，因此單純詢問護理師個人的主觀看法並非 LEAN 的做法（選項 B 錯誤）。找出運作障礙雖屬 LEAN 流程，但運送障礙與導管相關血流感染無關（選項 C 錯誤）。 LEAN 強調描繪「目前現況（current state） 」而非描述過去的流程（選項 D 錯誤）。\n\n【教材出處】PDF 第 4 章，Q64。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 4,
        "question": 64,
        "type": "Case",
        "number": 5
      }
    },
    {
      "id": 14,
      "question": "下列哪一項藥物使用流程最適合進行藥物使用評估（medication-use evaluation, MUE）？",
      "options": [
        "A. 審查電子病歷（EHR）中的藥師紀錄。",
        "B. 審查靜脈調配製劑上所標示之有效日期的準確性。",
        "C. 審查 vancomycin 的劑量給予及 vancomycin 血中濃度的醫囑開立情形。",
        "D. 審查 CPOE 系統上藥物交互作用警示的出現頻率。"
      ],
      "answer": "C",
      "explanation": "藥物使用評估（medication-use evaluation, MUE）是針對特定藥物或特定疾病的評估，因此最適合用於審查 vancomycin 的劑量給予及血中濃度監測醫囑開立情形（選項 C 正確）。品質保證（QA）調查則較適合用於監測非特定藥物或疾病的常規用藥流程，例如審查 EHR 中的藥師紀錄、靜脈製劑有效日期的準確性，以及 CPOE 藥物交互作用警示的頻率（選項 A、 B 與 D 錯誤）。\n\n【教材出處】PDF 第 4 章，Q65。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 4,
        "question": 65,
        "type": "Case",
        "number": 6
      }
    },
    {
      "id": 15,
      "question": "您每天作為跨領域團隊的一員在 加護病房（intensive care unit, ICU）參與查房。您的主管請您協助證明臨床藥事服務的價值，以為機構內的其他 加護病房（intensive care units, ICUs）爭取額外的全職當量人力（FTEs）。在向醫院高層主管提出的佐證報告中，納入下列哪一項指標最為有效？",
      "options": [
        "A. 抗生素管理成效與成本節省（Antibiotic stewardship and cost savings）。",
        "B. 醫療人員教育與提供的在職訓練場次。",
        "C. 花費在查房與其他活動上的時間。",
        "D. 腎功能劑量調整與靜脈轉口服（IV-to-PO）轉換的次數。"
      ],
      "answer": "A",
      "explanation": "向醫院領導階層爭取人力時，應提供能為組織帶來財務效益以及改善病人預後與安全的具體證據。抗生素管理成效與成本節省能同時提供這兩方面的效益，最有助於爭取額外的藥師 FTEs （選項 A 正確）。醫療人員教育與在職訓練雖有益處，但難以轉化為具體的成本節省或臨床預後效益（選項 B 錯誤）。單純統計花費在查房上的時間若無伴隨介入成效與成本節省指標，並無法展現附加價值（選項 C 錯誤）。腎功能劑量調整與靜脈轉口服雖是臨床藥師頻繁執行的介入，但除非與具體的成本節省及安全效益連結，否則單憑次數無法提供具說服力的宏觀價值指標（選項 D 錯誤）。\n\n【教材出處】PDF 第 4 章，Q66。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 4,
        "question": 66,
        "type": "Case",
        "number": 7
      }
    },
    {
      "id": 16,
      "question": "在 加護病房（intensive care unit, ICU）查房期間，醫療團隊建議對一名敗血性休克病人使用一種價格極為高昂且療效具爭議性的非處方集藥物作為最後一線升壓劑。您審閱病歷後，認為在訴諸此新療法之前，還有更安全的處方集內選項可以嘗試。依規定您必須在病人病歷中記錄您的介入措施以供追蹤。下列哪一種措辭最為適當？",
      "options": [
        "A. 由於此藥物的成本極高，醫療團隊應改用其他處方集內的選項。",
        "B. 此藥物在臨床試驗中與顯著的不良反應相關，若用於此病人很可能會造成傷害。",
        "C. 建議醫療團隊可考慮先使用處方集內、且在敗血性休克病人中具證實效益的藥物，來最佳化病人的藥物治療（The team should consider optimizing the patientʼs pharmacological therapy with agents that are on formulary and have a proven benefit in patients with septic shock）。",
        "D. 使用此非處方集藥物是個糟糕的選擇，若使用很可能會導致病人傷害。"
      ],
      "answer": "C",
      "explanation": "對於非主動照會（unsolicited）的藥師介入建議，病歷記錄的措辭應委婉且具建設性（例如使用「可考慮 [may consider] 」、「建議 [suggest/may recommend] 」），讓主治醫師在不承擔額外醫療法律責任風險的情況下考量該建議，並同時說明臨床理由（選項 C 正確）。選項 A 僅聚焦於成本，缺乏對病人臨床影響的合理說明。選項 B 與 D 的措辭過於武斷且具指控性，暗示若醫師不採納建議就會對病人造成傷害，這在病歷記錄中是不恰當的（選項 B 與 D 錯誤）。\n\n【教材出處】PDF 第 4 章，Q67。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 4,
        "question": 67,
        "type": "Case",
        "number": 8
      }
    }
  ],
  "4": [
    {
      "id": 1,
      "question": "【臨床案例】貴機構希望評估將 coagulation factor Xa （recombinant）, inactivated-zhzo （andexanet alfa）納入處方集，用於逆轉直接口服抗凝血劑（direct oral anticoagulants, DOACs）。\n\n下列何者最能描述此藥物所屬的成本類型？",
      "options": [
        "A. 固定醫療成本（Fixed medical）。",
        "B. 變動醫療成本（Variable medical）。",
        "C. 間接成本（Indirect）。",
        "D. 增量成本（Incremental）。"
      ],
      "answer": "B",
      "explanation": "藥品本身的成本會隨使用量而變動，因此屬於直接醫療成本中的「變動醫療成本（variable medical cost） 」（選項 B 正確）。無菌室照明電費或租金等不隨使用量改變的成本屬於固定醫療成本（選項 A 錯誤）。病人因需要使用此藥物住院而損失的工作時間與收入屬於間接成本（選項 C 錯誤）。給藥後額外使用血液製品或購買額外療效所增加的成本則屬於增量成本（選項 D 錯誤）。\n\n【教材出處】PDF 第 5 章，Q68。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 5,
        "question": 68,
        "type": "SAQ",
        "number": 1
      }
    },
    {
      "id": 2,
      "question": "【臨床案例】貴機構希望評估將 coagulation factor Xa （recombinant）, inactivated-zhzo （andexanet alfa）納入處方集，用於逆轉直接口服抗凝血劑（direct oral anticoagulants, DOACs）。\n\n貴機構希望運用藥物經濟學數據，評估此藥物相較於凝血酶原複合濃縮物（prothrombin complex concentrate, PCC）在神經學失能（neurologic disability）與成本上的影響。在文獻中尋找下列哪一種分析最佳？",
      "options": [
        "A. 成本利益分析（Cost-benefit）。",
        "B. 成本效益分析（Cost-effectiveness）。",
        "C. 成本最小化分析（Cost-minimization）。",
        "D. 成本效用分析（Cost-utility）。"
      ],
      "answer": "B",
      "explanation": "考量需要同時評估自然單位的臨床療效（神經學失能）與成本，成本效益分析（cost- effectiveness analysis, CEA）是最佳的分析類型（選項 B 正確）。若機構純粹只對轉化為貨幣單位的結果感興趣，才會使用成本利益分析（選項 A 錯誤）。成本最小化分析僅在兩種藥物的臨床結果已證實完全相同時，用來比較成本差異（選項 C 錯誤）。成本效用分析則納入了病人的主觀偏好與生活品質（以 QALY 衡量），並非本評估的焦點（選項 D 錯誤）。\n\n【教材出處】PDF 第 5 章，Q69。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 5,
        "question": 69,
        "type": "SAQ",
        "number": 2
      }
    },
    {
      "id": 3,
      "question": "一名 60 歲病人入住外科 加護病房（intensive care unit, ICU），病歷上已記錄有對 cefuroxime 過敏（表現為呼吸急促 [shortness of breath]）的病史。該病人仍被給予了 ceftriaxone，隨後發生危及生命的過敏性休克反應（anaphylactic reaction）。下列何者最能準確描述此病人對 ceftriaxone 的反應？",
      "options": [
        "A. 藥物不良反應（Adverse drug reaction, ADR）。",
        "B. 副作用（Side effect）。",
        "C. 藥物不良事件（Adverse drug event, ADE）。",
        "D. 可預防的藥物不良事件（Preventable ADE）。"
      ],
      "answer": "D",
      "explanation": "根據定義，可預防的藥物不良事件（preventable ADE）是指因違反標準專業行為或實務而發生的用藥疏失，且該疏失接觸到病人並造成傷害。此病人已有明確記錄對 cefuroxime 過敏（呼吸急促）的病史，卻仍被給予具有相似側鏈結構（side chains）且有明確交叉反應紀錄的 ceftriaxone，進而引發危及生命的過敏性休克；給予該藥屬於用藥疏失，而過敏性休克則是造成的傷害，因此屬於可預防的 藥物不良事件（adverse drug event, ADE） （選項 D 正確）。雖然此案例也屬於廣義的 ADE 或 藥物不良反應（adverse drug reaction, ADR） ／副作用，但「可預防的 ADE （Preventable ADE） 」是最精確的描述（選項 A、 B 與 C 不如 D 精確）。\n\n【教材出處】PDF 第 5 章，Q70。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 5,
        "question": 70,
        "type": "SAQ",
        "number": 3
      }
    },
    {
      "id": 4,
      "question": "一名 50 歲病人因處理 apixaban 引起的腦出血（cerebral hemorrhage），從一般內科病房轉入神經科 加護病房（intensive care unit, ICU）。下列哪一種藥物最適合作為有效的追蹤／觸發藥物（tracer medication）來協助偵測此藥物不良事件（adverse drug event, ADE）？",
      "options": [
        "A. Coagulation factor VIIa。",
        "B. Phytonadione。",
        "C. Protamine。",
        "D. Prothrombin complex concentrate。"
      ],
      "answer": "D",
      "explanation": "凝血酶原複合濃縮物（Prothrombin complex concentrate, PCC）常被開立用於逆轉 apixaban 相關的嚴重出血，因此是偵測與 apixaban 相關之 藥物不良事件（adverse drug event, ADE）的最佳追蹤／觸發藥物（tracer/trigger drug） （選項 D 正確）。 Coagulation factor VIIa 並非此適應症的有效標準治療（選項 A 錯誤）。 Phytonadione （vitamin K）是偵測 warfarin 引起之出血事件的適當追蹤藥物（選項 B 錯誤）。 Protamine 則是偵測 heparin 或 enoxaparin 引起之出血事件的適當追蹤藥物（選項 C 錯誤）。\n\n【教材出處】PDF 第 5 章，Q71。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 5,
        "question": 71,
        "type": "SAQ",
        "number": 4
      }
    },
    {
      "id": 5,
      "question": "【臨床案例】身為貴機構內科 加護病房（intensive care unit, ICU）的新任藥師，您受命改善 ICU 內的用藥安全。您已研讀了 2017 年美國重症醫學會（Society of Critical Care Medicine, SCCM）的《 ICU 安全用藥指引》 （Guidelines for Safe Medication Use in the ICU），並準備向跨領域重症照護委員會提出您的改善建議。\n\n根據該指引建議的證據分級系統，考量建議強度（strength of recommendation），下列何者是改善用藥安全最佳的初步建議？",
      "options": [
        "A. 完全整合機構的電子病歷（EHR）系統以改善溝通。",
        "B. 將中斷式臨床決策支持（interruptive clinical decision support, CDS）整合至 EHR 中。",
        "C. 制定一項要求靜脈注射藥品僅能由藥師／藥局調配（或採用標準化預混製劑）的政策（Creating a policy requiring that intravenous medications can only be prepared by pharmacists）。",
        "D. 投資智慧型靜脈輸液幫浦（smart intravenous infusion pumps）以減少用藥疏失。"
      ],
      "answer": "C",
      "explanation": "在題目所列的四個選項中， 2017 年 美國重症醫學會（Society of Critical Care Medicine, SCCM）指引針對藥品調劑階段（遵循安全藥物濃度實務，如採用預混製劑、機構內標準化藥物濃度並由藥局集中調配，而非在床邊自行泡製）給予了「強烈建議（strong recommendation, Grade 1B） 」（選項 C 正確）。其他選項如 CPOE/EHR 整合、 CDS 系統與智慧型輸液幫浦雖也是改善用藥安全的潛在機會，但在指引中僅屬於「弱建議／建議考慮（weak recommendations / suggestions, Grade 2B 或 2C） 」（選項 A、 B 與 D 錯誤）。\n\n【教材出處】PDF 第 5 章，Q72。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 5,
        "question": 72,
        "type": "SAQ",
        "number": 5
      }
    },
    {
      "id": 6,
      "question": "【臨床案例】身為貴機構內科 加護病房（intensive care unit, ICU）的新任藥師，您受命改善 ICU 內的用藥安全。您已研讀了 2017 年美國重症醫學會（Society of Critical Care Medicine, SCCM）的《 ICU 安全用藥指引》 （Guidelines for Safe Medication Use in the ICU），並準備向跨領域重症照護委員會提出您的改善建議。\n\n在貴機構將您的建議整合至常規醫療照護後，一位曾住院的病人建議應讓病人及其他照護者參與減少用藥疏失的過程。根據現有文獻，下列何者最能支持這項建議？",
      "options": [
        "A. 2017 年 美國重症醫學會（Society of Critical Care Medicine, SCCM）指引強烈建議將此做法整合至常規照護中。",
        "B. 醫院內 加護病房（intensive care unit, ICU）以外的其他區域提供了支持此項整合的數據。",
        "C. 針對醫療團隊與病人之間互動的直接觀察數據分析，已顯示能減少 加護病房（intensive care unit, ICU）中的醫療疏失。",
        "D. 針對 加護病房（intensive care unit, ICU）病人病歷審查的數據分析顯示，這些通報結果平時並未被常規納入考量。"
      ],
      "answer": "B",
      "explanation": "2017 年 美國重症醫學會（Society of Critical Care Medicine, SCCM）指引僅「建議考慮（suggest, Grade 2C） 」（而非強烈建議）在病人轉出 加護病房（intensive care unit, ICU）時或之後納入病人與家屬通報，以改善用藥疏失與 藥物不良事件（adverse drug event, ADE）的偵測（選項 A 錯誤）。目前關於病人／照護者參與通報之效益的實證數據主要來自非 ICU 的一般醫療環境（non-ICU environments），儘管選項 C 與 D 列出的理論效益可能存在，但尚無針對 ICU 的直接實證支持（選項 B 正確；選項 C 與 D 錯誤）。\n\n【教材出處】PDF 第 5 章，Q73。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 5,
        "question": 73,
        "type": "SAQ",
        "number": 6
      }
    },
    {
      "id": 7,
      "question": "一名 50 歲病人根據先前的培養數據，開始使用 meropenem 作為肺炎的經驗性治療。隨後他因躁動處置而開始使用 valproic acid；然而，該藥物未能有效控制症狀，導致病人自行拔管（self- extubation）並隨後重新插管。在調查此不良事件時，下列哪一種方法最能妥善評估其發生的可能性？",
      "options": [
        "A. 藥物交互作用資料庫（Drug interaction database）。",
        "B. 藥物交互作用可能性量表（Drug interaction probability scale, DIPS）。",
        "C. Naranjo 諾模圖／量表（Naranjo nomogram）。",
        "D. Roussel Uclaf 因果關係評估法（Roussel Uclaf Causality Assessment Method, RUCAM）。"
      ],
      "answer": "B",
      "explanation": "為了評估特定病人中 meropenem 與 valproic acid 之間發生藥物交互作用並導致不良結果（血中濃度下降導致治療失敗與自行拔管）的因果關係可能性，應使用「藥物交互作用可能性量表（Drug Interaction Probability Scale, DIPS） 」（選項 B 正確）。藥物交互作用資料庫僅提供一般性資訊，並非針對特定病人的因果評估（選項 A 錯誤）。 Naranjo 量表用於評估單一藥物引起 藥物不良反應（adverse drug reaction, ADR）/藥物不良事件（adverse drug event, ADE）的可能性，並非專為藥物交互作用設計（選項 C 錯誤）。 RUCAM 則是專門用於評估藥物誘發性肝損傷（drug-induced liver injury）的可能性（選項 D 錯誤）。\n\n【教材出處】PDF 第 5 章，Q74。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 5,
        "question": 74,
        "type": "SAQ",
        "number": 7
      }
    },
    {
      "id": 8,
      "question": "貴院希望將 meropenem/vaborbactam （一種針對高度抗藥性菌株的廣效性抗微生物藥物，獲 FDA 核准用於複雜性泌尿道感染 [cUTIs]）納入處方集。下列何者是對其使用最恰當的限制條件（restriction）？",
      "options": [
        "A. 限制僅供重症專科醫師（intensivists）使用。",
        "B. 限制僅用於患有院內感染型肺炎（hospital-acquired pneumonia）的病人。",
        "C. 限制需經感染症專科臨床醫師核准（Restriction to infectious diseases cliniciansʼ approval）。",
        "D. 限制僅用於具備適當心電圖監測的病人。"
      ],
      "answer": "C",
      "explanation": "針對多重抗藥性菌株的後線廣效性抗微生物藥物，應限制由具備該領域專業知識的感染症專科臨床醫師審核批准使用（選項 C 正確）。限制僅供重症專科醫師使用並不恰當，因為非 加護病房（intensive care unit, ICU）病人也可能需要此藥物（選項 A 錯誤）。儘管其最初僅獲 美國食品藥物管理局（Food and Drug Administration, FDA）核准用於複雜性泌尿道感染，但將其限制於肺炎既不符合核准適應症，也會過度限制其他多重抗藥性革蘭氏陰性菌感染的必要使用（選項 B 錯誤）。此藥物並不需要特殊的心臟監測（選項 D 錯誤）。\n\n【教材出處】PDF 第 5 章，Q75。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 5,
        "question": 75,
        "type": "SAQ",
        "number": 8
      }
    },
    {
      "id": 9,
      "question": "一名 30 歲病人在機動車車禍後入住外科 加護病房（intensive care unit, ICU）。從病人的角度來看，下列何者是「間接成本（indirect cost） 」的最佳範例？",
      "options": [
        "A. 身為工程師因無法工作而損失的薪資（Loss of wages from occupation as an engineer）。",
        "B. 車禍引起的創傷後壓力症候群（PTSD）影響。",
        "C. 用於處理疼痛所給予的 fentanyl。",
        "D. 將病人送往醫院的救護車費用。"
      ],
      "answer": "A",
      "explanation": "間接成本（indirect costs）是指因疾病或傷亡導致生產力改變、無法工作或失去就業能力所造成的經濟損失，例如身為工程師損失的薪資（選項 A 正確）。創傷後壓力症候群（PTSD）等非財務性的痛苦與影響屬於無形成本（intangible cost） （選項 B 錯誤）。 fentanyl 藥費與救護車運送費用則屬於直接醫療成本（direct costs） （選項 C 與 D 錯誤）。\n\n【教材出處】PDF 第 5 章，Q76。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 5,
        "question": 76,
        "type": "Case",
        "number": 1
      }
    },
    {
      "id": 10,
      "question": "一名病人發生 enalapril 引起的無症狀高血鉀症（K 5.7 mEq/L），心電圖（ECG）無異常變化，經給予單一劑量 sodium zirconium cyclosilicate 處理並加強實驗室監測。此藥物不良事件（adverse drug event, ADE）的嚴重度應歸類為何？",
      "options": [
        "A. 輕度（Mild）。",
        "B. 中度（Moderate）。",
        "C. 重度（Severe）。",
        "D. 危及生命（Life threatening）。"
      ],
      "answer": "A",
      "explanation": "輕度（Mild）藥物不良事件（adverse drug event, ADE）定義為導致需要提高病人監測頻率（伴隨或不伴隨生命徵象改變），但最終未造成病人傷害，或任何僅導致需要增加實驗室監測的不良事件。 enalapril 引起的無症狀高血鉀症經單劑口服降鉀劑處理，不需要積極侵入性介入或延長住院天數，亦未造成任何器官傷害，僅需增加實驗室監測，因此歸類為輕度（選項 A 正確；選項 B、 C 與 D 錯誤）。\n\n【教材出處】PDF 第 5 章，Q77。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 5,
        "question": 77,
        "type": "Case",
        "number": 2
      }
    },
    {
      "id": 11,
      "question": "一名住在老年精神科病房的病人，因靜脈注射 haloperidol 引發多形性心室頻脈（torsades de pointes），經靜脈注射 magnesium 成功治療，並轉入心臟加護病房（cardiac care unit）接受遙測心電圖（telemetry）加強監測。此藥物不良事件（adverse drug event, ADE）的嚴重度應歸類為何？",
      "options": [
        "A. 輕度（Mild）。",
        "B. 中度（Moderate）。",
        "C. 重度（Severe）。",
        "D. 無法分類（No classification）。"
      ],
      "answer": "C",
      "explanation": "重度（Severe）藥物不良事件（adverse drug event, ADE）定義為導致病人傷害、延長住院時間、轉入更高層級的照護單位（transfer to a higher level of care）、永久性器官損傷或死亡的事件。 haloperidol 引起的 torsades de pointes 是危及生命的心律不整，需要積極給予靜脈鎂離子治療，並導致病人必須轉入更高層級的心臟加護病房（CCU）照護，因此符合重度 ADE 的標準（選項 C 正確；選項 A、 B 與 D 錯誤）。\n\n【教材出處】PDF 第 5 章，Q78。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 5,
        "question": 78,
        "type": "Case",
        "number": 3
      }
    },
    {
      "id": 12,
      "question": "【臨床案例】M.S. 是一名居住在護理之家的 77 歲病人，過去 3 個月每天服用 lisinopril 10 mg。他因 lisinopril 引起的血管性水腫（angioedema）入住 加護病房（intensive care unit, ICU），就診時表現出嚴重的舌頭腫脹、喘鳴（stridor）與呼吸急促，需要緊急進行氣管切開術（tracheotomy）。他過去無任何過敏史，且未曾漏服任何一劑 lisinopril。\n\n下列何者最能準確描述此病人對 lisinopril 的反應？",
      "options": [
        "A. 藥物不良事件（adverse drug event, ADE）。",
        "B. 可預防的藥物不良事件（Preventable ADE）。",
        "C. 用藥疏失（Medication error）。",
        "D. 可預防的藥物不良反應（Preventable ADR）。"
      ],
      "answer": "A",
      "explanation": "由於此病人過去無血管張力素轉化酶抑制劑（ACEI）的過敏史，且按標準劑量正常服藥、未漏服藥物，因此發生 lisinopril 引起的血管性水腫並非可預防的疏失（選項 B 與 C 錯誤）。在專業術語中，並不存在「可預防的藥物不良反應（preventable ADR） 」一詞，因為 藥物不良反應（adverse drug reaction, ADR）的定義即是在正常劑量使用下發生的非預期有害反應，本質上即屬不可預防（選項 D 錯誤）。因此，此事件應歸類為非可預防的藥物不良事件（adverse drug event, ADE） （選項 A 正確）。\n\n【教材出處】PDF 第 5 章，Q79。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 5,
        "question": 79,
        "type": "Case",
        "number": 4
      }
    },
    {
      "id": 13,
      "question": "【臨床案例】M.S. 是一名居住在護理之家的 77 歲病人，過去 3 個月每天服用 lisinopril 10 mg。他因 lisinopril 引起的血管性水腫（angioedema）入住 加護病房（intensive care unit, ICU），就診時表現出嚴重的舌頭腫脹、喘鳴（stridor）與呼吸急促，需要緊急進行氣管切開術（tracheotomy）。他過去無任何過敏史，且未曾漏服任何一劑 lisinopril。\n\n下列何者最能準確分類此病人對 lisinopril 之 藥物不良事件（adverse drug event, ADE）的嚴重度？",
      "options": [
        "A. 輕度（Mild）。",
        "B. 中度（Moderate）。",
        "C. 重度（Severe）。",
        "D. 無法分類（No classification）。"
      ],
      "answer": "C",
      "explanation": "重度（Severe）藥物不良事件（adverse drug event, ADE）定義為導致病人傷害、住院或延長住院、轉入更高層級的照護單位、永久性器官損傷或死亡的事件。由於此病人發生危及生命的血管性水腫並需要執行氣管切開術（tracheotomy），導致病人傷害、住院並收治於更高層級的 加護病房（intensive care unit, ICU）照護，完全符合「重度（severe） 」 ADE 的標準（選項 C 正確；選項 A、 B 與 D 錯誤）。\n\n【教材出處】PDF 第 5 章，Q80。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 5,
        "question": 80,
        "type": "Case",
        "number": 5
      }
    },
    {
      "id": 14,
      "question": "【臨床案例】貴機構正在考慮將 angiotensin II （ATII）納入醫院處方集。 Angiotensin II 是一種非兒茶酚胺類升壓劑（non- catecholamine vasopressor），在 ATHOS-3 試驗發表後獲 美國食品藥物管理局（Food and Drug Administration, FDA）核准用於提升分佈性休克（distributive shock）病人的血壓。該試驗在病人已接受特定高劑量升壓劑後，比較靜脈輸注 ATII 與安慰劑，結果顯示接受 ATII 的病人比安慰劑組更常達到血行動力學目標，但在死亡率或安全性結果上並無差異。貴院目前的處方集包含兒茶酚胺類升壓劑與 vasopressin。貴機構特別關注的是 ATII 治療的高昂成本以及對處方集使用限制的遵循度。\n\n在為新增 ATII 撰寫藥物評估專論（drug evaluation monograph）時，納入下列哪一項建議最為適當？",
      "options": [
        "A. 將 vasopressin 從醫院處方集中移除，以為 ATII 騰出空間。",
        "B. 加入「 ATII 可降低分佈性休克病人死亡率」的聲明。",
        "C. 將 ATII 的靜脈注射與口服劑型一併納入處方集。",
        "D. 限制僅用於已接受與 ATHOS-3 試驗納入條件相同劑量之升壓劑的病人（Restrict use to patients who received the same dose of vasopressors as those included in the ATHOS-3 trial）。"
      ],
      "answer": "D",
      "explanation": "在撰寫處方集申請的藥物評估專論時，必須根據現有實證數據來制定合理的使用限制。根據案例資訊， ATHOS-3 試驗僅將 ATII 與安慰劑比較，並未證實可取代 vasopressin （選項 A 錯誤），亦未顯示出死亡率上的顯著差異（選項 B 錯誤），且 ATII 僅有靜脈注射劑型（選項 C 錯誤）。考量機構對成本的重視，參考 ATHOS-3 試驗的納入條件（即已使用高劑量傳統升壓劑仍無法達標者）來設定處方集使用限制最為恰當（選項 D 正確）。\n\n【教材出處】PDF 第 5 章，Q81。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 5,
        "question": 81,
        "type": "Case",
        "number": 6
      }
    },
    {
      "id": 15,
      "question": "【臨床案例】貴機構正在考慮將 angiotensin II （ATII）納入醫院處方集。 Angiotensin II 是一種非兒茶酚胺類升壓劑（non- catecholamine vasopressor），在 ATHOS-3 試驗發表後獲 美國食品藥物管理局（Food and Drug Administration, FDA）核准用於提升分佈性休克（distributive shock）病人的血壓。該試驗在病人已接受特定高劑量升壓劑後，比較靜脈輸注 ATII 與安慰劑，結果顯示接受 ATII 的病人比安慰劑組更常達到血行動力學目標，但在死亡率或安全性結果上並無差異。貴院目前的處方集包含兒茶酚胺類升壓劑與 vasopressin。貴機構特別關注的是 ATII 治療的高昂成本以及對處方集使用限制的遵循度。\n\n在考慮將 ATII 納入處方集時，考量貴機構的下列哪一項特徵最為重要？",
      "options": [
        "A. 來自 ATHOS-3 試驗顯示其臨床療效優於其他 美國食品藥物管理局（Food and Drug Administration, FDA）核准藥物的數據。",
        "B. 貴院遇到需要使用多種升壓劑來處置分佈性休克病人的頻率（How often you encounter patients who require several vasopressors for management of distributive shock）。",
        "C. 與使用 ATII 相關之 藥物不良事件（adverse drug events, ADEs）風險增加。",
        "D. 顯示 ATII 相較於其他 美國食品藥物管理局（Food and Drug Administration, FDA）核准藥物具成本節省效益的數據分析。"
      ],
      "answer": "B",
      "explanation": "在向 P&T 委員會提出處方集申請前，進行預算衝擊與機構需求評估至關重要。根據 ATHOS-3 試驗， ATII 並未與其他現有升壓藥物進行直接頭對頭比較（選項 A 錯誤），在 藥物不良事件（adverse drug events, ADEs）安全性結果上與安慰劑無顯著差異（選項 C 錯誤），且目前並無數據顯示高價的 ATII 具有成本節省效益（選項 D 錯誤）。因此，評估機構內實際上有多常遇到需要使用多種高劑量升壓劑的難治型分佈性休克病人，是最重要的初步考量（選項 B 正確）。\n\n【教材出處】PDF 第 5 章，Q82。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 5,
        "question": 82,
        "type": "Case",
        "number": 7
      }
    },
    {
      "id": 16,
      "question": "【臨床案例】貴機構正在考慮將 angiotensin II （ATII）納入醫院處方集。 Angiotensin II 是一種非兒茶酚胺類升壓劑（non- catecholamine vasopressor），在 ATHOS-3 試驗發表後獲 美國食品藥物管理局（Food and Drug Administration, FDA）核准用於提升分佈性休克（distributive shock）病人的血壓。該試驗在病人已接受特定高劑量升壓劑後，比較靜脈輸注 ATII 與安慰劑，結果顯示接受 ATII 的病人比安慰劑組更常達到血行動力學目標，但在死亡率或安全性結果上並無差異。貴院目前的處方集包含兒茶酚胺類升壓劑與 vasopressin。貴機構特別關注的是 ATII 治療的高昂成本以及對處方集使用限制的遵循度。\n\n在向 P&T 委員會報告後， Angiotensin II 於去年 12 月獲得貴機構核准納入處方集。下列哪一個月份最適合完成第一次的藥物使用評估（medication-use evaluation, MUE）？",
      "options": [
        "A. 今年 3 月（March of this year）。",
        "B. 今年 6 月（June of this year）。",
        "C. 今年 10 月（October of this year）。",
        "D. 今年 12 月（December of this year）。"
      ],
      "answer": "A",
      "explanation": "藥品獲准納入處方集後，建議應在 3–6 個月內進行第一次定期評估（medication-use evaluation, MUE），並在 1 年後再次評估。對於療效數據有限、擔心處方集限制遵循度不佳、高安全風險或成本極高的新穎藥品（如 ATII），應儘快在最短的 3 個月時（即去年 12 月核准後，於今年 3 月）完成第一次 藥物使用評估（medication-use evaluation, MUE） （選項 A 正確）。雖然 6 月也落在 3–6 個月的範圍內，但考量此藥物的高度新穎性、高昂成本與限制遵循度疑慮，應儘早於 3 個月時評估（選項 B 錯誤）。 10 月與 12 月則等待太久（選項 C 與 D 錯誤）。\n\n【教材出處】PDF 第 5 章，Q83。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 5,
        "question": 83,
        "type": "Case",
        "number": 8
      }
    }
  ],
  "5": [
    {
      "id": 1,
      "question": "下列何者是靜脈營養（parenteral nutrition, PN）最恰當的適應症？",
      "options": [
        "A. 嚴重厭食症（Severe anorexia）。",
        "B. 缺乏腸音（Lack of bowel sounds）。",
        "C. 麻痺性腸阻塞（Ileus）。",
        "D. 胃殘餘量（Gastric residual volume, GRV）為 300 mL。"
      ],
      "answer": "C",
      "explanation": "麻痺性腸阻塞（ileus）通常透過下腹部放射線檢查發現，顯示小腸缺乏蠕動且內部有擴張與積氣，在影像上常表現為「腸環擴張（dilated loops of bowel） 」。在發生 ileus 期間，無法安全或有效地經由腸道途徑餵食病人，因此是 靜脈營養（parenteral nutrition, PN）的適應症（選項 C 正確）。厭食症病人可置入灌食管進行腸道營養（enteral nutrition, EN），並非 PN 的適應症（選項 A 錯誤）。有無腸音並非評估腸道功能的準確指標（選項 B 錯誤）。腸道灌食期間若出現高胃殘餘量（GRV）伴隨腹脹、嘔吐或逆流，通常可透過促腸胃蠕動藥物（prokinetic pharmacotherapy）或將灌食管推進至小腸後恢復灌食來有效處理；此外，指引建議在沒有其他餵食不耐徵象的情況下， GRV 小於 500 mL 不應停止 腸道營養（enteral nutrition, EN） （選項 D 錯誤）。\n\n【教材出處】PDF 第 3 章，Q31。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 3,
        "question": 31,
        "type": "SAQ",
        "number": 1
      }
    },
    {
      "id": 2,
      "question": "下列哪一種輸液選項最接近鼻胃管（nasogastric, NG）引流液流失的電解質組成？",
      "options": [
        "A. 0.9% sodium chloride 加上 potassium chloride 20 mEq/L。",
        "B. 0.45% sodium chloride 加上 potassium chloride 20 mEq/L。",
        "C. 5% dextrose in 0.225% sodium chloride 加上 potassium chloride 20 mEq/L。",
        "D. Lactated Ringer solution。"
      ],
      "answer": "B",
      "explanation": "考量胃液（gastric fluid）的平均電解質組成（鈉約 60–90 mEq/L、鉀約 10–15 mEq/L、氯約 100–130 mEq/L）， 0.45% sodium chloride （含鈉 77 mEq/L、氯 77 mEq/L）加上 potassium chloride 20 mEq/L 最能準確補充鼻胃管引流所流失的電解質（選項 B 正確；選項 A、 C 與 D 錯誤）。\n\n【教材出處】PDF 第 3 章，Q32。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 3,
        "question": 32,
        "type": "SAQ",
        "number": 2
      }
    },
    {
      "id": 3,
      "question": "長期、難治性腹瀉（prolonged, intractable diarrhea）的病人，最可能過度流失下列哪一種微量元素（trace mineral）？",
      "options": [
        "A. 鋅（Zinc）。",
        "B. 銅（Copper）。",
        "C. 碘（Iodine）。",
        "D. 錳（Manganese）。"
      ],
      "answer": "A",
      "explanation": "在嚴重腹瀉的情況下，重症期間因胃腸道體液流失所需的靜脈鋅（zinc）需求量，會從正常需求的 3–5 mg/day 增加。數據分析顯示，大多數腸道流失增加的病人在每日給予 13 mg 靜脈鋅（正常 3 mg + 額外 10 mg）後可達到正鋅平衡。因此，多數臨床醫師會為短腸症候群、腸瘻管或長期持續腹瀉的病人提供額外的鋅補充（選項 A 正確）。銅（選項 B）在靜脈營養治療期間極少發生缺乏；碘（選項 C）與錳（選項 D）也較不可能因難治性腹瀉而導致缺乏。\n\n【教材出處】PDF 第 3 章，Q33。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 3,
        "question": 33,
        "type": "SAQ",
        "number": 3
      }
    },
    {
      "id": 4,
      "question": "一名因敗血症入住 加護病房（intensive care unit, ICU）的 70 歲男性，近期被診斷出抗利尿激素不適當分泌症候群（SIADH）。他的血清鈉在過去 3 天內從 130 mEq/L 降至 115 mEq/L，且病程隨後併發了癲癇發作（seizure）。下列何者為最恰當的治療選項？",
      "options": [
        "A. 靜脈輸注 0.9% sodium chloride。",
        "B. 靜脈注射 desmopressin acetate （DDAVP）。",
        "C. 靜脈輸注 3% sodium chloride。",
        "D. 靜脈注射 conivaptan。"
      ],
      "answer": "C",
      "explanation": "鑑於病人病情的嚴重度（因嚴重低血鈉引發近期癲癇發作）及極可能為 SIADH 的診斷，立即目標應為透過短期輸注高張 sodium chloride 溶液 3% sodium chloride，將血清鈉濃度提升至大於 120 mEq/L （或於第一小時提升 5 mEq/L 以緩解嚴重症狀）（選項 C 正確）。之後可考慮給予 conivaptan （選項 D）來矯正低血鈉，並將每日血鈉上升幅度限制在小於 10–12 mEq/L/day；水分限制則是此病人整體處置的首要技術。由於病人出現癲癇發作，急需更快速的反應，因此 0.9% sodium chloride 不適當（選項 A 錯誤）。給予 DDAVP 會提供更多類抗利尿激素物質，是用於治療尿崩症（與 SIADH 相反的疾病），在此情況下會造成危及生命的錯誤（選項 B 錯誤）。\n\n【教材出處】PDF 第 3 章，Q34。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 3,
        "question": 34,
        "type": "SAQ",
        "number": 4
      }
    },
    {
      "id": 5,
      "question": "除了吸收／輸注速率之外，下列何者最能解釋為何經腸道給予鉀離子（enteral potassium）比經靜脈給予鉀離子更為安全？",
      "options": [
        "A. 經腸道給藥的鉀離子生體可用率（bioavailability）顯著低於靜脈給藥。",
        "B. 腸繫膜鉀離子濃度變化的前饋感測（feed-forward sensing）會增加尿鉀排泄。",
        "C. potassium chloride 酏劑（elixir）容易引起腹瀉並減少鉀離子吸收。",
        "D. 蠟質基質錠劑（wax matrix tablets）會在整個胃腸道中隔離並扣留鉀離子的釋放。"
      ],
      "answer": "B",
      "explanation": "研究顯示，內臟血管床中的鉀離子感測器偵測到腸繫膜鉀離子濃度升高時，會在醛固酮（aldosterone）進行典型負回饋調節之前，即引發腎臟排鉀增加（鉀離子恆定的前饋調節 [feed-forward regulation]）（選項 B 正確）。在胃腸道蠕動、功能或解剖結構無異常的情況下，腸道鉀離子的生體可用率高達 95%–100%，兩者的主要差異在於腸道吸收速率較慢（選項 A 錯誤）。 potassium chloride 酏劑或口服液經胃內給予時是有效的補鉀方式，通常僅在給予高劑量或經空腸造口直接注入小腸時（因其高滲透壓）才會引起腹瀉（選項 C 錯誤）。選項 D 為無意義的錯誤敘述。\n\n【教材出處】PDF 第 3 章，Q35。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 3,
        "question": 35,
        "type": "SAQ",
        "number": 5
      }
    },
    {
      "id": 6,
      "question": "一名 40 歲男性（體重 60 kg）在機動車車禍後入住外傷加護病房（trauma ICU）。檢查發現其血清鎂濃度為 1.2 mg/dL，且家屬表示他有酗酒病史（每日 12–18 瓶啤酒）。主治團隊給予他 magnesium sulfate 6 g 靜脈輸注 6 小時。隔日複查其血清鎂濃度為 1.8 mg/dL。對此病人而言，下列哪一項治療最為適當？",
      "options": [
        "A. 由於其血清鎂濃度已正常，無需進一步治療。",
        "B. 若再次複查血清鎂濃度為 2 mg/dL 或更高，則無需額外補充鎂離子。",
        "C. 應在給予鎂離子治療的同時，併用補充鈣離子治療。",
        "D. 在接下來的 4–5 天內，應每日繼續給予額外的鎂離子治療。"
      ],
      "answer": "D",
      "explanation": "短期輸注鎂離子後，需要約 48 小時才能在身體組織間完全達到平衡分佈（equilibrate），因此隔日的血清鎂濃度會呈假性升高。一般而言，需要連續 4–5 天的靜脈治療才能補足此病人的體內鎂離子存量缺乏（選項 D 正確，選項 A 錯誤）。雖然選項 B 在臨床實務中很常見，但在大劑量靜脈輸注隔日看到血鎂正常就停止補充，通常會導致接下來 1–2 天隨著鎂離子重新分佈至細胞內，血清濃度再次跌破正常範圍，因此並非理想處置（選項 B 錯誤）。低血鈣症通常會在補充鎂離子後 48 小時內自動矯正，除非有症狀或游離鈣小於 1 mmol/L，否則無需常規併用鈣離子（選項 C 錯誤）。\n\n【教材出處】PDF 第 3 章，Q36。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 3,
        "question": 36,
        "type": "SAQ",
        "number": 6
      }
    },
    {
      "id": 7,
      "question": "一名有高血壓與胰臟炎病史的 45 歲男性（體重 78 kg），在接受壞死性胰臟炎（necrotizing pancreatitis）手術處置後入住 加護病房（intensive care unit, ICU）。他每日接受包含 dextrose 650 g、 amino acids 120 g 與脂肪乳劑（ILE） 55 g 的靜脈營養（parenteral nutrition, PN）。過去 24 小時的血糖（BG）測量值介於 180–325 mg/dL。此時對此病人的營養處方進行下列哪一項調整最為適當？",
      "options": [
        "A. 開始每 4 小時使用 insulin aspart 的移動規模 insulin 處方（sliding-scale insulin regimen）。",
        "B. 暫時將 靜脈營養（parenteral nutrition, PN）中的 dextrose 劑量降至 200 g，待血糖小於 180 mg/dL 後再調升回 650 g。",
        "C. 將 dextrose 降至 500 g，並透過將蛋白質增加至 160 g 來補足剩餘的熱量。",
        "D. 將 dextrose 降至 315 g，並在接下來的 24 小時內重新評估血糖控制情形。"
      ],
      "answer": "D",
      "explanation": "目前開立的 靜脈營養（parenteral nutrition, PN）配方每日提供高達 3240 kcal （42 kcal/kg/day，葡萄糖輸注速率 [GIR] 高達 5.8 mg/kg/min： 650×3.4 + 120×4 + 55×10 = 2210 + 480 + 550 = 3240 kcal），這對此病人而言熱量嚴重過高，且他已出現高血糖等過度餵食（overfeeding）的徵象。將 dextrose 劑量降至 315 g 可適當地將總熱量調降至 2101 kcal/day （27 kcal/kg/day， GIR 為 2.8 mg/kg/min），符合 25–30 kcal/kg/day 的初始熱量目標，且藉由大幅減少葡萄糖與總熱量負荷，其高血糖應能獲得改善（選項 D 正確）。單純加上 insulin 無法解決過度餵食的根本問題，且單用 sliding-scale insulin 不太可能提供足夠的血糖控制（選項 A 錯誤）。暫時調降後又調升回 650 g 並未解決長期過度餵食的問題（選項 B 錯誤）。選項 C 調整後的總熱量仍高達 37 kcal/kg/day，超過建議的初始目標範圍（選項 C 錯誤）。\n\n【教材出處】PDF 第 3 章，Q37。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 3,
        "question": 37,
        "type": "SAQ",
        "number": 7
      }
    },
    {
      "id": 8,
      "question": "一名 48 歲男性在機車車禍後入住外傷 加護病房（intensive care unit, ICU）。其損傷包括蜘蛛膜下腔出血、右側氣胸、多處肋骨骨折、第 5 級肝撕裂傷、右側薦骨骨折及橫突骨折。病程併發呼吸衰竭、急性腎損傷（acute kidney injury, AKI）與高血糖。今日實驗室數值顯示：血清鈉 141 mEq/L、氯 102 mEq/L、二氧化碳（CO₂） 20 mEq/L、乳酸 2.6 mmol/L。動脈血液氣體分析（arterial blood gas, ABG）數值為： pH 7.46、 Pco₂ 31 mmHg、 HCO₃ 22 mEq/L。下列關於其酸鹼狀態的評估何者正確？",
      "options": [
        "A. 僅有原發性呼吸性鹼中毒（Primary respiratory alkalosis only）。",
        "B. 原發性呼吸性鹼中毒伴隨潛在的代謝性酸中毒（Primary respiratory alkalosis with underlying metabolic acidosis）。",
        "C. 原發性代謝性鹼中毒伴隨潛在的呼吸性鹼中毒（Primary metabolic alkalosis with underlying respiratory alkalosis）。",
        "D. 僅有原發性代謝性酸中毒（Primary metabolic acidosis only）。"
      ],
      "answer": "B",
      "explanation": "此病人的 pH 值偏高（7.46），因此其原發性異常為鹼中毒（選項 D 錯誤）。其血清 HCO₃ 為 20 mEq/L （偏低）且 Pco₂ 為 31 mmHg （偏低）。高 pH 值搭配低 Pco₂ 顯示其原發性異常為呼吸性鹼中毒（primary respiratory alkalosis） （選項 C 錯誤）。然而，計算其陰離子間隙（anion gap, AG）為 19 （141 − 102 − 20 = 19），顯示無論 pH 或 HCO₃ 數值為何，體內同時存在高陰離子間隙代謝性酸中毒（選項 A 錯誤）。其差距比值（delta ratio）為 1.25 （[19 − 14] / [24 − 20] = 5 / 4 = 1.25，介於 1–2 之間），顯示除了高陰離子間隙代謝性酸中毒外，無其他隱藏的代謝過程（選項 B 正確）。\n\n【教材出處】PDF 第 3 章，Q38。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 3,
        "question": 38,
        "type": "SAQ",
        "number": 8
      }
    },
    {
      "id": 9,
      "question": "【臨床案例】一名因肺炎與呼吸衰竭入住 加護病房（intensive care unit, ICU）的 55 歲女性（體重 70 kg），在住院第 5 天出現血清鈉 125 mEq/L。其他實驗室數值包括：血清鉀 4.6 mEq/L、氯（Cl） 100 mEq/L、總二氧化碳（CO₂） 24 mEq/L、 血中尿素氮（blood urea nitrogen, BUN） 20 mg/dL、血清肌酸酐（serum creatinine, SCr） 1.1 mg/dL、血糖 167 mg/dL。她目前以 60 mL/hour 接受 1 kcal/mL、蛋白質 62 g/L 的腸道灌食配方，並以 25 mL/hour 輸注 5% dextrose in 0.45% sodium chloride。過去 3 天她的液體平衡介於 +300 至 +600 mL/day，無明顯水腫證據。實測血清滲透壓為 265 mOsm/kg，尿液滲透壓為 490 mOsm/kg，尿鈉為 67 mEq/L。\n\n此病人發生低血鈉症最可能的病因為何？",
      "options": [
        "A. 假性低血鈉症（Factitious hyponatremia）。",
        "B. 腎上腺功能不全（Adrenal insufficiency）。",
        "C. 腦鹽耗損症候群（Cerebral salt wasting）。",
        "D. 抗利尿激素不適當分泌症候群（SIAD）。"
      ],
      "answer": "D",
      "explanation": "已排除高血糖與其他非低張性低血鈉的原因。尿液滲透壓大於 100 mOsm/kg （490 mOsm/kg），排除了心因性多渴症（psychogenic polydipsia），且並未給予大量低張輸液。尿鈉大於 30 mEq/L （67 mEq/L），且病人未接受利尿劑治療、亦無腎臟疾病。病人外觀呈現正常體液容積（normovolemic），無顯著水腫（細胞外液擴張）的證據。加上病人患有肺炎（SIADH 的常見原因），所有因素皆指出其低血鈉是由 SIADH 所引起（選項 D 正確）。血糖濃度不足以引起假性低血鈉，且未使用 mannitol、 glycine 或有高三酸甘油酯血症（選項 A 錯誤）。案例中無腎上腺功能不全的證據（選項 B 錯誤），且病人並無創傷性腦損傷，不可能為腦鹽耗損症候群（選項 C 錯誤）。\n\n【教材出處】PDF 第 3 章，Q39。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 3,
        "question": 39,
        "type": "Case",
        "number": 1
      }
    },
    {
      "id": 10,
      "question": "【臨床案例】一名因肺炎與呼吸衰竭入住 加護病房（intensive care unit, ICU）的 55 歲女性（體重 70 kg），在住院第 5 天出現血清鈉 125 mEq/L。其他實驗室數值包括：血清鉀 4.6 mEq/L、氯（Cl） 100 mEq/L、總二氧化碳（CO₂） 24 mEq/L、 血中尿素氮（blood urea nitrogen, BUN） 20 mg/dL、血清肌酸酐（serum creatinine, SCr） 1.1 mg/dL、血糖 167 mg/dL。她目前以 60 mL/hour 接受 1 kcal/mL、蛋白質 62 g/L 的腸道灌食配方，並以 25 mL/hour 輸注 5% dextrose in 0.45% sodium chloride。過去 3 天她的液體平衡介於 +300 至 +600 mL/day，無明顯水腫證據。實測血清滲透壓為 265 mOsm/kg，尿液滲透壓為 490 mOsm/kg，尿鈉為 67 mEq/L。\n\n對此名女性而言，下列何者為最恰當的治療？",
      "options": [
        "A. 給予口服 sodium chloride 錠劑（sodium chloride tablets） 1 g 每日三次。",
        "B. 限制水分攝取（Limit fluids）。",
        "C. 將靜脈輸液改為 0.9% sodium chloride。",
        "D. 提供短期靜脈輸注 3% sodium chloride。"
      ],
      "answer": "B",
      "explanation": "水分限制（fluid restriction）是治療無嚴重症狀之 SIADH 最恰當的第一線處置（選項 B 正確）。 Vaptans 類藥物雖可納入考慮，但不在選項中。單純給予鹽錠或改為 0.9% sodium chloride 可能會導致體液過負荷與水腫惡化（選項 A 與 C 錯誤）。由於其低血鈉程度與缺乏嚴重神經學症狀（如昏迷、抽搐），不需緊急使用 3% 高張 sodium chloride 溶液（選項 D 錯誤）。\n\n【教材出處】PDF 第 3 章，Q40。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 3,
        "question": 40,
        "type": "Case",
        "number": 2
      }
    },
    {
      "id": 11,
      "question": "【臨床案例】一名因肺炎與呼吸衰竭入住 加護病房（intensive care unit, ICU）的 55 歲女性（體重 70 kg），在住院第 5 天出現血清鈉 125 mEq/L。其他實驗室數值包括：血清鉀 4.6 mEq/L、氯（Cl） 100 mEq/L、總二氧化碳（CO₂） 24 mEq/L、 血中尿素氮（blood urea nitrogen, BUN） 20 mg/dL、血清肌酸酐（serum creatinine, SCr） 1.1 mg/dL、血糖 167 mg/dL。她目前以 60 mL/hour 接受 1 kcal/mL、蛋白質 62 g/L 的腸道灌食配方，並以 25 mL/hour 輸注 5% dextrose in 0.45% sodium chloride。過去 3 天她的液體平衡介於 +300 至 +600 mL/day，無明顯水腫證據。實測血清滲透壓為 265 mOsm/kg，尿液滲透壓為 490 mOsm/kg，尿鈉為 67 mEq/L。\n\n對此病人而言，腸道灌食配方進行下列哪一項調整最佳？",
      "options": [
        "A. 在目前的配方中加入 sodium chloride 100 mEq/L。",
        "B. 將配方改為富含魚油（fish oil–enriched）的產品。",
        "C. 將配方改為低碳水化合物、高脂肪產品。",
        "D. 將配方改為 2 kcal/mL 的濃縮配方，並調降灌食速率。"
      ],
      "answer": "D",
      "explanation": "對接受腸道灌食的病人進行水分限制的最佳方式，是改用最高濃度的配方，即專為鬱血性心臟衰竭等限水病人設計的 2 kcal/mL 配方，並相應調降灌食速率（選項 D 正確）。需要注意的是，在某些族群中使用這類濃縮配方可能會導致蛋白質攝取不足，屆時可能需額外補充蛋白質模組。選項 A、 B 與 C 皆無法達到減少水分攝取的治療目標，故不正確。\n\n【教材出處】PDF 第 3 章，Q41。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 3,
        "question": 41,
        "type": "Case",
        "number": 3
      }
    },
    {
      "id": 12,
      "question": "【臨床案例】一名 65 歲男性（體重 87 kg）因嚴重急性胰臟炎住院。腹部電腦斷層（CT）顯示有胰臟假性囊腫（pancreatic pseudocyst）。由於他在進食低脂飲食及嘗試腸道營養（enteral nutrition, EN）期間皆出現明顯腹痛，因此維持禁食（NPO）並給予靜脈營養（parenteral nutrition, PN）。他每日抽 2 包菸，且有頻繁飲酒史。血清實驗室數值如下：鈉（Na） 139 mEq/L、鉀（K） 3.3 mEq/L、氯（Cl） 102 mEq/L、總二氧化碳（CO₂） 25 mEq/L、 血中尿素氮（blood urea nitrogen, BUN） 14 mg/dL、 血清肌酸酐（serum creatinine, SCr） 0.8 mg/dL、鈣 7.6 mg/dL、磷 2.2 mg/dL、鎂 1.5 mg/dL，以及白蛋白 2.5 g/dL。\n\n對此病人而言，下列哪一項鉀與磷的補充處方最為適當？",
      "options": [
        "A. potassium phosphate 30 mmol 靜脈注射 × 1 劑，接著給予 potassium chloride 40 mEq 經鼻胃管（NG tube） × 2 劑。",
        "B. potassium phosphate 30 mmol 靜脈注射 × 1 劑，接著給予 potassium chloride 40 mEq 靜脈注射 × 1 劑。",
        "C. potassium phosphate 60 mmol 靜脈注射 × 1 劑。",
        "D. potassium chloride 40 mEq 經鼻胃管 × 2 劑，接著給予 Neutra-Phos 250 mg 經鼻胃管 × 2 劑。"
      ],
      "answer": "B",
      "explanation": "根據本章的補充指引（血鉀 3.0–3.4 mEq/L 建議補充約 80 mEq 的鉀；一般內外科族群血磷 1.6–2.2 mg/dL 建議補充 0.32 mmol/kg 的磷， 87 kg × 0.32 ≈ 28 mmol，取整數為 30 mmol），給予 potassium phosphate 30 mmol 靜脈給藥（intravenous, IV） （約含 44 mEq 的鉀）加上 potassium chloride 40 mEq 靜脈給藥（intravenous, IV） （總共約 84 mEq 的鉀與 30 mmol 的磷）最符合指引建議（選項 B 正確）。由於病人因嚴重腹痛而禁食（NPO）且無法耐受經口／腸道給予任何物質，經鼻胃管給藥的選項不切實際（選項 A 與 D 錯誤）。一次給予 60 mmol 的磷劑量過高（選項 C 錯誤）。\n\n【教材出處】PDF 第 3 章，Q42。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 3,
        "question": 42,
        "type": "Case",
        "number": 4
      }
    },
    {
      "id": 13,
      "question": "【臨床案例】一名 65 歲男性（體重 87 kg）因嚴重急性胰臟炎住院。腹部電腦斷層（CT）顯示有胰臟假性囊腫（pancreatic pseudocyst）。由於他在進食低脂飲食及嘗試腸道營養（enteral nutrition, EN）期間皆出現明顯腹痛，因此維持禁食（NPO）並給予靜脈營養（parenteral nutrition, PN）。他每日抽 2 包菸，且有頻繁飲酒史。血清實驗室數值如下：鈉（Na） 139 mEq/L、鉀（K） 3.3 mEq/L、氯（Cl） 102 mEq/L、總二氧化碳（CO₂） 25 mEq/L、 血中尿素氮（blood urea nitrogen, BUN） 14 mg/dL、 血清肌酸酐（serum creatinine, SCr） 0.8 mg/dL、鈣 7.6 mg/dL、磷 2.2 mg/dL、鎂 1.5 mg/dL，以及白蛋白 2.5 g/dL。\n\n除了補充鉀與磷之外，病人也接受了 magnesium sulfate 6 g 靜脈輸注 6 小時。隔日複查其血清鎂為 2.0 mg/dL。對此病人而言，下列哪一項治療選項最佳？",
      "options": [
        "A. 在接下來幾天給予口服 magnesium oxide 500 mg 每日兩次。",
        "B. 在接下來幾天每日給予靜脈輸注 magnesium sulfate 2–4 g。",
        "C. 額外再給予一劑靜脈輸注 magnesium sulfate 8 g。",
        "D. 無需額外治療。"
      ],
      "answer": "B",
      "explanation": "由於血清鎂需要約 48 小時才能完全重新分佈至身體組織，隔日測得的血清鎂濃度（2.0 mg/dL）屬於假性升高。一般而言，需要連續 4–5 天才能完全補足此病人（推測因長期飲酒與急性胰臟炎所致）的鎂離子缺乏，因此在接下來幾天每日給予靜脈輸注 magnesium sulfate 2–4 g 是最佳選擇（選項 B 正確，選項 D 錯誤）。由於病人處於 NPO 狀態，口服選項不理想（選項 A 錯誤）。考量目前血鎂為 2.0 mg/dL （儘管為假性升高），再單次給予 8 g 的劑量過於激進（選項 C 錯誤）。\n\n【教材出處】PDF 第 3 章，Q43。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 3,
        "question": 43,
        "type": "Case",
        "number": 5
      }
    },
    {
      "id": 14,
      "question": "【臨床案例】一名 24 歲男性（體重 90 kg）因腹部多處槍傷，在接受十二指腸、空腸、迴腸與結腸損傷修補術、肝臟縫合術（hepatorrhaphy）及脾臟切除術（splenectomy）後入住外傷 加護病房（intensive care unit, ICU）。他在術中也接受了 10 單位的濃縮紅血球（packed red blood cells）輸血。目前其血清游離鈣（ionized calcium）濃度為 0.86 mmol/L、鉀 4.6 mEq/L、鎂 1.8 mg/dL。 血清肌酸酐（serum creatinine, SCr）為 0.8 mg/dL，尿量為 0.5 mL/kg/hour。\n\n造成此病人低血鈣症最可能的病因為何？",
      "options": [
        "A. 低血鎂症（Hypomagnesemia）。",
        "B. 過度利尿（Excessive urinary diuresis）。",
        "C. 輸血（Blood transfusion）。",
        "D. 重症疾病（Critical illness）。"
      ],
      "answer": "C",
      "explanation": "儘管重症疾病（選項 D）與輸液復甦可能促成低血鈣的發生，但大量輸血（massive blood transfusion）是最主要的原因。血液製品中添加作為抗凝血劑的檸檬酸鹽（citrate）極易與鈣離子結合，進而導致低血鈣症。先前研究顯示，當病人一次接受超過 5 單位的輸血時，低血鈣症非常常見（選項 C 正確）。 1.8 mg/dL 的正常偏低血鎂濃度不太可能導致低血鈣，通常血鎂 ≤ 1.5 mg/dL 才會促成低血鈣的發生（選項 A 錯誤）。 0.5 mL/kg/hr 的尿量屬於正常範圍，並非過度利尿（選項 B 錯誤）。\n\n【教材出處】PDF 第 3 章，Q44。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 3,
        "question": 44,
        "type": "Case",
        "number": 6
      }
    },
    {
      "id": 15,
      "question": "【臨床案例】一名 24 歲男性（體重 90 kg）因腹部多處槍傷，在接受十二指腸、空腸、迴腸與結腸損傷修補術、肝臟縫合術（hepatorrhaphy）及脾臟切除術（splenectomy）後入住外傷 加護病房（intensive care unit, ICU）。他在術中也接受了 10 單位的濃縮紅血球（packed red blood cells）輸血。目前其血清游離鈣（ionized calcium）濃度為 0.86 mmol/L、鉀 4.6 mEq/L、鎂 1.8 mg/dL。 血清肌酸酐（serum creatinine, SCr）為 0.8 mg/dL，尿量為 0.5 mL/kg/hour。\n\n對此病人而言，下列哪一項治療處方最佳？",
      "options": [
        "A. calcium gluconate 2 g 靜脈輸注 2 小時。",
        "B. calcium gluconate 4 g 靜脈輸注 4 小時。",
        "C. calcium chloride 1 g 靜脈推注 5–10 分鐘。",
        "D. 無需鈣離子治療。"
      ],
      "answer": "B",
      "explanation": "根據經驗性補鈣流程，對於中度至重度低血鈣症（游離鈣 ≤ 0.99 mmol/L，本案為 0.86 mmol/L），短期靜脈輸注 4 g 的 calcium gluconate （1 g = 4.6 mEq）持續 4 小時已被證實為安全且有效的治療處方（選項 B 正確）。 2 g 的劑量對於游離鈣 ≤ 0.99 mmol/L 而言元素鈣劑量不足（2 g 適用於游離鈣 1.0–1.12 mmol/L）（選項 A 錯誤）。靜脈推注 calcium chloride 1 g （= 13.6 mEq）適用於治療有症狀的嚴重高血鉀症或急救情況，在此情境下過於激進（選項 C 錯誤）。此名術後外傷病人有貧血且具高出血風險，其中度至重度低血鈣必須予以矯正（選項 D 錯誤）。\n\n【教材出處】PDF 第 3 章，Q45。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 3,
        "question": 45,
        "type": "Case",
        "number": 7
      }
    },
    {
      "id": 16,
      "question": "【臨床案例】一名 60 歲女性（體重 80 kg）在經歷 1 週的嚴重腹瀉後住院。她就診時有脫水的臨床證據（低血壓、心搏過速、尿量減少）且全身虛弱。血清實驗室數值如下： Na 145 mEq/L、 K 3.0 mEq/L、 Cl 118 mEq/L、總 CO₂ 18 mEq/L、 血中尿素氮（blood urea nitrogen, BUN） 29 mg/dL、 血清肌酸酐（serum creatinine, SCr） 0.9 mg/dL、血糖 122 mg/dL、鈣 9.1 mg/dL、磷 3.7 mg/dL、鎂 1.4 mg/dL、白蛋白 3.9 g/dL、乳酸 1.6 mmol/L。 動脈血液氣體分析（arterial blood gas, ABG）顯示： pH 7.29、 Po₂ 93 mm Hg、 Pco₂ 34 mm Hg、 HCO₃ 17 mEq/L，鹼超量（base excess）為 -5 mEq/L。她有 30 包 - 年（pack/year）的抽菸史。\n\n下列何者最能準確描述此病人的酸鹼異常類型？",
      "options": [
        "A. 高氯血性、正常陰離子間隙酸中毒（Hyperchloremic, normal AG acidosis）。",
        "B. 陰離子間隙酸中毒（AG acidosis）。",
        "C. 陰離子間隙酸中毒伴隨高氯血症（AG acidosis with hyperchloremia）。",
        "D. 呼吸性鹼中毒伴隨同時存在的代謝性鹼中毒（Respiratory alkalosis with concurrent metabolic alkalosis）。"
      ],
      "answer": "A",
      "explanation": "檢視 pH 值（7.29 < 7.35）可知病人有酸血症（acidemia）。觀察 Pco₂ 與血清重碳酸根（HCO₃）皆偏低，顯示原發性病因為代謝性酸中毒。計算陰離子間隙 AG = 145 − 118 − 18 = 9，顯示並無高陰離子間隙（選項 B 與 C 錯誤）。由於白蛋白正常，無需校正 AG；血清乳酸雖接近正常上限但仍在正常範圍內。呼吸代償功能完整（預期 Pco₂ = [1.5 × 17] + 8 = 33.5 vs. 實測 34 mm Hg）。血清氯高達 118 mEq/L 顯示有高氯血症。非陰離子間隙（正常 AG）、高氯血性代謝性酸中毒常見於嚴重腹瀉病人（選項 A 正確）。偏低的 Pco₂ 是針對代謝性酸中毒的代償反應，而非呼吸性鹼中毒合併代謝性鹼中毒（選項 D 錯誤）。\n\n【教材出處】PDF 第 3 章，Q46。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 3,
        "question": 46,
        "type": "Case",
        "number": 8
      }
    },
    {
      "id": 17,
      "question": "【臨床案例】一名 60 歲女性（體重 80 kg）在經歷 1 週的嚴重腹瀉後住院。她就診時有脫水的臨床證據（低血壓、心搏過速、尿量減少）且全身虛弱。血清實驗室數值如下： Na 145 mEq/L、 K 3.0 mEq/L、 Cl 118 mEq/L、總 CO₂ 18 mEq/L、 血中尿素氮（blood urea nitrogen, BUN） 29 mg/dL、 血清肌酸酐（serum creatinine, SCr） 0.9 mg/dL、血糖 122 mg/dL、鈣 9.1 mg/dL、磷 3.7 mg/dL、鎂 1.4 mg/dL、白蛋白 3.9 g/dL、乳酸 1.6 mmol/L。 動脈血液氣體分析（arterial blood gas, ABG）顯示： pH 7.29、 Po₂ 93 mm Hg、 Pco₂ 34 mm Hg、 HCO₃ 17 mEq/L，鹼超量（base excess）為 -5 mEq/L。她有 30 包 - 年（pack/year）的抽菸史。\n\n對此病人而言，下列何者為最恰當的初始輸液治療（initial fluid therapy）？",
      "options": [
        "A. 0.45% sodium chloride 加上 potassium chloride 20 mEq/L。",
        "B. 0.9% sodium chloride 加上 potassium chloride 20 mEq/L。",
        "C. Lactated Ringer solution。",
        "D. 5% dextrose。"
      ],
      "answer": "C",
      "explanation": "初始治療選擇 lactated Ringer solution 最為理想（選項 C 正確）。使用 0.9% sodium chloride （選項 B）會惡化其高氯血性酸中毒。 5% dextrose （選項 D）不含鈉離子且非等張溶液，無法有效恢復血管內容積。由於病人的酸血症程度輕微（pH 7.29），不需積極使用 sodium bicarbonate。在第一天使用 lactated Ringer solution 恢復血管內容積並改善 pH 值後，可視反應改為 0.45% sodium chloride 加上 potassium chloride 20 mEq/L 以繼續補充水分與電解質，但題目詢問的是最恰當的「初始」治療，故選項 A 不正確。\n\n【教材出處】PDF 第 3 章，Q47。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 3,
        "question": 47,
        "type": "Case",
        "number": 9
      }
    },
    {
      "id": 18,
      "question": "一名入住外傷 加護病房（intensive care unit, ICU）的 40 kg 女性，每日接受含有 dextrose 350 g、 amino acids 160 g 與脂肪乳劑（lipid） 60 g 的 靜脈營養（parenteral nutrition, PN）溶液。她的腎功能與肝功能正常。今日早晨最新的 動脈血液氣體分析（arterial blood gas, ABG）顯示： pH 7.30、 Pco₂ 55 mm Hg、 Po₂ 96 mm Hg、 HCO₃ 31 mEq/L。過去 24 小時的指尖血糖值為 180–200 mg/dL。關於她的 PN，下列哪一項建議最佳？",
      "options": [
        "A. 將 dextrose 降至 175 g/day，並將 lipid 增加至 120 g/day。",
        "B. 在 靜脈營養（parenteral nutrition, PN）溶液中加入 regular human insulin 20 units/day。",
        "C. 將所有巨量營養素（macronutrients）調降約一半。",
        "D. 增加 靜脈營養（parenteral nutrition, PN）溶液中的醋酸鹽（acetate）含量。"
      ],
      "answer": "C",
      "explanation": "目前的 靜脈營養（parenteral nutrition, PN）處方每日提供高達 61 kcal/kg/day 的總熱量（350×3.4 + 160×4 + 60×10 = 1190 + 640 + 600 = 2430 kcal； 2430 / 40 kg = 60.75 kcal/kg/day；葡萄糖輸注速率 6.1 mg/kg/min、脂肪乳劑 1.5 g/kg/day）以及 4 g/kg/day 的蛋白質。這對這名體型嬌小的女性而言屬於嚴重的過度餵食（gross overfeeding），並解釋了她的高血糖與高碳酸血症（呼吸性酸中毒， pH 7.30、 Pco₂ 55 mm Hg）。將所有巨量營養素減半可提供更合理的處方：約 30 kcal/kg/day （葡萄糖 3 mg/kg/min、脂肪乳劑 0.8 g/kg/day）與蛋白質 2 g/kg/day （選項 C 正確）。選項 A 雖降低了呼吸商，但未解決總熱量過高的根本問題；選項 B 與 D 僅處理過度餵食的後果，卻未解決過度餵食本身，屬於不恰當的處置。\n\n【教材出處】PDF 第 3 章，Q48。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 3,
        "question": 48,
        "type": "Case",
        "number": 10
      }
    },
    {
      "id": 19,
      "question": "【臨床案例】一名 60 歲男性（體重 65 kg；約為理想體重 [IBW] 的 90%）因急性胰臟炎住院。 4 天後，他仍有明顯腹痛與腹脹且未緩解。他出現發燒，並已採集血液與尿液培養。腹部 CT 顯示有麻痺性腸阻塞（ileus）與腹腔內膿瘍（intra-abdominal abscess）。他接受每日包含 dextrose 300 g、 amino acids 70 g 與 20% 脂肪乳劑（lipids） 40 g 的目標 靜脈營養（parenteral nutrition, PN）處方。\n\n下列何者最能準確描述此處方所提供的熱量與蛋白質？",
      "options": [
        "A. 26 kcal/kg/day 與 1.1 g/kg/day。",
        "B. 26 kcal/kg/day 與 1.5 g/kg/day。",
        "C. 28 kcal/kg/day 與 1.5 g/kg/day。",
        "D. 30 kcal/kg/day 與 1.5 g/kg/day。"
      ],
      "answer": "A",
      "explanation": "每日總熱量 = （300 g × 3.4 kcal/g 葡萄糖） + （70 g × 4 kcal/g 蛋白質） + （40 g × 10 kcal/g 脂肪乳劑） = 1020 + 280 + 400 = 1700 kcal/day。除以體重 65 kg = 26.15 ≈ 26 kcal/kg/day （註：靜脈脂肪乳劑因含有甘油與磷脂質，每克提供約 10 kcal，而非口服脂肪的 9 kcal/g）。蛋白質攝取量為 70 g / 65 kg = 1.07 ≈ 1.1 g/kg/day （選項 A 正確；選項 B、 C 與 D 計算錯誤）。\n\n【教材出處】PDF 第 3 章，Q49。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 3,
        "question": 49,
        "type": "Case",
        "number": 11
      }
    },
    {
      "id": 20,
      "question": "【臨床案例】一名 60 歲男性（體重 65 kg；約為理想體重 [IBW] 的 90%）因急性胰臟炎住院。 4 天後，他仍有明顯腹痛與腹脹且未緩解。他出現發燒，並已採集血液與尿液培養。腹部 CT 顯示有麻痺性腸阻塞（ileus）與腹腔內膿瘍（intra-abdominal abscess）。他接受每日包含 dextrose 300 g、 amino acids 70 g 與 20% 脂肪乳劑（lipids） 40 g 的目標 靜脈營養（parenteral nutrition, PN）處方。\n\n對此病人的 靜脈營養（parenteral nutrition, PN）處方進行下列哪一項調整最佳？",
      "options": [
        "A. 將 dextrose 增加至 400 g/day。",
        "B. 將 dextrose 減少至 200 g/day。",
        "C. 將蛋白質（protein）增加至 100 g/day。",
        "D. 將脂肪乳劑（lipids）增加至 70 g/day。"
      ],
      "answer": "C",
      "explanation": "此病人處於中度壓力狀態且 BMI 正常，適當的熱量攝取為 25–30 kcal/kg/day （1625– 1950 kcal/day），適當的蛋白質攝取為 1.2–2 g/kg/day （78–130 g/day）。目前的蛋白質僅 70 g/day （1.1 g/kg/day）偏低；將蛋白質增加至 100 g/day 可提供 1.5 g/kg/day 的蛋白質，同時使總熱量達到 1820 kcal （28 kcal/kg/day），完全符合建議範圍（選項 C 正確）。將 dextrose 增加至 400 g/day 或將 lipids 增加至 70 g/day 都會使總熱量達到 31 kcal/kg/day，超過建議上限（選項 A 與 D 錯誤）。將 dextrose 降至 200 g/day 則會使總熱量降至 21 kcal/kg/day，低於目標範圍（選項 B 錯誤）。\n\n【教材出處】PDF 第 3 章，Q50。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 3,
        "question": 50,
        "type": "Case",
        "number": 12
      }
    },
    {
      "id": 21,
      "question": "一名無糖尿病病史的 55 歲女性（體重 75 kg）在接受重大胃腸道切除術後使用 靜脈營養（parenteral nutrition, PN）。她已脫離機械呼吸器，正準備從 加護病房（intensive care unit, ICU）轉至一般病房。她目前的 PN 配方為 dextrose 200 g （1.8 mg/kg/min）、 amino acids 110 g 與 lipids 80 g （1.1 g/kg/day），符合其 26 kcal/kg/day 與蛋白質 1.5 g/kg/day 的目標需求，且內含 regular human insulin 20 units/day。過去 24 小時她的指尖血糖測量值為 170–210 mg/dL，血清葡萄糖濃度為 182 mg/dL，期間共額外接受了 14 units 的移動規模 regular insulin （sliding-scale regular human insulin）補充。為達到最佳血糖控制，建議下列哪一項處置最佳？",
      "options": [
        "A. 將 靜脈營養（parenteral nutrition, PN）內的 regular insulin 增加至 30 units/day。",
        "B. 將 dextrose 減少至 100 g/day。",
        "C. 將 靜脈營養（parenteral nutrition, PN）內的 regular insulin 增加至 50 units/day。",
        "D. 不改變目前的處方。"
      ],
      "answer": "A",
      "explanation": "由於此名準備轉至一般病房的外科病人目標血糖應控制在 140–180 mg/dL 之間，因此需要適度改善其血糖控制（選項 D 錯誤）。理想情況下應滿足人體基本葡萄糖需求（中樞神經、紅血球等每日約需 130 g，加上傷口癒合需 80–150 g/day），以防止胺基酸被用於糖質新生，因此不應將葡萄糖降至 100 g/day （選項 B 錯誤）。最簡單且能同時滿足熱量需求與血糖控制的方法，是適度增加 靜脈營養（parenteral nutrition, PN）溶液中的 regular human insulin 含量。考量過去 24 小時額外給予了 14 units 的 sliding-scale insulin （加上原 PN 中的 20 units 共 34 units），將 PN 中的 insulin 適度調升至 30 units/day 最為審慎安全，在同時給予 200 g 葡萄糖的情況下極少引起低血糖（選項 A 正確）。調升至 50 units/day 則劑量過高，會增加低血糖風險（選項 C 錯誤）。\n\n【教材出處】PDF 第 3 章，Q51。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 3,
        "question": 51,
        "type": "Case",
        "number": 13
      }
    }
  ],
  "6": [
    {
      "id": 1,
      "question": "【臨床案例】K.P.，一名 38 歲平素健康的女性，因機動車車禍導致創傷性腦損傷（traumatic brain injury, TBI）及嚴重胸部外傷，需接受氣管內插管與機械通氣（mechanical ventilation）。在創傷加護病房（trauma ICU）住院 96 小時後，其胸部 X 光顯示出現新浸潤灶（new infiltrate），體溫 101.9°F （38.8°C），白血球（white blood cell count, WBC） 15 × 10³ cells/mm³，且痰液肉眼呈化膿性。 K.P. 血流動力學穩定。團隊決定對受影響肺葉進行支氣管鏡肺泡灌洗術（BAL）以評估呼吸器相關肺炎（ventilator-associated pneumonia, VAP）。當地 加護病房（intensive care unit, ICU）之 抗 methicillin 金黃色葡萄球菌（methicillin-resistant Staphylococcus aureus, MRSA）盛行率小於 10%。\n\n下列何者最可能是 K.P. 疑似 呼吸器相關肺炎（ventilator-associated pneumonia, VAP）的致病原？",
      "options": [
        "A. 不動桿菌屬（Acinetobacter spp.）",
        "B. 抗甲氧苯青黴素金黃色葡萄球菌（Methicillin-resistant Staphylococcus aureus, MRSA）",
        "C. 多重抗藥性綠膿桿菌（Multidrug-resistant Pseudomonas aeruginosa）",
        "D. 肺炎鏈球菌（Streptococcus pneumoniae）"
      ],
      "answer": "D",
      "explanation": "此病人屬於早發型 呼吸器相關肺炎（ventilator-associated pneumonia, VAP） （early onset VAP，住院 5 天以內發生），且無多重抗藥菌（multidrug-resistant organism, MDRO）之危險因子。在缺乏其他 多重抗藥性（multidrug-resistant, MDR）危險因子的情況下，早發型醫院型肺炎與 VAP 的相關致病原通常為社區型微生物，包括 肺炎鏈球菌（Streptococcus pneumoniae）、 對 methicillin 具感受性金黃色葡萄球菌（methicillin-susceptible Staphylococcus aureus, MSSA）、 流感嗜血桿菌（Haemophilus influenzae）及對抗生素具感受性的腸道革蘭氏陰性桿菌（選項 D 正確）。非發酵革蘭氏陰性桿菌如 不動桿菌屬（Acinetobacter spp.） （選項 A）與 MDR 綠膿桿菌（P. aeruginosa） （選項 C），以及 抗 methicillin 金黃色葡萄球菌（methicillin-resistant Staphylococcus aureus, MRSA） （選項 B），通常與晚發型或具有 多重抗藥性微生物（multidrug-resistant organism, MDRO）危險因子相關。\n\n【教材出處】PDF 第 6 章，Q84。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 6,
        "question": 84,
        "type": "SAQ",
        "number": 1
      }
    },
    {
      "id": 2,
      "question": "【臨床案例】K.P.，一名 38 歲平素健康的女性，因機動車車禍導致創傷性腦損傷（traumatic brain injury, TBI）及嚴重胸部外傷，需接受氣管內插管與機械通氣（mechanical ventilation）。在創傷加護病房（trauma ICU）住院 96 小時後，其胸部 X 光顯示出現新浸潤灶（new infiltrate），體溫 101.9°F （38.8°C），白血球（white blood cell count, WBC） 15 × 10³ cells/mm³，且痰液肉眼呈化膿性。 K.P. 血流動力學穩定。團隊決定對受影響肺葉進行支氣管鏡肺泡灌洗術（BAL）以評估呼吸器相關肺炎（ventilator-associated pneumonia, VAP）。當地 加護病房（intensive care unit, ICU）之 抗 methicillin 金黃色葡萄球菌（methicillin-resistant Staphylococcus aureus, MRSA）盛行率小於 10%。\n\n根據 2016 年 美國感染症醫學會（Infectious Diseases Society of America, IDSA）指引，針對 K.P. 疑似 呼吸器相關肺炎（ventilator-associated pneumonia, VAP）最可能的致病原，下列哪一種經驗性抗生素處方最佳？",
      "options": [
        "A. azithromycin 加上 moxifloxacin。",
        "B. cefepime。",
        "C. ceftriaxone。",
        "D. ceftriaxone 加上 vancomycin。"
      ],
      "answer": "B",
      "explanation": "呼吸器相關肺炎（ventilator-associated pneumonia, VAP）經驗性抗生素的選擇應考量可能致病菌、 多重抗藥性微生物（multidrug-resistant organism, MDRO）危險因子及當地抗藥性譜。 2016 年 美國感染症醫學會（Infectious Diseases Society of America, IDSA）指引建議所有疑似 VAP 病人的經驗治療均需涵蓋綠膿桿菌（P. aeruginosa）。若無 MDRO 危險因子且當地抗生素感受性報告（antibiogram）顯示抗藥性小於 10%，使用單一具抗綠膿桿菌活性之 β- 內醯胺類抗生素即已足夠。因此，具有抗綠膿桿菌活性的 cefepime 優於不具抗綠膿桿菌活性的 ceftriaxone （選項 B 正確；選項 C 與 D 錯誤）。非典型致病原在早發型 VAP 極為罕見，無需使用 azithromycin （選項 A 錯誤）。\n\n【教材出處】PDF 第 6 章，Q85。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 6,
        "question": 85,
        "type": "SAQ",
        "number": 2
      }
    },
    {
      "id": 3,
      "question": "T.D. 是一名 57 歲男性，因嚴重高血糖高滲透壓症候群（hyperosmolar hyperglycemic syndrome）入住內科加護病房（medical intensive care unit, MICU）。入住時放置了鎖骨下中央靜脈導管（CVC）。在 加護病房（intensive care unit, ICU）第 4 天， T.D. 出現體溫 102.7°F （39.2°C）及 白血球計數（white blood cell count, WBC） 17 × 10³ cells/mm³。護理師注意到導管部位出現新發生的紅斑。經適當檢查後，決定針對疑似中央導管相關血流感染（central line-associated bloodstream infection, CLABSI）啟動經驗性抗生素治療。下列哪一種藥物最適合作為經驗性治療？",
      "options": [
        "A. cefazolin。",
        "B. linezolid。",
        "C. piperacillin/tazobactam。",
        "D. vancomycin。"
      ],
      "answer": "D",
      "explanation": "革蘭氏陽性球菌是 中央導管相關血流感染（central line-associated bloodstream infection, CLABSI）最常見的致病原，包括凝固酶陰性葡萄球菌（MRSE）及金黃色葡萄球菌（methicillin-resistant Staphylococcus aureus, MRSA）。在所列選項中， vancomycin 是經驗性處置的首選藥物（選項 D 正確）。雖然 linezolid 對這些細菌具足夠抗菌譜，但因其在 CLABSI 經驗治療中與較差的預後相關，故指引不建議使用於經驗性治療（選項 B 錯誤）。 cefazolin 與 piperacillin/tazobactam 對 抗 methicillin 金黃色葡萄球菌（methicillin-resistant Staphylococcus aureus, MRSA）/MRSE 無效（選項 A 與 C 錯誤）。\n\n【教材出處】PDF 第 6 章，Q86。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 6,
        "question": 86,
        "type": "SAQ",
        "number": 3
      }
    },
    {
      "id": 4,
      "question": "D.G. 是一名 31 歲女性，在經歷 48 小時的不適、發燒與肌痛後，因嚴重呼吸衰竭與急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）入住 內科加護病房（medical intensive care unit, MICU）並需插管。急診送檢的鼻咽沖洗液快速檢測呈 A 型流感陽性。當地 2009 H1N1 亞型盛行率很高。下列哪一種藥物最適合作為 D.G. 嚴重流感的初始治療？",
      "options": [
        "A. amantadine。",
        "B. 吸入型 zanamivir （Inhaled zanamivir）。",
        "C. 靜脈注射 zanamivir （Intravenous zanamivir）。",
        "D. oseltamivir。"
      ],
      "answer": "D",
      "explanation": "鑑於流感 A （2009 H1N1）亞型的高盛行率，口服 / 經管灌 oseltamivir 是經驗性治療首選藥物，且對現代 A 型及 B 型流感病毒均具高度活性（選項 D 正確）。吸入型 zanamivir 透過機械呼吸器給藥時全身吸收不足，且有支氣管痙攣風險（選項 B 錯誤）；靜脈注射 zanamivir 僅在無法口服 / 腸道吸收且具專案申請管道時使用（選項 C 錯誤）。金剛烷類（amantadine）對目前流行的流感株普遍具有高度抗藥性，且對 B 型流感無效（選項 A 錯誤）。\n\n【教材出處】PDF 第 6 章，Q87。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 6,
        "question": 87,
        "type": "SAQ",
        "number": 4
      }
    },
    {
      "id": 5,
      "question": "T.S. 是一名 79 歲女性，因呼吸衰竭與嚴重社區型肺炎入住 內科加護病房（medical intensive care unit, MICU），留置導尿管已 6 天，期間使用機械通氣並以 fentanyl 輸注止痛、必要時給予 haloperidol 處置譫妄。今早 T.S. 體溫 101.6°F （38.7°C）， 白血球計數（white blood cell count, WBC）上升至 16 × 10³ cells/mm³，血流動力學穩定。送檢血液與尿液培養，尿液分析顯示顯著膿尿（significant pyuria）。哪一種致病菌最可能導致 T.S. 發生導尿管相關泌尿道感染（CAUTI）？",
      "options": [
        "A. Enterococcus faecalis。",
        "B. Escherichia coli。",
        "C. 綠膿桿菌（Pseudomonas aeruginosa）。",
        "D. 金黃色葡萄球菌（Staphylococcus aureus）。"
      ],
      "answer": "B",
      "explanation": "儘管醫療照護相關的 CAUTI 致病原比單純社區型 UTI 更為多樣化，大腸桿菌（Escherichia coli）仍然是最常見的細菌致病原，約佔 CAUTI 案例的 30% （選項 B 正確）。其他選項雖也是潛在致病菌，但發生率皆低於 大腸桿菌（E. coli） （選項 A、 C 與 D 錯誤）。\n\n【教材出處】PDF 第 6 章，Q88。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 6,
        "question": 88,
        "type": "SAQ",
        "number": 5
      }
    },
    {
      "id": 6,
      "question": "K.D. 是一名 59 歲男性，因嚴重周邊血管疾病導致中段小腸壞死與穿孔，接受緊急剖腹手術與部分腸切除吻合術後轉入外科加護病房（surgical intensive care unit, SICU）。手術中發現腹膜受到廣泛污染且有嚴重腹膜炎，並伴隨持續性低血壓及升壓劑需求。 K.D. 圍手術期曾接受 cefazolin 與 metronidazole。下列哪一種經驗性抗生素處方對 K.D. 最為適當？",
      "options": [
        "A. ceftriaxone 加上 vancomycin。",
        "B. ciprofloxacin 加上 metronidazole。",
        "C. Ertapenem。",
        "D. piperacillin/tazobactam。"
      ],
      "answer": "D",
      "explanation": "此病人患有涉及小腸的社區型複雜腹腔內感染（cIAI），伴隨敗血性休克（嚴重等級）。合併敗血性休克的重度感染使多重抗藥菌（包括 P. aeruginosa）及腸球菌（enterococci）的風險大增，且涉及腸道需涵蓋厭氧菌。 piperacillin/tazobactam 能夠同時涵蓋腸道革蘭氏陰性菌、綠膿桿菌、厭氧菌及腸球菌（選項 D 正確）。 Ertapenem 缺乏抗綠膿桿菌及抗腸球菌活性，不適合重度休克病人（選項 C 錯誤）。 ciprofloxacin/metronidazole 對腸球菌活性不足（選項 B 錯誤）。 ceftriaxone 抗菌譜過窄且不涵蓋綠膿桿菌與腸球菌（選項 A 錯誤）。\n\n【教材出處】PDF 第 6 章，Q89。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 6,
        "question": 89,
        "type": "SAQ",
        "number": 6
      }
    },
    {
      "id": 7,
      "question": "T.M. 是一名 42 歲慢性酗酒男性，因嚴重上腹痛及血清解脂酶（lipase）超過正常上限 10 倍以上就診急診室。腹部電腦斷層（CT）顯示約 40% 的胰臟壞死，但無異常積液或膿瘍證據。 T.M. 發燒且心搏過速， 白血球計數（white blood cell count, WBC）上升，尿量小於 0.5 mL/kg/h 提示低血容。下列何者最能描述此時抗生素治療對 T.M. 的角色？",
      "options": [
        "A. 不建議使用抗生素治療（Antibiotic therapy is not indicated）。",
        "B. 針對疑似敗血症及可能的胰臟感染，啟動經驗性抗生素治療。",
        "C. 在準備進行胰臟清創手術前，啟動圍手術期抗生素治療。",
        "D. 啟動預防性抗生素治療，以預防壞死組織感染。"
      ],
      "answer": "A",
      "explanation": "急性壞死性胰臟炎常伴隨全身發炎反應症候群（SIRS），但多數壞死性胰臟炎在初期皆為無菌性（sterile）。在無胰臟膿瘍或感染性壞死證據（如 CT 顯示氣體或穿刺培養陽性）的情況下，指引明確指出不應常規使用預防性抗生素或抗黴菌藥物（選項 A 正確；選項 B 與 D 錯誤）。目前並無立即清創手術的適應症（選項 C 錯誤）。此時最重要的處置是積極輸液復甦與器官支持照護。\n\n【教材出處】PDF 第 6 章，Q90。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 6,
        "question": 90,
        "type": "SAQ",
        "number": 7
      }
    },
    {
      "id": 8,
      "question": "J.E. 是一名 67 歲女性，因意外過量服用 metformin 引起嚴重代謝性酸中毒入住 內科加護病房（medical intensive care unit, MICU）。住院期間併發股靜脈 中央導管相關血流感染（central line-associated bloodstream infection, CLABSI）及全感受性 大腸桿菌（E. coli）引起的嚴重敗血症。她接受了 3 天經驗性 piperacillin/tazobactam、拔除導管及 11 天確定性 ceftriaxone 治療後敗血症緩解。自昨日起， J.E. 出現 9 次稀便，且新出現白血球增多（14,500 cells/mm³），提示困難梭狀桿菌感染（CDI）。她仍可耐受腸道營養。根據 2021 年 美國感染症醫學會（Infectious Diseases Society of America, IDSA）更新指引，針對 J.E. 疑似之初發 CDI，最恰當的處方為何？",
      "options": [
        "A. Fidaxomicin 200 mg 經灌食管給藥每 12 小時一次。",
        "B. metronidazole 500 mg 經灌食管給藥每 8 小時一次。",
        "C. metronidazole 500 mg 靜脈注射每 8 小時一次。",
        "D. vancomycin 125 mg 經灌食管給藥每 6 小時一次。"
      ],
      "answer": "A",
      "explanation": "根據 2021 年 美國感染症醫學會（Infectious Diseases Society of America, IDSA）/SHEA 針對 CDI 治療指引的更新，對於非猛暴性初發 CDI （non- fulminant, first-episode CDI），首選治療藥物為口服 / 經管灌 fidaxomicin 200 mg 每日兩次共 10 天，因其相較於口服 vancomycin 能提供更高的 4 週持續緩解率並顯著降低復發率（選項 A 正確）。若無法取得 fidaxomicin 時，口服 vancomycin 為可接受的替代方案（選項 D 次選）。 metronidazole 已不再推薦作為初發 CDI 的常規首選（選項 B 與 C 錯誤）。\n\n【教材出處】PDF 第 6 章，Q91。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 6,
        "question": 91,
        "type": "SAQ",
        "number": 8
      }
    },
    {
      "id": 9,
      "question": "J.S. 是一名 42 歲男性，因缺血性結腸炎接受剖腹全結腸切除術合併迴腸造口術後入住 外科加護病房（surgical intensive care unit, SICU）。術後第 4 天，手術傷口出現中度紅斑（3 cm）及化膿性引流液。住院醫師拆開傷口皮膚，發現未受波及的筋膜上方有感染性物質。病人無全身性感染徵象與症狀。下列哪一項處置最為適當？",
      "options": [
        "A. 持續更換敷料並密切評估病人狀況（Continue dressing changes and patient assessment）。",
        "B. 針對術後傷口感染啟動經驗性 vancomycin。",
        "C. 啟動針對皮膚及結腸菌叢的經驗性抗生素治療。",
        "D. 針對疑似壞死性筋膜炎啟動廣效性抗生素治療。"
      ],
      "answer": "A",
      "explanation": "此病人屬於淺層切口手術部位感染（superficial incisional SSI），傷口紅腫小於 5 cm，拆開縫線後已排膿，且完全無全身性發炎徵象（無發燒、心搏過速或白血球升高）及筋膜侵犯。對於這類淺層局部傷口感染，處置核心是傷口敞開引流與定期更換敷料，無需使用抗生素治療（選項 A 正確；選項 B、 C 與 D 錯誤）。\n\n【教材出處】PDF 第 6 章，Q92。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 6,
        "question": 92,
        "type": "SAQ",
        "number": 9
      }
    },
    {
      "id": 10,
      "question": "A.C. 是一名 27 歲感染人類免疫缺乏病毒（HIV）並規律接受抗反轉錄病毒治療的男性，因背部與雙上臂表皮脫落占總體表面積（TBSA） 30% 從外院轉入燒傷加護病房，高度懷疑為 sulfamethoxazole/trimethoprim 引起之毒性表皮壞死溶解症（TEN）。生命徵象：心率 142 次 / 分、呼吸 30 次 / 分、血壓 100/50 mm Hg。下列何者是最恰當的初始藥物治療／處置介入？",
      "options": [
        "A. 給予高劑量皮質類固醇以遏止 TEN 進展。",
        "B. 針對低血容量啟動晶體輸液復甦（crystalloid resuscitation）。",
        "C. 放置鼻胃管以給予抗反轉錄病毒藥物。",
        "D. 啟動廣效性預防性抗生素以防止傷口感染。"
      ],
      "answer": "B",
      "explanation": "TEN 會導致大面積表皮屏障喪失，引起大量體液、蛋白質及電解質自創面流失，類似嚴重燒傷。其急症處置最重要的基石是立即啟動以平衡晶體輸液為主的體液復甦支持，以維持足夠的器官灌流（選項 B 正確）。高劑量類固醇在 TEN 的角色極具爭議且會增加感染風險與延遲創面癒合（選項 A 錯誤）。指引明確反對常規使用預防性抗生素（選項 D 錯誤）。抗反轉錄病毒藥物需謹慎評估，非當前最優先的急救介入（選項 C 錯誤）。\n\n【教材出處】PDF 第 6 章，Q93。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 6,
        "question": 93,
        "type": "SAQ",
        "number": 10
      }
    },
    {
      "id": 11,
      "question": "T.F. 是一名 68 歲有糖尿病與高血壓病史的男性，因意識改變與急性腎損傷至急診就醫。 5 天前他於外院確診 SARS-CoV-2。初評時血流動力學穩定，室內空氣下動脈血氧飽和度（SaO₂）為 87%，且過去 4 小時持續惡化，目前需要 5 L 高流量鼻導管氧氣才能維持 SaO₂ > 92%。胸部 X 光顯示雙側對稱浸潤符合病毒性肺炎。 腎絲球過濾率估計值（estimated glomerular filtration rate, eGFR）為 31 mL/min （基準值 68 mL/min）， ALT 23 U/L。針對 COVID-19 住院且氧氣需求增加的病人，下列哪一種藥物被視為第一線治療？",
      "options": [
        "A. dexamethasone。",
        "B. hydroxychloroquine。",
        "C. remdesivir。",
        "D. tocilizumab。"
      ],
      "answer": "A",
      "explanation": "根據大型隨機對照 RECOVERY 試驗，在需要補充氧氣或機械通氣的 COVID-19 住院病人中，使用 dexamethasone （6 mg 每日一次，最長 10 天）可顯著降低 28 天死亡率，為各大指引強烈推薦的第一線基礎治療（選項 A 正確）。 hydroxychloroquine 已證實無效（選項 B 錯誤）。 remdesivir 可縮短康復時間但無法單獨降低重症死亡率，通常作為合併治療考量（選項 C 錯誤）。 tocilizumab 為抗 IL-6 單株抗體，通常在氧氣需求迅速惡化合併全身發炎反應時加在 dexamethasone 之上，而非單獨首選（選項 D 錯誤）。\n\n【教材出處】PDF 第 6 章，Q94。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 6,
        "question": 94,
        "type": "SAQ",
        "number": 11
      }
    },
    {
      "id": 12,
      "question": "【臨床案例】C.T. 是一名 48 歲男性，左側身體遭受 40% TBSA 燒傷合併疑似吸入性呼吸道損傷，需接受機械通氣。 C.T. 已入住 加護病房（intensive care unit, ICU） 7 天。昨晚， C.T. 體溫達 102.1°F （39°C）， 白血球計數（white blood cell count, WBC）為 18 × 10³ cells/mm³，且肉眼可見的化膿性痰量增加； C.T. 血流動力學穩定，無新發器官衰竭。胸部 X 光因吸入性損傷而難以判讀。住院總醫師請呼吸治療師執行導管導引 BAL，並送檢微生物實驗室。\n\n此時最佳的處置步驟為何？",
      "options": [
        "A. 針對疑似多重抗藥性 呼吸器相關肺炎（ventilator-associated pneumonia, VAP），啟動廣效性經驗性抗生素治療。",
        "B. 等待 1–2 天取得革蘭氏染色結果後，再決定經驗性抗生素處方。",
        "C. 等待初步定量培養結果出來後，再啟動經驗性抗生素治療。",
        "D. 送檢血液與尿液培養，並等待其結果後再啟動經驗性抗生素治療。"
      ],
      "answer": "A",
      "explanation": "此病人有感染的臨床徵象、化膿性痰液增加，且已入住 加護病房（intensive care unit, ICU）超過 5 天（屬於 MDRO 高風險），高度懷疑為多重抗藥性 呼吸器相關肺炎（ventilator-associated pneumonia, VAP）。在取得下呼吸道培養檢體後，應立即啟動涵蓋可能致病原的經驗性抗生素治療，不可延誤 1–2 天等待染色或培養結果，以免增加死亡率（選項 A 正確；選項 B、 C 與 D 錯誤）。\n\n【教材出處】PDF 第 6 章，Q95。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 6,
        "question": 95,
        "type": "Case",
        "number": 1
      }
    },
    {
      "id": 13,
      "question": "【臨床案例】C.P. 是一名 67 歲女性，有 慢性阻塞性肺病（chronic obstructive pulmonary disease, COPD）、第 2 型糖尿病與冠狀動脈疾病史。她因重度 COPD 急性惡化合併呼吸衰竭插管而再次入住 加護病房（intensive care unit, ICU）。她在 12 天前曾住院 10 天，期間曾接受靜脈注射 azithromycin。在此次再入院第 4 天，左下肺浸潤惡化、痰量增加，體溫 101.9°F （38.8°C），氧合狀態惡化。臨床診斷為 呼吸器相關肺炎（ventilator-associated pneumonia, VAP），已送檢半定量氣管抽吸物培養。當地 ICU 之 抗 methicillin 金黃色葡萄球菌（methicillin-resistant Staphylococcus aureus, MRSA）盛行率為 30%，抗生素感受性報告顯示對綠膿桿菌活性最高的 β- 內醯胺類抗生素感受性僅 80%。\n\n下列哪一種經驗性抗生素處方對此病人最佳？",
      "options": [
        "A. azithromycin 加上 moxifloxacin。",
        "B. cefepime 加上 tobramycin，以及 vancomycin。",
        "C. ceftriaxone 加上 azithromycin。",
        "D. linezolid 加上 tobramycin。"
      ],
      "answer": "B",
      "explanation": "此病人近期曾住院並接受靜脈抗生素，屬於多重抗藥菌（multidrug-resistant organism, MDRO）高危險群。且當地 抗 methicillin 金黃色葡萄球菌（methicillin-resistant Staphylococcus aureus, MRSA）盛行率 > 10%–20% （此處為 30%），且抗綠膿桿菌藥物感受性 < 90% （此處僅 80%）。依據 2016 美國感染症醫學會（Infectious Diseases Society of America, IDSA）指引，處方必須包含： （1）兩種不同機轉的抗綠膿桿菌藥物（如抗綠膿桿菌 β- 內醯胺類 cefepime 加上胺基糖苷類 tobramycin），以及（2）涵蓋 MRSA 的藥物（如 vancomycin）（選項 B 正確）。選項 A 與 C 抗菌譜嚴重不足；選項 D 缺少了關鍵的抗綠膿桿菌 β- 內醯胺類骨幹。\n\n【教材出處】PDF 第 6 章，Q96。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 6,
        "question": 96,
        "type": "Case",
        "number": 2
      }
    },
    {
      "id": 14,
      "question": "【臨床案例】K.L. 是一名 37 歲男性，機車事故後造成多處骨科與胸部創傷，接受機械通氣已 8 天，期間確診為 Klebsiella pneumoniae 引起的 呼吸器相關肺炎（ventilator-associated pneumonia, VAP）。 K.L. 接受了適當的經驗性抗生素治療，氧合改善、 白血球計數（white blood cell count, WBC）與體溫曲線均已下降改善。\n\n針對 K.L. 的 呼吸器相關肺炎（ventilator-associated pneumonia, VAP），確定性抗生素治療的最佳療程天數為何？",
      "options": [
        "A. 臨床症狀與徵象緩解後 24 小時。",
        "B. 7 天（7 days）。",
        "C. 10 天。",
        "D. 14 天。"
      ],
      "answer": "B",
      "explanation": "根據 PneumA 試驗與統合分析， 2016 年 美國感染症醫學會（Infectious Diseases Society of America, IDSA）指引強烈建議所有 呼吸器相關肺炎（ventilator-associated pneumonia, VAP）病人（包括腸道發酵革蘭氏陰性桿菌如 Klebsiella pneumoniae 引起者）的確定性抗生素療程均為 7 個完整治療天，短療程（7 天）在臨床治癒率與死亡率上不劣於長療程（14 天），且可減少抗藥性菌株產生（選項 B 正確；選項 A、 C 與 D 錯誤）。\n\n【教材出處】PDF 第 6 章，Q97。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 6,
        "question": 97,
        "type": "Case",
        "number": 3
      }
    },
    {
      "id": 15,
      "question": "【臨床案例】T.W. 是一名 47 歲女性，因重度 2009 H1N1 流感合併呼吸衰竭入住 內科加護病房（medical intensive care unit, MICU），需插管通氣，診斷為流感相關敗血性休克及繼發性 對 methicillin 具感受性金黃色葡萄球菌（methicillin-susceptible Staphylococcus aureus, MSSA）肺炎。急診復甦時放置了右內頸靜脈 CVC，目前仍需使用。雖然低血壓與發燒在入院 72 小時後緩解，但在第 5 天出現新發燒 101.7°F （38.7°C）且白血球增多惡化，胸部 X 光無新變化。\n\n下一步最恰當的處置為何？",
      "options": [
        "A. 針對新敗血症發作立即啟動廣效性抗生素治療。",
        "B. 進行支氣管鏡 BAL 評估疑似 呼吸器相關肺炎（ventilator-associated pneumonia, VAP）。",
        "C. 立即拔除 CVC。",
        "D. 送檢兩套血液培養（一套由導管抽取，另一套由周邊靜脈採血）。"
      ],
      "answer": "D",
      "explanation": "在胸部 X 光無新變化的情況下，新發燒與白血球增加應高度懷疑為急診緊急置入且留置 5 天的 CVC 所致之 中央導管相關血流感染（central line-associated bloodstream infection, CLABSI）。在給予抗生素前，首要步驟是立即取得兩套配對血液培養（一套來自導管接頭，一套來自周邊靜脈），以確立診斷（選項 D 正確；選項 A 錯誤）。雖然強烈考慮拔管，但在拔管前取得培養對於確立血流感染至關重要（選項 C 錯誤）。胸部 X 光無變化故暫不需侵入性 BAL （選項 B 錯誤）。\n\n【教材出處】PDF 第 6 章，Q98。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 6,
        "question": 98,
        "type": "Case",
        "number": 4
      }
    },
    {
      "id": 16,
      "question": "【臨床案例】F.P. 是一名 29 歲男性，因重度酒精性無菌性急性胰臟炎由外院轉入 內科加護病房（medical intensive care unit, MICU）。在外院 5 天期間併發多重器官衰竭與呼吸衰竭並接受氣管切開術。入院時放置右內頸 CVC。在 MICU 第 3 天， F.P. 最高體溫達 102°F （38.9°C）。已取得兩套血液培養，右內頸導管已被拔除並送檢導管尖端培養。\n\n針對此疑似 中央導管相關血流感染（central line-associated bloodstream infection, CLABSI）病人，下列哪一種經驗性治療處方最佳？",
      "options": [
        "A. Daptomycin 與 ceftriaxone。",
        "B. fluconazole。",
        "C. linezolid 與 cefepime。",
        "D. vancomycin、 cefepime 與 tobramycin。"
      ],
      "answer": "D",
      "explanation": "此病人住院已達 8 天（外院 5 天 + 本院 3 天），且伴隨多重器官衰竭，具有 多重抗藥性微生物（multidrug-resistant organism, MDRO）高危險因子。針對重症且疑似院內感染 中央導管相關血流感染（central line-associated bloodstream infection, CLABSI），經驗性處方應涵蓋 抗 methicillin 金黃色葡萄球菌（methicillin-resistant Staphylococcus aureus, MRSA）/MRSE （首選 vancomycin）以及抗綠膿桿菌革蘭氏陰性桿菌（建議以 cefepime 加上 tobramycin 進行合併治療）（選項 D 正確）。 ceftriaxone 缺乏抗綠膿桿菌活性（選項 A 錯誤）。 linezolid 不建議用於 CLABSI 經驗治療（選項 C 錯誤）。單用 fluconazole 無法涵蓋細菌性致病菌（選項 B 錯誤）。\n\n【教材出處】PDF 第 6 章，Q99。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 6,
        "question": 99,
        "type": "Case",
        "number": 5
      }
    },
    {
      "id": 17,
      "question": "【臨床案例】F.P. 是一名 29 歲男性，因重度酒精性無菌性急性胰臟炎由外院轉入 內科加護病房（medical intensive care unit, MICU）。在外院 5 天期間併發多重器官衰竭與呼吸衰竭並接受氣管切開術。入院時放置右內頸 CVC。在 MICU 第 3 天， F.P. 最高體溫達 102°F （38.9°C）。已取得兩套血液培養，右內頸導管已被拔除並送檢導管尖端培養。 F.P. 經確診為 Klebsiella pneumoniae 引起的 中央導管相關血流感染（central line-associated bloodstream infection, CLABSI），並接受適當經驗抗生素治療。病人臨床反應良好，且後續血液培養未持續長菌（無持續性菌血症）。\n\n針對 F.P. 的 中央導管相關血流感染（central line-associated bloodstream infection, CLABSI），最佳的確定性抗生素療程長度為何？",
      "options": [
        "A. 5 天。",
        "B. 14 天（7–14 天）。",
        "C. 21 天。",
        "D. 4 週。"
      ],
      "answer": "B",
      "explanation": "指引建議對於無併發症之革蘭氏陰性桿菌 中央導管相關血流感染（central line-associated bloodstream infection, CLABSI），確定性抗生素治療療程為第一套陰性血液培養起算 7 至 14 天（選項 B 正確）。 5 天過短（選項 A 錯誤）。只有合併心內膜炎、化膿性血栓靜脈炎或骨髓炎等複雜性感染時才需要 4–6 週治療（選項 D 錯誤）。\n\n【教材出處】PDF 第 6 章，Q100。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 6,
        "question": 100,
        "type": "Case",
        "number": 6
      }
    },
    {
      "id": 18,
      "question": "【臨床案例】P.H. 是一名 67 歲女性，自長期照護機構轉入 內科加護病房（medical intensive care unit, MICU），診斷為嚴重肺炎引起的呼吸衰竭。她在急診留置導尿管並開始使用 vancomycin 與 levofloxacin。在 加護病房（intensive care unit, ICU）第 6 天，儘管肺炎一度改善，但出現新發燒 101.9°F （38.9°C）與 白血球計數（white blood cell count, WBC）升高至 18 × 10³ cells/mm³。送檢血液與尿液培養，尿液分析顯示多量細菌與白血球 > 10 cells/mm³。\n\n針對 P.H.，下列哪一項處置最為適當？",
      "options": [
        "A. 在更改抗生素前等待最終培養結果。",
        "B. 延長原肺炎治療之療程。",
        "C. 針對疑似導尿管相關泌尿道感染（CAUTI）啟動經驗性抗生素治療。",
        "D. 重新置入新導尿管並重驗尿液分析以確認 CAUTI。"
      ],
      "answer": "C",
      "explanation": "在長期留置導尿管病人中出現新發燒、白血球升高合併顯著膿尿與細菌尿，高度提示 CAUTI。在重症病人有明確臨床感染證據時，不可延誤抗生素治療等待最終培養，應立即啟動經驗性抗生素治療（選項 C 正確；選項 A 與 B 錯誤）。若導尿管留置小於 2 週，不強制重新插管後再送檢（選項 D 錯誤）。\n\n【教材出處】PDF 第 6 章，Q101。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 6,
        "question": 101,
        "type": "Case",
        "number": 7
      }
    },
    {
      "id": 19,
      "question": "【臨床案例】P.H. 是一名 67 歲女性，自長期照護機構轉入 內科加護病房（medical intensive care unit, MICU），診斷為嚴重肺炎引起的呼吸衰竭。她在急診留置導尿管並開始使用 vancomycin 與 levofloxacin。在 加護病房（intensive care unit, ICU）第 6 天，儘管肺炎一度改善，但出現新發燒 101.9°F （38.9°C）與 白血球計數（white blood cell count, WBC）升高至 18 × 10³ cells/mm³。送檢血液與尿液培養，尿液分析顯示多量細菌與白血球 > 10 cells/mm³。\n\n考量 P.H. 具備多重抗藥菌（multidrug-resistant organism, MDRO）之危險因子，下列哪一組致病原清單最可能與其 CAUTI 相關？",
      "options": [
        "A. 大腸桿菌（E. coli）、 綠膿桿菌（P. aeruginosa）、 Candida albicans。",
        "B. Enterococcus spp.、 C. albicans、 S. maltophilia。",
        "C. 抗 methicillin 金黃色葡萄球菌（methicillin-resistant Staphylococcus aureus, MRSA）、 Enterococcus spp.、 C. albicans。",
        "D. 綠膿桿菌（P. aeruginosa）、 Enterococcus spp.、 抗 methicillin 金黃色葡萄球菌（methicillin-resistant Staphylococcus aureus, MRSA）。"
      ],
      "answer": "A",
      "explanation": "雖然具有 多重抗藥性微生物（multidrug-resistant organism, MDRO）危險因子的 CAUTI 致病原譜較廣，但 Escherichia coli 仍是最常見的致病原，其次為其他腸道陰性菌、綠膿桿菌（P. aeruginosa）以及念珠菌（Candida spp.）。選項 A 正確包含了最常見的 大腸桿菌（E. coli）與高風險菌種；選項 B、 C 與 D 皆遺漏了最主要的致病原 大腸桿菌（E. coli），故不正確。\n\n【教材出處】PDF 第 6 章，Q102。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 6,
        "question": 102,
        "type": "Case",
        "number": 8
      }
    },
    {
      "id": 20,
      "question": "【臨床案例】D.L. 是一名 69 歲女性，自家中因左下腹劇烈急性疼痛入住 外科加護病房（surgical intensive care unit, SICU）。腹部 CT 顯示腹膜腔內有游離氣體及遠端缺血性結腸炎。 D.L. 緊急接受部分結腸切除術與腹腔灌洗，術中見遠端結腸穿孔造成廣泛污染與顯著腹膜炎。術後入住 SICU 繼續針對敗血性休克進行復甦。\n\n下列哪一種經驗性抗生素處方對 D.L. 最為適當？",
      "options": [
        "A. ceftriaxone 加上 vancomycin。",
        "B. ciprofloxacin 加上 metronidazole。",
        "C. Ertapenem。",
        "D. piperacillin/tazobactam。"
      ],
      "answer": "D",
      "explanation": "此病人為結腸穿孔引起的繼發性腹膜炎合併複雜腹腔內感染。雖然屬於社區獲得，但併發敗血性休克使其分類為重度高危險群，增加多重抗藥性革蘭氏陰性菌的風險。此外，結腸源性感染必須強制涵蓋厭氧菌（脆弱擬桿菌等）以及腸球菌。 piperacillin/tazobactam 具有廣效抗陰性桿菌（含綠膿桿菌）、厭氧菌及腸球菌活性，為最恰當選擇（選項 D 正確）。 Ertapenem 缺乏抗腸球菌與綠膿桿菌活性（選項 C 錯誤）。 ciprofloxacin 對腸球菌活性不足（選項 B 錯誤）。 vancomycin 加上 ceftriaxone 缺少厭氧菌涵蓋且 ceftriaxone 不抗綠膿（選項 A 錯誤）。\n\n【教材出處】PDF 第 6 章，Q103。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 6,
        "question": 103,
        "type": "Case",
        "number": 9
      }
    },
    {
      "id": 21,
      "question": "【臨床案例】K.D. 是一名 58 歲患有嚴重周邊血管疾病的男性，因左下腹急性腹痛自家中入住 外科加護病房（surgical intensive care unit, SICU）。急診 CT 顯示腹腔游離氣體與遠端小腸缺血。緊急剖腹探查術中發現小腸穿孔合併嚴重腹膜炎，已送檢術中培養。完成小腸修補與沖洗後，轉入 SICU 繼續進行敗血性休克復甦。\n\n下列哪一種經驗性抗生素處方對 K.D. 最為適當？",
      "options": [
        "A. piperacillin/tazobactam。",
        "B. Ertapenem。",
        "C. ciprofloxacin 加上 vancomycin。",
        "D. cefazolin、 metronidazole 與 fluconazole。"
      ],
      "answer": "A",
      "explanation": "遠端小腸穿孔合併敗血性休克屬於重度複雜腹腔感染。必須涵蓋好氧腸道革蘭氏陰性桿菌、厭氧菌及腸球菌。 piperacillin/tazobactam 能全面涵蓋這些病原菌（選項 A 正確）。 Ertapenem 缺乏抗腸球菌活性（選項 B 錯誤）。 ciprofloxacin 對厭氧菌與腸球菌活性不足（選項 C 錯誤）。 cefazolin 抗菌譜過窄（選項 D 錯誤）。\n\n【教材出處】PDF 第 6 章，Q104。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 6,
        "question": 104,
        "type": "Case",
        "number": 10
      }
    },
    {
      "id": 22,
      "question": "【臨床案例】R.P. 是一名 43 歲有慢性酗酒史的男性，自家中至急診室就診，主訴急性嚴重上腹痛；心率 142 次 / 分、 平均動脈壓（mean arterial pressure, MAP） 62 mm Hg、 白血球計數（white blood cell count, WBC） 24 × 10³ cells/mm³、血清解脂酶 1527 U/L。急診 1 小時內給予 3 L sodium chloride 溶液復甦。腹部 CT 顯示顯著胰臟水腫及大於 30% 的胰臟壞死，無急性液體積聚或膿瘍。\n\n下列哪一種抗微生物處方對 R.P. 最為適當？",
      "options": [
        "A. ceftriaxone 加上 vancomycin。",
        "B. ciprofloxacin 加上 metronidazole。",
        "C. meropenem。",
        "D. 不使用；急性胰臟炎不建議常規使用預防性抗生素。"
      ],
      "answer": "D",
      "explanation": "急性壞死性胰臟炎常伴隨全身發炎反應（SIRS），但多數情況下壞死組織在早期皆為無菌的。 CT 顯示無膿瘍或感染證據。現行各大臨床指引均強烈反對在無菌壞死性胰臟炎中使用預防性抗生素（大型雙盲隨機對照試驗已證實無益處）（選項 D 正確；選項 A、 B、 C 錯誤）。\n\n【教材出處】PDF 第 6 章，Q105。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 6,
        "question": 105,
        "type": "Case",
        "number": 11
      }
    },
    {
      "id": 23,
      "question": "【臨床案例】T.J. 是一名 27 歲男性，因酒精性急性胰臟炎合併呼吸衰竭、 SIRS 及血壓 100/55 mm Hg 入住 內科加護病房（medical intensive care unit, MICU）。腹部 CT 顯示嚴重胰臟炎約 30% 壞死合併大型局部積液並接受穿刺引流。引流液革蘭氏染色顯示多量革蘭氏陰性桿菌及酵母菌（yeast）。\n\n針對 T.J.，最適宜啟動下列哪一種抗微生物處方？",
      "options": [
        "A. 不使用 — 感染性胰臟炎懷疑度低。",
        "B. ciprofloxacin 加上 metronidazole。",
        "C. Imipenem。",
        "D. meropenem 加上 fluconazole。"
      ],
      "answer": "D",
      "explanation": "穿刺引流液革蘭氏染色已直接證實存在革蘭氏陰性桿菌與酵母菌，確立為感染性胰臟壞死 ／膿瘍。需要能良好穿透胰臟壞死組織的廣效碳青黴烯類（如 meropenem），並針對染色見到的酵母菌加入抗念珠菌藥物（如 fluconazole）（選項 D 正確；選項 B 與 C 未涵蓋黴菌；選項 A 錯誤）。\n\n【教材出處】PDF 第 6 章，Q106。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 6,
        "question": 106,
        "type": "Case",
        "number": 12
      }
    },
    {
      "id": 24,
      "question": "【臨床案例】K.L. 是一名 57 歲男性，因瀰漫性腹痛、體溫 101.9°F （38.8°C）、 白血球計數（white blood cell count, WBC） 27 × 10³ cells/mm³、心率 125 次 / 分及 平均動脈壓（mean arterial pressure, MAP） 57 mm Hg 入住 內科加護病房（medical intensive care unit, MICU）。腹部 CT 顯示大量腸道積氣提示腸阻塞（ileus）及中度結腸炎。病史顯示他近期剛完成 4 週骨髓炎廣效抗生素治療，高度懷疑 CDI。\n\n針對 K.L. 疑似之 CDI，哪一種經驗性處置處方最佳？",
      "options": [
        "A. metronidazole 500 mg 靜脈注射每 8 小時一次。",
        "B. vancomycin 500 mg 經口服 / 鼻胃管每 6 小時一次，加上 metronidazole 500 mg 靜脈注射每 8 小時一次，加上 vancomycin 500 mg 經直腸灌腸每 8 小時一次。",
        "C. metronidazole 500 mg 經口服 / 鼻胃管每 8 小時一次加上 vancomycin 250 mg 經口服 / 鼻胃管每 6 小時一次。",
        "D. vancomycin 250 mg 經口服 / 鼻胃管每 6 小時一次。"
      ],
      "answer": "B",
      "explanation": "此病人合併低血壓（MAP 57 mm Hg）及腸阻塞（ileus），符合 2017/2021 美國感染症醫學會（Infectious Diseases Society of America, IDSA）猛暴性 CDI （fulminant CDI）的定義。猛暴性 CDI 的標準處方為高劑量口服 / 經管灌 vancomycin （500 mg QID）加上靜脈注射 metronidazole （500 mg TID）。此外，由於合併腸阻塞導致經胃腸道給藥無法有效到達結腸，指引建議加用經直腸灌腸（intracolonic vancomycin 500 mg enema Q8H） （選項 B 正確；選項 A、 C、 D 劑量或途徑不足）。\n\n【教材出處】PDF 第 6 章，Q107。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 6,
        "question": 107,
        "type": "Case",
        "number": 13
      }
    },
    {
      "id": 25,
      "question": "【臨床案例】E.A. 是一名 79 歲男性，因重症肺炎入住 內科加護病房（medical intensive care unit, MICU）。在接受 5 天廣效抗生素治療後，出現多次水瀉（過去 24 小時糞便量約 1.6 L），低燒， 白血球計數（white blood cell count, WBC） 27 × 10³ cells/mm³，心率 124 次 / 分， 平均動脈壓（mean arterial pressure, MAP） 67 mm Hg，乳酸 1.6 mmol/L， 血清肌酸酐（serum creatinine, SCr） 1.5 mg/dL。已送檢糞便檢驗疑似 CDI。\n\n針對 E.A. 疑似之初發 CDI，最佳的經驗性處置處方為何？",
      "options": [
        "A. metronidazole 500 mg 靜脈注射每 8 小時一次加上直腸灌注 vancomycin 500 mg 每 8 小時一次。",
        "B. metronidazole 500 mg 靜脈注射每 8 小時一次。",
        "C. metronidazole 500 mg 經口 / 鼻胃管每 8 小時一次加上 vancomycin 125 mg 經口 / 鼻胃管每 6 小時一次。",
        "D. vancomycin 125 mg 經口服或鼻胃管給藥每 6 小時一次。"
      ],
      "answer": "D",
      "explanation": "此病人 白血球計數（white blood cell count, WBC） 27 × 10³ cells/mm³ （≥ 15 × 10³），符合「重度（severe） CDI 」標準，但 平均動脈壓（mean arterial pressure, MAP）穩定且乳酸正常，無休克或腸阻塞，非猛暴性（fulminant）。對於初發重度 CDI，口服 / 經管灌 vancomycin 125 mg QID 是標準且足夠的治療（若有 fidaxomicin 亦可）（選項 D 正確）。非猛暴性重度 CDI 不需要合併靜脈 metronidazole 或直腸灌腸（選項 A、 B、 C 錯誤）。\n\n【教材出處】PDF 第 6 章，Q108。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 6,
        "question": 108,
        "type": "Case",
        "number": 14
      }
    },
    {
      "id": 26,
      "question": "【臨床案例】R.J. 是一名 57 歲男性，因急性腸阻塞接受腸切除術後入住 外科加護病房（surgical intensive care unit, SICU）。術後第 3 天，出現心搏過速加重、尿量減少、體溫 102.9°F （39.4°C）、 白血球計數（white blood cell count, WBC） 18.2 × 10³ cells/mm³。腹部大型手術傷口劇烈疼痛但紅斑不明顯。拆開部分縫線擠出膿液，傷口周圍觸診有捻髮音（crepitus）。緊急送手術室探查，發現皮下壞死組織已侵犯筋膜需大量清創。\n\n針對 R.J.，下列哪一種經驗性抗微生物處方最為適當？",
      "options": [
        "A. Ceftaroline 加上 vancomycin。",
        "B. clindamycin、 penicillin G 加上 vancomycin。",
        "C. piperacillin/tazobactam、 clindamycin 加上 vancomycin。",
        "D. clindamycin 加上 linezolid。"
      ],
      "answer": "C",
      "explanation": "壞死性筋膜炎是危及生命的軟組織感染，術後通常為多重微生物混合感染（含好氧 / 厭氧革蘭氏陰性桿菌、腸球菌及 MRSA）。初始治療必須全面覆蓋：使用 vancomycin 涵蓋 抗 methicillin 金黃色葡萄球菌（methicillin-resistant Staphylococcus aureus, MRSA），廣效 β- 內醯胺類（如 piperacillin/tazobactam）涵蓋革蘭氏陰性菌與厭氧菌，並加上 clindamycin 以抑制化膿性鏈球菌（S. pyogenes）的細菌毒素生成（選項 C 正確；其他選項皆缺乏抗革蘭氏陰性菌或抑制毒素的效果）。\n\n【教材出處】PDF 第 6 章，Q109。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 6,
        "question": 109,
        "type": "Case",
        "number": 15
      }
    },
    {
      "id": 27,
      "question": "【臨床案例】R.J. 是一名 57 歲男性，因急性腸阻塞接受腸切除術後入住 外科加護病房（surgical intensive care unit, SICU）。術後第 3 天，出現心搏過速加重、尿量減少、體溫 102.9°F （39.4°C）、 白血球計數（white blood cell count, WBC） 18.2 × 10³ cells/mm³。腹部大型手術傷口劇烈疼痛但紅斑不明顯。拆開部分縫線擠出膿液，傷口周圍觸診有捻髮音（crepitus）。緊急送手術室探查，發現皮下壞死組織已侵犯筋膜需大量清創。 R.J. 第一次清創手術的術中組織培養革蘭氏染色顯示多量成鏈革蘭氏陽性球菌及中度非發酵革蘭氏陰性桿菌。\n\n考量革蘭氏染色高度懷疑 Streptococcus pyogenes，下列哪一項藥物處置對其壞死性筋膜炎最為適當？",
      "options": [
        "A. 加上具協同作用的 gentamicin。",
        "B. 繼續或開始使用輔助性 clindamycin 以抑制毒素生成。",
        "C. 確保處方中包含 vancomycin 以防範 S. pyogenes 抗藥性。",
        "D. 給予靜脈注射免疫球蛋白（IVIG）。"
      ],
      "answer": "B",
      "explanation": "S. pyogenes 產生的外毒素是造成組織廣泛壞死與中毒性休克的關鍵。 clindamycin 作為核糖體蛋白質合成抑制劑，能有效抑制毒素生成並降低壞死擴展（選項 B 正確）。 S. pyogenes 對青黴素普遍高度敏感，不需要 vancomycin 抵抗抗藥性（選項 C 錯誤）。無需常規加用 gentamicin （選項 A 錯誤）。 IVIG 在鏈球菌壞死性筋膜炎的研究結果不一致，未被指引列為常規推薦（選項 D 錯誤）。\n\n【教材出處】PDF 第 6 章，Q110。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 6,
        "question": 110,
        "type": "Case",
        "number": 16
      }
    },
    {
      "id": 28,
      "question": "【臨床案例】L.H. 是一名 23 歲女性，因單純性泌尿道感染服用 TMP/SMX 2 天後，因嚴重全身發炎反應與雙上臂及背部 30% TBSA 表皮脫落從外院轉入燒傷加護病房。入住燒傷加護病房後病灶進展至大腿與口腔， TBSA 達 40%，診斷為 TEN， SCORTEN 分數為 3 分。\n\n下列何者為最佳的初始藥物治療／介入措施？",
      "options": [
        "A. 晶體輸液復甦（Crystalloid resuscitation）。",
        "B. Cyclophosphamide。",
        "C. 使用 vancomycin 作為經驗性傷口預防。",
        "D. 高劑量全身性皮質類固醇。"
      ],
      "answer": "A",
      "explanation": "大面積 TEN 病人的首要急救原則與重度燒傷相同，首重以平衡晶體輸液進行積極且目標導向的輸液復甦，以維持生命徵象與組織灌流（選項 A 正確）。高劑量類固醇或 cyclophosphamide 證據薄弱且可能增加感染風險（選項 B 與 D 錯誤）。指引反對常規使用預防性抗生素（選項 C 錯誤）。\n\n【教材出處】PDF 第 6 章，Q111。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 6,
        "question": 111,
        "type": "Case",
        "number": 17
      }
    },
    {
      "id": 29,
      "question": "【臨床案例】L.H. 是一名 23 歲女性，因單純性泌尿道感染服用 TMP/SMX 2 天後，因嚴重全身發炎反應與雙上臂及背部 30% TBSA 表皮脫落從外院轉入燒傷加護病房。入住燒傷加護病房後病灶進展至大腿與口腔， TBSA 達 40%，診斷為 TEN， SCORTEN 分數為 3 分。 L.H. 病情持續惡化， TBSA 表皮脫落達 50%，口腔黏膜病變加重且急性腎損傷進行性惡化。醫療團隊考慮將 IVIG 作為下一個介入措施。\n\n下列何者最能描述 IVIG 在處置 TEN 中的實證角色？",
      "options": [
        "A. IVIG 應在病人進展為 TEN 之前即給予。",
        "B. IVIG 應保留於有跨專業共識指引的專科燒傷中心謹慎引導使用。",
        "C. 多中心關鍵試驗顯示 IVIG 對於有眼部侵犯的病人療效最佳。",
        "D. 統合分析證實 IVIG 是治療 TEN 的標準照護（standard of care）。"
      ],
      "answer": "B",
      "explanation": "IVIG 用於治療 SJS/TEN 的臨床實證極具爭議，各項臨床試驗與統合分析結果不一致，指引並未將其列為常規標準照護。對於這種罕見重症，指引建議應將 IVIG 保留由具備專門照護經驗的轉診燒傷中心，依據跨專業客觀評估之院內治療準則來指導使用（選項 B 正確；選項 A、 C、 D 錯誤）。\n\n【教材出處】PDF 第 6 章，Q112。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 6,
        "question": 112,
        "type": "Case",
        "number": 18
      }
    },
    {
      "id": 30,
      "question": "【臨床案例】T.Y. 是一名 32 歲女性，過去 72 小時出現類流感症狀，因嚴重疲倦、呼吸急促與寒顫就診急診。生命徵象：心率 120 次 / 分、 平均動脈壓（mean arterial pressure, MAP） 70 mm Hg、呼吸 24 次 / 分、體溫 102.7°F （39.3°C）、室內空氣 SaO₂ 85%。適逢流感季節高峰，急診已送檢流感快篩。隨後病人因嚴重呼吸衰竭插管並轉入 內科加護病房（medical intensive care unit, MICU）。\n\n除了針對 社區型肺炎（community-acquired pneumonia, CAP）的抗生素外，下一步最佳處置為何？",
      "options": [
        "A. 不使用；病人已超過有效治療流感的黃金時間窗。",
        "B. 在啟動流感特異性治療前，等待快速診斷測試結果。",
        "C. 給予 amantadine。",
        "D. 給予 oseltamivir。"
      ],
      "answer": "D",
      "explanation": "在流感流行季，對於疑似重症流感並併發重度呼吸衰竭入住 加護病房（intensive care unit, ICU）的病人，即使發病已超過 48 小時，研究顯示抗病毒治療仍可帶來臨床效益；且因重症進展快速，不應等待快篩結果，應立即啟動經驗性神經胺酸酶抑制劑（如 oseltamivir）治療（選項 D 正確；選項 A 與 B 錯誤）。 amantadine 對現代流感抗藥性極高（選項 C 錯誤）。\n\n【教材出處】PDF 第 6 章，Q113。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 6,
        "question": 113,
        "type": "Case",
        "number": 19
      }
    },
    {
      "id": 31,
      "question": "【臨床案例】G.L. 是一名 25 歲女性，於 2 月下旬因嚴重急性低血氧性呼吸衰竭插管入住 內科加護病房（medical intensive care unit, MICU）。 G.L. 呈現低血壓（輸液復甦後仍需 norepinephrine）並有急性腎損傷，正等待腎臟科評估 連續性腎臟替代治療（continuous renal replacement therapy, CRRT）。鼻咽沖洗液快篩提示 B 型流感。入住 加護病房（intensive care unit, ICU）時已放置鼻胃管。\n\n針對 G.L. 的嚴重流感，下列何者為最適當的治療？",
      "options": [
        "A. 經腸道給予 amantadine。",
        "B. 經腸道給予 oseltamivir。",
        "C. 吸入型 zanamivir。",
        "D. 靜脈注射 peramivir。"
      ],
      "answer": "B",
      "explanation": "對於插管重症病人併發 B 型流感，神經胺酸酶抑制劑是主要治療。已放置鼻胃管且可經腸道吸收時，腸道給予 oseltamivir 是首選治療方式（選項 B 正確）。 amantadine 對 B 型流感完全無活性（選項 A 錯誤）。吸入型 zanamivir 無法經呼吸器迴路給予且可能引起氣道痙攣（選項 C 錯誤）。 Peramivir 在插管合併嚴重併發症的臨床數據有限（選項 D 次選）。\n\n【教材出處】PDF 第 6 章，Q114。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 6,
        "question": 114,
        "type": "Case",
        "number": 20
      }
    },
    {
      "id": 32,
      "question": "【臨床案例】S.B. 是一名 48 歲重度肥胖合併心臟病女性，因急性難治性低血氧呼吸衰竭於外院緊急插管，轉入 內科加護病房（medical intensive care unit, MICU）評估靜脈 - 靜脈 體外膜氧合（extracorporeal membrane oxygenation, ECMO）。 S.B. 開始使用 dexamethasone 6 mg 靜脈給藥（intravenous, IV）每日一次（once daily, QD），並使用深層鎮靜與連續肌鬆劑，且需使用 norepinephrine 維持 平均動脈壓（mean arterial pressure, MAP） > 65 mm Hg。團隊考慮使用 remdesivir （院內存量充足）。\n\n下列何者最符合現行指引對需要機械通氣（MV）的 COVID-19 病人使用 remdesivir 的建議？",
      "options": [
        "A. 已被證實能降低院內死亡率。",
        "B. 因安全疑慮而不推薦使用。",
        "C. 推薦用於縮短臨床康復時間。",
        "D. 對臨床康復與死亡率的效益不明確（Uncertain benefit on clinical recovery and mortality）。"
      ],
      "answer": "D",
      "explanation": "根據大型臨床試驗（如 ACTT-1、 WHO SOLIDARITY）， remdesivir 對於已進展至需要高流量氧氣、侵入性機械通氣（MV）或 體外膜氧合（extracorporeal membrane oxygenation, ECMO）的極重症 COVID-19 次族群，並未顯示出顯著的縮短康復時間或降低死亡率益處。因此 NIH 等權威指引認為其在此族群的臨床效益不明確，不特別推薦或反對（若插管前已開始使用則可繼續完成療程）（選項 D 正確；選項 A、 B、 C 錯誤）。\n\n【教材出處】PDF 第 6 章，Q115。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 6,
        "question": 115,
        "type": "Case",
        "number": 21
      }
    }
  ],
  "7": [
    {
      "id": 1,
      "question": "一名 56 歲男性（體重 140 kg）預計接受常規冠狀動脈繞道手術合併主動脈瓣生物瓣膜置換術。病人有糖尿病與高血壓病史，無藥物過敏史，計算之 肌酸酐清除率（creatinine clearance, CrCl）為 90 mL/min/1.73 m²。預計術後轉入心臟外科加護病房並留置兩根胸管引流。下列哪一種抗微生物預防處方對此病人最為適當？",
      "options": [
        "A. cefazolin 2 g 於手術劃刀前 2 小時內給予一次，並每 8 小時給予一次直到胸管拔除。",
        "B. vancomycin 2 g 於手術劃刀前 2 小時內給予一次，並每 12 小時給予一次直到術後 48 小時。",
        "C. cefazolin 3 g 於手術劃刀前 1 小時內給予一次，若手術時間超過 4 小時則追加追加劑量，並於術後持續給予 48 小時。",
        "D. cefazolin 2 g 於手術前 1 小時內給予一次，若手術時間超過 4 小時則追加劑量，並於術後持續給予 48 小時。"
      ],
      "answer": "C",
      "explanation": "對於無 β- 內醯胺類過敏且接受心臟手術的病人，預防性抗生素首選為頭孢菌素（如 cefazolin）。病人體重大於 120 kg （本案為 140 kg），因此初始預防劑量需調升至 3 g （選項 C 正確；選項 D 錯誤）。 cefazolin 應於劃刀前 60 分鐘內給予，並於每隔兩個半衰期（約 4 小時）追加劑量。心臟手術預防抗生素可持續給予至術後 48 小時（非心臟手術則為 24 小時）。胸管留置並非延長使用預防性抗生素的適應症（選項 A 錯誤）。 vancomycin 僅保留用於有 β- 內醯胺嚴重過敏或已知 抗 methicillin 金黃色葡萄球菌（methicillin-resistant Staphylococcus aureus, MRSA）移生之病人（選項 B 錯誤）。\n\n【教材出處】PDF 第 7 章，Q116。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 7,
        "question": 116,
        "type": "SAQ",
        "number": 1
      }
    },
    {
      "id": 2,
      "question": "下列哪一項敘述最能描述加護病房（intensive care unit, ICU）中的抗微生物藥物管理（Antimicrobial Stewardship）？",
      "options": [
        "A. 正式的抗微生物藥物管理團隊成員，應僅保留給受過感染專科訓練的臨床藥師。",
        "B. 抗生素輪替（Antibiotic cycling）有助於減少抗微生物藥物的抗藥性。",
        "C. 重症藥師的日常臨床活動本身即可構成抗微生物藥物管理的工作。",
        "D. 重症病人不應實施抗微生物藥物管理，因為限制抗生素選擇可能會使預後惡化。"
      ],
      "answer": "C",
      "explanation": "重症藥師日常執行的臨床介入（如依器官功能最佳化劑量、監測 PK/PD、評估微生物報告及推動及早抗生素降階或停藥）本身即是實踐抗微生物藥物管理的重要作為（選項 C 正確）。臨床實務中並非所有醫院都有感染專科藥師，重症藥師的角色更形關鍵（選項 A 錯誤）。實證顯示抗生素輪替並無法有效降低抗藥性（選項 B 錯誤）。多項研究證實，在 加護病房（intensive care unit, ICU）實施抗微生物藥物管理不會增加死亡率，反而能減少藥物不良反應、毒性與抗藥性菌株篩選（選項 D 錯誤）。\n\n【教材出處】PDF 第 7 章，Q117。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 7,
        "question": 117,
        "type": "SAQ",
        "number": 2
      }
    },
    {
      "id": 3,
      "question": "一名 33 歲女性幼年起即因水腦症留置腦室腹腔引流管（VP shunt），現因體溫 102.8°F （39.3°C）、意識改變與白血球 19 × 10³ cells/mm³ 就診。頭部 CT 無水腦或中線位移。腰椎穿刺腦脊髓液（CSF）顯示白血球顯著升高以嗜中性球為主，葡萄糖降低。神經外科會診懷疑為腦脊髓液分流管感染。下列哪一種經驗性全身抗生素處方最為適當？",
      "options": [
        "A. ceftriaxone 加上 ampicillin。",
        "B. ceftriaxone 加上 vancomycin。",
        "C. piperacillin/tazobactam 加上 tobramycin。",
        "D. cefepime 加上 vancomycin。"
      ],
      "answer": "D",
      "explanation": "此病人屬於醫療照護 / 裝置相關的中樞神經系統感染（health care-associated/shunt infection）。最常見的致病原為葡萄球菌（MRSA 及 CoNS，如表皮葡萄球菌）與院內革蘭氏陰性桿菌（包括綠膿桿菌 P. aeruginosa）。經驗性全身治療必須涵蓋這些致病菌並具良好 CSF 穿透性，首選為 vancomycin 加上抗綠膿桿菌頭孢菌素（cefepime）（選項 D 正確）。 ceftriaxone 無法涵蓋綠膿桿菌（選項 A 與 B 錯誤）。 piperacillin/tazobactam 中的 tazobactam 穿透 CSF 濃度極低，不建議用於腦膜炎治療（選項 C 錯誤）。\n\n【教材出處】PDF 第 7 章，Q118。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 7,
        "question": 118,
        "type": "SAQ",
        "number": 3
      }
    },
    {
      "id": 4,
      "question": "一名 75 歲男性因敗血性休克自急診入住 內科加護病房（medical intensive care unit, MICU），經輸液復甦並經驗性給予 piperacillin/tazobactam 與 vancomycin。第 2 天病人仍血流動力學不穩定需 norepinephrine。微生物實驗室使用奈米粒子微陣列快速分子檢測，報告血液培養長出帶有 CTX-M 抗藥基因的 Escherichia coli。針對此病人的抗微生物治療，哪一項介入最為適當？",
      "options": [
        "A. 將 piperacillin/tazobactam 改為 cefepime。",
        "B. 在目前的處方中加上 tobramycin。",
        "C. 在目前的處方中加上 levofloxacin。",
        "D. 將 piperacillin/tazobactam 改為 meropenem。"
      ],
      "answer": "D",
      "explanation": "CTX-M 基因是超廣效 β- 內醯胺酶（ESBL）最具代表性的基因型。 MERINO 臨床試驗明確證實，在 ESBL 引起之嚴重血流感染中，使用 piperacillin/tazobactam 的死亡率顯著高於碳青黴烯類。對於血流動力學不穩定的敗血性休克病人，碳青黴烯類（如 meropenem）是治療 ESBL 菌血症的首選與黃金標準（選項 D 正確）。 cefepime 容易受接種效應與高抗藥性影響（選項 A 錯誤）。 ESBL 質體常同時攜帶多重抗藥基因，隨意加用胺基糖苷類或氟喹諾酮類並非適當處置（選項 B 與 C 錯誤）。\n\n【教材出處】PDF 第 7 章，Q119。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 7,
        "question": 119,
        "type": "SAQ",
        "number": 4
      }
    },
    {
      "id": 5,
      "question": "一名 81 歲男性因疑似導管相關敗血症入住 內科加護病房（medical intensive care unit, MICU）。血液培養長出全感受性的 Enterobacter cloacae。病人接受靜脈注射 ceftriaxone 治療並拔除導管。病人初期反應良好，但治療第 10 天再度發燒，新血液培養革蘭氏染色顯示乳糖陽性革蘭氏陰性桿菌。針對此病人的抗生素處置，下列哪一項行動最為適當？",
      "options": [
        "A. 將 ceftriaxone 改為 ceftazidime。",
        "B. 將 ceftriaxone 改為 piperacillin/tazobactam。",
        "C. 將 ceftriaxone 改為 meropenem。",
        "D. 繼續單獨使用 ceftriaxone。"
      ],
      "answer": "C",
      "explanation": "Enterobacter cloacae 屬於染色體攜帶誘發型 AmpC β-lactamase 的腸內菌。使用三代頭孢菌素（如 ceftriaxone）治療時，極易篩選出高量穩定產酶之去抑制變異株（derepressed mutants），導致三代頭孢菌素、廣效青黴素均發生繼發性抗藥性及治療失敗。此時應立即改用對 AmpC 水解高度穩定的碳青黴烯類（如 meropenem）（選項 C 正確；選項 A、 B 與 D 錯誤）。\n\n【教材出處】PDF 第 7 章，Q120。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 7,
        "question": 120,
        "type": "SAQ",
        "number": 5
      }
    },
    {
      "id": 6,
      "question": "一名 86 歲末期腎病（ESRD）女性因呼吸衰竭插管住院， BAL 培養長出 抗 methicillin 金黃色葡萄球菌（methicillin-resistant Staphylococcus aureus, MRSA），接受靜脈注射 vancomycin 治療。治療第 4 天病人發燒、白血球升高，透析導管出口處發紅，導管被拔除。新送檢血液培養革蘭氏染色顯示成對與成鏈革蘭氏陽性球菌。醫療團隊停用 vancomycin 並向您諮詢治療選項。下列哪一種藥物對此病人最為適當？",
      "options": [
        "A. Daptomycin。",
        "B. linezolid。",
        "C. Ceftaroline。",
        "D. Tigecycline。"
      ],
      "answer": "B",
      "explanation": "病人原本患有證實之 抗 methicillin 金黃色葡萄球菌（methicillin-resistant Staphylococcus aureus, MRSA）肺炎，且在 vancomycin 治療下出現新的菌血症（懷疑 Enterococcus spp.，可能為 VRE）。因此新藥物必須能同時治療 MRSA 肺炎與萬古黴素抗藥性腸球菌（VRE）。 linezolid 肺部穿透性優異，且對 MRSA 與 VRE （包括 E. faecium 及 E. faecalis）皆具良好活性（選項 B 正確）。 Daptomycin 會被肺泡界面活性劑（surfactant）破壞去活化，絕對禁用於肺炎治療（選項 A 錯誤）。 Ceftaroline 僅涵蓋 vancomycin 感受性腸球菌，對 VRE 無效（選項 C 錯誤）。 Tigecycline 在血液中濃度過低，不適合作為菌血症的主要治療（選項 D 錯誤）。\n\n【教材出處】PDF 第 7 章，Q121。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 7,
        "question": 121,
        "type": "SAQ",
        "number": 6
      }
    },
    {
      "id": 7,
      "question": "一名 35 歲男性因呼吸窘迫入住 內科加護病房（medical intensive care unit, MICU），咳嗽與肋膜性胸痛病史已 3 週，胸部 X 光顯示雙側毛玻璃樣浸潤。病人為 HIV 陽性且未規則服藥，需插管並使用 FiO₂ 40%。檢驗： CD4 100/mm³、 LDH 550 IU/L、 PaO₂ 80 mm Hg、 白血球計數（white blood cell count, WBC） 4 × 10³ cells/mm³。病人有磺胺類藥物過敏史及 G6PD 缺乏症。除了輔助性類固醇外，針對疑似肺囊蟲肺炎（PCP）的最適當處方為何？",
      "options": [
        "A. Trimethoprim/sulfamethoxazole 15–20 mg/kg 靜脈注射，分每 6 小時一次。",
        "B. 單獨使用 Pentamidine 4 mg/kg 靜脈注射每 24 小時一次。",
        "C. 單獨使用 Primaquine 30 mg 口服每日一次加上 clindamycin 600 mg 靜脈注射每 8 小時一次。",
        "D. Atovaquone 750 mg 口服每 12 小時一次。"
      ],
      "answer": "B",
      "explanation": "病人臨床呈現重度肺囊蟲肺炎（PCP）。首選治療通常為 TMP/SMX，但病人有磺胺過敏而無法使用（選項 A 錯誤）。根據 HIV 伺機性感染指引，嚴重 PCP 在無法使用 TMP/SMX 時的替代首選為靜脈注射 pentamidine （選項 B 正確）。 Primaquine 禁用於 G6PD 缺乏症病人，因其可誘發急性溶血（選項 C 錯誤）。 Atovaquone 口服生體可用率不穩定，僅適用於輕中度感染（選項 D 錯誤）。\n\n【教材出處】PDF 第 7 章，Q122。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 7,
        "question": 122,
        "type": "SAQ",
        "number": 7
      }
    },
    {
      "id": 8,
      "question": "一名 50 歲患有急性骨髓性白血病（AML）的女性在接受引導化療期間出現呼吸窘迫入住 內科加護病房（medical intensive care unit, MICU），診斷為嗜中性球低下性發燒（febrile neutropenia），經驗性使用 meropenem 加上 gentamicin 及 vancomycin。治療第 5 天，血液培養長出全感受性的 大腸桿菌（E. coli）。生命徵象：血壓 115/70 mm Hg、心率 84 次 / 分、體溫 101.2°F （38.4°C），絕對嗜中性球計數（ANC）小於 50 cells/mm³。下列哪一項抗微生物處方對此病人最為適當？",
      "options": [
        "A. 繼續使用 meropenem、 gentamicin 及 vancomycin 共 14 天。",
        "B. 停用所有經驗性抗生素，改以靜脈注射 ampicillin 治療直到嗜中性球恢復。",
        "C. 停用 vancomycin，並繼續使用 meropenem 與 gentamicin 直到嗜中性球恢復。",
        "D. 加上 voriconazole，並繼續所有其他抗微生物藥物共 14 天。"
      ],
      "answer": "B",
      "explanation": "在嗜中性球低下性發燒中，一旦確認致病原，應根據藥敏結果將抗微生物治療降階至最窄抗菌譜的有效藥物（此處 E. coli 為 pan-sensitive， ampicillin 具感受性）。指引建議治療應持續至少 14 天且持續至嗜中性球計數恢復（ANC > 500 cells/mm³） （選項 B 正確）。對於病情穩定的病人，無持續使用三聯廣效抗生素的必要（選項 A 與 C 錯誤）。目前無侵襲性黴菌感染證據，暫不需常規加用 voriconazole （選項 D 錯誤）。\n\n【教材出處】PDF 第 7 章，Q123。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 7,
        "question": 123,
        "type": "SAQ",
        "number": 8
      }
    },
    {
      "id": 9,
      "question": "【臨床案例】C.L 是一名 55 歲男性，因十二指腸穿孔與腹膜炎接受剖腹探查術後轉入 外科加護病房（surgical intensive care unit, SICU），術後留置導尿管。在 SICU 第 4 天病人拔管並拔除導尿管。在第 6 天，病人出現發燒、頻尿與尿急等 UTI 症狀。尿液分析未見亞硝酸鹽或白血球酯酶，但尿液培養長出 100,000 CFU/mL 的 大腸桿菌（E. coli）。品管人員請您確認此案例是否符合 CDC 的 CAUTI 定義。\n\n關於此病人 CAUTI 診斷的敘述，下列何者最為適當？",
      "options": [
        "A. 符合 CAUTI 定義，因為病人有臨床症狀且培養呈陽性。",
        "B. 不符合 CAUTI 定義，因為病人的尿液常規分析為陰性。",
        "C. 符合 CAUTI 定義，因為病人有症狀且近期曾留置導尿管。",
        "D. 不符合 CAUTI 定義，因為導尿管在症狀出現前 2 天即已拔除。"
      ],
      "answer": "D",
      "explanation": "根據美國 CDC/NHSN 最新定義， CAUTI 定義為留置導尿管超過 2 天，且在「事件發生當日」或「事件發生前一天（拔除後 24 小時內）」仍留置導尿管所發生的 UTI。本案病人在第 4 天拔除導尿管，直到第 6 天才出現症狀（拔管後已滿 48 小時以上），因此在監測定義上不符合 CAUTI （選項 D 正確；選項 A、 B 與 C 錯誤）。\n\n【教材出處】PDF 第 7 章，Q124。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 7,
        "question": 124,
        "type": "Case",
        "number": 1
      }
    },
    {
      "id": 10,
      "question": "【臨床案例】H.K. 是一名 42 歲女性，因意識改變、嗜睡與體溫 102.9°F （39.4°C）由丈夫送至急診室。 24 小時前曾嚴重頭痛。臨床高度懷疑細菌性腦膜炎。執行腰椎穿刺時注意到初壓極高。\n\n針對 H.K.，初始最佳的介入措施為何？",
      "options": [
        "A. 靜脈注射 dexamethasone 0.15 mg/kg。",
        "B. 等待實驗室與微生物分析結果。",
        "C. 啟動經驗性 ceftriaxone 與 vancomycin。",
        "D. 啟動經驗性 ampicillin、 cefepime 與 vancomycin。"
      ],
      "answer": "A",
      "explanation": "此病人年齡 42 歲且無神經外科手術史，呈現典型社區型細菌性腦膜炎（最常見為 S. pneumoniae）。 美國感染症醫學會（Infectious Diseases Society of America, IDSA）指引指出，輔助性皮質類固醇（dexamethasone 0.15 mg/kg）能顯著降低肺炎鏈球菌腦膜炎的死亡率與神經後遺症，但其關鍵在於必須在第一劑抗生素給予前 10–20 分鐘給藥（或至少與抗生素同時給予）；若在抗生素給予後才給類固醇則效益喪失（選項 A 正確）。不可延遲抗生素治療等待培養（選項 B 錯誤）。雖然需要 ceftriaxone 與 vancomycin，但時序上類固醇應先於或併同抗生素給予（選項 C 與 D 順序不完全最佳）。\n\n【教材出處】PDF 第 7 章，Q125。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 7,
        "question": 125,
        "type": "Case",
        "number": 2
      }
    },
    {
      "id": 11,
      "question": "【臨床案例】一名 54 歲男性因急性壞死性胰臟炎入住 內科加護病房（medical intensive care unit, MICU），併發感染性胰臟膿瘍，接受 meropenem 與 vancomycin 治療 1 週。隨後出現發燒、白血球增多、血流動力學不穩定及寡尿。經驗性加上 caspofungin。血液培養初步呈酵母菌陽性。該院備有 PNA FISH 檢測技術，在治療第 2 天將酵母菌鑑定為 近平滑念珠菌（Candida parapsilosis）。病人仍血流動力學不穩定。\n\n針對此病人的抗黴菌治療，下列哪一項選擇最為適當？",
      "options": [
        "A. 在黴菌藥敏報告確認前，繼續使用 caspofungin。",
        "B. 改為 voriconazole 6 mg/kg 每 12 小時一次。",
        "C. 改為微脂體 amphotericin 5 mg/kg/day。",
        "D. 改為靜脈注射 fluconazole 400 mg 每日一次。"
      ],
      "answer": "D",
      "explanation": "近平滑念珠菌（Candida parapsilosis）對棘白菌素類（echinocandins，如 caspofungin）具有天然較高的 最低抑菌濃度（minimum inhibitory concentration, MIC），且曾有使用棘白菌素類治療期間發生突破性感染的報告。 美國感染症醫學會（Infectious Diseases Society of America, IDSA）侵襲性念珠菌指引明確建議，一旦分離或鑑定出 近平滑念珠菌（C. parapsilosis），首選治療藥物為 fluconazole （選項 D 正確；選項 A 錯誤）。 voriconazole 與 amphotericin 抗菌譜過廣且毒性較大，非首選（選項 B 與 C 錯誤）。\n\n【校對註】上列答案 D 依 PDF 保留。2016 IDSA 指引並未建議僅因鑑定為 Candida parapsilosis 就一律改用 fluconazole；應評估藥物感受性、臨床穩定度及追蹤血液培養，符合條件後再降階治療。參考：https://www.idsociety.org/practice-guideline/candidiasis/\n\n【教材出處】PDF 第 7 章，Q126。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 7,
        "question": 126,
        "type": "Case",
        "number": 3
      }
    },
    {
      "id": 12,
      "question": "【臨床案例】一名 64 歲女性因疑似社區型肺炎入住 內科加護病房（medical intensive care unit, MICU），啟動 ceftriaxone 與 azithromycin 治療。胸部 X 光顯示局部浸潤。入院時呼吸急促（呼吸 33 次 / 分）、血壓 90/50 mm Hg、心率 101 次 / 分、 白血球計數（white blood cell count, WBC） 18 × 10³ cells/mm³、乳酸 4.2 mmol/L。入院抽取的降鈣素原（procalcitonin, PCT）於抗生素治療 12 小時後出爐，數值為 0.1 mcg/L。\n\n考量該 降鈣素原（procalcitonin, PCT）結果，下列哪一項處置最為適當？",
      "options": [
        "A. 繼續使用目前所有的抗生素（Continue all current antibiotics）。",
        "B. 停用所有抗生素。",
        "C. 將抗生素升階至 piperacillin/tazobactam。",
        "D. 僅停用 ceftriaxone。"
      ],
      "answer": "A",
      "explanation": "生物標記（procalcitonin, PCT）必須結合臨床整體表現判讀。此病人呈現嚴重的全身發炎反應、低血壓、呼吸衰竭及嚴重組織低灌流（乳酸高達 4.2 mmol/L），具有明確的重症感染臨床徵象。在急性重症感染初期，單一次偏低的 降鈣素原（procalcitonin, PCT）絕不可作為停用抗生素的依據，必須繼續完成涵蓋最可能社區致病原的抗生素療程（選項 A 正確；選項 B、 C、 D 錯誤）。\n\n【教材出處】PDF 第 7 章，Q127。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 7,
        "question": 127,
        "type": "Case",
        "number": 4
      }
    },
    {
      "id": 13,
      "question": "【臨床案例】一名 74 歲男性在接受常規髖關節置換術後入住 外科加護病房（surgical intensive care unit, SICU），術後因 慢性阻塞性肺病（chronic obstructive pulmonary disease, COPD）無法拔管。隨後病人出現感染徵象（血壓 94/55 mm Hg、心率 114 次 / 分、體溫 38.8°C、 WBC 18 × 10³ cells/mm³、乳酸 3.2 mmol/L），經驗性給予 piperacillin/tazobactam 與 vancomycin。尿液培養長出 大腸桿菌（E. coli），拔除導尿管並停用 vancomycin。第 3 天藥敏報告顯示為 ESBL 大腸桿菌（E. coli），其數值為： piperacillin/tazobactam < 2 mcg/mL （S）、 cefepime 4 mcg/mL （SDD）、 imipenem 0.5 mcg/mL （S）、 ciprofloxacin 0.25 mcg/mL （S）。目前病人體溫正常、 白血球計數（white blood cell count, WBC） 9 × 10³ cells/mm³，生命徵象穩定改善。\n\n下列哪一種抗生素處置最為適當？",
      "options": [
        "A. 將 piperacillin/tazobactam 改為 imipenem。",
        "B. 單獨繼續使用 piperacillin/tazobactam。",
        "C. 將 piperacillin/tazobactam 改為 cefepime。",
        "D. 在 piperacillin/tazobactam 基礎上加上 ciprofloxacin。"
      ],
      "answer": "B",
      "explanation": "此病人為導尿管拔除後的單純泌尿道感染（UTI），且在 piperacillin/tazobactam 治療下臨床症狀已完全緩解（發燒與白血球皆恢復正常），且體外試驗顯示對 piperacillin/tazobactam 具感受性（MIC < 2 mcg/mL）。在感染源已移除、低菌量且臨床反應良好的 UTI 中，繼續使用目前有效的 piperacillin/tazobactam 即可，有助於保護碳青黴烯類以落實管理（選項 B 正確；選項 A 錯誤）。 cefepime 最低抑菌濃度（minimum inhibitory concentration, MIC）為 4 mcg/mL 屬於抗藥性考量（選項 C 錯誤）。病人已好轉，無需合併用藥（選項 D 錯誤）。\n\n【教材出處】PDF 第 7 章，Q128。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 7,
        "question": 128,
        "type": "Case",
        "number": 5
      }
    },
    {
      "id": 14,
      "question": "【臨床案例】一名 72 歲末期腎病女性因敗血症入住 內科加護病房（medical intensive care unit, MICU），血液培養長出革蘭氏陽性球菌，開始使用 vancomycin 並拔除透析導管。第 4 天確認為 抗 methicillin 金黃色葡萄球菌（methicillin-resistant Staphylococcus aureus, MRSA），藥敏顯示： oxacillin > 4 mcg/mL （R）、 vancomycin 2 mcg/mL （S）、 daptomycin 0.5 mcg/mL （S）、 linezolid 1 mcg/mL （S）。心臟超音波發現僧帽瓣贅生物，診斷為心內膜炎，需抗生素治療 4–6 週。追蹤血液培養已無細菌生長，病人臨床症狀好轉、體溫正常、乳酸 1.1 mmol/L。\n\n下列何者為最恰當的治療處方？",
      "options": [
        "A. 將 vancomycin 改為 linezolid 600 mg 每 12 小時一次。",
        "B. 在 vancomycin 基礎上加上 gentamicin 與 rifampin。",
        "C. 將 vancomycin 改為 daptomycin 6 mg/kg 每 48 小時一次。",
        "D. 繼續使用 vancomycin，並以波谷濃度 15–20 mcg/mL （或 AUC 400–600）為目標。"
      ],
      "answer": "D",
      "explanation": "根據 美國感染症醫學會（Infectious Diseases Society of America, IDSA）抗 methicillin 金黃色葡萄球菌（methicillin-resistant Staphylococcus aureus, MRSA）指引，當分離株之 vancomycin 最低抑菌濃度（minimum inhibitory concentration, MIC） ≤ 2 mcg/mL 時，臨床治療決策應依病人的實際臨床反應決定，而非單純因 MIC 為 2 而盲目換藥。此病人臨床反應良好且血液培養已清除轉陰，應繼續使用 vancomycin 治療（選項 D 正確）。 linezolid 為抑菌性藥物，禁用於心內膜炎（選項 A 錯誤）。原發性自體瓣膜心內膜炎不建議常規加用 gentamicin/rifampin （選項 B 錯誤）。目前臨床反應良好，暫不需升階至 daptomycin （選項 C 錯誤）。\n\n【教材出處】PDF 第 7 章，Q129。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 7,
        "question": 129,
        "type": "Case",
        "number": 6
      }
    },
    {
      "id": 15,
      "question": "【臨床案例】一名 46 歲男性因糖尿病酮酸中毒（DKA）入住 內科加護病房（medical intensive care unit, MICU）。病人有第一型糖尿病、 HIV 陽性及隱球菌腦膜炎（cryptococcal meningitis）病史，規律服用 HAART。 CD4 計數為 85 cells/mm³。 DKA 控制良好準備轉出 加護病房（intensive care unit, ICU）。出院前注意到他目前未接受任何伺機性感染（OI）的預防投藥。\n\n下列哪一種預防性處方對此病人最為適當？",
      "options": [
        "A. azithromycin 1200 mg 每週一次加上 TMP/SMX 雙倍劑量（DS）錠每週三次。",
        "B. fluconazole 200 mg 每日一次加上 TMP/SMX 雙倍劑量（DS）錠每日一次。",
        "C. azithromycin 1200 mg 每週一次加上 fluconazole 200 mg 每日一次。",
        "D. fluconazole 200 mg 每日一次加上 TMP/SMX 雙倍劑量（DS）錠每週三次。"
      ],
      "answer": "B",
      "explanation": "此病人的 CD4 計數為 85 cells/mm³ （< 100 cells/mm³），且有隱球菌腦膜炎病史。因此需要涵蓋： （1）肺囊蟲肺炎（PCP， CD4 < 200）、 （2）弓漿蟲症（Toxoplasmosis， CD4 < 100），以及（3）隱球菌腦膜炎的次級預防。 TMP/SMX 1 DS 每日一次是預防 PCP 與弓漿蟲症的首選方案； fluconazole 200 mg 每日一次（once daily, QD）是隱球菌的維持次級預防（選項 B 正確）。 MAC 預防僅在 CD4 < 50 且未接受有效 HAART 時才考慮，故不需 azithromycin （選項 A 與 C 錯誤）。每週三次的 TMP/SMX 對預防弓漿蟲症效果不如每日一次（選項 D 錯誤）。\n\n【教材出處】PDF 第 7 章，Q130。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 7,
        "question": 130,
        "type": "Case",
        "number": 7
      }
    },
    {
      "id": 16,
      "question": "【臨床案例】一名 66 歲女性因脫水與急性腎損傷入住 內科加護病房（medical intensive care unit, MICU）。近期接受異體骨髓移植尚未植入成功，全血球低下已 12 天。在 加護病房（intensive care unit, ICU）第 5 天因急性呼吸窘迫插管， BAL 培養長出 Aspergillus fumigatus，診斷為侵襲性肺麴菌病（invasive pulmonary aspergillosis）。用藥包括 tacrolimus、類固醇與 fluconazole 預防。檢驗： 白血球計數（white blood cell count, WBC） 0.2 × 10³ cells/mm³， 血清肌酸酐（serum creatinine, SCr） 3.4 mg/dL， 肌酸酐清除率（creatinine clearance, CrCl） < 50 mL/min/1.73 m²。\n\n下列哪一種抗黴菌治療最為適當？",
      "options": [
        "A. amphotericin 50 mg 靜脈注射每日一次。",
        "B. Isavuconazole 負荷劑量，隨後 200 mg 靜脈注射每日一次。",
        "C. caspofungin 負荷劑量，隨後 50 mg 靜脈注射每日一次。",
        "D. voriconazole 負荷劑量，隨後 300 mg 靜脈注射每 12 小時一次。"
      ],
      "answer": "B",
      "explanation": "侵襲性麴菌病的首選藥物通常為 voriconazole。然而，其靜脈注射劑型含有賦形劑 cyclodextrin，在 肌酸酐清除率（creatinine clearance, CrCl） < 50 mL/min 時會蓄積具潛在毒性，仿單列為禁忌（選項 D 錯誤）。 Isavuconazole 是新型三唑類抗黴菌藥，經臨床試驗證實療效不劣於 voriconazole，且水溶性良好無需 cyclodextrin 助溶，在腎功能不全病人中可安全使用（選項 B 正確）。傳統 amphotericin B 腎毒性極大（選項 A 錯誤）。棘白菌素類非麴菌病首選（選項 C 錯誤）。\n\n【教材出處】PDF 第 7 章，Q131。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 7,
        "question": 131,
        "type": "Case",
        "number": 8
      }
    }
  ],
  "8": [
    {
      "id": 1,
      "question": "【臨床案例】J.H. 是一名 30 歲男性，因敗血性休克入住 加護病房（intensive care unit, ICU）。他最初接受 30 mL/kg sodium chloride 溶液進行靜脈輸液復甦，隨後因脈壓變異度（pulse pressure variation）需要給予更多輸液。儘管使用 enoxaparin 30 mg 皮下注射每 12 小時一次進行預防， J.H. 仍發生了近端深部靜脈血栓（proximal DVT）。\n\n下列哪一種藥物動力學（pharmacokinetics, PK）改變最可能導致此治療失敗？",
      "options": [
        "A. 因分佈體積（Vd）減少導致抗第十凝血因子（anti-Xa）活性降低。",
        "B. 因吸收減少（decreased absorption）導致抗第十凝血因子（anti-Xa）活性降低。",
        "C. 因肝臟代謝減少導致抗第十凝血因子活性增加。",
        "D. 因腎臟排除減少導致抗第十凝血因子活性增加。"
      ],
      "answer": "B",
      "explanation": "重症病人在接受大量輸液復甦後，液體大量重新分佈至血管外間質組織造成全身性水腫。研究證實水腫的重症外傷或敗血症病人，皮下微循環血流灌注受損，導致皮下注射低分子量 heparin（如 enoxaparin）的吸收顯著減少，血中 anti-Xa 活性低於預防濃度而導致血栓發生（選項 B 正確）。大量輸液會使親水性藥物的 Vd 增加而非減少（選項 A 錯誤）。 enoxaparin 不經由肝臟代謝（選項 C 錯誤）。腎排除減少會增加活性，與治療失敗（血栓形成）相反（選項 D 錯誤）。\n\n【教材出處】PDF 第 8 章，Q132。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 8,
        "question": 132,
        "type": "SAQ",
        "number": 1
      }
    },
    {
      "id": 2,
      "question": "【臨床案例】E.W. 是一名 48 歲男性（體重 85 kg），因機車車禍入住外傷 加護病房（intensive care unit, ICU）。診斷包括創傷性腦損傷（TBI；頭部 CT 顯示顱骨凹陷性骨折、額葉蜘蛛膜下腔出血及右腦實質出血）、右髖臼骨折、雙側肋骨骨折及腹部創傷。腹部 CT 顯示數處漿膜撕裂傷而接受剖腹探查術。術後 24 小時內接受 5 L sodium chloride 溶液復甦，並維持禁食（NPO）。肺動脈導管數值：心臟指數 4.2 L/min/m²、肺動脈楔壓 16 mm Hg。用藥包含 fentanyl 75 mcg/h、 propofol 15 mcg/kg/min、 pantoprazole 40 mg 靜脈給藥（intravenous, IV） Q24H、 enoxaparin 30 mg SC Q12H 及 phenytoin 150 mg 靜脈給藥（intravenous, IV） Q8H。\n\n下列哪一組因素最能準確評估經腸道給藥之藥物吸收減少的危險因子？",
      "options": [
        "A. 腸道萎縮、 pantoprazole 治療、腹部手術。",
        "B. 創傷性腦損傷（traumatic brain injury, TBI）、 fentanyl 治療、心輸出量。",
        "C. 腹部手術、 pantoprazole 治療、 創傷性腦損傷（traumatic brain injury, TBI）。",
        "D. 腸道萎縮、心輸出量、 fentanyl 治療。"
      ],
      "answer": "C",
      "explanation": "文獻證實會直接改變腸道吸收的三個關鍵因素為： （1）腹部手術（直接破壞解剖結構與腸道功能）、 （2）抗分泌劑如 pantoprazole 治療（提高胃內 pH 值，直接干擾需酸性環境溶解吸收之藥物），以及（3）創傷性腦損傷（TBI，與嚴重的胃排空延遲及腸道蠕動障礙顯著相關）（選項 C 正確）。腸道萎縮在缺乏實證直接支持下不作為吸收評估指標；而心輸出量上升與吸收的關聯尚未被證實。\n\n【教材出處】PDF 第 8 章，Q133。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 8,
        "question": 133,
        "type": "SAQ",
        "number": 2
      }
    },
    {
      "id": 3,
      "question": "【臨床案例】E.W. 是一名 48 歲男性（體重 85 kg），因機車車禍入住外傷 加護病房（intensive care unit, ICU）。診斷包括創傷性腦損傷（TBI；頭部 CT 顯示顱骨凹陷性骨折、額葉蜘蛛膜下腔出血及右腦實質出血）、右髖臼骨折、雙側肋骨骨折及腹部創傷。腹部 CT 顯示數處漿膜撕裂傷而接受剖腹探查術。術後 24 小時內接受 5 L sodium chloride 溶液復甦，並維持禁食（NPO）。肺動脈導管數值：心臟指數 4.2 L/min/m²、肺動脈楔壓 16 mm Hg。用藥包含 fentanyl 75 mcg/h、 propofol 15 mcg/kg/min、 pantoprazole 40 mg 靜脈給藥（intravenous, IV） Q24H、 enoxaparin 30 mg SC Q12H 及 phenytoin 150 mg 靜脈給藥（intravenous, IV） Q8H。\n\n在 E.W. 入住 加護病房（intensive care unit, ICU）前，其白蛋白濃度為 3.8 g/dL，但術後降至 2.1 g/dL。考量此白蛋白變化， propofol 的總濃度（total concentration）與未結合游離濃度（unbound concentration）最可能出現何種變化？",
      "options": [
        "A. 總濃度增加，未結合濃度降低。",
        "B. 總濃度不變，未結合濃度增加（No change in total concentration, increased unbound concentration）。",
        "C. 總濃度增加，未結合濃度不變。",
        "D. 總濃度降低，未結合濃度增加。"
      ],
      "answer": "B",
      "explanation": "propofol 是高肝臟萃取率藥物（high extraction ratio drug, ER > 0.7），其清除率主要取決於肝臟血流量 Q （CLH ≈ Q）。對於高萃取率藥物：總濃度 Css = Dose / Q，因此不受白蛋白或游離分率（fu）變化的影響，保持不變；而游離未結合濃度 Cssu = （fu × Dose） / Q，當白蛋白下降導致游離分率 fu 增加時，未結合濃度 Cssu 會隨之增加（選項 B 正確；選項 A、 C、 D 錯誤）。\n\n【教材出處】PDF 第 8 章，Q134。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 8,
        "question": 134,
        "type": "SAQ",
        "number": 3
      }
    },
    {
      "id": 4,
      "question": "【臨床案例】E.W. 是一名 48 歲男性（體重 85 kg），因機車車禍入住外傷 加護病房（intensive care unit, ICU）。診斷包括創傷性腦損傷（TBI；頭部 CT 顯示顱骨凹陷性骨折、額葉蜘蛛膜下腔出血及右腦實質出血）、右髖臼骨折、雙側肋骨骨折及腹部創傷。腹部 CT 顯示數處漿膜撕裂傷而接受剖腹探查術。術後 24 小時內接受 5 L sodium chloride 溶液復甦，並維持禁食（NPO）。肺動脈導管數值：心臟指數 4.2 L/min/m²、肺動脈楔壓 16 mm Hg。用藥包含 fentanyl 75 mcg/h、 propofol 15 mcg/kg/min、 pantoprazole 40 mg 靜脈給藥（intravenous, IV） Q24H、 enoxaparin 30 mg SC Q12H 及 phenytoin 150 mg 靜脈給藥（intravenous, IV） Q8H。 在術後第 3 天， E.W. 的 血清肌酸酐（serum creatinine, SCr）上升至 3 mg/dL；術後第 4 天為 3.2 mg/dL。\n\n在評估腎功能以決定 E.W. 的藥物劑量調整時，下列哪一項變數最為重要？",
      "options": [
        "A. 血中尿素氮（blood urea nitrogen, BUN）/血清肌酸酐（serum creatinine, SCr）比值。",
        "B. 每日總尿量（Total daily urinary output）。",
        "C. 腎絲球過濾率估計值（Estimation of GFR）。",
        "D. 慢性腎臟病（CKD）病史。"
      ],
      "answer": "C",
      "explanation": "KDIGO 指引臨床更新明確指出，在為急性腎損傷（acute kidney injury, AKI）重症病人調整藥物劑量時，最重要的關鍵因素是必須具備至少一項腎絲球過濾率估計值（eGFR 或計算之 CrCl）（選項 C 正確）。 血中尿素氮（blood urea nitrogen, BUN）/血清肌酸酐（serum creatinine, SCr）比值僅提示容積狀態（選項 A 錯誤）；每日總尿量可用於 急性腎損傷（acute kidney injury, AKI）分期與診斷，但不能直接用來精確計算藥物清除率與調整劑量（選項 B 錯誤）； CKD 病史僅供參考基準，無法反映急性變化（選項 D 錯誤）。\n\n【教材出處】PDF 第 8 章，Q135。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 8,
        "question": 135,
        "type": "SAQ",
        "number": 4
      }
    },
    {
      "id": 5,
      "question": "【臨床案例】S.H. 是一名 35 歲男性（體重 85 kg），因院內型肺炎繼發敗血症入住 內科加護病房（medical intensive care unit, MICU）。經驗性給予間歇性 vancomycin、 piperacillin/tazobactam 與 ciprofloxacin。檢驗： 血清肌酸酐（serum creatinine, SCr） 1 mg/dL、 血中尿素氮（blood urea nitrogen, BUN） 12 mg/dL、 白血球計數（white blood cell count, WBC） 18 × 10³ cells/mm³。\n\n根據 S.H. 預期的 藥物動力學（pharmacokinetics, PK）改變與指引建議，下列哪一個靜脈注射 vancomycin 負荷劑量（loading dose）最為適當？",
      "options": [
        "A. 1000 mg。",
        "B. 1500 mg。",
        "C. 2500 mg。",
        "D. 3500 mg。"
      ],
      "answer": "C",
      "explanation": "2020 年 美國衛生系統藥師學會（American Society of Health-System Pharmacists, ASHP）/美國感染症醫學會（Infectious Diseases Society of America, IDSA） vancomycin 治療監測共識指引建議，嚴重感染重症病人之 vancomycin 初始負荷劑量為依實際體重計算 20–35 mg/kg （上限通常為 3000 mg）。 S.H. 體重 85 kg，其建議負荷劑量為 1700–2975 mg。選項中 2500 mg （約 29.4 mg/kg）剛好落在建議範圍高標，能迅速克服重症毛細血管滲漏導致之高分佈體積，達到目標血中濃度（選項 C 正確；選項 A、 B 不足；選項 D 過量）。\n\n【教材出處】PDF 第 8 章，Q136。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 8,
        "question": 136,
        "type": "SAQ",
        "number": 5
      }
    },
    {
      "id": 6,
      "question": "【臨床案例】S.H. 是一名 35 歲男性（體重 85 kg），因院內型肺炎繼發敗血症入住 內科加護病房（medical intensive care unit, MICU）。經驗性給予間歇性 vancomycin、 piperacillin/tazobactam 與 ciprofloxacin。檢驗： 血清肌酸酐（serum creatinine, SCr） 1 mg/dL、 血中尿素氮（blood urea nitrogen, BUN） 12 mg/dL、 白血球計數（white blood cell count, WBC） 18 × 10³ cells/mm³。 S.H. 確診為 抗 methicillin 金黃色葡萄球菌（methicillin-resistant Staphylococcus aureus, MRSA）院內型肺炎。在 vancomycin 治療第 10 天，相同劑量下測得之 濃度時間曲線下面積（area under the concentration-time curve, AUC）升至 700 mg·h/L （先前 AUC 為 425 mg·h/L）。\n\n下列何者最可能解釋此血中暴露量升高的現象？",
      "options": [
        "A. 擴增性腎清除率（ARC）恢復至正常（Augmented renal excretion returned to normal）。",
        "B. 分佈體積（Vd）增加至大於正常。",
        "C. 組織穿透力下降至低於正常。",
        "D. 肝臟血流量恢復正常。"
      ],
      "answer": "A",
      "explanation": "年齡小於 50 歲的年輕重症創傷或敗血症病人，在發病初期極易出現擴增性腎清除率（ARC），使 vancomycin 等水溶性藥物由腎臟超量排除，導致初期需要較高劑量才能達標（425 mg·h/L）。 ARC 通常在第 7 天左右逐漸消退並恢復至正常腎功能。當第 10 天 ARC 恢復至正常腎清除率時，藥物排除速率變慢，在維持原高劑量下 濃度時間曲線下面積（area under the concentration-time curve, AUC）便會顯著上升至 700 mg·h/L （選項 A 正確；選項 B 會使濃度降低； vancomycin 不經肝代謝，選項 D 錯誤）。\n\n【教材出處】PDF 第 8 章，Q137。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 8,
        "question": 137,
        "type": "SAQ",
        "number": 6
      }
    },
    {
      "id": 7,
      "question": "B.B. 是一名 40 歲女性，因綠膿桿菌（Pseudomonas aeruginosa）引起的手術部位感染接受治療。她開始接受 piperacillin/tazobactam 3.375 g 每 8 小時一次以延長輸注 4 小時（extended infusion）給予。此種延長輸注方式最可能的臨床獲益為何？",
      "options": [
        "A. 前瞻性對照試驗支持能降低死亡率。",
        "B. 前瞻性對照試驗支持能降低神經毒性。",
        "C. 回溯性文獻回顧支持能降低死亡率（Decreased mortality supported by retrospective reviews）。",
        "D. 回溯性文獻回顧支持能降低神經毒性。"
      ],
      "answer": "C",
      "explanation": "β- 內醯胺類抗生素為時間依賴型殺菌藥物（PK/PD 目標為 %fT > MIC）。將 piperacillin/tazobactam 採用延長輸注（例如 3–4 小時輸注），回溯性世代研究與多項觀察性統合分析顯示能顯著改善臨床治癒率並降低重症病人的死亡率（選項 C 正確）。然而，大型前瞻性隨機對照試驗（如 BLING II 試驗）在死亡率上顯示出混合且未達統計顯著的結果（選項 A 錯誤）。\n\n【教材出處】PDF 第 8 章，Q138。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 8,
        "question": 138,
        "type": "SAQ",
        "number": 7
      }
    },
    {
      "id": 8,
      "question": "C.W. 是一名 52 歲男性，因急性呼吸衰竭入住 加護病房（intensive care unit, ICU），常規給予口服 morphine 止痛。下列哪一項 藥物動力學（pharmacokinetics, PK）變數最可能直接影響 morphine 的肝臟代謝？",
      "options": [
        "A. α₁- 酸性糖蛋白（AAG）增加。",
        "B. 白蛋白減少。",
        "C. 肝臟血流量增加（Increased hepatic blood flow）。",
        "D. 內生性清除率（intrinsic clearance）增加。"
      ],
      "answer": "C",
      "explanation": "morphine 屬於典型的高肝臟萃取率藥物（high extraction ratio drug, ER > 0.7），其肝臟清除率 CLH 主要且直接受限於肝臟血流量 Q （CLH ≈ Q）。因此肝臟血流量的改變最能直接影響 morphine 的體內代謝排除（選項 C 正確）。高萃取率藥物的全身代謝排除對蛋白質結合率（白蛋白、 AAG）與內生性清除率的變化相對不敏感（選項 A、 B、 D 錯誤）。\n\n【教材出處】PDF 第 8 章，Q139。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 8,
        "question": 139,
        "type": "SAQ",
        "number": 8
      }
    },
    {
      "id": 9,
      "question": "【臨床案例】M.J. 是一名 70 歲男性，因動脈瘤性蜘蛛膜下腔出血入住神經外科 加護病房（intensive care unit, ICU），接受腦室外引流管（EVD）置放。隨後體溫 101.5°F， 白血球計數（white blood cell count, WBC） 15 × 10³ cells/mm³， CSF 培養長出 抗 methicillin 金黃色葡萄球菌（methicillin-resistant Staphylococcus aureus, MRSA）。給予腦室內注射 vancomycin 20 mg 治療。\n\n採取此種腦室內給藥途徑（intraventricular）的最佳理由為何？",
      "options": [
        "A. 已被證實臨床療效優於靜脈注射抗生素。",
        "B. 最大化局部的抗生素濃度（Maximizing localized antibiotic concentrations）。",
        "C. 屬於更安全的給藥途徑。",
        "D. 降低 vancomycin 的耳毒性。"
      ],
      "answer": "B",
      "explanation": "vancomycin 等親水性大分子藥物穿透血腦屏障（BBB）進入腦室 CSF 的比例有限。透過腦室內直接給藥，主要目的在於使中樞感染局部的抗生素濃度達到遠高於致病菌 最低抑菌濃度（minimum inhibitory concentration, MIC）的殺菌濃度（選項 B 正確）。腦室內給藥尚未有大型前瞻試驗證實優越性（選項 A 錯誤），且屬於侵入性操作有出血與感染風險（選項 C 與 D 錯誤）。\n\n【教材出處】PDF 第 8 章，Q140。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 8,
        "question": 140,
        "type": "Case",
        "number": 1
      }
    },
    {
      "id": 10,
      "question": "【臨床案例】I.L. 是一名 32 歲男性，每日接受 esomeprazole 40 mg 靜脈注射進行壓力性潰瘍預防。\n\n繼發於胃內 pH 值上升，下列哪一種藥物最可能出現吸收增加（increased absorption）？",
      "options": [
        "A. Carvedilol。",
        "B. ciprofloxacin。",
        "C. diazepam。",
        "D. digoxin。"
      ],
      "answer": "D",
      "explanation": "文獻證實，當使用 PPI 提升胃內 pH 值時，會顯著增加 digoxin 與 nifedipine 的生體可用率與胃腸道吸收（選項 D 正確）。 Carvedilol、 ciprofloxacin 與 diazepam 則未被文獻證實會因胃酸抑制而增加吸收。\n\n【教材出處】PDF 第 8 章，Q141。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 8,
        "question": 141,
        "type": "Case",
        "number": 2
      }
    },
    {
      "id": 11,
      "question": "【臨床案例】R.H. 是一名 20 歲男性，因噁心嘔吐至急診就診。心率 130 次 / 分、血壓 98/62 mm Hg、呼吸 28 次 / 分。 動脈血液氣體分析（arterial blood gas, ABG）顯示 pH 7.11、 Pco₂ 18 mm Hg、 HCO₃ 5.2 mEq/L。檢驗： K 5 mEq/L、 血中尿素氮（blood urea nitrogen, BUN） 22 mg/dL、 血清肌酸酐（serum creatinine, SCr） 1.4 mg/dL、血糖 400 mg/dL （嚴重 DKA 代謝性酸中毒）。\n\n在此病人體內，像 ciprofloxacin 這類弱酸性藥物（weak acid）的分佈體積（Vd）最可能發生何種變化？",
      "options": [
        "A. 因解離度降低（decreased ionization）而增加。",
        "B. 因解離度增加而降低。",
        "C. 無變化，因為解離度未變。",
        "D. 因解離度降低而降低。"
      ],
      "answer": "A",
      "explanation": "弱酸性藥物在酸性環境中（病人血液 pH 7.11，呈嚴重酸血症），分子趨向非解離狀態（nonionized，未帶電）。非解離分子脂溶性較高，較容易穿透生物膜擴散進入組織細胞內，從而導致其分佈體積（Vd）增加（選項 A 正確；選項 B、 C、 D 錯誤）。\n\n【教材出處】PDF 第 8 章，Q142。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 8,
        "question": 142,
        "type": "Case",
        "number": 3
      }
    },
    {
      "id": 12,
      "question": "【臨床案例】B.B. 是一名 62 歲女性，因敗血性休克入住 加護病房（intensive care unit, ICU）。過去 24 小時內共接受了 6 L 晶體輸液復甦與維持液。\n\n下列哪一種抗生素的分佈體積（Vd）最「不容易」受到大量靜脈輸液的影響？",
      "options": [
        "A. tobramycin。",
        "B. Daptomycin。",
        "C. Levofloxacin。",
        "D. cefepime。"
      ],
      "answer": "C",
      "explanation": "Levofloxacin 屬於高度親脂性（lipophilic）藥物，本身即具備極大的體內分佈體積（Vd > 1–1.5 L/kg），細胞外間質液體的增加對其整體 Vd 影響微乎其微（選項 C 正確）。相對地， tobramycin、 daptomycin 與 cefepime 皆為親水性（hydrophilic）藥物，主要分佈於細胞外液，大量輸液會使其 Vd 顯著增大並稀釋血中濃度（選項 A、 B、 D 錯誤）。\n\n【教材出處】PDF 第 8 章，Q143。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 8,
        "question": 143,
        "type": "Case",
        "number": 4
      }
    },
    {
      "id": 13,
      "question": "【臨床案例】A.P. 是一名 35 歲女性，因氣喘急性惡化插管使用呼吸器，使用 morphine 輸注止痛。\n\n下列何者最能準確描述機械通氣對 morphine 游離濃度（unbound concentration, Cssu）的影響？",
      "options": [
        "A. 增加向肝臟的氧氣傳遞，並增加未結合濃度。",
        "B. 降低肝臟血流量並增加未結合濃度（Decreases hepatic blood flow and increases the unbound concentration）。",
        "C. 增加細胞激素生成並降低未結合濃度。",
        "D. 無法影響未結合濃度。"
      ],
      "answer": "B",
      "explanation": "morphine 是典型的高肝臟萃取率藥物（high ER drug）。陽壓機械通氣會增加胸內壓、減少靜脈回流、降低心輸出量並進而顯著減少肝臟血流量 Q。對於高萃取率藥物，游離未結合穩定濃度 Cssu = （fu × Dose） / Q，當肝血流 Q 減少時， Cssu 與總濃度皆會反比升高，可能導致鎮靜過度或毒性（選項 B 正確；選項 A、 C、 D 錯誤）。\n\n【教材出處】PDF 第 8 章，Q144。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 8,
        "question": 144,
        "type": "Case",
        "number": 5
      }
    },
    {
      "id": 14,
      "question": "【臨床案例】J.M. 是一名 34 歲女性，因新發敗血症入住 加護病房（intensive care unit, ICU），續用居家焦慮用藥 diazepam。經驗性使用 vancomycin、 piperacillin/tazobactam 及 fluconazole 400 mg 靜脈給藥（intravenous, IV） Q24H。\n\n您最預期在 J.M. 身上觀察到哪一種藥效學（pharmacodynamics, PD）反應？",
      "options": [
        "A. 因 diazepam 內生性清除率增加導致焦慮風險上升。",
        "B. 因 diazepam 內生性清除率下降導致鎮靜風險增加（Increased risk of sedation caused by a decreased intrinsic clearance）。",
        "C. 因 diazepam 游離分率降低導致焦慮風險上升。",
        "D. 因 diazepam 游離分率增加導致鎮靜風險增加。"
      ],
      "answer": "B",
      "explanation": "diazepam 是低肝臟萃取率藥物（low ER drug），主要由 CYP2C19 代謝。敗血症產生的全身發炎細胞激素會抑制 CYP 酵素活性，且併用的 fluconazole 是強效 CYP2C19 抑制劑，兩者共同導致 diazepam 的內生性清除率（CLint）大幅下降。對於低萃取率藥物，游離濃度 Cssu = Dose / CLint；當 CLint 下降時，游離未結合濃度顯著上升，直接導致鎮靜作用加深與鎮靜過度風險（選項 B 正確；選項 D 錯誤，因單純游離分率改變不影響低萃取率藥物的 Cssu）。\n\n【教材出處】PDF 第 8 章，Q145。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 8,
        "question": 145,
        "type": "Case",
        "number": 6
      }
    },
    {
      "id": 15,
      "question": "【臨床案例】P.M. 因外傷後癲癇使用 phenytoin 治療。實測總濃度為 8 mcg/mL。考量其低白蛋白血症（albumin 2.5 g/dL），利用公式校正後的濃度約為 13 mcg/mL。\n\n下列哪一種動力學關係最能解釋為何必須計算校正後的 phenytoin 總濃度？",
      "options": [
        "A. phenytoin 的 Cssu 因 fu 增加而增加。",
        "B. phenytoin 的 Css 因 fu 增加而增加。",
        "C. phenytoin 的 Cssu 因 fu 增加而減少。",
        "D. phenytoin 的 Css 因 fu 增加而降低（phenytoin Css is decreased because of an increase in fu）。"
      ],
      "answer": "D",
      "explanation": "phenytoin 屬於低肝臟萃取率且高度與白蛋白結合之藥物。對於低萃取率藥物：總濃度 Css = Dose / （fu × CLint），而真正具藥理作用的游離濃度 Cssu = Dose / CLint。當病人發生低白蛋白血症時，未結合分率（fu）增加，會促使肝臟代謝加速，使實測總濃度（Css）假性偏低，但體內具療效的游離濃度（Cssu）保持不變。因此臨床上必須校正總濃度以避免誤判為劑量不足（選項 D 正確；選項 A 與 C 錯誤，因 Cssu 不變）。\n\n【教材出處】PDF 第 8 章，Q146。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 8,
        "question": 146,
        "type": "Case",
        "number": 7
      }
    },
    {
      "id": 16,
      "question": "【臨床案例】C.P. 是一名 50 歲男性，因糖尿病酮酸中毒（DKA）入住 內科加護病房（medical intensive care unit, MICU）。嚴重低血容導致 急性腎損傷（acute kidney injury, AKI）， 血清肌酸酐（serum creatinine, SCr）達 2.8 mg/dL，血糖 350 mg/dL。病人開始接受連續靜脈 insulin 輸注以控制血糖。\n\n為 C.P. 調配 insulin 劑量時，下列哪一項因素最為重要？",
      "options": [
        "A. insulin 的腎臟代謝減少（Decreased renal metabolism of insulin）。",
        "B. insulin 的分佈體積增加。",
        "C. insulin 的肝臟代謝增加。",
        "D. insulin 受體結合力降低。"
      ],
      "answer": "A",
      "explanation": "腎臟在內生性及外源性 insulin 的清除與代謝中扮演關鍵角色（約占 insulin 代謝的 30%– 80%）。當病人發生 急性腎損傷（acute kidney injury, AKI）時，腎臟對 insulin 的代謝與清除能力大幅下降，導致 insulin 半衰期顯著延長並蓄積，極易引發嚴重低血糖。因此在 AKI 病人中調整 insulin 劑量時，腎臟代謝下降是最關鍵的考量因素（選項 A 正確；選項 B、 C、 D 錯誤）。\n\n【教材出處】PDF 第 8 章，Q147。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 8,
        "question": 147,
        "type": "Case",
        "number": 8
      }
    }
  ],
  "9": [
    {
      "id": 1,
      "question": "【臨床案例】E.R. 是一名 67 歲男性，數天前因急性呼吸衰竭入住 加護病房（intensive care unit, ICU），接受機械通氣並經驗性給予抗生素治療社區型肺炎。過去 5 天其腎功能持續惡化（入院時 SCr 0.6 mg/dL；今日為 2.4 mg/dL），目前需要連續性靜脈對靜脈血液過濾術（continuous venovenous hemofiltration, CVVH）進行腎臟替代治療（kidney replacement therapy, KRT）。他已拔管但仍不穩定。用藥包括 fentanyl、 norepinephrine、 ceftriaxone、 azithromycin 及 heparin 預防。\n\n在 E.R. 身上，哪一種藥物誘發性腎臟病（DIKD）表型與其抗生素處方最為相關？",
      "options": [
        "A. 急性腎損傷（Acute kidney injury, AKI） （急性間質性腎炎 [AIN]）。",
        "B. 腎絲球疾病（Glomerular disease）。",
        "C. 腎結石／結晶尿（Nephrolithiasis/crystalluria）。",
        "D. 腎小管功能障礙（Tubular dysfunction）。"
      ],
      "answer": "A",
      "explanation": "ceftriaxone 最常引起的藥物性腎損傷表型為急性間質性腎炎（AIN），在 DIKD 分類中歸屬於 急性腎損傷（acute kidney injury, AKI）表型（選項 A 正確）。 azithromycin 極少引起腎病變。雖然 AIN 在整體藥物性腎損傷中佔少數，但在確認的 AIN 案例中超過 75% 與藥物相關，頭孢菌素類為典型致病藥物之一。頭孢菌素通常不會引起腎絲球疾病、腎小管功能障礙或結晶尿（選項 B、 C、 D 錯誤）。\n\n【教材出處】PDF 第 9 章，Q148。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 9,
        "question": 148,
        "type": "SAQ",
        "number": 1
      }
    },
    {
      "id": 2,
      "question": "【臨床案例】E.R. 是一名 67 歲男性，數天前因急性呼吸衰竭入住 加護病房（intensive care unit, ICU），接受機械通氣並經驗性給予抗生素治療社區型肺炎。過去 5 天其腎功能持續惡化（入院時 SCr 0.6 mg/dL；今日為 2.4 mg/dL），目前需要連續性靜脈對靜脈血液過濾術（continuous venovenous hemofiltration, CVVH）進行腎臟替代治療（kidney replacement therapy, KRT）。他已拔管但仍不穩定。用藥包括 fentanyl、 norepinephrine、 ceftriaxone、 azithromycin 及 heparin 預防。\n\n哪一個 KDIGO 分期最能描述 E.R. 目前的 急性腎損傷（acute kidney injury, AKI）？",
      "options": [
        "A. 第 1 期（Stage 1）。",
        "B. 第 2 期（Stage 2）。",
        "C. 第 3 期（Stage 3）。",
        "D. 無法確定，因為未提供尿量（UOP）。"
      ],
      "answer": "C",
      "explanation": "E.R. 同時符合 KDIGO 第 3 期 急性腎損傷（acute kidney injury, AKI）的兩項標準： （1）血清肌酸酐自基準值 0.6 mg/dL 上升至 2.4 mg/dL （增加達 4 倍，大於等於基準值的 3 倍）； （2）開始接受連續性腎臟替代治療（KRT/CVVH）。只要符合肌酸酐或 腎臟替代治療（kidney replacement therapy, KRT）啟動標準即可直接確立為 Stage 3，無需額外尿量數據（選項 C 正確；選項 A、 B、 D 錯誤）。\n\n【教材出處】PDF 第 9 章，Q149。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 9,
        "question": 149,
        "type": "SAQ",
        "number": 2
      }
    },
    {
      "id": 3,
      "question": "【臨床案例】E.R. 是一名 67 歲男性，數天前因急性呼吸衰竭入住 加護病房（intensive care unit, ICU），接受機械通氣並經驗性給予抗生素治療社區型肺炎。過去 5 天其腎功能持續惡化（入院時 SCr 0.6 mg/dL；今日為 2.4 mg/dL），目前需要連續性靜脈對靜脈血液過濾術（continuous venovenous hemofiltration, CVVH）進行腎臟替代治療（kidney replacement therapy, KRT）。他已拔管但仍不穩定。用藥包括 fentanyl、 norepinephrine、 ceftriaxone、 azithromycin 及 heparin 預防。 E.R. 病情持續惡化，出現發燒與白血球升高。醫療團隊請您在其接受 連續性靜脈對靜脈血液過濾（continuous venovenous hemofiltration, CVVH）期間為其調整抗生素劑量。\n\n下列何者是開始尋找劑量建議的最佳出處？",
      "options": [
        "A. 間歇性血液透析（intermittent hemodialysis, IHD）指引。",
        "B. 藥品仿單（Package insert）。",
        "C. 原始文獻／專科劑量綜述指引（Primary literature / dosing summaries）。",
        "D. 使用預估篩過係數進行估算。"
      ],
      "answer": "C",
      "explanation": "藥廠在藥品上市時通常不需要在仿單中提供 連續性腎臟替代治療（continuous renal replacement therapy, CRRT）或 連續性靜脈對靜脈血液過濾（continuous venovenous hemofiltration, CVVH）的劑量建議（選項 B 錯誤）。 間歇性血液透析（intermittent hemodialysis, IHD）屬於間歇性高清除率，不能外推至連續性 腎臟替代治療（kidney replacement therapy, KRT） （選項 A 錯誤）。因此，查閱發表於同儕審查期刊的原始文獻或重症專科 CRRT 劑量綜述（如 KDIGO 臨床指引更新、相關專題回顧）是獲取準確劑量建議的最佳起點（選項 C 正確）。自行動力學公式估算僅在完全缺乏文獻時作為最後手段（選項 D 次選）。\n\n【教材出處】PDF 第 9 章，Q150。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 9,
        "question": 150,
        "type": "SAQ",
        "number": 3
      }
    },
    {
      "id": 4,
      "question": "下列何者最能描述在連續性靜脈對靜脈血液過濾術（continuous venovenous hemofiltration, CVVH）期間溶質清除（solute removal）的機轉？",
      "options": [
        "A. 對流作用（Convection）。",
        "B. 擴散作用（Diffusion）。",
        "C. 對流與擴散兩者兼具。",
        "D. 濾膜吸附（Membrane binding）。"
      ],
      "answer": "A",
      "explanation": "連續性靜脈對靜脈血液過濾（continuous venovenous hemofiltration, CVVH） （血液過濾）完全依賴跨膜壓差產生的「對流作用（convection） 」進行溶質清除，其利用溶質拖曳（solute drag）隨水分濾出，並依賴超過濾速率決定清除率（選項 A 正確）。「擴散作用（diffusion） 」 是血液透析（continuous venovenous hemodialysis, CVVHD）的主要清除機轉（選項 B 錯誤）。兩者兼具（convection + diffusion）是血液透析過濾術（continuous venovenous hemodiafiltration, CVVHDF）的特徵（選項 C 錯誤）。濾膜吸附並非主要溶質清除途徑（選項 D 錯誤）。\n\n【教材出處】PDF 第 9 章，Q151。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 9,
        "question": 151,
        "type": "SAQ",
        "number": 4
      }
    },
    {
      "id": 5,
      "question": "下列哪一種特性的藥物最容易透過連續性靜脈對靜脈血液透析（continuous venovenous hemodialysis, CVVHD）迴路被清除？",
      "options": [
        "A. 藥物 A：蛋白質結合率 10%、分子量 140 Da、分佈體積（Vd） 1.2 L/kg。",
        "B. 藥物 B：蛋白質結合率 90%、分子量 1030 Da、分佈體積 0.8 L/kg。",
        "C. 藥物 C：蛋白質結合率 40%、分子量 250 Da、分佈體積 1.5 L/kg。",
        "D. 藥物 D：蛋白質結合率 35%、分子量 480 Da、分佈體積 4.6 L/kg。"
      ],
      "answer": "A",
      "explanation": "連續性靜脈對靜脈血液透析（continuous venovenous hemodialysis, CVVHD）的溶質清除主要依賴跨膜濃度梯度的「擴散作用（diffusion） 」。最容易被擴散清除的藥物特徵為： （1）極低的蛋白質結合率（僅有游離藥物能穿透半透膜，藥物 A 游離分率高達 90%）、 （2）極小的分子量（< 500 Da，藥物 A 僅 140 Da，擴散速度最快）、以及（3）較適度的分佈體積。綜合評估，藥物 A 具備最低結合率與最小分子量，最容易被 CVVHD 清除（選項 A 正確；藥物 B 結合率高達 90% 且分子量過大；藥物 D 分佈體積過大且結合率高於 A）。\n\n【教材出處】PDF 第 9 章，Q152。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 9,
        "question": 152,
        "type": "SAQ",
        "number": 5
      }
    },
    {
      "id": 6,
      "question": "【臨床案例】F.B. 是一名 68 歲男性（體重 70 kg），因發燒、白血球升高、呼吸衰竭插管使用呼吸器並使用 norepinephrine 支持血壓入住 加護病房（intensive care unit, ICU）。病史包含慢性下背痛、糖尿病及高血壓，平時服用 enalapril、 glipizide 及 acetaminophen。 1 週前在門診血壓 140/80 mm Hg， HbA1c 5.2%，當時檢驗： 白血球計數（white blood cell count, WBC） 5.0 × 10³ cells/mm³、 血中尿素氮（blood urea nitrogen, BUN） 7 mg/dL、 血清肌酸酐（serum creatinine, SCr） 0.9 mg/dL。今日 WBC 24 × 10³ cells/mm³、 BUN 38 mg/dL、 SCr 3.2 mg/dL，過去 24 小時尿量僅 325 mL。\n\n下列何者最能準確描述 F.B. 目前的 急性腎損傷（acute kidney injury, AKI）？",
      "options": [
        "A. RIFLE 分類 R 級。",
        "B. AKIN 分期第 1 期。",
        "C. RIFLE 分類 F 級或 AKIN 分期第 3 期（RIFLE class F or AKIN stage 3）。",
        "D. RIFLE 分類 E 級或 AKIN 分期第 3 期。"
      ],
      "answer": "C",
      "explanation": "病人的 血清肌酸酐（serum creatinine, SCr）由 0.9 mg/dL 上升至 3.2 mg/dL （超過基準值的 3 倍），且 24 小時尿量為 325 mL （約 0.19 mL/kg/h，小於 0.3 mL/kg/h 超過 24 小時）。無論依據 SCr （≥ 3 倍）或尿量標準，皆同時符合 RIFLE 分類的「 Failure （F） 」級以及 AKIN 分期的「第 3 期（Stage 3） 」（選項 C 正確）。 RIFLE E 級定義為功能喪失超過 3 個月，此處為急性發作（選項 D 錯誤）。\n\n【教材出處】PDF 第 9 章，Q153。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 9,
        "question": 153,
        "type": "Case",
        "number": 1
      }
    },
    {
      "id": 7,
      "question": "【臨床案例】F.B. 是一名 68 歲男性（體重 70 kg），因發燒、白血球升高、呼吸衰竭插管使用呼吸器並使用 norepinephrine 支持血壓入住 加護病房（intensive care unit, ICU）。病史包含慢性下背痛、糖尿病及高血壓，平時服用 enalapril、 glipizide 及 acetaminophen。 1 週前在門診血壓 140/80 mm Hg， HbA1c 5.2%，當時檢驗： 白血球計數（white blood cell count, WBC） 5.0 × 10³ cells/mm³、 血中尿素氮（blood urea nitrogen, BUN） 7 mg/dL、 血清肌酸酐（serum creatinine, SCr） 0.9 mg/dL。今日 WBC 24 × 10³ cells/mm³、 BUN 38 mg/dL、 SCr 3.2 mg/dL，過去 24 小時尿量僅 325 mL。\n\n下列哪一種藥物最可能促成其 急性腎損傷（acute kidney injury, AKI）的發生？",
      "options": [
        "A. enalapril。",
        "B. glipizide。",
        "C. acetaminophen。",
        "D. enalapril 與 glipizide 可能性相同。"
      ],
      "answer": "A",
      "explanation": "此病人發生嚴重敗血症導致腎臟灌流不足。 enalapril 為 ACE 抑制劑，會阻斷血管張力素 II 引起的出球小動脈收縮，破壞腎絲球自我調節代償機轉，在低血壓休克狀態下直接導致腎絲球濾過壓劇降，加劇腎損傷（選項 A 正確）。 glipizide 與常規劑量 acetaminophen 不具有損害腎血流動力學的毒性（選項 B、 C、 D 錯誤）。\n\n【教材出處】PDF 第 9 章，Q154。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 9,
        "question": 154,
        "type": "Case",
        "number": 2
      }
    },
    {
      "id": 8,
      "question": "【臨床案例】F.B. 是一名 68 歲男性（體重 70 kg），因發燒、白血球升高、呼吸衰竭插管使用呼吸器並使用 norepinephrine 支持血壓入住 加護病房（intensive care unit, ICU）。病史包含慢性下背痛、糖尿病及高血壓，平時服用 enalapril、 glipizide 及 acetaminophen。 1 週前在門診血壓 140/80 mm Hg， HbA1c 5.2%，當時檢驗： 白血球計數（white blood cell count, WBC） 5.0 × 10³ cells/mm³、 血中尿素氮（blood urea nitrogen, BUN） 7 mg/dL、 血清肌酸酐（serum creatinine, SCr） 0.9 mg/dL。今日 WBC 24 × 10³ cells/mm³、 BUN 38 mg/dL、 SCr 3.2 mg/dL，過去 24 小時尿量僅 325 mL。\n\n在評估 F.B. 的 急性腎損傷（acute kidney injury, AKI）潛在病因時，考量或獲取下列哪一項額外資訊或檢驗最為重要？",
      "options": [
        "A. 腎功能惡化速度、症狀，以及並存疾病與近期用藥清單。",
        "B. 腎臟超音波評估，因為超音波能確定多數病人的 急性腎損傷（acute kidney injury, AKI）病因。",
        "C. 全面血液生化檢查，因為這很可能直接判定損傷病因。",
        "D. 進行腎臟切片檢查。"
      ],
      "answer": "A",
      "explanation": "目前沒有任何單一血液檢驗能直接診斷 急性腎損傷（acute kidney injury, AKI）病因。完整詳細的臨床病史、腎功能惡化速度、並存疾病及完整的新舊用藥回顧，是找出腎前性、腎實質性或藥物性腎損傷原因最關鍵且最具鑑別價值的步驟（選項 A 正確；選項 C 錯誤）。腎臟超音波主要用於排除腎後性阻塞（選項 B 錯誤）。急性期極少常規進行腎切片（選項 D 錯誤）。\n\n【教材出處】PDF 第 9 章，Q155。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 9,
        "question": 155,
        "type": "Case",
        "number": 3
      }
    },
    {
      "id": 9,
      "question": "【臨床案例】F.B. 是一名 68 歲男性（體重 70 kg），因發燒、白血球升高、呼吸衰竭插管使用呼吸器並使用 norepinephrine 支持血壓入住 加護病房（intensive care unit, ICU）。病史包含慢性下背痛、糖尿病及高血壓，平時服用 enalapril、 glipizide 及 acetaminophen。 1 週前在門診血壓 140/80 mm Hg， HbA1c 5.2%，當時檢驗： 白血球計數（white blood cell count, WBC） 5.0 × 10³ cells/mm³、 血中尿素氮（blood urea nitrogen, BUN） 7 mg/dL、 血清肌酸酐（serum creatinine, SCr） 0.9 mg/dL。今日 WBC 24 × 10³ cells/mm³、 BUN 38 mg/dL、 SCr 3.2 mg/dL，過去 24 小時尿量僅 325 mL。 醫療團隊判定 F.B. 需要接受腎臟替代治療（kidney replacement therapy, KRT）以處置體液過負荷並控制代謝異常。他目前仍持續輸注 norepinephrine，平均動脈壓（mean arterial pressure, MAP）為 65 mm Hg。\n\n最可能為 F.B. 選擇下列哪一種腎臟替代模式？",
      "options": [
        "A. 間歇性血液透析（intermittent hemodialysis, IHD）。",
        "B. 慢速低效每日透析（Slow-low EDD）。",
        "C. 連續性腎臟替代治療（Continuous KRT / CRRT）。",
        "D. 腹膜透析（Peritoneal dialysis）。"
      ],
      "answer": "C",
      "explanation": "對於血流動力學不穩定且需要升壓劑（如 norepinephrine）支持的重症病人，連續性腎臟替代治療（Continuous KRT，如 CVVH/CVVHD）是首選模式，因為其以緩慢速率持續排除水分與溶質，對心血管血流動力學衝擊最小（選項 C 正確）。 間歇性血液透析（intermittent hemodialysis, IHD）在重症病人中高達 20%–30% 會誘發透析中低血壓，可能加重器官缺血（選項 A 錯誤）。\n\n【教材出處】PDF 第 9 章，Q156。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 9,
        "question": 156,
        "type": "Case",
        "number": 4
      }
    },
    {
      "id": 10,
      "question": "【臨床案例】F.B. 是一名 68 歲男性（體重 70 kg），因發燒、白血球升高、呼吸衰竭插管使用呼吸器並使用 norepinephrine 支持血壓入住 加護病房（intensive care unit, ICU）。病史包含慢性下背痛、糖尿病及高血壓，平時服用 enalapril、 glipizide 及 acetaminophen。 1 週前在門診血壓 140/80 mm Hg， HbA1c 5.2%，當時檢驗： 白血球計數（white blood cell count, WBC） 5.0 × 10³ cells/mm³、 血中尿素氮（blood urea nitrogen, BUN） 7 mg/dL、 血清肌酸酐（serum creatinine, SCr） 0.9 mg/dL。今日 WBC 24 × 10³ cells/mm³、 BUN 38 mg/dL、 SCr 3.2 mg/dL，過去 24 小時尿量僅 325 mL。 醫療團隊判定 F.B. 需要接受腎臟替代治療（kidney replacement therapy, KRT）以處置體液過負荷並控制代謝異常。他目前仍持續輸注 norepinephrine，平均動脈壓（mean arterial pressure, MAP）為 65 mm Hg。 F.B. 將開始使用一種新型超廣效頭孢菌素，該藥在連續性 腎臟替代治療（kidney replacement therapy, KRT）下的文獻資訊有限。已知參數如下：分子量 480 Da、帶正電荷、 Vd 1.9 L/kg、蛋白質結合率 12%。\n\n估算該藥物在此病人連續性 腎臟替代治療（kidney replacement therapy, KRT）濾膜上的篩過係數（sieving coefficient, SC）最接近下列何者？",
      "options": [
        "A. 0。",
        "B. 0.52。",
        "C. 1.9。",
        "D. 0.88。"
      ],
      "answer": "D",
      "explanation": "在缺乏實測數據時，篩過係數（SC）可透過未結合游離分率估算： SC ≈ 1 − 蛋白質結合分率（fb）。此藥物的蛋白質結合率為 12% （fb = 0.12），因此 SC ≈ 1 − 0.12 = 0.88 （選項 D 正確；選項 A、 B、 C 錯誤）。 SC 的範圍介於 0 到 1 之間，不可大於 1。\n\n【教材出處】PDF 第 9 章，Q157。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 9,
        "question": 157,
        "type": "Case",
        "number": 5
      }
    },
    {
      "id": 11,
      "question": "【臨床案例】F.B. 是一名 68 歲男性（體重 70 kg），因發燒、白血球升高、呼吸衰竭插管使用呼吸器並使用 norepinephrine 支持血壓入住 加護病房（intensive care unit, ICU）。病史包含慢性下背痛、糖尿病及高血壓，平時服用 enalapril、 glipizide 及 acetaminophen。 1 週前在門診血壓 140/80 mm Hg， HbA1c 5.2%，當時檢驗： 白血球計數（white blood cell count, WBC） 5.0 × 10³ cells/mm³、 血中尿素氮（blood urea nitrogen, BUN） 7 mg/dL、 血清肌酸酐（serum creatinine, SCr） 0.9 mg/dL。今日 WBC 24 × 10³ cells/mm³、 BUN 38 mg/dL、 SCr 3.2 mg/dL，過去 24 小時尿量僅 325 mL。 醫療團隊判定 F.B. 需要接受腎臟替代治療（kidney replacement therapy, KRT）以處置體液過負荷並控制代謝異常。他目前仍持續輸注 norepinephrine，平均動脈壓（mean arterial pressure, MAP）為 65 mm Hg。 F.B. 將開始使用一種新型超廣效頭孢菌素，該藥在連續性 腎臟替代治療（kidney replacement therapy, KRT）下的文獻資訊有限。已知參數如下：分子量 480 Da、帶正電荷、 Vd 1.9 L/kg、蛋白質結合率 12%。 根據估算出的 SC （0.88），若處方設定為： 連續性靜脈對靜脈血液過濾（continuous venovenous hemofiltration, CVVH）模式、血流速度（Qb） 200 mL/min、超過濾速率（QUF） 2000 mL/h、 100% 稀釋前（pre-filter）補充液，並使用高通量高效率濾器。\n\n估算該新型頭孢菌素在連續性 腎臟替代治療（kidney replacement therapy, KRT）期間的清除率（clearance）最接近下列何者？",
      "options": [
        "A. 0.9 L/h。",
        "B. 1.5 L/h。",
        "C. 3.3 L/h。",
        "D. 5.3 L/h。"
      ],
      "answer": "B",
      "explanation": "當採用 100% 濾前稀釋（pre-dilution）時，進入濾器的血液被稀釋，清除率公式為： CL_CVVH = QUF × SC × [Qb / （Qb + Qrf）]。將單位統一為 L/h： QUF = 2 L/h、 SC = 0.88、 Qb = 200 mL/min = 12 L/h、 Qrf = 2000 mL/h = 2 L/h。計算： CL = 2 × 0.88 × [12 / （12 + 2）] = 1.76 × （12 / 14） = 1.76 × 0.857 ≈ 1.51 L/h，最接近 1.5 L/h （選項 B 正確；選項 A、 C、 D 錯誤）。\n\n【教材出處】PDF 第 9 章，Q158。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 9,
        "question": 158,
        "type": "Case",
        "number": 6
      }
    }
  ],
  "10": [
    {
      "id": 1,
      "question": "一名 56 歲女性因急性動脈瘤性蜘蛛膜下腔出血（subarachnoid hemorrhage, SAH）住院第 4 天。她意識清醒且能遵循指令。檢驗顯示血清鈉為 128 mmol/L，其他數值包括 K 3.9 mEq/L、 Cl 103 mEq/L、 HCO₃ 27 mEq/L、 血中尿素氮（blood urea nitrogen, BUN） 10 mg/dL、 血清肌酸酐（serum creatinine, SCr） 1.0 mg/dL。尿量為 1–2 mL/kg/h，過去 24 小時體液平衡為 +435 mL （目前以 125 mL/h 輸注 0.9% sodium chloride 溶液）。針對此病人的低血鈉症，下列哪一項是最佳的初始治療？",
      "options": [
        "A. 口服 tolvaptan 20 mg 每日一次。",
        "B. 以 125 mL/h 靜脈輸注 1.5% sodium chloride 溶液。",
        "C. 限制水分攝取至每日小於 1.5 L。",
        "D. 目前無需任何治療。"
      ],
      "answer": "B",
      "explanation": "在動脈瘤性 蜘蛛膜下腔出血（subarachnoid hemorrhage, SAH）發病後早期（前 2 週），維持正常體液容積（euvolemia）對於確保足夠的腦灌流壓（cerebral perfusion pressure, CPP）及預防腦血管痙攣（vasospasm）至關重要。嚴格限水或使用 vaptans （如 tolvaptan）排自由水容易導致低血容量，誘發腦血管痙攣與延遲性缺血，因而是禁忌（選項 A 與 C 錯誤）。低血鈉本身會加重腦水腫並增加顱內壓，不可不處理（選項 D 錯誤）。給予等張或微高張含鈉輸液（如 1.5% sodium chloride）既能安全提升血鈉，又能維持正常血管內容積，為最佳選擇（選項 B 正確）。\n\n【教材出處】PDF 第 10 章，Q159。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 10,
        "question": 159,
        "type": "SAQ",
        "number": 1
      }
    },
    {
      "id": 2,
      "question": "一名 27 歲女性因急性腦室腹腔引流管（VP shunt）功能衰竭合併感染住院，無重大病史與過敏史。腰椎穿刺 CSF 顯示 白血球計數（white blood cell count, WBC） 34 × 10³ cells/mm³、 RBC 1 × 10³ cells/mm³、蛋白質 78 mg/dL、葡萄糖 21 mg/dL。培養長出抗甲氧苯青黴素表皮葡萄球菌（MRSE）。引流管已外引流。儘管已接受靜脈注射 vancomycin 4 天（最近波谷濃度 17.7 mcg/mL）， CSF 仍持續長出 MRSE。針對此病人之難治性腦室炎（refractory ventriculitis），啟動下列哪一種腦室內抗微生物處方最為適當？",
      "options": [
        "A. 腦室內注射 vancomycin 10 mg 每日一次。",
        "B. 腦室內注射 gentamicin 5 mg 每日一次。",
        "C. 腦室內注射 ampicillin 50 mg 每日一次。",
        "D. 此病人不應給予任何腦室內抗微生物藥物。"
      ],
      "answer": "A",
      "explanation": "對於全身性靜脈抗生素治療無效的難治性人工植入物中樞感染， 美國感染症醫學會（Infectious Diseases Society of America, IDSA）指引建議可考慮輔助性腦室內（intraventricular）直接給予抗生素。 vancomycin 能有效涵蓋 MRSE，且腦室內給藥建議劑量為每日 10–20 mg （選項 A 正確）。 Gentamicin 單獨使用對葡萄球菌療效差且更易引起癲癇（選項 B 錯誤）。 β- 內醯胺類（包括 ampicillin）在腦室內具有強烈神經毒性與誘發難治癲癇風險，絕對禁用於中樞注射（選項 C 錯誤）。\n\n【教材出處】PDF 第 10 章，Q160。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 10,
        "question": 160,
        "type": "SAQ",
        "number": 2
      }
    },
    {
      "id": 3,
      "question": "一名 25 歲男性從梯子墜落（2 層樓高度）後送醫。初期頭部 CT 顯示右顳葉大型硬腦膜下血腫、顱骨骨折及左顳葉腦挫傷。復甦後昏迷指數（Glasgow Coma Scale, GCS）為 E1-M4-V1T。置入顱內壓（intracranial pressure, ICP）監視器，初壓為 32 mm Hg，腦灌流壓（cerebral perfusion pressure, CPP）為 53 mm Hg。檢驗： Na 141 mEq/L、 K 3.6 mEq/L、 血中尿素氮（blood urea nitrogen, BUN） 8 mg/dL、 血清肌酸酐（serum creatinine, SCr） 1.1 mg/dL、血糖 178 mg/dL、 pH 7.46、 Pco₂ 34 mm Hg。下列哪一項支持性照護議題與重度創傷性腦損傷（traumatic brain injury, TBI）病人的適當治療最為相關？",
      "options": [
        "A. 因重度 創傷性腦損傷（traumatic brain injury, TBI）的胃腸耐受性差，前 5–7 天應避免腸道營養。",
        "B. 將 腦灌流壓（cerebral perfusion pressure, CPP）維持在 60–70 mm Hg 以最佳化腦灌流並減少併發症（Maintain CPP at 60–70 mm Hg）。",
        "C. 給予 5% dextrose 或其他含糖靜脈輸液以補償病人增加的代謝需求。",
        "D. 受傷後 8 小時內啟動高劑量 methylprednisolone 治療以減輕腦水腫。"
      ],
      "answer": "B",
      "explanation": "根據腦外傷基金會（BTF）指引，重度 創傷性腦損傷（traumatic brain injury, TBI）病人的 腦灌流壓（cerebral perfusion pressure, CPP）目標應維持在 60–70 mm Hg 之間。低於 60 會造成腦缺血，高於 70 則顯著增加 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）與肺水腫風險（選項 B 正確）。儘管有胃蠕動障礙，早期腸道營養（48 小時內）能改善存活率，應儘快建立幽門後餵食而非避免餵食（選項 A 錯誤）。含游離水的 5% dextrose 輸液會惡化腦水腫，應絕對避免（選項 C 錯誤）。大型 CRASH 試驗證實高劑量 methylprednisolone 會顯著增加 TBI 病人的死亡率，指引列為強烈禁忌（選項 D 錯誤）。\n\n【教材出處】PDF 第 10 章，Q161。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 10,
        "question": 161,
        "type": "SAQ",
        "number": 3
      }
    },
    {
      "id": 4,
      "question": "一名 69 歲女性因出現找字困難與左上肢無力 30 分鐘至急診就診， NIHSS 分數為 13 分。頭部 CT 無急性出血。居家藥物包含 lisinopril、 carvedilol、 warfarin 及 atorvastatin。病史有高血壓、心房顫動及暫時性腦缺血（TIA）。檢驗： Na 145 mEq/L、 K 4.0 mEq/L、 血清肌酸酐（serum creatinine, SCr） 1.2 mg/dL、血糖 132 mg/dL、血小板 355,000/mm³、 國際標準化比值（international normalized ratio, INR） 1.5。生命徵象：血壓 167/98 mm Hg、心率 132 次 / 分、 SaO₂ 98%、呼吸 14 次 / 分。下列何者為此病人照護中最恰當的下一步？",
      "options": [
        "A. 口服給予 aspirin 324 mg × 1。",
        "B. 啟動靜脈注射 alteplase 0.9 mg/kg （10% 單次推注， 90% 輸注 60 分鐘，最大劑量 90 mg）。",
        "C. 啟動 nicardipine 將收縮壓降至 140 mm Hg 以下，隨後給予 alteplase。",
        "D. 靜脈注射給予 vitamin K 10 mg × 1。"
      ],
      "answer": "B",
      "explanation": "此病人處於急性缺血性中風黃金治療時間窗內（發病 30 分鐘 < 4.5 小時）。雖然病人平時服用 warfarin，但其入院實測 國際標準化比值（international normalized ratio, INR）為 1.5 （符合 ≤ 1.7 的溶栓安全標準）。此外，病人血壓為 167/98 mm Hg （已符合溶栓前 SBP < 185 且 DBP < 110 的標準，不需額外降壓至 140 以下）。病人無其他溶栓禁忌症，越早給予 alteplase 獲益越大（選項 B 正確；選項 C 錯誤）。 aspirin 應於溶栓後 24 小時後才開始使用（選項 A 錯誤）。此時並無顱內出血，無需以 vitamin K 逆轉抗凝血（選項 D 錯誤）。\n\n【教材出處】PDF 第 10 章，Q162。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 10,
        "question": 162,
        "type": "SAQ",
        "number": 4
      }
    },
    {
      "id": 5,
      "question": "一名 18 歲男性從樹上墜落後入住 加護病房（intensive care unit, ICU）。初評顯示 C3–C4 骨折脫位合併對應節段之不完全性脊髓損傷（SCI） （雙側保留部分感覺功能）。骨折已復位，受傷後 6 小時抵達 ICU。關於針對此病人之脊髓損傷啟動高劑量 methylprednisolone 治療，下列哪一項敘述最為適當？",
      "options": [
        "A. 可以使用，因為他屬於保留部分感覺功能的不完全性損傷。",
        "B. 應該使用，因為它能增強脊髓血流灌注。",
        "C. 不應使用，因為存在潛在不良反應且效益存疑（Should not be used because of potential adverse effects and questionable benefit）。",
        "D. 不應使用，因為病人已超過治療時間窗。"
      ],
      "answer": "C",
      "explanation": "針對急性脊髓損傷（SCI），神經外科指引（AANS/CNS）明確建議不推薦常規使用高劑量 methylprednisolone （NASCIS 方案）。臨床試驗與系統性回顧顯示其神經功能改善極為微弱且短暫，但胃腸道出血、嚴重感染及死亡等嚴重不良反應風險卻顯著增加（選項 C 正確；選項 A 與 B 錯誤）。雖然病人仍在 8 小時時間窗內，但基於風險效益比目前不予推薦（選項 D 錯誤）。\n\n【教材出處】PDF 第 10 章，Q163。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 10,
        "question": 163,
        "type": "SAQ",
        "number": 5
      }
    },
    {
      "id": 6,
      "question": "一名 27 歲女性因發燒、躁動、高血壓與肌肉僵直就醫。毒物篩檢呈陰性，疑似血清素症候群（serotonin syndrome）。哪一種居家藥物最可能是引起血清素症候群的致病藥物？",
      "options": [
        "A. Buspirone。",
        "B. Levetiracetam。",
        "C. Cyproheptadine。",
        "D. Bupropion。"
      ],
      "answer": "A",
      "explanation": "Buspirone 是一種 5-HT1A 血清素受體部分促效劑，具有增加中樞神經系統血清素作用的活性，是引發血清素症候群的已知致病藥物之一（選項 A 正確）。 Levetiracetam 不具血清素能作用（選項 B 錯誤）。 Cyproheptadine 是一種 5-HT2A 拮抗劑，是用於「治療」血清素症候群的解毒抗劑（選項 C 錯誤）。 Bupropion 主要為 dopamine 與 norepinephrine 再吸收抑制劑，非典型的血清素症候群誘發劑（選項 D 錯誤）。\n\n【教材出處】PDF 第 10 章，Q164。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 10,
        "question": 164,
        "type": "SAQ",
        "number": 6
      }
    },
    {
      "id": 7,
      "question": "一名 58 歲女性因 Hunt-Hess 第 4 級 蜘蛛膜下腔出血（subarachnoid hemorrhage, SAH）入住 加護病房（intensive care unit, ICU）第 6 天。用藥包含 0.9% 食鹽水 100 mL/h、 nimodipine 60 mg Q4H、 norepinephrine 0.05 mcg/kg/min。檢驗： Na 144 mEq/L、 K 4.1 mEq/L、 血清肌酸酐（serum creatinine, SCr） 0.6 mg/dL、血清滲透壓 322 mOsm/L。生命徵象：血壓 167/99 mm Hg、心率 133 次 / 分、 中央靜脈壓（central venous pressure, CVP） 5 mm Hg。穿顱超音波中大腦動脈流速為 125/135 cm/s， Lindegaard 比值為 3.5/3.7 （提示腦血管痙攣）。 顱內壓（intracranial pressure, ICP）目前升至 24 mm Hg，腦組織氧分壓（PbtO₂）為 14%。 格拉斯哥昏迷指數（Glasgow Coma Scale, GCS）在過去 1 小時內由 10 分降至 8 分。在 ICU 中對此病人最恰當的處置為何？",
      "options": [
        "A. 動脈內注射 verapamil 2.5 mg × 1。",
        "B. 靜脈輸注 3% sodium chloride 2.5 mL/kg × 1。",
        "C. 靜脈輸注 20% mannitol 0.25 g/kg × 1。",
        "D. 輸注 1 單位濃縮紅血球。"
      ],
      "answer": "B",
      "explanation": "病人同時面臨腦血管痙攣（低腦氧 PbtO₂ 14%）與顱內壓升高（ICP 24 mm Hg）。首要目標為降低 顱內壓（intracranial pressure, ICP）並擴充血管內容積以提升腦灌流。 3% 高張 sodium chloride 溶液既能透過高滲透壓將腦間質水分拉出以迅速降低 ICP，又能擴充循環容積以支持腦灌流（選項 B 正確）。 mannitol 雖可降 ICP，但其強效滲透性利尿作用會導致體液流失與低血容量，對正在發生血管痙攣的病人不利（選項 C 錯誤）。 verapamil 需在血管攝影室超選擇性給予，且會引起全身低血壓及腦血管擴張而升高 ICP （選項 A 錯誤）。目前 Hct 32.3% 正常，無需輸血（選項 D 錯誤）。\n\n【教材出處】PDF 第 10 章，Q165。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 10,
        "question": 165,
        "type": "SAQ",
        "number": 7
      }
    },
    {
      "id": 8,
      "question": "對於一名確診為 蜘蛛膜下腔出血（subarachnoid hemorrhage, SAH）且目前正在發生腦血管痙攣的插管病人，下列哪一種鎮靜劑最為理想？",
      "options": [
        "A. lorazepam 1 mg/h。",
        "B. midazolam 4 mg/h。",
        "C. morphine 2 mg/h。",
        "D. propofol 25 mcg/kg/min。"
      ],
      "answer": "D",
      "explanation": "在神經重症及腦血管痙攣病人中，需要定期進行精準的神經學檢查。 propofol 具有作用迅速、半衰期短且停藥後甦醒快（quick onset and offset）的特性，體內蓄積極少，最有利於進行神經學評估（選項 D 正確）。 lorazepam 與 morphine 屬於長效藥物，會長時間遮蔽神經學變化（選項 A 與 C 錯誤）。 midazolam 容易蓄積且與譫妄發生率增加顯著相關（選項 B 錯誤）。\n\n【教材出處】PDF 第 10 章，Q166。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 10,
        "question": 166,
        "type": "SAQ",
        "number": 8
      }
    },
    {
      "id": 9,
      "question": "【臨床案例】一名 37 歲男性因腦膜炎入住急診室。 10 分鐘內其 格拉斯哥昏迷指數（Glasgow Coma Scale, GCS）由 E3-M6-V1T 惡化至 E1-M5-V1T，護理師注意到其面部抽搐，已安排腦電圖（EEG）。目前用藥包括 famotidine、 heparin 預防、 docusate 及潛在酒精戒斷之綜合維生素輸注。\n\n針對該病人疑似之癲癇發作，下列何者為最佳的急性期首選治療？",
      "options": [
        "A. 靜脈注射 fosphenytoin 1500 mg 肺栓塞（pulmonary embolism, PE） × 1。",
        "B. 靜脈注射 valproic acid 1500 mg × 1。",
        "C. 肌肉注射 midazolam 10 mg × 1 （midazolam 10 mg IM x 1）。",
        "D. 靜脈注射 levetiracetam 1 g × 1。"
      ],
      "answer": "C",
      "explanation": "癲癇重積狀態（status epilepticus）的第一線緊急首選治療為苯二氮平類藥物（benzodiazepines） （如靜脈 lorazepam 或肌肉注射 midazolam 10 mg），其起效極快且止痙效果確切（選項 C 正確）。 Fosphenytoin、 valproate 及 levetiracetam 皆屬於第二線緊急抗癲癇藥物，起效較慢，不能替代第一線苯二氮平類（選項 A、 B、 D 錯誤）。\n\n【教材出處】PDF 第 10 章，Q167。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 10,
        "question": 167,
        "type": "Case",
        "number": 1
      }
    },
    {
      "id": 10,
      "question": "【臨床案例】一名 25 歲男性（體重 80 kg）自梯子墜落後入住。頭部 CT 顯示右顳葉大型硬腦膜下血腫、顱骨骨折及左顳葉挫傷。復甦後 格拉斯哥昏迷指數（Glasgow Coma Scale, GCS）為 E1-M4-V1T。 顱內壓（intracranial pressure, ICP）監視器初壓為 32 mm Hg， 腦灌流壓（cerebral perfusion pressure, CPP）為 53 mm Hg。檢驗： Na 139 mEq/L、 K 3.6 mEq/L、 血中尿素氮（blood urea nitrogen, BUN） 42 mg/dL、 血清肌酸酐（serum creatinine, SCr） 2.4 mg/dL、血糖 178 mg/dL、 pH 7.46、 Pco₂ 34 mm Hg。\n\n針對此病人顱內壓（intracranial pressure, ICP）升高的情況，下列哪一項是最佳的初始治療？",
      "options": [
        "A. 靜脈輸注 20% mannitol 1 g/kg × 1。",
        "B. 靜脈輸注 23.4% sodium chloride 30 mL × 1。",
        "C. 靜脈注射 pentobarbital 10 mg/kg × 1。",
        "D. 靜脈注射 midazolam 10 mg × 1。"
      ],
      "answer": "B",
      "explanation": "滲透壓治療（osmotherapy）是急性顱內高壓的一線治療。然而此病人的血清鈉偏低（139 mEq/L）且有急性腎功能不全（SCr 2.4 mg/dL）。 mannitol 經腎臟排泄，在腎功能障礙時容易蓄積引發急性腎小管毒性，故不適用（選項 A 錯誤）。高張 sodium chloride 溶液（如 23.4% NaCl 30 mL 於 15 分鐘內輸注）不經腎代謝且能有效降顱內壓，在此情況下安全性與療效皆優於 mannitol （選項 B 正確）。 Pentobarbital 與高劑量 midazolam 容易引起嚴重的低血壓而損害腦灌流壓，非初始首選（選項 C 與 D 錯誤）。\n\n【教材出處】PDF 第 10 章，Q168。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 10,
        "question": 168,
        "type": "Case",
        "number": 2
      }
    },
    {
      "id": 11,
      "question": "【臨床案例】一名 61 歲男性因急性說話困難、意識混亂及右側偏癱就診， NIHSS 20 分。頭部 CT 顯示右頂葉腦內出血（intracerebral hemorrhage, ICH）。用藥包含 hydroxychloroquine、 ibuprofen PRN、 warfarin、 amlodipine 及 donepezil。檢驗： 血清肌酸酐（serum creatinine, SCr） 1.8 mg/dL、血小板 245,000/mm³、 國際標準化比值（international normalized ratio, INR） 6.8。生命徵象：血壓 163/101 mm Hg、心率 99 次 / 分。\n\n除了 vitamin K 之外，針對此病人最適當的初始治療為何？",
      "options": [
        "A. 重新開始服用 amlodipine。",
        "B. 靜脈注射給予四因子凝血酶原複合濃縮物（4F-PCC） 50 units/kg × 1。",
        "C. 輸注 6 單位血小板。",
        "D. 靜脈注射給予重組第七凝血因子（rFVIIa） 90 mcg/kg × 1。"
      ],
      "answer": "B",
      "explanation": "對於 warfarin 引起之急性致命性腦內出血（intracerebral hemorrhage, ICH）， 4F-PCC 加上靜脈注射 vitamin K 10 mg 是首選標準逆轉治療。病人的 國際標準化比值（international normalized ratio, INR）高達 6.8 （> 6）， 4F-PCC 建議劑量為 50 units/kg （最大劑量 5000 units），能以極快速度完全補充凝血因子以達成止血（選項 B 正確）。口服降壓藥在急性腦出血起效太慢（選項 A 錯誤）。血小板對逆轉 ibuprofen 效益微弱且常規輸血小板在非手術 腦內出血（intracerebral hemorrhage, ICH）中有害（選項 C 錯誤）。 rFVIIa 缺乏其他關鍵因子且血栓風險極高，不建議用於 warfarin 逆轉（選項 D 錯誤）。\n\n【教材出處】PDF 第 10 章，Q169。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 10,
        "question": 169,
        "type": "Case",
        "number": 3
      }
    },
    {
      "id": 12,
      "question": "【臨床案例】一名 61 歲男性因急性說話困難、意識混亂及右側偏癱就診， NIHSS 20 分。頭部 CT 顯示右頂葉腦內出血（intracerebral hemorrhage, ICH）。用藥包含 hydroxychloroquine、 ibuprofen PRN、 warfarin、 amlodipine 及 donepezil。檢驗： 血清肌酸酐（serum creatinine, SCr） 1.8 mg/dL、血小板 245,000/mm³、 國際標準化比值（international normalized ratio, INR） 6.8。生命徵象：血壓 163/101 mm Hg、心率 99 次 / 分。\n\n針對此名 61 歲腦內出血病人，下列哪一種初始降血壓治療最為適當？",
      "options": [
        "A. 輸注 Clevidipine 1 mg/h，維持收縮壓（systolic blood pressure, SBP） 180–220 mm Hg。",
        "B. 輸注 Nicardipine 5 mg/h，維持收縮壓（systolic blood pressure, SBP） 140–150 mm Hg。",
        "C. 需要時靜脈注射 Labetalol 10 mg，維持收縮壓（systolic blood pressure, SBP） 160–200 mm Hg。",
        "D. 輸注 esmolol 50 mcg/kg/min，維持收縮壓（systolic blood pressure, SBP） 120–130 mm Hg。"
      ],
      "answer": "B",
      "explanation": "根據 INTERACT-2 與 ATACH-2 試驗及 AHA/ASA 腦內出血指引，急性腦內出血病人的初始收縮壓控制目標為 140–150 mm Hg，此範圍能有效減少血腫擴大且不增加腎衰竭或缺血風險。 Nicardipine 連續靜脈輸注易於平穩滴定血壓，為首選藥物（選項 B 正確）。 收縮壓（systolic blood pressure, SBP） 180–220 或 160–200 目標過高，血腫擴大風險高（選項 A 與 C 錯誤）。 ATACH-2 試驗顯示激進降壓至 SBP 110–130 mm Hg 會顯著增加急性腎臟不良事件（選項 D 錯誤）。\n\n【教材出處】PDF 第 10 章，Q170。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 10,
        "question": 170,
        "type": "Case",
        "number": 4
      }
    },
    {
      "id": 13,
      "question": "【臨床案例】一名 49 歲女性因「這輩子最嚴重的頭痛」至急診，頭部 CT 顯示瀰漫性 蜘蛛膜下腔出血（subarachnoid hemorrhage, SAH）。病人無特殊病史，有 20 包 - 年抽菸史。\n\n下列哪一種治療最適合用於預防 蜘蛛膜下腔出血（subarachnoid hemorrhage, SAH）引起的缺血性併發症？",
      "options": [
        "A. 口服 Nimodipine 治療 21 天（Nimodipine for 21 days）。",
        "B. 維持正常體液容積及允許性高血壓 14 天。",
        "C. 使用 Simvastatin 治療 14 天。",
        "D. 靜脈輸注 Aminocaproic acid 48 小時。"
      ],
      "answer": "A",
      "explanation": "口服 nimodipine （60 mg 每 4 小時一次，連續 21 天）是目前唯一獲得美國 美國食品藥物管理局（Food and Drug Administration, FDA）核准且各國指引強烈推薦用於改善 aneurysmal 蜘蛛膜下腔出血（subarachnoid hemorrhage, SAH）病人神經功能預後及減少延遲性缺血缺損的藥物（選項 A 正確）。 Triple-H 預防性療法已不再被推薦（選項 B 錯誤）。大型 STASH 試驗證實 statins 無法改善 SAH 預後（選項 C 錯誤）。抗纖維蛋白溶解劑（如 aminocaproic acid）可能會增加腦梗塞與中風風險（選項 D 錯誤）。\n\n【教材出處】PDF 第 10 章，Q171。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 10,
        "question": 171,
        "type": "Case",
        "number": 5
      }
    },
    {
      "id": 14,
      "question": "【臨床案例】一名 49 歲女性因「這輩子最嚴重的頭痛」至急診，頭部 CT 顯示瀰漫性 蜘蛛膜下腔出血（subarachnoid hemorrhage, SAH）。病人無特殊病史，有 20 包 - 年抽菸史。 在住院第 5 天，病人警覺度下降， 格拉斯哥昏迷指數（Glasgow Coma Scale, GCS）下降 2 分。數位減像血管造影（DSA）提示腦血管痙攣。\n\n下列哪一種治療模式最適合首先啟動？",
      "options": [
        "A. 輸注 norepinephrine 0.05 mcg/kg/min，提升 平均動脈壓（mean arterial pressure, MAP）至 90 mm Hg。",
        "B. 輸注 1 單位濃縮紅血球，將血紅素提升至 10 g/dL。",
        "C. 推注 3% 高張 sodium chloride 溶液，將中心靜脈壓提升至 14 mm Hg。",
        "D. 輸注 milrinone 0.375 mcg/kg/min，提升心臟指數至 5 L/min/m²。"
      ],
      "answer": "A",
      "explanation": "當 蜘蛛膜下腔出血（subarachnoid hemorrhage, SAH）病人出現臨床症狀之腦血管痙攣與延遲性腦缺血時，首要的一線醫療處置是在維持正常體液容積（euvolemia）的前提下，使用血管升壓劑（首選 norepinephrine）誘發高血壓（提升 MAP），以增加側支循環並克服腦血管阻力以改善腦組織灌流（選項 A 正確）。輸血並非血管痙攣治療，過度輸血甚至可能是痙攣危險因子（選項 B 錯誤）。傳統高容量復甦會引起肺水腫已不被推薦（選項 C 錯誤）。 milrinone 非首選一線藥物（選項 D 錯誤）。\n\n【教材出處】PDF 第 10 章，Q172。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 10,
        "question": 172,
        "type": "Case",
        "number": 6
      }
    },
    {
      "id": 15,
      "question": "【臨床案例】一名 52 歲女性因單一車輛車禍入住 加護病房（intensive care unit, ICU），下肢多處骨折且有硬腦膜下血腫，需接受緊急開顱手術清除血腫。居家藥物包含 metoprolol、 rivaroxaban 10 mg （最後一次服藥為 5 小時前）、 lisinopril 及 atorvastatin。入院檢驗： Hct 31.2%，血小板 577,000/mm³。\n\n哪一項實驗室檢驗最能評估 rivaroxaban 的抗凝血程度？",
      "options": [
        "A. 國際標準化比值（international normalized ratio, INR）。",
        "B. 抗第十凝血因子活性濃度（Anti-Xa activity concentration）。",
        "C. 活化部分凝血活酶時間（activated partial thromboplastin time, aPTT）。",
        "D. VerifyNow PRU 檢測值。"
      ],
      "answer": "B",
      "explanation": "針對口服直接第十因子抑制劑（如 rivaroxaban、 apixaban），以抗第十凝血因子活性（Anti-Xa activity）色原法檢測最能定量且準確地反映體內抗凝血活性強度（選項 B 正確）。 國際標準化比值（international normalized ratio, INR）與 活化部分凝血活酶時間（activated partial thromboplastin time, aPTT）對 DOACs 的敏感度與特異度極差且不呈線性相關（選項 A 與 C 錯誤）。 VerifyNow PRU 是用於評估抗血小板藥物（如 clopidogrel）的反應（選項 D 錯誤）。\n\n【教材出處】PDF 第 10 章，Q173。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 10,
        "question": 173,
        "type": "Case",
        "number": 7
      }
    },
    {
      "id": 16,
      "question": "【臨床案例】一名 52 歲女性因單一車輛車禍入住 加護病房（intensive care unit, ICU），下肢多處骨折且有硬腦膜下血腫，需接受緊急開顱手術清除血腫。居家藥物包含 metoprolol、 rivaroxaban 10 mg （最後一次服藥為 5 小時前）、 lisinopril 及 atorvastatin。入院檢驗： Hct 31.2%，血小板 577,000/mm³。\n\n在此病人接受緊急開顱手術前，下列哪一種療法最適合用於逆轉 rivaroxaban？",
      "options": [
        "A. 靜脈注射給予四因子凝血酶原複合濃縮物（4F-PCC） 50 units/kg × 1。",
        "B. 靜脈注射給予 Andexanet 200 mg × 1。",
        "C. 靜脈輸注新鮮冷凍血漿（FFP） 15 mL/kg × 1。",
        "D. 靜脈注射給予 rFVIIa 90 mcg/kg × 1。"
      ],
      "answer": "A",
      "explanation": "在需要緊急神經外科手術且近期服用 rivaroxaban 的病人中， 4F-PCC 50 units/kg 靜脈注射是目前各大神經重症與抗凝血逆轉指引最常推薦且廣泛使用的有效止血治療（選項 A 正確）。 Andexanet alfa 劑量若使用低劑量需為 400 mg 靜脈推注接著 480 mg 連續輸注，選項 B 劑量 200 mg 錯誤，且其圍手術期臨床實證非常有限。 FFP 無法及時且充分逆轉 factor Xa 抑制劑（選項 C 錯誤）。 rFVIIa 止血不完全且血栓風險過高（選項 D 錯誤）。\n\n【教材出處】PDF 第 10 章，Q174。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 10,
        "question": 174,
        "type": "Case",
        "number": 8
      }
    }
  ],
  "11": [
    {
      "id": 1,
      "question": "【臨床案例】一名 58 歲男性（身高 71 英吋，體重 106 kg），在胸痛與呼吸短促進行性惡化 24 小時後，由外院轉入加護病房（intensive care unit, ICU）。抵達時使用高流量鼻導管給予 6 L 氧氣，持續輸注 heparin 16 units/kg/h 及 dopamine 15 mcg/kg/min。外院紀錄顯示其就診時呈現心搏過緩（心率 50–58 次 / 分）及低血壓（78/49–86/55 mm Hg）。外院 12 導程心電圖（ECG）顯示在導程 II、 III、 aVF 出現 ST 段上升。考量其胸痛與心電圖表現，轉院前給予嚼服 aspirin 324 mg、 clopidogrel 600 mg 及單次靜脈注射 morphine 4 mg。紀錄並顯示因心搏過緩與低血壓而暫緩給予 β 受體阻斷劑與 nitroglycerin。過去病史包括服藥順從性不佳、高血壓、糖尿病、血脂異常及射出分率保留型心臟衰竭（HFpEF， 1 年前報告之 LVEF 為 65%）。病人表示目前在家未服用任何藥物。 • 轉院生命徵象：血壓 87/52 mm Hg、心率 110 次 / 分、呼吸 19 次 / 分、體溫 99.7°F （37.6°C）。 • 理學檢查顯示持續窘迫、輻射性胸痛（7/10）、肺部濕囉音（rales）、無心臟雜音，右橈動脈置有動脈導管（A- line）。 • 原留置導尿管集尿袋內有 20 mL 尿液（病人表示最近一次排尿為昨日上午）。外院紀錄顯示轉院前僅記錄 30 mL 尿量。 • 胸部 X 光顯示瀰漫性斑片狀浸潤陰影（diffuse patchy opacities），但報告指出無法排除浸潤感染。 • 實驗室檢查： Na 132 mEq/L, K 4.2 mEq/L, Cl 102 mEq/L, CO₂ 22 mEq/L, 血中尿素氮（blood urea nitrogen, BUN） 34 mg/dL, 血清肌酸酐（serum creatinine, SCr） 1.9 mg/dL, 血糖 163 mg/dL。 • 全血球計數（CBC）： 白血球計數（white blood cell count, WBC） 11.3 × 10³ cells/mm³, Hb 10.9 g/dL, Hct 31.1%, PLT 213,000/mm³。 • 其他數值： Troponin-T 3.9 ng/mL, AST 14 IU/L, ALT 46 IU/L, HbA1c 8.3%, BNP 1423 pg/mL。\n\n下列何者最可能是該病人收治住院與轉院的原因？",
      "options": [
        "A. 疑似肺炎導致之敗血性休克併發心肌抑制與需氧量性缺血。",
        "B. 慢性收縮性心臟衰竭急性去代償導致之心因性休克。",
        "C. 疑似下壁 ST 段上升型心肌梗塞（ST-elevation myocardial infarction, STEMI）導致之心因性休克。",
        "D. 疑似侵犯側壁之非 ST 段上升型心肌梗塞（non-ST-elevation myocardial infarction, NSTEMI）導致之心因性休克。"
      ],
      "answer": "C",
      "explanation": "病人有明顯心肌壞死標記（Troponin-T 升高）且 ECG 導程 II、 III、 aVF 出現 ST 段上升，這是典型的下壁 ST 節段上升型心肌梗塞（ST-elevation myocardial infarction, STEMI），且病人有持續升壓劑需求、 BNP 顯著上升、缺乏感染跡象，因此診斷為 STEMI 併發心因性休克（選項 C 正確；選項 D 錯誤）。低血壓合併心搏過緩更符合下壁心肌梗塞合併右心室侵犯的併發症，而非單純心衰竭急性發作（選項 B 錯誤）。病人無發燒、白血球輕度反應且無敗血症徵象，因此敗血性休克可能性低（選項 A 錯誤）。\n\n【教材出處】PDF 第 11 章，Q175。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 11,
        "question": 175,
        "type": "SAQ",
        "number": 1
      }
    },
    {
      "id": 2,
      "question": "【臨床案例】一名 58 歲男性（身高 71 英吋，體重 106 kg），在胸痛與呼吸短促進行性惡化 24 小時後，由外院轉入加護病房（intensive care unit, ICU）。抵達時使用高流量鼻導管給予 6 L 氧氣，持續輸注 heparin 16 units/kg/h 及 dopamine 15 mcg/kg/min。外院紀錄顯示其就診時呈現心搏過緩（心率 50–58 次 / 分）及低血壓（78/49–86/55 mm Hg）。外院 12 導程心電圖（ECG）顯示在導程 II、 III、 aVF 出現 ST 段上升。考量其胸痛與心電圖表現，轉院前給予嚼服 aspirin 324 mg、 clopidogrel 600 mg 及單次靜脈注射 morphine 4 mg。紀錄並顯示因心搏過緩與低血壓而暫緩給予 β 受體阻斷劑與 nitroglycerin。過去病史包括服藥順從性不佳、高血壓、糖尿病、血脂異常及射出分率保留型心臟衰竭（HFpEF， 1 年前報告之 LVEF 為 65%）。病人表示目前在家未服用任何藥物。 • 轉院生命徵象：血壓 87/52 mm Hg、心率 110 次 / 分、呼吸 19 次 / 分、體溫 99.7°F （37.6°C）。 • 理學檢查顯示持續窘迫、輻射性胸痛（7/10）、肺部濕囉音（rales）、無心臟雜音，右橈動脈置有動脈導管（A- line）。 • 原留置導尿管集尿袋內有 20 mL 尿液（病人表示最近一次排尿為昨日上午）。外院紀錄顯示轉院前僅記錄 30 mL 尿量。 • 胸部 X 光顯示瀰漫性斑片狀浸潤陰影（diffuse patchy opacities），但報告指出無法排除浸潤感染。 • 實驗室檢查： Na 132 mEq/L, K 4.2 mEq/L, Cl 102 mEq/L, CO₂ 22 mEq/L, 血中尿素氮（blood urea nitrogen, BUN） 34 mg/dL, 血清肌酸酐（serum creatinine, SCr） 1.9 mg/dL, 血糖 163 mg/dL。 • 全血球計數（CBC）： 白血球計數（white blood cell count, WBC） 11.3 × 10³ cells/mm³, Hb 10.9 g/dL, Hct 31.1%, PLT 213,000/mm³。 • 其他數值： Troponin-T 3.9 ng/mL, AST 14 IU/L, ALT 46 IU/L, HbA1c 8.3%, BNP 1423 pg/mL。\n\n根據病人的臨床表現，哪一條冠狀動脈最可能是罪魁禍首病灶（culprit lesion）？",
      "options": [
        "A. 左主冠狀動脈（Left main coronary artery）。",
        "B. 左前降支動脈（Left anterior descending artery, LAD）。",
        "C. 左迴旋支動脈（Left circumflex coronary artery, LCx）。",
        "D. 右冠狀動脈（Right coronary artery, RCA）。"
      ],
      "answer": "D",
      "explanation": "心電圖導程 II、 III、 aVF 的 ST 段上升對應的是心臟下壁（inferior wall），在人體解剖中絕大多數由右冠狀動脈（RCA）供血（選項 D 正確）。左主動脈阻塞（選項 A）通常導致廣泛嚴重缺血或 aVR 上升； LAD 阻塞（選項 B）導致前壁／前中膈（V1–V4）心肌梗塞； LCx 阻塞（選項 C）則主要導致側壁（I、 aVL、 V5– V6）梗塞。\n\n【教材出處】PDF 第 11 章，Q176。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 11,
        "question": 176,
        "type": "SAQ",
        "number": 2
      }
    },
    {
      "id": 3,
      "question": "【臨床案例】一名 58 歲男性（身高 71 英吋，體重 106 kg），在胸痛與呼吸短促進行性惡化 24 小時後，由外院轉入加護病房（intensive care unit, ICU）。抵達時使用高流量鼻導管給予 6 L 氧氣，持續輸注 heparin 16 units/kg/h 及 dopamine 15 mcg/kg/min。外院紀錄顯示其就診時呈現心搏過緩（心率 50–58 次 / 分）及低血壓（78/49–86/55 mm Hg）。外院 12 導程心電圖（ECG）顯示在導程 II、 III、 aVF 出現 ST 段上升。考量其胸痛與心電圖表現，轉院前給予嚼服 aspirin 324 mg、 clopidogrel 600 mg 及單次靜脈注射 morphine 4 mg。紀錄並顯示因心搏過緩與低血壓而暫緩給予 β 受體阻斷劑與 nitroglycerin。過去病史包括服藥順從性不佳、高血壓、糖尿病、血脂異常及射出分率保留型心臟衰竭（HFpEF， 1 年前報告之 LVEF 為 65%）。病人表示目前在家未服用任何藥物。 • 轉院生命徵象：血壓 87/52 mm Hg、心率 110 次 / 分、呼吸 19 次 / 分、體溫 99.7°F （37.6°C）。 • 理學檢查顯示持續窘迫、輻射性胸痛（7/10）、肺部濕囉音（rales）、無心臟雜音，右橈動脈置有動脈導管（A- line）。 • 原留置導尿管集尿袋內有 20 mL 尿液（病人表示最近一次排尿為昨日上午）。外院紀錄顯示轉院前僅記錄 30 mL 尿量。 • 胸部 X 光顯示瀰漫性斑片狀浸潤陰影（diffuse patchy opacities），但報告指出無法排除浸潤感染。 • 實驗室檢查： Na 132 mEq/L, K 4.2 mEq/L, Cl 102 mEq/L, CO₂ 22 mEq/L, 血中尿素氮（blood urea nitrogen, BUN） 34 mg/dL, 血清肌酸酐（serum creatinine, SCr） 1.9 mg/dL, 血糖 163 mg/dL。 • 全血球計數（CBC）： 白血球計數（white blood cell count, WBC） 11.3 × 10³ cells/mm³, Hb 10.9 g/dL, Hct 31.1%, PLT 213,000/mm³。 • 其他數值： Troponin-T 3.9 ng/mL, AST 14 IU/L, ALT 46 IU/L, HbA1c 8.3%, BNP 1423 pg/mL。\n\n評估進行血管再暢通治療的介入性心臟科醫師要求 加護病房（intensive care unit, ICU）團隊放置中央靜脈導管。針對該病人的血流動力學支持，下列哪項處置調整建議最佳？",
      "options": [
        "A. 調高 dopamine 劑量以達到平均動脈壓（mean arterial pressure, MAP）大於 65 mm Hg。",
        "B. 轉換為 norepinephrine，並調升劑量以達到 平均動脈壓（mean arterial pressure, MAP）大於 65 mm Hg，同時逐漸調降並停用 dopamine。",
        "C. 啟動 milrinone 0.375 mcg/kg/min，並維持 dopamine 15 mcg/kg/min。",
        "D. 給予 1000 mL sodium chloride 溶液快速輸注以改善尿量不足。"
      ],
      "answer": "B",
      "explanation": "根據大型里程碑試驗 SOAP II 的結果，在心因性休克病人中，使用 dopamine 與 norepinephrine 相比，顯著增加心律不整發生率並增加死亡率（選項 B 正確；選項 A 錯誤）。 milrinone 具血管擴張特性，會進一步加劇低血壓，且在急性腎損傷下排除受阻易蓄積（選項 C 錯誤）。病人已有容量過負荷的臨床跡象（BNP 升高、水腫、肺部囉音），大劑量輸液復甦只會惡化肺水腫與右心衰竭（選項 D 錯誤）。\n\n【教材出處】PDF 第 11 章，Q177。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 11,
        "question": 177,
        "type": "SAQ",
        "number": 3
      }
    },
    {
      "id": 4,
      "question": "【臨床案例】一名 58 歲男性（身高 71 英吋，體重 106 kg），在胸痛與呼吸短促進行性惡化 24 小時後，由外院轉入加護病房（intensive care unit, ICU）。抵達時使用高流量鼻導管給予 6 L 氧氣，持續輸注 heparin 16 units/kg/h 及 dopamine 15 mcg/kg/min。外院紀錄顯示其就診時呈現心搏過緩（心率 50–58 次 / 分）及低血壓（78/49–86/55 mm Hg）。外院 12 導程心電圖（ECG）顯示在導程 II、 III、 aVF 出現 ST 段上升。考量其胸痛與心電圖表現，轉院前給予嚼服 aspirin 324 mg、 clopidogrel 600 mg 及單次靜脈注射 morphine 4 mg。紀錄並顯示因心搏過緩與低血壓而暫緩給予 β 受體阻斷劑與 nitroglycerin。過去病史包括服藥順從性不佳、高血壓、糖尿病、血脂異常及射出分率保留型心臟衰竭（HFpEF， 1 年前報告之 LVEF 為 65%）。病人表示目前在家未服用任何藥物。 • 轉院生命徵象：血壓 87/52 mm Hg、心率 110 次 / 分、呼吸 19 次 / 分、體溫 99.7°F （37.6°C）。 • 理學檢查顯示持續窘迫、輻射性胸痛（7/10）、肺部濕囉音（rales）、無心臟雜音，右橈動脈置有動脈導管（A- line）。 • 原留置導尿管集尿袋內有 20 mL 尿液（病人表示最近一次排尿為昨日上午）。外院紀錄顯示轉院前僅記錄 30 mL 尿量。 • 胸部 X 光顯示瀰漫性斑片狀浸潤陰影（diffuse patchy opacities），但報告指出無法排除浸潤感染。 • 實驗室檢查： Na 132 mEq/L, K 4.2 mEq/L, Cl 102 mEq/L, CO₂ 22 mEq/L, 血中尿素氮（blood urea nitrogen, BUN） 34 mg/dL, 血清肌酸酐（serum creatinine, SCr） 1.9 mg/dL, 血糖 163 mg/dL。 • 全血球計數（CBC）： 白血球計數（white blood cell count, WBC） 11.3 × 10³ cells/mm³, Hb 10.9 g/dL, Hct 31.1%, PLT 213,000/mm³。 • 其他數值： Troponin-T 3.9 ng/mL, AST 14 IU/L, ALT 46 IU/L, HbA1c 8.3%, BNP 1423 pg/mL。\n\n病人被送至心導管室，隨後廣播「 Code Blue 」進行急救。抵達時胸外按壓因電擊除顫而暫停，並已給予單次 epinephrine。介入團隊表示在嘗試顯影右冠狀動脈時，病人突發心室頻脈（ventricular tachycardia, VT）。目前心電圖監測顯示竇性心搏過速合併二聯律（bigeminy），心率 113 次 / 分，血壓 84/52 mm Hg。醫師擔心 心室頻脈（ventricular tachycardia, VT）復發，詢問抗心律不整藥物建議，下列何者最佳？",
      "options": [
        "A. Lidocaine 100 mg 靜脈推注 2–3 分鐘，接著以 1 mg/min 持續輸注。",
        "B. amiodarone 300 mg 靜脈推注小於 1 分鐘。",
        "C. metoprolol 10 mg 靜脈推注 1–2 分鐘。",
        "D. diltiazem 20 mg 靜脈推注 2 分鐘，隨後以 5 mg/h 持續輸注並滴定以維持心率小於 110 次 / 分。"
      ],
      "answer": "A",
      "explanation": "對於急性心肌缺血所誘發的心室性心律不整（VT/PVCs/ 二聯律）， lidocaine 是首選藥物，因其在缺血心肌組織中藥效增強且對血壓與心肌收縮力的負面影響極小（選項 A 正確）。 amiodarone 300 mg 快速 IVP 僅適用於無脈搏心跳停止（pulseless VT/VF）；此時病人已有脈搏與血壓，快速推注含有 polysorbate 80 的 amiodarone 會造成嚴重致命性低血壓（選項 B 錯誤）。 metoprolol 與 diltiazem 在急性休克、低血壓與升壓劑依賴的狀態下為禁忌（選項 C 與 D 錯誤）。\n\n【教材出處】PDF 第 11 章，Q178。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 11,
        "question": 178,
        "type": "SAQ",
        "number": 4
      }
    },
    {
      "id": 5,
      "question": "【臨床案例】一名 58 歲男性（身高 71 英吋，體重 106 kg），在胸痛與呼吸短促進行性惡化 24 小時後，由外院轉入加護病房（intensive care unit, ICU）。抵達時使用高流量鼻導管給予 6 L 氧氣，持續輸注 heparin 16 units/kg/h 及 dopamine 15 mcg/kg/min。外院紀錄顯示其就診時呈現心搏過緩（心率 50–58 次 / 分）及低血壓（78/49–86/55 mm Hg）。外院 12 導程心電圖（ECG）顯示在導程 II、 III、 aVF 出現 ST 段上升。考量其胸痛與心電圖表現，轉院前給予嚼服 aspirin 324 mg、 clopidogrel 600 mg 及單次靜脈注射 morphine 4 mg。紀錄並顯示因心搏過緩與低血壓而暫緩給予 β 受體阻斷劑與 nitroglycerin。過去病史包括服藥順從性不佳、高血壓、糖尿病、血脂異常及射出分率保留型心臟衰竭（HFpEF， 1 年前報告之 LVEF 為 65%）。病人表示目前在家未服用任何藥物。 • 轉院生命徵象：血壓 87/52 mm Hg、心率 110 次 / 分、呼吸 19 次 / 分、體溫 99.7°F （37.6°C）。 • 理學檢查顯示持續窘迫、輻射性胸痛（7/10）、肺部濕囉音（rales）、無心臟雜音，右橈動脈置有動脈導管（A- line）。 • 原留置導尿管集尿袋內有 20 mL 尿液（病人表示最近一次排尿為昨日上午）。外院紀錄顯示轉院前僅記錄 30 mL 尿量。 • 胸部 X 光顯示瀰漫性斑片狀浸潤陰影（diffuse patchy opacities），但報告指出無法排除浸潤感染。 • 實驗室檢查： Na 132 mEq/L, K 4.2 mEq/L, Cl 102 mEq/L, CO₂ 22 mEq/L, 血中尿素氮（blood urea nitrogen, BUN） 34 mg/dL, 血清肌酸酐（serum creatinine, SCr） 1.9 mg/dL, 血糖 163 mg/dL。 • 全血球計數（CBC）： 白血球計數（white blood cell count, WBC） 11.3 × 10³ cells/mm³, Hb 10.9 g/dL, Hct 31.1%, PLT 213,000/mm³。 • 其他數值： Troponin-T 3.9 ng/mL, AST 14 IU/L, ALT 46 IU/L, HbA1c 8.3%, BNP 1423 pg/mL。\n\n病人經股動脈途徑完成左心導管術後返回 加護病房（intensive care unit, ICU）。除了急性去代償之外，在接下來 12 小時內最需警惕的重大處置併發症為何？",
      "options": [
        "A. 出血（特別是腹膜後出血 retroperitoneal bleeding）。",
        "B. 血管剝離／破裂。",
        "C. 支架血栓形成（Stent thrombosis）。",
        "D. 乳頭肌破裂。"
      ],
      "answer": "A",
      "explanation": "經股動脈穿刺進行心導管治療，止血壓迫較橈動脈途徑困難許多，最嚴重且隱匿的穿刺部位出血併發症為腹膜後血腫／出血（retroperitoneal bleed） （選項 A 正確）。血管剝離通常發生於術中（選項 B 錯誤）。雖然支架血栓也是嚴重併發症，但在持續抗血小板治療下其風險低於急性穿刺部位大出血（選項 C 錯誤）。乳頭肌破裂是心肌梗塞後期的機械性併發症，並非導管穿刺手術直接引起的併發症（選項 D 錯誤）。\n\n【教材出處】PDF 第 11 章，Q179。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 11,
        "question": 179,
        "type": "SAQ",
        "number": 5
      }
    },
    {
      "id": 6,
      "question": "【臨床案例】一名 58 歲男性（身高 71 英吋，體重 106 kg），在胸痛與呼吸短促進行性惡化 24 小時後，由外院轉入加護病房（intensive care unit, ICU）。抵達時使用高流量鼻導管給予 6 L 氧氣，持續輸注 heparin 16 units/kg/h 及 dopamine 15 mcg/kg/min。外院紀錄顯示其就診時呈現心搏過緩（心率 50–58 次 / 分）及低血壓（78/49–86/55 mm Hg）。外院 12 導程心電圖（ECG）顯示在導程 II、 III、 aVF 出現 ST 段上升。考量其胸痛與心電圖表現，轉院前給予嚼服 aspirin 324 mg、 clopidogrel 600 mg 及單次靜脈注射 morphine 4 mg。紀錄並顯示因心搏過緩與低血壓而暫緩給予 β 受體阻斷劑與 nitroglycerin。過去病史包括服藥順從性不佳、高血壓、糖尿病、血脂異常及射出分率保留型心臟衰竭（HFpEF， 1 年前報告之 LVEF 為 65%）。病人表示目前在家未服用任何藥物。 • 轉院生命徵象：血壓 87/52 mm Hg、心率 110 次 / 分、呼吸 19 次 / 分、體溫 99.7°F （37.6°C）。 • 理學檢查顯示持續窘迫、輻射性胸痛（7/10）、肺部濕囉音（rales）、無心臟雜音，右橈動脈置有動脈導管（A- line）。 • 原留置導尿管集尿袋內有 20 mL 尿液（病人表示最近一次排尿為昨日上午）。外院紀錄顯示轉院前僅記錄 30 mL 尿量。 • 胸部 X 光顯示瀰漫性斑片狀浸潤陰影（diffuse patchy opacities），但報告指出無法排除浸潤感染。 • 實驗室檢查： Na 132 mEq/L, K 4.2 mEq/L, Cl 102 mEq/L, CO₂ 22 mEq/L, 血中尿素氮（blood urea nitrogen, BUN） 34 mg/dL, 血清肌酸酐（serum creatinine, SCr） 1.9 mg/dL, 血糖 163 mg/dL。 • 全血球計數（CBC）： 白血球計數（white blood cell count, WBC） 11.3 × 10³ cells/mm³, Hb 10.9 g/dL, Hct 31.1%, PLT 213,000/mm³。 • 其他數值： Troponin-T 3.9 ng/mL, AST 14 IU/L, ALT 46 IU/L, HbA1c 8.3%, BNP 1423 pg/mL。\n\n病人返回 加護病房（intensive care unit, ICU）並置放肺動脈導管（PAC），目前正接受 dopamine 12 mcg/kg/min 與 norepinephrine 0.08 mcg/kg/min，心率 108 次 / 分，血壓 82/51 mm Hg，心臟指數（cardiac index, CI） 2.0 L/min/m²， 中央靜脈壓（central venous pressure, CVP） 26 mm Hg，肺動脈壓 49/21 mm Hg。醫師擔心休克合併右心室功能不全，希望提高血壓同時逐漸調降 dopamine，並因肺動脈高壓而盡量減少肺血管阻力（PVR）的進一步增加。下列哪項策略最值得推薦？",
      "options": [
        "A. 維持現有輸注處方，稍後再重新評估。",
        "B. 啟動 phenylephrine 1 mcg/kg/min，並於 平均動脈壓（mean arterial pressure, MAP）大於 65 mm Hg 時調降 dopamine。",
        "C. 啟動 vasopressin 0.04 unit/min，並於 平均動脈壓（mean arterial pressure, MAP）大於 65 mm Hg 時調降 dopamine。",
        "D. 給予 1 L sodium chloride 溶液快速輸注，並於 平均動脈壓（mean arterial pressure, MAP）大於 65 mm Hg 時調降 dopamine。"
      ],
      "answer": "C",
      "explanation": "vasopressin 在常規生理劑量（0.01–0.04 units/min）下，透過 V1 受體主要收縮全身血管以提高 全身血管阻力（systemic vascular resistance, SVR），但對肺血管阻力（PVR）的影響極小甚至可能因刺激內皮一氧化氮釋放而有輕微肺血管擴張作用，非常適合用於合併右心室衰竭及肺高壓的病人（選項 C 正確）。 phenylephrine 為純 α1 作用劑，會同時強烈增加 SVR 和 PVR，增加右心室後負荷並加劇右心衰竭（選項 B 錯誤）。病人 中央靜脈壓（central venous pressure, CVP）高達 26 mm Hg 且肺動脈壓升高，輸液復甦只會惡化容量負荷與衰竭（選項 D 錯誤）。消極觀察無法改善低灌流與低血壓（選項 A 錯誤）。\n\n【教材出處】PDF 第 11 章，Q180。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 11,
        "question": 180,
        "type": "SAQ",
        "number": 6
      }
    },
    {
      "id": 7,
      "question": "【臨床案例】一名 58 歲男性（身高 71 英吋，體重 106 kg），在胸痛與呼吸短促進行性惡化 24 小時後，由外院轉入加護病房（intensive care unit, ICU）。抵達時使用高流量鼻導管給予 6 L 氧氣，持續輸注 heparin 16 units/kg/h 及 dopamine 15 mcg/kg/min。外院紀錄顯示其就診時呈現心搏過緩（心率 50–58 次 / 分）及低血壓（78/49–86/55 mm Hg）。外院 12 導程心電圖（ECG）顯示在導程 II、 III、 aVF 出現 ST 段上升。考量其胸痛與心電圖表現，轉院前給予嚼服 aspirin 324 mg、 clopidogrel 600 mg 及單次靜脈注射 morphine 4 mg。紀錄並顯示因心搏過緩與低血壓而暫緩給予 β 受體阻斷劑與 nitroglycerin。過去病史包括服藥順從性不佳、高血壓、糖尿病、血脂異常及射出分率保留型心臟衰竭（HFpEF， 1 年前報告之 LVEF 為 65%）。病人表示目前在家未服用任何藥物。 • 轉院生命徵象：血壓 87/52 mm Hg、心率 110 次 / 分、呼吸 19 次 / 分、體溫 99.7°F （37.6°C）。 • 理學檢查顯示持續窘迫、輻射性胸痛（7/10）、肺部濕囉音（rales）、無心臟雜音，右橈動脈置有動脈導管（A- line）。 • 原留置導尿管集尿袋內有 20 mL 尿液（病人表示最近一次排尿為昨日上午）。外院紀錄顯示轉院前僅記錄 30 mL 尿量。 • 胸部 X 光顯示瀰漫性斑片狀浸潤陰影（diffuse patchy opacities），但報告指出無法排除浸潤感染。 • 實驗室檢查： Na 132 mEq/L, K 4.2 mEq/L, Cl 102 mEq/L, CO₂ 22 mEq/L, 血中尿素氮（blood urea nitrogen, BUN） 34 mg/dL, 血清肌酸酐（serum creatinine, SCr） 1.9 mg/dL, 血糖 163 mg/dL。 • 全血球計數（CBC）： 白血球計數（white blood cell count, WBC） 11.3 × 10³ cells/mm³, Hb 10.9 g/dL, Hct 31.1%, PLT 213,000/mm³。 • 其他數值： Troponin-T 3.9 ng/mL, AST 14 IU/L, ALT 46 IU/L, HbA1c 8.3%, BNP 1423 pg/mL。\n\n數小時後，病人突發心房顫動（atrial fibrillation, AF），心率 126 次 / 分；血壓在上述處方下維持在 86/56 mm Hg。您最可能建議投予下列哪一種藥物來處置病人的心房顫動？",
      "options": [
        "A. amiodarone 150 mg 靜脈推注（IV push），隨後以 1 mg/min 持續輸注。",
        "B. amiodarone 150 mg 靜脈輸注超過 10 分鐘，隨後以 1 mg/min 持續輸注。",
        "C. metoprolol 5 mg 靜脈推注一次，隨後每 6 小時靜脈推注 5 mg。",
        "D. diltiazem 20 mg 靜脈推注，隨後以 5 mg/h 持續輸注並滴定以維持心率小於 110 次 / 分。"
      ],
      "answer": "B",
      "explanation": "對於血流動力學不穩定或處於心因性休克併發心房顫動的病人，若給予藥物控制心率 / 心律， amiodarone 是首選，因為它不具明顯負性肌力作用。對於有脈搏的病人， amiodarone 150 mg 負荷劑量必須緩慢輸注至少 10 分鐘以上，以避免稀釋液溶劑（polysorbate 80）引起急性嚴重低血壓（選項 B 正確；選項 A 錯誤）。 β 受體阻斷劑（metoprolol）與非二氫吡啶類鈣離子阻斷劑（diltiazem）具有強烈負性肌力與血管擴張效應，在此類心因性休克且正使用升壓劑的病人中皆為禁忌（選項 C 與 D 錯誤）。\n\n【教材出處】PDF 第 11 章，Q181。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 11,
        "question": 181,
        "type": "SAQ",
        "number": 7
      }
    },
    {
      "id": 8,
      "question": "【臨床案例】一名 58 歲男性（身高 71 英吋，體重 106 kg），在胸痛與呼吸短促進行性惡化 24 小時後，由外院轉入加護病房（intensive care unit, ICU）。抵達時使用高流量鼻導管給予 6 L 氧氣，持續輸注 heparin 16 units/kg/h 及 dopamine 15 mcg/kg/min。外院紀錄顯示其就診時呈現心搏過緩（心率 50–58 次 / 分）及低血壓（78/49–86/55 mm Hg）。外院 12 導程心電圖（ECG）顯示在導程 II、 III、 aVF 出現 ST 段上升。考量其胸痛與心電圖表現，轉院前給予嚼服 aspirin 324 mg、 clopidogrel 600 mg 及單次靜脈注射 morphine 4 mg。紀錄並顯示因心搏過緩與低血壓而暫緩給予 β 受體阻斷劑與 nitroglycerin。過去病史包括服藥順從性不佳、高血壓、糖尿病、血脂異常及射出分率保留型心臟衰竭（HFpEF， 1 年前報告之 LVEF 為 65%）。病人表示目前在家未服用任何藥物。 • 轉院生命徵象：血壓 87/52 mm Hg、心率 110 次 / 分、呼吸 19 次 / 分、體溫 99.7°F （37.6°C）。 • 理學檢查顯示持續窘迫、輻射性胸痛（7/10）、肺部濕囉音（rales）、無心臟雜音，右橈動脈置有動脈導管（A- line）。 • 原留置導尿管集尿袋內有 20 mL 尿液（病人表示最近一次排尿為昨日上午）。外院紀錄顯示轉院前僅記錄 30 mL 尿量。 • 胸部 X 光顯示瀰漫性斑片狀浸潤陰影（diffuse patchy opacities），但報告指出無法排除浸潤感染。 • 實驗室檢查： Na 132 mEq/L, K 4.2 mEq/L, Cl 102 mEq/L, CO₂ 22 mEq/L, 血中尿素氮（blood urea nitrogen, BUN） 34 mg/dL, 血清肌酸酐（serum creatinine, SCr） 1.9 mg/dL, 血糖 163 mg/dL。 • 全血球計數（CBC）： 白血球計數（white blood cell count, WBC） 11.3 × 10³ cells/mm³, Hb 10.9 g/dL, Hct 31.1%, PLT 213,000/mm³。 • 其他數值： Troponin-T 3.9 ng/mL, AST 14 IU/L, ALT 46 IU/L, HbA1c 8.3%, BNP 1423 pg/mL。\n\n根據該病人的臨床表現（急性心肌梗塞且射出分率保留），下列哪一項用藥相關醫療品質指標（quality metric）不要求記錄禁忌症？",
      "options": [
        "A. aspirin 禁忌症記錄。",
        "B. Statin 禁忌症記錄。",
        "C. β 受體阻斷劑（beta-blocker）禁忌症記錄。",
        "D. 血管收縮素轉化酶抑制劑（ACEI） / 血管收縮素受體阻斷劑（ARB）禁忌症記錄。"
      ],
      "answer": "D",
      "explanation": "急性心肌梗塞（AMI）的照護品質核心指標要求所有病人於出院前均應處方 aspirin、 statin 及 β 受體阻斷劑（beta-blocker），若未處方則病歷中必須詳細記錄禁忌症原因。然而， ACEI 或 ARB 僅針對 左心室射出分率（left ventricular ejection fraction, LVEF） ≤ 40% 或合併前壁梗塞 / 心臟衰竭 / 糖尿病的病人強制納入品質指標評估。本案病人過去報告 LVEF 為 65% （preserved LVEF），因此在品質指標要求中，不屬於必須強制記錄未處方禁忌症的項目（選項 D 正確；選項 A、 B、 C 均為 AMI 必備品質指標）。\n\n【教材出處】PDF 第 11 章，Q182。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 11,
        "question": 182,
        "type": "SAQ",
        "number": 8
      }
    },
    {
      "id": 9,
      "question": "【臨床案例】J.M. 是一名 68 歲男性，有冠心症（CAD）病史，包括 6 個月前發生 ST 節段上升型心肌梗塞（ST-elevation myocardial infarction, STEMI）並置入兩支藥物塗藥支架（DES）、第 2 型糖尿病、高血壓、血脂異常、胃食道逆流（GERD）、阻塞性睡眠呼吸中止症（OSA）、頻繁流鼻血、缺血性心肌病變（LVEF 30%–35%）以及中度至重度二尖瓣逆流（MR）。他因嚴重呼吸短促及意識狀態改變入住心臟加護病房（CICU），目前使用持續正壓呼吸器（CPAP）。過去 2 週內他體重增加了 13 kg （現體重 121 kg），且儘管調高了利尿劑劑量，尿量仍然減少。居家長期用藥包含： aspirin 81 mg 每日一次（once daily, QD）、 ticagrelor 90 mg Q12H、 pantoprazole 40 mg QD、 atorvastatin 40 mg QD、 insulin glargine 10 units 睡前（at bedtime, QHS）、 metformin 500 mg Q12H、 furosemide 40 mg 每日兩次（twice daily, BID）、potassium chloride 20 mEq BID。其妻子表示他原本服用 clopidogrel，直到 1 個月前因費用考量，基層醫師改給予他 ticagrelor 樣品藥。理學檢查顯示雙肺滿布囉音（rales）。病人無發燒、焦慮且意識清楚。\n\n考量 J.M. 的共病症，部分藥物已被證實具降低死亡率效益。若欲進一步延緩疾病進展並改善死亡率，下列哪組藥物可新增或調整至其用藥清單？",
      "options": [
        "A. amlodipine, clopidogrel, 及 sitagliptin",
        "B. spironolactone, lisinopril, 及 carvedilol",
        "C. Pravastatin, amlodipine, 及 aspirin",
        "D. Prasugrel, sildenafil, 及 atenolol"
      ],
      "answer": "B",
      "explanation": "對於合併缺血性心肌病變（HFrEF, LVEF 30%–35%）、心肌梗塞後及糖尿病的病人，指南指引強烈推薦的四大降死亡率藥物包括 β 受體阻斷劑（beta-blocker） （如 carvedilol）、 RAAS 抑制劑（如 ACEI lisinopril）以及醛固酮受體拮抗劑（MRA, spironolactone） （選項 B 正確）。 amlodipine、 sitagliptin、 pravastatin、 sildenafil 等均未被證實可降低心衰竭死亡率（選項 A、 C、 D 錯誤）。\n\n【教材出處】PDF 第 11 章，Q183。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 11,
        "question": 183,
        "type": "Case",
        "number": 1
      }
    },
    {
      "id": 10,
      "question": "【臨床案例】J.M. 是一名 68 歲男性，有冠心症（CAD）病史，包括 6 個月前發生 ST 節段上升型心肌梗塞（ST-elevation myocardial infarction, STEMI）並置入兩支藥物塗藥支架（DES）、第 2 型糖尿病、高血壓、血脂異常、胃食道逆流（GERD）、阻塞性睡眠呼吸中止症（OSA）、頻繁流鼻血、缺血性心肌病變（LVEF 30%–35%）以及中度至重度二尖瓣逆流（MR）。他因嚴重呼吸短促及意識狀態改變入住心臟加護病房（CICU），目前使用持續正壓呼吸器（CPAP）。過去 2 週內他體重增加了 13 kg （現體重 121 kg），且儘管調高了利尿劑劑量，尿量仍然減少。居家長期用藥包含： aspirin 81 mg 每日一次（once daily, QD）、 ticagrelor 90 mg Q12H、 pantoprazole 40 mg QD、 atorvastatin 40 mg QD、 insulin glargine 10 units 睡前（at bedtime, QHS）、 metformin 500 mg Q12H、 furosemide 40 mg 每日兩次（twice daily, BID）、potassium chloride 20 mEq BID。其妻子表示他原本服用 clopidogrel，直到 1 個月前因費用考量，基層醫師改給予他 ticagrelor 樣品藥。理學檢查顯示雙肺滿布囉音（rales）。病人無發燒、焦慮且意識清楚。\n\n考量病人的臨床表現，下列哪一組診斷檢查最有助於指導醫療團隊對 J.M. 目前情況的處置決策？（假設基礎生化檢查、血氧飽和度與血糖已完成）",
      "options": [
        "A. 尿液培養、呼吸道培養、乳酸（lactate）及降鈣素原（procalcitonin）",
        "B. 胸部 X 光、動脈血氣分析（arterial blood gas, ABG）、肝功能檢查及連續心肌酵素（serial troponins）",
        "C. 胸部 X 光、心臟超音波（ECHO）、乳酸及腦排鈉利尿胜肽（BNP）",
        "D. 胸部 X 光、動脈導管、 動脈血液氣體分析（arterial blood gas, ABG）及乳酸"
      ],
      "answer": "C",
      "explanation": "病人主訴嚴重呼吸短促、 2 週增重 13 kg、肺部囉音，高度懷疑急性心臟衰竭去代償併肺水腫與心因性休克。胸部 X 光可確認肺水腫程度， ECHO 能即時評估左心室功能與二尖瓣逆流嚴重度， BNP 確認心衰竭嚴重度，乳酸可評估末梢組織灌流與休克狀態（選項 C 正確）。感染指標（選項 A）非首要優先；肝功能檢查對急性鑑別助益有限（選項 B 錯誤）；動脈導管為監測工具而非診斷檢查（選項 D 錯誤）。\n\n【教材出處】PDF 第 11 章，Q184。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 11,
        "question": 184,
        "type": "Case",
        "number": 2
      }
    },
    {
      "id": 11,
      "question": "【臨床案例】J.M. 是一名 68 歲男性，有冠心症（CAD）病史，包括 6 個月前發生 ST 節段上升型心肌梗塞（ST-elevation myocardial infarction, STEMI）並置入兩支藥物塗藥支架（DES）、第 2 型糖尿病、高血壓、血脂異常、胃食道逆流（GERD）、阻塞性睡眠呼吸中止症（OSA）、頻繁流鼻血、缺血性心肌病變（LVEF 30%–35%）以及中度至重度二尖瓣逆流（MR）。他因嚴重呼吸短促及意識狀態改變入住心臟加護病房（CICU），目前使用持續正壓呼吸器（CPAP）。過去 2 週內他體重增加了 13 kg （現體重 121 kg），且儘管調高了利尿劑劑量，尿量仍然減少。居家長期用藥包含： aspirin 81 mg 每日一次（once daily, QD）、 ticagrelor 90 mg Q12H、 pantoprazole 40 mg QD、 atorvastatin 40 mg QD、 insulin glargine 10 units 睡前（at bedtime, QHS）、 metformin 500 mg Q12H、 furosemide 40 mg 每日兩次（twice daily, BID）、potassium chloride 20 mEq BID。其妻子表示他原本服用 clopidogrel，直到 1 個月前因費用考量，基層醫師改給予他 ticagrelor 樣品藥。理學檢查顯示雙肺滿布囉音（rales）。病人無發燒、焦慮且意識清楚。 所有上述檢查皆已開立並獲得以下結果： J.M. 的血壓為 90/56 mm Hg （MAP 67 mm Hg），心率 56 次 / 分。 12 導程 ECG 顯示正常竇性心律，無急性 ST-T 變化。 • 胸部 X 光顯示瀰漫性斑片狀陰影，管路位置適當。 • 生化檢查： Na 126 mEq/L, K 4.8 mEq/L, Cl 102 mEq/L, CO₂ 21 mEq/L, 血中尿素氮（blood urea nitrogen, BUN） 32 mg/dL, 血清肌酸酐（serum creatinine, SCr） 1.6 mg/dL, 血糖 134 mg/dL。 • CBC： 白血球計數（white blood cell count, WBC） 9.8 × 10³ cells/mm³, Hb 11.1 g/dL, Hct 32.6%, PLT 173,000/mm³。 • 其他： Troponin 0.9 ng/mL, AST 114 IU/L, ALT 102 IU/L, BNP 1936 pg/mL。 • 侵入性血流動力學： 中央靜脈壓（central venous pressure, CVP） 28 mm Hg, PAP 46/22 mm Hg, 心臟指數（cardiac index, CI） 1.8 L/min/m², ScvO₂ 53%。 • 動脈血液氣體分析（arterial blood gas, ABG）： pH 7.36, PO₂ 93.7, PCO₂ 43.2, HCO₃ 23.9, SaO₂ 89%, 乳酸 6.9 mmol/L。理學檢查顯示四肢冰冷且微血管充填時間（capillary refill）差。團隊已給予 furosemide 80 mg 靜脈給藥（intravenous, IV）一次，並希望啟動升壓劑或強心劑。\n\n此時最適當的推薦為何？",
      "options": [
        "A. norepinephrine 0.08 mcg/kg/min",
        "B. epinephrine 0.08 mcg/kg/min",
        "C. milrinone 0.75 mcg/kg/min",
        "D. dobutamine 5 mcg/kg/min"
      ],
      "answer": "D",
      "explanation": "病人心臟指數顯著低下（CI 1.8）、 中央靜脈壓（central venous pressure, CVP）極高（28）、乳酸顯著上升（6.9）、四肢冰冷，為典型「濕且冷（wet and cold） 」之心因性休克伴低灌流。 dobutamine 具有 β1 與 β2 作用，能迅速起效增加心肌收縮力與心率，並引起全身與肺動脈血管擴張降低後負荷，是首選正性肌力藥物（選項 D 正確）。 milrinone 雖亦有效，但半衰期長達數小時且主要經腎排除，在急性低灌流與急性腎損傷下調控不易（選項 C 錯誤）。 norepinephrine 與 epinephrine 的 α1 血管收縮作用會進一步增加左心室後負荷，惡化心臟負擔（選項 A 與 B 錯誤）。\n\n【教材出處】PDF 第 11 章，Q185。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 11,
        "question": 185,
        "type": "Case",
        "number": 3
      }
    },
    {
      "id": 12,
      "question": "【臨床案例】J.M. 是一名 68 歲男性，有冠心症（CAD）病史，包括 6 個月前發生 ST 節段上升型心肌梗塞（ST-elevation myocardial infarction, STEMI）並置入兩支藥物塗藥支架（DES）、第 2 型糖尿病、高血壓、血脂異常、胃食道逆流（GERD）、阻塞性睡眠呼吸中止症（OSA）、頻繁流鼻血、缺血性心肌病變（LVEF 30%–35%）以及中度至重度二尖瓣逆流（MR）。他因嚴重呼吸短促及意識狀態改變入住心臟加護病房（CICU），目前使用持續正壓呼吸器（CPAP）。過去 2 週內他體重增加了 13 kg （現體重 121 kg），且儘管調高了利尿劑劑量，尿量仍然減少。居家長期用藥包含： aspirin 81 mg 每日一次（once daily, QD）、 ticagrelor 90 mg Q12H、 pantoprazole 40 mg QD、 atorvastatin 40 mg QD、 insulin glargine 10 units 睡前（at bedtime, QHS）、 metformin 500 mg Q12H、 furosemide 40 mg 每日兩次（twice daily, BID）、potassium chloride 20 mEq BID。其妻子表示他原本服用 clopidogrel，直到 1 個月前因費用考量，基層醫師改給予他 ticagrelor 樣品藥。理學檢查顯示雙肺滿布囉音（rales）。病人無發燒、焦慮且意識清楚。 所有上述檢查皆已開立並獲得以下結果： J.M. 的血壓為 90/56 mm Hg （MAP 67 mm Hg），心率 56 次 / 分。 12 導程 ECG 顯示正常竇性心律，無急性 ST-T 變化。 • 胸部 X 光顯示瀰漫性斑片狀陰影，管路位置適當。 • 生化檢查： Na 126 mEq/L, K 4.8 mEq/L, Cl 102 mEq/L, CO₂ 21 mEq/L, 血中尿素氮（blood urea nitrogen, BUN） 32 mg/dL, 血清肌酸酐（serum creatinine, SCr） 1.6 mg/dL, 血糖 134 mg/dL。 • CBC： 白血球計數（white blood cell count, WBC） 9.8 × 10³ cells/mm³, Hb 11.1 g/dL, Hct 32.6%, PLT 173,000/mm³。 • 其他： Troponin 0.9 ng/mL, AST 114 IU/L, ALT 102 IU/L, BNP 1936 pg/mL。 • 侵入性血流動力學： 中央靜脈壓（central venous pressure, CVP） 28 mm Hg, PAP 46/22 mm Hg, 心臟指數（cardiac index, CI） 1.8 L/min/m², ScvO₂ 53%。 • 動脈血液氣體分析（arterial blood gas, ABG）： pH 7.36, PO₂ 93.7, PCO₂ 43.2, HCO₃ 23.9, SaO₂ 89%, 乳酸 6.9 mmol/L。理學檢查顯示四肢冰冷且微血管充填時間（capillary refill）差。團隊已給予 furosemide 80 mg 靜脈給藥（intravenous, IV）一次，並希望啟動升壓劑或強心劑。\n\nJ.M. 的 ECG 顯示無急性 ST 段改變。然而住院醫師考量其呼吸短促與心肌酵素輕微升高，仍考慮 急性冠心症（acute coronary syndrome, ACS）的診斷。關於其他潛在診斷的可能性，下列哪項敘述最為準確？",
      "options": [
        "A. 否，這最可能是 非 ST 節段上升型心肌梗塞（non-ST-elevation myocardial infarction, NSTEMI）。",
        "B. 是，這可能是未確診的慢性阻塞性肺病（chronic obstructive pulmonary disease, COPD）。",
        "C. 是，這可能是早期敗血症。",
        "D. 是，這很可能是去代償性心臟衰竭（decompensated HF）。"
      ],
      "answer": "D",
      "explanation": "在慢性 CAD 病人中，嚴重急性去代償性心臟衰竭伴隨顯著肺水腫、心肌壁張力極度升高（BNP 1936）、高 中央靜脈壓（central venous pressure, CVP）及低心輸出量，本身即可引起心肌氧氣供需失衡（Type 2 心肌缺血）導致 troponin 輕微升高（選項 D 正確）。缺乏缺血性 ECG 動態變化，且有壓倒性的心衰竭臨床證據，診斷應為心衰竭去代償而非急性原發性 非 ST 節段上升型心肌梗塞（non-ST-elevation myocardial infarction, NSTEMI） （選項 A 錯誤）。病人生化與血氣不支持 慢性阻塞性肺病（chronic obstructive pulmonary disease, COPD）或急性敗血症為主要原因（選項 B 與 C 錯誤）。\n\n【教材出處】PDF 第 11 章，Q186。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 11,
        "question": 186,
        "type": "Case",
        "number": 4
      }
    },
    {
      "id": 13,
      "question": "【臨床案例】J.M. 是一名 68 歲男性，有冠心症（CAD）病史，包括 6 個月前發生 ST 節段上升型心肌梗塞（ST-elevation myocardial infarction, STEMI）並置入兩支藥物塗藥支架（DES）、第 2 型糖尿病、高血壓、血脂異常、胃食道逆流（GERD）、阻塞性睡眠呼吸中止症（OSA）、頻繁流鼻血、缺血性心肌病變（LVEF 30%–35%）以及中度至重度二尖瓣逆流（MR）。他因嚴重呼吸短促及意識狀態改變入住心臟加護病房（CICU），目前使用持續正壓呼吸器（CPAP）。過去 2 週內他體重增加了 13 kg （現體重 121 kg），且儘管調高了利尿劑劑量，尿量仍然減少。居家長期用藥包含： aspirin 81 mg 每日一次（once daily, QD）、 ticagrelor 90 mg Q12H、 pantoprazole 40 mg QD、 atorvastatin 40 mg QD、 insulin glargine 10 units 睡前（at bedtime, QHS）、 metformin 500 mg Q12H、 furosemide 40 mg 每日兩次（twice daily, BID）、potassium chloride 20 mEq BID。其妻子表示他原本服用 clopidogrel，直到 1 個月前因費用考量，基層醫師改給予他 ticagrelor 樣品藥。理學檢查顯示雙肺滿布囉音（rales）。病人無發燒、焦慮且意識清楚。 所有上述檢查皆已開立並獲得以下結果： J.M. 的血壓為 90/56 mm Hg （MAP 67 mm Hg），心率 56 次 / 分。 12 導程 ECG 顯示正常竇性心律，無急性 ST-T 變化。 • 胸部 X 光顯示瀰漫性斑片狀陰影，管路位置適當。 • 生化檢查： Na 126 mEq/L, K 4.8 mEq/L, Cl 102 mEq/L, CO₂ 21 mEq/L, 血中尿素氮（blood urea nitrogen, BUN） 32 mg/dL, 血清肌酸酐（serum creatinine, SCr） 1.6 mg/dL, 血糖 134 mg/dL。 • CBC： 白血球計數（white blood cell count, WBC） 9.8 × 10³ cells/mm³, Hb 11.1 g/dL, Hct 32.6%, PLT 173,000/mm³。 • 其他： Troponin 0.9 ng/mL, AST 114 IU/L, ALT 102 IU/L, BNP 1936 pg/mL。 • 侵入性血流動力學： 中央靜脈壓（central venous pressure, CVP） 28 mm Hg, PAP 46/22 mm Hg, 心臟指數（cardiac index, CI） 1.8 L/min/m², ScvO₂ 53%。 • 動脈血液氣體分析（arterial blood gas, ABG）： pH 7.36, PO₂ 93.7, PCO₂ 43.2, HCO₃ 23.9, SaO₂ 89%, 乳酸 6.9 mmol/L。理學檢查顯示四肢冰冷且微血管充填時間（capillary refill）差。團隊已給予 furosemide 80 mg 靜脈給藥（intravenous, IV）一次，並希望啟動升壓劑或強心劑。\n\nJ.M. 在心電圖監測上出現間歇性心搏過緩。團隊已照會心臟電生理專科。在此同時，下列哪一項敘述最能準確反映是否能針對任何其他可矯正的潛在原因進行介入？",
      "options": [
        "A. 可停用 ticagrelor 並換回 clopidogrel。",
        "B. 應完全停用 ticagrelor。",
        "C. 無需介入處置，這很可能是 J.M. 心衰竭進展的自然結果。",
        "D. 應治療 J.M. 的高血鉀。"
      ],
      "answer": "A",
      "explanation": "ticagrelor 會抑制細胞對腺苷（adenosine）的再攝取，升高血中腺苷濃度，已知可誘發呼吸困難及竇房結 / 房室結傳導阻滯引起心搏過緩。病人 1 個月前剛換用 ticagrelor 後出現症狀，停用 ticagrelor 並換回 clopidogrel 是合理的處置（選項 A 正確）。由於病人 6 個月前剛放置藥物塗藥支架（DES），指南建議 雙重抗血小板治療（dual antiplatelet therapy, DAPT）至少使用 12 個月，完全停用抗血小板藥物會大幅增加支架血栓致命風險（選項 B 錯誤）。病人血鉀 4.8 mEq/L 屬正常範圍，無高血鉀（選項 D 錯誤）。\n\n【教材出處】PDF 第 11 章，Q187。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 11,
        "question": 187,
        "type": "Case",
        "number": 5
      }
    },
    {
      "id": 14,
      "question": "【臨床案例】J.M. 是一名 68 歲男性，有冠心症（CAD）病史，包括 6 個月前發生 ST 節段上升型心肌梗塞（ST-elevation myocardial infarction, STEMI）並置入兩支藥物塗藥支架（DES）、第 2 型糖尿病、高血壓、血脂異常、胃食道逆流（GERD）、阻塞性睡眠呼吸中止症（OSA）、頻繁流鼻血、缺血性心肌病變（LVEF 30%–35%）以及中度至重度二尖瓣逆流（MR）。他因嚴重呼吸短促及意識狀態改變入住心臟加護病房（CICU），目前使用持續正壓呼吸器（CPAP）。過去 2 週內他體重增加了 13 kg （現體重 121 kg），且儘管調高了利尿劑劑量，尿量仍然減少。居家長期用藥包含： aspirin 81 mg 每日一次（once daily, QD）、 ticagrelor 90 mg Q12H、 pantoprazole 40 mg QD、 atorvastatin 40 mg QD、 insulin glargine 10 units 睡前（at bedtime, QHS）、 metformin 500 mg Q12H、 furosemide 40 mg 每日兩次（twice daily, BID）、potassium chloride 20 mEq BID。其妻子表示他原本服用 clopidogrel，直到 1 個月前因費用考量，基層醫師改給予他 ticagrelor 樣品藥。理學檢查顯示雙肺滿布囉音（rales）。病人無發燒、焦慮且意識清楚。 所有上述檢查皆已開立並獲得以下結果： J.M. 的血壓為 90/56 mm Hg （MAP 67 mm Hg），心率 56 次 / 分。 12 導程 ECG 顯示正常竇性心律，無急性 ST-T 變化。 • 胸部 X 光顯示瀰漫性斑片狀陰影，管路位置適當。 • 生化檢查： Na 126 mEq/L, K 4.8 mEq/L, Cl 102 mEq/L, CO₂ 21 mEq/L, 血中尿素氮（blood urea nitrogen, BUN） 32 mg/dL, 血清肌酸酐（serum creatinine, SCr） 1.6 mg/dL, 血糖 134 mg/dL。 • CBC： 白血球計數（white blood cell count, WBC） 9.8 × 10³ cells/mm³, Hb 11.1 g/dL, Hct 32.6%, PLT 173,000/mm³。 • 其他： Troponin 0.9 ng/mL, AST 114 IU/L, ALT 102 IU/L, BNP 1936 pg/mL。 • 侵入性血流動力學： 中央靜脈壓（central venous pressure, CVP） 28 mm Hg, PAP 46/22 mm Hg, 心臟指數（cardiac index, CI） 1.8 L/min/m², ScvO₂ 53%。 • 動脈血液氣體分析（arterial blood gas, ABG）： pH 7.36, PO₂ 93.7, PCO₂ 43.2, HCO₃ 23.9, SaO₂ 89%, 乳酸 6.9 mmol/L。理學檢查顯示四肢冰冷且微血管充填時間（capillary refill）差。團隊已給予 furosemide 80 mg 靜脈給藥（intravenous, IV）一次，並希望啟動升壓劑或強心劑。 自第 5 題後進行適當介入，病人未需要心臟節律器。在接下來 48 小時內， J.M. 持續接受強心劑治療並進行利尿（過去 2 天淨體液平衡分別為負 1250 mL 及負 900 mL）。經胸前心臟超音波（TTE）顯示 左心室射出分率（left ventricular ejection fraction, LVEF） 15%– 20%，左心室擴大且低動能，重度二尖瓣逆流，雙心房擴大。未見心內血栓，但無法完全排除。 J.M. 在心電監測上出現越來越多的心房早期收縮（PAC），心率維持在 83–96 次 / 分。他正接受 dobutamine 5 mcg/kg/min 及 furosemide 10 mg/h 持續輸注。團隊接獲通報 J.M. 發生突發性心房顫動伴快速心室反應（AF with RVR），心率 132 次 / 分（發生約 30 分鐘）。其血壓現為 83/52 mm Hg。\n\n針對該病人哪種治療計畫最為首選？",
      "options": [
        "A. 同步心臟電擊整流（Synchronized cardioversion）",
        "B. metoprolol 5 mg 靜脈推注",
        "C. adenosine 6 mg 快速靜脈推注",
        "D. amiodarone 300 mg 靜脈推注，隨後以 1 mg/min 持續輸注"
      ],
      "answer": "A",
      "explanation": "病人處於心因性休克（LVEF 15%–20%、使用 dobutamine）且出現低血壓（83/52 mm Hg），此時新發生的快速心房顫動屬於血流動力學不穩定狀態，根據 ACLS 指南首選為緊急同步心臟電擊整流（選項 A 正確）。 metoprolol 會阻斷 dobutamine 的 β 效應並加劇心因性休克（選項 B 錯誤）。 adenosine 用於窄 QRS 規則的 SVT，對房顫無效（選項 C 錯誤）。 amiodarone 300 mg 快速推注易導致嚴重血管擴張與低血壓惡化（選項 D 錯誤）。\n\n【教材出處】PDF 第 11 章，Q188。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 11,
        "question": 188,
        "type": "Case",
        "number": 6
      }
    },
    {
      "id": 15,
      "question": "【臨床案例】J.M. 是一名 68 歲男性，有冠心症（CAD）病史，包括 6 個月前發生 ST 節段上升型心肌梗塞（ST-elevation myocardial infarction, STEMI）並置入兩支藥物塗藥支架（DES）、第 2 型糖尿病、高血壓、血脂異常、胃食道逆流（GERD）、阻塞性睡眠呼吸中止症（OSA）、頻繁流鼻血、缺血性心肌病變（LVEF 30%–35%）以及中度至重度二尖瓣逆流（MR）。他因嚴重呼吸短促及意識狀態改變入住心臟加護病房（CICU），目前使用持續正壓呼吸器（CPAP）。過去 2 週內他體重增加了 13 kg （現體重 121 kg），且儘管調高了利尿劑劑量，尿量仍然減少。居家長期用藥包含： aspirin 81 mg 每日一次（once daily, QD）、 ticagrelor 90 mg Q12H、 pantoprazole 40 mg QD、 atorvastatin 40 mg QD、 insulin glargine 10 units 睡前（at bedtime, QHS）、 metformin 500 mg Q12H、 furosemide 40 mg 每日兩次（twice daily, BID）、potassium chloride 20 mEq BID。其妻子表示他原本服用 clopidogrel，直到 1 個月前因費用考量，基層醫師改給予他 ticagrelor 樣品藥。理學檢查顯示雙肺滿布囉音（rales）。病人無發燒、焦慮且意識清楚。 所有上述檢查皆已開立並獲得以下結果： J.M. 的血壓為 90/56 mm Hg （MAP 67 mm Hg），心率 56 次 / 分。 12 導程 ECG 顯示正常竇性心律，無急性 ST-T 變化。 • 胸部 X 光顯示瀰漫性斑片狀陰影，管路位置適當。 • 生化檢查： Na 126 mEq/L, K 4.8 mEq/L, Cl 102 mEq/L, CO₂ 21 mEq/L, 血中尿素氮（blood urea nitrogen, BUN） 32 mg/dL, 血清肌酸酐（serum creatinine, SCr） 1.6 mg/dL, 血糖 134 mg/dL。 • CBC： 白血球計數（white blood cell count, WBC） 9.8 × 10³ cells/mm³, Hb 11.1 g/dL, Hct 32.6%, PLT 173,000/mm³。 • 其他： Troponin 0.9 ng/mL, AST 114 IU/L, ALT 102 IU/L, BNP 1936 pg/mL。 • 侵入性血流動力學： 中央靜脈壓（central venous pressure, CVP） 28 mm Hg, PAP 46/22 mm Hg, 心臟指數（cardiac index, CI） 1.8 L/min/m², ScvO₂ 53%。 • 動脈血液氣體分析（arterial blood gas, ABG）： pH 7.36, PO₂ 93.7, PCO₂ 43.2, HCO₃ 23.9, SaO₂ 89%, 乳酸 6.9 mmol/L。理學檢查顯示四肢冰冷且微血管充填時間（capillary refill）差。團隊已給予 furosemide 80 mg 靜脈給藥（intravenous, IV）一次，並希望啟動升壓劑或強心劑。 自第 5 題後進行適當介入，病人未需要心臟節律器。在接下來 48 小時內， J.M. 持續接受強心劑治療並進行利尿（過去 2 天淨體液平衡分別為負 1250 mL 及負 900 mL）。經胸前心臟超音波（TTE）顯示 左心室射出分率（left ventricular ejection fraction, LVEF） 15%– 20%，左心室擴大且低動能，重度二尖瓣逆流，雙心房擴大。未見心內血栓，但無法完全排除。 J.M. 在心電監測上出現越來越多的心房早期收縮（PAC），心率維持在 83–96 次 / 分。他正接受 dobutamine 5 mcg/kg/min 及 furosemide 10 mg/h 持續輸注。團隊接獲通報 J.M. 發生突發性心房顫動伴快速心室反應（AF with RVR），心率 132 次 / 分（發生約 30 分鐘）。其血壓現為 83/52 mm Hg。\n\n經上述處置後 J.M. 的血壓與心率有所改善，但仍維持心房顫動。團隊目前考慮評估其抗凝血治療適應性。計算其 CHA₂DS₂-VASc 分數為 5 分， HAS-BLED 分數為 5 分。醫師考慮在 加護病房（intensive care unit, ICU）住院期間使用 heparin 持續輸注，並尋求您的建議。何者為最恰當的回覆？",
      "options": [
        "A. 根據這些評分，病人的出血風險與中風風險相同；因此，啟動或暫緩抗凝血治療皆屬合理。",
        "B. 根據這些評分，病人的中風風險超過出血風險；因此，啟動 heparin 抗凝治療是合理的。",
        "C. HAS-BLED 評分參考價值較低，因其主要衍生自長期使用 warfarin 之族群。然而考量其 CHA₂DS₂-VASc 評分，最終仍可能需要抗凝治療。",
        "D. HAS-BLED 與 CHA₂DS₂-VASc 評分與此病人目前的急性照護無關，且不需抗凝治療。"
      ],
      "answer": "C",
      "explanation": "HAS-BLED 臨床出血評分是針對長期門診使用 warfarin 的非瓣膜性房顫族群所推導，並未在急性重症或使用靜脈 heparin 的 加護病房（intensive care unit, ICU）病人中獲得驗證。然而，病人 CHA₂DS₂-VASc 高達 5 分（年化中風風險 6.7%），在急性期穩定後，長遠來看抗凝治療是必要的（選項 C 正確）。 HAS-BLED 與 CHA₂DS₂-VASc 的數值不能直接在數學上 1:1 等量比較風險高低（選項 A 與 B 錯誤）。\n\n【教材出處】PDF 第 11 章，Q189。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 11,
        "question": 189,
        "type": "Case",
        "number": 7
      }
    },
    {
      "id": 16,
      "question": "【臨床案例】J.M. 是一名 68 歲男性，有冠心症（CAD）病史，包括 6 個月前發生 ST 節段上升型心肌梗塞（ST-elevation myocardial infarction, STEMI）並置入兩支藥物塗藥支架（DES）、第 2 型糖尿病、高血壓、血脂異常、胃食道逆流（GERD）、阻塞性睡眠呼吸中止症（OSA）、頻繁流鼻血、缺血性心肌病變（LVEF 30%–35%）以及中度至重度二尖瓣逆流（MR）。他因嚴重呼吸短促及意識狀態改變入住心臟加護病房（CICU），目前使用持續正壓呼吸器（CPAP）。過去 2 週內他體重增加了 13 kg （現體重 121 kg），且儘管調高了利尿劑劑量，尿量仍然減少。居家長期用藥包含： aspirin 81 mg 每日一次（once daily, QD）、 ticagrelor 90 mg Q12H、 pantoprazole 40 mg QD、 atorvastatin 40 mg QD、 insulin glargine 10 units 睡前（at bedtime, QHS）、 metformin 500 mg Q12H、 furosemide 40 mg 每日兩次（twice daily, BID）、potassium chloride 20 mEq BID。其妻子表示他原本服用 clopidogrel，直到 1 個月前因費用考量，基層醫師改給予他 ticagrelor 樣品藥。理學檢查顯示雙肺滿布囉音（rales）。病人無發燒、焦慮且意識清楚。 所有上述檢查皆已開立並獲得以下結果： J.M. 的血壓為 90/56 mm Hg （MAP 67 mm Hg），心率 56 次 / 分。 12 導程 ECG 顯示正常竇性心律，無急性 ST-T 變化。 • 胸部 X 光顯示瀰漫性斑片狀陰影，管路位置適當。 • 生化檢查： Na 126 mEq/L, K 4.8 mEq/L, Cl 102 mEq/L, CO₂ 21 mEq/L, 血中尿素氮（blood urea nitrogen, BUN） 32 mg/dL, 血清肌酸酐（serum creatinine, SCr） 1.6 mg/dL, 血糖 134 mg/dL。 • CBC： 白血球計數（white blood cell count, WBC） 9.8 × 10³ cells/mm³, Hb 11.1 g/dL, Hct 32.6%, PLT 173,000/mm³。 • 其他： Troponin 0.9 ng/mL, AST 114 IU/L, ALT 102 IU/L, BNP 1936 pg/mL。 • 侵入性血流動力學： 中央靜脈壓（central venous pressure, CVP） 28 mm Hg, PAP 46/22 mm Hg, 心臟指數（cardiac index, CI） 1.8 L/min/m², ScvO₂ 53%。 • 動脈血液氣體分析（arterial blood gas, ABG）： pH 7.36, PO₂ 93.7, PCO₂ 43.2, HCO₃ 23.9, SaO₂ 89%, 乳酸 6.9 mmol/L。理學檢查顯示四肢冰冷且微血管充填時間（capillary refill）差。團隊已給予 furosemide 80 mg 靜脈給藥（intravenous, IV）一次，並希望啟動升壓劑或強心劑。 自第 5 題後進行適當介入，病人未需要心臟節律器。在接下來 48 小時內， J.M. 持續接受強心劑治療並進行利尿（過去 2 天淨體液平衡分別為負 1250 mL 及負 900 mL）。經胸前心臟超音波（TTE）顯示 左心室射出分率（left ventricular ejection fraction, LVEF） 15%– 20%，左心室擴大且低動能，重度二尖瓣逆流，雙心房擴大。未見心內血栓，但無法完全排除。 J.M. 在心電監測上出現越來越多的心房早期收縮（PAC），心率維持在 83–96 次 / 分。他正接受 dobutamine 5 mcg/kg/min 及 furosemide 10 mg/h 持續輸注。團隊接獲通報 J.M. 發生突發性心房顫動伴快速心室反應（AF with RVR），心率 132 次 / 分（發生約 30 分鐘）。其血壓現為 83/52 mm Hg。 J.M. 已脫離心房顫動，但仍處於心因性休克狀態。 CICU 團隊已照會心臟外科醫師評估其二尖瓣病變並考慮晚期心臟衰竭進階療法。以其目前的去代償狀態，若要接受手術需進一步最佳化。\n\n下列哪種暫時性機械性循環輔助（MCS）在中重度二尖瓣逆流合併心因性休克的情境中最為有利？",
      "options": [
        "A. 靜脈 - 動脈體外膜氧合（VA-ECMO）",
        "B. 靜脈 - 靜脈體外膜氧合（VV-ECMO）",
        "C. 主動脈內氣球幫浦（IABP）",
        "D. 無；病人可能需要立即接受緊急手術。"
      ],
      "answer": "C",
      "explanation": "主動脈內氣球幫浦（IABP）在心臟收縮期排氣產生負壓吸力，能夠選擇性降低左心室後負荷（afterload reduction）；在二尖瓣逆流（MR）病人中，後負荷降低能顯著促進血液向前流入主動脈，從而直接減少反流回左心房的逆流量，同時在舒張期充氣提高冠狀動脈灌注壓，因此對重度 MR 併心因性休克最具血流動力學效益（選項 C 正確）。 VA-ECMO 在股動脈灌流會逆行增加主動脈根部壓力與左心室後負荷，可能急劇加重二尖瓣逆流及肺水腫（選項 A 錯誤）。 VV-ECMO 僅提供呼吸氣體交換，無循環支持（選項 B 錯誤）。\n\n【教材出處】PDF 第 11 章，Q190。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 11,
        "question": 190,
        "type": "Case",
        "number": 8
      }
    }
  ],
  "12": [
    {
      "id": 1,
      "question": "【臨床案例】T.B. 是一名 62 歲男性，有心房顫動、冠狀動脈疾病置放塗藥支架（2009 年）、射出分率降低型心臟衰竭（2018 年心臟超音波最近一次 EF 為 45%）及胃食道逆流病史。 T.B. 因疑似急性心肌梗塞被送往心導管室。實驗室數值： 國際標準化比值（international normalized ratio, INR） 1、血小板 200,000/mm³、 Hb 12 g/dL、 血清肌酸酐（serum creatinine, SCr） 1.7 mg/dL （基線 1.5 mg/dL）、 白血球計數（white blood cell count, WBC） 17 × 10³ cells/mm³、 AST 100 IU/L。導管術後轉入冠狀動脈加護病房（CCU）觀察，此時突發意識喪失且摸不到脈搏。您所屬的 CCU 團隊被召喚至床邊。此時 T.B. 置有周邊靜脈管路，在此事件前使用鼻導管吸入室內空氣。\n\n在 T.B. 的急救復甦中，下列哪一項是最適當的第一步？",
      "options": [
        "A. 立即進行氣管內插管，因為這很可能是低氧性呼吸衰竭導致的心跳停止。",
        "B. 放置中央靜脈導管以利升壓劑給藥。",
        "C. 立即給予胸外按壓（chest compressions）。",
        "D. 使用甦醒球面罩給予 2 次人工呼吸。"
      ],
      "answer": "C",
      "explanation": "成人心跳停止絕大多數由心因性事件（心臟血管因素）引起，且高品質 CPR 的胸外按壓是提高冠狀動脈與腦部灌流、提升存活率與神經完整性的最關鍵基石。因此應立即按照 BLS 指南開始胸外按壓，同時貼上除顫電極片以確認心律（選項 C 正確）。進階呼吸道與升壓劑僅能提高 ROSC 率，不能取代胸外按壓，亦不可為放置管線而中斷或延遲按壓（選項 A、 B、 D 錯誤）。\n\n【教材出處】PDF 第 12 章，Q191。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 12,
        "question": 191,
        "type": "SAQ",
        "number": 1
      }
    },
    {
      "id": 2,
      "question": "【臨床案例】T.B. 是一名 62 歲男性，有心房顫動、冠狀動脈疾病置放塗藥支架（2009 年）、射出分率降低型心臟衰竭（2018 年心臟超音波最近一次 EF 為 45%）及胃食道逆流病史。 T.B. 因疑似急性心肌梗塞被送往心導管室。實驗室數值： 國際標準化比值（international normalized ratio, INR） 1、血小板 200,000/mm³、 Hb 12 g/dL、 血清肌酸酐（serum creatinine, SCr） 1.7 mg/dL （基線 1.5 mg/dL）、 白血球計數（white blood cell count, WBC） 17 × 10³ cells/mm³、 AST 100 IU/L。導管術後轉入冠狀動脈加護病房（CCU）觀察，此時突發意識喪失且摸不到脈搏。您所屬的 CCU 團隊被召喚至床邊。此時 T.B. 置有周邊靜脈管路，在此事件前使用鼻導管吸入室內空氣。\n\n心電圖監視器顯示 T.B. 處於心室纖維顫動（ventricular fibrillation, VF），且持續無脈搏。針對 T.B. 的 心室顫動（ventricular fibrillation, VF）心跳停止，下列哪一項處置最適當？",
      "options": [
        "A. 使用雙相型除顫器給予非同步電擊／除顫（unsynchronized shock/defibrillation） 120–200 J。",
        "B. 給予靜脈注射 amiodarone 300 mg。",
        "C. 給予靜脈注射 atropine 1 mg。",
        "D. 給予緊急經皮心臟節律（transcutaneous pacing）。"
      ],
      "answer": "A",
      "explanation": "治療心室纖維顫動（ventricular fibrillation, VF）的基石是盡早進行非同步電擊除顫（選項 A 正確）。 amiodarone 雖在 ACLS 處置流程中，但保留給難治型 心室顫動（ventricular fibrillation, VF） （即對除顫電擊無反應的頑固性 VF，通常在第 2 次或第 3 次電擊後給予）（選項 B 錯誤）。 atropine 與經皮節律在 VF/pVT 中無效且不被指引推薦（選項 C 與 D 錯誤）。\n\n【教材出處】PDF 第 12 章，Q192。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 12,
        "question": 192,
        "type": "SAQ",
        "number": 2
      }
    },
    {
      "id": 3,
      "question": "【臨床案例】T.B. 是一名 62 歲男性，有心房顫動、冠狀動脈疾病置放塗藥支架（2009 年）、射出分率降低型心臟衰竭（2018 年心臟超音波最近一次 EF 為 45%）及胃食道逆流病史。 T.B. 因疑似急性心肌梗塞被送往心導管室。實驗室數值： 國際標準化比值（international normalized ratio, INR） 1、血小板 200,000/mm³、 Hb 12 g/dL、 血清肌酸酐（serum creatinine, SCr） 1.7 mg/dL （基線 1.5 mg/dL）、 白血球計數（white blood cell count, WBC） 17 × 10³ cells/mm³、 AST 100 IU/L。導管術後轉入冠狀動脈加護病房（CCU）觀察，此時突發意識喪失且摸不到脈搏。您所屬的 CCU 團隊被召喚至床邊。此時 T.B. 置有周邊靜脈管路，在此事件前使用鼻導管吸入室內空氣。\n\n監視器上 T.B. 的心律由 心室顫動（ventricular fibrillation, VF）轉變為無脈搏電氣活動（PEA）。針對 T.B. 的 PEA 心跳停止，下列何種處置最適當？",
      "options": [
        "A. 使用雙相除顫器給予 120 J 非同步電擊除顫。",
        "B. 持續高品質胸外按壓，同時評估並處理可逆的心跳停止潛在原因（5H5T）。",
        "C. 給予靜脈注射 lidocaine 1 mg/kg 一次，隨後以 1 mg/min 持續輸注。",
        "D. 給予靜脈注射 atropine 1 mg。"
      ],
      "answer": "B",
      "explanation": "PEA 屬於「不可電擊（non-shockable） 」心律，除顫電擊對 PEA 無效且可能有害（選項 A 錯誤）。處置核心是持續胸外按壓以維持灌流，同時迅速尋找並逆轉可治療的潛在原因（即 5H5T：低血容量、低氧、酸中毒、高 / 低血鉀、體溫過低；張力性氣胸、心包填塞、毒物、肺栓塞、冠狀動脈血栓）（選項 B 正確）。 Lidocaine 僅用於心室性心律不整（選項 C 錯誤）； atropine 已自 ACLS PEA/Asystole 流程中移除（選項 D 錯誤）。\n\n【教材出處】PDF 第 12 章，Q193。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 12,
        "question": 193,
        "type": "SAQ",
        "number": 3
      }
    },
    {
      "id": 4,
      "question": "【臨床案例】T.B. 是一名 62 歲男性，有心房顫動、冠狀動脈疾病置放塗藥支架（2009 年）、射出分率降低型心臟衰竭（2018 年心臟超音波最近一次 EF 為 45%）及胃食道逆流病史。 T.B. 因疑似急性心肌梗塞被送往心導管室。實驗室數值： 國際標準化比值（international normalized ratio, INR） 1、血小板 200,000/mm³、 Hb 12 g/dL、 血清肌酸酐（serum creatinine, SCr） 1.7 mg/dL （基線 1.5 mg/dL）、 白血球計數（white blood cell count, WBC） 17 × 10³ cells/mm³、 AST 100 IU/L。導管術後轉入冠狀動脈加護病房（CCU）觀察，此時突發意識喪失且摸不到脈搏。您所屬的 CCU 團隊被召喚至床邊。此時 T.B. 置有周邊靜脈管路，在此事件前使用鼻導管吸入室內空氣。\n\n在歷經 15 分鐘的總急救復甦後， T.B. 恢復自發性循環（ROSC）。醫療團隊正討論是否對 T.B. 實施目標體溫管理（TTM / temperature control）。關於 T.B. 的體溫控制，下列哪一項敘述最為準確？",
      "options": [
        "A. 不應考慮，因為其初始表現為 心室顫動（ventricular fibrillation, VF）心跳停止。",
        "B. 不應考慮，因為他有轉氨酶升高（transaminitis）。",
        "C. 應考慮實施，並密切監測 血清肌酸酐（serum creatinine, SCr）。",
        "D. 應考慮實施，但因血栓風險應同時啟動全身血栓溶解治療。"
      ],
      "answer": "C",
      "explanation": "指南強烈建議所有 ROSC 後仍處於昏迷狀態的成人心跳停止病人，無論初始心律為 心室顫動（ventricular fibrillation, VF）/pVT 或 PEA/ 心搏停止，皆應接受目標體溫控制（TTM）以保護神經功能（選項 C 正確；選項 A 錯誤）。輕度轉氨酶升高並非 TTM 的禁忌症（選項 B 錯誤）。低溫治療期間血小板功能受抑制且凝血酵素活性下降，會增加出血風險而非血栓，且無指徵隨意使用溶栓藥物（選項 D 錯誤）。低溫治療時因低溫利尿及腎血流改變，需密切監測腎功能與電解質。\n\n【教材出處】PDF 第 12 章，Q194。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 12,
        "question": 194,
        "type": "SAQ",
        "number": 4
      }
    },
    {
      "id": 5,
      "question": "【臨床案例】T.B. 是一名 62 歲男性，有心房顫動、冠狀動脈疾病置放塗藥支架（2009 年）、射出分率降低型心臟衰竭（2018 年心臟超音波最近一次 EF 為 45%）及胃食道逆流病史。 T.B. 因疑似急性心肌梗塞被送往心導管室。實驗室數值： 國際標準化比值（international normalized ratio, INR） 1、血小板 200,000/mm³、 Hb 12 g/dL、 血清肌酸酐（serum creatinine, SCr） 1.7 mg/dL （基線 1.5 mg/dL）、 白血球計數（white blood cell count, WBC） 17 × 10³ cells/mm³、 AST 100 IU/L。導管術後轉入冠狀動脈加護病房（CCU）觀察，此時突發意識喪失且摸不到脈搏。您所屬的 CCU 團隊被召喚至床邊。此時 T.B. 置有周邊靜脈管路，在此事件前使用鼻導管吸入室內空氣。\n\n醫療團隊希望進一步了解支持目標體溫管理的相關實證文獻。關於支持體溫控制的數據，下列哪一項資訊最適當？",
      "options": [
        "A. 已證實可改善 PEA 心跳停止病人的整體存活率。",
        "B. 已證實可改善神經學預後（neurologic outcomes）。",
        "C. 研究發現設定核心體溫 36°C 優於 33°C。",
        "D. 在心搏停止（asystole）病人中研究最為充分。"
      ],
      "answer": "B",
      "explanation": "多項指標性臨床試驗（如 Bernard 等人與 HACA 試驗）證實，心跳停止後體溫控制可顯著改善神經學功能預後（出院時腦功能分類良好）（選項 B 正確）。 TTM 主要在院外 心室顫動（ventricular fibrillation, VF）/pVT 心律病人中獲得最多且最強烈的實證支持，而非 asystole 或 PEA （選項 A 與 D 錯誤）。 TTM 試驗（N Engl J Med 2013）顯示目標 33°C 與 36°C 在全因死亡率及神經功能上無統計學顯著差異，並未發現 36°C 優於 33°C （選項 C 錯誤）。\n\n【教材出處】PDF 第 12 章，Q195。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 12,
        "question": 195,
        "type": "SAQ",
        "number": 5
      }
    },
    {
      "id": 6,
      "question": "【臨床案例】J.H. 是一名 48 歲女性，無已知病史，因突發呼吸短促、右側疼痛及視力模糊就診急診。她否認非法藥物或吸菸史，確認有社交性飲酒（約每週 3 杯）。尿液毒物篩檢陰性。初始生命徵象：血壓 202/140 mm Hg、心率 88 次 / 分、呼吸 22 次 / 分、胸部與右側疼痛評分 4/10。初始實驗室數值： 血清肌酸酐（serum creatinine, SCr） 0.8 mg/dL、 AST 608 U/L、 ALT 458 U/L、 lipase 20 U/L、總膽紅素 1.0 mg/dL、直接膽紅素 0.4 mg/dL、 白血球計數（white blood cell count, WBC） 6 × 10³ cells/mm³、 Hb 11 g/dL、 Troponin T < 0.01 ng/mL、 D-dimer < 0.5 mcg/mL。胸部 X 光顯示中度雙側肋膜積水，無局部實質化病灶。胸部 CT 排除肺栓塞。病人目前未服用任何處方藥或成藥。\n\n下列哪一項實驗室異常或就診症狀最能使 J.H. 被判定為高血壓急症（hypertensive emergency）？",
      "options": [
        "A. 無；她屬於單純高血壓急迫症（hypertensive urgency）。",
        "B. 她的血清肌酸酐（serum creatinine, SCr）。",
        "C. 她的 AST/ALT 顯著升高。",
        "D. 她的 D-dimer。"
      ],
      "answer": "C",
      "explanation": "高血壓急症（hypertensive emergency）的定義為血壓嚴重升高（通常 SBP > 180 或 DBP > 120 mm Hg）且伴隨急性進行性標的器官損傷（acute target-organ damage）。本案病人血壓高達 202/140 mm Hg，且 AST （608 U/L）與 ALT （458 U/L）急性劇烈升高，代表急性肝臟低灌流／缺血性肝炎或肝血管內皮微血管病變等急性末端器官損傷，因此符合高血壓急症（選項 C 正確；選項 A 錯誤）。其 血清肌酸酐（serum creatinine, SCr） 0.8 mg/dL 屬正常（選項 B 錯誤）； D-dimer 正常（選項 D 錯誤）。\n\n【教材出處】PDF 第 12 章，Q196。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 12,
        "question": 196,
        "type": "SAQ",
        "number": 6
      }
    },
    {
      "id": 7,
      "question": "【臨床案例】J.H. 是一名 48 歲女性，無已知病史，因突發呼吸短促、右側疼痛及視力模糊就診急診。她否認非法藥物或吸菸史，確認有社交性飲酒（約每週 3 杯）。尿液毒物篩檢陰性。初始生命徵象：血壓 202/140 mm Hg、心率 88 次 / 分、呼吸 22 次 / 分、胸部與右側疼痛評分 4/10。初始實驗室數值： 血清肌酸酐（serum creatinine, SCr） 0.8 mg/dL、 AST 608 U/L、 ALT 458 U/L、 lipase 20 U/L、總膽紅素 1.0 mg/dL、直接膽紅素 0.4 mg/dL、 白血球計數（white blood cell count, WBC） 6 × 10³ cells/mm³、 Hb 11 g/dL、 Troponin T < 0.01 ng/mL、 D-dimer < 0.5 mcg/mL。胸部 X 光顯示中度雙側肋膜積水，無局部實質化病灶。胸部 CT 排除肺栓塞。病人目前未服用任何處方藥或成藥。\n\n針對 J.H. 的血壓控制，下列哪一項為最適當的初始治療策略？",
      "options": [
        "A. Phentolamine 1 mg 靜脈推注每 30 分鐘一次。",
        "B. metoprolol 25 mg 口服每 12 小時一次。",
        "C. Nitroprusside 0.25 mcg/kg/min 以靜脈持續輸注。",
        "D. Enalaprilat 10 mg 靜脈推注每 6 小時一次。"
      ],
      "answer": "C",
      "explanation": "高血壓急症合併急性標的器官損傷時，必須立即住進加護病房使用可滴定的靜脈注射降壓藥物（如 sodium nitroprusside、 nicardipine、 clevidipine 等），以便精準控制血壓降幅（選項 C 正確）。口服藥物（如口服 metoprolol）起效慢且無法精確滴定，不適用於高血壓急症（選項 B 錯誤）。 Phentolamine 僅保留用於嗜鉻細胞瘤或古柯鹼過量等兒茶酚胺危機（選項 A 錯誤）。 Enalaprilat 靜脈給藥降壓幅度不可預測且可能導致急性腎缺血，常用劑量為 0.625–1.25 mg， 10 mg 劑量過高且不適合作為一線滴定藥物（選項 D 錯誤）。\n\n【教材出處】PDF 第 12 章，Q197。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 12,
        "question": 197,
        "type": "SAQ",
        "number": 7
      }
    },
    {
      "id": 8,
      "question": "【臨床案例】J.H. 是一名 48 歲女性，無已知病史，因突發呼吸短促、右側疼痛及視力模糊就診急診。她否認非法藥物或吸菸史，確認有社交性飲酒（約每週 3 杯）。尿液毒物篩檢陰性。初始生命徵象：血壓 202/140 mm Hg、心率 88 次 / 分、呼吸 22 次 / 分、胸部與右側疼痛評分 4/10。初始實驗室數值： 血清肌酸酐（serum creatinine, SCr） 0.8 mg/dL、 AST 608 U/L、 ALT 458 U/L、 lipase 20 U/L、總膽紅素 1.0 mg/dL、直接膽紅素 0.4 mg/dL、 白血球計數（white blood cell count, WBC） 6 × 10³ cells/mm³、 Hb 11 g/dL、 Troponin T < 0.01 ng/mL、 D-dimer < 0.5 mcg/mL。胸部 X 光顯示中度雙側肋膜積水，無局部實質化病灶。胸部 CT 排除肺栓塞。病人目前未服用任何處方藥或成藥。\n\n針對 J.H. 的血壓降幅目標，下列何者最適當？",
      "options": [
        "A. 在前 60 分鐘內將平均動脈壓（mean arterial pressure, MAP）降低至多 25%。",
        "B. 在前 60 分鐘內將 平均動脈壓（mean arterial pressure, MAP）降低 50%。",
        "C. 在前 24 小時內將 平均動脈壓（mean arterial pressure, MAP）降低 25%。",
        "D. 在前 24 小時內將 平均動脈壓（mean arterial pressure, MAP）降低 50%。"
      ],
      "answer": "A",
      "explanation": "根據 AHA/ACC 高血壓急症指引，除非有主動脈剝離（需在 20 分鐘內降至 SBP < 120）、重度子癇前症或嗜鉻細胞瘤，一般的常規降壓目標為：在第一個小時內將 平均動脈壓（mean arterial pressure, MAP）降低不超過 20%–25% （選項 A 正確；選項 B 錯誤）；隨後在接下來的 2 至 6 小時內將血壓降至 160/100–110 mm Hg，並在 24–48 小時內逐步恢復正常，以避免因血壓過快驟降導致大腦、心臟及腎臟等重要器官灌流不足（選項 C 與 D 錯誤）。\n\n【教材出處】PDF 第 12 章，Q198。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 12,
        "question": 198,
        "type": "SAQ",
        "number": 8
      }
    },
    {
      "id": 9,
      "question": "【臨床案例】A.C. 是一名 50 歲男性，有胃食道逆流及慢性阻塞性肺病（chronic obstructive pulmonary disease, COPD）病史，因呼吸短促、心悸及疑似肺部疾病急性發作入院。在住院第 4 天， A.C. 在家庭醫學科病房突發目擊心跳停止。您所屬的緊急應變團隊接獲通報並抵達現場，此時床邊護理師已開始進行胸外按壓。\n\n下列關於胸外按壓的觀念何者最適當？",
      "options": [
        "A. 應每 5 分鐘輪換一次施救者以確保按壓持續。",
        "B. 胸外按壓能提高胸內壓並直接擠壓心臟，為重要器官提供氧氣輸送。",
        "C. 按壓速率應至少達到 140 次 / 分以維持足夠心輸出量。",
        "D. 每次中斷按壓進行脈搏檢查的時間不應超過 20 秒。"
      ],
      "answer": "B",
      "explanation": "胸外按壓的核心生理機轉是藉由提高胸腔內壓力與直接擠壓心臟，產生前向心血流以維持冠狀動脈與大腦等重要器官的血流與氧氣輸送（選項 B 正確）。施救者疲勞通常在 1–2 分鐘內發生，因此指南建議每 2 分鐘輪換一次施救者（選項 A 錯誤）。指南建議成人按壓速率為每分鐘 100–120 次，過快（如 >140）會減少心臟舒張充填時間（選項 C 錯誤）。脈搏檢查與處置中斷按壓時間應嚴格限制在 10 秒以內（選項 D 錯誤）。\n\n【教材出處】PDF 第 12 章，Q199。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 12,
        "question": 199,
        "type": "Case",
        "number": 1
      }
    },
    {
      "id": 10,
      "question": "【臨床案例】L.S. 是一名 66 歲女性，在安寧病房探視其丈夫。她在醫院餐廳排隊結帳時突然倒地。您所屬的緊急應變小組接獲召喚抵達現場。 L.S. 對聲音呼叫及拍打肩膀皆無反應，無呼吸且無頸動脈搏動。\n\n團隊準備使用甦醒球面罩（bag-mask）進行正壓通氣。下列哪一項敘述最為準確？",
      "options": [
        "A. 在高級呼吸道置入前，應以每分鐘 20 次的頻率進行過度換氣以快速糾正缺氧。",
        "B. 單人施救者使用甦醒球面罩的效果與雙人施救者相當。",
        "C. 心跳停止時心輸出量極低，過度通氣會增加胸內壓、減少靜脈回流並降低存活率。",
        "D. 使用甦醒球時應盡力擠壓整顆氣囊（1000–2000 mL）以確保潮氣量充足。"
      ],
      "answer": "C",
      "explanation": "心跳停止時全身血流量僅為正常的 10%–25%，氧氣需求與二氧化碳生成量均顯著減少。過度通氣（過多或過快的人工呼吸）會造成胸內壓持續升高，阻礙下腔靜脈回流至心臟，直接降低心輸出量與冠狀動脈灌注壓，研究已證實與急救存活率下降相關（選項 C 正確；選項 A 錯誤）。面罩密合度在雙人協同下遠優於單人（選項 B 錯誤）。成人潮氣量建議約 500–600 mL （見胸部可見起伏即可），不可將氣囊完全擠空（選項 D 錯誤）。\n\n【教材出處】PDF 第 12 章，Q200。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 12,
        "question": 200,
        "type": "Case",
        "number": 2
      }
    },
    {
      "id": 11,
      "question": "【臨床案例】T.V. 是一名 62 歲男性，有慢性肝病、低血糖及心房顫動病史。 2 天前因敗血症入住內科加護病房（medical intensive care unit, MICU），經積極輸液復甦與靜脈抗生素治療，未需使用升壓劑。在 加護病房（intensive care unit, ICU）第 3 天，監視器顯示 T.V. 出現心室纖維顫動（ventricular fibrillation, VF），隨即失去意識且摸不到脈搏。 內科加護病房（medical intensive care unit, MICU）團隊立即展開急救並貼上除顫貼片。\n\n關於除顫貼片（defibrillator pads）的擺放位置與電擊注意事項，下列何者最適當？",
      "options": [
        "A. 前外側（anterolateral）或前後側（anteroposterior）貼片擺放位置終止心室性心律不整的效果相當。",
        "B. 若病人胸前有經皮藥物貼片，可直接將除顫電極片貼在藥物貼片上方進行電擊。",
        "C. 若病人體內置有心臟節律器，電極片應直接貼在該裝置皮膚正上方以確保電流穿透。",
        "D. 體外去顫電擊時應同步觸發 R 波以避免誘發 心室頻脈（ventricular tachycardia, VT）。"
      ],
      "answer": "A",
      "explanation": "實證醫學顯示前外側（anterolateral）與前後側（anteroposterior）等四種電極貼片擺放位置，在終止心室心律不整的效能上皆同等有效（選項 A 正確）。若電極片貼在藥物貼片上方，電擊時會產生電阻阻抗並可能導致皮膚嚴重灼傷，應移除藥物貼片並擦拭皮膚後再貼（選項 B 錯誤）。植入式節律器或 ICD 之電極片應至少距離裝置 8 公分（1 英吋）以上，避免損壞機器或分流電流（選項 C 錯誤）。 心室顫動（ventricular fibrillation, VF）/pVT 為非同步去顫（defibrillation），不可使用同步電擊（選項 D 錯誤）。\n\n【教材出處】PDF 第 12 章，Q201。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 12,
        "question": 201,
        "type": "Case",
        "number": 3
      }
    },
    {
      "id": 12,
      "question": "【臨床案例】F.V. 是一名 63 歲女性，有糖尿病、 HFpEF、高血壓及 OSA 病史，因胸悶與不適就診急診。在急診突發意識喪失並呈現無脈搏心室頻脈（pVT）。團隊立即進行胸外按壓、貼上貼片並以 30:2 進行甦醒球通氣。電擊一次後恢復按壓，在下一次脈搏檢查時完成氣管內管插管。 F.V. 仍無脈搏，按壓持續進行。\n\n關於 F.V. 在置入進階呼吸道（advanced airway）後的急救復甦，下列哪一項敘述最為準確？",
      "options": [
        "A. 按壓與通氣比率應維持 30:2 以避免過度通氣。",
        "B. 進階呼吸道應在電擊去顫與 CPR 之前優先建立。",
        "C. 應立即將吸入氧氣濃度下調為室內空氣（21% FiO₂）。",
        "D. 應使用連續波形吐氣末二氧化碳分壓監測（quantitative waveform capnography）來確認插管位置並即時監控 CPR 品質。"
      ],
      "answer": "D",
      "explanation": "ACLS 最新指引強烈建議在置入氣管內管後，必須使用「連續波形二氧化碳監測儀（quantitative waveform capnography） 」來確認導管位置並連續監控 CPR 品質（若 PETCO₂ < 10 mm Hg 代表按壓品質不佳或冠狀動脈灌注不足；若突然大幅上升至 35–40 mm Hg 則為 ROSC 之敏銳指標）（選項 D 正確）。建立進階呼吸道後，通氣與按壓不再需要同步循環，改為持續按壓不中斷，每 6 秒給予一次人工呼吸（每分鐘 10 次） （選項 A 錯誤）。高品質 CPR 與除顫優先於高級呼吸道插管（選項 B 錯誤）。心跳停止急救期間應使用 100% 氧氣（選項 C 錯誤）。\n\n【教材出處】PDF 第 12 章，Q202。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 12,
        "question": 202,
        "type": "Case",
        "number": 4
      }
    },
    {
      "id": 13,
      "question": "【臨床案例】V.B. 是一名 62 歲男性，病史不詳，因意識不清且語無倫次來到急診。在急診觀察期間突發意識喪失且無脈搏。急診同仁立即啟動 CPR，心律分析顯示為 PEA。\n\n下列哪一項敘述最能準確描述適當的心跳停止處置？",
      "options": [
        "A. PEA 的存活率完全取決於藥物與進階呼吸道，因此插管與管路建立優先於 CPR。",
        "B. 應在持續進行 CPR 及送檢實驗室檢查的同時，系統性回顧並迅速處理 PEA 心跳停止的可逆原因（5H5T）。",
        "C. 因病人處於 PEA，應立即貼上電極片並給予非同步電擊。",
        "D. 目前缺乏任何復甦後照護策略能預防 PEA 復發或改善預後。"
      ],
      "answer": "B",
      "explanation": "PEA 與 Asystole 屬於不可電擊心律（選項 C 錯誤），其存活關鍵在於維持高品質按壓與尋找並逆轉潛在病因（5H5T： Hypovolemia, Hypoxia, Hydrogen ion, Hypo/Hyperkalemia, Hypothermia; Tension pneumothorax, Tamponade, Toxins, Thrombosis pulmonary/coronary）（選項 B 正確）。按壓優先於建立管路與插管（選項 A 錯誤）。復甦後照護（包括目標體溫管理、冠狀動脈再灌注、血流動力學支持）已被證實能改善預後並減少再次心跳停止（選項 D 錯誤）。\n\n【教材出處】PDF 第 12 章，Q203。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 12,
        "question": 203,
        "type": "Case",
        "number": 5
      }
    },
    {
      "id": 14,
      "question": "【臨床案例】M.G. 是一名 58 歲女性，有慢性退化性關節炎及消化性潰瘍病史，因疑似胃潰瘍出血導致低血容休克入住 內科加護病房（medical intensive care unit, MICU）。胃鏡完成潰瘍電燒止血後情況穩定。在 加護病房（intensive care unit, ICU）第 2 天， M.G. 突發嗜睡、缺氧並隨後停止心跳。 MICU 團隊趕到床邊，監視器顯示 心室顫動（ventricular fibrillation, VF）。急救依 ACLS 流程進行，病人預計接受 amiodarone。\n\n關於心跳停止中使用抗心律不整藥物，下列何者最適當？",
      "options": [
        "A. 應給予 amiodarone 150 mg 緩慢靜脈輸注超過 10 分鐘。",
        "B. amiodarone 不適用於 心室顫動（ventricular fibrillation, VF）心跳停止， lidocaine 是唯一推薦的藥物。",
        "C. 在第一次電擊前必須先給予抗心律不整藥物。",
        "D. 若選擇使用 amiodarone，第一劑推薦劑量為 300 mg 快速靜脈／骨內推注（IV/IO push）；亦可選用 lidocaine 1 至 1.5 mg/kg 作為替代。"
      ],
      "answer": "D",
      "explanation": "針對電擊無反應的頑固型 心室顫動（ventricular fibrillation, VF）/pVT， ACLS 指引建議抗心律不整藥物可選用 amiodarone 或 lidocaine。若選用 amiodarone，第一劑推薦劑量為 300 mg 靜脈給藥（intravenous, IV）/IO 快速推注（後續可追加 150 mg）；若選用 lidocaine，第一劑為 1–1.5 mg/kg 靜脈給藥（intravenous, IV）/IO （選項 D 正確；選項 B 錯誤）。 150 mg 緩慢輸注 10 分鐘是用於「有脈搏」 的穩定心律不整（選項 A 錯誤）。去顫電擊永遠優先於藥物，抗心律不整藥物在第 2 次或第 3 次電擊後給予（選項 C 錯誤）。\n\n【教材出處】PDF 第 12 章，Q204。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 12,
        "question": 204,
        "type": "Case",
        "number": 6
      }
    },
    {
      "id": 15,
      "question": "【臨床案例】K.G. 是一名 61 歲女性，有心房顫動、冠心症（6 年前接受三條冠狀動脈繞道手術 CABG）、糖尿病及退化性關節炎病史。因 PEA 心跳停止經急救後成功 ROSC，收治進入 內科加護病房（medical intensive care unit, MICU）接受目標體溫控制（TTM）。 K.G. 在 ROSC 後持續處於昏迷狀態，已接受氣管插管且血流動力學穩定（BP 94/72 mm Hg, HR 86 bpm）。\n\n關於目標體溫控制（temperature control），下列哪一項敘述最為準確？",
      "options": [
        "A. 低血糖是低溫治療的常見併發症，通常需要持續輸注高濃度葡萄糖。",
        "B. 在低溫治療期間，經細胞色素 P450 （CYP）代謝之藥物清除率顯著下降，應進行劑量調整或避免使用。",
        "C. 目標體溫控制的最佳持續時間應至少達 72 小時以上才能改善存活率。",
        "D. 目標體溫應設定在 28°C–30°C 以促進神經修復。"
      ],
      "answer": "B",
      "explanation": "體溫每下降 1°C，肝臟酵素活性與藥物代謝速率約降低 7%–11%， CYP 系統（特別是 CYP3A4、 CYP2C19）代謝活性顯著抑制，導致鎮靜止痛劑（如 midazolam、 fentanyl、 propofol）與神經肌肉阻斷劑清除率大幅降低並嚴重蓄積，需調整劑量並密切監測（選項 B 正確）。低溫會抑制 insulin 釋放並引起 insulin 阻抗，因此最常見的代謝併發症是「高血糖」而非低血糖（選項 A 錯誤）。 TTM 的常規冷卻維持時間通常為 24 小時（選項 C 錯誤）。目標核心體溫應控制在 32°C–36°C，過低（如 <30°C）會引發致命性心室心律不整與凝血障礙（選項 D 錯誤）。\n\n【教材出處】PDF 第 12 章，Q205。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 12,
        "question": 205,
        "type": "Case",
        "number": 7
      }
    },
    {
      "id": 16,
      "question": "【臨床案例】B.B. 是一名 44 歲男性，無重大病史，因胸部劇烈「撕裂感（ripping sensation） 」疼痛就診急診。吸菸史每日 1.5 包共 20 年。急診胸部 X 光顯示縱膈腔顯著變寬（mediastinal widening）。心肌酵素正常。實驗室數值： Na 135 mEq/L, K 4.3 mEq/L, HCO₃⁻ 24 mEq/L, 血清肌酸酐（serum creatinine, SCr） 0.55 mg/dL, 血糖 110 mg/dL, DBil 0.2 mg/dL, AST 39 U/L。急診胸部 CT 血管攝影顯示急性 A 型與 B 型主動脈剝離。生命徵象：血壓 208/140 mm Hg、心率 120 次 / 分。\n\n下列哪項處置最適合 B.B.？",
      "options": [
        "A. 使用 esmolol 在前 60 分鐘內達到 平均動脈壓（mean arterial pressure, MAP）降低 25% 的目標。",
        "B. 使用 lisinopril 加上 hydrochlorothiazide 在前 24 小時內將血壓降至 160/100 mm Hg。",
        "C. 使用 labetalol 在前 60 分鐘內達到 平均動脈壓（mean arterial pressure, MAP）降低 25% 且心率小於 60 次 / 分。",
        "D. 使用 esmolol 合併或不合併 nitroprusside，以盡快達到收縮壓（systolic blood pressure, SBP）小於 100–120 mm Hg 且心率小於 60 次 / 分。"
      ],
      "answer": "D",
      "explanation": "此病人為高血壓急症併發急性主動脈剝離（acute aortic dissection）。主動脈剝離具有特殊的病理生理學惡化機轉，動脈壁的剪力（shear stress, dP/dt）會加速內膜撕裂擴展，因此需要極為迅速地同時控制心率與血壓。目標是在數分鐘內將心率降至 < 60 次 / 分，並將 收縮壓（systolic blood pressure, SBP）降至 < 100–120 mm Hg （選項 D 正確；選項 A、 B、 C 錯誤，因其降幅過慢或目標不足）。處方上可使用 labetalol （具 α 與 β 阻斷作用）或 esmolol 加上血管擴張劑（如 nitroprusside 或 nicardipine）。\n\n【教材出處】PDF 第 12 章，Q206。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 12,
        "question": 206,
        "type": "Case",
        "number": 8
      }
    }
  ],
  "13": [
    {
      "id": 1,
      "question": "【臨床案例】一名 25 歲女性因疑似 acetaminophen 過量被送至急診室。服藥時間不詳。就診時測不到血中 acetaminophen 濃度，但其 ALT 與 AST 濃度分別高達 3500 IU/L 與 2500 IU/L。病人明顯意識混亂、言語無條理，但可被叫醒。其他重要實驗室數值包括總膽紅素 3.0 mg/dL、鹼性磷酸酶（Alk Phos） 500 IU/L、 白血球計數（white blood cell count, WBC） 12 × 10³ cells/mm³、血小板 90,000/mm³、國際標準化比值（international normalized ratio, INR） 2.6。\n\n下列哪一個選項最能代表使該病人符合 acetaminophen 引起之急性肝衰竭（ALF）診斷的兩項核心徵象或症狀？",
      "options": [
        "A. 黃疸（Jaundice）與肝性腦病變（Encephalopathy）。",
        "B. 血小板低下（Thrombocytopenia）與肝性腦病變。",
        "C. 凝血功能異常（Coagulopathy）與肝性腦病變。",
        "D. 白血球增多（Leukocytosis）與肝性腦病變。"
      ],
      "answer": "C",
      "explanation": "根據美國肝病研究學會（AASLD）與美國急性肝衰竭研究小組的定義，急性肝衰竭（ALF）的核心定義為：在既往無肝病史的病人中，出現凝血功能異常（通常定義為 INR ≥ 1.5）合併任何程度之肝性腦病變（選項 C 正確）。雖然黃疸、血小板低下與白血球增多常伴隨發生，但並非 ALF 的必備診斷核心要件（選項 A、 B、 D 錯誤）。\n\n【教材出處】PDF 第 13 章，Q207。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 13,
        "question": 207,
        "type": "SAQ",
        "number": 1
      }
    },
    {
      "id": 2,
      "question": "【臨床案例】一名 25 歲女性因疑似 acetaminophen 過量被送至急診室。服藥時間不詳。就診時測不到血中 acetaminophen 濃度，但其 ALT 與 AST 濃度分別高達 3500 IU/L 與 2500 IU/L。病人明顯意識混亂、言語無條理，但可被叫醒。其他重要實驗室數值包括總膽紅素 3.0 mg/dL、鹼性磷酸酶（Alk Phos） 500 IU/L、 白血球計數（white blood cell count, WBC） 12 × 10³ cells/mm³、血小板 90,000/mm³、國際標準化比值（international normalized ratio, INR） 2.6。\n\n針對其疑似 acetaminophen 引起之 ALF，下列哪一項處置最適當？",
      "options": [
        "A. 給予靜脈注射 acetylcysteine 21 小時療程，若有必要應持續給藥直至 ALF 徵象與症狀緩解。",
        "B. 此時不需 acetylcysteine 治療，因其血中 acetaminophen 濃度已測不到。",
        "C. 給予口服 acetylcysteine 72 小時療程。",
        "D. 口服或靜脈注射 acetylcysteine 皆可使用，因兩者療效完全相同。"
      ],
      "answer": "A",
      "explanation": "只要臨床懷疑 acetaminophen 為 ALF 致病因，無論當前測得之血中濃度為何，皆應立即給予 acetylcysteine （選項 B 錯誤）。當病人出現等級大於 I 級的肝性腦病變、低血壓或無法耐受口服時，首選靜脈注射途徑（選項 C 與 D 錯誤）。對於已進展為肝衰竭的嚴重中毒病人，靜脈 acetylcysteine 治療不應侷限於標準 21 小時，應持續延長給藥直至腦病變緩解且 國際標準化比值（international normalized ratio, INR）顯著改善（選項 A 正確）。\n\n【教材出處】PDF 第 13 章，Q208。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 13,
        "question": 208,
        "type": "SAQ",
        "number": 2
      }
    },
    {
      "id": 3,
      "question": "【臨床案例】一名 46 歲男性因酒精性嚴重急性胰臟炎（AP）入院。相關病史包括酒精性肝硬化，並曾多次因肝性腦病變併發吸入性肺炎入院。入院後先以乳酸林格氏液（LR）進行初始靜脈輸液復甦。\n\n針對該病人的營養支持，下列哪項處置最佳？",
      "options": [
        "A. 維持禁食（NPO）讓胰臟充分休息，直到急性胰臟炎完全緩解。",
        "B. 啟動全靜脈營養（TPN）。",
        "C. 經鼻胃管（NG tube）給予腸道營養。",
        "D. 經鼻空腸管（NJ tube）給予腸道營養。"
      ],
      "answer": "D",
      "explanation": "多項隨機對照試驗已推翻過去 AP 需長期禁食的觀念，早期腸道營養（enteral nutrition, EN）比全靜脈營養（TPN）能顯著降低死亡率、感染性併發症與器官衰竭（選項 A 與 B 錯誤）。腸道營養可經由鼻胃（NG）或鼻空腸（NJ）給予；但此病人有肝性腦病變及多次吸入性肺炎病史，屬於吸入高風險族群，經幽門後之鼻空腸管（NJ）餵食能顯著降低吸入性肺炎風險，因而優於鼻胃管（選項 D 正確；選項 C 錯誤）。\n\n【教材出處】PDF 第 13 章，Q209。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 13,
        "question": 209,
        "type": "SAQ",
        "number": 3
      }
    },
    {
      "id": 4,
      "question": "【臨床案例】一名 37 歲女性因病態性肥胖接受胃繞道手術（Roux-en-Y）。術後併發腸皮瘻管（enterocutaneous fistula）、發燒與白血球增多。已啟動廣效抗生素並於瘻管處放置傷口負壓輔助癒合系統（wound VAC）。昨日瘻管引流量為 570 mL/day，今日為 250 mL/day。\n\n關於這兩次紀錄間的瘻管引流量變化，下列敘述何者最為準確？",
      "options": [
        "A. 兩天的引流量皆屬於低排量（low output）。",
        "B. 其引流量定義為由高排量轉變為低排量。",
        "C. 其引流量定義為由高排量轉變為中排量（high converted to moderate output）。",
        "D. 兩天的引流量皆屬於中排量。"
      ],
      "answer": "C",
      "explanation": "腸皮瘻管的引流量分類標準為：高排量（high output） > 500 mL/day；中排量（moderate output） 200–500 mL/day；低排量（low output） < 200 mL/day。該病人引流量從 570 mL/day 降至 250 mL/day，是由高排量改善轉變為中排量（選項 C 正確；選項 A、 B、 D 分類皆不正確）。\n\n【教材出處】PDF 第 13 章，Q210。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 13,
        "question": 210,
        "type": "SAQ",
        "number": 4
      }
    },
    {
      "id": 5,
      "question": "【臨床案例】一名 68 歲男性預計接受大腸切除術。考量該術式併發術後腸阻塞（POI）的機率極高，術前給予 alvimopan。為降低 alvimopan 相關之心血管風險，美國 美國食品藥物管理局（Food and Drug Administration, FDA）透過 EASE 計畫限制其使用規範。\n\n下列何者最能代表該項使用限制？",
      "options": [
        "A. 啟動用藥時需進行持續心電圖監測，以監控校正後 QT 間期（QTc）延長。",
        "B. 嚴格限制於短期住院使用，且每位病人最多不得超過 15 劑（limit of 15 doses）。",
        "C. 將 alvimopan 劑量下調為 6 mg 每日兩次。",
        "D. 在既往有心肌梗塞病史的病人中列為絕對禁忌。"
      ],
      "answer": "B",
      "explanation": "在長期治療鴉片類引起的腸道功能障礙研究中， alvimopan 與心肌梗塞風險增加相關。為防範此心血管風險， 美國食品藥物管理局（Food and Drug Administration, FDA）透過 EASE 計畫嚴格限制其僅能用於短期住院外科手術病人，且總劑量上限為 15 劑（每次 12 mg，術前一劑加術後最多 7 天 BID）（選項 B 正確）。 FDA 核准劑量即為 12 mg 每日兩次（twice daily, BID） （選項 C 錯誤）；該藥不需 QTc 監測（選項 A 錯誤）；有 MI 病史並非絕對禁忌症（選項 D 錯誤）。\n\n【教材出處】PDF 第 13 章，Q211。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 13,
        "question": 211,
        "type": "SAQ",
        "number": 5
      }
    },
    {
      "id": 6,
      "question": "【臨床案例】一名 40 歲女性預計接受常規開腹手術切除肝臟惡性腫瘤。考量手術範圍廣泛、預期使用吸入性麻醉劑及圍手術期鴉片類止痛藥，團隊擬定多模式處方以預防術後噁心嘔吐（PONV）。\n\n關於各預防藥物相對於手術的給藥時機，下列描述何者最佳？",
      "options": [
        "A. dexamethasone 4 mg 靜脈注射於手術結束時給予。",
        "B. ondansetron 4 mg 靜脈注射於麻醉誘導時給予。",
        "C. Neurokinin-1 受體拮抗劑（aprepitant 40–125 mg）於手術結束時給予。",
        "D. droperidol 0.625–1.25 mg 靜脈注射於手術結束時給予。"
      ],
      "answer": "D",
      "explanation": "PONV 預防藥物的最佳給藥時機各異： dexamethasone 與 Aprepitant 起效較慢，應在麻醉誘導時（induction）給藥（選項 A 與 C 錯誤）；而 ondansetron （5-HT3 拮抗劑）與 droperidol （dopamine 拮抗劑）則以在手術即將結束時（end of surgery）給予預防效果最佳（選項 D 正確；選項 B 錯誤）。\n\n【教材出處】PDF 第 13 章，Q212。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 13,
        "question": 212,
        "type": "SAQ",
        "number": 6
      }
    },
    {
      "id": 7,
      "question": "【臨床案例】一名 69 歲女性因胃潰瘍引起之上消化道出血（UGIB）入住外科 加護病房（intensive care unit, ICU）。因失血量大目前需輸血。病因檢查顯示其幽門螺旋桿菌（Helicobacter pylori）檢驗呈陽性。\n\n下列何者最能反映對該病人不適當的治療選項？",
      "options": [
        "A. octreotide 50 mcg 靜脈推注，隨後以 50 mcg/h 持續輸注 72 小時。",
        "B. 使用質子幫浦抑制劑（PPI）合併抗生素進行 14 天滅菌治療。",
        "C. 於入院 24 小時內完成治療性內視鏡檢查。",
        "D. 輸注紅血球使血紅素（Hb）維持大於 7 g/dL。"
      ],
      "answer": "A",
      "explanation": "octreotide 為 somatostatin 類似物，其適應症為「食道靜脈曲張破裂出血（variceal bleeding） 」，對於非靜脈曲張性潰瘍出血（peptic ulcer bleeding）並無實證療效，因此常規使用 octreotide 是不適當的處置（選項 A 為不適當選項，故為正確答案）。其餘處置皆為標準指引推薦： H. pylori 陽性應接受 14 天除菌治療（B 適當）；高風險 UGIB 應於 24 小時內行胃鏡（C 適當）；限制性輸血策略維持 Hb > 7 g/dL （D 適當）。\n\n【教材出處】PDF 第 13 章，Q213。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 13,
        "question": 213,
        "type": "SAQ",
        "number": 7
      }
    },
    {
      "id": 8,
      "question": "【臨床案例】甲狀腺風暴（thyroid storm）是一種危及生命的內分泌急症。\n\n下列哪一組實驗室檢驗異常最能代表典型甲狀腺風暴病人的數值表現？",
      "options": [
        "A. TSH 高、 T₃ 高、 T₄ 高。",
        "B. TSH 低、 T₃ 高、 T₄ 高。",
        "C. TSH 低、 T₃ 高、 T₄ 低。",
        "D. TSH 低、 T₃ 低、 T₄ 低。"
      ],
      "answer": "B",
      "explanation": "甲狀腺風暴為原發性甲狀腺機能亢進的極端重症表現，過量的甲狀腺素（游離 T3 與 T4 顯著升高）會對腦下垂體產生強烈負回饋抑制，導致促甲狀腺激素（TSH）顯著受抑制甚至測不到（低 TSH，高 T3、高 T4）（選項 B 正確；選項 A、 C、 D 錯誤）。高 TSH 合併低 T3/T4 則見於黏液水腫性昏迷（myxedema coma）。\n\n【教材出處】PDF 第 13 章，Q214。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 13,
        "question": 214,
        "type": "SAQ",
        "number": 8
      }
    },
    {
      "id": 9,
      "question": "【臨床案例】一名 60 歲女性類風濕性關節炎病人， 3 個月前開始服用 azathioprine，現因藥物引起之肝損傷（DILI）併發非 acetaminophen 急性肝衰竭（NAI-ALF）就診。就診時 ALT 500 IU/L、 AST 350 IU/L、 國際標準化比值（international normalized ratio, INR） 1.7，表現輕度意識混亂與嗜睡。\n\n下列哪一項介入措施被證實對治療非 acetaminophen 急性肝衰竭（NAI-ALF）最為有效？",
      "options": [
        "A. 靜脈注射 acetylcysteine 21 小時療程。",
        "B. 靜脈注射 acetylcysteine 72 小時（或更長）療程。",
        "C. 口服 acetylcysteine 72 小時療程。",
        "D. 口服麩醯胺酸（glutamine）補充劑。"
      ],
      "answer": "B",
      "explanation": "大型前瞻性對照試驗證實，對於早期（第 I–II 級腦病變）非 acetaminophen 引起的急性肝衰竭（NAI-ALF），延長靜脈注射 acetylcysteine 治療（給予至 72 小時以上）可顯著改善免於肝臟移植之存活率（transplant-free survival） （選項 B 正確）。標準 21 小時靜脈方案時間過短（選項 A 錯誤）；口服途徑在此類具腦病變與吸收障礙之急性重症病人中療效不如靜脈注射且難以耐受（選項 C 錯誤）；麩醯胺酸無治療效益（選項 D 錯誤）。\n\n【教材出處】PDF 第 13 章，Q215。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 13,
        "question": 215,
        "type": "Case",
        "number": 1
      }
    },
    {
      "id": 10,
      "question": "【臨床案例】一名 33 歲男性因 acetaminophen 中毒併發急性肝衰竭入院。服藥後已過 72 小時，理學檢查顯示重度腦病變且對疼痛無反應。置入顱內壓（intracranial pressure, ICP）監測器，顯示顱內壓急性升高至 30 mm Hg。\n\n針對其急性顱內壓（intracranial pressure, ICP）升高，下列何者最適當？",
      "options": [
        "A. 持續輸注高張 sodium chloride 溶液以維持血鈉 145–155 mEq/L。",
        "B. 靜脈給予甘露醇（mannitol） 0.5–1 g/kg （或 0.5 mg/kg 規格誤植校正）單次輸注。",
        "C. 進行過度換氣以將 PaCO₂ 降至 25–30 mm Hg。",
        "D. 持續輸注 thiopental。"
      ],
      "answer": "B",
      "explanation": "在急性肝衰竭併發急性高顱內壓（ICP > 20–25 mm Hg）的急性突發發作期，首選一線滲透降腦壓藥物為單次快速輸注 mannitol （0.5–1 g/kg，若滲透壓 < 320 mOsm/L）（選項 B 正確）。高張 sodium chloride 溶液通常用於維持基礎滲透壓預防高腦壓（選項 A 錯誤）。過度換氣會引起嚴重腦血管收縮導致腦缺血，僅保留用於即將腦疝脫的極短暫急救過渡（選項 C 錯誤）。 Thiopental 等巴比妥類僅在對滲透壓治療完全無效之頑固性高腦壓才考慮（選項 D 錯誤）。\n\n【教材出處】PDF 第 13 章，Q216。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 13,
        "question": 216,
        "type": "Case",
        "number": 2
      }
    },
    {
      "id": 11,
      "question": "【臨床案例】一名 44 歲女性因廣泛性腹痛 2 天就診急診。澱粉酶 700 IU/L、解脂酶 800 IU/L。經乳酸林格氏液靜脈輸注復甦及鼻空腸管（NJ）腸道營養。然而 48 小時後病情仍未改善，腹部 CT 影像顯示胰臟壞死範圍達 40%。\n\n此時進行下列哪一項處置最佳？",
      "options": [
        "A. 應預防性給予 piperacillin/tazobactam 以預防感染性壞死性胰臟炎。",
        "B. 必須立即進行壞死性胰臟炎外科清創手術。",
        "C. 暫緩使用抗生素，除非病人出現全身性感染徵候。",
        "D. 應預防性給予 meropenem 以預防感染性壞死性胰臟炎。"
      ],
      "answer": "C",
      "explanation": "最新國際急性胰臟炎指南一致強烈建議：對於無菌性壞死性胰臟炎（即便是廣泛壞死）， 『不建議常規預防性給予抗生素』（無論是碳青黴烯類或廣效青黴素類），因為預防性抗生素無法降低死亡率或感染發生率，反而會篩選出抗藥性菌株與真菌感染（選項 C 正確；選項 A 與 D 錯誤）。壞死組織在發病前數週通常為無菌，外科清創手術應盡可能延後至發病 4 週後包裹形成（walled-off necrosis）再評估微創引流，急性期嚴禁盲目手術（選項 B 錯誤）。\n\n【教材出處】PDF 第 13 章，Q217。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 13,
        "question": 217,
        "type": "Case",
        "number": 3
      }
    },
    {
      "id": 12,
      "question": "【臨床案例】一名 34 歲病態性肥胖女性， 1 週前接受胃繞道手術，現因腸皮瘻管入住外科 加護病房（intensive care unit, ICU）。目前每日瘻管引流量約 600 mL/day （高排量）。\n\n針對其高排量瘻管，下列哪一項介入措施『未被證實』與減少瘻管引流量相關？",
      "options": [
        "A. 靜脈持續輸注 somatostatin 250 mcg/h。",
        "B. 皮下注射 octreotide 100 mcg 每日三次。",
        "C. 全靜脈營養（TPN）。",
        "D. 口服麩醯胺酸（glutamine） 0.3 g/kg/day。"
      ],
      "answer": "D",
      "explanation": "文獻證實 somatostatin 及其類似物（somatostatin 靜脈輸注、 octreotide 皮下注射）能顯著抑制胃腸消化液分泌，減少瘻管引流量並縮短癒合時間（選項 A 與 B 正確）。 TPN 能使腸道完全休息減少消化液刺激，亦與排量減少相關（選項 C 正確）。相反地，麩醯胺酸（glutamine）補充劑在多項研究中均未顯示能減少瘻管引流量或加速癒合（選項 D 正確，代表未被證實有效的介入）。\n\n【教材出處】PDF 第 13 章，Q218。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 13,
        "question": 218,
        "type": "Case",
        "number": 4
      }
    },
    {
      "id": 13,
      "question": "【臨床案例】一名 40 歲男性預計接受大腸切除術。考量該手術之複雜度及圍手術期鴉片類與吸入性麻醉的使用，團隊擬定計畫預防術後腸阻塞（POI）。\n\n下列哪一種藥物最適合作為降低術後腸阻塞（POI）發生率的推薦？",
      "options": [
        "A. 術後使用 hydromorphone 病人自控式止痛（PCA）取代 morphine。",
        "B. 手術前口服 alvimopan 12 mg，術後持續每日兩次最多 7 天。",
        "C. 術後靜脈給予 metoclopramide 5 mg 每 6 小時一次共 7 天。",
        "D. 術後皮下給予 octreotide 100 mcg 每 8 小時一次共 7 天。"
      ],
      "answer": "B",
      "explanation": "Alvimopan 為周邊選擇性 µ- 鴉片受體拮抗劑（PAMORA），不通過血腦障壁，能在維持中樞止痛效果的同時，專一性阻斷腸道 µ 受體，是目前唯一經大型隨機對照試驗證實且 美國食品藥物管理局（Food and Drug Administration, FDA）核准能顯著加速大腸手術後腸道功能恢復、縮短 POI 期間與住院天數的藥物（選項 B 正確）。所有鴉片類藥物（包括 hydromorphone）皆會引起腸道蠕動抑制（選項 A 錯誤）。 Metoclopramide 對預防 POI 證據不一致； octreotide 反而會抑制腸道蠕動（選項 C 與 D 錯誤）。\n\n【教材出處】PDF 第 13 章，Q219。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 13,
        "question": 219,
        "type": "Case",
        "number": 5
      }
    },
    {
      "id": 14,
      "question": "【臨床案例】一名 27 歲女性預計接受經腹全子宮切除術。她是無吸菸者，有顯著的暈車 / 動暈症（motion sickness）病史。手術期間預計接受吸入性全身麻醉，且術後可能需要高劑量鴉片類止痛藥。\n\n考量該病人的 PONV 風險，為有效預防術後噁心嘔吐，下列哪種處置最佳？",
      "options": [
        "A. 病人屬於 PONV 高風險群（Apfel 4 分）；應於手術前晚給予經皮 scopolamine 貼片，麻醉誘導時給予 dexamethasone 4 mg 靜脈給藥（intravenous, IV），並於手術結束時給予 ondansetron 4 mg 靜脈給藥（intravenous, IV）。",
        "B. 病人屬於中度風險群；僅需於誘導時給予 dexamethasone 4 mg 靜脈給藥（intravenous, IV）並於結束時給予 ondansetron 4 mg 靜脈給藥（intravenous, IV）。",
        "C. 病人屬於高風險群；僅需於麻醉誘導時給予單一劑量 dexamethasone 4 mg 靜脈給藥（intravenous, IV）。",
        "D. 病人屬於低風險群；無需任何藥物預防介入。"
      ],
      "answer": "A",
      "explanation": "根據簡化 Apfel 評分標準，該病人具備全部 4 項危險因子：女性、非吸菸者、有動暈症病史、術後使用鴉片類藥物， PONV 發生率高達 80% 屬極高危險群（選項 B 與 D 錯誤）。指引建議對於高風險群病人，應採取結合 2 至 3 種不同藥理機轉的多模式預防處方（如抗膽鹼貼片 + 皮質類固醇 + 5-HT3 拮抗劑）（選項 A 正確；選項 C 單用一種不足）。\n\n【教材出處】PDF 第 13 章，Q220。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 13,
        "question": 220,
        "type": "Case",
        "number": 6
      }
    },
    {
      "id": 15,
      "question": "【臨床案例】一名 27 歲男性有克隆氏症（Crohn disease）病史，因自直腸解大量鮮紅色血便就診急診。病人呈現低血壓（收縮壓 85 mm Hg, MAP 58 mm Hg），鼻胃管沖洗抽吸出「咖啡渣樣（coffee-ground） 」物質。值班醫師正聯絡胃腸鏡團隊安排胃鏡檢查。\n\n關於該病人的處置照護，下列哪項敘述最為準確？",
      "options": [
        "A. 胃鏡是正確處置，但必須等到 PPI 持續輸注啟動並完成數小時後方可進行。",
        "B. 應儘快啟動 PPI 持續輸注，並於胃鏡術後常規持續 48 小時。",
        "C. 病人很可能是下消化道出血，應優先進行大腸鏡而非胃鏡檢查。",
        "D. 雖然鮮血便常提示下消化道出血，但病人合併嚴重低血壓且鼻胃管抽吸出咖啡渣，高度懷疑為大出血之上消化道來源，應儘快啟動 PPI 輸注並緊急安排胃鏡（EGD）。"
      ],
      "answer": "D",
      "explanation": "雖然直腸鮮血便常被認為源自下消化道，但當發生嚴重上消化道大出血（massive UGIB）且腸蠕動加速時，血液未及消化即可直接經直腸快速排出，並常伴隨休克；本案鼻胃管抽吸出咖啡渣液明確證實上消化道有活動性出血源，因此必須以緊急胃鏡（EGD）與高劑量 PPI 靜脈治療為最優先（選項 D 正確；選項 C 錯誤）。胃鏡應儘快進行，不應延誤（選項 A 錯誤）。 PPI 在胃鏡評估若非高危險病灶，不需盲目持續輸注 48 小時（選項 B 敘述不完全）。\n\n【教材出處】PDF 第 13 章，Q221。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 13,
        "question": 221,
        "type": "Case",
        "number": 7
      }
    },
    {
      "id": 16,
      "question": "【臨床案例】一名 23 歲男性（體重 80 kg）因急性意識狀態改變與核心體溫 94°F （34.4°C）就診急診。他有甲狀腺機能低下病史，但家屬表示約 1 週前他自行停用所有藥物。醫療團隊評估後診斷為黏液水腫性昏迷（myxedema coma）。\n\n針對此病人，下列哪一項為最適當的治療藥物選項？",
      "options": [
        "A. 靜脈注射 levothyroxine 400 mcg 單次負荷劑量，隨後每日給予 125 mcg （同時先給予皮質類固醇）。",
        "B. insulin 持續輸注滴定以控制血糖在 140–180 mg/dL。",
        "C. 口服 propylthiouracil 200 mg 每 4 小時一次。",
        "D. 口服 propranolol 60 mg 每 4 小時一次。"
      ],
      "answer": "A",
      "explanation": "黏液水腫性昏迷為致命性極端甲狀腺機能低下急症，治療核心為立即靜脈給予 levothyroxine （T4）負荷劑量 200–400 mcg （隨後每日 1.6 mcg/kg 靜脈維持），且給予 levothyroxine 前必須先給予應激劑量類固醇（hydrocortisone）以防引發腎上腺危機（選項 A 正確）。 Propylthiouracil 與 propranolol 是甲狀腺風暴（甲狀腺機能亢進）的治療用藥，若用於黏液水腫性昏迷會致死（選項 C 與 D 錯誤）。\n\n【教材出處】PDF 第 13 章，Q222。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 13,
        "question": 222,
        "type": "Case",
        "number": 8
      }
    }
  ],
  "14": [
    {
      "id": 1,
      "question": "【臨床案例】在加護病房（intensive care unit, ICU）查房時，醫療團隊使用一套能使所有重症病人獲益的「常規介入查檢表（checklist） 」。\n\n下列哪一組介入措施最為有效？",
      "options": [
        "A. 對所有收治入住 加護病房（intensive care unit, ICU）的病人啟動壓力性潰瘍預防（SUP），並於適當時停用鎮靜劑。",
        "B. 於適當時啟動腸道營養，並對所有病人常規使用機械性靜脈血栓栓塞（venous thromboembolism, VTE）預防。",
        "C. 床頭抬高 30–45 度以預防院內型肺炎，並每日評估鎮靜中斷（sedation interruption）以維持輕度鎮靜。",
        "D. 對所有病人啟動 insulin 輸注以維持血糖，並進行例行性導尿管留置評估。"
      ],
      "answer": "C",
      "explanation": "FAST-HUG 記憶口訣是重症照護最具實證效益的查檢表。其中床頭抬高 30–45 度能顯著降低呼吸器相關肺炎（ventilator-associated pneumonia, VAP）風險；每日鎮靜中斷（daily sedation interruption）則能縮短機械通氣天數與 加護病房（intensive care unit, ICU）住院期（選項 C 正確）。壓力性潰瘍預防（SUP）僅應針對具有危險因子（如呼吸器 >48 小時或凝血異常）的病人給予，不可對所有入住者盲目給藥（選項 A 錯誤）。藥物性血栓預防在無禁忌時優於單純機械性預防（選項 B 錯誤）。insulin 輸注僅在血糖超過 180 mg/dL 時啟動，目標控制在 140–180 mg/dL，非人人需要（選項 D 錯誤）。\n\n【教材出處】PDF 第 14 章，Q223。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 14,
        "question": 223,
        "type": "SAQ",
        "number": 1
      }
    },
    {
      "id": 2,
      "question": "【臨床案例】針對重症病人的壓力性黏膜病變（SRMD）與壓力性潰瘍預防（SUP）藥物機轉。\n\n下列哪一項敘述最為正確？",
      "options": [
        "A. Sucralfate 能顯著提高胃內 pH 值達到抑酸效果。",
        "B. 相較於 H₂ 受體拮抗劑（H₂RA），質子幫浦抑制劑（PPI）已被大型試驗證實能顯著降低臨床顯著出血的發生率。",
        "C. 持續使用 H₂ 受體拮抗劑（H₂RA）會產生耐受性（tolerance），而 PPI 則無耐受性問題。",
        "D. 制酸劑（antacids）每日給予至多 3 次即可有效預防壓力性潰瘍。"
      ],
      "answer": "C",
      "explanation": "持續使用 H₂RA 會因胃壁細胞受體上調產生快速耐受性（tachyphylaxis/tolerance），在給藥 48–72 小時後抑酸效果即顯著衰退，而 PPI 則無此耐受性現象（選項 C 正確）。 Sucralfate 是在黏膜表面形成物理保護層，不改變胃內 pH 值（選項 A 錯誤）。多項大型試驗（如 PEPTIC 試驗）顯示 PPI 與 H₂RA 在預防臨床顯著胃腸道出血或 90 天死亡率上無統計學顯著差異（選項 B 錯誤）。制酸劑需每 1–2 小時頻繁給藥維持 pH > 3.5 才具預防效果，實務上不可行（選項 D 錯誤）。\n\n【教材出處】PDF 第 14 章，Q224。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 14,
        "question": 224,
        "type": "SAQ",
        "number": 2
      }
    },
    {
      "id": 3,
      "question": "【臨床案例】一名 66 歲男性因腹痛、噁心與意識狀態改變收治 加護病房（intensive care unit, ICU）。病史包括酒精性肝硬化、心房顫動、慢性腎臟病（CKD）及糜爛性食道炎（erosive esophagitis）。病人接受氣管插管並在呼吸器上穩定。留置鼻胃管（NGT）且腸道管灌耐受良好。\n\n針對預防壓力性出血，下列哪一項建議最佳？",
      "options": [
        "A. pantoprazole 40 mg 靜脈注射每日兩次。",
        "B. Ranitidine 50 mg 靜脈注射每日三次。",
        "C. Famotidine 20 mg 每日兩次經鼻胃管（NGT）給予。",
        "D. Omeprazole 懸浮液 20 mg 每日一次經鼻胃管（NGT）給予。"
      ],
      "answer": "D",
      "explanation": "病人接受機械通氣超過 48 小時，具備明確的 SUP 適應症。由於留置 NGT 且腸道餵食耐受良好，首選經腸道給藥而非靜脈注射（選項 A 與 B 錯誤）。病人合併有糜爛性食道炎（erosive esophagitis），指南明確指出 PPI 在治療與預防嚴重食道糜爛病灶的效果顯著優於 H₂RA；經 NGT 給予即溶或懸浮劑型之 omeprazole 既符合腸道給藥原則，又能提供足夠抑酸保護（選項 D 正確；選項 C 錯誤）。\n\n【教材出處】PDF 第 14 章，Q225。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 14,
        "question": 225,
        "type": "SAQ",
        "number": 3
      }
    },
    {
      "id": 4,
      "question": "【臨床案例】一名 51 歲女性因重度脫水導致低血容性休克收治 加護病房（intensive care unit, ICU）。她主訴腹瀉與倦怠 5 天，近期無感染病史或醫療機構接觸史。病史包含甲狀腺機能低下及 GERD。用藥包括 levothyroxine 25 mcg 每日一次（once daily, QD）及 famotidine 20 mg 睡前（at bedtime, QHS）。日前基層醫師因 GERD 症狀加劇將 famotidine 改為 omeprazole 20 mg QHS。住院期間檢驗困難梭狀桿菌（CDI）呈陽性。\n\n關於質子幫浦抑制劑（PPI）與困難梭狀桿菌感染（CDI）的相關性，下列敘述何者最適當？",
      "options": [
        "A. PPI 會降低胃酸分泌導致胃酸缺乏（hypochlorhydria），從而降低人體對外來致病菌的防禦力，為誘發 CDI 的潛在危險因子。",
        "B. 前瞻性隨機對照試驗已明確證實 PPI 的使用與 CDI 風險呈因果關聯。",
        "C. 實證已證明 PPI 使用與 CDI 風險之間完全毫無關聯。",
        "D. 各文獻在探討 PPI 與 CDI 相關性時，皆採用完全相同的 CDI 診斷定義及感染管制標準。"
      ],
      "answer": "A",
      "explanation": "正常胃酸具備強大的天然殺菌屏障功能； PPI 強效抑酸造成的低胃酸狀態（hypochlorhydria）使耐酸性較差之細菌或梭菌孢子得以在腸道存活繁殖，多項大型觀察性流行病學世代研究已確認 PPI 是 CDI 的獨立危險因子（選項 A 正確；選項 C 錯誤）。目前唯一的隨機對照試驗次要終點並未得出統計學顯著差異（選項 B 錯誤）。各研究文獻對於 CDI 的定義與感控措施存在高度異質性（選項 D 錯誤）。\n\n【教材出處】PDF 第 14 章，Q226。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 14,
        "question": 226,
        "type": "SAQ",
        "number": 4
      }
    },
    {
      "id": 5,
      "question": "【臨床案例】一名 50 歲女性（體重 70 kg）因意識狀態惡化入住 加護病房（intensive care unit, ICU）。病史包含高血壓、抽菸及骨質疏鬆。隔日清晨接受氣管內插管並使用呼吸器。置有鼻胃管。用藥包括 ceftriaxone 2 g 靜脈給藥（intravenous, IV） Q12H、 vancomycin 1250 mg 靜脈給藥（intravenous, IV） Q12H、 acyclovir 800 mg 靜脈給藥（intravenous, IV） Q8H、 famotidine 20 mg NGT 每日兩次（twice daily, BID）及軟便劑。血清肌酸酐（serum creatinine, SCr）正常。\n\n針對此病人，下列哪一項靜脈血栓栓塞（venous thromboembolism, VTE）預防措施最適當？",
      "options": [
        "A. 單純使用間歇性充氣加壓裝置（IPC）。",
        "B. 皮下注射 enoxaparin 40 mg 每日一次。",
        "C. 持續靜脈輸注未分餾 heparin （unfractionated heparin, UFH）以維持治療性 活化部分凝血活酶時間（activated partial thromboplastin time, aPTT）。",
        "D. 此時無需給予任何 靜脈血栓栓塞（venous thromboembolism, VTE）預防。"
      ],
      "answer": "B",
      "explanation": "重症加護病房病人均屬 靜脈血栓栓塞（venous thromboembolism, VTE）高風險群，在缺乏活動性出血或高出血風險時，指引強烈推薦藥物預防優於無預防或單純機械性預防（選項 A 與 D 錯誤）。在腎功能穩定的非外傷重症病人中，低分子量 heparin （如 enoxaparin 40 mg SC QD）相較於傳統 未分餾 heparin（unfractionated heparin, UFH）能提供更穩定的抗凝效果且 HIT 發生率較低，是首選預防處方（選項 B 正確）。持續靜脈輸注 UFH 是『治療性抗凝』而非預防劑量（選項 C 錯誤）。\n\n【教材出處】PDF 第 14 章，Q227。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 14,
        "question": 227,
        "type": "SAQ",
        "number": 5
      }
    },
    {
      "id": 6,
      "question": "【臨床案例】一名 34 歲女性（體重 65 kg）因機動車車禍導致多處上肢骨折、閉合性腦損傷（closed-head injury）及第 4 級肝臟撕裂傷（grade 4 liver laceration）。無重大過去病史。術後入住 加護病房（intensive care unit, ICU）使用呼吸器。數值： Na 145 mEq/L, K 3.1 mEq/L, Cl 97 mEq/L, CO₂ 18 mEq/L, 血中尿素氮（blood urea nitrogen, BUN） 70 mg/dL, 血清肌酸酐（serum creatinine, SCr） 3.5 mg/dL。\n\n在入院當天，下列哪一項 靜脈血栓栓塞（venous thromboembolism, VTE）預防措施對該病人最為適當？",
      "options": [
        "A. 提供間歇性充氣加壓裝置（IPC）。",
        "B. 皮下注射 dalteparin 5000 units 每日一次。",
        "C. 皮下注射 fondaparinux 2.5 mg 每日一次。",
        "D. 此時無 靜脈血栓栓塞（venous thromboembolism, VTE）預防適應症。"
      ],
      "answer": "A",
      "explanation": "此病人合併嚴重閉合性顱內創傷、第 4 級肝臟實質嚴重撕裂傷與急性腎損傷（SCr 3.5 mg/dL），處於極高活動性出血風險狀態，此時抗凝血藥物（LMWH、 fondaparinux）列為絕對禁忌，且 fondaparinux 經腎排除在重度腎功能不全中蓄積禁忌（選項 B 與 C 錯誤）。然而外傷重症病人血栓風險極高，不可完全不予處置（選項 D 錯誤），在無下肢骨折創傷的情況下，應首選機械性加壓裝置（IPC）進行預防，待出血風險受控後再評估轉換為藥物（選項 A 正確）。\n\n【教材出處】PDF 第 14 章，Q228。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 14,
        "question": 228,
        "type": "SAQ",
        "number": 6
      }
    },
    {
      "id": 7,
      "question": "【臨床案例】一名 34 歲男性（體重 70 kg）因胰臟炎併發急性呼吸衰竭收治外科 加護病房（intensive care unit, ICU）。目前用藥包括 norepinephrine 0.07 mcg/kg/min、 dexmedetomidine 0.7 mcg/kg/h、 ampicillin/sulbactam 3 g 靜脈給藥（intravenous, IV） Q6H、 famotidine 20 mg 靜脈給藥（intravenous, IV）每日兩次（twice daily, BID）及皮下注射 heparin 5000 units Q8H。 ICU 第 3 天團隊懷疑 heparin 引起之血小板低下症（HIT）。入院時血小板 360,000/mm³，今日降至 180,000/mm³。計算 4Ts 評分為 3 分（低風險）。團隊希望送檢 heparin-PF4 免疫檢測並啟動 argatroban。\n\n此時最適當的臨床回覆為何？",
      "options": [
        "A. 停用所有 heparin 製品，但不需啟動 argatroban。",
        "B. 停用所有 heparin 製品，並立即啟動 argatroban。",
        "C. 送檢 heparin-PF4 檢測，並持續低劑量 heparin 直到報告出爐。",
        "D. 不建議送檢 heparin-PF4 免疫檢測，並持續現有低劑量未分餾 heparin （unfractionated heparin, UFH）。"
      ],
      "answer": "D",
      "explanation": "4Ts 評分為 0–3 分屬於低度臨床可能性（low probability），文獻顯示其陰性預測值高達 99% 以上。此病人僅接受 heparin 3 天（典型 HIT 通常在第 5–10 天發生），血小板下降可能源於嚴重胰臟炎或敗血症。在此低風險情境下，送檢偽陽性率極高的 PF4 免疫檢測或盲目停用 heparin 改用昂貴且具高出血風險的直接凝血酶抑制劑（argatroban），均會造成不必要的出血風險與醫療浪費；指引建議低風險病人無需送檢抗體，繼續維持預防處方並密切觀察即可（選項 D 正確；選項 A、 B、 C 錯誤）。\n\n【教材出處】PDF 第 14 章，Q229。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 14,
        "question": 229,
        "type": "SAQ",
        "number": 7
      }
    },
    {
      "id": 8,
      "question": "【臨床案例】面對臨終（end of life）的重症病人，安寧緩和醫療的核心考量極為重要。\n\n下列哪一組處置考量在照護瀕死重症病人時最為重要？",
      "options": [
        "A. 疼痛處置、嚴格血糖控制及呼吸道分泌物控制。",
        "B. 例行性每小時生命徵象監測、停用不必要藥物及呼吸道分泌物控制。",
        "C. 疼痛處置、呼吸道分泌物控制（如嘎嘎聲死前囉音）及停用非必要藥物與侵入性檢查。",
        "D. 停用非必要藥物、常規置入導尿管及噁心嘔吐治療。"
      ],
      "answer": "C",
      "explanation": "在重症病人臨終照護中，醫療目標全面轉向以維持病人舒適與尊嚴為中心，重點包括：積極控制疼痛與呼吸困難（首選鴉片類）、控制呼吸道分泌物（使用抗膽鹼藥如 scopolamine/glycopyrrolate 減少死前囉音）、並停止所有徒增痛苦且無益的侵入性處置與檢查（如常規每小時量血壓、例行抽血驗血糖、常規插管排尿等）（選項 C 正確；選項 A、 B、 D 包含不必要之干擾性處置）。\n\n【教材出處】PDF 第 14 章，Q230。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 14,
        "question": 230,
        "type": "SAQ",
        "number": 8
      }
    },
    {
      "id": 9,
      "question": "【臨床案例】一名 68 歲男性（體重 85 kg）因社區型肺炎併發嚴重低氧性呼吸衰竭收治 加護病房（intensive care unit, ICU），接受氣管內插管及機械通氣。病史包括酒精性肝硬化（Child-Pugh B 級）、心臟衰竭及心肌梗塞。數值： 白血球計數（white blood cell count, WBC） 15 × 10³ cells/mm³, Plt 150,000/mm³, 血中尿素氮（blood urea nitrogen, BUN） 15 mg/dL, 血清肌酸酐（serum creatinine, SCr） 1.1 mg/dL, K 4.5 mEq/L, 國際標準化比值（international normalized ratio, INR） 1.0, AST 58 IU/L, ALT 49 IU/L。用藥包含 azithromycin 500 mg 靜脈給藥（intravenous, IV）每日一次（once daily, QD）、 ceftriaxone 1 g 靜脈給藥（intravenous, IV） QD、 vancomycin 1250 mg 靜脈給藥（intravenous, IV） Q12H 及 fentanyl 輸注。\n\n針對此病人，下列哪一項壓力性潰瘍預防（SUP）建議最適當？",
      "options": [
        "A. 啟動 SUP，因為病人正接受機械通氣。",
        "B. 不需啟動 SUP，因為病人無凝血功能異常。",
        "C. 不需啟動 SUP，因為其肝硬化為 Child-Pugh B 級而非 C 級。",
        "D. 不需啟動 SUP，因為他沒有消化性潰瘍病史。"
      ],
      "answer": "A",
      "explanation": "多項大型前瞻性臨床試驗與指南一致指出，重症病人發生臨床顯著壓力性潰瘍出血的兩大獨立主要危險因子為： （1）機械通氣超過 48 小時，以及（2）凝血功能異常（Plt < 50,000、 INR > 1.5 或 aPTT > 正常值 2 倍）。只要符合其中任一項，即具備啟動 SUP 的強烈適應症（選項 A 正確；選項 B、 C、 D 錯誤）。\n\n【教材出處】PDF 第 14 章，Q231。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 14,
        "question": 231,
        "type": "Case",
        "number": 1
      }
    },
    {
      "id": 10,
      "question": "【臨床案例】一名 45 歲女性因社區型肺炎引起之嚴重呼吸衰竭收治 加護病房（intensive care unit, ICU），接受氣管內插管與機械通氣。置放鼻胃管（NGT）啟動腸道營養。 3 天後，她正接受 norepinephrine 與 vasopressin 持續輸注及抗生素。數值： 白血球計數（white blood cell count, WBC） 20 × 10³ cells/mm³, Plt 45,000/mm³, 血中尿素氮（blood urea nitrogen, BUN） 70 mg/dL, 血清肌酸酐（serum creatinine, SCr） 4.5 mg/dL （基線 0.9 mg/dL） , K 4.5 mEq/L, 國際標準化比值（international normalized ratio, INR） 1.4, AST 30 IU/L, ALT 46 IU/L。\n\n下列何者最能完整反映該病人目前所具備的壓力性出血危險因子？",
      "options": [
        "A. 僅有機械通氣。",
        "B. 機械通氣、凝血異常及急性腎損傷。",
        "C. 機械通氣、凝血功能異常（血小板 < 50,000）、急性腎損傷及休克（使用升壓劑）。",
        "D. 機械通氣、凝血功能異常、急性腎損傷、休克及腸道營養。"
      ],
      "answer": "C",
      "explanation": "該病人具備多重壓力性潰瘍出血危險因子：包括兩項主要危險因子（機械通氣 > 48 小時、血小板低下 45,000 < 50,000 符合凝血異常），以及次要危險因子（敗血性休克需升壓劑輸注、急性腎損傷 SCr 4.5）（選項 C 正確）。腸道營養（enteral nutrition, EN）本身並非出血危險因子，反而能促進黏膜血流與黏液分泌（選項 D 錯誤）。\n\n【教材出處】PDF 第 14 章，Q232。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 14,
        "question": 232,
        "type": "Case",
        "number": 2
      }
    },
    {
      "id": 11,
      "question": "【臨床案例】一名 45 歲女性因社區型肺炎引起之嚴重呼吸衰竭收治 加護病房（intensive care unit, ICU），接受氣管內插管與機械通氣。置放鼻胃管（NGT）啟動腸道營養。 3 天後，她正接受 norepinephrine 與 vasopressin 持續輸注及抗生素。數值： 白血球計數（white blood cell count, WBC） 20 × 10³ cells/mm³, Plt 45,000/mm³, 血中尿素氮（blood urea nitrogen, BUN） 70 mg/dL, 血清肌酸酐（serum creatinine, SCr） 4.5 mg/dL （基線 0.9 mg/dL） , K 4.5 mEq/L, 國際標準化比值（international normalized ratio, INR） 1.4, AST 30 IU/L, ALT 46 IU/L。\n\n針對此病人預防壓力性黏膜出血，下列哪項處置最適當？",
      "options": [
        "A. 經 NGT 給予 sucralfate 1 g 每日四次。",
        "B. 經 NGT 給予氫氧化鎂 30 mL 每 4 小時一次。",
        "C. 靜脈注射 pantoprazole 40 mg 每日兩次。",
        "D. 靜脈注射 famotidine 20 mg 每日一次（依腎功能調整劑量）。"
      ],
      "answer": "D",
      "explanation": "該病人具備重大出血危險因子需積極 SUP。由於病人發生嚴重急性腎損傷（SCr 4.5 mg/dL）， famotidine 經腎排除需進行劑量調整（正常為 20 mg IV Q12H，在 CrCl < 50 mL/min 時減量為 20 mg IV Q24H）（選項 D 正確）。 Sucralfate 與制酸劑在重症出血預防效果差且有鋁 / 鎂蓄積毒性與胃管阻塞風險（選項 A 與 B 錯誤）。 pantoprazole 40 mg 每日兩次（twice daily, BID）是用於活動性消化性潰瘍大出血的治療劑量，用於單純重症預防屬於過度用藥，常規預防僅需 每日一次（once daily, QD） （選項 C 錯誤）。\n\n【教材出處】PDF 第 14 章，Q233。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 14,
        "question": 233,
        "type": "Case",
        "number": 3
      }
    },
    {
      "id": 12,
      "question": "【臨床案例】一名 45 歲女性因社區型肺炎引起之嚴重呼吸衰竭收治 加護病房（intensive care unit, ICU），接受氣管內插管與機械通氣。置放鼻胃管（NGT）啟動腸道營養。 3 天後，她正接受 norepinephrine 與 vasopressin 持續輸注及抗生素。數值： 白血球計數（white blood cell count, WBC） 20 × 10³ cells/mm³, Plt 45,000/mm³, 血中尿素氮（blood urea nitrogen, BUN） 70 mg/dL, 血清肌酸酐（serum creatinine, SCr） 4.5 mg/dL （基線 0.9 mg/dL） , K 4.5 mEq/L, 國際標準化比值（international normalized ratio, INR） 1.4, AST 30 IU/L, ALT 46 IU/L。 一週後病人呼吸狀況大幅改善。過去 4 天已完全停用鎮靜劑與升壓劑，配合物理治療復健，今日已成功拔管。目前用藥僅剩 ceftriaxone、皮下 heparin 及 SUP。數值： WBC 6 × 10³ cells/mm³, Plt 256,000/mm³, BUN 10 mg/dL, SCr 1.1 mg/dL, INR 0.8。\n\n針對該病人的壓力性潰瘍預防（SUP）處方，下列哪一項建議最適當？",
      "options": [
        "A. SUP 應持續使用直到病人出院。",
        "B. SUP 應持續使用直到轉出 加護病房（intensive care unit, ICU）。",
        "C. 應立即停用 SUP （SUP should be discontinued now）。",
        "D. 待抗生素療程結束後再停用 SUP。"
      ],
      "answer": "C",
      "explanation": "壓力性潰瘍預防（SUP）僅應在存在危險因子期間使用。病人目前已脫離呼吸器拔管、休克緩解停用升壓劑、血小板恢復正常且無任何凝血異常，所有的壓力性出血危險因子均已完全消失。此時繼續使用抑酸劑只會徒增院內感染（如 CDI、肺炎）與藥物副作用風險，應立即停用 SUP （選項 C 正確；選項 A、 B、 D 錯誤）。\n\n【教材出處】PDF 第 14 章，Q234。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 14,
        "question": 234,
        "type": "Case",
        "number": 4
      }
    },
    {
      "id": 13,
      "question": "【臨床案例】一名 93 歲長期臥床男性（體重 45 kg）由護理之家轉入，因 慢性阻塞性肺病（chronic obstructive pulmonary disease, COPD）急性發作需接受氣管插管機械通氣。病史包括糖尿病與心臟衰竭。檢驗除 血中尿素氮（blood urea nitrogen, BUN） 35 mg/dL 及 血清肌酸酐（serum creatinine, SCr） 2.8 mg/dL （基線 0.5 mg/dL）外皆正常。\n\n針對該病人，下列哪一項 靜脈血栓栓塞（venous thromboembolism, VTE）預防建議最適當？",
      "options": [
        "A. 單純使用間歇性充氣加壓裝置（IPC）。",
        "B. 皮下注射 enoxaparin 30 mg 每日一次。",
        "C. 皮下注射未分餾 heparin （unfractionated heparin, UFH） 5000 units 每日兩次。",
        "D. 皮下注射 fondaparinux 2.5 mg 每日一次。"
      ],
      "answer": "C",
      "explanation": "病人為超高齡、低體重（45 kg）且出現重度急性腎損傷（SCr 2.8 mg/dL，計算 CrCl < 15 mL/min）。低分子量 heparin （enoxaparin）與 fondaparinux 主要經腎臟排除，在嚴重腎功能不全下會顯著蓄積導致致命性大出血（fondaparinux 在 CrCl < 30 時禁忌）（選項 B 與 D 錯誤）。未分餾 heparin （unfractionated heparin, UFH）主要經網狀內皮系統清除，不依賴腎臟代謝，在腎衰竭病人中不蓄積，因此 未分餾 heparin（unfractionated heparin, UFH） 5000 units SC 每日兩次（twice daily, BID）是急性腎衰竭重症病人的最佳首選（選項 C 正確）。臥床機械通氣高危險病人，藥物預防優於單純機械裝置（選項 A 錯誤）。\n\n【教材出處】PDF 第 14 章，Q235。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 14,
        "question": 235,
        "type": "Case",
        "number": 5
      }
    },
    {
      "id": 14,
      "question": "【臨床案例】一名 55 歲男性（體重 60 kg）有糖尿病、高血脂及 4 個月前因下肢外傷併發深部靜脈血栓（deep vein thrombosis, DVT）病史，今因流感病毒重症呼吸衰竭收治 加護病房（intensive care unit, ICU）。入院數值正常（Plt 250,000/mm³, SCr 0.9 mg/dL）。處方包含 fentanyl、 midazolam、 pip/tazo、 vancomycin、insulin、 SUP 及靜脈 heparin 輸注（heparin drip）。 5 天後病人持續插管，此時血小板降至 112,000/mm³ （下降超過 50%）， 血中尿素氮（blood urea nitrogen, BUN） 45 mg/dL, 血清肌酸酐（serum creatinine, SCr） 2.7 mg/dL。團隊送檢 heparin-PF4 免疫檢測，需 48 小時方能回報。\n\n此時最佳的處置步驟為何？",
      "options": [
        "A. 立即停用 heparin 輸注，並啟動 argatroban 持續靜脈輸注 0.25 mcg/kg/min （依重症 / 多重器官衰竭調整劑量）。",
        "B. 不作任何處理，因病人有多重其他可能導致血小板低下的原因。",
        "C. 停用 heparin 輸注，並皮下給予 fondaparinux 10 mg 每日一次。",
        "D. 先不作任何處理，等待 48 小時後抗體檢驗報告回報再決定。"
      ],
      "answer": "A",
      "explanation": "病人接受 heparin 5 天後血小板驟降 >50%， 4Ts 評分屬於中 / 高度風險，高度懷疑 HIT。在等待抗體檢驗的空窗期，絕不可消極等待（選項 B 與 D 錯誤），必須立即停用所有 heparin 製品並立即啟動非 heparin 類抗凝劑以防致命性血栓。病人合併急性腎損傷（SCr 2.7），主要經肝臟代謝的直接凝血酶抑制劑 argatroban 為首選；重症 / 多重器官功能受損病人初始輸注劑量應調降至 0.25–0.5 mcg/kg/min （選項 A 正確）。 fondaparinux 經腎排除，在急性腎損傷下禁用（選項 C 錯誤）。\n\n【教材出處】PDF 第 14 章，Q236。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 14,
        "question": 236,
        "type": "Case",
        "number": 6
      }
    },
    {
      "id": 15,
      "question": "【臨床案例】一名 55 歲男性（體重 60 kg）有糖尿病、高血脂及 4 個月前因下肢外傷併發深部靜脈血栓（deep vein thrombosis, DVT）病史，今因流感病毒重症呼吸衰竭收治 加護病房（intensive care unit, ICU）。入院數值正常（Plt 250,000/mm³, SCr 0.9 mg/dL）。處方包含 fentanyl、 midazolam、 pip/tazo、 vancomycin、insulin、 SUP 及靜脈 heparin 輸注（heparin drip）。 5 天後病人持續插管，此時血小板降至 112,000/mm³ （下降超過 50%）， 血中尿素氮（blood urea nitrogen, BUN） 45 mg/dL, 血清肌酸酐（serum creatinine, SCr） 2.7 mg/dL。團隊送檢 heparin-PF4 免疫檢測，需 48 小時方能回報。 3 天後， heparin-PF4 免疫檢測與血清素釋放試驗（SRA）均呈陽性確診 HIT，且超音波發現新發生的 深部靜脈栓塞（deep vein thrombosis, DVT）。團隊希望轉換為口服 warfarin。病人目前血小板計數為 130,000/mm³。\n\n此時最適當的回覆為何？",
      "options": [
        "A. 停用 argatroban 並啟動口服 warfarin 5 mg 每日一次。",
        "B. 停用 argatroban 並啟動口服 warfarin 10 mg 每日一次。",
        "C. HIT 病人終身絕對禁用 warfarin。",
        "D. 此時絕不可啟動 warfarin，應繼續使用 argatroban 直到血小板完全恢復至 ≥ 150,000/mm³。"
      ],
      "answer": "D",
      "explanation": "在 HIT 急性期若過早給予 warfarin， warfarin 會迅速耗竭半衰期極短的抗凝蛋白 Protein C，導致微血管血栓形成惡化，引發肢端壞疽（venous limb gangrene）或皮膚壞死。指引嚴格規定：必須等待血小板計數完全恢復至至少 150,000/mm³ 以上，且非 heparin 抗凝劑至少重疊使用 5 天以上並達到治療性 國際標準化比值（international normalized ratio, INR），方可謹慎以低劑量啟動 warfarin 轉換（選項 D 正確；選項 A、 B 錯誤）。 warfarin 待血小板恢復後仍可使用（選項 C 錯誤）。\n\n【教材出處】PDF 第 14 章，Q237。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 14,
        "question": 237,
        "type": "Case",
        "number": 7
      }
    },
    {
      "id": 16,
      "question": "【臨床案例】一名 88 歲女性因心臟衰竭去代償、急性腎損傷及 1 個月前跌倒導致肋骨骨折之劇烈無法控制疼痛收治 加護病房（intensive care unit, ICU）。此為過去 5 個月內第 4 次入住 ICU。溝通後得知其意願為拒絕心肺復甦與插管（DNR/DNI），僅求舒適。血壓 119/70 mm Hg、心率 120 次 / 分、呼吸 55 次 / 分，行為疼痛量表（Behavioral Pain Scale, BPS）評分為 9/10 （重度疼痛）。與家屬會議達成共識希望減輕痛苦。決定啟動 morphine 靜脈滴注 2 mg/h，滴定參數包括給予同等當前輸注速率之單次推注，並調升輸注速率 25% 以維持 行為疼痛量表（Behavioral Pain Scale, BPS）評分 3 分（無疼痛）。數值正常（BUN 10, SCr 0.6）。照顧護理師認為滴定參數過於激進。\n\n針對該滴定參數，下列哪項處置最為適當？",
      "options": [
        "A. 修改參數，改為僅在病人出現不適跡象（如血壓或心率上升）時才調升 morphine。",
        "B. 取消滴定參數，維持 morphine 在現有速率 2 mg/h 不變。",
        "C. 取消滴定參數，維持 morphine 並加上 midazolam 2 mg/h 輸注。",
        "D. 此時不應更改滴定參數；在第一次劑量調升後密切評估病人的疼痛與呼吸反應。"
      ],
      "answer": "D",
      "explanation": "在臨終安寧重症照護中，病人正處於 行為疼痛量表（Behavioral Pain Scale, BPS） 9 分的極重度痛苦與呼吸窘迫中。實證顯示在經驗豐富的重症團隊監控下，針對疼痛目標進行劑量滴定，並不會加速死亡或引發不可控的致命呼吸抑制，反而能有效緩解呼吸困難與痛苦。單憑生命徵象（血壓、心率）無法準確評估疼痛（選項 A 錯誤）。過度保守停止滴定會讓瀕死病人持續承受劇痛折磨（選項 B 錯誤）。常規預先加用苯二氮平類可能引發譫妄且非首要（選項 C 錯誤）。應維持原擬定之積極止痛滴定方針，並在第一次調升後即時評估療效與安全性（選項 D 正確）。\n\n【教材出處】PDF 第 14 章，Q238。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 14,
        "question": 238,
        "type": "Case",
        "number": 8
      }
    }
  ],
  "15": [
    {
      "id": 1,
      "question": "【臨床案例】一名 80 歲女性因大腸桿菌（Escherichia coli）泌尿道感染併發敗血性休克入住加護病房（intensive care unit, ICU）。入院重要生命徵象：血壓 80/40 mm Hg、心率 155 次 / 分且心律為心房顫動、呼吸 26 次 / 分、體溫 105.8°F （41°C）。理學檢查顯示病人虛弱、嗜睡且意識混亂。數值： Na 155 mEq/L, K 3.6 mEq/L, 血清肌酸酐（serum creatinine, SCr） 1.8 mg/dL, 乳酸 4.2 mmol/L。\n\n下列哪一項最能代表該病人符合『休克症候群（shock syndrome） 』的臨床表徵？",
      "options": [
        "A. 體溫 105.8°F （41°C）與意識混亂。",
        "B. 心率 155 次 / 分伴心房顫動與高體溫。",
        "C. 低血壓（80/40 mm Hg）、意識混亂及高乳酸血症（4.2 mmol/L）。",
        "D. 高體溫、低血壓與高血鈉。"
      ],
      "answer": "C",
      "explanation": "休克（Shock）的核心病理生理學定義為：全身氧氣輸送（DO₂）受損或利用障礙，導致全面性組織灌流不足、細胞缺氧與末端器官衰竭。發燒與心搏過速是全身性發炎反應症候群（SIRS）的表徵，而非休克本身的定義（選項 A、 B、 D 錯誤）。本案病人的持續低血壓、中樞神經低灌流（意識混亂）與無氧代謝產物堆積（高乳酸血症），明確指出了組織灌流衰竭與休克症候群的存在（選項 C 正確）。\n\n【教材出處】PDF 第 15 章，Q239。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 15,
        "question": 239,
        "type": "SAQ",
        "number": 1
      }
    },
    {
      "id": 2,
      "question": "【臨床案例】一名 80 歲女性因大腸桿菌（Escherichia coli）泌尿道感染併發敗血性休克入住加護病房（intensive care unit, ICU）。入院重要生命徵象：血壓 80/40 mm Hg、心率 155 次 / 分且心律為心房顫動、呼吸 26 次 / 分、體溫 105.8°F （41°C）。理學檢查顯示病人虛弱、嗜睡且意識混亂。數值： Na 155 mEq/L, K 3.6 mEq/L, 血清肌酸酐（serum creatinine, SCr） 1.8 mg/dL, 乳酸 4.2 mmol/L。\n\n根據 Fick 氧氣輸送方程式（DO₂ = CO × CaO₂ × 10），下列哪項因素在此病人中直接阻礙了氧氣輸送（DO₂）？",
      "options": [
        "A. 高乳酸血症直接破壞氧氣輸送。",
        "B. 快速心房顫動（AF with RVR）損害心室充填並降低每搏輸出量（SV），從而降低心輸出量（cardiac output, CO）與 DO₂。",
        "C. 急性腎損傷直接抑制肺泡氧氣交換。",
        "D. 體溫過高（41°C）直接降低動脈含氧量（CaO₂）。"
      ],
      "answer": "B",
      "explanation": "根據生理學 Fick 公式， DO₂ 取決於心輸出量（CO = HR × SV）與動脈含氧量（CaO₂）。雖然適度心率上升可代償 心輸出量（cardiac output, CO），但當心律轉為極快速心房顫動（155 bpm）時，心室舒張充填時間大幅縮短且喪失心房收縮輔助（atrial kick），導致每搏輸出量（SV）急劇驟降，進而使心輸出量 CO 與 DO₂ 顯著降低（選項 B 正確）。乳酸是組織缺氧的代謝產物而非致病因（選項 A 錯誤）。急性腎損傷非 DO₂ 直接決定因子（選項 C 錯誤）。發燒會增加氧耗量（VO₂）但非直接降低 DO₂ （選項 D 錯誤）。\n\n【教材出處】PDF 第 15 章，Q240。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 15,
        "question": 240,
        "type": "SAQ",
        "number": 2
      }
    },
    {
      "id": 3,
      "question": "【臨床案例】一名 58 歲女性因腹膜炎併發敗血性休克收治 加護病房（intensive care unit, ICU）。動脈血氣與實驗室數值顯示： pH 7.28, PaCO₂ 32 mm Hg, HCO₃⁻ 15 mEq/L, Na 140 mEq/L, Cl 118 mEq/L （高氯性代謝性酸中毒）。病人目前已接受 20 mL/kg 結晶體輸液， 平均動脈壓（mean arterial pressure, MAP） 58 mm Hg。\n\n針對其進一步的靜脈輸液復甦，下列哪一種輸液選擇最為適當？",
      "options": [
        "A. 0.9% sodium chloride 溶液（Normal Saline）。",
        "B. 5% 白蛋白（albumin）。",
        "C. 羥乙基澱粉（Hydroxyethyl starch, HES）。",
        "D. 乳酸林格氏液（Lactated Ringer's solution）。"
      ],
      "answer": "D",
      "explanation": "病人已呈現顯著的高氯性代謝性酸中毒（Cl 118 mEq/L）。 0.9% sodium chloride 溶液氯離子濃度高達 154 mEq/L，大量輸注會加重高氯酸中毒並收縮腎血管增加腎替代療法（RRT）需求（選項 A 錯誤）。乳酸林格氏液屬於相對低氯之平衡鹽晶體溶液（氯含量 111 mEq/L），為目前 SSC 指南強烈推薦的首選復甦輸液（選項 D 正確）。在尚未給予足量結晶體（<30 mL/kg）時，常規使用白蛋白並無死亡率獲益且昂貴（選項 B 錯誤）。人工膠體澱粉液（HES）具強烈腎毒性並增加死亡率，在重症加護病房列為絕對禁忌（選項 C 錯誤）。\n\n【教材出處】PDF 第 15 章，Q241。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 15,
        "question": 241,
        "type": "SAQ",
        "number": 3
      }
    },
    {
      "id": 4,
      "question": "【臨床案例】一名 67 歲男性有長期嚴重高血壓病史，因敗血性休克接受輸液復甦與 norepinephrine 輸注。目前 平均動脈壓（mean arterial pressure, MAP）維持在 68 mm Hg， ScvO₂ 72%，但連續 3 小時尿量皆小於 0.3 mL/kg/h，且血清乳酸持續在 3.8 mmol/L 無清除跡象。\n\n此時針對其血流動力學支持，下一步處置何者最佳？",
      "options": [
        "A. 維持現有 norepinephrine 劑量不變，繼續觀察。",
        "B. 調升 norepinephrine 劑量，將目標 平均動脈壓（mean arterial pressure, MAP）提高（如 75–85 mm Hg），以克服其自體調節曲線右移並改善器官灌流。",
        "C. 給予 1000 mL 晶體輸液以增加每搏輸出量。",
        "D. 啟動 dobutamine 5 mcg/kg/min 以增加心輸出量。"
      ],
      "answer": "B",
      "explanation": "長期慢性高血壓病人的器官血流自體調節曲線（autoregulation curve）會顯著「向右偏移」，需要較一般人更高的灌注壓才能維持腎臟與大腦正常血流。雖然常規 平均動脈壓（mean arterial pressure, MAP）目標為 65 mm Hg，但若在達標後仍持續存在末端器官低灌流（嚴重少尿、乳酸未降），適度提高 MAP 目標以測試是否能改善器官灌流是合理的處置（選項 B 正確；選項 A 錯誤）。病人 ScvO₂ 正常無心肌收縮障礙證據，盲目加用強心劑（dobutamine）或過量輸液並無益處（選項 C 與 D 錯誤）。\n\n【教材出處】PDF 第 15 章，Q242。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 15,
        "question": 242,
        "type": "SAQ",
        "number": 4
      }
    },
    {
      "id": 5,
      "question": "【臨床案例】一名 72 歲男性因重度肺炎併發敗血性休克接受機械通氣，合併快速心房顫動。目前使用 norepinephrine， 平均動脈壓（mean arterial pressure, MAP） 60 mm Hg，乳酸 3.5 mmol/L。團隊希望評估病人是否仍具備體液反應性（fluid responsiveness）。\n\n在此臨床情境下，下列哪一項評估方法最為可靠？",
      "options": [
        "A. 藉由動脈導管監測脈壓變異度（PPV）。",
        "B. 實施被動抬腿試驗（Passive Leg Raising, PLR）結合即時心輸出量監測。",
        "C. 經由股靜脈中央導管測量中央靜脈壓（central venous pressure, CVP）。",
        "D. 經由股靜脈導管抽取中央靜脈血氧飽和度（ScvO₂）。"
      ],
      "answer": "B",
      "explanation": "脈壓變異度（PPV）與每搏變異度（SVV）僅在正常竇性心律、完全被動機械通氣無自發呼吸之病人中才準確；心房顫動的心律不齊會直接摧毀其預測準確性（選項 A 錯誤）。被動抬腿試驗（PLR）模擬自體 300 mL 輸液挑戰，且不受自發呼吸或心房顫動心律不整影響，是此情境下最精準可靠的動態體液反應性評估指標（選項 B 正確）。股靜脈導管無法測得真實 中央靜脈壓（central venous pressure, CVP）或上腔靜脈 ScvO₂，且靜態指標 CVP 本身無法預測輸液反應（選項 C 與 D 錯誤）。\n\n【教材出處】PDF 第 15 章，Q243。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 15,
        "question": 243,
        "type": "SAQ",
        "number": 5
      }
    },
    {
      "id": 6,
      "question": "【臨床案例】一名 24 歲男性在輸注抗生素後突發急性血管擴張性休克（過敏性過敏性反應 anaphylactic shock）。血壓 70/35 mm Hg，前負荷顯著低下， ScvO₂ 48%，乳酸 4.5 mmol/L。\n\n針對此血管擴張性休克病人，下列處置順序與用藥何者最適當？",
      "options": [
        "A. 輸注濃縮紅血球（PRBC）以提升 CaO₂。",
        "B. 啟動 dobutamine 輸注以增強心肌收縮力。",
        "C. 啟動 milrinone 輸注以降低後負荷。",
        "D. 給予積極大量靜脈輸液復甦，並啟動 norepinephrine （或 epinephrine）以收縮血管增加後負荷與灌注壓。"
      ],
      "answer": "D",
      "explanation": "過敏性休克是典型的血管擴張型分布性休克，廣泛血管擴張與微血管滲漏導致有效循環血容驟降（相對性低血容與前負荷不足）。首要治療是大量輸液復甦補充血管內容積，並立即使用血管收縮劑（epinephrine 或 norepinephrine）以恢復血管張力（systemic vascular resistance, SVR）與後負荷（選項 D 正確）。此時低 ScvO₂ 源於嚴重前負荷不足與低心輸出量，在未補足前負荷前，給予紅血球或強心血管擴張劑（dobutamine/milrinone）無法解決病因且會惡化低血壓（選項 A、 B、 C 錯誤）。\n\n【教材出處】PDF 第 15 章，Q244。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 15,
        "question": 244,
        "type": "SAQ",
        "number": 6
      }
    },
    {
      "id": 7,
      "question": "【臨床案例】一名 60 歲女性（體重 70 kg）因腎盂腎炎引發敗血症，目前已完成 1600 mL 晶體輸液（約 23 mL/kg）。目前生命徵象：血壓 95/53 mm Hg （MAP 67 mm Hg），心率 102 次 / 分，尿量連續 2 小時為 20 mL/h （<0.5 mL/kg/h），乳酸 3.2 mmol/L， ScvO₂ 58%。\n\n此時下一步最適當的處置為何？",
      "options": [
        "A. 再給予至少 500 mL sodium chloride 溶液或平衡鹽輸注，以補足初始 30 mL/kg 的結晶體復甦目標並改善器官灌流。",
        "B. 立即給予 5% 白蛋白輸注。",
        "C. 立即啟動 norepinephrine 輸注。",
        "D. 輸注 1 單位濃縮紅血球。"
      ],
      "answer": "A",
      "explanation": "國際敗血症指引（SSC）明確建議：在敗血症誘發之組織低灌流或休克時，應在前 3 小時內給予『至少 30 mL/kg 』的靜脈結晶體輸液。該病人目前僅接受 23 mL/kg，且仍有顯著少尿與高乳酸等低灌流徵候，應補足至至少 30 mL/kg （追加至少 500 mL 晶體液）（選項 A 正確）。病人尚未完成基礎晶體復甦，無使用白蛋白適應症（選項 B 錯誤）。病人 平均動脈壓（mean arterial pressure, MAP） 67 mm Hg > 65 mm Hg，在低血容尚未補足前不需急於使用升壓劑（選項 C 錯誤）。無出血或重度貧血時不應盲目輸血（選項 D 錯誤）。\n\n【教材出處】PDF 第 15 章，Q245。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 15,
        "question": 245,
        "type": "SAQ",
        "number": 7
      }
    },
    {
      "id": 8,
      "question": "【臨床案例】一名 65 歲男性在完成大於 30 mL/kg 的靜脈晶體輸液後，血壓仍為 82/50 mm Hg （MAP 61 mm Hg），尿量 15 mL/h，乳酸 4.0 mmol/L。\n\n針對其持續性敗血性休克，首選的升壓劑為何？",
      "options": [
        "A. norepinephrine。",
        "B. vasopressin 單獨一線使用。",
        "C. phenylephrine。",
        "D. dopamine。"
      ],
      "answer": "A",
      "explanation": "SSC 指引一致強烈推薦： norepinephrine 是治療敗血性休克的『第一線首選升壓藥物』，它兼具強大 α1 血管收縮作用與適度 β1 正性肌力支持，能迅速提升 平均動脈壓（mean arterial pressure, MAP）且心律不整風險顯著低於 dopamine （選項 A 正確）。 vasopressin 僅作為 norepinephrine 的輔助次線加用藥物，不建議單獨作為起始一線（選項 B 錯誤）。 phenylephrine 純縮血管缺乏心肌支持，指引已不再推薦（選項 C 錯誤）。 dopamine 心律不整與死亡率較高，僅保留用於極少數嚴重心搏過緩病人（選項 D 錯誤）。\n\n【教材出處】PDF 第 15 章，Q246。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 15,
        "question": 246,
        "type": "SAQ",
        "number": 8
      }
    },
    {
      "id": 9,
      "question": "【臨床案例】一名 56 歲女性因腹腔內感染導致敗血性休克，在充分輸液後正接受 norepinephrine 0.25 mcg/kg/min。目前 平均動脈壓（mean arterial pressure, MAP）為 66 mm Hg，心率 110 次 / 分， ScvO₂ 72%，乳酸 2.8 mmol/L。\n\n團隊希望在處方中加上 vasopressin （AVP）。關於在 norepinephrine 基礎上加用 vasopressin 的臨床效益，下列哪項敘述最為準確？",
      "options": [
        "A. 加用 vasopressin 能直接顯著改善全因死亡率，且需先給予大量輸液負荷。",
        "B. vasopressin 可作為輔助升壓劑加用，主要效益為提升 平均動脈壓（mean arterial pressure, MAP）並顯著降低 norepinephrine 的劑量需求（sparing effect）。",
        "C. 應優先選用 phenylephrine 而非 vasopressin。",
        "D. vasopressin 會顯著增加快速心房心律不整的風險。"
      ],
      "answer": "B",
      "explanation": "大型隨機對照試驗 VASST 證實，在 norepinephrine 基礎上加用固定劑量 vasopressin （0.03 unit/min），雖然在總體人群中死亡率與單用 norepinephrine 相當，但能發揮顯著的「兒茶酚胺節省效應（catecholamine-sparing effect） 」，有效降低 norepinephrine 劑量需求並減少其引發心搏過速與心律不整的副作用（選項 B 正確；選項 A 與 D 錯誤）。 phenylephrine 已不被 SSC 指引推薦（選項 C 錯誤）。\n\n【教材出處】PDF 第 15 章，Q247。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 15,
        "question": 247,
        "type": "SAQ",
        "number": 9
      }
    },
    {
      "id": 10,
      "question": "【臨床案例】一名 74 歲男性因重度肺炎併發急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）與敗血性休克入住 加護病房（intensive care unit, ICU）。置有肺動脈導管（PAC）。數值：心臟指數（cardiac index, CI） 4.0 L/min/m², 中央靜脈壓（central venous pressure, CVP） 14 mm Hg, PCWP 16 mm Hg, 全身血管阻力（systemic vascular resistance, SVR） 450 dynes·s/cm⁵, 平均動脈壓（mean arterial pressure, MAP） 56 mm Hg。\n\n根據上述血流動力學數值，該病人呈現何種休克型態？",
      "options": [
        "A. 心因性休克（Cardiogenic shock）。",
        "B. 分佈性／血管擴張性休克（Distributive / Vasodilatory shock）。",
        "C. 低血容性休克（Hypovolemic shock）。",
        "D. 阻塞性休克（Obstructive shock）。"
      ],
      "answer": "B",
      "explanation": "血管擴張性 / 分佈性休克（如敗血性休克）的典型血流動力學特徵為：嚴重的全身血管阻力下降（SVR < 800，本案僅 450 dynes·s/cm⁵），合併代償性高心輸出量（高 CI > 3.0，本案 4.0）與正常至偏高的前負荷 filling pressure （選項 B 正確）。低血容休克表現為低前負荷與代償性高 全身血管阻力（systemic vascular resistance, SVR） （選項 C 錯誤）；心因性與阻塞性休克則呈現低 心臟指數（cardiac index, CI）與極高 SVR （選項 A 與 D 錯誤）。\n\n【教材出處】PDF 第 15 章，Q248。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 15,
        "question": 248,
        "type": "Case",
        "number": 1
      }
    },
    {
      "id": 11,
      "question": "【臨床案例】一名 74 歲男性因重度肺炎併發急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）與敗血性休克入住 加護病房（intensive care unit, ICU）。置有肺動脈導管（PAC）。數值：心臟指數（cardiac index, CI） 4.0 L/min/m², 中央靜脈壓（central venous pressure, CVP） 14 mm Hg, PCWP 16 mm Hg, 全身血管阻力（systemic vascular resistance, SVR） 450 dynes·s/cm⁵, 平均動脈壓（mean arterial pressure, MAP） 56 mm Hg。\n\n若病人數值轉變為 心臟指數（cardiac index, CI） 1.6 L/min/m², 全身血管阻力（systemic vascular resistance, SVR） 1800 dynes·s/cm⁵, PCWP 24 mm Hg, 中央靜脈壓（central venous pressure, CVP） 20 mm Hg，此時最可能為哪種休克？",
      "options": [
        "A. 低血容性休克。",
        "B. 敗血性休克。",
        "C. 心因性休克（Cardiogenic shock）。",
        "D. 神經性休克。"
      ],
      "answer": "C",
      "explanation": "心臟指數顯著低下（CI < 2.2，本案 1.6）、左心室充填壓極度升高（PCWP > 18，本案 24）且全身血管阻力顯著代償性上升（SVR > 1200，本案 1800），是左心室泵浦衰竭導致之心因性休克的典型表現（選項 C 正確；選項 A、 B、 D 錯誤）。\n\n【教材出處】PDF 第 15 章，Q249。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 15,
        "question": 249,
        "type": "Case",
        "number": 2
      }
    },
    {
      "id": 12,
      "question": "【臨床案例】在休克復甦過程中，精準評估體液反應性（fluid responsiveness）至關重要。\n\n下列哪一項指標在完全被動機械通氣病人中屬於優於靜態指標的動態指標？",
      "options": [
        "A. 中央靜脈壓（central venous pressure, CVP）。",
        "B. 肺動脈楔壓（PCWP）。",
        "C. 每搏輸出量變異度（Stroke volume variation, SVV）。",
        "D. 平均動脈壓（mean arterial pressure, MAP）。"
      ],
      "answer": "C",
      "explanation": "實證醫學已徹底證實靜態前負荷指標（如 CVP 與 PCWP）無法準確預測病人對輸液是否有心輸出量增加的反應（選項 A 與 B 錯誤）。心肺交互作用產生的動態指標（如 SVV 與 PPV > 12%–13%）在符合條件的機械通氣病人中，能高度精確預測體液反應性（選項 C 正確）。 平均動脈壓（mean arterial pressure, MAP）受心輸出量與血管張力雙重影響，不能作為體液反應性指標（選項 D 錯誤）。\n\n【教材出處】PDF 第 15 章，Q250。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 15,
        "question": 250,
        "type": "Case",
        "number": 3
      }
    },
    {
      "id": 13,
      "question": "【臨床案例】一名 52 歲男性因膽道感染引發敗血性休克，被動抬腿試驗（PLR）陽性（提示具體液反應性）。已接受 15 mL/kg sodium chloride 溶液。\n\n針對其進一步輸液治療，下列敘述何者最符合實證指引？",
      "options": [
        "A. 應立即常規使用 20% 白蛋白輸注，因其膠體滲透壓最高。",
        "B. 應使用羥乙基澱粉（HES）以減少外周水腫。",
        "C. 首選結晶體輸液（如 sodium chloride 溶液或平衡鹽液）進行復甦，因其療效與白蛋白相當且費用顯著較低，且病人尚未達大量晶體輸液標準。",
        "D. 病人已不需任何輸液，應直接最大劑量升壓劑。"
      ],
      "answer": "C",
      "explanation": "SAFE 大型試驗顯示在一般重症休克病人中，白蛋白相較於結晶體液並無死亡率或器官功能差異，但費用大幅增加；指引建議結晶體溶液為首選，僅在病人已接受大量結晶體復甦後才考慮加用白蛋白（選項 C 正確；選項 A 錯誤）。 HES 具腎毒性禁忌（選項 B 錯誤）。 PLR 陽性證實體液反應存在，應繼續補足容量（選項 D 錯誤）。\n\n【教材出處】PDF 第 15 章，Q251。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 15,
        "question": 251,
        "type": "Case",
        "number": 4
      }
    },
    {
      "id": 14,
      "question": "【臨床案例】一名 63 歲女性因敗血性休克接受 norepinephrine 輸注與晶體輸液復甦， 平均動脈壓（mean arterial pressure, MAP） 65 mm Hg。然而心臟超音波顯示雙心室收縮功能嚴重低下，心肌病變， ScvO₂ 僅 52% （提示嚴重心肌抑制與 DO₂ 不足）。\n\n此時針對其心肌功能不全與低組織灌流，新增下列哪一種血管活性藥物最為適當？",
      "options": [
        "A. phenylephrine。",
        "B. vasopressin。",
        "C. 調高 norepinephrine 劑量至極限。",
        "D. epinephrine （或在 norepinephrine 基礎上加用 dobutamine）。"
      ],
      "answer": "D",
      "explanation": "在敗血性休克中若合併敗血性心肌病變（septic cardiomyopathy）與持續低灌流（低 ScvO₂），需要具備強效 β1 epinephrine 受體激動活性的強心正性肌力藥物。 epinephrine 兼具強大 β1 肌力與 α1 血管收縮作用，是此類病人的有效選擇（亦可在 norepinephrine 上加用 dobutamine）（選項 D 正確）。 phenylephrine 與 vasopressin 純縮血管無正性肌力，反而因增加後負荷使衰竭的心臟輸出量進一步驟降（選項 A 與 B 錯誤）。單純調高 NE 的 α1 收縮無法解決心肌收縮障礙（選項 C 錯誤）。\n\n【教材出處】PDF 第 15 章，Q252。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 15,
        "question": 252,
        "type": "Case",
        "number": 5
      }
    },
    {
      "id": 15,
      "question": "【臨床案例】一名 70 歲女性因發燒與呼吸急促就診急診。生命徵象：血壓 96/58 mm Hg （SBP < 100）、心率 108 次 / 分、呼吸 24 次 / 分（RR ≥ 22）、 格拉斯哥昏迷指數（Glasgow Coma Scale, GCS） 14 分（嗜睡意識改變）。數值： 白血球計數（white blood cell count, WBC） 14 × 10³ cells/mm³, 血小板 80,000/mm³, 血清肌酸酐（serum creatinine, SCr） 1.9 mg/dL （基線 0.8） , 乳酸 2.4 mmol/L。未需要升壓劑維持血壓。\n\n根據 Sepsis-3 最新國際定義，該病人的臨床狀態最精準符合下列何者？",
      "options": [
        "A. 嚴重全身性發炎反應症候群（SIRS）。",
        "B. 敗血症（Sepsis）。",
        "C. 敗血性休克（Septic shock）。",
        "D. 嚴重敗血症（Severe sepsis）。"
      ],
      "answer": "B",
      "explanation": "根據 Sepsis-3 國際新定義，敗血症（Sepsis）定義為：因感染引起宿主反應失調導致危及生命的器官功能障礙（SOFA 分數增加 ≥ 2 分；本案血小板、 GCS、 SCr 評分至少 4 分，且 qSOFA 滿分 3 分）。敗血性休克（Septic shock）則必須在充分輸液後仍需升壓劑維持 平均動脈壓（mean arterial pressure, MAP） ≥ 65 mm Hg 且乳酸 > 2 mmol/L （本案未需升壓劑，故非休克）（選項 B 正確；選項 C 錯誤）。 Sepsis-3 已正式廢除「 Severe sepsis 」名詞，且 SIRS 不再作為診斷核心（選項 A 與 D 錯誤）。\n\n【教材出處】PDF 第 15 章，Q253。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 15,
        "question": 253,
        "type": "Case",
        "number": 6
      }
    },
    {
      "id": 16,
      "question": "【臨床案例】一名 71 歲男性有缺血性心肌病變病史（LVEF 20%），因憩室炎穿孔引發腹膜炎與低血壓（MAP 58 mm Hg）入住 加護病房（intensive care unit, ICU）。充分輸液後 ScvO₂ 75%，但乳酸高達 4.1 mmol/L。\n\n針對其血壓與休克處置，下列哪項處方最為適當？",
      "options": [
        "A. 啟動 norepinephrine 輸注，目標 平均動脈壓（mean arterial pressure, MAP） ≥ 65 mm Hg。",
        "B. 單獨啟動 vasopressin 輸注，目標 平均動脈壓（mean arterial pressure, MAP） ≥ 65 mm Hg。",
        "C. 因病人 左心室射出分率（left ventricular ejection fraction, LVEF）僅 20%，應優先單獨使用 dobutamine 治療心因性休克。",
        "D. 優先選用高劑量 epinephrine 單一療法。"
      ],
      "answer": "A",
      "explanation": "雖然病人既往有嚴重心臟衰竭（LVEF 20%），但其 ScvO₂ 達 75% 且合併腹膜炎感染，顯示氧氣輸送與心輸出量相對充足，其低血壓主要來自腹腔感染導致之全身性血管擴張性敗血性休克（distributive shock）而非急性心因性衰竭。 SSC 指南推薦 norepinephrine 為首選升壓劑（選項 A 正確）。 ScvO₂ > 70% 時無指徵單獨使用 dobutamine （選項 C 錯誤）。 vasopressin 不作一線（選項 B 錯誤）。 epinephrine 會引起顯著心搏過速與乳酸升高，非一線首選（選項 D 錯誤）。\n\n【教材出處】PDF 第 15 章，Q254。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 15,
        "question": 254,
        "type": "Case",
        "number": 7
      }
    },
    {
      "id": 17,
      "question": "【臨床案例】一名 59 歲男性因肺炎引發敗血性休克，在完成 30 mL/kg 輸液後，目前正接受 norepinephrine 0.05 mcg/kg/min 輸注。生命徵象：血壓 110/68 mm Hg （MAP 82 mm Hg），心率 88 次 / 分，尿量 0.8 mL/kg/h，乳酸 1.6 mmol/L。住院醫師詢問是否應進行 ACTH 刺激試驗並常規給予 hydrocortisone。\n\n針對重症皮質類固醇的處置，下列何者最適當？",
      "options": [
        "A. 進行 ACTH 刺激試驗，若皮質醇增加 < 9 mcg/dL 則給予 hydrocortisone。",
        "B. 立即給予高劑量 methylprednisolone 1 g/day。",
        "C. 不論升壓劑劑量為何，所有敗血性休克病人在入院 24 小時內均應給予 hydrocortisone 200 mg/day。",
        "D. 目前不需使用皮質類固醇，因病人僅需極低劑量升壓劑且血流動力學與器官灌流已恢復穩定。"
      ],
      "answer": "D",
      "explanation": "SSC 最新指引建議：皮質類固醇（hydrocortisone 200 mg/day）僅適用於『難治型敗血性休克』，即經過充分輸液復甦與持續需要中高劑量升壓劑（如 norepinephrine ≥ 0.25 mcg/kg/min）仍無法維持血流動力學穩定之病人。本案病人僅使用極微量 norepinephrine （0.05 mcg/kg/min）且 平均動脈壓（mean arterial pressure, MAP）與乳酸完全恢復正常，絕無使用類固醇之適應症（選項 D 正確；選項 B 與 C 錯誤）。 CORTICUS 里程碑試驗證實 ACTH 刺激試驗無法預測類固醇療效，指南已明文不再推薦進行 ACTH 刺激試驗（選項 A 錯誤）。\n\n【教材出處】PDF 第 15 章，Q255。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 15,
        "question": 255,
        "type": "Case",
        "number": 8
      }
    }
  ],
  "16": [
    {
      "id": 1,
      "question": "【臨床案例】一名 41 歲男性因機車車禍就診急診。評估發現肋骨骨折、骨盆骨折及雙側股骨骨折。病人意識混亂，生命徵象：血壓 82/48 mm Hg、心率 125 次 / 分、呼吸 34 次 / 分、體溫 95°F （35°C）。進一步評估顯示失血量約佔其全身總血容量的 35%。\n\n根據外傷失血分級（ATLS classification），該病人的出血性休克最精準屬於哪一級？",
      "options": [
        "A. 第 I 級（Class I）。",
        "B. 第 II 級（Class II）。",
        "C. 第 III 級（Class III）。",
        "D. 第 IV 級（Class IV）。"
      ],
      "answer": "C",
      "explanation": "根據高級外傷生命支持（ATLS）出血分級標準：失血量佔總血容量 30%–40% （約 1500–2000 mL）、心率 > 120 bpm、顯著低血壓（SBP < 90）、呼吸急促（30–40）、尿量顯著減少（5–15 mL/h）且伴隨意識混亂 / 嗜睡者，精準定義為『第 III 級出血（Class III hemorrhage） 』（選項 C 正確）。第 I 級失血 <15% （無生命徵象異常）；第 II 級失血 15%–30% （心搏過速但血壓正常）；第 IV 級失血 >40% （瀕死重度休克、無尿）（選項 A、 B、 D 錯誤）。\n\n【教材出處】PDF 第 16 章，Q256。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 16,
        "question": 256,
        "type": "SAQ",
        "number": 1
      }
    },
    {
      "id": 2,
      "question": "【臨床案例】一名 62 歲男性有酒精性肝硬化與門脈高壓病史，因虛弱及吐血（hematemesis）就診急診。生命徵象：血壓 76/42 mm Hg、心率 134 次 / 分、呼吸 28 次 / 分。實驗室檢查： Hb 6.8 g/dL, 血小板 65,000/mm³, 國際標準化比值（international normalized ratio, INR） 2.1, 乳酸 4.8 mmol/L。\n\n根據 Fick 方程式（DO₂ = 10 × CO × CaO₂），下列哪一項數值最不直接代表或反映該病人的氧氣輸送（DO₂）受損？",
      "options": [
        "A. 收縮壓 76 mm Hg。",
        "B. 血紅素（Hb） 6.8 g/dL。",
        "C. 國際標準化比值（international normalized ratio, INR） 2.1。",
        "D. 血清乳酸 4.8 mmol/L。"
      ],
      "answer": "C",
      "explanation": "休克評估的核心在於組織氧氣輸送（DO₂）是否充足。 DO₂ 取決於心輸出量（cardiac output, CO）與動脈含氧量（CaO₂ = 1.34 × Hb × SaO₂）。血紅素低下（Hb 6.8）直接降低 CaO₂，低血壓（76/42）與心搏過速反映有效循環灌流與前負荷衰竭，乳酸則是 DO₂ 不足導致組織無氧代謝的直接生化產物（選項 A、 B、 D 皆與 DO₂ 衰竭直接相關）。 國際標準化比值（international normalized ratio, INR）升高反映肝功能不全或凝血因子缺乏，雖為出血危險因子，但並不直接決定或代表 DO₂ 數值本身（選項 C 正確，為不直接相關項）。\n\n【教材出處】PDF 第 16 章，Q257。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 16,
        "question": 257,
        "type": "SAQ",
        "number": 2
      }
    },
    {
      "id": 3,
      "question": "【臨床案例】一名 28 歲男性因穿刺傷大失血送抵急診，呈現休克狀態。團隊正啟動大量輸血協定（MTP）。\n\n在大量輸血復甦過程中，針對血小板與血漿的目標，下列何者最適當？",
      "options": [
        "A. 維持血小板大於 20,000/mm³ 且 國際標準化比值（international normalized ratio, INR）小於 3.0。",
        "B. 維持血小板大於 100,000/mm³ 且 國際標準化比值（international normalized ratio, INR）小於 1.0。",
        "C. 單純輸注晶體輸液，不需預防性給予血小板。",
        "D. 採用固定比例（1:1:1 或 2:1:1）的濃縮紅血球（PRBC）、新鮮冷凍血漿（FFP）與血小板，維持血小板大於 50,000/mm³ （合併中樞創傷則 >100,000）且 國際標準化比值（international normalized ratio, INR）小於 1.5。"
      ],
      "answer": "D",
      "explanation": "外傷性大出血的「傷害控制復甦（Damage Control Resuscitation） 」指引強烈推薦採用平衡輸血比例（1:1:1 的 PRBC : FFP : Platelets），以預防稀釋性凝血病變，並設定止血目標為血小板 > 50,000/mm³ （活動性大出血或 CNS 創傷則 > 100,000/mm³）且 國際標準化比值（international normalized ratio, INR） < 1.5 （選項 D 正確；選項 A 目標過低無法止血；選項 B 要求過高徒增過負荷風險；選項 C 晶體液稀釋加劇凝血病變）。\n\n【教材出處】PDF 第 16 章，Q258。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 16,
        "question": 258,
        "type": "SAQ",
        "number": 3
      }
    },
    {
      "id": 4,
      "question": "【臨床案例】一名 50 歲男性在外傷大出血接受 10 單位 PRBC 與 8 單位 FFP 輸注後，心電圖出現 QT 間期延長，且肌肉抽搐、低血壓對升壓劑反應不佳。\n\n下列哪一項電解質異常最可能是導致此現象的原因，且應如何處置？",
      "options": [
        "A. 高血鈣；給予 furosemide。",
        "B. 低游離鈣血症（Hypocalcemia）；靜脈給予 calcium chloride 或 calcium gluconate。",
        "C. 低血鉀；靜脈補充 potassium chloride。",
        "D. 高血鎂；給予利尿劑。"
      ],
      "answer": "B",
      "explanation": "儲存血製品（特別是 FFP 與血小板）中含有大量抗凝劑檸檬酸鹽（citrate）。當大量快速輸血時，肝臟無法及時代謝檸檬酸鹽，過量檸檬酸鹽會強力螯合血中游離鈣（ionized calcium），導致急性低游離鈣血症。游離鈣是心肌收縮與凝血級聯反應的必需輔因子，低游離鈣會導致心肌收縮無力、難治型低血壓、 QT 延長與凝血障礙，並顯著增加死亡率；指引建議大量輸血時應常規監測並補充靜脈鈣劑維持正常游離鈣（選項 B 正確；選項 A、 C、 D 錯誤）。\n\n【教材出處】PDF 第 16 章，Q259。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 16,
        "question": 259,
        "type": "SAQ",
        "number": 4
      }
    },
    {
      "id": 5,
      "question": "【臨床案例】一名 35 歲外傷大出血休克病人於受傷後 45 分鐘送達急診。\n\n關於抗纖維蛋白溶解劑 Tranexamic acid （TXA）在該病人中的使用，下列敘述何者最符合 CRASH-2 里程碑試驗之實證？",
      "options": [
        "A. 應於受傷後 3 小時內儘早給予首劑 TXA 1 g 靜脈輸注 10 分鐘，隨後以 1 g 輸注 8 小時，能顯著降低全因死亡率與大出血死亡率。",
        "B. 若受傷已超過 3 小時，仍應常規給予 TXA，因延遲給藥療效不變。",
        "C. TXA 僅能用於非外傷之腸胃道出血，外傷大出血無效。",
        "D. 首劑 TXA 應以 4 g 快速推注以達最高血中濃度。"
      ],
      "answer": "A",
      "explanation": "CRASH-2 大型隨機雙盲多中心試驗（納入超過 2 萬名外傷病人）明確證實：外傷大出血病人在『受傷 3 小時內』給予 TXA （1 g 靜脈輸注 10 分鐘，隨後 1 g 輸注 8 小時），能顯著降低大出血死亡率與全因死亡率（選項 A 正確）。關鍵重點在於時間窗：若受傷超過 3 小時後才給予 TXA，反而與出血死亡率增加相關，故超過 3 小時禁忌給藥（選項 B 錯誤）。標準劑量即為 1 g + 1 g （選項 D 錯誤）。\n\n【教材出處】PDF 第 16 章，Q260。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 16,
        "question": 260,
        "type": "SAQ",
        "number": 5
      }
    },
    {
      "id": 6,
      "question": "【臨床案例】一名 78 歲男性因非瓣膜性心房顫動長期服用 apixaban 5 mg 每日兩次（twice daily, BID），現因急性大腦實質顱內出血（intracerebral hemorrhage, ICH）呈現昏迷收治神經重症 加護病房（intensive care unit, ICU）。最後一次服藥時間為 4 小時前。\n\n針對其 apixaban 相關危及生命之重大出血，首選的反轉中和處置為何？",
      "options": [
        "A. Idarucizumab 5 g 靜脈輸注。",
        "B. Andexanet alfa 靜脈輸注（或若無法取得則給予 4-factor PCC 50 units/kg）。",
        "C. Protamine sulfate 50 mg 靜脈推注。",
        "D. 維生素 K 10 mg 靜脈輸注。"
      ],
      "answer": "B",
      "explanation": "Apixaban 為第十凝血因子抑制劑（Factor Xa inhibitor）。針對第十凝血因子抑制劑（apixaban, rivaroxaban）引起之危及生命大出血， 美國食品藥物管理局（Food and Drug Administration, FDA）核准的專一性反轉拮抗劑為 Andexanet alfa （重組修飾人第 Xa 因子誘餌蛋白）；若醫療院所無法取得 Andexanet alfa，最新指南推薦使用 4 因子凝血酶原複合物濃縮劑（4F-PCC, 50 units/kg）作為替代反轉用藥（選項 B 正確）。 Idarucizumab 是專一性對抗 dabigatran 的拮抗劑（選項 A 錯誤）。 Protamine 用於中和 heparin（選項 C 錯誤）。維生素 K 僅對 warfarin 有效（選項 D 錯誤）。\n\n【教材出處】PDF 第 16 章，Q261。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 16,
        "question": 261,
        "type": "SAQ",
        "number": 6
      }
    },
    {
      "id": 7,
      "question": "【臨床案例】一名 68 歲女性因心房顫動服用 warfarin，現因創傷性顱內硬腦膜下出血（SDH）就診急診，入院 國際標準化比值（international normalized ratio, INR）為 4.5。\n\n針對 warfarin 引起的危及生命大出血，下列何種急性反轉處置最為迅速且適當？",
      "options": [
        "A. 單純給予新鮮冷凍血漿（FFP） 4 單位。",
        "B. 4 因子凝血酶原複合物濃縮劑（4F-PCC）依體重與 國際標準化比值（international normalized ratio, INR）給藥，並合併靜脈注射維生素 K 10 mg。",
        "C. 單純口服維生素 K 10 mg。",
        "D. 靜脈注射 recombinant factor VIIa （rFVIIa）。"
      ],
      "answer": "B",
      "explanation": "對於 warfarin 引起的危急顱內或重大出血，隨機試驗證實 4F-PCC （含有完整無活性的維生素 K 依賴因子 II, VII, IX, X）在 國際標準化比值（international normalized ratio, INR）快速校正（數十分鐘內）與止血效果上顯著優於 FFP，且容量負荷與輸血相關併發症顯著較少。此外，因 4F-PCC 內的外源凝血因子半衰期短，必須同時合併給予靜脈維生素 K （10 mg IVPB 慢速輸注），以刺激肝臟自體持續合成凝血因子（選項 B 正確；選項 A、 C 速度過慢；選項 D 易致血栓且非首選）。\n\n【教材出處】PDF 第 16 章，Q262。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 16,
        "question": 262,
        "type": "SAQ",
        "number": 7
      }
    },
    {
      "id": 8,
      "question": "【臨床案例】一名 70 歲男性因急性下肢深部靜脈血栓接受未分餾 heparin （unfractionated heparin, UFH）靜脈輸注，因劑量計算錯誤導致給藥過量，目前 活化部分凝血活酶時間（activated partial thromboplastin time, aPTT） > 150 秒並出現自發性腹膜後血腫。過去 1 小時內已停止 heparin 輸注，估計體內殘留約 5000 units heparin。\n\n針對其 heparin 過量出血，最適當的 protamine sulfate 中和劑量為何？",
      "options": [
        "A. Protamine sulfate 50 mg 靜脈緩慢輸注超過 10 分鐘（中和比例約 1 mg protamine 中和 100 units heparin，單次上限 50 mg）。",
        "B. Protamine sulfate 250 mg 快速推注。",
        "C. 給予 4F-PCC 50 units/kg。",
        "D. 給予 Andexanet alfa。"
      ],
      "answer": "A",
      "explanation": "Protamine sulfate 是 heparin （unfractionated heparin, UFH）的專一性中和劑，常規比例為每 1 mg protamine 可中和約 100 units 體內殘存之 未分餾 heparin（unfractionated heparin, UFH）。中和 5000 units heparin 需 50 mg protamine。指引明文規定單次投予上限為 50 mg，且必須緩慢靜脈輸注（至少 10 分鐘以上），以防過快推注引起嚴重低血壓、心搏過緩及致命性過敏性休克（選項 A 正確；選項 B 劑量嚴重過量且推注過快致死）。 4F-PCC 與 Andexanet alfa 不用於中和 heparin（選項 C 與 D 錯誤）。\n\n【教材出處】PDF 第 16 章，Q263。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 16,
        "question": 263,
        "type": "SAQ",
        "number": 8
      }
    },
    {
      "id": 9,
      "question": "【臨床案例】一名 60 歲女性（體重 140 kg）突發急性次大塊肺栓塞（pulmonary embolism, PE）併發低血壓性阻塞性休克（收縮壓 78 mm Hg, 心率 130 bpm, CTA 證實雙側大塊 PE）。無活動性出血或抗凝禁忌。\n\n針對此高危險（massive/high-risk）肺栓塞併發休克病人，下列哪一種全身溶栓藥物處方最適當？",
      "options": [
        "A. tenecteplase 50 mg 靜脈推注一次。",
        "B. 暫緩溶栓，等待心臟超音波與心肌酵素報告出爐再決定。",
        "C. 首選導管導引局部溶栓（CDT）而非全身性溶栓。",
        "D. Alteplase （rt-PA） 100 mg 靜脈持續輸注 2 小時。"
      ],
      "answer": "D",
      "explanation": "對於血流動力學不穩定（SBP < 90 或休克）的高危險大塊肺栓塞（massive PE），全身性血栓溶解治療是能迅速打通肺動脈、解除右心室急性後負荷梗阻、挽救生命的標準一線處置。經指引與 美國食品藥物管理局（Food and Drug Administration, FDA）核准之標準處方為 Alteplase （rt-PA） 100 mg 靜脈輸注超過 2 小時（選項 D 正確）。 CHEST 指引指出在血流動力學不穩定的急性休克中，全身溶栓優於需要設備與耗時建立的導管溶栓（選項 C 錯誤）。已有明確休克與 CTA 確診大塊 肺栓塞（pulmonary embolism, PE），不應延遲溶栓等待抽血或心臟超音波（選項 B 錯誤）。 tenecteplase 在 PE 雖有研究，但常用體重上限劑量為 50 mg 針對 <90 kg，且 alteplase 100 mg 仍為唯一 FDA 與指南一線首選（選項 A 不如 D）。\n\n【教材出處】PDF 第 16 章，Q264。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 16,
        "question": 264,
        "type": "SAQ",
        "number": 9
      }
    },
    {
      "id": 10,
      "question": "【臨床案例】一名 67 歲男性在狩獵時臀部意外遭受槍傷，立即送至急診。轉送途中接受 500 mL 乳酸林格氏液。入院生命徵象：血壓 104/58 mm Hg、心率 108 次 / 分、呼吸 22 次 / 分、體溫 95°F （35°C）。疼痛評分 8/10，表情焦慮。骨盆與腹部檢查懷疑有活動性穿刺血管損傷。\n\n針對此穿刺傷出血病人的初期液體復甦策略，下列何者最適當？",
      "options": [
        "A. 以 1000 mL/h 快速輸注乳酸林格氏液以維持尿量大於 30 mL/h。",
        "B. 大量靜脈輸注晶體液使血壓迅速升至收縮壓 > 140 mm Hg。",
        "C. 常規使用常溫 sodium chloride 溶液加壓快速輸注 3 L。",
        "D. 實施允許性低血壓（Permissive hypotension）策略，限制晶體輸液量（目標 SBP 80–90 mm Hg 或 MAP 50–60 mm Hg），直至外科手術控制出血。"
      ],
      "answer": "D",
      "explanation": "在尚未完成外科手術止血的穿刺性外傷出血病人中，過度積極大量輸液會提高動脈壓並稀釋凝血因子，導致已形成的初期血栓被沖脫（pop the clot）而引發再大出血。外傷指引強烈建議實施『允許性低血壓（Permissive hypotension） 』策略，維持可接受的腦灌流（目標 SBP 80–90 mm Hg 或橈動脈搏動可觸及），嚴格限制晶體液總量，直到進入手術室完成外科止血（選項 D 正確；選項 A、 B、 C 錯誤）。\n\n【教材出處】PDF 第 16 章，Q265。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 16,
        "question": 265,
        "type": "Case",
        "number": 1
      }
    },
    {
      "id": 11,
      "question": "【臨床案例】一名 29 歲男性（身高 72 英吋，體重 85 kg）在煉鋼廠工作跌入高溫爐渣，造成下肢與臀部 40% 總體表面積（TBSA）之二至三度燒傷收治燒傷中心。轉送途中已接受 500 mL sodium chloride 溶液。住院醫師請您協助依 Parkland 公式計算前 24 小時的輸液需求。\n\n針對其燒傷休克輸液復甦，下列計算與給藥計畫何者最佳？",
      "options": [
        "A. 前 24 小時給予 15 L 乳酸林格氏液，前 12 小時以 1000 mL/h 給予。",
        "B. 根據 Parkland 公式 [4 mL × kg × %TBSA]，前 24 小時總量為 13,600 mL 乳酸林格氏液；扣除途中 500 mL 後，前 8 小時給予一半（約 800 mL/h），後 16 小時給予另一半（約 425 mL/h），並依尿量 0.5 mL/kg/h 動態滴定。",
        "C. 前 24 小時給予 5% 葡萄糖 sodium chloride 溶液，均勻分成 24 小時輸注。",
        "D. 前 8 小時完全給予高張 sodium chloride 溶液，後 16 小時給予白蛋白。"
      ],
      "answer": "B",
      "explanation": "根據 Parkland 公式：前 24 小時乳酸林格氏液總量 = 4 mL × 體重（kg） × %TBSA = 4 × 85 × 40 = 13,600 mL。其中一半（6,800 mL）必須在受傷後『前 8 小時』內輸畢（扣除已給之 500 mL，約需 788 mL/h），其餘一半則在接下來的 16 小時內輸注（約 425 mL/h）。同時以成人尿量 0.5 mL/kg/h （約 40–50 mL/h）作為滴定指標（選項 B 正確；選項 A、 C、 D 錯誤）。\n\n【教材出處】PDF 第 16 章，Q266。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 16,
        "question": 266,
        "type": "Case",
        "number": 2
      }
    },
    {
      "id": 12,
      "question": "【臨床案例】D.R. 是一名 37 歲男性，騎機車撞上鹿後送醫。初次評估：已插管、呼吸 37 次 / 分、 收縮壓（systolic blood pressure, SBP） 72 mm Hg、心率 141 次 / 分、 格拉斯哥昏迷指數（Glasgow Coma Scale, GCS） 5T。腹部超音波 FAST 檢驗呈陽性（腹腔內大出血）。啟動大量輸血協定（MTP），送往手術室進行緊急剖腹探查術。\n\n針對其低血容出血性休克，最佳的初始復甦策略為何？",
      "options": [
        "A. 快速加壓輸注 0.9% sodium chloride 溶液 3 L。",
        "B. 等待血紅素與凝血檢驗回報後再開始輸血。",
        "C. 立即給予高劑量升壓劑作為主要復甦手段。",
        "D. 立即啟動大量輸血協定，以 1:1:1 固定比例輸注濃縮紅血球、血漿與血小板，並將晶體液輸注量降至最低。"
      ],
      "answer": "D",
      "explanation": "對於休克指數異常、 FAST 陽性的重大創傷大出血病人， PROMMTT 與 PROPPR 試驗證實以 1:1:1 比例（PRBC:FFP:PLT）進行平衡輸血復甦，相較於晶體液或延遲輸血，能顯著提升 24 小時止血率並降低失血致死率（選項 D 正確）。晶體液大量輸注會加劇低體溫、酸中毒與稀釋性凝血病變（致命三聯徵）（選項 A 錯誤）。大出血急性期血紅素尚未稀釋，數值常呈假性正常，絕不可等待檢驗（選項 B 錯誤）。升壓劑僅用於輸血復甦期間暫時維持生命，非根本治療（選項 C 錯誤）。\n\n【教材出處】PDF 第 16 章，Q267。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 16,
        "question": 267,
        "type": "Case",
        "number": 3
      }
    },
    {
      "id": 13,
      "question": "【臨床案例】D.R. 是一名 37 歲男性，騎機車撞上鹿後送醫。初次評估：已插管、呼吸 37 次 / 分、 收縮壓（systolic blood pressure, SBP） 72 mm Hg、心率 141 次 / 分、 格拉斯哥昏迷指數（Glasgow Coma Scale, GCS） 5T。腹部超音波 FAST 檢驗呈陽性（腹腔內大出血）。啟動大量輸血協定（MTP），送往手術室進行緊急剖腹探查術。\n\n在大量輸血過程中，針對酸中毒與電解質紊亂，下列哪一項處置最適當？",
      "options": [
        "A. 常規給予 sodium bicarbonate 以糾正代謝性酸中毒。",
        "B. 監測游離鈣濃度，並積極給予靜脈鈣劑以維持游離鈣在正常範圍。",
        "C. 常規給予高劑量 insulin 與葡萄糖以預防高血鉀。",
        "D. 完全不需監測電解質，只要輸血即可。"
      ],
      "answer": "B",
      "explanation": "儲存血中的檸檬酸鹽會大量結合游離鈣，導致重度低游離鈣血症，直接瓦解凝血反應並引發頑固性低血壓與死亡。監測並積極補充鈣劑維持正常游離鈣濃度是大量輸血的核心標準處置（選項 B 正確）。創傷大出血的酸中毒主因為低灌流，使用 sodium bicarbonate 並無益處且可能加劇細胞內酸中毒（選項 A 錯誤）。\n\n【教材出處】PDF 第 16 章，Q268。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 16,
        "question": 268,
        "type": "Case",
        "number": 4
      }
    },
    {
      "id": 14,
      "question": "【臨床案例】一名 54 歲男性因車輛翻覆事故送醫， FAST 陽性，接受剖腹探查術切除第 5 級脾臟破裂。入院 4 小時內已接受 14 單位 PRBC、 12 單位 FFP 及 10 單位血小板。\n\n在完成上述大量輸血後，下列哪一項併發症最不可能發生或需特別注意？",
      "options": [
        "A. 低體溫（Hypothermia）。",
        "B. 高血鉀（Hyperkalemia）。",
        "C. 高血鈣（Hypercalcemia）。",
        "D. 輸血相關急性肺損傷（TRALI）或輸血相關循環過負荷（TACO）。"
      ],
      "answer": "C",
      "explanation": "大量輸注含檸檬酸鹽之血製品會引發『低血鈣』而非高血鈣（選項 C 正確，為最不可能發生之反向選項）。冷藏庫存血的大量輸注極易導致嚴重低體溫（A 可能發生）；庫存紅血球溶血釋放細胞內鉀離子易引發急性高血鉀（B 可能發生）；大量血製品輸注亦為 TRALI 與 TACO 的重大高危險因子（D 可能發生）。\n\n【教材出處】PDF 第 16 章，Q269。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 16,
        "question": 269,
        "type": "Case",
        "number": 5
      }
    },
    {
      "id": 15,
      "question": "【臨床案例】一名 60 歲女性因跌倒導致顱內出血，目前正服用 dabigatran 150 mg 每日兩次（twice daily, BID）預防房顫中風，最後一次服藥為 2 小時前。\n\n針對其 dabigatran 相關危及生命大出血，首選專一性反轉拮抗劑為何？",
      "options": [
        "A. Andexanet alfa。",
        "B. Idarucizumab 5 g 靜脈輸注。",
        "C. Protamine sulfate 50 mg。",
        "D. 4F-PCC 50 units/kg。"
      ],
      "answer": "B",
      "explanation": "Idarucizumab 是一種人源化單株抗體片段（Fab），能專一性以比凝血酶高 350 倍的親和力結合 dabigatran，在數分鐘內完全反轉中和 dabigatran 的抗凝血作用，是 dabigatran 大出血的唯一首選專一拮抗劑（選項 B 正確）。 Andexanet alfa 用於第 Xa 因子抑制劑（選項 A 錯誤）。 Protamine 用於 heparin（選項 C 錯誤）。 4F-PCC 僅在無法取得 idarucizumab 時才考慮替代（選項 D 錯誤）。\n\n【教材出處】PDF 第 16 章，Q270。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 16,
        "question": 270,
        "type": "Case",
        "number": 6
      }
    },
    {
      "id": 16,
      "question": "【臨床案例】一名 48 歲女性（體重 75 kg）因呼吸短促就診急診，胸部 CT 血管攝影（CTA）顯示右肺動脈次節分支肺栓塞（pulmonary embolism, PE），無右心室擴大。生命徵象：心率 118 次 / 分、血壓 98/62 mm Hg、尿量 1 mL/kg/h、 Troponin T 0.06 ng/mL、 BNP 60 pg/mL、乳酸 0.9 mmol/L。\n\n根據危險分層，該病人的肺栓塞嚴重度與最適當的初期抗凝治療為何？",
      "options": [
        "A. 高危險性 肺栓塞（pulmonary embolism, PE）；應立即給予全身性溶栓治療（Alteplase 100 mg）。",
        "B. 低危險性 肺栓塞（pulmonary embolism, PE）；可門診口服 aspirin 治療。",
        "C. 高危險性 肺栓塞（pulmonary embolism, PE）；應接受急診手術栓塞清除術。",
        "D. 中 - 低危險性 肺栓塞（pulmonary embolism, PE） （Intermediate-low risk PE）；應啟動治療性抗凝血治療（如低分子量 heparin LMWH 或 DOAC），不需常規溶栓。"
      ],
      "answer": "D",
      "explanation": "該病人血壓穩定（SBP > 90），無心因性休克，故非高危險大塊 肺栓塞（pulmonary embolism, PE） （選項 A 與 C 錯誤）。心臟超音波無右心室衰竭擴大，僅 troponin 輕微升高，屬於中 - 低危險性肺栓塞。指引強烈建議此類病人應給予治療性抗凝血治療（首選 LMWH 或 DOAC），常規全身性溶栓治療的顱內出血風險遠高於其獲益，列為不推薦（選項 D 正確；選項 B 單用 aspirin 無抗凝療效）。\n\n【教材出處】PDF 第 16 章，Q271。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 16,
        "question": 271,
        "type": "Case",
        "number": 7
      }
    },
    {
      "id": 17,
      "question": "【臨床案例】一名 52 歲男性因車禍多處創傷導致大量腹腔出血，目前接受緊急手術與大量輸血復甦。目前已使用 TXA、 1:1:1 輸血及補充足量鈣離子。體溫已由 34.2°C 回升至 36.5°C。外科醫師詢問是否可給予重組第七凝血因子（rFVIIa）作為輔助止血。\n\n關於外傷大出血中使用 recombinant factor VIIa （rFVIIa），下列何者最符合目前指引與實證？",
      "options": [
        "A. rFVIIa 應作為所有外傷大出血病人的第一線常規用藥。",
        "B. rFVIIa 已經被證實能顯著改善外傷大出血病人的長期全因死亡率。",
        "C. rFVIIa 不會增加動脈或靜脈血栓栓塞事件的風險。",
        "D. rFVIIa 僅能在外科手術、大量輸血、校正酸中毒、低體溫及低血鈣等所有常規止血措施皆無效之難治型威脅生命大出血時作為最後挽救手段，且需注意其顯著增加之動脈血栓風險。"
      ],
      "answer": "D",
      "explanation": "多項大型臨床試驗指出，外傷大出血病人使用 rFVIIa 雖然可減少少許輸血量，但『未能改善整體存活率或死亡率』，反而顯著增加心肌梗塞、中風等嚴重動脈血栓栓塞併發症。因此外傷指南明確限制其絕不可作為一線常規用藥，僅能保留在標準傷害控制手術與輸血復甦均告失敗、瀕臨死亡的難治性出血中作為最後手段（選項 D 正確；選項 A、 B、 C 錯誤）。\n\n【教材出處】PDF 第 16 章，Q272。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 16,
        "question": 272,
        "type": "Case",
        "number": 8
      }
    }
  ],
  "17": [
    {
      "id": 1,
      "question": "【臨床案例】P.J. 是一名無重大過去病史的女性病人，因重症使用呼吸器正接受 propofol 50–60 mcg/kg/min 及 fentanyl 75–100 mcg/h 持續輸注達 4 天。今日實驗室檢驗顯示其轉氨酶（AST/ALT）升至基線的 5 倍、血清乳酸升至 5 mmol/L、三酸甘油酯（triglyceride）升至 450 mg/dL。未新增其他藥物。\n\n考量上述檢驗數值變化，醫療團隊目前最應緊急處理的潛在重大併發症為何？",
      "options": [
        "A. 深部靜脈血栓（deep vein thrombosis, DVT）。",
        "B. 重症多發性神經病變（CIP）。",
        "C. 加護病房譫妄（ICU delirium）。",
        "D. propofol 輸注症候群（propofol-related infusion syndrome, PRIS）。"
      ],
      "answer": "D",
      "explanation": "長時間（>48 小時）且高劑量（>50 mcg/kg/min 或 >4–5 mg/kg/h）輸注 propofol，是引發致死性『 propofol 輸注症候群（PRIS） 』的主要危險因子。其典型早期生化與器官受損表徵包括：不明原因之代謝性酸中毒合併高乳酸血症、高三酸甘油酯血症、肝轉氨酶顯著升高、橫紋肌溶解症、急性腎衰竭、高血鉀，進而引發難治型心因性休克、心律不整（如 Brugada-like 心電圖）甚至心跳停止（選項 D 正確；選項 A、 B、 C 錯誤）。一旦懷疑 PRIS，必須立即停止輸注 propofol 並改用替代鎮靜劑。\n\n【教材出處】PDF 第 17 章，Q273。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 17,
        "question": 273,
        "type": "SAQ",
        "number": 1
      }
    },
    {
      "id": 2,
      "question": "【臨床案例】在評估長期使用靜脈鎮靜劑的重症病人時。\n\n下列哪一項關於鎮靜策略的敘述最符合最新 PADIS 指南之實證建議？",
      "options": [
        "A. 所有接受機械通氣的重症病人都應維持深度鎮靜（RASS −4 至 −5），以避免非預期拔管。",
        "B. 在接受機械通氣的成人重症病人中，優先推薦使用非苯二氮平類鎮靜劑（propofol 或 dexmedetomidine），優於苯二氮平類藥物（midazolam 或 lorazepam）。",
        "C. dexmedetomidine 會顯著延長機械通氣時間並增加譫妄風險。",
        "D. midazolam 因清除半衰期固定且不受器官功能影響，為 加護病房（intensive care unit, ICU）長期鎮靜首選。"
      ],
      "answer": "B",
      "explanation": "多項大型隨機對照試驗與統合分析證實，相較於苯二氮平類（benzodiazepines），使用非苯二氮平類鎮靜劑（propofol 或 dexmedetomidine）能顯著縮短呼吸器機械通氣天數、縮短加護病房住院期，且顯著降低 加護病房（intensive care unit, ICU）譫妄發生率；因此 PADIS 指南一致強烈建議優先選用非苯二氮平類（選項 B 正確）。指南倡導維持輕度鎮靜（目標 RASS −1 至 0 或 −2），過度深度鎮靜增加死亡率（選項 A 錯誤）。 dexmedetomidine 能縮短呼吸器時間並減少譫妄（選項 C 錯誤）。 midazolam 具活性代謝物且極易在腎衰竭與重症中蓄積延長鎮靜（選項 D 錯誤）。\n\n【教材出處】PDF 第 17 章，Q274。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 17,
        "question": 274,
        "type": "SAQ",
        "number": 2
      }
    },
    {
      "id": 3,
      "question": "【臨床案例】在加護病房中評估無法以言語表達的插管重症病人之疼痛程度。\n\n下列哪一項評估工具屬於經實證驗證且指南推薦的有效客觀疼痛評估量表？",
      "options": [
        "A. 單純監測心率與血壓的波動。",
        "B. 鎮靜安撫評分（Richmond Agitation-Sedation Scale, RASS）。",
        "C. 格拉斯哥昏迷指數（Glasgow Coma Scale, GCS）。",
        "D. 重症照護疼痛觀察工具（Critical Care Pain Observation Tool, CPOT）或行為疼痛量表（Behavioral Pain Scale, BPS）。"
      ],
      "answer": "D",
      "explanation": "對於無法自我表達疼痛的插管重症病人， PADIS 指南強烈建議使用經臨床驗證之行為評估工具： 重症疼痛觀察工具（Critical-Care Pain Observation Tool, CPOT） （評估面部表情、肢體動作、肌張力、與呼吸機協調性）或 行為疼痛量表（Behavioral Pain Scale, BPS） （評估面部表情、上肢動作、呼吸機順應性），總分升高代表存在客觀疼痛（選項 D 正確）。生命徵象（心率、血壓）極易受容量、升壓劑、感染等多重因素干擾，不可單獨作為疼痛評估依據（選項 A 錯誤）。 Richmond 躁動鎮靜量表（Richmond Agitation-Sedation Scale, RASS）是鎮靜躁動量表（選項 B 錯誤）； 格拉斯哥昏迷指數（Glasgow Coma Scale, GCS）是意識深度量表（選項 C 錯誤）。\n\n【教材出處】PDF 第 17 章，Q275。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 17,
        "question": 275,
        "type": "SAQ",
        "number": 3
      }
    },
    {
      "id": 4,
      "question": "【臨床案例】一名 54 歲男性因重度 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）接受長時間 fentanyl 高劑量持續輸注（>5 天）合併 propofol。近日病人出現嚴重急性肝功能障礙伴低白蛋白血症，且 fentanyl 鎮靜蓄積時間顯著超出預期。\n\n下列哪一項藥物動力學（pharmacokinetics, PK）特性最能合理解釋長時間輸注 fentanyl 在肝功能衰竭病人中清除率大幅延遲且作用時間延長的現象？",
      "options": [
        "A. fentanyl 主要經由腎臟排泄未改變原型藥物。",
        "B. fentanyl 具高度親脂性（high lipophilicity）與極大分佈體積，長期輸注時情境敏感半衰期（context- sensitive half-time）顯著延長，且主要經肝臟 CYP3A4 代謝，肝衰竭時清除率急劇下降。",
        "C. propofol 誘導了 CYP3A4 酵素加速其代謝。",
        "D. 低白蛋白血症使 fentanyl 游離分率下降。"
      ],
      "answer": "B",
      "explanation": "fentanyl 具極高脂溶性，短期單次給藥因快速重新分佈至脂肪組織而作用短暫；但在長時間持續靜脈輸注時，周邊脂肪與深部組織飽和，藥物自組織緩慢釋放回血中，導致情境敏感半衰期（context- sensitive half-time）急劇攀升至數百分鐘以上。加上其主要經肝臟 CYP3A4 代謝為無活性去甲芬太尼，在重度肝功能受損病人中代謝清除率大幅下降，造成嚴重的體內蓄積與長時間甦醒延遲（選項 B 正確；選項 A、 C、 D 錯誤）。\n\n【教材出處】PDF 第 17 章，Q276。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 17,
        "question": 276,
        "type": "SAQ",
        "number": 4
      }
    },
    {
      "id": 5,
      "question": "【臨床案例】一名 58 歲女性因肺炎收治 加護病房（intensive care unit, ICU），入院前長期於門診服用 alprazolam 1 mg 每日三次（three times daily, TID）及 paroxetine 20 mg 每日一次（once daily, QD）。入院後因未核對居家藥物而中斷給藥。住院第 3 天，病人突發嚴重躁動、焦慮、失眠、瞻妄，並伴隨血壓 180/100 mm Hg 及心率 125 次 / 分。呼吸狀況尚可，無發燒或感染源擴散。\n\n此時臨床藥師應優先向醫療團隊提出何種處置建議？",
      "options": [
        "A. 立即加開高劑量 fentanyl 持續靜脈輸注以強力鎮靜。",
        "B. 詳實評估其居家長期用藥史，辨識出急性苯二氮平類及抗憂鬱劑之「藥物戒斷症候群（drug withdrawal syndrome） 」，並儘速恢復其居家口服藥物治療。",
        "C. 啟動 haloperidol 5 mg 靜脈注射以治療譫妄。",
        "D. 啟動 propofol 靜脈輸注。"
      ],
      "answer": "B",
      "explanation": "PADIS 指南在處理 加護病房（intensive care unit, ICU）病人急性躁動時，首要步驟為『尋找並治療潛在病因』。長期服用 GABA 受體作用劑（苯二氮平類）、鴉片類或抗憂鬱劑的病人，若入院後突遭中斷，常在 2–4 天內誘發急性戒斷症候群，表現為重度躁動、震顫、自律神經亢進（高血壓、心搏過速）及譫妄。治療戒斷的根本方法是儘速重新引進該類藥物（或同等長效製劑）進行替代漸減，單純使用鴉片類或抗精神病藥無法治癒苯二氮平類戒斷（選項 B 正確；選項 A、 C、 D 錯誤）。\n\n【教材出處】PDF 第 17 章，Q277。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 17,
        "question": 277,
        "type": "SAQ",
        "number": 5
      }
    },
    {
      "id": 6,
      "question": "【臨床案例】在加護病房每日評估病人譫妄狀態時。\n\n下列哪一項工具為經過嚴謹驗證且目前指南強烈推薦之重症病人譫妄篩檢工具？",
      "options": [
        "A. 重症照護疼痛觀察工具（Critical-Care Pain Observation Tool, CPOT）。",
        "B. 簡短智能測驗（MMSE）。",
        "C. 行為疼痛量表（Behavioral Pain Scale, BPS）。",
        "D. 加護病房混亂評估量表（Confusion Assessment Method for the ICU, CAM-ICU）或重症譫妄篩檢檢核表（ICDSC）。"
      ],
      "answer": "D",
      "explanation": "PADIS 指南強烈推薦每班常規使用經實證驗證之重症譫妄評估量表： 加護病房意識混亂評估法（Confusion Assessment Method for the ICU, CAM-ICU） （包含四項核心特徵：急性意識改變 / 波動、注意力缺失、思維紊亂、意識狀態改變）或 ICDSC （8 分制檢核表），兩者皆具備高敏感度與特異度且適用於插管病人（選項 D 正確）。 重症疼痛觀察工具（Critical-Care Pain Observation Tool, CPOT）與 行為疼痛量表（Behavioral Pain Scale, BPS）為疼痛評估工具（選項 A 與 C 錯誤）； MMSE 需口語配合且不適用於重症插管病人（選項 B 錯誤）。\n\n【教材出處】PDF 第 17 章，Q278。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 17,
        "question": 278,
        "type": "SAQ",
        "number": 6
      }
    },
    {
      "id": 7,
      "question": "【臨床案例】一名 65 歲男性因重度 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）接受持續神經肌肉阻斷劑（NMBA，如 cisatracurium）輸注以改善嚴重人機不同步與危及生命的低氧血症。\n\n在給予持續神經肌肉阻斷治療期間，下列哪一項照護措施屬於不可或缺且強制執行的原則？",
      "options": [
        "A. 停止所有鎮靜與止痛藥物，避免遮蔽神經功能監測。",
        "B. 在啟動肌鬆劑前及輸注全程，必須確保給予充足且深度的鎮靜劑與止痛劑，並給予常規眼部潤滑保護以防角膜潰瘍。",
        "C. 不需監測四聯刺激（TOF），完全依呼吸器吸氣壓力調整劑量。",
        "D. 每小時停止按壓進行瞳孔檢查。"
      ],
      "answer": "B",
      "explanation": "神經肌肉阻斷劑（neuromuscular blocking agent, NMBA）僅具骨骼肌麻痺作用，『完全不具備鎮靜、催眠、抗焦慮或止痛效能』！若在鎮靜或止痛不足的情況下給予肌鬆劑，病人會在意識完全清醒卻全身癱瘓無法呼吸的極端恐懼與劇痛中承受折磨（清醒麻痺）。因此在給予 神經肌肉阻斷劑（neuromuscular blocking agent, NMBA）前與輸注全程，必須確保深層鎮靜止痛（RASS −4 至 −5）；此外因眼輪匝肌麻痺無法自主眨眼，必須常規使用眼藥膏或眼部保濕以預防暴露性角膜潰瘍（選項 B 正確；選項 A 為極端醫療過失禁忌）。應定期使用 TOF 監測神經肌肉阻滯深度（選項 C 錯誤）。\n\n【教材出處】PDF 第 17 章，Q279。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 17,
        "question": 279,
        "type": "SAQ",
        "number": 7
      }
    },
    {
      "id": 8,
      "question": "【臨床案例】關於重症加護病房內譫妄（ICU Delirium）的預防與處置策略。\n\n下列哪一項陳述最符合當前 PADIS 指南及 MIND-USA 大型臨床試驗的結論？",
      "options": [
        "A. 常規預防性給予 haloperidol 或非典型抗精神病藥能顯著降低譫妄發生率。",
        "B. 所有譫妄病人均應常規啟動 lorazepam 靜脈注射治療。",
        "C. MIND-USA 試驗證實抗精神病藥物能顯著縮短譫妄持續天數並改善 30 天存活率。",
        "D. 不建議常規使用抗精神病藥物（包括典型如 haloperidol 或非典型藥物）來預防或治療無急迫危險之低活動型 / 單純譫妄；處置核心應為 ABCDEF 集束化策略與非藥物處置（如早期活動、睡眠促進、減少苯二氮平類、定向感建立）。"
      ],
      "answer": "D",
      "explanation": "MIND-USA 大型隨機雙盲安慰劑對照試驗（發表於 NEJM）確定證實：在重症譫妄病人中，使用典型抗精神病藥（haloperidol）或非典型藥物（ziprasidone）相較於安慰劑，在縮短譫妄天數、機械通氣時間或 30 天死亡率上『完全無統計學顯著差異』。因此最新 PADIS 指南明文反對常規使用抗精神病藥來治療或預防無重度自傷 / 傷人危險的重症譫妄，應專注於非藥物介入與早期活動等 ABCDEF 集束化措施（選項 D 正確；選項 A、 B、 C 錯誤）。\n\n【教材出處】PDF 第 17 章，Q280。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 17,
        "question": 280,
        "type": "SAQ",
        "number": 8
      }
    },
    {
      "id": 9,
      "question": "【臨床案例】T.O. 是一名 70 歲男性，因車禍多處骨折剛收治 加護病房（intensive care unit, ICU），病史包含高血壓。氣管內插管後出現明顯躁動。數值正常，生命徵象：血壓 175/95 mm Hg、心率 110 次 / 分。\n\n此時下列哪一組初始鎮靜止痛處方最為適當？",
      "options": [
        "A. fentanyl 持續輸注合併 midazolam 持續輸注。",
        "B. 單純 propofol 輸注，並視需要給予 fentanyl。",
        "C. 視需要給予 midazolam 及視需要給予 fentanyl。",
        "D. fentanyl 持續輸注，並於疼痛控制後視需要滴定 propofol 以維持輕度鎮靜（落實止痛優先 Analgesia- First 原則）。"
      ],
      "answer": "D",
      "explanation": "多處外傷骨折插管病人，急性躁動與交感神經亢進（高血壓、心搏過速）絕大多數源於劇烈骨折創傷疼痛。 PADIS 指南倡導『止痛優先／以止痛為基礎的鎮靜（Analgesia-First / Analgo-sedation） 』原則，首先給予充分的鴉片類止痛劑（如 fentanyl）以控制疼痛根源；若止痛足夠後仍有焦慮躁動，再輔以非苯二氮平類鎮靜劑（如 propofol）滴定至輕度鎮靜（選項 D 正確；選項 B 未能充分優先保證基礎止痛）。常規使用苯二氮平類輸注會增加譫妄與呼吸器依賴（選項 A 與 C 錯誤）。\n\n【教材出處】PDF 第 17 章，Q281。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 17,
        "question": 281,
        "type": "Case",
        "number": 1
      }
    },
    {
      "id": 10,
      "question": "【臨床案例】T.O. 是一名 70 歲男性，因車禍多處骨折剛收治 加護病房（intensive care unit, ICU），病史包含高血壓。氣管內插管後出現明顯躁動。數值正常，生命徵象：血壓 175/95 mm Hg、心率 110 次 / 分。\n\n在啟動處方 2 小時後， T.O. 的 重症疼痛觀察工具（Critical-Care Pain Observation Tool, CPOT）評分為 0 （無疼痛），但 Richmond 躁動鎮靜量表（Richmond Agitation-Sedation Scale, RASS）評分為 +2 （躁動、試圖拔管）。血壓 150/85 mm Hg、心率 95 次 / 分。此時下一步處置何者最佳？",
      "options": [
        "A. 調高 fentanyl 輸注速率。",
        "B. 靜脈推注 lorazepam 4 mg。",
        "C. 給予神經肌肉阻斷劑推注。",
        "D. 啟動或微調 propofol （或 dexmedetomidine）輸注，滴定目標設定為輕度鎮靜（RASS 0 至 −1）。"
      ],
      "answer": "D",
      "explanation": "病人 重症疼痛觀察工具（Critical-Care Pain Observation Tool, CPOT）為 0 分顯示疼痛已獲完全控制，此時的躁動非疼痛所引起，調高 fentanyl 無益且會造成鴉片類過量蓄積（選項 A 錯誤）。在疼痛已獲控制的前提下，應適度啟動或調升鎮靜劑（首選 propofol 或 dexmedetomidine）以維持輕度鎮靜（RASS 0 至 −1），確保病人安全並避免意外拔管（選項 D 正確）。 lorazepam 易誘發譫妄（選項 B 錯誤）；肌鬆劑絕不可用於單純躁動病人（選項 C 禁忌）。\n\n【教材出處】PDF 第 17 章，Q282。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 17,
        "question": 282,
        "type": "Case",
        "number": 2
      }
    },
    {
      "id": 11,
      "question": "【臨床案例】一名 48 歲男性有肝硬化及肝腎症候群病史，因呼吸窘迫插管收治 加護病房（intensive care unit, ICU）。過去 2 天接受 midazolam 1 mg/h 及 fentanyl 75 mcg/h 輸注；過去 24 小時 Richmond 躁動鎮靜量表（Richmond Agitation-Sedation Scale, RASS）持續為 −4 至 −5 （過度深度鎮靜）， 重症疼痛觀察工具（Critical-Care Pain Observation Tool, CPOT）為 1 分。氧氣需求已顯著下降且生命徵象平穩。\n\n針對其用藥調整，下列哪一項最適當？",
      "options": [
        "A. 調降 midazolam；若出現躁動則視需要給予 lorazepam。",
        "B. 停用 midazolam 與 fentanyl 持續輸注；改為僅在 重症疼痛觀察工具（Critical-Care Pain Observation Tool, CPOT） ≥ 3 分時視需要給予 PRN fentanyl，並促進病人甦醒與早期拔管評估。",
        "C. 停用 midazolam，改為啟動 propofol 靜脈滴注。",
        "D. 將 midazolam 改為 dexmedetomidine 0.7 mcg/kg/h，維持深層鎮靜。"
      ],
      "answer": "B",
      "explanation": "病人有嚴重肝硬化與腎衰竭， midazolam 及其活性代謝物（1-hydroxymidazolam glucuronide）會嚴重蓄積，病人已處於不必要的深度鎮靜（RASS −4~−5），嚴重阻礙自主呼吸與拔管。病人病情已改善，應立即停用持續性鎮靜止痛輸注（進行自發性甦醒試驗 SAT），改為依客觀疼痛指標（CPOT ≥ 3）給予間歇 PRN 止痛，促使病人清醒以利儘早評估脫離呼吸器（選項 B 正確；選項 A、 C、 D 繼續給予不必要之持續鎮靜皆不恰當）。\n\n【教材出處】PDF 第 17 章，Q283。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 17,
        "question": 283,
        "type": "Case",
        "number": 3
      }
    },
    {
      "id": 12,
      "question": "【臨床案例】一名 52 歲女性因感染性休克插管收治 加護病房（intensive care unit, ICU）。病史包含重度憂鬱症與焦慮症，居家長期服用 clonazepam 1 mg 每日三次（three times daily, TID）及 duloxetine 60 mg 每日一次（once daily, QD）。入院第 4 天休克已緩解，停用升壓劑，但病人突發極度躁動、出汗、心搏過速與震顫，無法配合呼吸機。\n\n臨床藥師核對用藥紀錄後發現上述居家藥物入院後皆未開立。此時最佳處置為何？",
      "options": [
        "A. 調高 fentanyl 與 dexmedetomidine 劑量。",
        "B. 向醫療團隊說明此為急性抗焦慮劑（苯二氮平類）與抗憂鬱劑之「中斷戒斷反應」，建議重新開立口服或等效之苯二氮平類與抗憂鬱藥物治療戒斷。",
        "C. 靜脈注射 haloperidol 5 mg。",
        "D. 給予神經肌肉阻斷劑持續輸注。"
      ],
      "answer": "B",
      "explanation": "長期規則服用苯二氮平類（clonazepam）與 SNRI （duloxetine）的病人，突然中斷給藥 3–4 天後，必然引發嚴重的急性藥物戒斷症候群，表現為重度焦慮、自律神經亢進（心搏過速、高血壓、出汗、震顫）與躁動。對此類病人單純使用額外的麻醉止痛藥或抗精神病藥無法解除戒斷病因，且可能掩蓋病情；最根本且正確的治療是重新恢復該類藥物（選項 B 正確；選項 A、 C、 D 錯誤）。\n\n【教材出處】PDF 第 17 章，Q284。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 17,
        "question": 284,
        "type": "Case",
        "number": 4
      }
    },
    {
      "id": 13,
      "question": "【臨床案例】一名 52 歲女性因感染性休克插管收治 加護病房（intensive care unit, ICU）。病史包含重度憂鬱症與焦慮症，居家長期服用 clonazepam 1 mg 每日三次（three times daily, TID）及 duloxetine 60 mg 每日一次（once daily, QD）。入院第 4 天休克已緩解，停用升壓劑，但病人突發極度躁動、出汗、心搏過速與震顫，無法配合呼吸機。 T.L.於 24 小時前成功拔管，目前接受 dexmedetomidine 0.2 mcg/kg/h，過去 24 小時因輕微疼痛接受兩劑 fentanyl 25 mcg。她目前清醒平靜，但間歇有輕微躁動。疼痛評估為陰性，但 加護病房意識混亂評估法（Confusion Assessment Method for the ICU, CAM-ICU）篩檢首度呈現陽性（確診譫妄）。實驗室數值與生命徵象正常。\n\n針對其譫妄的管理，下列哪項處置建議最佳？",
      "options": [
        "A. 持續 dexmedetomidine，並加上 quetiapine 25 mg 口服（oral, PO）每日兩次（twice daily, BID）以治療譫妄。",
        "B. 停用 dexmedetomidine，並大量增加靜脈輸液以防脫水。",
        "C. 以非藥物介入為核心：移除約束帶、協助重新建立人時地定向感（reorientation）、維持正常晝夜光線週期、促進白天活動與下床活動，並評估儘早停用 dexmedetomidine。",
        "D. 立即給予靜脈注射 haloperidol 2.5 mg。"
      ],
      "answer": "C",
      "explanation": "PADIS 指南與 MIND-USA 試驗明確指出，抗精神病藥物（如 quetiapine 或 haloperidol）在無嚴重威脅性躁動的譫妄中無治療效益且可能增加錐體外系副作用與 QTc 延長（選項 A 與 D 錯誤）。對於病情穩定已拔管的輕度譫妄病人，首選處置為全面落實『非藥物集束化策略』：包括頻繁重複人時地定向感確認、白天保持充足光線與互動、夜間維持黑暗安靜以促進睡眠、早期下床活動（early mobility）以及盡可能撤除不必要的精神活性藥物（選項 C 正確；選項 B 盲目大量輸液無指徵）。\n\n【教材出處】PDF 第 17 章，Q285。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 17,
        "question": 285,
        "type": "Case",
        "number": 5
      }
    },
    {
      "id": 14,
      "question": "【臨床案例】在加護病房中推行早期活動（Early Mobility）與復健集束化方案。\n\n下列哪一項敘述最能體現重症早期活動的實證效益？",
      "options": [
        "A. 早期活動僅適用於未插管之清醒病人。",
        "B. 在插管重症病人中，只要血流動力學與呼吸穩定，由跨專業團隊執行早期活動能顯著減少譫妄天數、縮短呼吸器使用時間並改善出院時的日常生活功能獨立性。",
        "C. 早期活動會顯著增加氣管內管滑脫與跌倒的危險，故重症期間應維持絕對臥床。",
        "D. 早期活動對 加護病房（intensive care unit, ICU）獲得性衰弱（ICU-acquired weakness）並無改善作用。"
      ],
      "answer": "B",
      "explanation": "早期活動（Early Mobility）是 ABCDEF 集束化策略中最具強力實證的非藥物介入。大量隨機試驗證實，在具備安全屏障監控下對機械通氣插管病人實施循序漸進的早期復健（床上被動活動 -> 床邊坐起 -> 站立 -> 踏步），能顯著預防並縮短 加護病房（intensive care unit, ICU）獲得性衰弱（ICUAW）與譫妄天數，縮短拔管時間，且嚴重不良事件（如管路滑脫）發生率極低（<1%）（選項 B 正確；選項 A、 C、 D 錯誤）。\n\n【教材出處】PDF 第 17 章，Q286。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 17,
        "question": 286,
        "type": "Case",
        "number": 6
      }
    },
    {
      "id": 15,
      "question": "【臨床案例】一名 55 歲男性因重度 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS） （PaO₂/FiO₂ 比值小於 100 mm Hg）接受氣管插管機械通氣。目前正接受 fentanyl 200 mcg/h、 midazolam 8 mg/h 及 propofol 40 mcg/kg/min 輸注，處於深度鎮靜狀態。然而，經多次微調呼吸器參數後，病人仍持續存在嚴重人機不同步（patient-ventilator dyssynchrony）與重度頑固性低氧血症。\n\n此時醫療團隊最適當的處置考量為何？",
      "options": [
        "A. 加開常規 lorazepam 每 6 小時靜脈注射一次。",
        "B. 加開 quetiapine 50 mg 每 8 小時一次。",
        "C. 將 propofol 轉換為 dexmedetomidine。",
        "D. 在確保深層鎮靜止痛的前提下，啟動神經肌肉阻斷劑（如 cisatracurium）持續輸注早期介入（≤48 小時）。"
      ],
      "answer": "D",
      "explanation": "在重度 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS） （P/F ratio < 150 且特別是 < 100 mm Hg）病人中，當深層鎮靜仍無法消除嚴重人機不同步、嚴重胸壁對抗或氣壓傷風險時， ACURASYS 等里程碑臨床試驗證實：在發病早期（48 小時內）短期使用神經肌肉阻斷劑（cisatracurium 持續輸注），能有效消除呼吸肌作功、降低氣道峰壓、改善換氣灌流配合，從而顯著改善嚴重低氧血症並降低難治型 ARDS 的死亡率（選項 D 正確；選項 A、 B、 C 無法解決肌力對抗與人機不同步問題）。\n\n【教材出處】PDF 第 17 章，Q287。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 17,
        "question": 287,
        "type": "Case",
        "number": 7
      }
    },
    {
      "id": 16,
      "question": "【臨床案例】一名 70 歲女性在 加護病房（intensive care unit, ICU）住院第 2 天，因重症肌無力危象接受插管。目前呼吸狀況穩定，但夜間頻繁清醒且主訴加護病房噪音（警報聲、查房聲）與燈光導致嚴重睡眠剝奪。\n\n針對 加護病房（intensive care unit, ICU）病人的睡眠中斷（Sleep Disruption），下列哪一種處置策略最符合 PADIS 指南推薦？",
      "options": [
        "A. 常規給予高劑量 flurazepam 或 zolpidem 助眠。",
        "B. 夜間持續輸注 propofol 作為助眠劑。",
        "C. 實施多模式非藥物睡眠促進集束化措施（包括夜間降低環境噪音與燈光、集中夜間護理查房以減少打擾、提供耳塞與眼罩），必要時可輔以褪黑激素（melatonin）。",
        "D. 在 加護病房（intensive care unit, ICU）睡眠中斷屬於不可避免之現象，不需做任何調整。"
      ],
      "answer": "C",
      "explanation": "加護病房（intensive care unit, ICU）環境中的持續噪音、高亮度照明與頻繁夜間醫療護理打擾，是破壞正常晝夜節律與睡眠結構的元兇，並直接誘發譫妄。 PADIS 指南強烈反對常規依賴苯二氮平類催眠藥或持續鎮靜劑助眠（會破壞深層睡眠與 REM 睡眠且加劇譫妄）（選項 A 與 B 錯誤）。指引推薦首選『非藥物睡眠管理集束化策略』：降低警報音量、集中醫療處置減少夜間中斷、提供眼罩耳塞、營造日夜分明之明暗環境，並可謹慎搭配生理性褪黑激素（melatonin） （選項 C 正確；選項 D 錯誤）。\n\n【教材出處】PDF 第 17 章，Q288。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 17,
        "question": 288,
        "type": "Case",
        "number": 8
      }
    }
  ],
  "18": [
    {
      "id": 1,
      "question": "【臨床案例】在急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）病人的實證治療策略中，針對俯臥通氣（prone positioning）與順阿曲庫銨（cisatracurium）輸注的臨床效益。\n\n下列哪一個 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）嚴重度分類子族群，從俯臥通氣與 cisatracurium 早期給藥中獲益最為明確且死亡率下降幅度最大？",
      "options": [
        "A. 急性肺損傷（Acute lung injury, ALI）。",
        "B. 中度至重度（Moderate to severe）急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）。",
        "C. 輕度至中度（Mild to moderate）急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）。",
        "D. 輕度（Mild）急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）。"
      ],
      "answer": "B",
      "explanation": "根據柏林 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）定義（Berlin definition），舊有的『急性肺損傷（ALI） 』分類已被移除，轉而依據氧合指數（Pao2/Fio2）將其劃分為輕度、中度與重度。大型標竿試驗（如 PROSEVA 俯臥位試驗與 ACURASYS 神經肌肉阻斷劑試驗）均證實，唯有在『中度至重度』 ARDS （特別是 Pao2/Fio2 < 150 mm Hg）且病程早期的患者中，採取每天至少 16 小時俯臥位通氣及早期輸注 cisatracurium，才能顯著降低死亡率並帶來實質臨床獲益（選項 B 正確；選項 A、 C、 D 錯誤）。輕度或中偏輕度 ARDS 之預期死亡風險較低，其所需治療人數（NNT）過大且易承擔額外併發症風險。\n\n【教材出處】PDF 第 18 章，Q289。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 18,
        "question": 289,
        "type": "SAQ",
        "number": 1
      }
    },
    {
      "id": 2,
      "question": "【臨床案例】多項劃時代的重度呼吸衰竭臨床試驗探討了中重度急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）的藥物與支持性療法。\n\n下列哪一項動脈血氧分壓與吸入氧氣濃度分率比值（Pao2/Fio2）參數，最符合這些里程碑臨床試驗（如 ROSE、 ACURASYS、 DEXA-ARDS 等）納入之中度至重度 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）族群的典型收案條件？",
      "options": [
        "A. 100–200 mm Hg。",
        "B. 大於 150 mm Hg。",
        "C. 小於 150 mm Hg。",
        "D. 50–150 mm Hg。"
      ],
      "answer": "C",
      "explanation": "雖然柏林定義將中度 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）界定為 Pao2/Fio2 在 100–200 mm Hg，重度為 <100 mm Hg；但在現代諸多大型重症 ARDS 指南與里程碑臨床試驗（包含 ROSE、 ACURASYS、 PROSEVA、 DEXA-ARDS 等）中，界定中度至重度高危險亞族群以進行介入性治療（如神經肌肉阻斷劑、俯臥通氣、高劑量類固醇）時，最普遍採用的納入標準均為 Pao2/Fio2 < 150 mm Hg，且試驗中並未設立 50 mm Hg 的下限截斷值（選項 C 正確；選項 A、 B、 D 錯誤）。\n\n【教材出處】PDF 第 18 章，Q290。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 18,
        "question": 290,
        "type": "SAQ",
        "number": 2
      }
    },
    {
      "id": 3,
      "question": "【臨床案例】在侵入性機械通氣（invasive mechanical ventilation）治療急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）的肺保護性通氣策略中。\n\n下列哪一項參數最精確地描述了 ARDSNet 指南所規範之『低潮氣容積（low tidal volumes） 』計算標準？",
      "options": [
        "A. 總體重（total body weight） 6 mL/kg。",
        "B. 理想體重／預測體重（ideal/predicted body weight, IBW/PBW） 4–8 mL/kg （初始常用 4–6 mL/kg）。",
        "C. 總體重（total body weight） 7 mL/kg。",
        "D. 校正體重（adjusted body weight） 5 mL/kg。"
      ],
      "answer": "B",
      "explanation": "劃時代的 ARDSNet 試驗確立了肺保護性通氣策略的黃金標準：潮氣容積必須嚴格依據 『理想體重（IBW）或預測體重（PBW） 』設定為 4–8 mL/kg （目標常自 6 mL/kg 逐步滴定，以維持吸氣高原壓 plateau pressure ≤30 cm H2O）（選項 B 正確）。成人的肺臟容積取決於身高與性別，與肥胖累積之脂肪組織無關；若以總體重（TBW）計算，在肥胖病人身上會造成嚴重的通氣過度容積傷害（volutrauma）與氣壓傷（barotrauma） （選項 A、 C、 D 錯誤）。\n\n【教材出處】PDF 第 18 章，Q291。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 18,
        "question": 291,
        "type": "SAQ",
        "number": 3
      }
    },
    {
      "id": 4,
      "question": "【臨床案例】一名 65 歲男性因嚴重呼吸急促、呼吸急促、意識改變及大汗淋漓送至急診。胸部 X 光顯示瀰漫性雙側浸潤斑塊。生命徵象：血壓 94/54 mm Hg、呼吸 26 次 / 分、心率 120 次 / 分、體溫 41.0°C （105.8°F）。家屬表示症狀始於 2 天前，近 24 小時急遽惡化。病人轉入 加護病房（intensive care unit, ICU）並接受氣管插管。動脈血氣分析（arterial blood gas, ABG）顯示： pH 7.30、 Paco2 50 mm Hg、 Pao2 50 mm Hg、 Sao2 85% （在 Fio2 100% 下， Pao2/Fio2 = 50 mm Hg）。\n\n在病患轉入 加護病房（intensive care unit, ICU）後的最初 24 小時內，下列何者為最佳之綜合治療處置計畫？",
      "options": [
        "A. 經驗性抗生素治療、靜脈輸液復甦合併升壓劑抗休克；低潮氣容積（4–8 mL/kg）通氣策略；深部鎮靜以達 Richmond 躁動鎮靜量表（Richmond Agitation-Sedation Scale, RASS） −4；以及俯臥通氣。",
        "B. 經驗性抗生素治療、靜脈輸液復甦合併升壓劑抗休克；低潮氣容積（4–8 mL/kg）通氣策略；深部鎮靜以達 Richmond 躁動鎮靜量表（Richmond Agitation-Sedation Scale, RASS） −5 並給予 cisatracurium 輸注以限制高原壓；以及俯臥通氣（prone positioning）。",
        "C. 經驗性抗生素治療、積極利尿（目標 CVP < 4 mm Hg）合併升壓劑抗休克；低潮氣容積通氣策略；深部鎮靜及俯臥通氣。",
        "D. 經驗性抗生素治療、靜脈輸液復甦合併升壓劑抗休克；低潮氣容積通氣策略；深部鎮靜及仰臥位通氣（supine positioning）。"
      ],
      "answer": "B",
      "explanation": "該名病人同時合併敗血性休克及超急性重度 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS） （病程 <48 小時且 Pao2/Fio2 為 50 mm Hg）。由於病人仍處於休克活動期，必須先進行充分液體復甦與升壓劑支持，此時絕不可實施保守型積極利尿（選項 C 錯誤）。對於發病 <48 小時且 Pao2/Fio2 < 150 mm Hg 之重度 ARDS，實證強烈支持合併採取三大肺保護措施： （1）低潮氣容積通氣（4–8 mL/kg PBW）； （2）每天至少 16 小時之俯臥位通氣（prone positioning）； （3）深度鎮靜（RASS −5）下連續輸注 cisatracurium 48 小時以消除人機對抗並降低高原壓（選項 B 正確；選項 A 未使用 NMBA、選項 D 採仰臥位，均無法提供最佳生存獲益）。\n\n【教材出處】PDF 第 18 章，Q292。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 18,
        "question": 292,
        "type": "SAQ",
        "number": 4
      }
    },
    {
      "id": 5,
      "question": "【臨床案例】P.D. 是一名 67 歲女性（身高 160 cm，體重 68 kg），因 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）肺炎住進 加護病房（intensive care unit, ICU）。呼吸器參數：潮氣容積 280 mL、呼吸速率 20 次 / 分、 呼氣末正壓（positive end-expiratory pressure, PEEP） 12 cm H2O、 Fio2 80%，高原壓為 22 cm H2O。 平均動脈壓（mean arterial pressure, MAP）為 68 mm Hg，norepinephrine 輸注已於 4 小時前成功停止拔除；近 2 小時 中央靜脈壓（central venous pressure, CVP）介於 8–14 cm H2O。過去 24 小時總尿量為 1150 mL， 血清肌酸酐（serum creatinine, SCr） 1.2 mg/dL。 ICU 團隊正討論依據 FACTT Lite 方案進行水分管理。\n\n依據 FACTT Lite 臨床指引架構，下列哪一項輸液管理處置最為恰當？",
      "options": [
        "A. 立即單次給予 furosemide 40 mg 靜脈給藥（intravenous, IV），並於 4 小時後重新評估。",
        "B. 給予 furosemide 1 mg/h 持續輸注，並於 8 小時後重新評估。",
        "C. 給予 0.9% sodium chloride 溶液 500 mL 於 1 小時內輸注，並於 4 小時後重新評估。",
        "D. 僅持續密切監測血行動力學與尿量，並於 8 小時後重新評估（暫不額外利尿或大量給水）。"
      ],
      "answer": "D",
      "explanation": "FACTT Lite 方案旨在簡化 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）病人之水分保守治療流程。該協議規定：欲進入水分限制／利尿去水階段，病人必須達到『在無任何血管活性藥物（vasoactive agents）支持下，維持 平均動脈壓（mean arterial pressure, MAP） ≥ 60 mm Hg 至少連續 12 小時』之血行動力學穩定標準。本案病人的 norepinephrine 僅停用 4 小時，尚未滿足 12 小時的穩定穩固期，貿然利尿極易誘發低血壓與休克復發（選項 A 錯誤）。選項 B 的利尿速度與 8 小時評估間隔亦不符合協議規範（評估週期應為 1 或 4 小時）。病人的 MAP、 中央靜脈壓（central venous pressure, CVP）與尿量均無低血容量徵象，給予晶體液亦無必要（選項 C 錯誤）。因此，最佳決策為持續監控，待停用升壓劑滿 12 小時且血壓持續穩定後再啟動利尿處置（選項 D 正確）。\n\n【教材出處】PDF 第 18 章，Q293。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 18,
        "question": 293,
        "type": "SAQ",
        "number": 5
      }
    },
    {
      "id": 6,
      "question": "【臨床案例】在評估全身性皮質類固醇（corticosteroids）於急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）的實證文獻時。\n\n下列哪一項敘述最準確地反映了已發表的 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）類固醇臨床試驗之關鍵結論？",
      "options": [
        "A. dexamethasone 在全面接受肺保護性通氣策略的 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）病人中證實能顯著改善臨床預後與死亡率。",
        "B. 在 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）發病超過 7 天後才啟用 dexamethasone 與臨床預後惡化明確相關。",
        "C. methylprednisolone 在全面接受現代肺保護通氣策略的 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）病人中證實具有優異臨床獲益。",
        "D. 在 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）發病超過 7 天後啟用 methylprednisolone 均一致證實會增加長期死亡率。"
      ],
      "answer": "A",
      "explanation": "DEXA-ARDS 試驗是目前唯一在『所有受試病患均嚴格執行現代肺保護性低潮氣容積通氣』標準下開展的當代大型隨機對照試驗，證實早期給予 dexamethasone （20 mg/d 連續 5 天，隨後 10 mg/d 連續 5 天）能顯著增加無呼吸器天數並降低 60 天全因死亡率（選項 A 正確）。過去多數評估 methylprednisolone 的歷史試驗（如 Meduri 等）進行時尚未將現代肺保護通氣列為常規（選項 C 錯誤）。 DEXA-ARDS 聚焦於發病早期（選項 B 敘述不符）。雖然早期 LaSRS 試驗之未校正次族群分析提示發病 >14 天給予類固醇可能增加死亡率，但後續多變量校正與統合分析並未一致證實晚期（>5–7 天）給藥會直接惡化預後（選項 D 錯誤）。\n\n【教材出處】PDF 第 18 章，Q294。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 18,
        "question": 294,
        "type": "SAQ",
        "number": 6
      }
    },
    {
      "id": 7,
      "question": "【臨床案例】一名 34 歲女性因急性呼吸衰竭需進行快速順序插管（Rapid Sequence Intubation, RSI），無其他重大慢性病史與藥物過敏史。\n\n在實施 RSI 之給藥流程中，下列哪一種藥物給藥順序最為正確且符合急重症插管準則？",
      "options": [
        "A. rocuronium 靜脈推注 → etomidate 靜脈推注 → midazolam 靜脈推注。",
        "B. fentanyl 靜脈推注 → succinylcholine 靜脈推注 → propofol 靜脈推注。",
        "C. atropine 靜脈推注 → rocuronium 靜脈推注 → etomidate 靜脈推注。",
        "D. fentanyl 預先給藥（pretreatment） → etomidate 誘導麻醉（induction） → succinylcholine 神經肌肉阻斷（paralysis）。"
      ],
      "answer": "D",
      "explanation": "RSI 的核心安全準則為『先誘導催眠／鎮靜，後神經肌肉麻痺』，絕不可在病人未失去意識前給予肌肉鬆弛劑，否則會造成極端恐怖的清醒癱瘓體驗（選項 A、 B 錯誤）。標準 RSI 步驟為： （1）前置準備與預給氧； （2）前期預防性給藥（如 fentanyl 鈍化交感反射）； （3）快速誘導麻醉劑（如 etomidate 0.3 mg/kg 或 ketamine）； （4）緊接著立即給予快速起效肌鬆劑（如 succinylcholine 1.5 mg/kg 或 rocuronium 1.2 mg/kg）（選項 D 正確）。 atropine 僅在小兒或高度心搏過緩危險之特定成人中考慮備用，常規成人 RSI 不推薦預先常規注射（選項 C 錯誤）。\n\n【教材出處】PDF 第 18 章，Q295。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 18,
        "question": 295,
        "type": "SAQ",
        "number": 7
      }
    },
    {
      "id": 8,
      "question": "【臨床案例】一名 78 歲男性（體重 70 kg）因急性呼吸衰竭接受氣管插管轉入 加護病房（intensive care unit, ICU）。呼吸機初始設定： AC/VC 模式、潮氣容積 700 mL （10 mL/kg）、呼吸速率 20 次 / 分、 Fio2 50%、 呼氣末正壓（positive end-expiratory pressure, PEEP） 5 cm H2O、 PS 10 cm H2O。首套 動脈血液氣體分析（arterial blood gas, ABG）數值： pH 7.25、 Paco2 65 mm Hg、 HCO3 26 mEq/L、 Pao2 57 mm Hg、 Sao2 90% （Pao2/Fio2 = 114 mm Hg）。 平均動脈壓（mean arterial pressure, MAP）為 72 mm Hg，無須升壓劑支持； 血清肌酸酐（serum creatinine, SCr） 1.2 mg/dL，過去 6 小時尿量 350 mL。\n\n針對該病人之呼吸機重設與全身性處置方針，下列哪一項策略為最佳起始處置？",
      "options": [
        "A. 高潮氣容積機械通氣合併保守型水分管理。",
        "B. 低潮氣容積（Low tidal volume）機械通氣合併保守型水分管理（conservative fluid management）。",
        "C. 高潮氣容積機械通氣合併寬鬆型水分管理。",
        "D. 低潮氣容積機械通氣合併寬鬆型水分管理。"
      ],
      "answer": "B",
      "explanation": "病人的 Pao2/Fio2 為 114 mm Hg，符合中度至重度 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）診斷標準。目前通氣設定高達 10 mL/kg，極易導致呼吸器誘發肺損傷（VILI），首要任務是立即下調至低潮氣容積肺保護通氣（4–8 mL/kg 預測體重，目標 6 mL/kg 約 400–420 mL）（選項 A、 C 錯誤）。此外，病人血行動力學穩定（MAP 72 mm Hg 且無需升壓劑、尿量充足），根據 ARDSNet FACTT 試驗，在血行動力學無休克狀態下，採取保守型水分管理（限制水分或適度利尿）能顯著縮短呼吸機使用天數與加護病房住院期，而寬鬆型輸液僅適用於活動性未糾正休克病人（選項 B 正確；選項 D 錯誤）。\n\n【教材出處】PDF 第 18 章，Q296。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 18,
        "question": 296,
        "type": "SAQ",
        "number": 8
      }
    },
    {
      "id": 9,
      "question": "【臨床案例】一名 56 歲男性因過去 24 小時呼吸困難急遽惡化，診斷為 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）入住 加護病房（intensive care unit, ICU）。病史有高血壓與慢性酗酒。初次 動脈血液氣體分析（arterial blood gas, ABG）： pH 7.24、 Paco2 58 mm Hg、 HCO3 24 mEq/L、 Pao2 50 mm Hg、 Sao2 84% （AC 模式， Fio2 100%）。胸部 X 光顯示瀰漫性雙側浸潤。經過初期的靜脈輸液復甦後，血壓為 120/40 mm Hg （MAP 67 mm Hg），心率 142 次 / 分， 中央靜脈壓（central venous pressure, CVP） 8 mm Hg；原先輸注的 norepinephrine （10 mcg/min）目前已成功完全下調停用， 平均動脈壓（mean arterial pressure, MAP）仍穩定維持在 67 mm Hg。已針對社區型肺炎啟動 ceftriaxone 與 levofloxacin。\n\n針對該病人的 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）呼吸與重症治療，下列何者為最佳之整合性醫療處置？",
      "options": [
        "A. 繼續積極輸液復甦以維持 中央靜脈壓（central venous pressure, CVP） 10–14 mm Hg；低潮氣容積（4–8 mL/kg IBW）策略；俯臥通氣；深度鎮靜並輸注 cisatracurium。",
        "B. 啟動利尿以達到 中央靜脈壓（central venous pressure, CVP） < 4 mm Hg；低潮氣容積策略；仰臥通氣；深度鎮靜並輸注 cisatracurium。",
        "C. 啟動利尿以達到 中央靜脈壓（central venous pressure, CVP） < 4 mm Hg；低潮氣容積策略；仰臥通氣；深度鎮靜。",
        "D. 終止輸液復甦，在維持 平均動脈壓（mean arterial pressure, MAP） > 65 mm Hg 下啟動利尿（目標 CVP < 4 mm Hg）；低潮氣容積（4–8 mL/kg IBW）；俯臥通氣（prone positioning）；以及深度鎮靜合併 cisatracurium 輸注。"
      ],
      "answer": "D",
      "explanation": "該病人具備超急性（<48 小時）且極嚴重之 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS） （Pao2/Fio2 = 50 mm Hg < 150 mm Hg），且目前升壓劑已成功斷藥並維持 平均動脈壓（mean arterial pressure, MAP） 67 mm Hg，血行動力學已達穩定標準。依據 ARDSNet FACTT 試驗與重症指引： （1）應停止繼續擴容，轉為水分保守策略（利尿目標 CVP < 4 mm Hg）（選項 A 錯誤）； （2）嚴重氧合低下（<150 mm Hg）且早期發病者，強烈建議每日至少 16 小時俯臥通氣（仰臥位無法獲益，選項 B、 C 錯誤）； （3）應給予深度鎮靜配合早期神經肌肉阻斷劑（cisatracurium）持續輸注 48 小時以改善人機同步並降低肺損傷。綜合上述，選項 D 為最適切處置。\n\n【教材出處】PDF 第 18 章，Q297。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 18,
        "question": 297,
        "type": "Case",
        "number": 1
      }
    },
    {
      "id": 10,
      "question": "【臨床案例】一名 70 歲女性（身高 63 吋，體重 65 kg）因缺氧性呼吸衰竭在外院收治，在外院已接受 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）治療達 3 天，隨後應家屬要求轉送至您的 加護病房（intensive care unit, ICU）。入院時病人正接受機械通氣，設定如下： SIMV 模式、潮氣容積 600 mL （12 mL/kg）、呼吸速率 12 次 / 分、 PS 10 cm H2O、 呼氣末正壓（positive end-expiratory pressure, PEEP） 10 cm H2O。\n\n針對該病人的 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）呼吸器設定調整，下列哪一項處置最為恰當？",
      "options": [
        "A. 調整為 AC/VC 模式，潮氣容積 300 mL （約 6 mL/kg IBW），呼吸速率 20 次 / 分， PS 10 cm H2O， 呼氣末正壓（positive end-expiratory pressure, PEEP） 5 cm H2O；採常規仰臥位（supine positioning）。",
        "B. 調整為 AC/VC 模式，潮氣容積 300 mL，呼吸速率 20 次 / 分， PS 10 cm H2O， 呼氣末正壓（positive end-expiratory pressure, PEEP） 5 cm H2O；採俯臥通氣；並給予 cisatracurium 輸注。",
        "C. 維持 SIMV 模式，潮氣容積 300 mL，呼吸速率 20 次 / 分， PS 10 cm H2O， 呼氣末正壓（positive end-expiratory pressure, PEEP） 5 cm H2O；仰臥通氣；給予 cisatracurium 輸注。",
        "D. 調整為 AC/VC 模式，潮氣容積 300 mL，呼吸速率 20 次 / 分， PS 10 cm H2O， 呼氣末正壓（positive end-expiratory pressure, PEEP） 5 cm H2O；採俯臥通氣。"
      ],
      "answer": "A",
      "explanation": "關鍵在於病人轉入時 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）發病已超過 3 天（72 小時）。 PROSEVA （俯臥位試驗）與 ACURASYS （cisatracurium 試驗）明確限定實證獲益對象僅限於『發病 48 小時內』的超急性嚴重 ARDS，超過 48 小時後常規啟動俯臥位或肌鬆劑輸注並無實證生存優勢（選項 B、 C、 D 錯誤）。目前首要且最關鍵的介入為糾正不當的通氣模式與危險的高潮氣容積（12 mL/kg），切換為 AC/VC 輔助控制模式，並將潮氣容積嚴格設定為 6 mL/kg IBW （女性 63 吋 IBW 約 52 kg， 300 mL 約 5.8 mL/kg），採常規仰臥位支持（選項 A 正確）。\n\n【教材出處】PDF 第 18 章，Q298。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 18,
        "question": 298,
        "type": "Case",
        "number": 2
      }
    },
    {
      "id": 11,
      "question": "【臨床案例】一名 63 歲女性（身高 165 cm，體重 64 kg， IBW 57 kg）具糖尿病與慢性腎臟病史， 2 天前因急性 COVID- 19 肺炎收治普通病房並接受鼻導管氧氣治療，起始口服 dexamethasone 6 mg 每日一次（once daily, QD）。今日因氧合急遽惡化並符合重度 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）標準而緊急氣管插管轉入 加護病房（intensive care unit, ICU）。立即啟動肺保護通氣：潮氣容積 340 mL （6 mL/kg）、呼吸速率 22 次 / 分、 呼氣末正壓（positive end-expiratory pressure, PEEP） 12 cm H2O、 Fio2 100%。 動脈血液氣體分析（arterial blood gas, ABG）顯示： pH 7.28、 Paco2 46 mm Hg、 Pao2 60 mm Hg、 HCO3 24 mEq/L、 Sao2 92% （Pao2/Fio2 = 60 mm Hg）。\n\n針對該病人當前的全身性皮質類固醇（corticosteroid）治療計畫，下列哪一項建議最為恰當？",
      "options": [
        "A. 全面停止 dexamethasone 治療。",
        "B. 將口服 dexamethasone 6 mg 改為靜脈注射 methylprednisolone 40 mg Q6H。",
        "C. 將口服 dexamethasone 6 mg 每日一次（once daily, QD）改為靜脈注射 dexamethasone 6 mg QD。",
        "D. 將口服 dexamethasone 6 mg 每日一次（once daily, QD）大幅升量為靜脈注射 dexamethasone 20 mg QD。"
      ],
      "answer": "C",
      "explanation": "RECOVERY 試驗確立了在需要氧氣或侵入性通氣的 COVID-19 重症患者中，給予 dexamethasone 6 mg 每日一次（once daily, QD） （療程至多 10 天）可顯著降低 28 天死亡率；插管後因無法口服，最適切做法是無縫轉換為同等劑量的『靜脈注射 dexamethasone 6 mg QD 』（選項 C 正確；停用類固醇會惡化死亡率，選項 A 錯誤）。 methylprednisolone 在大型試驗中對 COVID-19 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）的實證級別不如 dexamethasone （選項 B 錯誤）。雖然 DEXA-ARDS 試驗在非 COVID-19 之一般重度 ARDS 中使用了 20 mg/d 劑量，但在 COVID-19 相關 ARDS 及後續統合分析中，高劑量 dexamethasone （20 mg）相較於標準劑量（6 mg）並無額外臨床獲益，反而增加二次感染風險（選項 D 錯誤）。\n\n【教材出處】PDF 第 18 章，Q299。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 18,
        "question": 299,
        "type": "Case",
        "number": 3
      }
    },
    {
      "id": 12,
      "question": "【臨床案例】K.J. 是一名 56 歲男性（身高 72 吋，體重 120 kg， IBW 約 79 kg），因敗血性休克需升壓劑支持合併重度 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）肺炎收治 加護病房（intensive care unit, ICU）。肺保護通氣設定：潮氣容積 600 mL （換算 IBW 約 7.6 mL/kg）、呼吸速率 24 次 / 分、 呼氣末正壓（positive end-expiratory pressure, PEEP） 14 cm H2O、 Fio2 100%，高原壓為 24 cm H2O。 動脈血液氣體分析（arterial blood gas, ABG）顯示： pH 7.28、 Paco2 46 mm Hg、 Pao2 62 mm Hg、 HCO3 24 mEq/L （Pao2/Fio2 = 62 mm Hg）。\n\n在已優化常規呼吸機支持但嚴重缺氧持續存在時，下列哪一項治療策略最適合進一步評估以改善該病人之預後與氧合？",
      "options": [
        "A. 吸入性一氧化氮（Inhaled nitric oxide, iNO）。",
        "B. 體外膜氧合（Extracorporeal membrane oxygenation, ECMO）。",
        "C. 吸入性依前列醇（Inhaled epoprostenol, iEPO）。",
        "D. 連續輸注順阿曲庫銨（cisatracurium）。"
      ],
      "answer": "B",
      "explanation": "吸入性肺血管擴張劑（如 iNO 或 iEPO）僅能暫時性輕度改善氧合指標，各大型隨機對照試驗與 Cochrane 審查均證實其無法改善 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）病人的生存率或減少機械通氣天數，僅被定位為挽救性過渡手段（選項 A、 C 錯誤）。該病人在高 呼氣末正壓（positive end-expiratory pressure, PEEP）下高原壓僅 24 cm H2O （遠低於 30 cm H2O 上限），且 ROSE 試驗顯示在無嚴重人機對抗或高原壓超標時常規使用 cisatracurium 並無額外生存獲益（選項 D 錯誤）。依據 EOLIA 試驗標準，重度難治型 ARDS （Pao2/Fio2 < 80 mm Hg 超過 6 小時）評估啟動靜脈 - 靜脈體外膜氧合（VV-ECMO）具有潛在的死亡率降低優勢，為目前最適當的進階評估策略（選項 B 正確）。\n\n【教材出處】PDF 第 18 章，Q300。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 18,
        "question": 300,
        "type": "Case",
        "number": 4
      }
    },
    {
      "id": 13,
      "question": "【臨床案例】D.J. 是一名 49 歲男性，因敗血性休克需血管活性藥物支持合併 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）接受機械通氣，參數如下：潮氣容積 400 mL、呼吸速率 26 次 / 分、 呼氣末正壓（positive end-expiratory pressure, PEEP） 20 cm H2O、 Fio2 100%，導致高原壓（plateau pressure）高達 40 cm H2O。機械通氣啟動後的 動脈血液氣體分析（arterial blood gas, ABG）顯示： pH 7.45、 Paco2 34 mm Hg、 Pao2 110 mm Hg、 HCO3 24 mmol/L、 Sao2 88%。\n\n考量病人當前高原壓嚴重超標且處於休克狀態，下列哪一項治療處置組合此時最為恰當？",
      "options": [
        "A. cisatracurium、 furosemide 利尿、以及俯臥通氣。",
        "B. cisatracurium、 furosemide 利尿、以及 體外膜氧合（extracorporeal membrane oxygenation, ECMO）。",
        "C. 俯臥通氣（Prone positioning）、 dexamethasone 全身性類固醇、以及 cisatracurium 輸注。",
        "D. 俯臥通氣、 dexamethasone、以及 體外膜氧合（extracorporeal membrane oxygenation, ECMO）。"
      ],
      "answer": "C",
      "explanation": "病人的高原壓高達 40 cm H2O，遠超過 30 cm H2O 的安全警戒閾值，氣壓傷風險極高；此時給予神經肌肉阻斷劑（cisatracurium）可立即消除胸壁肌張力與呼吸做功，迅速降低高原壓並改善人機同步，同時俯臥位通氣可促進背側肺泡再擴張並均勻胸腔跨肺壓（選項 C 正確）。病人的 Pao2 在常規通氣下可達 110 mm Hg，未達嚴重頑固缺氧標準，尚無立即施行 體外膜氧合（extracorporeal membrane oxygenation, ECMO）的強烈指徵（選項 B、 D 錯誤）。此外，病人目前仍在接受升壓藥物治療敗血性休克，血行動力學尚未脫離危險期，嚴禁在此時貿然使用 furosemide 積極利尿（選項 A、 B 錯誤）。\n\n【教材出處】PDF 第 18 章，Q301。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 18,
        "question": 301,
        "type": "Case",
        "number": 5
      }
    },
    {
      "id": 14,
      "question": "【臨床案例】一名 55 歲男性（體重 75 kg）因火災導致腹部、背部及下肢遭受 65% 總體表面積（TBSA）嚴重燒傷，入住燒傷加護病房。病人目前昏迷無法自主保護呼吸道。既往有高血壓病史。目前正接受高劑量 norepinephrine 與 vasopressin 輸注以維持 平均動脈壓（mean arterial pressure, MAP） 65 mm Hg。實驗室檢驗： Na 130 mEq/L、 K 5.9 mEq/L、 Cl 122 mEq/L、 CO2 15 mg/dL、 血中尿素氮（blood urea nitrogen, BUN） 10 mg/dL、 血清肌酸酐（serum creatinine, SCr） 1.3 mg/dL。團隊決定立即實施 RSI 插管。\n\n針對該嚴重燒傷且血鉀過高、血行動力學不穩定的病人，下列哪一組 RSI 藥物組合最為安全且適當？",
      "options": [
        "A. fentanyl、 propofol、以及 rocuronium。",
        "B. fentanyl、 ketamine、以及 succinylcholine。",
        "C. fentanyl、 etomidate、以及 rocuronium。",
        "D. fentanyl、 propofol、以及 succinylcholine。"
      ],
      "answer": "C",
      "explanation": "該名病患有兩大極具致死風險的用藥禁忌： （1）病人已呈現顯著高血鉀（K 5.9 mEq/L）且合併大面積嚴重燒傷。去極化肌鬆劑 succinylcholine 作用時會引發運動終板去極化，導致細胞內鉀離子大量釋放（血鉀瞬間飆升 0.5–1.0 mEq/L 甚至更高），在燒傷或既有高血鉀病人身上極易引發惡性心律不整甚至心跳停止，為絕對禁忌，必須改用非去極化肌鬆劑 rocuronium （排除選項 B、 D）。 （2）病人處於重度休克正依賴兩種高劑量升壓藥物； propofol 具強烈的直接心肌抑制與周邊血管擴張作用，會誘發嚴重的致死性低血壓（排除選項 A）。 etomidate 具有卓越的心血管穩定度，對血壓與心肌收縮力影響極小；搭配提供鎮痛的 fentanyl 與不影響血鉀的 rocuronium，為最完美安全的 RSI 處置方案（選項 C 正確）。\n\n【教材出處】PDF 第 18 章，Q302。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 18,
        "question": 302,
        "type": "Case",
        "number": 6
      }
    },
    {
      "id": 15,
      "question": "【臨床案例】一名 39 歲無家可歸男性（體重 70 kg）在酒精中毒狀態下由 3 英尺高的梯子跌落，因創傷性腦損傷（traumatic brain injury, TBI）收治神經重症加護病房。影像學檢查證實硬腦膜下血腫（subdural hematoma）。醫療團隊決定進行氣管插管以保護氣道與控制腦灌流。實驗室數值： Na 133 mEq/L、 K 4.5 mEq/L、 Cl 97 mEq/L、 CO2 28 mg/dL、 血中尿素氮（blood urea nitrogen, BUN） 13 mg/dL、 血清肌酸酐（serum creatinine, SCr） 0.7 mg/dL、葡萄糖 140 mg/dL。\n\n針對該顱內出血可能伴隨顱內壓升高（elevated ICP）的創傷病人，下列哪一種 RSI 誘導麻醉劑與劑量組合最為適當？",
      "options": [
        "A. propofol 90 mg 靜脈推注。",
        "B. ketamine 100 mg （約 1.5 mg/kg）靜脈推注。",
        "C. midazolam 15 mg 靜脈推注。",
        "D. etomidate 150 mg 靜脈推注。"
      ],
      "answer": "B",
      "explanation": "現代神經創傷重症研究已徹底顛覆早期『 ketamine 禁用於顱內高壓』的歷史迷思；現代實證證實， ketamine （標準誘導劑量 1.5–2 mg/kg， 70 kg 約 100 mg）不僅能維持乃至提升平均動脈壓（mean arterial pressure, MAP），進而保障至關重要的腦灌注壓（CPP = MAP − ICP），並能鈍化氣管插管引起的交感與顱內壓劇烈波動，具有神經保護效果（選項 B 正確）。 propofol 雖可降低腦代謝率，但極易引發顯著全身低血壓，導致腦灌注壓急劇驟降造成二次腦缺血損傷（選項 A 錯誤）。 midazolam 用於 RSI 起效過慢（需數分鐘），極不適合作為急診快速誘導（選項 C 錯誤）。 etomidate 標準誘導劑量為 0.3 mg/kg （70 kg 約 20 mg），選項 D 所列之 150 mg 嚴重超量高達 7 倍，存在嚴重毒性風險（選項 D 錯誤）。\n\n【教材出處】PDF 第 18 章，Q303。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 18,
        "question": 303,
        "type": "Case",
        "number": 7
      }
    },
    {
      "id": 16,
      "question": "【臨床案例】一名 74 歲女性（身高 63 吋，體重 65 kg， IBW 52 kg）因缺氧性呼吸衰竭在外院收治，在外院已接受 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）治療 3 天後轉入您的 加護病房（intensive care unit, ICU）。抵達時呼吸機設定如下： SIMV 模式、潮氣容積 600 mL （12 mL/kg）、呼吸速率 12 次 / 分、 PS 10 cm H2O、 呼氣末正壓（positive end-expiratory pressure, PEEP） 10 cm H2O。\n\n針對該病人的 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）呼吸器通氣處置計畫，下列哪一項模式與參數調整最為符合指引推薦？",
      "options": [
        "A. AC/VC 模式，潮氣容積 300 mL （約 6 mL/kg IBW），呼吸速率 20 次 / 分， PS 10 cm H2O， 呼氣末正壓（positive end-expiratory pressure, PEEP） 5 cm H2O。",
        "B. SIMV 模式，潮氣容積 300 mL （6 mL/kg），呼吸速率 20 次 / 分， PS 10 cm H2O， 呼氣末正壓（positive end-expiratory pressure, PEEP） 5 cm H2O。",
        "C. PS 模式， PS 10 cm H2O， 呼氣末正壓（positive end-expiratory pressure, PEEP） 5 cm H2O。",
        "D. SIMV 模式，潮氣容積 300 mL （6 mL/kg），呼吸速率 10 次 / 分， PS 10 cm H2O， 呼氣末正壓（positive end-expiratory pressure, PEEP） 5 cm H2O。"
      ],
      "answer": "A",
      "explanation": "在 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS）病人中實施肺保護性通氣策略時，首要目標是將潮氣容積嚴格限制在 4–8 mL/kg 預測體重（女性 63 吋 IBW 約 52 kg，目標 6 mL/kg 為 310 mL 左右）。在通氣模式的選擇上，輔助控制 / 容積控制（AC/VC）模式為 ARDSNet 等標竿研究所廣泛採用的標準模式，因為它能精確確保每一次呼吸均不超過設定的保護性潮氣容積；反之，若使用壓力支持（PS）模式或同步間歇強制通氣（SIMV）模式，病人的自主呼吸會輕易誘發超過目標容積的深大呼吸，導致容積傷與人機不同步（選項 B、 C、 D 錯誤；選項 A 正確）。\n\n【教材出處】PDF 第 18 章，Q304。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 18,
        "question": 304,
        "type": "Case",
        "number": 8
      }
    }
  ],
  "19": [
    {
      "id": 1,
      "question": "【臨床案例】一名 21 歲女性（身高 62 吋，體重 50 kg）具囊腫性纖維化（Cystic Fibrosis, CF）慢性病史，因急性呼吸衰竭接受氣管插管機械通氣收治 加護病房（intensive care unit, ICU）。插管後初次 動脈血液氣體分析（arterial blood gas, ABG）顯示： pH 7.27、 Paco2 55 mm Hg、 Pao2 35 mm Hg、 HCO3 22 mEq/L、 Sao2 88% （在 Fio2 60% 下， Pao2/Fio2 約 58 mm Hg）。呼吸機設定： AC/VC 模式、潮氣容積 400 mL、呼吸速率 20 次 / 分、 呼氣末正壓（positive end-expiratory pressure, PEEP） 5 cm H2O、 PS 5 cm H2O。血壓 110/70 mm Hg，心率 95 次 / 分。\n\n考量該病患同時合併囊腫性纖維化急性惡化與嚴重 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS），下列何者為最佳之整合性全人治療計畫？",
      "options": [
        "A. 啟動 cefepime 2 g 靜脈給藥（intravenous, IV） Q8H 及 tobramycin 150 mg 靜脈給藥（intravenous, IV） Q8H；靜脈輸液復甦以維持 中央靜脈壓（central venous pressure, CVP）目標 10–13 mm Hg；吸入 dornase alfa 與 7% 高張 sodium chloride 溶液霧化吸入。",
        "B. 啟動 cefepime 2 g 靜脈給藥（intravenous, IV） Q8H 及 tobramycin 500 mg 靜脈給藥（intravenous, IV） Q8H；靜脈輸液復甦以維持 中央靜脈壓（central venous pressure, CVP）目標 10–13 mm Hg；吸入 dornase alfa 與 7% 高張 sodium chloride 溶液霧化吸入。",
        "C. 啟動 cefepime 2 g 靜脈給藥（intravenous, IV） Q8H 及 tobramycin 150 mg 靜脈給藥（intravenous, IV） Q8H；靜脈輸液復甦以維持 中央靜脈壓（central venous pressure, CVP） 10–13 mm Hg。",
        "D. 啟動 cefepime 2 g 靜脈給藥（intravenous, IV） Q8H 及 tobramycin 500 mg （約 10 mg/kg）靜脈給藥（intravenous, IV） Q24H （每日一次高劑量給藥）；在維持 平均動脈壓（mean arterial pressure, MAP） > 65 mm Hg 前提下採取利尿去水維持 中央靜脈壓（central venous pressure, CVP） < 4 mm Hg；並常規給予 dornase alfa 與 7% 高張 sodium chloride 溶液霧化治療。"
      ],
      "answer": "D",
      "explanation": "該病人具備雙重重症挑戰： （1）囊性纖維化（cystic fibrosis, CF）急性肺部惡化：主要致病菌為綠膿桿菌（P. aeruginosa），指引強烈建議採取雙重抗假單胞菌抗生素（β-lactam 如 cefepime 2 g Q8H 延長輸注，合併高劑量 aminoglycoside 如 tobramycin 10 mg/kg 每日單次輸注， 50 kg 約 500 mg Q24H，而非低劑量多劑次給藥）；同時合併黏液清除劑（dornase alfa 與 7% 高張 sodium chloride 溶液）。 （2）嚴重 急性呼吸窘迫症候群（acute respiratory distress syndrome, ARDS） （Pao2/Fio2 < 100 mm Hg）：病人無休克且血壓穩定，實證強烈支持採取水分保守策略（FACTT 協議，維持 CVP < 4 mm Hg），嚴禁在非休克病人中採取過度輸液（CVP 10–13 mm Hg 會加劇肺水腫與氣體交換障礙）（選項 D 正確；選項 A、 B、 C 錯誤）。\n\n【教材出處】PDF 第 19 章，Q305。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 19,
        "question": 305,
        "type": "SAQ",
        "number": 1
      }
    },
    {
      "id": 2,
      "question": "【臨床案例】在囊腫性纖維化（cystic fibrosis, CF）急性肺部惡化病人的全人照護與非抗生素輔助性處置策略中。\n\n下列哪一項輔助治療措施在改善病患肺功能、呼吸道廓清與臨床預後方面擁有最高等級之實證醫學指引推薦（Grade B）？",
      "options": [
        "A. 0.9% 常規 sodium chloride 溶液（Normal saline）霧化吸入。",
        "B. 全身性皮質類固醇（Systemic corticosteroids）給藥。",
        "C. 同時併用靜脈注射抗生素與吸入性抗生素（Concurrent IV and inhaled antibiotics）。",
        "D. 積極胸腔物理治療／呼吸道廓清技術（Aggressive chest physical therapy/airway clearance therapies）。"
      ],
      "answer": "D",
      "explanation": "囊腫性纖維化基金會（CFF）臨床指引明確指出，呼吸道分泌物滯留是 囊性纖維化（cystic fibrosis, CF）惡化的核心病理機轉；因此，『積極胸腔物理治療（chest PT）與物理性呼吸道廓清技術』、吸入型 dornase alfa 以及 7% 高張 sodium chloride 溶液，擁有最強且最高品質的實證支持（Grade B 推薦）（選項 D 正確）。 0.9% 常規 sodium chloride 溶液因滲透壓不足，不具促進黏液水化廓清效益，未獲推薦（選項 A 錯誤）。全身性類固醇（選項 B）及急性期合併吸入與靜脈抗生素（選項 C）在 CF 急性惡化指引中均被列為 Grade I （實證不足以常規推薦），其療效與安全性仍存爭議。\n\n【教材出處】PDF 第 19 章，Q306。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 19,
        "question": 306,
        "type": "SAQ",
        "number": 2
      }
    },
    {
      "id": 3,
      "question": "【臨床案例】一名 55 歲女性肺動脈高壓（pulmonary arterial hypertension, PAH）病人因嚴重呼吸衰竭住進 加護病房（intensive care unit, ICU）。自述近 5 天呼吸做功急遽增加，平時規律服用 macitentan 10 mg 每日一次（once daily, QD）及 sildenafil 20 mg 每日三次（three times daily, TID）。當前生命徵象：血壓 76/60 mm Hg、心率 130 次 / 分、呼吸 40 次 / 分、經 6 L 鼻導管 Sao2 85%。右心導管數值： mPAP 50 mm Hg、右心房壓（RAP） 25 mm Hg、心臟指數（cardiac index, CI） 1.9 L/min/m2、肺微血管楔壓（PCWP） 16 mm Hg。心臟超音波顯示左室射出分率 60% 伴隨極嚴重右心室擴大（severe RV dilatation）。\n\n針對該處於失代償性右心衰竭與心因性充血狀態的肺動脈高壓病人，下列哪一項起始藥物治療處置最為關鍵且適當？",
      "options": [
        "A. dopamine 持續靜脈輸注。",
        "B. Epoprostenol 持續靜脈輸注。",
        "C. phenylephrine 持續靜脈輸注。",
        "D. furosemide 靜脈推注（溫和利尿以優化右心室前負荷）。"
      ],
      "answer": "D",
      "explanation": "該病人正經歷典型的『右心衰竭危機（RV failure crisis） 』，右心房壓高達 25 mm Hg 且心室嚴重擴大，右心室處於弗蘭克 - 斯塔林曲線的過度延伸充血下降段，引發室間隔左偏、左心室充盈受限與心因性休克。此時最重要的首要治療目標是『卸除右心室過度前負荷』，在血壓監測下給予溫和靜脈利尿劑（furosemide）減少過度容積負荷，使心室幾何結構復原並改善每搏輸出量（選項 D 正確）。 dopamine 會誘發並加劇嚴重竇性心搏過速，進一步縮短心室舒張充盈時間（選項 A 錯誤）。 Epoprostenol 具強大周邊體循環血管擴張特性，在此極度低血壓狀態下立即輸注會導致體循環阻力驟降引發致死性血管塌陷（選項 B 錯誤）。 phenylephrine 激動肺血管 α1 受體會急劇增加肺血管阻力（PVR），惡化右心室後負荷（選項 C 錯誤）。\n\n【教材出處】PDF 第 19 章，Q307。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 19,
        "question": 307,
        "type": "SAQ",
        "number": 3
      }
    },
    {
      "id": 4,
      "question": "【臨床案例】在依據國際指南（ESC/ERS 及 CHEST）長期管理肺動脈高壓（pulmonary arterial hypertension, PAH）病人的臨床治療目標中。\n\n下列哪一項指標被列為界定病患處於『低風險狀態（Low-risk status） 』且維持長期生存之核心治療目標？",
      "options": [
        "A. 達到並維持 WHO 功能分級（FC） III 或 IV 級。",
        "B. 維持 6 分鐘步行距離（6MWD）大於 400 公尺即可，其他數值不拘。",
        "C. 保護與維持右心室大小與功能（右心房壓 RAP < 8 mm Hg，心臟指數 CI ≥ 2.5 L/min/m2）。",
        "D. 將 B 型利鈉肽（BNP）標準化至小於 200 ng/L。"
      ],
      "answer": "C",
      "explanation": "國際 肺動脈高壓（pulmonary arterial hypertension, PAH）指南明確定義的多維度『低風險（預測 1 年死亡率 <5%）』核心治療目標包括： （1） WHO 功能分級維持在 I 或 II 級（選項 A 錯誤）； （2） 6 分鐘步行距離 > 440 公尺（選項 B 門檻不精確）； （3）血液動力學維持良好的右心室結構與收縮功能：右心房壓（RAP） < 8 mm Hg 且心臟指數（cardiac index, CI） ≥ 2.5 L/min/m2 （選項 C 正確）； （4）生物標記： BNP < 50 ng/L 或 NT-proBNP < 300 ng/L （選項 D 之 200 ng/L 過高，錯誤）。\n\n【教材出處】PDF 第 19 章，Q308。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 19,
        "question": 308,
        "type": "SAQ",
        "number": 4
      }
    },
    {
      "id": 5,
      "question": "【臨床案例】一名 32 歲男性因極度焦慮與嚴重呼吸困難至急診就醫。聽診發現廣泛性明顯喘鳴音（audible wheezing）。病人呼吸極為費力，僅能說出斷續片語而無法講出完整句子。過去數小時在家中反覆使用 albuterol 定量吸入劑（MDI）但症狀完全無改善。肺功能檢測其第一秒用力呼氣容積（FEV1）僅為預測值的 45%。\n\n依據 全球氣喘倡議（Global Initiative for Asthma, GINA）及 NAEPP 氣喘急性發作嚴重度分級準則，該名病患的急性發作應歸類為下列何種嚴重程度？",
      "options": [
        "A. 輕度（Mild）。",
        "B. 中度（Moderate）。",
        "C. 重度（Severe）。",
        "D. 瀕死 / 具生命危險（Life-threatening）。"
      ],
      "answer": "C",
      "explanation": "依據 全球氣喘倡議（Global Initiative for Asthma, GINA） 2024 急性氣喘發作分類標準： （1）輕度 / 中度：能說完整片語、偏好坐姿、不躁動、 SABA 有反應、 FEV1 或 PEF > 50%； （2）重度（Severe）：呼吸困難影響說話（說單字或片語困難）、端坐呼吸、明顯焦慮躁動、輔助呼吸肌用力、呼吸頻率 > 30 次 / 分、心率 > 120 次 / 分、 FEV1 ≤ 50% 且高頻率 SABA 無完全緩解（本案病人 FEV1 45% 且說話困難，完全符合重度發作標準，選項 C 正確；選項 A、 B 錯誤）； （3）具生命危險（Life-threatening）：出現意識改變（嗜睡、混亂）、呼吸肌疲竭、胸部聽診呈『無寂胸（silent chest） 』、發紺或反常胸腹運動（本案尚未進展至此階段，選項 D 錯誤）。\n\n【教材出處】PDF 第 19 章，Q309。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 19,
        "question": 309,
        "type": "SAQ",
        "number": 5
      }
    },
    {
      "id": 6,
      "question": "【臨床案例】一名 55 歲男性因持續 2 週漸進性呼吸困難、喘鳴伴隨靜止時發作急診就醫。病人意識混亂，僅能簡短以短語回應，表明近 2 天吸入型支氣管擴張劑完全失效。無發燒，心率 116 次 / 分、呼吸 42 次 / 分、未吸氧時 Sao2 86%。立即給予高流量氧氣、 albuterol 持續霧化吸入及靜脈注射 methylprednisolone 125 mg 單次給藥。 1 小時後重新評估，病人缺氧與支氣管痙攣未見任何改善。\n\n針對該名對初期常規治療反應不佳之重度瀕死氣喘病人，此時最適當追加的輔助藥物治療為何？",
      "options": [
        "A. 針對社區型肺炎常見病原菌啟動經驗性廣效抗生素治療。",
        "B. 給予 magnesium sulfate 2 g 靜脈滴注 20 分鐘。",
        "C. 給予 theophylline 3.6 mg/kg 靜脈注射負荷劑量，並於 40 分鐘後抽血檢測血中濃度。",
        "D. 給予 20% acetylcysteine 4 mL 霧化吸入 Q6H。"
      ],
      "answer": "B",
      "explanation": "對於初期吸入 SABA、 SAMA 及全身性類固醇治療 1 小時後仍無改善的重度至威脅生命之急性氣喘發作，國際指引一致強烈推薦靜脈輸注『magnesium sulfate （magnesium sulfate 2 g IV over 20 min） 』作為首選輔助療法；鎂離子能阻斷支氣管平滑肌鈣離子通道並抑制乙醯膽鹼釋放，誘導強效支氣管擴張，顯著改善 FEV1 並降低住院率（選項 B 正確）。若無明確細菌感染臨床依據，常規給予抗生素並無獲益（選項 A 錯誤）。茶鹼類藥物（theophylline/aminophylline）因治療指數狹窄、心律不整與抽搐等嚴重毒性高且支氣管擴張效益遠不如 SABA，指引已明令不推薦急性期常規使用（選項 C 錯誤）。黏液溶解劑如 acetylcysteine 具有強烈氣道刺激性，易誘發劇烈急性支氣管痙攣而使病情急遽惡化，為急性發作期之絕對禁忌（選項 D 錯誤）。\n\n【教材出處】PDF 第 19 章，Q310。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 19,
        "question": 310,
        "type": "SAQ",
        "number": 6
      }
    },
    {
      "id": 7,
      "question": "【臨床案例】一名 66 歲男性因慢性阻塞性肺疾病急性惡化（exacerbation of chronic obstructive pulmonary disease, ECOPD）導致急性呼吸衰竭收治 加護病房（intensive care unit, ICU）。過去 2 年未曾發生急性發作。居家維持用藥為 albuterol HFA 2 噴 QID PRN 以及 tiotropium 1 噴 每日一次（once daily, QD）。病人否認近期接觸感染病患，咳痰量與顏色無任何變化。無已知藥物過敏史。目前使用鼻導管 4 L/min （Sao2 97%），並正接受 albuterol 與 ipratropium 霧化吸入治療。\n\n除了當前的支氣管擴張劑外，下列哪一項藥物處置計畫最符合當前 慢性阻塞性肺病全球倡議（Global Initiative for Chronic Obstructive Lung Disease, GOLD）指南針對該病患之治療建議？",
      "options": [
        "A. azithromycin 500 mg 靜脈注射每日一次。",
        "B. prednisone 40 mg （或 30–40 mg）口服每日一次，連續 5 天。",
        "C. Levofloxacin 500 mg 口服每日一次。",
        "D. methylprednisolone 125 mg 靜脈注射每 6 小時一次。"
      ],
      "answer": "B",
      "explanation": "慢性阻塞性肺病全球倡議（Global Initiative for Chronic Obstructive Lung Disease, GOLD）指南針對需要住院之 慢性阻塞性肺病（chronic obstructive pulmonary disease, COPD）急性惡化病人，強烈建議使用全身性皮質類固醇，標準劑量為『口服 prednisone 40 mg （或 30–40 mg）每日一次，連續 5 天』；短天數療法能顯著加速肺功能恢復、縮短住院時間並減少復發，且優於高劑量長療程（選項 B 正確；超高劑量如 methylprednisolone 125 mg Q6H 僅會增加嚴重高血糖、感染與精神病副作用，無額外療效，選項 D 錯誤）。關於抗生素：指引規定僅在病患具備 Anthonisen 三大主要症狀（呼吸困難加重、痰量增加、出現膿性痰），或具備膿性痰外加另一症狀，或需要插管通氣時才建議使用；本案病人無膿性痰且無感染徵象，無需使用經驗性抗生素（選項 A、 C 錯誤）。\n\n【教材出處】PDF 第 19 章，Q311。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 19,
        "question": 311,
        "type": "SAQ",
        "number": 7
      }
    },
    {
      "id": 8,
      "question": "【臨床案例】一名 65 歲非裔男性（身高 177.8 cm，體重 90 kg， SCr 1.5 mg/dL）具洗腎之末期腎病、 慢性阻塞性肺病（chronic obstructive pulmonary disease, COPD）、高血壓病史，因呼吸衰竭由家中急診轉入 加護病房（intensive care unit, ICU）。入院前症狀包含咳嗽、呼吸困難、痰量顯著增加呈黃綠膿性並伴隨發燒。呼吸道病毒檢測呈現鼻病毒（rhinovirus）陽性。未吸氧時 Sao2 為 85%，給予高流量鼻導管（HFNC） 30 L/min、 Fio2 60% 治療 15 分鐘後，病人呼吸費力顯著減輕，經皮血氧 Sao2 升至 97%，團隊維持相同 HFNC 設定。病人已接受 methylprednisolone 60 mg 靜脈給藥（intravenous, IV）單次及 azithromycin 500 mg 靜脈給藥（intravenous, IV）單次給藥。\n\n在該病患當前的所有處置計畫中，下列哪一項醫療決策在文獻與指引中被證實與『 慢性阻塞性肺病（chronic obstructive pulmonary disease, COPD）急性惡化病人死亡率顯著上升』密切相關？",
      "options": [
        "A. 給予高於 prednisone 30 mg 口服等效劑量之皮質類固醇。",
        "B. 以周邊脈搏血氧飽和度（SpO2）滴定氧氣療法。",
        "C. azithromycin 單次給藥劑量大於 250 mg。",
        "D. 維持經皮血氧飽和度（SpO2）長時間高於 92% （未及時調降吸入氧氣濃度）。"
      ],
      "answer": "D",
      "explanation": "在 慢性阻塞性肺病（chronic obstructive pulmonary disease, COPD）急性惡化患者中，過度氧合（吸入過高濃度氧氣導致 SpO2 > 92% 或高氧血症）會引發 Haldane 效應（去氧血紅素釋放 CO2、降低對 CO2 結合力）、抑制缺氧性肺血管收縮增加死腔通氣、並減弱低氧對周邊化學感受器的呼吸驅動，導致嚴重的反跳性高碳酸血症、呼吸性酸中毒、甚至昏迷與死亡。多項大型臨床研究證實，嚴格將 SpO2 控制在 88%–92% 才能顯著降低死亡率；將 SpO2 維持在 97% 而未適當下調 Fio2 會直接導致死亡率增加（選項 D 正確）。類固醇在重症中單次使用 60 mg 或 azithromycin 500 mg 單次負荷劑量均未被證實增加死亡率（選項 A、 C 錯誤）。脈搏血氧儀在深膚色族群中可能略有高估，但該現象並非直接導致死亡率增加的主因（選項 B 錯誤）。\n\n【教材出處】PDF 第 19 章，Q312。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 19,
        "question": 312,
        "type": "SAQ",
        "number": 8
      }
    },
    {
      "id": 9,
      "question": "【臨床案例】一名 20 歲女性因囊腫性纖維化（cystic fibrosis, CF）急性肺部惡化收治 加護病房（intensive care unit, ICU）。入院前病情穩定，維持理想體重且剛完成居家抗生素維持療程。病人因缺氧性呼吸衰竭接受機械通氣，採用 AC/VC 模式合併肺保護策略（4–8 mL/kg 潮氣容積）。\n\n針對該名併發呼吸衰竭的 囊性纖維化（cystic fibrosis, CF）急性惡化重症病人，下列哪一組藥物與營養治療組合最為恰當？",
      "options": [
        "A. tobramycin 霧化吸入； 7% 高張 sodium chloride 溶液霧化吸入；以及管灌營養採急性期低熱量目標（15 kcal/kg/day）。",
        "B. ceftriaxone 2 g 靜脈給藥（intravenous, IV） Q24H； tobramycin 霧化吸入； 0.9% 常規 sodium chloride 溶液霧化吸入；以及管灌營養維持常規目標（25 kcal/kg/day）。",
        "C. piperacillin/tazobactam 4.5 g （或 3.375–4.5 g）靜脈給藥（intravenous, IV） Q6H 延長輸注； tobramycin 10 mg/kg 靜脈給藥（intravenous, IV）每日一次（once daily, QD）單次給藥； 7% 高張 sodium chloride 溶液霧化吸入；以及管灌營養提供充足熱量目標（25–35 kcal/kg/day）。",
        "D. cefepime 2 g 靜脈給藥（intravenous, IV） Q8H 延長輸注； tobramycin 10 mg/kg 靜脈給藥（intravenous, IV） Q8H； 7% 高張 sodium chloride 溶液霧化吸入；以及管灌營養 25 kcal/kg/day。"
      ],
      "answer": "C",
      "explanation": "囊性纖維化（cystic fibrosis, CF）急性呼吸衰竭的藥物處置原則： （1）抗菌治療：必須針對綠膿桿菌（P. aeruginosa）給予雙重全身性抗假單胞菌抗生素。 ceftriaxone 無抗綠膿桿菌活性（排除選項 B）。 tobramycin 用於重症 CF 應採 『高劑量每日單次給藥（10 mg/kg IV QD）』以達高 Cmax/最低抑菌濃度（minimum inhibitory concentration, MIC）殺菌效果並減少腎毒性；選項 D 將 10 mg/kg 設為 Q8H 給藥屬於致命性過量（排除選項 D）；重症呼吸衰竭時吸入抗生素無法充分抵達周邊實質，不能取代靜脈抗生素（排除選項 A）。 （2）黏液清除： 7% 高張 sodium chloride 溶液可促進呼吸道水化。 （3）營養支持： CF 病人代謝率極高且吸收不良，需維持充足甚至高熱量目標（25–35 kcal/kg/day），絕不可在急性期刻意採取低熱量餵食。綜合上述，選項 C 為最適切處置。\n\n【教材出處】PDF 第 19 章，Q313。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 19,
        "question": 313,
        "type": "Case",
        "number": 1
      }
    },
    {
      "id": 10,
      "question": "【臨床案例】上述 20 歲女性 囊性纖維化（cystic fibrosis, CF）病人在接受雙重靜脈抗生素、積極胸部物理治療及居家慢性維持藥物治療 5 天後，呼吸困難顯著改善並成功拔管，於住院第 6 天轉出加護病房至普通病房。\n\n依據 STOP2 等最新里程碑臨床試驗之實證結論，針對該名在治療前 7 天內症狀迅速獲得顯著改善的 囊性纖維化（cystic fibrosis, CF）病人，最適宜建議的靜脈抗生素總療程為多少天？",
      "options": [
        "A. 7 天。",
        "B. 10 天。",
        "C. 14 天。",
        "D. 持續給予抗生素直至呼吸道痰液培養完全轉為陰性為止。"
      ],
      "answer": "B",
      "explanation": "劃時代的 STOP2 隨機對照試驗證實：在因肺部惡化住院的 囊性纖維化（cystic fibrosis, CF）病人中，若在給藥最初 7– 10 天內臨床症狀與 FEV1 獲得迅速改善，完成『 10 天』的抗生素療程在肺功能恢復率、再次惡化時間與長期預後方面均『非劣於（noninferior） 』傳統 14 天（或 21 天）的長療程，且能大幅降低藥物不良反應與抗藥性風險（選項 B 正確；選項 C 錯誤）。 7 天療程在 STOP2 試驗中被證實復發率偏高（選項 A 錯誤）。 CF 病人呼吸道之綠膿桿菌定殖通常為終身性，追求微生物學完全清除（microbiological cure）既不切實際且會導致無止境的毒性暴露（選項 D 錯誤）。\n\n【教材出處】PDF 第 19 章，Q314。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 19,
        "question": 314,
        "type": "Case",
        "number": 2
      }
    },
    {
      "id": 11,
      "question": "【臨床案例】一名 33 歲男性因肺動脈高壓（pulmonary arterial hypertension, PAH）急遽惡化轉入醫療加護病房。病人既往未曾接受任何 肺動脈高壓（pulmonary arterial hypertension, PAH）標靶藥物治療。過去 6 個月運動性呼吸困難加劇；近 2 個月甚至連帶狗散步都會產生嚴重疲憊並偶伴胸痛；近幾天則在靜止休息時即出現嚴重呼吸急促。理學檢查：血壓 105/63 mm Hg、心率 85 次 / 分、肺部聽診清晰、四肢輕微水腫。心臟超音波顯示肺動脈收縮壓顯著升高，左室射出分率正常。急性血管反應性試驗（vasodilator challenge）呈現陰性（無反應）。實驗室： 血清肌酸酐（serum creatinine, SCr） 0.6 mg/dL、 AST 160 U/L、 ALT 100 U/L。\n\n依據病患之臨床症狀表現，下列何者最能準確描述該病患的 WHO 功能分級（FC）以及未來 1 年內的預估死亡風險？",
      "options": [
        "A. WHO FC III， 1 年死亡風險約 5%。",
        "B. WHO FC III， 1 年死亡風險約 10%。",
        "C. WHO FC IV， 1 年死亡風險約 15%。",
        "D. WHO FC IV， 1 年死亡風險大於 20% （高危險群）。"
      ],
      "answer": "D",
      "explanation": "依據 WHO 肺高壓功能分級標準： （1） Class III 僅在輕微日常活動時即出現明顯症狀，但 『休息時無症狀』； （2） Class IV 則為無法從事任何體力活動，且『在靜止休息時即出現呼吸急促或疲倦等右心衰竭徵象』（本案病人已出現嚴重的休息時呼吸急促，明確歸類為 WHO FC IV，排除選項 A、 B）。在國際指南（ESC/ERS）四級危險分層中，初診斷即呈現 WHO FC IV、迅速進展且伴隨右心衰竭徵象者，屬於高危險群（High-risk status），其未來 1 年預估死亡率 > 20% （選項 D 正確；選項 C 數值低估，錯誤）。\n\n【教材出處】PDF 第 19 章，Q315。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 19,
        "question": 315,
        "type": "Case",
        "number": 3
      }
    },
    {
      "id": 12,
      "question": "【臨床案例】承接上述 33 歲男性新診斷為高危險群（WHO FC IV）、血管反應性試驗陰性且肝功能異常（AST 160 U/L, ALT 100 U/L）的肺動脈高壓病人。\n\n依據國際肺動脈高壓診療指引，此時最應優先推薦立即啟動的初始標靶藥物治療方案為何？",
      "options": [
        "A. Epoprostenol 持續靜脈輸注（起始劑量 2 ng/kg/min，逐步向上滴定）。",
        "B. diltiazem 180 mg 口服每日一次。",
        "C. Macitentan 10 mg 口服每日一次。",
        "D. Sildenafil 10 mg 靜脈注射每 8 小時一次。"
      ],
      "answer": "A",
      "explanation": "國際 肺動脈高壓（pulmonary arterial hypertension, PAH）指南一致強烈指引：對於初診斷為高危險群（WHO FC IV 且 1 年死亡率 >20%）的病人，首選治療方案必須包含『持續靜脈輸注前列環素（continuous IV prostacyclin） 』如 Epoprostenol，這是唯一經多項隨機對照試驗證實能顯著降低重度 PAH 病人死亡率的藥物（選項 A 正確）。病人急性血管反應試驗為陰性，使用鈣離子阻斷劑（CCB, 如 diltiazem）不僅無效，且具強烈心肌負性肌力與致死風險，為禁忌症（選項 B 錯誤）。內皮素受體拮抗劑（ERA, 如 macitentan/bosentan）具潛在肝毒性，在該病人既有轉氨酶升高時不宜單藥起始，且口服單藥無法滿足高危險群挽救生命的重症需求（選項 C 錯誤）。靜脈劑型 sildenafil 極易誘發周邊體循環急遽低血壓且未獲指引推薦作為高危險群首選單藥（選項 D 錯誤）。\n\n【教材出處】PDF 第 19 章，Q316。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 19,
        "question": 316,
        "type": "Case",
        "number": 4
      }
    },
    {
      "id": 13,
      "question": "【臨床案例】一名 40 歲女性（體重 115 kg）因氣喘重積狀態（status asthmaticus）收治加護病房。既往有嚴重難治性氣喘病史，在過去 6 個月內曾發生 3 次氣管插管病史。慢性病史包含高血壓、糖尿病、肥胖以及雙極性情感疾患。在過去 2 個月中，她平均每月至少使用 3 罐以上的 albuterol 支氣管擴張吸入劑以緩解症狀。\n\n依據氣喘死亡危險因子評估標準，下列哪一組特徵最精確地涵蓋了該病患所具備的氣喘高死亡風險因子（higher mortality risk factors）？",
      "options": [
        "A. 過去 6 個月內有 3 次住院病史，以及合併雙極性情感疾患。",
        "B. 過去一個月使用超過 2 罐短效吸入劑（SABA），以及重度肥胖。",
        "C. 過去一年內曾因氣喘發作住院或急診就醫，以及合併糖尿病。",
        "D. 曾有瀕死氣喘（near-fatal asthma）發作史，以及合併高血壓。"
      ],
      "answer": "C",
      "explanation": "全球氣喘倡議（Global Initiative for Asthma, GINA）指南明列之氣喘相關死亡主要危險因子包括： （1）曾有瀕死氣喘病史（曾插管或入住 ICU）； （2）過去 1 年內曾因氣喘住院或看急診； （3）每月使用超過 1 罐 SABA 吸入劑； （4）缺乏吸入性皮質類固醇（ICS）規律保養； （5）精神疾患或重大心理社會問題； （6）重要共病症：包含肺炎、糖尿病（diabetes）、心律不整等。注意：高血壓與肥胖雖屬慢性共病，但『高血壓』本身並未被列為氣喘特異性死亡危險因子（排除選項 D）；選項 C 所列之『過去一年內曾因氣喘急診 / 住院』與『糖尿病』兩者均為指引明確規範之死亡危險因子（選項 C 正確）。\n\n【教材出處】PDF 第 19 章，Q317。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 19,
        "question": 317,
        "type": "Case",
        "number": 5
      }
    },
    {
      "id": 14,
      "question": "【臨床案例】一名 40 歲女性（體重 115 kg）因氣喘重積狀態（status asthmaticus）收治加護病房。既往有嚴重難治性氣喘病史，在過去 6 個月內曾發生 3 次氣管插管病史。慢性病史包含高血壓、糖尿病、肥胖以及雙極性情感疾患。在過去 2 個月中，她平均每月至少使用 3 罐以上的 albuterol 支氣管擴張吸入劑以緩解症狀。 接續此案例的 40 歲女性氣喘重積病人，因呼吸肌衰竭接受氣管插管並使用呼吸機。醫療團隊正制定急性威脅生命發作之藥物治療方案。\n\n針對該名已接受侵入性插管的重積氣喘危重病人，下列哪一組藥物治療方案最符合指引之起始藥物治療標準？",
      "options": [
        "A. 吸入型 albuterol 霧化 2.5 mg 每 3 小時一次。",
        "B. 吸入型 albuterol 霧化 2.5 mg Q3H 加上吸入型 ipratropium 霧化 0.5 mg Q6H。",
        "C. 吸入型 albuterol 霧化 2.5 mg Q3H、吸入型 ipratropium 霧化 0.5 mg Q6H、合併靜脈注射 methylprednisolone 30–40 mg （或 60–80 mg 分次給藥）每日給藥。",
        "D. 吸入型 albuterol 霧化 2.5 mg Q3H、吸入型 ipratropium 霧化 0.5 mg Q6H、合併靜脈注射 methylprednisolone 125 mg 每 6 小時一次。"
      ],
      "answer": "C",
      "explanation": "對於威脅生命之重度插管氣喘發作，指引規範的三大核心藥物為： （1）短效 β2 激動劑（SABA, albuterol 頻繁或連續霧化）； （2）短效抗膽鹼藥物（SAMA, ipratropium 0.5 mg 霧化 Q6H）； （3）早期給予全身性皮質類固醇。關於類固醇劑量，實證研究已明確證實，中等劑量（methylprednisolone 30–80 mg/day，相當於 prednisone 40–80 mg/day）其支氣管解痙與抗炎療效與超高劑量完全相同，而超高劑量（如 methylprednisolone 125 mg Q6H，每日高達 500 mg）僅會顯著增加急性神經肌肉病變、嚴重高血糖、低血鉀與感染風險，無任何額外獲益（選項 C 正確；選項 D 劑量過度危險；選項 A、 B 缺乏全身性類固醇，錯誤）。\n\n【教材出處】PDF 第 19 章，Q318。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 19,
        "question": 318,
        "type": "Case",
        "number": 6
      }
    },
    {
      "id": 15,
      "question": "【臨床案例】一名 79 歲女性（體重 70 kg）因 慢性阻塞性肺病（chronic obstructive pulmonary disease, COPD）急性惡化（exacerbation of chronic obstructive pulmonary disease, ECOPD）併發嚴重高碳酸血症呼吸衰竭收治 加護病房（intensive care unit, ICU）。既往有多重 慢性阻塞性肺病急性惡化（exacerbation of chronic obstructive pulmonary disease, ECOPD）住院病史。就診時伴隨發燒、極度呼吸困難、咳出大量黃綠色濃稠膿痰及意識混亂。病史有對 penicillin 產生致死性過敏性休克（anaphylaxis）之明確紀錄。血壓 190/100 mm Hg、心率 110 次 / 分、呼吸 22 次 / 分。 動脈血液氣體分析（arterial blood gas, ABG） （鼻導管 6 L/min 下）： pH 7.20、 Paco2 85 mm Hg、 Pao2 33 mm Hg。病人隨即接受氣管插管與呼吸機支持。\n\n針對該名對青黴素嚴重過敏、頻繁發作且咳出濃痰之嚴重 慢性阻塞性肺病急性惡化（exacerbation of chronic obstructive pulmonary disease, ECOPD）重症病患，下列哪一組藥物治療方案最為適當？",
      "options": [
        "A. 靜脈注射 methylprednisolone 1 mg/kg 分兩次給藥；吸入 albuterol 霧化；靜脈注射 ampicillin/sulbactam 3 g Q6H 連續 7 天；靜脈注射 azithromycin 500 mg 每日一次（once daily, QD）連續 5 天。",
        "B. 經鼻胃管（NGT）給予 prednisone 40 mg 每日一次（once daily, QD）連續 5 天；吸入 albuterol 與 ipratropium 霧化；靜脈注射 ampicillin/sulbactam 3 g Q6H 連續 10 天；靜脈注射 azithromycin 500 mg QD。",
        "C. 靜脈注射 methylprednisolone 1 mg/kg 分兩次給藥；吸入 albuterol 與 ipratropium 霧化；經 NGT 給予 levofloxacin 750 mg 每日一次（once daily, QD）連續 7 天。",
        "D. 經 NGT 給予 prednisone 40 mg （或 30–40 mg）口服 / 管灌 每日一次（once daily, QD）連續 5 天（或等效靜脈劑量）；吸入 albuterol 與 ipratropium 霧化；並靜脈注射 levofloxacin 750 mg （或 500–750 mg） QD 連續 5 天。"
      ],
      "answer": "D",
      "explanation": "本題綜合評估三大要點： （1）全身性皮質類固醇： 慢性阻塞性肺病全球倡議（Global Initiative for Chronic Obstructive Lung Disease, GOLD）指南標準推薦劑量為口服或管灌 prednisone 40 mg （或 30–40 mg）每日一次，連續 5 天即可，療效與靜脈注射相同且可避免高劑量靜脈注射之副作用（選項 D 優於選項 C）。 （2）支氣管擴張劑：應同時併用 SABA （albuterol）與 SAMA （ipratropium）霧化治療。 （3）抗生素選擇：病人具備全部三大主要症狀（呼吸困難加重、痰量增加、膿性痰）且需插管通氣，必須給予 5–7 天抗生素。由於病人對 penicillin 具有致死性過敏性休克史，嚴格禁用任何青黴素類抗生素（排除含 ampicillin/sulbactam 之選項 A、 B）。且頻繁發作插管病人感染抗藥性革蘭氏陰性菌（如綠膿桿菌）風險高，具抗假單胞菌活性之呼吸道 fluoroquinolone （如 levofloxacin）為最佳安全選擇（選項 D 正確）。\n\n【教材出處】PDF 第 19 章，Q319。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 19,
        "question": 319,
        "type": "Case",
        "number": 7
      }
    },
    {
      "id": 16,
      "question": "【臨床案例】一名 75 歲女性因有痰咳嗽與意識改變（僅能勉強辨識人名）至急診就醫。病史有第二型糖尿病與重度 慢性阻塞性肺病（chronic obstructive pulmonary disease, COPD）。就醫時生命徵象：體溫 38.8°C （101.8°F）、心率 95 次 / 分、呼吸 44 次 / 分、收縮壓 105 mm Hg、使用居家氧氣（鼻導管 2 L/min）時 SpO2 僅 86%。隨後使用 Venturi 面罩（Fio2 30%）實施非侵入性通氣支持，其 SpO2 迅速上升並穩定維持在 91%。生化檢驗： 血清肌酸酐（serum creatinine, SCr） 1.4 mg/dL、 血中尿素氮（blood urea nitrogen, BUN） 55 mg/dL； 動脈血液氣體分析（arterial blood gas, ABG）報告： pH 7.47、 Paco2 55 mm Hg、 Pao2 59 mm Hg。胸部 X 光顯示多葉性浸潤斑塊。\n\n依據 2023/2024 慢性阻塞性肺病全球倡議（Global Initiative for Chronic Obstructive Lung Disease, GOLD）指南最新分類架構，下列何者最精確地描述了該病患的 慢性阻塞性肺病急性惡化（exacerbation of chronic obstructive pulmonary disease, ECOPD）嚴重程度及其急性呼吸衰竭分級？",
      "options": [
        "A. 中度 慢性阻塞性肺病急性惡化（exacerbation of chronic obstructive pulmonary disease, ECOPD） （Moderate ECOPD）伴隨非危及生命之急性呼吸衰竭（Non–life-threatening acute respiratory failure）。",
        "B. 中度 慢性阻塞性肺病急性惡化（exacerbation of chronic obstructive pulmonary disease, ECOPD） （Moderate ECOPD）伴隨危及生命之急性呼吸衰竭（Life-threatening acute respiratory failure）。",
        "C. 重度 慢性阻塞性肺病急性惡化（exacerbation of chronic obstructive pulmonary disease, ECOPD） （Severe ECOPD）伴隨危及生命之急性呼吸衰竭（Life-threatening acute respiratory failure）。",
        "D. 重度 慢性阻塞性肺病急性惡化（exacerbation of chronic obstructive pulmonary disease, ECOPD） （Severe ECOPD）伴隨非危及生命之急性呼吸衰竭（Non–life-threatening acute respiratory failure）。"
      ],
      "answer": "A",
      "explanation": "依據 慢性阻塞性肺病全球倡議（Global Initiative for Chronic Obstructive Lung Disease, GOLD）指南急性惡化嚴重度客觀診斷標準： （1）慢性阻塞性肺病急性惡化（exacerbation of chronic obstructive pulmonary disease, ECOPD）分級：患者呼吸速率 > 23 次 / 分且靜息氧飽和度 < 92%，符合中度或重度條件；然而，『重度（Severe） 』 ECOPD 之關鍵病理標誌為『出現失代償性急性呼吸性酸中毒（pH < 7.35） 』，該病人 動脈血液氣體分析（arterial blood gas, ABG）之 pH 為 7.47，尚未出現酸中毒代償失調，因此應嚴格分類為『中度（Moderate） ECOPD 』（排除選項 C、 D）。 （2）急性呼吸衰竭分級：病人接受低濃度 Venturi 面罩（Fio2 30% ≤ 40%）氧療後，氧合迅速糾正至 91% （SpO2 > 90%），且意識狀態在給氧後恢復穩定、無顯著血行動力學崩潰或嚴重呼吸肌衰竭，符合『非危及生命之急性呼吸衰竭（Non-life-threatening） 』定義（危及生命者通常合併持續酸中毒 pH < 7.25、頑固性低血氧或昏迷）（選項 A 正確；選項 B 錯誤）。\n\n【教材出處】PDF 第 19 章，Q320。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 19,
        "question": 320,
        "type": "Case",
        "number": 8
      }
    }
  ],
  "20": [
    {
      "id": 1,
      "question": "【臨床案例】一名 38 歲患有第二型糖尿病的女性因意識混亂與意識狀態改變送至急診。病患正持有 glipizide 10 mg 口服（oral, PO）每日兩次（twice daily, BID）處方，但目前無法配合回答任何病史。初次生命徵象：血壓 115/65 mm Hg、心率 68 次 / 分、呼吸 15 次 / 分、體溫 37.0°C。即時床邊血糖（point-of-care glucose）為 45 mg/dL；醫療團隊立即給予兩次 50% dextrose 注射液（D50W） 50 mL 靜脈推注。第一次推注後追蹤血糖為 50 mg/dL，第二次推注後僅達 57 mg/dL，低血糖症狀與意識混亂毫無改善。\n\n針對該名對反覆靜脈輸注高張葡萄糖反應不佳的磺醯尿素類（sulfonylurea）降血糖藥中毒病人，此時最適當且具特異性之處置藥物為何？",
      "options": [
        "A. 繼續給予第三次 50% dextrose 注射液（D50W） 50 mL 靜脈推注。",
        "B. 升糖素（glucagon） 1 mg 肌肉注射。",
        "C. 奧曲肽（octreotide） 50–100 mcg 皮下或靜脈注射。",
        "D. sodium bicarbonate 靜脈輸注。"
      ],
      "answer": "C",
      "explanation": "磺醯尿素類（sulfonylurea）類藥物（如 glipizide、 glyburide）的作用機轉為刺激胰臟 β 細胞之磺醯尿素受體，引發持續且失控的內源性 insulin 分泌。若單純反覆靜脈推注高張葡萄糖（dextrose），高濃度的外源性糖分反而會強力刺激已經去極化的 β 細胞釋放更多 insulin，引發嚴重的『反跳性頑固低血糖（rebound hypoglycemia） 』，這也是該患者兩次推注 D50W 後血糖仍無法突破 60 mg/dL 的主因（選項 A 錯誤）。 octreotide 是 somatostatin 類似物，能直接抑制胰臟 β 細胞釋放 insulin，為磺醯尿素類中毒頑固性低血糖的特異性解毒劑（選項 C 正確）。 glucagon 雖可促進肝醣分解，但在磺醯尿素類中毒中同樣會二次刺激 insulin 分泌且肝醣易耗竭，指引不推薦使用（選項 B 錯誤）。sodium bicarbonate 用於二甲雙胍引起的乳酸酸中毒，本例無指徵（選項 D 錯誤）。\n\n【教材出處】PDF 第 20 章，Q321。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 20,
        "question": 321,
        "type": "SAQ",
        "number": 1
      }
    },
    {
      "id": 2,
      "question": "【臨床案例】一名 56 歲男性因乙型受體阻斷劑（β-blocker）過量中毒收治 加護病房（intensive care unit, ICU）。在接受 2 L 的 0.9% sodium chloride 溶液擴容以及 3 g calcium gluconate 靜脈注射後，其生命徵象仍持續呈現休克與心搏過緩：血壓 70/40 mm Hg、心率 52 次 / 分、呼吸 22 次 / 分。\n\n在輸液與鈣劑初始治療反應不佳的情況下，下列哪一項進階解毒與升壓治療方案此時最為適當且劑量正確？",
      "options": [
        "A. 升糖素（glucagon） 5 mg 靜脈注射（初始負荷劑量 5–10 mg 於 1–2 分鐘內推注）。",
        "B. 阿托品（atropine） 2 mg 靜脈注射。",
        "C. regular insulin 0.1 unit/kg 靜脈注射。",
        "D. dopamine 2 mcg/kg/min 靜脈持續輸注。"
      ],
      "answer": "A",
      "explanation": "在 β 受體阻斷劑（beta-blocker）中毒引起低血壓與心搏過緩且對輸液和鈣劑無效時， glucagon 為經典的一線特異性解毒劑。 glucagon 能繞過被阻斷的 β- epinephrine 受體，直接激活心肌細胞膜上的獨立升糖素受體，刺激腺苷酸環化酶（adenylate cyclase）生成 cAMP，從而增加細胞內鈣離子流，發揮強大的正性肌力與正性傳導效應；其推薦初始負荷劑量為 5–10 mg 靜脈給藥（intravenous, IV）推注（選項 A 正確）。 atropine 用於解救心搏過緩之初始標準單次劑量為 0.5–1 mg， 2 mg 單次給藥劑量偏高（選項 B 錯誤）。若啟動高劑量 insulin 正常血糖療法（high-dose insulin euglycemia therapy, HIET），其靜脈負荷劑量為 1 unit/kg， 0.1 unit/kg 劑量嚴重不足 10 倍（選項 C 錯誤）。 dopamine 2 mcg/kg/min 為 dopamine 能擴血管劑量，無法改善心率與休克，用於抗休克時需 5–10 mcg/kg/min 以上（選項 D 錯誤）。\n\n【教材出處】PDF 第 20 章，Q322。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 20,
        "question": 322,
        "type": "SAQ",
        "number": 2
      }
    },
    {
      "id": 3,
      "question": "【臨床案例】一名 76 歲女性因意識狀態下降送至急診就醫。生命徵象：血壓 118/72 mm Hg、心率 57 次 / 分、呼吸 17 次 / 分。病人感到明顯噁心，理學檢查顯示輕度多汗與腸鳴音活躍。家屬表示病人近期常忘記是否已服藥，懷疑可能重複用藥過量。\n\n綜合該病人的臨床表現（心搏過緩、噁心、流汗、意識模糊但呼吸速率與血壓相對正常），該病人最可能處於下列哪一種常見的中毒症候群（toxidrome）？",
      "options": [
        "A. 抗膽鹼中毒症候群（Anticholinergic toxidrome）。",
        "B. 膽鹼性中毒症候群（Cholinergic toxidrome） （如阿茲海默症乙醯膽鹼酯酶抑制劑過量）。",
        "C. 鴉片類中毒症候群（Opioid toxidrome）。",
        "D. 擬交感神經中毒症候群（Sympathomimetic toxidrome）。"
      ],
      "answer": "B",
      "explanation": "膽鹼性中毒症候群（Cholinergic toxidrome，包含 DUMBELS 表現：腹瀉、排尿、瞳孔縮小、心搏過緩 bradycardia、支氣管痙攣 / 分泌物、嘔吐 emesis、流淚、流涎 / 發汗）的典型心血管表徵即為心搏過緩與胃腸道噁心嘔吐，在高齡失智症患者中最常由乙醯膽鹼酯酶抑制劑（如 donepezil、 rivastigmine）過量引發（選項 B 正確）。抗膽鹼中毒症候群與擬交感神經中毒症候群均以『心搏過速（tachycardia） 』、散瞳、皮膚乾燥為核心特徵（排除選項 A、 D）。鴉片類中毒症候群的核心標誌為『呼吸抑制（respiratory depression, RR < 8–10 次 / 分） 』與針尖樣瞳孔，該病人呼吸頻率 17 次 / 分完全正常（排除選項 C）。\n\n【教材出處】PDF 第 20 章，Q323。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 20,
        "question": 323,
        "type": "SAQ",
        "number": 3
      }
    },
    {
      "id": 4,
      "question": "【臨床案例】一名 38 歲女性因疑似過量服用非典型抗精神病藥物 risperidone 被送入 加護病房（intensive care unit, ICU）。入院初期出現低血壓，但在接受兩袋 500 mL 乳酸林格氏液輸注後血壓回升至 118/77 mm Hg、心率 75 次 / 分、呼吸 16 次 / 分。 12 導程心電圖顯示 QT 間期延長（校正後 QTc 為 480 毫秒）；生化檢驗： HCO3 24 mEq/L、鉀離子（K） 3.1 mEq/L、鎂離子（Mg） 1.8 mg/dL。\n\n針對該名非典型抗精神病藥物中毒且心電圖出現 QTc 延長合併電解質紊亂的病人，下列哪一項處置在當前最為迫切且適當？",
      "options": [
        "A. potassium chloride 20 mEq 靜脈滴注每小時一次，共給予兩劑（積極糾正低血鉀）。",
        "B. activated charcoal 50 g 口服給予。",
        "C. magnesium sulfate 2 g 靜脈滴注。",
        "D. lorazepam 2 mg 靜脈推注。"
      ],
      "answer": "A",
      "explanation": "非典型抗精神病藥（如 risperidone）過量會阻斷心肌細胞 延遲整流型（delayed rectifier）鉀離子通道（IKr），引發 QTc 間期延長，進而面臨誘發致命性扭轉型室性心動過速（Torsades de Pointes, TdP）的極高風險。低血鉀（K 3.1 mEq/L）會顯著加劇 IKr 通道功能障礙並極大程度提高心律不整閥值，毒物學指引強烈建議在任何 QTc 延長的情況下，必須立即且積極將血鉀補充至 4.0–4.5 mEq/L 以上（選項 A 正確）。activated charcoal 通常僅在服藥後 1–2 小時內且氣道安全時推薦，本案時間已過且效益有限（選項 B 錯誤）。血清鎂 1.8 mg/dL 處於正常低限，且 QTc 尚未突破 500 毫秒，雖然需密切監測，但低血鉀的糾正最為緊急（選項 C 錯誤）。病人無抽搐且未躁動，給予 lorazepam 預防性抗癲癇並無指徵（選項 D 錯誤）。\n\n【教材出處】PDF 第 20 章，Q324。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 20,
        "question": 324,
        "type": "SAQ",
        "number": 4
      }
    },
    {
      "id": 5,
      "question": "【臨床案例】一名 48 歲男性因社區型肺炎收治普通病房。病史有高血壓、高血脂及 慢性阻塞性肺病（chronic obstructive pulmonary disease, COPD），自述偶爾飲酒但無酒精戒斷病史。入院後接受 levofloxacin 750 mg 靜脈給藥（intravenous, IV）每日一次（once daily, QD）及 albuterol/ipratropium 霧化治療。入院 24 小時後，病人意識漸趨混亂，伴隨嚴重噁心、嘔吐、雙手粗大震顫與大汗淋漓。生命徵象：血壓 115/68 mm Hg、心率 122 次 / 分、呼吸 21 次 / 分、體溫 37.6°C。團隊高度懷疑急性酒精戒斷症候群（alcohol withdrawal syndrome, AWS）。\n\n針對該名疑似急性酒精戒斷且交感神經過度興奮的住院病人，下列哪一項處置方案最符合指引之初始首選治療？",
      "options": [
        "A. 依據臨床酒精戒斷評估量表（CIWA-Ar）分數，依症狀觸發（symptom-triggered）給予 lorazepam 2 mg 靜脈注射。",
        "B. 依據 CIWA 分數給予 phenobarbital 65 mg 口服每 8 小時一次 PRN。",
        "C. 啟動 propofol 連續靜脈輸注維持輕度鎮靜。",
        "D. 給予 Clonidine 0.1 mg 口服每 12 小時一次以控制心搏過速。"
      ],
      "answer": "A",
      "explanation": "急性酒精戒斷的核心首選基石藥物為苯二氮平類（Benzodiazepines），其中採用經臨床驗證之 CIWA-Ar 評分進行『症狀觸發給藥（symptom-triggered therapy） 』，相較於固定時間給藥，能大幅減少鎮靜劑總累積用量、縮短治療天數並降低過度鎮靜風險； lorazepam 經由葡萄糖醛酸結合代謝，不受肝臟細胞色素 P450 酵素影響，對於潛在肝損傷的酒精使用者特別安全（選項 A 正確）。 phenobarbital 為長效巴比妥類，通常保留用於對高劑量苯二氮平類抗藥之難治型戒斷，且病人嚴重噁心嘔吐及混亂時口服給藥難以執行（選項 B 錯誤）。 propofol 具有強大呼吸抑制，未插管病人嚴禁使用（選項 C 錯誤）。 Clonidine 僅能掩蓋中樞交感興奮之外周徵象（如心跳加快），但無法預防或控制大腦 GABA 受體下調引起的戒斷性抽搐或譫妄震顫，不可單藥治療（選項 D 錯誤）。\n\n【教材出處】PDF 第 20 章，Q325。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 20,
        "question": 325,
        "type": "SAQ",
        "number": 5
      }
    },
    {
      "id": 6,
      "question": "【臨床案例】一名 57 歲男性住院病患因給藥疏失，誤服了鄰床病人的口服 methadone 40 mg。 2 小時後護理師查房發現病人呼之不應、神智不清。生命徵象：血壓 105/67 mm Hg、心率 61 次 / 分、呼吸僅 8 次 / 分、體溫 37.1°C，瞳孔呈現針尖樣縮小。護理師緊急啟動院內急救反應小組（rapid response team）。\n\n作為小組的臨床藥師，針對該名急性 methadone 誤服過量且處於嚴重中樞神經與呼吸抑制的病人，最適當的立即處置為何？",
      "options": [
        "A. 立即由口給予 activated charcoal 50 g。",
        "B. 立即給予 naloxone 0.04 mg （逐步滴定小劑量，或 0.04–0.4 mg）靜脈注射。",
        "C. 立即給予全腸道灌洗（Whole bowel irrigation）處置。",
        "D. 給予 0.9% sodium chloride 溶液 1 L 靜脈快速滴注。"
      ],
      "answer": "B",
      "explanation": "病人呈現典型的鴉片類中毒三聯徵（意識昏迷、呼吸抑制 RR 8 次 / 分、針尖樣瞳孔）。首要處置是立即給予鴉片受體特異性拮抗劑 naloxone；使用 naloxone 時應從小劑量（如 0.04 mg 開始，每 2–3 分鐘滴定）靜脈給藥，目標是『恢復足夠自主通氣（RR ≥ 10–12 次 / 分） 』而非使病人瞬間清醒而誘發劇烈的急性戒斷症狀或肺水腫（選項 B 正確）。在意識昏迷且氣道未受保護的病人中口服給予 activated charcoal 或全腸道灌洗，極易引發致命性的吸入性肺炎，且服藥已過 2 小時吸收完畢，為絕對禁忌（選項 A、 C 錯誤）。輸液無法糾正致死性的呼吸停滯（選項 D 錯誤）。注意： methadone 半衰期長達 24–36 小時，而 naloxone 作用僅維持 30–90 分鐘，必須持續密切監測並常需重複給藥或連續輸注。\n\n【教材出處】PDF 第 20 章，Q326。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 20,
        "question": 326,
        "type": "SAQ",
        "number": 6
      }
    },
    {
      "id": 7,
      "question": "【臨床案例】一名 56 歲女性因蓄意服用 25 顆 amlodipine 10 mg 錠劑送至急診。在急診接受 activated charcoal 50 g、 2 L sodium chloride 溶液及 3 g calcium gluconate 後，生命徵象仍呈現低血壓：血壓 90/50 mm Hg、心率 107 次 / 分、呼吸 17 次 / 分。生化檢驗： Na 141 mEq/L、鉀離子（K） 2.5 mEq/L、 Cl 101 mEq/L、 HCO3 24 mEq/L、 血中尿素氮（blood urea nitrogen, BUN） 19 mg/dL、 血清肌酸酐（serum creatinine, SCr） 0.9 mg/dL、隨機血糖 215 mg/dL。急診醫師決定啟動高劑量 insulin 正常血糖療法（high-dose insulin euglycemia therapy, HIET）。\n\n在正式推注與輸注高劑量 insulin （high-dose insulin euglycemia therapy, HIET）前，臨床藥師最應提醒團隊優先執行的關鍵安全處置為何？",
      "options": [
        "A. 立即給予 regular insulin 1 unit/kg 靜脈推注。",
        "B. 立即給予 50% dextrose 注射液（D50W） 50 mL 靜脈推注。",
        "C. 警告醫師 高劑量 insulin 正常血糖療法（high-dose insulin euglycemia therapy, HIET）需 30 分鐘才能起效，故應放棄 HIET 改用其他療法。",
        "D. 立即給予 potassium chloride 20 mEq 靜脈輸注每小時一次，共給予四劑（先積極補鉀將血鉀升至安全範圍）。"
      ],
      "answer": "D",
      "explanation": "高劑量 insulin 正常血糖療法（high-dose insulin euglycemia therapy, HIET）的基本機制是藉由超生理劑量 insulin 促進心肌細胞對碳水化合物之攝取與能量利用，但高濃度 insulin 會強力驅使細胞外鉀離子進入細胞內，引發劇烈且可能致死的『急性低血鉀（severe hypokalemia） 』。該病患在治療前的血鉀已處於危險的 2.5 mEq/L 極低水準，若此時直接給予 1 unit/kg insulin 負荷量，血鉀會進一步崩跌並誘發致命性惡性心室心律不整甚至心跳停止！毒物學準則明確規定：啟動 HIET 前若血鉀 < 3.0 mEq/L，必須『立即優先補充鉀離子』直至血鉀安全後方可開始 insulin（選項 D 正確；選項 A 錯誤）。病患血糖已達 215 mg/dL，初始無需額外推注 D50W （選項 B 錯誤）。起效需 15–30 分鐘為正常生理延遲，非放棄 HIET 之理由（選項 C 錯誤）。\n\n【教材出處】PDF 第 20 章，Q327。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 20,
        "question": 327,
        "type": "SAQ",
        "number": 7
      }
    },
    {
      "id": 8,
      "question": "【臨床案例】承接上述 amlodipine 中毒女性病患，在啟動 高劑量 insulin 正常血糖療法（high-dose insulin euglycemia therapy, HIET）後反應仍不理想。當前 insulin 輸注速率已達 1 unit/kg/h，但病人血壓持續低下為 70/40 mm Hg，且心率減慢至 58 次 / 分。複測血糖為 186 mg/dL。\n\n針對該名對初階 高劑量 insulin 正常血糖療法（high-dose insulin euglycemia therapy, HIET）劑量反應不足且頑固性休克惡化的二氫吡啶類 鈣離子通道阻斷劑（calcium channel blocker, CCB）中毒病人，下一步處置何者最為適當？",
      "options": [
        "A. 立即停止 高劑量 insulin 正常血糖療法（high-dose insulin euglycemia therapy, HIET），改為單獨啟動 norepinephrine。",
        "B. 繼續維持 高劑量 insulin 正常血糖療法（high-dose insulin euglycemia therapy, HIET）並向上調高 insulin 輸注速率（滴定至 2–10 unit/kg/h），並同時併用 norepinephrine 靜脈輸注。",
        "C. 繼續維持 高劑量 insulin 正常血糖療法（high-dose insulin euglycemia therapy, HIET），但優先啟動 epinephrine 單藥輸注。",
        "D. 立即停止 高劑量 insulin 正常血糖療法（high-dose insulin euglycemia therapy, HIET），全面改用靜脈脂肪乳劑（Intravenous Lipid Emulsion, ILE）治療。"
      ],
      "answer": "B",
      "explanation": "在重度 鈣離子通道阻斷劑（calcium channel blocker, CCB）中毒治療中， 高劑量 insulin 正常血糖療法（high-dose insulin euglycemia therapy, HIET）具有顯著的劑量依賴性，初始輸注劑量通常為 1 unit/kg/h，若血行動力學未達標，指引推薦每 15–20 分鐘逐步向上滴定 insulin 輸注速率（最高可達 2–10 unit/kg/h 甚至更高），絕不可因初期反應不足便過早中斷 HIET （排除選項 A、 D）。在等待 HIET 充分發揮心肌代謝改善效應的過渡期間，病患呈現嚴重血管擴張性休克（amlodipine 主要阻斷周邊血管 L- 型鈣通道），首選的血管活性藥物為 『norepinephrine 』，可強力收縮周邊血管以提升血管阻力與灌流壓； epinephrine 則通常保留用於 norepinephrine 難治之合併重度心因性收縮力衰竭時（選項 B 正確；選項 C 錯誤）。靜脈脂肪乳劑（ILE）為最後一線挽救療法，不應在常規升壓劑未優化前直接停用 HIET （選項 D 錯誤）。\n\n【教材出處】PDF 第 20 章，Q328。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 20,
        "question": 328,
        "type": "SAQ",
        "number": 8
      }
    },
    {
      "id": 9,
      "question": "【臨床案例】一名 53 歲男性（身高 74 吋，體重 97 kg）因意識混亂與定向力喪失送至急診。病人完全無法提供任何病史或自身狀況。就醫生命徵象：血壓 85/50 mm Hg、心率 120 次 / 分、呼吸 28 次 / 分、體溫 37.3°C。理學檢查在其口袋內發現一個無標籤的藥瓶，內剩 2 顆不明藥錠，強烈懷疑藥物過量中毒。\n\n針對該名生命徵象不穩定且神智不清的急性疑似中毒病患，醫療團隊此時最應優先執行的第一步處置為何？",
      "options": [
        "A. 立即送驗定量尿液藥物篩檢（quantitative urine drug screen）。",
        "B. 首要穩定病患之呼吸道、呼吸與循環（Airway, Breathing, and Circulation, ABC）。",
        "C. 立即給予傳統昏迷雞尾酒療法（coma cocktail）。",
        "D. 立即透過藥物資料庫比對辨識該 2 顆不明藥丸之刻痕。"
      ],
      "answer": "B",
      "explanation": "急重症毒物學的核心最高鐵則是：『治療病人，而非治療毒物（Treat the patient, not the poison） 』。任何急性中毒病患到院時，最高優先級永遠是維持並穩定基本的生命機能 ABC （呼吸道暢通、足夠通氣換氣、以及建立靜脈通路給予輸液穩定血壓循環），該病患血壓 85/50 mm Hg 處於休克且呼吸急促，若未先穩定 ABC，病人隨時有呼吸驟停或循環崩潰危險（選項 B 正確）。藥物辨識、毒物檢驗與病史蒐集均應在 ABC 獲得充分保障後才依序展開（選項 A、 D 錯誤）。包含葡萄糖、 thiamine、 naloxone、 flumazenil 的傳統『昏迷雞尾酒』已不被現代急診醫學推薦盲目給予，應基於明確臨床評估（如指尖血糖、針尖樣瞳孔）針對性給藥，盲目給予 flumazenil 更可能誘發難治型抽搐（選項 C 錯誤）。\n\n【教材出處】PDF 第 20 章，Q329。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 20,
        "question": 329,
        "type": "Case",
        "number": 1
      }
    },
    {
      "id": 10,
      "question": "【臨床案例】一名 42 歲女性（身高 66 吋，體重 79.2 kg）因類流感症狀送至急診。症狀包含頭痛、鼻塞、嚴重噁心、頻繁嘔吐、瀰漫性腹痛及輕微意識模糊。病人自述因流感症狀在家按需服用 acetaminophen 500 mg 膠囊，但昨日剛買的一整瓶（約數十顆）在今日已全數吃完。就醫時意識清醒，血壓 135/90 mm Hg、心率 83 次 / 分、呼吸 18 次 / 分、體溫 38.8°C。入院時血清 acetaminophen 濃度為 100 mcg/mL， AST 560 IU/L， ALT 310 IU/L。\n\n急診醫師欲針對該名 acetaminophen 中毒病人制定一般處置，下列哪一項一般處置策略最具臨床指徵且適當？",
      "options": [
        "A. 經胃管給予 10% 檸檬酸鎂（magnesium citrate） 240 mL 單次瀉下。",
        "B. 持續穩定病患生命徵象並提供優質的支持性照護（Supportive care）。",
        "C. 立即進行洗胃（Gastric lavage）。",
        "D. 立即口服 activated charcoal 50 g 單次給藥。"
      ],
      "answer": "B",
      "explanation": "該病患服藥已超過數小時甚至一天，肝功能指針（AST/ALT）已顯著升高，進入急性 acetaminophen 中毒之中期（肝損傷期）。此時胃內早已完全排空與吸收，常規腸胃道去污染措施（如洗胃、activated charcoal）僅在服藥後 1–2 小時內才有微弱清除意義，超過時間給予 activated charcoal 並無效益（排除選項 D）；洗胃在現代毒物指引中常規不被推薦，極易引發食道穿孔與吸入性肺炎等嚴重併發症（排除選項 C）；檸檬酸鎂等瀉劑從未被證實能改善中毒預後（排除選項 A）。在此階段，首要且最關鍵之一般處置為密切監控器官功能、補充輸液、止吐以及提供優良的支持性照護，並立即安排專屬解毒劑治療（選項 B 正確）。\n\n【教材出處】PDF 第 20 章，Q330。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 20,
        "question": 330,
        "type": "Case",
        "number": 2
      }
    },
    {
      "id": 11,
      "question": "【臨床案例】承接上述 42 歲女性病人（體重 79.2 kg，約 80 kg）， acetaminophen 濃度高達 100 mcg/mL 且 AST 560 IU/L、 ALT 310 IU/L，伴隨劇烈噁心嘔吐，具有極高肝毒性壞死與急性肝衰竭風險。\n\n針對該病人之 acetaminophen 中毒，下列哪一項 acetylcysteine 給藥方案在劑量計算與給藥途徑上最為精確適當？",
      "options": [
        "A. 給予口服 acetylcysteine 負荷劑量 11,200 mg，隨後每 4 小時口服 5600 mg 共 17 劑。",
        "B. 給予靜脈注射 acetylcysteine 負荷劑量 11,200 mg，隨後每 4 小時靜脈注射 5600 mg 共 12 劑。",
        "C. 給予靜脈注射 acetylcysteine 12,000 mg 於 1 小時內輸注完畢；隨後 4000 mg 於 4 小時內輸注；接著 8000 mg 於 16 小時內輸注完畢（標準三階段靜脈輸注法）。",
        "D. 該病人血中濃度未達危急標準，目前無需給予 acetylcysteine 治療。"
      ],
      "answer": "C",
      "explanation": "該病患血中 acetaminophen 濃度高且已出現顯著肝炎（transaminitis），具有明確解毒劑給藥指徵（排除選項 D）。病人正經歷頻繁且嚴重的噁心嘔吐，口服 72 小時 NAC 方案會被反覆嘔出導致吸收失敗，故必須選擇『靜脈注射劑型（IV NAC） 』（排除選項 A）。標準 靜脈給藥（intravenous, IV） NAC 三階段給藥方案（依實際體重計算，本案 79.2 kg ≈ 80 kg）： （1）第一階段負荷量： 150 mg/kg 溶於 200 mL D5W 靜脈輸注 60 分鐘（80 kg × 150 mg/kg = 12,000 mg）； （2）第二階段維持量： 50 mg/kg 溶於 500 mL D5W 靜脈輸注 4 小時（80 kg × 50 mg/kg = 4000 mg）； （3）第三階段維持量： 100 mg/kg 溶於 1000 mL D5W 靜脈輸注 16 小時（80 kg × 100 mg/kg = 8000 mg）。總計 21 小時內給予 300 mg/kg。選項 C 之計算完全符合標準方案（選項 C 正確；選項 B 劑量與間隔錯誤）。\n\n【教材出處】PDF 第 20 章，Q331。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 20,
        "question": 331,
        "type": "Case",
        "number": 3
      }
    },
    {
      "id": 12,
      "question": "【臨床案例】一名 62 歲男性因噁心、呼吸急促及類流感症狀至急診就醫。病人意識清楚且能溝通，表示症狀在過去 2 天逐漸加重，期間自行服用複方綜合感冒藥。慢性病史有中風（長期服用 aspirin 325 mg PO QD）及高血壓（服用 amlodipine 5 mg PO QD）。生命徵象：血壓 135/82 mm Hg、心率 78 次 / 分、呼吸 29 次 / 分、體溫 37.9°C。 動脈血液氣體分析（arterial blood gas, ABG）報告： pH 7.52、 Pco2 25 mm Hg、 HCO3 20 mEq/L （呈現典型呼吸性鹼中毒）。抽血檢驗血清水楊酸（salicylate）濃度為 25 mg/dL。\n\n考量該病患已呈現早期水楊酸中毒之典型生理病理變化，下列哪一項治療介入策略最為適當？",
      "options": [
        "A. 大量 0.9% sodium chloride 溶液靜脈輸注。",
        "B. 緊急氣管內插管與機械通氣。",
        "C. sodium bicarbonate 靜脈輸注以進行尿液鹼化（urine alkalinization）。",
        "D. 緊急安排血液透析（Hemodialysis）。"
      ],
      "answer": "C",
      "explanation": "水楊酸（Salicylate）中毒會直接刺激延腦呼吸中樞，引發過度通氣（tachypnea）與呼吸性鹼中毒（pH 7.52, Pco2 25）；隨後會解偶聯線粒體氧化磷酸化，引發代謝性酸中毒。即使血清濃度處於 25 mg/dL （看似接近正常上限），但病人已出現顯著臨床中毒毒性（噁心、呼吸急促、酸鹼紊亂）。水楊酸為弱酸，在酸性環境中呈非離子化狀態易穿透血腦屏障進入中樞引發腦水腫；因此，最關鍵的治療是給予靜脈『sodium bicarbonate 』進行鹼化血液與尿液（目標尿液 pH 7.5–8.0），使水楊酸離子化被捕獲於尿液中加速排泄，並防止毒物滲透進入腦部（選項 C 正確）。病患神智清醒，貿然插管極易因無法匹配其代償性超高每分鐘通氣量而導致致命性酸中毒驟死（選項 B 錯誤）。血液透析保留給重度中毒（如濃度 >90–100 mg/dL、頑固性酸中毒、昏迷或腎衰竭），本案尚未達標（選項 D 錯誤）。\n\n【教材出處】PDF 第 20 章，Q332。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 20,
        "question": 332,
        "type": "Case",
        "number": 4
      }
    },
    {
      "id": 13,
      "question": "【臨床案例】一名 35 歲男性因外觀嚴重醉酒狀態被送至急診。病人神智清醒但僅能定向於人名。生命徵象：血壓 122/80 mm Hg、心率 82 次 / 分、呼吸 25 次 / 分。實驗室檢驗：血清乙醇（ethanol）濃度為 20 mg/dL，乙二醇（ethylene glycol）濃度高達 100 mg/dL （嚴重超標，致死性毒性風險）。\n\n針對該名重度乙二醇中毒病患，下列何者為當前最適當之首選特異性解毒劑？",
      "options": [
        "A. 甲吡唑（fomepizole）靜脈注射。",
        "B. 乙醇（Ethanol）靜脈持續輸注。",
        "C. 維生素 B1 （Thiamine）靜脈注射。",
        "D. 口服 activated charcoal 50 g。"
      ],
      "answer": "A",
      "explanation": "乙二醇（Ethylene glycol）本身毒性低，但經由醇脫氫酶（alcohol dehydrogenase, ADH）代謝為乙醇醛、乙醇酸及草酸後，會引發嚴重高陰離子隙代謝性酸中毒與草酸鈣腎小管壞死腎衰竭。 fomepizole 是 ADH 的高親和力競爭性抑制劑（對 ADH 親和力為乙醇的 8000 倍），給藥簡便、不引起意識抑制與低血糖、無需密集監測血中濃度，為有毒酒精（乙二醇與甲醇）中毒的國際首選黃金標準解毒劑（選項 A 正確）。乙醇輸注雖亦可阻斷 ADH，但容易引發中樞抑制、低血糖、靜脈炎且需頻繁監測血醇濃度，僅在缺乏 fomepizole 時作為二線備用（選項 B 錯誤）。 Thiamine 為代謝輔助因子，不能單獨作為解毒劑且不能延遲 fomepizole 給藥（選項 C 錯誤）。醇類分子小極性高，activated charcoal 完全不吸附，給予 activated charcoal 無效（選項 D 錯誤）。\n\n【教材出處】PDF 第 20 章，Q333。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 20,
        "question": 333,
        "type": "Case",
        "number": 5
      }
    },
    {
      "id": 14,
      "question": "【臨床案例】承接上述有毒酒精中毒病患，一名甲醇（methanol）中毒病患在接受 fomepizole 初始負荷劑量 15 mg/kg 靜脈注射後，因高滲透壓隙與嚴重酸中毒隨即啟動常規血液透析（hemodialysis）治療。\n\n考量血液透析對藥物清除率之顯著影響，在病患持續進行血液透析期間， fomepizole 之維持劑量與給藥頻率應如何調整？",
      "options": [
        "A. 維持 10 mg/kg 每 12 小時一次。",
        "B. 調增至 20 mg/kg 每 12 小時一次。",
        "C. 調整為 10 mg/kg 每 4 小時一次（或採連續維持輸注 1–1.5 mg/kg/h）。",
        "D. 調增至 20 mg/kg 每 4 小時一次。"
      ],
      "answer": "C",
      "explanation": "fomepizole 分子量小、水溶性高且蛋白結合率極低，在血液透析過程中會被透析膜高度清除。常規非透析狀態下 fomepizole 維持劑量為 10 mg/kg Q12H；但在進行血液透析期間，為防止血中濃度掉入無效治療範圍，其給藥間隔必須顯著縮短至『 10 mg/kg 每 4 小時一次』（或透析中採 1–1.5 mg/kg/h 持續輸注） （選項 C 正確；選項 A、 B、 D 錯誤）。當血液透析結束後，應再給予一劑維持量，隨後恢復為每 12 小時給藥一次。\n\n【教材出處】PDF 第 20 章，Q334。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 20,
        "question": 334,
        "type": "Case",
        "number": 6
      }
    },
    {
      "id": 15,
      "question": "【臨床案例】一名 52 歲男性因頭暈、嚴重頭痛送至急診。就診生命徵象：體溫 37.2°C、血壓 87/50 mm Hg、心率 58 次 / 分。家屬表示病人具高血壓與早期阿茲海默症病史；家屬帶來了 2 天前剛領取的 1 個月份處方藥瓶： diltiazem CD 120 mg/day （瓶內原本 30 顆僅剩 7 顆，短少 23 顆錠劑），以及 donepezil 5 mg 每日一次（once daily, QD） （剩 28 顆）。證實蓄意過量吞服大量長效緩釋型 diltiazem CD。\n\n針對該名過量服用大量長效緩釋劑型（extended-release）鈣離子阻斷劑的病患，下列哪一項腸胃道去污染（gastrointestinal decontamination）策略能提供最大的清除效益？",
      "options": [
        "A. 每小時給予 activated charcoal 25 g 直至血壓改善。",
        "B. 給予吐根糖漿（Ipecac） 30 mL，隨後給予 240 mL 溫水催吐。",
        "C. 經胃管給予聚乙二醇電解質溶液（PEG-ELS） 1500–2000 mL/h 實施全腸道灌洗（Whole Bowel Irrigation, WBI），直至直腸排泄液完全澄清。",
        "D. 給予檸檬酸鎂 240 mL 單次給藥。"
      ],
      "answer": "C",
      "explanation": "長效緩釋劑型藥物（如 diltiazem CD/ER）在腸道內具有持續緩慢溶解釋放特性，且容易在腸道中形成藥物凝塊（bezoar）。對於過量吞服具有潛在致死風險的大劑量緩釋錠劑（服藥數小時內且氣道安全），全腸道灌洗（Whole Bowel Irrigation, WBI）使用等滲透壓的 PEG-ELS 溶液（成人速度 1500–2000 mL/h）能機械性沖刷整個腸胃道，在藥物完全吸收前迅速將整顆緩釋微粒排出體外，為指引唯一具明確適應症的去污染手段（選項 C 正確）。activated charcoal 多次給藥僅適用於具腸肝循環藥物（如 theophylline、 carbamazepine、 dapsone）， diltiazem 無腸肝循環（選項 A 錯誤）。 Ipecac 催吐在現代醫學已全面被廢棄禁用（選項 B 錯誤）。單獨使用鹽類瀉劑無清除效益（選項 D 錯誤）。\n\n【教材出處】PDF 第 20 章，Q335。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 20,
        "question": 335,
        "type": "Case",
        "number": 7
      }
    },
    {
      "id": 16,
      "question": "【臨床案例】承接上述過量吞服長效緩釋 diltiazem CD 併發心搏過緩（HR 58 次 / 分）與低血壓休克（BP 87/50 mm Hg）的 52 歲男性病人。\n\n在穩定氣道並建立靜脈通路後，醫療團隊欲給予解毒劑以提升心肌收縮力與血壓，下列哪一種解毒藥物最應優先第一線給藥？",
      "options": [
        "A. 10% calcium chloride 1 g 靜脈注射（經中心靜脈於 1–2 分鐘內推注）或 calcium gluconate 3 g 靜脈推注。",
        "B. 升糖素（glucagon） 5 mg 靜脈注射。",
        "C. 阿托品（atropine） 2 mg 靜脈注射。",
        "D. epinephrine 1 mg 靜脈注射。"
      ],
      "answer": "A",
      "explanation": "鈣離子阻斷劑（calcium channel blocker, CCB）中毒的首要一線特異性解毒劑即為靜脈『鈣劑（calcium） 』。外源性補充高濃度鈣離子能克服被拮抗的 L- 型電位敏感性鈣通道，促使鈣離子藉由濃度梯度內流進入心肌與血管平滑肌細胞，從而逆轉心肌抑制與血管擴張，提升血壓與傳導；優先給予 10% calcium chloride 1 g （或 calcium gluconate 3 g）靜脈推注，必要時可重複或維持輸注（選項 A 正確）。 glucagon 主要用於 β 受體阻斷劑（beta-blocker）中毒，對 鈣離子通道阻斷劑（calcium channel blocker, CCB）中毒療效微弱且極易誘發嘔吐，非首選（選項 B 錯誤）。 atropine 單次劑量不應超過 1 mg 且對 CCB 誘發之房室傳導阻滯療效短暫（選項 C 錯誤）。 epinephrine 1 mg 為心跳停止急救劑量，在仍有心跳血壓之病人身上推注 1 mg 屬於致命性過量（選項 D 錯誤）。\n\n【教材出處】PDF 第 20 章，Q336。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 20,
        "question": 336,
        "type": "Case",
        "number": 8
      }
    },
    {
      "id": 17,
      "question": "【臨床案例】一名 21 歲男性因情緒問題，約在 2 小時前一次吞服了 30 顆 citalopram 20-mg 錠劑（總量 600 mg，屬於嚴重過量暴露），隨後由家屬送入急診。目前生命徵象穩定：血壓 125/85 mm Hg、心率 77 次 / 分、呼吸 15 次 / 分、體溫 37.1°C，神智清醒且無任何主訴不適。\n\n針對該名過量服用大劑量選擇性血清素再回收抑制劑（SSRI, citalopram）但當前無明顯症狀的病人，下列何者為最關鍵且必須立即執行的醫療處置？",
      "options": [
        "A. 預防性給予 lorazepam 2 mg 靜脈注射以防止癲癇發作。",
        "B. 預防性給予 Cyproheptadine 8 mg 口服以預防肌僵直。",
        "C. 立即覆蓋冰毯（cooling blanket）以預防血清素症候群相關之高體溫。",
        "D. 立即執行 12 導程心電圖（12-lead ECG）監測心臟傳導異常與 QTc 間期。"
      ],
      "answer": "D",
      "explanation": "在所有 SSRI 藥物中， citalopram 與 Escitalopram 具有極為獨特且危險的心臟心毒性：兩者均具有顯著的濃度依賴性心肌 IKr 鉀通道阻斷作用，在大劑量過量（尤其是 >300–600 mg）時極易引發嚴重的『 QTc 間期延長』，進而誘發致命性扭轉型室性心律不整（TdP）與心跳驟停。因此，即使病人目前外觀毫無症狀，到院第一時間必須立即完成 12 導程心電圖檢查，評估 QTc 與 QRS 寬度，並進行持續心電圖監護至少 8–12 小時（選項 D 正確）。 lorazepam 僅在出現活動性抽搐或嚴重躁動時使用，不推薦預防性給藥（選項 A 錯誤）。 Cyproheptadine 僅保留給已確診中重度血清素症候群且對苯二氮平類無效之病人，無預防性指徵（選項 B 錯誤）。物理表面降溫對血清素中毒之高熱效果有限，且病人目前體溫完全正常，無需盲目覆蓋冰毯（選項 C 錯誤）。\n\n【教材出處】PDF 第 20 章，Q337。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 20,
        "question": 337,
        "type": "Case",
        "number": 9
      }
    },
    {
      "id": 18,
      "question": "【臨床案例】一名 24 歲女性由室友陪同送至急診。室友表示病患平時健康，但今日『整個人反應極度遲鈍恍惚』。室友發現病患今日剛回診拿取的一整瓶 olanzapine 5 mg 錠劑處方，目前藥瓶已完全空瓶。理學檢查：病人對人、時、地定向力尚完整，但對話中反覆打瞌睡。生命徵象均穩定， 12 導程心電圖呈現輕度竇性心搏過速（sinus tachycardia）。\n\n針對該名服用非典型抗精神病藥物 olanzapine 過量但僅呈現輕微鎮靜症狀的病患，下列哪一項處置最為恰當？",
      "options": [
        "A. 給予乳酸林格氏液 500 mL 靜脈輸注。",
        "B. 給予 8.4% sodium bicarbonate 50 mL 靜脈推注。",
        "C. 給予 lorazepam 2 mg 靜脈推注。",
        "D. 安排臨床密切生命徵象與意識觀察至少 6 小時（或 6–8 小時）。"
      ],
      "answer": "D",
      "explanation": "非典型抗精神病藥物（如 olanzapine）過量引發的不良反應通常呈自限性，最常見為中樞神經鎮靜嗜睡、輕度抗膽鹼症狀（口乾、竇性心動過速）。該病人生命徵象完全平穩，心電圖無 QRS 增寬或惡性心律不整，無休克，無抽搐。因此，最佳處置策略為『在急診進行密切臨床觀察至少 6–8 小時』，追蹤其意識狀態與心律變化即可（選項 D 正確）。病人無低血壓脫水，無需額外擴容輸液（選項 A 錯誤）。sodium bicarbonate 僅在 quetiapine 等特定藥物引起 QRS 間期顯著延長（>100–120 ms）時才具有適應症，本案心電圖正常，嚴禁濫用（選項 B 錯誤）。病患已呈現過度嗜睡打瞌睡，給予鎮靜劑 lorazepam 會嚴重加深中樞抑制甚至導致氣道塌陷，為禁忌處置（選項 C 錯誤）。\n\n【教材出處】PDF 第 20 章，Q338。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 20,
        "question": 338,
        "type": "Case",
        "number": 10
      }
    },
    {
      "id": 19,
      "question": "【臨床案例】作為加護病房衛星藥局的臨床藥師，您接到心臟加護亞急性病房護理師的緊急求助電話。護理師發現一名男性病人突然陷入意識昏迷，經查核給藥紀錄發現該病人在 1 小時前因護理給藥疏失，誤服了鄰床病人的 glyburide 20 mg 錠劑。病人目前生命徵象穩定但呼之不應，即時床邊指尖血糖值僅為 37 mg/dL。\n\n針對該名已有既成靜脈通路且因磺醯尿素類降糖藥致突發重度低血糖昏迷的病人，此時最適當且迅速的緊急處置為何？",
      "options": [
        "A. 立即由口灌服 8 盎司（約 240 mL）高純度全脂牛奶。",
        "B. 立即給予 50% dextrose 注射液（D50W） 50 mL （含 25 g 葡萄糖）靜脈注射。",
        "C. 立即給予 octreotide 100 mcg 皮下注射。",
        "D. 立即給予 glucagon 1 mg 肌肉注射。"
      ],
      "answer": "B",
      "explanation": "病患目前呈現昏迷無意識（unconscious）且血糖暴跌至 37 mg/dL，處於隨時可能發生不可逆神經缺糖性腦病變或心律不整的極度危急狀態。在病人已具備靜脈通路的前提下，最首要且起效最快的急救措施為『立即靜脈推注 50% dextrose 注射液（D50W 50 mL） 』（選項 B 正確）。對於昏迷無意識病人，由口灌服任何食物或液體（如牛奶、果汁）會直接引發致死性誤吸與窒息，為絕對禁忌（選項 A 錯誤）。 octreotide 是磺醯尿素類中毒的重要解毒劑，但在急性深昏迷的瞬間，必須『先用靜脈高張葡萄糖將血糖迅速拉升至安全水平（>70 mg/dL） 』，隨後若出現葡萄糖無法維持之反覆低血糖時，再追加 octreotide 抑制 insulin 釋放，順序不可顛倒（選項 C 錯誤）。 glucagon 肌肉注射主要用於院外無靜脈通路的緊急備用，在已具備靜脈通路的院內環境中，靜脈推注葡萄糖起效更直接確實，且 glucagon 對磺醯尿素類可刺激額外 insulin 釋放，非首選途徑（選項 D 錯誤）。\n\n【教材出處】PDF 第 20 章，Q339。",
      "source": {
        "document": "ACCP_Critical_Care_Review_Study_Guide.pdf",
        "chapter": 20,
        "question": 339,
        "type": "Case",
        "number": 11
      }
    }
  ]
};

const allHighlights = {
  "1": `
    <div class="highlights-card">
      <h2 class="highlights-title">第一章 重點整理</h2>
      
      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>一、 發展歷史與重要里程碑 (Landmark Events & Growth)</h3>
        <ul class="highlight-list">
          <li><strong>起源與演進</strong>：1930年代建立首個 3 床 neurosurgical ICU；1960年代末臨床藥師進駐 ICU；1970年代起於各大 ICU (cardiovascular, pediatric 等) 建立藥師實踐模式。</li>
          <li><strong>專利期刊與組織</strong>：1982年 <em>Drug Intelligence and Clinical Pharmacy</em> 率先開設首個 <code>critical care therapeutics</code> 專欄。1989年成立 SCCM 臨床藥學分部，1992年成立 ACCP Critical Care PRN。</li>
          <li><strong>認證藥師成長</strong>：通過 <code>BCCCP</code> 認證專科藥師人數快速增長，至2022年已達約 3994 人。</li>
        </ul>
      </div>
      
      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>二、 專門領域之驗證與地位 (Validation & Scope)</h3>
        <ul class="highlight-list">
          <li><strong>執業定位指南</strong>：2000年發表 <em>Position Paper on Critical Care Pharmacy Services</em> 定義三級藥學照護，2020年簡化為 <strong>Essential (基本)</strong> 與 <strong>Desirable (理想)</strong> 兩類服務推薦。</li>
          <li><strong>多學科不可或缺性</strong>：2001年 ACCM 任務小組確立 <code>critical care pharmacy</code> 服務在 Level I 醫療中心為 <strong>"Essential" (必要核心成員)</strong>。</li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>三、 臨床成效實證研究 (Clinical Outcomes & Studies)</h3>
        <ul class="highlight-list">
          <li><strong>減少藥物不良事件 (ADEs)</strong>：<strong>Leape 於 1999 年發表在《JAMA》的地標性研究</strong>證實，藥師參與 ICU 跨領域共同查房 (interdisciplinary medical rounds) 能降低 <strong>66%</strong> 的 preventable ADEs。</li>
          <li><strong>降低藥費支出</strong>：藥師臨床介入能防範藥物不良反應，介入成本規避比值 (cost avoidance ratio) 可達 3.3:1 至 9.6:1。</li>
          <li><strong>改善感染症預後與栓塞</strong>：配置藥師的 ICU 中，敗血症 (sepsis) 死亡率顯著較低、住院天數 (LOS) 較短。藥師介入亦顯著降低 QTc 延長事件與栓塞死亡率。</li>
          <li><strong>推行治療計畫 (Protocols)</strong>：藥師推動 ICU 鎮靜計畫能縮短呼吸器使用天數，並縮短敗血症給藥延遲（由平均 427 分鐘降至 31 分鐘）。</li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>四、 執業標準與藥師角色 (Practice Standards & Educator)</h3>
        <ul class="highlight-list">
          <li><strong>照護標準流程 (JCPP/ACCP)</strong>：包含收集患者資料 ➔ 評估藥物療程 ➔ 制定優化計畫 ➔ 執行計畫 ➔ 追蹤評估與監測。</li>
          <li><strong>教育者使命</strong>：負責指導藥學生/住院藥師（透過 Role modeling, Coaching, Mentoring 等），並為 ICU 同事提供教育，以及對患者和家屬進行用藥指導。</li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>五、 教育訓練與專業培訓 (Training & Mentorship)</h3>
        <ul class="highlight-list">
          <li><strong>常規培訓途徑</strong>：首選為完成 <strong>PGY1 pharmacy practice residency</strong>，後續接續 <strong>PGY2 critical care residency</strong> 或 fellowship，並考取 BPS 認證 (BCCCP)。</li>
          <li><strong>非傳統培訓途徑</strong>：無 residency 者需藉由 3–4 年在 Level I 或 II ICU 內有監督的 mentored 臨床實踐，並持續研讀文獻以積累經驗。</li>
          <li><strong>導師關係 (Mentorship)</strong>：常規培訓之外，voluntary mentor-protégé 關係對藥師的長期專業成長有著最顯著的成功機率。</li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>六、 持續專業發展 (Continuing Professional Development - CPD)</h3>
        <ul class="highlight-list">
          <li><strong>CPD 核心循環</strong>：個人化、自我導向、反覆迭代的循環過程（Reflection 反思 ➔ Plan 計劃 ➔ Act 行動 ➔ Evaluate 評估 ➔ Portfolio 檔案紀錄）。</li>
          <li><strong>與 CPE 關係</strong>：CPE (持續藥學教育) 並非取代 CPD，而是 CPD 計畫中用以實現特定學習目標的工具。</li>
        </ul>
      </div>
    </div>
  `,
  "2": `
    <div class="highlights-card">
      <h2 class="highlights-title">第二章 重點整理</h2>
      
      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>一、 生物倫理學核心原則 (Bioethics & Regulations)</h3>
        <ul class="highlight-list">
          <li><strong>The Belmont Report 三大原則</strong>：
            <br>1. <strong>Respect for Persons（尊重人格）</strong>：維護尊嚴與自主權，需取得 <code>informed consent</code>。
            <br>2. <strong>Beneficence（行善）</strong>：風險最小化，利益最大化。
            <br>3. <strong>Justice（正義）</strong>：受試者招募與利益分配應公平對等。
          </li>
          <li><strong>Equipoise (臨床均勢)</strong>：臨床研究設計必須建立在對兩個比較治療療效存在真實「不確定性」的基礎上，否則不符倫理。</li>
          <li><strong>The Common Rule 2019 修訂</strong>：容許使用單一 <code>IRB</code> 進行多中心研究，簡化同意書形式，並對特定免除條件及生物樣本使用做出規範。</li>
        </ul>
      </div>
      
      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>二、 急重症知情同意與免除 (Informed Consent in ICU)</h3>
        <ul class="highlight-list">
          <li><strong>知情同意之挑戰</strong>：ICU 患者多因急性病情或鎮靜藥物喪失決策能力 (decisional capacity)，需使用 <code>UBACC</code> 量表評估，或依賴法定代理人 (Surrogates) 的代理同意。</li>
          <li><strong>Waiver of Informed Consent (免除知情同意)</strong>：適用於 <code>minimal risk</code>、旨在評估公共服務計畫，或不延誤急救性干預的緊急研究。</li>
          <li><strong>Exception from Informed Consent (EFIC)</strong>：緊急且無法在現場取得同意的非預期研究（如 prehospital status epilepticus 試驗），需先進行社區諮詢 (Community Consultation)。</li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>三、 試驗設計與實踐 (Study Design)</h3>
        <ul class="highlight-list">
          <li><strong>臨床證據等級</strong>：傳統金字塔頂端為 <code>Meta-analysis</code> 與 <code>RCT</code>，近期修改建議將具有高度一致性的 <code>RCT and Observational studies</code> 併入頂端。</li>
          <li><strong>Trial Enrichment (試驗富集)</strong>：
            <br>1. <strong>Prognostic enrichment</strong>：篩選出高預後事件率（如高死亡率）的患者。
            <br>2. <strong>Predictive enrichment</strong>：篩選出對特定生物學機制更有療效反應的患者（如具有特定發炎標記的 ARDS）。
          </li>
          <li><strong>Case-Control vs Cohort</strong>：
            <br>1. <strong>Case-control study</strong>：回顧性以 Outcome 分組，探索風險暴露。
            <br>2. <strong>Cohort study</strong>：以 Exposure 分組，觀察 Outcome。
          </li>
          <li><strong>Propensity Score Matching (PSM)</strong>：藉由平衡已觀測的 baseline covariates，使觀察性研究模擬 RCT。</li>
          <li><strong>缺失值 (Missing Data)</strong>：分為 <code>MCAR</code> (完全隨機缺失，偏差最小)、<code>MAR</code> (缺失與其他變量相關) 及 <code>MNAR</code> (缺失與變量本身相關)。</li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>四、 偏見與非劣效性試驗 (Bias & Noninferiority)</h3>
        <ul class="highlight-list">
          <li><strong>偏見 (Bias) 類型</strong>：
            <br>• <strong>Immortal time bias（不死時間偏誤）</strong>：因分組定義排除特定時間死亡的患者（不死的生存區間），導致虛高的生存率。
            <br>• <strong>Confounding by indication（適應症混雜）</strong>：由於患者病情程度決定用藥選擇，導致用藥與不良反應產生因果混淆。
          </li>
          <li><strong>Noninferiority Trial (非劣效性試驗)</strong>：旨在證明新藥「不比標準療法差」（不超過特定 Δ 邊界）。必須保證對照組的有效性，且偏向使用 ITT (Intention-to-treat) 分析。</li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>五、 統計分析檢定 selection (Statistical Analysis)</h3>
        <ul class="highlight-list">
          <li><strong>資料類型的檢定選用</strong>：
            <br>• <strong>Nominal (類目)</strong>：兩組獨立用 Chi-square/Fisher exact；兩組相關用 McNemar；多組獨立用 Chi-square，相關用 Cochran Q。
            <br>• <strong>Ordinal (順序)</strong>：兩組獨立用 Mann-Whitney U；兩組相關用 Wilcoxon signed rank；多組獨立用 Kruskal-Wallis，相關用 Friedman ANOVA。
            <br>• <strong>Continuous (連續)</strong>：Parametric 兩組獨立用 Student t-test，相關用 Paired t-test，多組用 ANOVA，單共變量用 ANCOVA。
          </li>
          <li><strong>迴歸模型 (Regression)</strong>：
            <br>• Continuous 依變量用 **Linear regression**。
            <br>• Categorical 依變量用 **Logistic regression**。
            <br>• Time-to-event 存活分析用 **Cox proportional hazards model**。
          </li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>六、 臨床實踐評估指標 (Clinical Applications)</h3>
        <ul class="highlight-list">
          <li><strong>效益與傷害指標</strong>：<code>NNT = 1 / ARR</code>，<code>NNH = 1 / Attributable Risk</code>。</li>
          <li><strong>Fragility Index (脆弱指數)</strong>：指將一個統計學顯著結果 (p < 0.05) 轉換為不顯著所需改寫的「非事件」個數。數值越小，代表結果越不穩定。</li>
          <li><strong>Surrogate Endpoints (替代指標)</strong>：如 CRP 等 biomarker，不能直接取代真實臨床終點（如 28-day mortality 或 ventilator-free days）。</li>
        </ul>
      </div>
    </div>
  `,
  "3": `
    <div class="highlights-card">
      <h2 class="highlights-title">第三章 重點整理</h2>
      
      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>一、 政策與程序之制定 (Policy & Procedure Development)</h3>
        <ul class="highlight-list">
          <li><strong>政策 (Policy)</strong>：設定執業標準或品質/合規措施的行動方針。政策說明「為什麼」(why)，規定「何事、何時、何人、何處」，屬於強制性，不遵守可能受懲處。例如：高警訊藥物清單及安全標準、藥師啟動之治療性品項自動互換。</li>
          <li><strong>程序 (Procedure)</strong>：以特定方式或順序執行的系列行動，說明如何實現政策的「如何做」(how)。需要組織委員會核准，並明示每位成員的職責。例如：中心靜脈導管置放、藥物事件通報流程。</li>
          <li><strong>臨床指引/協定 (Clinical Guidelines/Protocol)</strong>：協助特定臨床決策的實證聲明，通常為政策或程序的延伸。其屬於自主性（Voluntary），容許依臨床情境進行調整。</li>
        </ul>
      </div>
      
      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>二、 差異分析之實施 (Gap Analysis)</h3>
        <ul class="highlight-list">
          <li><strong>定義與目標</strong>：將當前實際執業模式與最佳實踐模式 (Best practice) 進行對照評估（實質 vs 潛在表現），以在實施最佳實踐前識別現存障礙。</li>
          <li><strong>核心步驟</strong>：識別現有流程 ➔ 確定當前預後 ➔ 確定理想預後 ➔ 確定達成理想預後的流程 ➔ 評估遵循或執行程度（完全、部分、進行中、無活動、不合規） ➔ 制定補救行動計畫 ➔ 優先排序需求並制定完成時限。</li>
          <li><strong>最佳實踐評估工具</strong>：文獻審查、從業人員調查（設計時應注意單一目標、簡短、匿名、無偏見等原則）、基準對照（如 ISMP 最佳實踐、TJC 目標、CMS 核心指標）。</li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>三、 品質保證與績效改善工具 (QA & QI/PI Tools)</h3>
        <ul class="highlight-list">
          <li><strong>品管核心概念</strong>：品質改善 (QI) 關注系統與流程，以預期預後為中心，採用團隊合作與數據決策，著眼於流程而非個人行為。</li>
          <li><strong>分析控制圖 (Control Charts)</strong>：設定上限與下限控制線。若變異在正常隨機變異內為「受控」(in control)，超出限制或出現非自然排列則為「失控」(out of control)。</li>
          <li><strong>品管分析工具箱</strong>：
            <br>• <strong>六標準差 (Six Sigma)</strong>：利用 <code>DMAIC</code> 流程（定義、測量、分析、改善、控制）減少流程缺陷與變異。
            <br>• <strong>精實生產 (LEAN)</strong>：以最少資源創造高品質，消除浪費（DOWNTIME：缺陷、過度生產、等待、未用人才、運輸、庫存、動作、額外加工）。工具包括價值流圖 (Value stream mapping) 及流程圖。
            <br>• <strong>PDSA 循環 (Plan-Do-Study-Act)</strong>：即時評估標準工作的改善模型，常結合 <code>A3</code> 視覺化管理工具。
            <br>• <strong>FMEA（失效模式與效應分析）</strong>：前瞻性評估，在流程實施前識別潛在失效點以防範未然。
            <br>• <strong>RCA（根本原因分析）</strong>：回顧性評估，在事件發生後系統性追溯根本原因，五問法 (Five Whys) 是其核心。
          </li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>四、 藥物使用評估 (Medication Use Evaluation - MUE)</h3>
        <ul class="highlight-list">
          <li><strong>MUE vs DUE</strong>：DUE 是針對特定藥物或疾病的標準化、準則基礎評估；MUE 範圍更廣，聚焦於優化藥物治療管理並直接改善患者預後。</li>
          <li><strong>品改框架 (FOCUS-PDSA)</strong>：Find 發現流程 ➔ Organize 組建團隊 ➔ Clarify 釐清知識 ➔ Understand 理解變異原因 ➔ Select 選擇改善方案 ➔ PDSA 執行。</li>
          <li><strong>選藥標準</strong>：高風險（高警訊）、高使用量、已知多 ADEs、易出錯、高成本、配方審查或短缺藥物。</li>
          <li><strong>MUE 實施</strong>：分為介入性（主動/前瞻性，藥師即時干預）與非介入性（回顧性病歷審查）。樣本量通常 20-30 例即足夠，但分析預後時可能需要 100 例以上。</li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>五、 臨床藥學服務之記錄與價值量化 (Documentation & Value)</h3>
        <ul class="highlight-list">
          <li><strong>記錄的重要性</strong>：在 EHR 中記錄藥師臨床介入，可提供臨床藥學服務 (CPS) 工作量及經濟/安全價值的佐證。</li>
          <li><strong>病歷記錄原則</strong>：被動/照會介入記錄應直接明確；主動/未經照會的介入應措辭溫和（如「可考慮」、「建議」），以給予醫師決策空間並避免法律責任。</li>
          <li><strong>記錄方法</strong>：採用標準格式如 <code>SOAP</code>、<code>TITRS</code> 或 <code>FARM</code>。</li>
          <li><strong>評估指標</strong>：ICU/住院住院天數 (LOS)、ICU 再住院率、死亡率、機械通氣天數、藥物安全（防止 ADEs 數）、直接成本（藥費節省）及間接成本。可利用 <strong>Overhage & Lukes Scale</strong> 進行介入嚴重程度與臨床衝擊的加權評估。</li>
        </ul>
      </div>
    </div>
  `,
  "4": `
    <div class="highlights-card">
      <h2 class="highlights-title">第四章 重點整理</h2>
      
      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>一、 藥物經濟學概述與成本分析 (Pharmacoeconomics & Costs)</h3>
        <ul class="highlight-list">
          <li><strong>定義</strong>：辨識、測量並比較藥物或藥學服務的「成本」與「效果/後果」。</li>
          <li><strong>成本 vs 收費</strong>：收費 (Charges) 是成本 (Costs) 加上利潤及加成，文獻中常混用，但經濟學上成本才反映真實資源消耗。</li>
          <li><strong>成本類型</strong>：
            <br>• <strong>直接醫療成本</strong>：與疾病預防/診斷/治療直接相關。可分為<strong>固定成本</strong>（如 salaried 員工、租金，不隨服務量變動）與<strong>變動成本</strong>（如藥費、檢驗費，隨服務量改變）。
            <br>• <strong>直接非醫療成本</strong>：患者因病產生的非醫療開銷（如往返醫院交通費、家屬照護費、嬰兒託管費）。
            <br>• <strong>間接成本</strong>：因患病或死亡導致的勞動力/生產力損失（如無法上班折損的薪資）。
            <br>• <strong>無形成本</strong>：無法以貨幣衡量的生理/心理痛苦（如 ICU 生存者的創傷後壓力症 PTSD 痛苦）。
            <br>• <strong>增量成本 (Incremental cost)</strong>：為獲得額外療效所追加的成本。
          </li>
        </ul>
      </div>
      
      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>二、 藥物經濟學分析方法 (Evaluation Methods)</h3>
        <ul class="highlight-list">
          <li><strong>成本分析 (Cost Analysis)</strong>：僅比較成本，不評估效果。在療效未知時比 CMA 更具適用性。</li>
          <li><strong>成本效益分析 (Cost-Benefit Analysis - CBA)</strong>：成本與效果皆以貨幣衡量，可計算淨效益或投資報酬率。困難在於需將臨床效果轉化為金錢。</li>
          <li><strong>成本效果分析 (Cost-Effectiveness Analysis - CEA)</strong>：成本以貨幣衡量，效果以臨床自然單位衡量（如存活年數、血壓降低值）。計算增量成本效果比 (ICER)。</li>
          <li><strong>成本極小化分析 (Cost-Minimization Analysis - CMA)</strong>：在比較療效已證實相同的藥物時（如學名藥或生物相似藥），僅比較兩者的成本以選出最便宜者。</li>
          <li><strong>成本效用分析 (Cost-Utility Analysis - CUA)</strong>：效果以生活品質或偏好衡量，最常用 <strong>QALYs（品質調整壽命年）</strong>。QALY = 生存年數 × 生活品質權重 (Utility，1.0 代表完全健康，0.0 代表死亡)。</li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>三、 藥物相關事件之定義與分級 (Drug-Related Events)</h3>
        <ul class="highlight-list">
          <li><strong>用藥錯誤 (Medication Error)</strong>：藥物使用流程中的任何失誤。未達到患者的錯誤稱為「近乎錯失」(Near miss)。依 NCC MERP 嚴重度分為 A（無錯誤）到 I（導致死亡）九類。</li>
          <li><strong>藥物不良事件 (Adverse Drug Event - ADE)</strong>：任何因藥物使用導致的傷害，範圍較廣，包含 ADR、過量及給藥錯誤。約 30%-50% 的 ADE 是可預防的 (Preventable ADE)。</li>
          <li><strong>藥物不良反應 (Adverse Drug Reaction - ADR)</strong>：正常劑量下，藥物產生的有害且非預期的反應。WHO 定義包含療效失敗，而 Karch & Lasagna 定義則排除療效失敗。</li>
          <li><strong>FDA 嚴重 ADE 回報標準</strong>：導致死亡、危及生命、需住院或延長住院、永久殘疾、先天畸形，或需要介入以防器官受損。</li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>四、 安全監測與決策警報 (Surveillance & CDS Alerts)</h3>
        <ul class="highlight-list">
          <li><strong>示蹤/追蹤藥物 (Tracer/Trigger Drugs)</strong>：用以治療特定藥物過量或副作用的藥物，常作為 ADE 篩檢指標。例如：Naloxone（解阿片過量）、維生素 K（解華法林過量）、PCC（解 apixaban/rivaroxaban 相關出血，答案 D 正確）。</li>
          <li><strong>警報疲勞 (Alert Fatigue)</strong>：頻繁的臨床決策警示導致醫療人員麻木並輕易忽略警報。ICU 的警報覆蓋率高達 80%，不當覆蓋會顯著增加 preventable ADE 風險。</li>
          <li><strong>因果關係評估量表</strong>：
            <br>• <strong>Naranjo 評估表</strong>：評估藥物與單一 ADR 之間因果關係可能性的黃金標準。
            <br>• <strong>DIPS 評估表</strong>：基於 Naranjo 修改，專門用於評估「藥物交互作用」引起不良事件的因果關係。<strong>Naranjo 不應適用於交互作用案</strong>。
          </li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>五、 藥品集加入與評估流程 (Formulary Management)</h3>
        <ul class="highlight-list">
          <li><strong>新藥 Monograph 評估要素</strong>：品名、適應症、臨床試驗證據、安全性（ADRs/ADEs）、成本分析、經濟評估、限制使用標準（限制特定人群、特定醫師）。</li>
          <li><strong>實效性評估 (MUE)</strong>：新藥加入藥品集後，推薦於 <strong>3-6 個月內及 1 年時</strong>進行藥物使用評估 (MUE)，以在真實世界中評估其實際療效 (effectiveness，非單純的臨床試驗療效 efficacy)、合規性及安全性。</li>
        </ul>
      </div>
    </div>
  `,
  "5": `
    <div class="highlights-card">
      <h2 class="highlights-title">第五章 重點整理</h2>
      
      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>一、 水分與電解質平衡 (Fluids & Electrolytes)</h3>
        <ul class="highlight-list">
          <li><strong>體水分分佈 (TBW)</strong>：約佔男性體重 60%，女性 50%。老年人與肥胖者比例更低。TBW 的 60% 位於細胞內液 (ICF)，40% 位於細胞外液 (ECF，其中 75% 為組織間液，25% 為血漿)。</li>
          <li><strong>每日水分需求估算</strong>：
            <br>• 體重基礎估算：30–35 mL/kg/day。
            <br>• Holliday-Segar 公式：前 10 kg 給予 100 mL/kg，次 10 kg 給予 50 mL/kg，其後每公斤給予 20 mL/kg。
            <br>• 發燒影響：體溫高於 37°C 時，每升高 1°C 不顯性失水增加 10%–15%。
          </li>
          <li><strong>電解質分佈</strong>：細胞外液主成分為 Na+ (140 mEq/L) 和 Cl- (104 mEq/L)；細胞內液主成分為 K+ (160 mEq/L) 和 HPO4(2-) (54 mEq/L)。</li>
        </ul>
      </div>
      
      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>二、 鈉離子失衡之臨床管理 (Sodium Disorders)</h3>
        <ul class="highlight-list">
          <li><strong>低血鈉 (Hyponatremia)</strong>：
            <br>• <strong>張性分類</strong>：高張性（高血糖，血糖每增加 100 mg/dL，血鈉降約 2.4 mEq/L）、等張性（假性低血鈉如高血脂）、低張性（真性低血鈉）。
            <br>• <strong>低張性分類</strong>：高容積性（水鈉皆增加，水增加更多，如心衰、腎衰）、等容積性（水增加，鈉正常，如 SIADH）、低容積性（水鈉皆減少，鈉減少更多，如腹瀉、嘔吐）。
            <br>• <strong>重度/急性低血鈉治療</strong>：出現抽搐或意識模糊時，應立即給予 <strong>3% NaCl 超張生理食鹽水</strong>（通常以 150 mL 靜脈沖洗 3 次，或以 20 mL/hr 持續輸注），限制首日血鈉上升速度不超過 <strong>10 mEq/L/24hr</strong>，避免引發致命的滲透性脫髓鞘症候群 (ODS)。
            <br>• <strong>SIADH 治療</strong>：首選療法為限制水分。
          </li>
          <li><strong>高血鈉 (Hypernatremia)</strong>：反映水分缺乏。治療首選補充自由水（經腸道給水或靜脈輸注 D5W），限制血鈉降低速度為每日 <strong>6–8 mEq/L</strong>（不超過 10-12 mEq/L），以防腦水腫。</li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>三、 其他重要電解質管理 (Potassium, Magnesium, Calcium, Phosphorus)</h3>
        <ul class="highlight-list">
          <li><strong>鉀離子 (Potassium)</strong>：
            <br>• <strong>低血鉀</strong>：治療首選口服補充，因為腸道有 feed-forward 機制，能刺激腎臟排鉀，比靜脈輸注安全得多。靜脈輸注速度限 10 mEq/hr（無監護儀）至 20 mEq/hr（有連續心電圖監護）。
            <br>• <strong>頑固性低血鉀</strong>：常與低血鎂並存。<strong>缺鎂會導致腎臟集尿管排鉀增加，必須先糾正低血鎂</strong>。
            <br>• <strong>高血鉀治療</strong>：1. 穩定心肌（葡萄糖酸鈣）；2. 促進細胞內轉移（胰島素+葡萄糖、碳酸氫鈉、吸入型阿布特羅）；3. 促進排除（排鈉利尿劑、SZC 鉀離子結合劑、血液透析）。
          </li>
          <li><strong>鎂離子 (Magnesium)</strong>：低血鎂常見於酗酒、嚴重腹瀉。靜脈注射鎂後，<strong>需要 4–5 天才能完全重新分佈並平衡細胞內的鎂庫</strong>。</li>
          <li><strong>鈣離子 (Calcium)</strong>：大量輸血時，抗凝劑檸檬酸鹽 (Citrate) 會螯合游離鈣，是低血鈣的最主要病因。補鈣首選葡萄糖酸鈣，因為氯化鈣滲漏會引發嚴重組織壞死（僅限心肺復甦等急救使用）。</li>
          <li><strong>磷離子 (Phosphorus)</strong>：低血磷會引發隔肌無力、呼吸衰竭。CRRT 患者常需額外補磷。</li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>四、 酸鹼平衡障礙 (Acid-Base Disorders)</h3>
        <ul class="highlight-list">
          <li><strong>ABG 正常值</strong>：pH 7.35–7.45, Pco2 35–45 mmHg, HCO3 22–26 mEq/L。</li>
          <li><strong>代謝性酸中毒與陰離子間隙 (AG)</strong>：
            <br>• AG = Na - (Cl + HCO3)。常態為 3–14 mEq/L。白蛋白低時需校正：白蛋白每降 1 g/dL，正常 AG 降 2.5 mEq/L。
            <br>• <strong>高 AG 酸中毒原因 (A MUD PIE)</strong>：水楊酸、甲醇、尿毒症、DKA、副醛、乳酸酸中毒（A型組織灌流不足，B型藥物毒性如 metformin, linezolid, propofol 等）、乙二醇/乙醇。
            <br>• <strong>正常 AG (高氯性) 酸中毒原因 (ACCRUED)</strong>：氯化銨、氯攝入過多（如大量生理食鹽水復甦）、膽汁/胃腸液流失、RTA、尿路分流、內分泌、腹瀉。
          </li>
          <li><strong>混合酸鹼中毒評估</strong>：使用 Delta Ratio （$ΔAG/ΔHCO3$） 或 Excess Gap。
            <br>• Delta Ratio < 0.4：高氯性正常 AG 代酸。
            <br>• 1.0–2.0：單純高 AG 代酸。
            <br>• > 2.0：高 AG 代酸合併代鹼。
          </li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>五、 營養支持 (Nutrition Support)</h3>
        <ul class="highlight-list">
          <li><strong>EN vs PN 首選原則</strong>：首選腸內營養 (EN)，因為能維持腸道黏膜完整性並減少感染。腸麻痺 (Ileus) 是 EN 的禁忌症，但腸鳴音缺失非禁忌。</li>
          <li><strong>過度餵養 (Overfeeding) 之危害</strong>：葡萄糖輸入量不應超過 4–5 mg/kg/minute，過度餵養會導致二氧化碳產量增加（高碳酸血症，阻礙呼吸器脫離）、高血糖及脂肪肝。</li>
          <li><strong>能量需求估算</strong>：金標準為間接熱量計 (Indirect Calorimetry)。無條件時可使用預測公式（如 Mifflin-St. Jeor, Penn State 等）。一般重症患者推薦 25–30 kcal/kg/day。</li>
          <li><strong>蛋白質與微量元素需求</strong>：
            <br>• 蛋白質：重症推薦 1.2–2.0 g/kg/day，CRRT 患者可高達 2.5 g/kg/day。
            <br>• 鋅 (Zinc)：嚴重腹瀉時腸道流失增加，每天需額外補充 10 mg（共 13 mg/day）。
            <br>• 銅 (Copper) 與錳 (Manganese)：在膽汁淤積、高膽紅素血症患者中，由於排泄受阻，應密切監測，必要時暫停多種微量元素補充。
          </li>
        </ul>
      </div>
    </div>
  `,  "6": `
    <div class="highlights-card">
      <h2 class="highlights-title">第六章 重點整理：Infectious Diseases I</h2>
      
      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>一、 呼吸器相關肺炎 (Ventilator-Associated Pneumonia, VAP)</h3>
        <ul class="highlight-list">
          <li><strong>流行病學與風險因子</strong>：VAP 是指插管 > 48 小時後發生的肺炎。MDRO (MDRO) 風險因子包括：前 90 天內接受過靜脈抗生素治療、ARDS、敗血性休克、急性腎臟替代治療 (RRT) 及住院 >= 5 天。</li>
          <li><strong>經驗性抗感染原則</strong>：若無 MDRO 風險且當地Pseudomonas aeruginosa耐藥率 < 10%，可單用一種抗Pseudomonas aeruginosa β-lactam（如 Cefepime）；若有耐藥風險，應採用雙重抗Pseudomonas aeruginosa方案（如 Cefepime 聯合Tobramycin）並加用抗 MRSA 藥物（Vancomycin）。</li>
          <li><strong>治療療程</strong>：確切抗生素治療療程推薦為 <strong>7 天</strong>，適用於大部分無併發症的 VAP 患者。</li>
        </ul>
      </div>
      
      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>二、 中央導管相關血流感染 (CLABSI)</h3>
        <ul class="highlight-list">
          <li><strong>診斷方法</strong>：懷疑 CLABSI 時應同時送檢兩套血液培養（一套自導管抽取，一套自周邊靜脈），在拔除導管前完成。</li>
          <li><strong>經驗性治療</strong>：革蘭氏陽性（MRSE/MRSA）覆蓋首選Vancomycin，但應避免經驗性使用Linezolid（與不良預後相關）。高危患者需覆蓋Pseudomonas aeruginosa。</li>
          <li><strong>確切療程</strong>：無併發症的革蘭氏陰性桿菌 CLABSI 療程為 <strong>7–14 天</strong>（自首次血培養陰性起算）；合併感染性心內膜炎或血栓者需 4–6 週。</li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>三、 導管相關泌尿道感染 (CAUTI)</h3>
        <ul class="highlight-list">
          <li><strong>CDC/NHSN 定義</strong>：患者必須在出現症狀當天或前一天（24 小時內）置有尿道導管，否則不計為 CAUTI。</li>
          <li><strong>病原與治療</strong>：Escherichia coli 仍是最常見病原（約 30%）。若導管留置已 > 2 週且持續需要，啟動治療前應更換新導管。一般療程為 7 天（反應慢者 10–14 天）。</li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>四、 複雜腹腔內感染 (cIAI) 及急性胰臟炎</h3>
        <ul class="highlight-list">
          <li><strong>繼發性腹膜炎</strong>：源自胃腸道穿孔，嚴重患者（伴敗血性休克）感染革蘭氏陰性 MDRO 風險高，且小腸遠端/結腸穿孔需覆蓋Enterococcus和厭氧菌，Piperacillin/tazobactam是一線首選。</li>
          <li><strong>急性胰臟炎</strong>：早期壞死多為無菌性，<strong>不推薦常規使用預防性抗生素</strong>。僅在證實有感染性壞死（引流液革蘭氏染色或培養陽性）時啟動治療。使用Meropenem等穿透性佳的carbapenem類，若發現酵母菌應加用Fluconazole。</li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>五、 Clostridioides difficile感染 (CDI) 與壞死性軟組織感染</h3>
        <ul class="highlight-list">
          <li><strong>CDI 嚴重度分級與治療</strong>：
            <br>• 重度：WBC >= 15000 或 SCr > 1.5 mg/dL。首選Fidaxomicin 200 mg BID，次選口服Vancomycin 125 mg QID。
            <br>• 暴發性：伴有低血壓、休克、腸麻痺或巨結腸。首選高劑量口服Vancomycin (500 mg QID) 聯合靜脈Metronidazole (500 mg Q8H)，伴腸麻痺者加用直腸內Vancomycin灌注。
          </li>
          <li><strong>壞死性筋膜炎</strong>：外科急症，需立即手術清創。經驗性方案為 Pip/Tazo + Vancomycin + Clindamycin（Clindamycin 具抑制毒素產生作用，針對Streptococcus pyogenes尤為重要）。</li>
          <li><strong>SJS/TEN</strong>：藥物引起的表皮解離。治療關鍵為及時的<strong>晶體溶液液體復甦</strong>及支持照護。corticosteroids與 IVIG 的療效缺乏強烈實證，應遵循專業中心在地共識指引。</li>
        </ul>
      </div>
    </div>
  `
,  "7": `
    <div class="highlights-card">
      <h2 class="highlights-title">第七章 重點整理：Infectious Diseases II</h2>
      
      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>一、 外科手術預防性抗感染 (Surgical Prophylaxis)</h3>
        <ul class="highlight-list">
          <li><strong>給藥時機與劑量</strong>：預防性抗生素應在切口前 60 分鐘內給予（Vancomycin/氟喹諾酮為 120 分鐘內），術中每達 2 個半衰期（Cefazolin為 4 小時）追加一次。術後持續不超過 24 小時（心臟手術不超過 48 小時）。</li>
          <li><strong>肥胖調整</strong>：體重 >= 120 kg 的患者，Cefazolin 的初始預防劑量應增加至 <strong>3 g</strong>（而非 2 g）。</li>
        </ul>
      </div>
      
      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>二、 中樞神經系統感染與抗藥性管理</h3>
        <ul class="highlight-list">
          <li><strong>CNS 置入物感染</strong>：腦室分流器感染經驗性治療需覆蓋 MRSA 和Pseudomonas aeruginosa，Cefepime聯合Vancomycin為首選。Piperacillin/tazobactam因Tazobactam 的 BBB 穿透力差而不推薦。</li>
          <li><strong>ESBL 與 AmpC 產生菌</strong>：
            <br>• ESBL 產生菌（如攜帶 CTX-M 基因）：carbapenem類（如Meropenem）是嚴重感染的首選確切治療。
            <br>• AmpC 產生菌（如Enterobacter cloacae E. cloacae）：長期使用第三代cephalosporin易篩選出高產 AmpC 的去抑制突變株，一旦發生突破性感染，確切治療應改用carbapenem類。
          </li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>三、 重症抗真菌治療與機會性感染預防</h3>
        <ul class="highlight-list">
          <li><strong>Candidemia</strong>：快速診斷技術（如 PNA FISH）能早期鑑定菌種。Candida parapsilosis 感染確切治療的首選藥物為<strong>Fluconazole</strong>，而非棘白菌素類。</li>
          <li><strong>Invasive Pulmonary Aspergillosis (IPA)</strong>：首選為Voriconazole，但其靜脈配方中的賦形劑環糊精會在腎功能不全 (CrCl < 50 mL/min) 時蓄積。此時應改用新型三唑類<strong>Isavuconazole</strong> 靜脈注射。</li>
          <li><strong>HIV 相關機會性感染預防</strong>：CD4 < 100 cells/mm³ 且有Cryptococcus腦膜炎史的患者，需要 TMP/SMX 每日 1 顆 DS（預防 PCP/Toxoplasma gondii）聯合Fluconazole 200 mg 每日一次（Cryptococcus二級預防）。</li>
        </ul>
      </div>
    </div>
  `
,  "8": `
    <div class="highlights-card">
      <h2 class="highlights-title">第八章 重點整理：Pharmacokinetics & Pharmacodynamics</h2>
      
      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>一、 重症患者之藥物吸收 Alterations (Absorption)</h3>
        <ul class="highlight-list">
          <li><strong>皮下吸收障礙</strong>：休克與毛細血管滲漏導致液體大量瀦留（組織水腫），會顯著減少皮下注射藥物（如Enoxaparin）的吸收效率，導致 anti-Xa 活性低於預期及治療失敗。</li>
          <li><strong>腸道吸收阻礙因子</strong>：腹部手術（引發腸麻痺）、Pantoprazole等 PPI 治療（升高胃部 pH 值）及創傷性腦損傷 (TBI，延遲胃排空）是導致口服/腸道給藥吸收減少的關鍵因素。</li>
          <li><strong>胃部 pH 值對吸收的影響</strong>：使用 PPI 升高胃部 pH 值後，會減少Digoxin 在胃中的酸水解降解，進而<strong>增加</strong>Digoxin的吸收。</li>
        </ul>
      </div>
      
      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>二、 分佈體積之改變與臨床意義 (Distribution)</h3>
        <ul class="highlight-list">
          <li><strong>親水性藥物 Vd 增加</strong>：Vancomycin、氨基糖苷類及 β-lactam 類等親水性藥物，極易因重症患者的血管外補液瀦留（如 6 L 晶體復甦）而導致分佈體積 (Vd) 顯著增加，需調高負荷劑量。</li>
          <li><strong>脂溶性藥物 Vd 穩定</strong>：Levofloxacin 等脂溶性藥物分佈體積原本就極大，不受水腫或液體瀦留的顯著影響。</li>
          <li><strong>pH 對弱酸性藥物分佈的影響</strong>：在酸中毒 (pH 7.11) 狀態下，弱酸性藥物（如水楊酸）的非離子化（未解離）比例增加，更容易穿透細胞膜進入組織，使其分佈體積 (Vd) <strong>增加</strong>。</li>
          <li><strong>低白蛋白血症之蛋白結合影響</strong>：當白蛋白顯著降低時，高蛋白結合率藥物（如Phenytoin、Propofol）的游離分數 (fu) 增加。對於Phenytoin（低提取率），游離穩定狀態濃度 (Css,u) 保持不變，但總濃度 (Css) 顯著降低，臨床監測時必須校正總濃度。</li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>三、 代謝與排泄之影響因子 (Metabolism & Elimination)</h3>
        <ul class="highlight-list">
          <li><strong>高肝臟提取率藥物（如Morphine、Propofol）</strong>：其肝臟清除率完全取決於<strong>肝臟血流量</strong>。正壓機械通氣增加胸腔內壓會降低心輸出量並減少肝臟血流量，進而使Morphine等藥物的清除率下降，游離濃度升高。</li>
          <li><strong>低肝臟提取率藥物（如Diazepam）</strong>：其清除率取決於肝細胞代謝酶活性。敗血症產生的炎性細胞激素會下調 CYP2C19 等酶活性，與Fluconazole等 CYP 抑制劑聯用會降低Diazepam清除率並顯著增加鎮靜風險。</li>
          <li><strong>增強型腎臟清除 (ARC) 的消退</strong>：年輕重症患者感染初期腎排除極快（如Vancomycin清除增加），通常在第 7-10 天 ARC 會消退並恢復正常，若不調整劑量會導致藥物在體內蓄積及濃度驟升。</li>
          <li><strong>腎臟胰島素代謝與 AKI</strong>：腎臟是清除和代謝胰島素的主要器官，當發生 AKI 時，腎臟對胰島素的清除與代謝顯著減少，導致胰島素蓄積並顯著增加低血糖風險。</li>
        </ul>
      </div>
    </div>
  `,  "9": `
    <div class="highlights-card">
      <h2 class="highlights-title">第九章 重點整理：Acute Kidney Injury & Kidney Replacement Therapy</h2>
      
      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>一、 急性腎損傷 (AKI) 流行病學與分期標準</h3>
        <ul class="highlight-list">
          <li><strong>流行病學與病因</strong>：重症患者中 AKI 發生率高達 20%–60%。<strong>敗血症與休克</strong>是引發急性小管壞死 (ATN) 最常見的原因。</li>
          <li><strong>分期系統 (RIFLE, AKIN, KDIGO)</strong>：
            <br>• <strong>RIFLE</strong>：依血清肌酸酐 (SCr) 增加、GFR 下降或尿量 (UOP) 分為 Risk, Injury, Failure 三級，以及 Loss, End-stage 兩種預後。
            <br>• <strong>AKIN</strong>：引入了較小的 SCr 絕對上升值 (>= 0.3 mg/dL)，設定 48 小時時限，並移除 Loss/End-stage。接受 KRT 者自動歸為 Stage 3。
            <br>• <strong>KDIGO（現行黃金標準）</strong>：結合 RIFLE 與 AKIN 優勢，保留 48 小時內 SCr 上升 >= 0.3 mg/dL 或 7 天內上升 >= 50% 的標準。
          </li>
          <li><strong>呋塞米壓力測試 (Furosemide Stress Test, FST)</strong>：用於預測 AKI 進展。對於利尿劑初治 (naive) 患者給予 1 mg/kg，非初治患者給予 1.5 mg/kg 靜脈注射。若 <strong>2 小時內尿量 < 200 mL</strong> 則定義為測試陽性，預示 AKI 易惡化。</li>
        </ul>
      </div>
      
      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>二、 AKI 生物標記與藥物誘發性腎病 (DIKD)</h3>
        <ul class="highlight-list">
          <li><strong>功能性 vs 損傷性標記</strong>：SCr 和尿量屬於功能性標記（延遲反映損傷）。損傷標記包括 NGAL、KIM-1、L-FABP。細胞週期停滯標記 <strong>[TIMP-2]•[IGFBP7]</strong>（檢測值 > 0.3 提示高風險，在敗血性休克患者中，檢測值 > 2.0 與 30 天死亡率增加顯著相關）。</li>
          <li><strong>腎臟血流動力學改變與 "Triple Whammy"</strong>：
            <br>• <strong>Loop 利尿劑</strong>：導致血容量減少，降低腎灌注。
            <br>• <strong>NSAIDs</strong>：抑制前列腺素合成，阻礙入球小動脈 (afferent arteriole) 的擴張。
            <br>• <strong>ACEIs/ARBs</strong>：阻斷血管緊張素 II，阻礙出球小動脈 (efferent arteriole) 的收縮。
            <br>• <strong>Triple Whammy（三重打擊）</strong>：NSAIDs + 利尿劑 + ACEI/ARB 聯用，使腎絲球過濾壓急劇下降，極易誘發 AKI。
          </li>
          <li><strong>常見 DIKD 類型與病原藥物</strong>：
            <br>• <strong>急性間質性腎炎 (AIN)</strong>：常由青黴素、頭孢菌素、質子幫浦抑制劑 (PPI) 等引起。僅 10%–30% 患者出現典型的發燒、皮疹、嗜酸性粒細胞增多「三聯徵」。
            <br>• <strong>Pip/Tazo + Vancomycin 聯用</strong>：可導致以 SCr 定義的 <strong>"pseudo-toxicity"（假性毒性）</strong>。患者的 SCr 顯著上升，但反映真實 GFR 的 Cystatin C、BUN 或是死亡率、KRT 需求並無顯著增加。
            <br>• <strong>急性腎小管壞死 (ATN)</strong>：由氨基糖苷類、兩性黴素 B、Vancomycin等直接毒性引起。尿沉渣中可見「泥褐色管型」(muddy brown casts)。
            <br>• <strong>滲透性腎病 (Osmotic Nephrosis)</strong>：甘露醇、含蔗糖的靜脈免疫球蛋白 (IVIG)、右旋糖酐等導致腎小管上皮細胞空泡化。
            <br>• <strong>結晶性腎病 (Crystalluria)</strong>：Acyclovir、Methotrexate等在尿中溶解度低而析出結晶。
          </li>
          <li><strong>AKI 存活者照護</strong>：<strong>FUSION 試驗</strong>證實，對 stage 2-3 AKI 存活者進行早期腎臟專科隨訪及包裹式干預（藥物重整、監測腎功能），雖改善了照護流程，但 1 年時的重大急性腎臟事件 (MAKE) 發生率與常規照護相比無顯著差異。</li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>三、 腎臟替代治療 (KRT) 啟動指引與基本機制</h3>
        <ul class="highlight-list">
          <li><strong>傳統啟動指引 (AEIOU)</strong>：酸中毒 (Acidosis)、電解質紊亂 (Electrolytes，如頑固性高鉀)、中毒 (Intoxication)、容量超負荷 (Overload，利尿劑無效)、尿毒症 (Uremia)。</li>
          <li><strong>BICAR-ICU 試驗</strong>：對於嚴重代謝性酸中毒 (pH <= 7.2) 伴有重度 AKI 的重症患者，使用碳酸氫鈉能顯著降低 28 天死亡率並減少新啟動透析的需求。</li>
          <li><strong>KRT 啟動時機</strong>：<strong>STARRT-AKI 試驗</strong>證實，在無緊急適應症時，加速啟動 KRT 相比於標準等待啟動，在 90 天全因死亡率上無顯著差異，且加速組有更多與透析相關的不良事件。</li>
          <li><strong>溶質清除機制</strong>：
            <br>• <strong>對流 (Convection)</strong>：利用跨膜壓產生超濾液，並通過「溶質拖曳」(solute drag) 清除溶質。能有效清除中小分子（如細胞激素）。是 <strong>CVVH</strong> 的清除機制，需要補充置換液。
            <br>• <strong>擴散 (Diffusion)</strong>：利用半透膜兩側濃度差進行清除，清除小分子（MW < 500 Da）效率高。是 <strong>CVVHD</strong> 的清除機制，需要透析液 countercurrent 流動。
          </li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>四、 連續腎臟替代治療 (CRRT) 與藥物劑量調整</h3>
        <ul class="highlight-list">
          <li><strong>影響藥物清除的關鍵變數</strong>：蛋白結合率、分子量 (MW) 和分佈體積 (Vd)。結合率低、分子量小、分佈體積小者易被清除。</li>
          <li><strong>篩分係數 (Sieving Coefficient, SC) 估算</strong>：在對流清除中，SC 代表藥物穿透透析膜的能力。無實測數據時，可估算為游離分數：<code>SC = 1 - fb</code>（fb 為蛋白結合率）。</li>
          <li><strong>置換液給予位置對對流清除之影響</strong>：
            <br>• <strong>前稀釋 (Pre-dilution)</strong>：在濾器前加入置換液。會稀釋進入濾器的血液中藥物濃度，從而<strong>降低</strong>清除率。需使用校正因子：<code>Q_b / (Q_b + Q_rf)</code>（Q_b 為血流量，Q_rf 為前置換液流速）。
            <br>• <strong>後稀釋 (Post-dilution)</strong>：在濾器後加入。不稀釋血液，清除率即為 <code>Q_UF * SC</code>，效率較高但濾器易凝血。
          </li>
          <li><strong>抗凝選擇</strong>：首選<strong>局部檸檬酸抗凝 (RCA)</strong>，相比全身性肝素抗凝能顯著延長濾器壽命並減少出血風險。但需監測 Citrate 蓄積（特別是肝功能不全與休克患者，表現為總鈣/游離鈣比值 > 2.5）、酸鹼及電解質異常。</li>
        </ul>
      </div>
    </div>
  `
,  "10": `
    <div class="highlights-card">
      <h2 class="highlights-title">第十章 重點整理：Neurocritical Care</h2>
      
      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>一、 鈉離子失衡管理：SIADH vs CSWS 及高鈉血症</h3>
        <ul class="highlight-list">
          <li><strong>低血鈉病因鑑別</strong>：神經損傷（如 SAH/TBI）患者低血鈉發生率達 12%–43%。
            <br>• <strong>SIADH</strong>：等容/高容積性低血鈉。ADH 分泌過多導致自由水瀦留。治療一般限制水分（但 SAH/TBI 患者因有腦血管痙攣風險，需要維持充足血容量，因此<strong>禁用限水</strong>，通常需給予高張鹽水）。
            <br>• <strong>腦鹽流失症候群 (CSWS)</strong>：低容積性低血鈉。由於心房/腦利鈉肽增加導致腎臟排鈉排水。治療需補足水分與鈉鹽，可給予氟氫可的松 (Fludrocortisone) 0.1–0.4 mg/day 以減少鈉流失（需注意低血鉀副作用）。
          </li>
          <li><strong>低血鈉快速糾正與滲透性脫髓鞘 (ODS)</strong>：推薦糾正速度 <= 0.5 mEq/L/hour。重度症狀（如抽搐、昏迷）時，可於前 1–2 小時內提高血鈉 5 mEq/L，前 5 小時內最多 10 mEq/L。<strong>24 小時內限制上升 <= 12 mEq/L，48 小時內 <= 18 mEq/L</strong>。糾正過快會導致致命的 ODS。</li>
          <li><strong>高血鈉與尿崩症 (DI)</strong>：腦外傷或腦死易導致 ADH 分泌減少引發中樞性尿崩症。
            <br>• <strong>臨床特徵</strong>：排出大量（> 250 mL/hour）且稀釋的尿液。
            <br>• <strong>治療方案</strong>：補充自由水（D5W、口服給水）並給予 ADH 類似物：去氨加壓素 (Desmopressin, DDAVP) 靜脈/皮下 0.5–4 mcg Q8-12H，鼻噴 10–40 mcg/day，口服 50–800 mcg；或持續輸注精氨酸血管加壓素 (AVP) 1–15 units/hour。糾正高血鈉應緩慢，以防腦水腫。
          </li>
        </ul>
      </div>
      
      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>二、 癲癇重積狀態 (Status Epilepticus, SE) 藥物治療</h3>
        <ul class="highlight-list">
          <li><strong>定義</strong>：持續抽搐 >= 5 分鐘，或兩次抽搐間意識未完全恢復。</li>
          <li><strong>第一線治療（緊急控制，0–10 分鐘）</strong>：首選苯二氮平類。
            <br>• <strong>Lorazepam (IV)</strong>：0.1 mg/kg（單次最大 4 mg）。
            <br>• <strong>Midazolam (IM)</strong>：10 mg（單次，針對無靜脈通路患者的首選）。
            <br>• <strong>Diazepam (IV)</strong>：0.15–0.2 mg/kg（單次最大 10 mg）。
          </li>
          <li><strong>第二線治療（控制期，10–30 分鐘）</strong>：
            <br>• <strong>ESETT 試驗</strong>：證實丙戊酸 (Valproate) 40 mg/kg、磷妥英 (Fosphenytoin) 20 mg PE/kg 與左乙拉西坦 (Levetiracetam) 60 mg/kg 在二線控制的有效性與安全性上無顯著差異。
          </li>
          <li><strong>第三線治療（難治性，> 30 分鐘）</strong>：需插管並給予麻醉劑量持續輸注（Midazolam、Propofol或 Pentobarbital [負荷 25–30 mg/kg，維持 1–5 mg/kg/hour]）。</li>
          <li><strong>腦脊髓液 (CSF) 腦室內給藥</strong>：用於難治性/裝置相關性 CNS 感染（如 MRSE 腦室炎）。Vancomycin 10–20 mg/day，Gentamicin 4–8 mg/day。<strong>須使用無防腐劑配方，避免使用葡萄糖稀釋劑及 β-lactam 類（降低抽搐閾值）</strong>。</li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>三、 顱內壓 (ICP) 治療與重症支持照護</h3>
        <ul class="highlight-list">
          <li><strong>治療閾值</strong>：ICP 持續 > 22 mm Hg 需啟動治療。目標腦灌注壓 (CPP) 限制在 <strong>60–70 mm Hg</strong>。</li>
          <li><strong>脫水治療藥物比較</strong>：
            <br>• <strong>甘露醇 (Mannitol)</strong>：0.5–1 g/kg 靜脈輸注。透過滲透利尿降顱壓。會降低血容量與血壓，長期使用蓄積可能導致反彈性腦水腫，需監測滲透壓間隙 (Osmolar gap)，目標 gap < 20–30 mOsm/kg。
            <br>• <strong>高張鹽水 (Hypertonic Saline)</strong>：3% NaCl 2.5–5 mL/kg，23.4% NaCl 30 mL。增加血容量，無利尿作用。適用於腎功能不全或低血鈉患者。副作用為高氯性酸中毒，需監測血鈉與氯。
          </li>
          <li><strong>鎮靜藥物選用</strong>：<strong>Propofol (Propofol)</strong> 具快速起效和短半衰期，利於臨床暫停鎮靜以進行神經學評估。需注意低血壓與 PRIS 風險。</li>
          <li><strong>預防壓力性潰瘍出血</strong>：重度 TBI 患者是應激性潰瘍的高危人群。傳統首選 H2RA，但近期研究提示 PPI 可能更有效。</li>
          <li><strong>預防性抗癲癇藥物 (TBI/SAH)</strong>：
            <br>• TBI：推薦使用 Phenytoin 或 Levetiracetam 預防傷後早期（前 7 天內）癲癇發作；晚期（> 7 天）預防無效。
            <br>• SAH：不推薦常規使用預防性抗癲癇藥。Phenytoin 聯用會顯著增加不良預後，應避免使用。
          </li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>四、 腦血管事件 (Stroke & SAH) 與脊髓損傷 (SCI)</h3>
        <ul class="highlight-list">
          <li><strong>急性缺血性腦中風 (AIS)</strong>：
            <br>• <strong>Alteplase 靜脈溶栓</strong>：0.9 mg/kg (最大 90 mg) 於症狀發作 4.5 小時內給予。血壓必須控制在 <strong>< 185/110 mm Hg</strong> 才能啟動溶栓，溶栓後 24 小時內維持 <strong>< 180/105 mm Hg</strong>。
            <br>• <strong>Permissive Hypertension（允許性高血壓）</strong>：未接受溶栓或取栓者，除非血壓 > 220/120 mm Hg，否則不予降壓治療。
          </li>
          <li><strong>腦內出血 (ICH)</strong>：急性期降壓目標為 SBP 140–150 mm Hg (INTERACT-2, ATACH-2)。抗凝血劑逆轉：華法林引起的 ICH 首選 <strong>4F-PCC</strong> 聯合靜脈 Vit K；Xa 因子抑制劑（Rivaroxaban等）首選 4F-PCC 或 Andexanet Alfa。</li>
          <li><strong>動脈瘤性蛛網膜下腔出血 (aSAH)</strong>：
            <br>• <strong>預防血管痙攣</strong>：口服尼莫地平 (Nimodipine) 60 mg Q4H (或 30 mg Q2H) 持續 21 天。<strong>警示：黑盒子警告禁止靜脈注射（可致致命性低血壓）</strong>。
            <br>• <strong>治療血管痙攣</strong>：目前推薦維持等容量 (Euvolemia)，並使用去甲腎上腺素等升壓藥物誘導高血壓，以增加腦血流。不推薦 Triple-H（高血容量會引發肺水腫）。
          </li>
          <li><strong>急性脊髓損傷 (SCI)</strong>：
            <br>• <strong>灌注目標</strong>：術後 MAP 目標維持在 <strong>85–90 mm Hg</strong> 持續 7 天，以優化脊髓灌注。
            <br>• <strong>皮質類固醇角色</strong>：NASCIS 試驗顯示大劑量甲基強的松龍 (Methylprednisolone) 僅有微弱臨床獲益，卻顯著增加重症感染、消化道出血及死亡率。因此<strong>現行指引不推薦大劑量類固醇治療</strong>。
          </li>
        </ul>
      </div>
    </div>
  `,  "11": `
    <div class="highlights-card">
      <h2 class="highlights-title">第十一章 重點整理：Cardiovascular Critical Care I</h2>
      
      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>一、 心因性休克之血流動力學與藥物選擇</h3>
        <ul class="highlight-list">
          <li><strong>去甲腎上腺素 (Norepinephrine) vs 多巴胺 (Dopamine)</strong>：<strong>SOAP II 試驗</strong>證實，在心因性休克患者中，使用多巴胺與顯著較高的 28 天死亡率和顯著增加的心律不整發生率相關（24.1% vs. 12.1%）。因此，去甲腎上腺素是心因性休克的一線血管加壓藥，多巴胺因增加耗氧與心律不整風險而不推薦。</li>
          <li><strong>多巴酚丁胺 (Dobutamine) vs 米力農 (Milrinone)</strong>：<strong>DOREMI 試驗</strong>顯示兩者在心因性休克的療效（死亡率、心搏驟停、腎替代治療需求等）與安全性（心律不整率）上無顯著差異。藥物動力學上，多巴酚丁胺起效快、半衰期短（2 分鐘）；米力農半衰期長（3 小時），在腎功能不全時會蓄積且易導致低血壓，但對已使用 β受體阻滯劑或合併肺高壓患者較合適。</li>
          <li><strong>血管加壓素 (Vasopressin) 在右心衰竭之應用</strong>：Vasopressin 選擇性興奮 V1 受體收縮體循環血管提升 SVR，但對肺血管阻力 (PVR) 幾乎無影響，甚至可釋放 NO 擴張肺血管，非常適合用於肺高壓合併右心衰竭、容量過負荷的患者。</li>
        </ul>
      </div>
      
      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>二、 急性冠狀動脈綜合症 (ACS) 初始穩定與治療原則</h3>
        <ul class="highlight-list">
          <li><strong>氧氣治療限制</strong>：吸氧僅推薦用於氧飽和度 <strong>Sao₂ &lt; 90%</strong>、呼吸困難或高危缺氧患者。對於正常血氧患者，常規吸氧無臨床益處，甚至可能因血管收縮造成心肌潛在損害。</li>
          <li><strong>嗎啡 (Morphine) 使用警示</strong>：嗎啡會延遲胃排空，顯著降低口服 P2Y12 抑制劑（替格瑞洛、普拉格雷）的吸收和抗血小板活性。回顧性研究亦顯示嗎啡使用與死亡率升高相關，目前指引將其列為 IIb 推薦，不再作為首選止痛藥。</li>
          <li><strong>硝酸甘油 (NTG) 之禁忌症</strong>：NTG 禁用於：收縮壓 &lt; 90 mm Hg、嚴重低心率 (HR &lt;= 50)、心搏過速 (HR &gt;= 100 且無心衰)，以及<strong>懷疑右心室梗塞（下壁梗塞）</strong>之患者。右心梗塞高度依賴前負荷，使用 NTG 降低前負荷會導致突發性嚴重低血壓。</li>
          <li><strong>β受體阻滯劑 (BB) 啟動時機</strong>：應於 ACS 發作前 24 小時內啟動口服 BB，但必須排除心衰徵象、低心輸出量（心因性休克高風險：SBP &lt; 120, HR &gt; 110 或 &lt; 60, 年齡 &gt; 70）或有活動性休克狀態之患者。</li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>三、 口服抗血小板治療 (DAPT) 與心導管併發症</h3>
        <ul class="highlight-list">
          <li><strong>P2Y₁₂ 抑制劑藥物特點比較</strong>：
            <br>• <strong>氯吡格雷 (Clopidogrel)</strong>：前驅藥，需經 CYP2C19 代謝活化，基因多型性會顯著影響抗血小板療效，術前需停藥 5 天。
            <br>• <strong>普拉格雷 (Prasugrel)</strong>：前驅藥，抗血小板作用強，但<strong>禁用於有中風或 TIA 歷史</strong>的患者（出血風險極高），年齡 &gt;= 75 歲或體重 &lt; 60 kg 需減量或避免使用，術前需停藥 7 天。
            <br>• <strong>替格瑞洛 (Ticagrelor)</strong>：可逆性結合之非前驅藥，起效快。特異性不良反應為<strong>腺苷介導的呼吸困難 (dyspnea) 和緩慢型心律不整（心跳過緩）</strong>，術前需停藥 3 天。
          </li>
          <li><strong>導管入路比較與術後併發症</strong>：橈動脈入路（radial access）的出血風險顯著低於股動脈入路（femoral access）。經股動脈途徑術後 12 小時內需密切監測<strong>腹膜後出血 (retroperitoneal bleeding)</strong>，此併發症出血量大且隱蔽，可致致命性低血壓。</li>
          <li><strong>支架內血栓 (Stent Thrombosis)</strong>：若患者提前停用 DAPT，支架血栓發生率可達 25%，死亡率高達 45%。特別是術後 30 天內停藥，死亡風險將急劇升高。</li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>四、 瓣膜性心臟病與機械循環支持</h3>
        <ul class="highlight-list">
          <li><strong>主動脈瓣狹窄 (Aortic Stenosis, AS)</strong>：左心室流出道固定梗阻限制了每搏輸出量 (fixed stroke volume)，心輸出量極度依賴心率。應禁用強烈血管擴張劑（如降低後負荷 SVR 無法增加心輸出量，反而加重低血壓）並避免過度減慢心率。</li>
          <li><strong>二尖瓣反流 (Mitral Regurgitation, MR)</strong>：首要治療目標是<strong>降低左心室後負荷 (SVR)</strong>，以減少反流量並增加向前的前向心輸出量。</li>
          <li><strong>主動脈內氣囊反搏 (IABP) 適用性</strong>：IABP 藉由心臟收縮期放氣產生排空效應，能顯著降低後負荷，是合併二尖瓣反流 (MR) 的心因性休克患者的首選支持手段。而 <strong>VA-ECMO</strong> 因會增加後負荷，在此類患者中會加重二尖瓣反流。</li>
        </ul>
      </div>
    </div>
  `,"12": `
    <div class="highlights-card">
      <h2 class="highlights-title">第十二章 重點整理：Cardiovascular Critical Care II</h2>
      
      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>一、 進階心臟救命術 (ACLS) 與停搏抢救機制</h3>
        <ul class="highlight-list">
          <li><strong>高品質 CPR 標準</strong>：按壓速率為 <strong>100–120 次/分鐘</strong>，按壓深度在成人為 <strong>2–2.4 英吋 (5–6 cm)</strong>，每次按壓後必須允許胸壁完全回彈 (recoil)。每 2 分鐘（或 5 個循環）更換按壓人員以防疲勞，按壓中斷時間必須控制在 10 秒內。</li>
          <li><strong>呼吸與高級氣道管理</strong>：
            <br>• 未建立高級氣道前：按壓與通氣比例為 <strong>30:2</strong>，通氣時暫停按壓。
            <br>• 建立高級氣道（插管）後：胸部按壓改為持續進行，通氣改為非同步給予，速度為 <strong>每 6 秒 1 次（10 次/分鐘）</strong>，每次潮氣量以能看見胸壁起伏為準，避免過度通氣降低靜脈回流。
            <br>• 氣管插管位置確認：插管後必須結合雙側肺聽診（上腹部應無呼吸音）及<strong>呼氣末二氧化碳波形圖 (capnography)</strong> 進行客觀確認。
          </li>
          <li><strong>復甦藥物給藥重點</strong>：
            <br>• <strong>腎上腺素 (Epinephrine)</strong>：ACLS 核心藥物，1 mg IV/IO 每 3–5 分鐘（或每 4 分鐘，即每隔一次心律檢查）給予一次。
            <br>• <strong>胺碘酮 (Amiodarone)</strong>：針對電擊無效的 VF/pVT，首劑 300 mg IV/IO 推注，二劑 150 mg。若患者恢復自主心律 (ROSC) 後需預防復發，150 mg 負荷量必須以靜脈滴注輸注 10 分鐘，直接推注會導致嚴重的低血壓。
            <br>• <strong>利多卡因 (Lidocaine)</strong>：胺碘酮的替代藥，首劑 1–1.5 mg/kg，二劑 0.5–0.75 mg/kg。在缺血性心肌引起的室性心律不整中利多卡因更具選擇性且不降壓。
          </li>
          <li><strong>停搏可逆原因 (5H5T)</strong>：低血容量 (Hypovolemia)、缺氧 (Hypoxia)、酸中毒 (Hydrogen ion)、低/高血鉀 (Hypo/Hyperkalemia)、低體溫 (Hypothermia)；毒素 (Toxins)、心臟壓塞 (Tamponade)、肺栓塞 (Thrombosis, pulmonary)、冠狀動脈血栓 (Thrombosis, coronary)、張力性氣胸 (Tension pneumothorax)。</li>
        </ul>
      </div>
      
      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>二、 復甦後照護與目標溫度管理 (TTM)</h3>
        <ul class="highlight-list">
          <li><strong>血流動力學目標</strong>：ROSC 後的初始目標為：MAP 65–100 mm Hg、CVP 8–12 mm Hg、Scvo₂ &gt; 70%、尿量 &gt; 1 mL/kg/hour 及血乳酸正常。</li>
          <li><strong>目標溫度管理 (TTM) 指引</strong>：適用於 ROSC 後仍無意識（昏迷）的存活者。核心溫度目標設定在 <strong>32°C–36°C</strong> 之間，持續至少 <strong>12–24 小時</strong>。低溫能降低腦部耗氧，減輕再灌注損傷，改善神經學預後。</li>
          <li><strong>低溫期之生理改變與併發症監測</strong>：
            <br>• <strong> shivering (顫抖)</strong>：體溫調節的自然反射，會大幅增加耗氧並減慢降溫速度。可Scheduled給予乙醯胺酚、丁螺環酮、硫酸鎂；重度顫抖可給予哌替啶、右美托咪啶、丙泊酚或連續神經肌肉阻滯劑（肌鬆藥）。
            <br>• <strong>藥物代謝抑制</strong>：低溫顯著降低 CYP450 代謝酶活性。芬太尼、咪達唑侖、丙泊酚及苯妥英等藥物的清除率會下降 50% 以上，半衰期顯著延長，需下調劑量以防藥物蓄積和延遲醒來。
            <br>• <strong>電擊與代謝</strong>：低溫會導致冷利尿及電解質向細胞內轉移（低鉀、低鎂），需注意再溫（rewarming）時電解質會反向移出，易發生高血鉀。低溫亦會減少胰島素分泌，導致高血糖。
          </li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>三、 Hypertensive Crisis (高血壓急症與緊迫)</h3>
        <ul class="highlight-list">
          <li><strong>定義鑑別</strong>：
            <br>• <strong>高血壓緊迫 (Hypertensive Urgency)</strong>：BP &gt;= 180/110 mm Hg，<strong>無</strong>急性靶器官損害徵象。治療使用口服降壓藥，在 24–48 小時內緩慢降壓即可，不需要入住 ICU。
            <br>• <strong>高血壓急症 (Hypertensive Emergency)</strong>：BP 急劇升高且<strong>伴有</strong>急性靶器官受損（如主動脈剝離、腦出血、急性肺水腫、心肌梗塞、急性腎衰竭、子癇/前兆子癇、視網膜病變等）。需要立即置入 ICU 並給予靜脈可滴定藥物降壓。
          </li>
          <li><strong>血壓控制目標</strong>：
            <br>• <strong>一般急症</strong>：第一小時內降低 MAP 不超過 25%（以防腦灌注不足），隨後 2–6 小時降至 160/100–110 mm Hg，前 24 小時內維持，隨後過渡到口服藥。
            <br>• <strong>急性主動脈剝離 (Aortic Dissection)</strong>：<strong>特例，降壓要求極快且極低</strong>。必須在數分鐘內將心率控制在 <strong>&lt; 60 次/分鐘</strong>，收縮壓控制在 <strong>&lt; 120 mm Hg（或 &lt; 100 mm Hg）</strong>。必須<strong>先給予靜脈 β受體阻滯劑（如艾司洛爾 Esmolol）</strong>降低剪切力 (shear stress)，隨後若血壓仍高再聯用血管擴張劑。單獨或先用血管擴張劑會誘發反射性心率增快，加速剝離面破裂。
          </li>
          <li><strong>靜脈降壓藥物特點</strong>：
            <br>• <strong>尼卡地平 (Nicardipine)</strong>：一線鈣通道阻滯劑，起效快、安全，但連續滴注可能導致輸入體積過大。
            <br>• <strong>硝普鈉 (Nitroprusside)</strong>：起效極快，但長期（&gt; 72 小時）或大劑量使用易在肝功能不全時蓄積氰化物（Cyanide）、在腎功能不全時蓄積硫氰酸鹽（Thiocyanate）導致酸中毒和意識障礙。硝普鈉會擴張腦血管增加顱內壓 (ICP)，冠狀動脈疾病者使用會誘發「冠狀動脈竊血 (coronary steal)」。
            <br>• <strong>艾司洛爾/拉貝洛爾</strong>：有急性去代償性心力衰竭徵象患者禁用。
          </li>
        </ul>
      </div>
    </div>
  `,
  "13": `
    <div class="highlights-card">
      <h2 class="highlights-title">第十三章 重點整理：Hepatic Failure/GI/Endocrine Emergencies</h2>
      
      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>一、 ALF 診斷與治療</h3>
        <ul class="highlight-list">
          <li><strong>診斷定義</strong>：無先前肝臟疾病，病程小於 26 週，臨床表現為<strong>Coagulopathy（INR &gt;= 1.5）</strong>與<strong>Encephalopathy</strong>。這與慢性肝衰竭急性惡化 (ACLF) 不同。</li>
          <li><strong>臨床分級與預後</strong>：
            <br>• 超急性 (Hyperacute, &lt;7天)：多由Acetaminophen或缺血性肝炎引起，腦水腫與III/IV發生率高，但移植前存活率最高。
            <br>• 急性 (Acute, 7–21天)：多由病毒性肝炎引起。
            <br>• 亞急性 (Subacute, &gt;21天且&lt;26週)：DILI 或原因不明，預後最差，通常需要移植。
          </li>
          <li><strong>藥物治療 NAC 療程</strong>：
            <br>• <strong>Acetaminophen引導性 ALF</strong>：推薦給予 IV NAC，標準為 21 小時療程（150 mg/kg 輸注 1 小時，50 mg/kg 輸注 4 小時，100 mg/kg 輸注 16 小時）。若停藥時仍有腦病變或 INR/ALT 異常，應延長輸注。
            <br>• <strong>非Acetaminophen引導性 ALF (NAI-ALF)</strong>：IV NAC 72 小時療程（150 mg/kg 輸注 1 小時，隨後 12.5 mg/kg/h 輸注 4 小時，再以 6.25 mg/kg/h 輸注 67 小時）能顯著提高 I/II 級腦病變患者的移植前存活率。
          </li>
          <li><strong>併發症處置</strong>：
            <br>• <strong>腦病變與高血氨</strong>：避免使用鎮靜劑（若需插管首選Propofol以降低腦血流）。2023 ACG Lactulose 療效不確定且有腹脹等移植隱憂，故不常規用於 ALF。高血氨（&gt; 200 mcg/dL）與腦疝高度相關，建議早期進行 CRRT 以清除血氨。
            <br>• <strong>顱內壓 (ICP) 控制</strong>：目標 ICP &lt; 20–25 mm Hg，CPP &gt;= 60 mm Hg。Mannitol 0.5–1 g/kg IV 單次推注（限於滲透壓 &lt; 320 mOsm/L）；III/IV 推薦預防性給予Hypertonic Saline（目標血鈉 145–155 mEq/L）以減輕腦水腫。
            <br>• <strong>血流動力學與輸液</strong>：禁用低張或等張偏低張的輸液（如Lactate鈉林格氏液 LR，容易加重腦水腫），首選 0.9% NaCl 或 Plasma-Lyte。血管加壓藥首選Norepinephrine，頑固性休克可聯用Vasopressin。
            <br>• <strong>凝血功能</strong>：雖然 INR 608/458 U/L，但因抗凝與促凝因子同時減少，患者通常處於「再平衡」狀態。<strong>無活動性出血或侵入性手術前，不應常規輸注 FFP 糾正 INR</strong>。有出血或手術前目標血小板 &gt; 50,000–70,000 /mm³。
          </li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>二、 AP 處置與廔管/腸阻塞管理</h3>
        <ul class="highlight-list">
          <li><strong>AP 診斷與嚴重度</strong>：診斷需滿足以下三項中至少兩項：特徵性腹痛（ persistent 上腹痛放射至背部）、血清澱粉酶/脂肪酶 &gt;= 3 倍正常上限值、影像學異常。嚴重度取決於是否存在器官衰竭（Marshall 評分 &gt;= 2）及持續時間是否超過 48 小時。</li>
          <li><strong>早期體溫與水分復甦</strong>：發病 24 小時內早期積極水分復甦能避免胰臟壞死。<strong>輸液首選Lactate鈉林格氏液 (LR)</strong>，相比 0.9% NaCl 能顯著降低 SIRS 發生率與發炎反應（酸性 pH 會活化胰蛋白酶原）。</li>
          <li><strong>特殊病因與抗生素原則</strong>：
            <br>• <strong>高三酸甘油酯 AP</strong>：若 TG &gt; 1000 mg/dL，首選<strong>高劑量Insulin輸注 (0.1 units/kg/h)</strong> 以快速降低 TG 至 &lt; 500 mg/dL，需聯用糖水滴定維持血糖於 150 mg/dL 左右以防低血糖。
            <br>• <strong>抗生素選用</strong>：<strong>不推薦對無菌壞死性胰臟炎給予預防性抗生素</strong>。僅在懷疑感染（發病 7–10 天後未改善或影像有氣體）時，經驗性給予穿透力強的Carbapenems（Carbapenem）、Fluoroquinolone聯用Metronidazole或Cephalosporins。
            <br>• <strong>Nutrition Support</strong>：早期腸道營養（24–48 小時內啟動）優於 TPN 或 NPO，能保護腸道黏膜屏障、防細菌移位。有高吸入風險（如 HE 史）患者首選鼻空腸管 (NJ) 途徑。
          </li>
          <li><strong>GI Fistula 分類與管理</strong>：依每日輸出量分為高輸出量（&gt; 500 mL/day）、中輸出量（200–500 mL/day）、低輸出量（&lt; 200 mL/day）。
            <br>• <strong>藥物與營養</strong>：Glutamine 0.3 g/kg/day 併用 TPN 可顯著提高自癒率。可短期使用 Somatostatin 或 Octreotide 以減少分泌物輸出量（48 小時無反應即停藥）；頑固性廔管首選 PPI 進行胃酸抑制，以及 Loperamide（最大 16 mg/day）抑制腸道蠕動。
          </li>
          <li><strong>POI</strong>：多與手術創傷、吸入麻醉藥及鴉片類藥物相關。
            <br>• <strong>預防藥物 Alvimopan (Entereg)</strong>：選擇性外周 µ-opioid 受體拮抗劑。<strong>限制短期住院使用（最多 15 劑）</strong>，透過 REMS (EASE) 管制，因長期使用有增加心肌梗塞的風險。
          </li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>三、 PONV UGIB</h3>
        <ul class="highlight-list">
          <li><strong>PONV Apfel Score</strong>：
            <br>• 四大因子：女性、非吸菸者、有動暈症/PONV 歷史、預期術後使用鴉片類藥物。
            <br>• 預防策略：中度風險 (1-2 因子) 推薦 1-2 種預防藥物；高度風險 (&gt;2 因子) 推薦 3 種以上多機轉聯用。
            <br>• 給藥時機：Dexamethasone Aprepitant 需在<strong>Induction</strong> 給藥；Ondansetron Droperidol 需在<strong>End of surgery</strong> 給藥。Scopolamine貼片需在手術前晚貼上。
          </li>
          <li><strong>UGIB 處置</strong>：
            <br>• <strong>穩定與輸血</strong>：首選大孔徑周邊靜脈，輸血閾值為 <strong>Hb &lt; 7 g/dL</strong>（合併心血管共病者為 Hb &lt; 8 g/dL）。
            <br>• <strong>非靜脈曲張出血（潰瘍）</strong>：需於 24 小時內進行內視鏡。止血後給予<strong>高劑量 PPI 療程</strong>（如 80 mg IV 負荷量隨後 8 mg/h 輸注 72 小時，或大劑量間歇給藥），之後過渡到一天兩次口服 PPI 共 2 週。
            <br>• <strong>靜脈曲張出血</strong>：疑似出血時立即給予<strong>Octreotide 50 mcg IV 負荷量隨後 50 mcg/h 持續輸注 2–5 天</strong>。同時必須啟動<strong>短期預防性抗生素（Ceftriaxone 1 g daily，最多 7 天）</strong>以降低感染與再出血率。止血後停用Octreotide，銜接非選擇性 β-blocker (如 Propranolol) 作為二級預防。
          </li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>四、 內分泌重症 (DKA/HHS, Thyroid Storm, Myxedema Coma, 腎上腺危機)</h3>
        <ul class="highlight-list">
          <li><strong>糖尿病酮Hydrogen ion (DKA) vs 高滲透壓高血糖狀態 (HHS)</strong>：
            <br>• <strong>鑑別診斷</strong>：DKA 特徵為酮體陽性與陰離子間隙升高之Hydrogen ion（pH &lt; 7.3, HCO3 &lt; 18）；HHS 特徵為極高血糖 (&gt;600 mg/dL) 與高滲透壓 (&gt;320 mOsm/L)，通常無Hydrogen ion。
            <br>• <strong>水分與Insulin滴定</strong>：首小時給予 0.9% NaCl 15–20 mL/kg，隨後視血鈉調整。當 DKA 血糖 &lt; 200 mg/dL 或 HHS &lt; 300 mg/dL 時，輸液需加入 D5W 配合 0.45% NaCl 以防止低血糖。Insulin滴定持續至 DKA 酮Hydrogen ion緩解（pH &gt; 7.3, HCO3 &gt;= 15 且陰離子間隙正常）或 HHS 意識恢復。
            <br>• <strong>Potassium補給原則</strong>：<strong>若 K &lt; 3.3 mEq/L，必須暫停Insulin</strong>，先補鉀至 &gt; 3.3 mEq/L。若 K 在 3.3–5.2 mEq/L 之間，應在輸液中每升加入 20–30 mEq 鉀。
            <br>• <strong>碳酸氫鈉使用指引</strong>：僅在 <strong>pH &lt; 6.9</strong> 的極度Hydrogen ion患者中推薦使用，pH &gt; 7.0 則禁用。
          </li>
          <li><strong>Thyroid Storm 搶救用藥</strong>：
            <br>• <strong>用藥組合與順序</strong>：
              <br>1. <strong>Propylthiouracil (PTU)</strong>：首選，阻斷甲狀腺素合成並抑制外周 T4 轉化為 T3。
              <br>2. <strong>糖皮質激素（Hydrocortisone 100 mg Q8H）</strong>：阻斷外周轉化。
              <br>3. <strong>無機碘溶液 (Lugol's solution)</strong>：阻斷釋放。<strong>必須在 PTU 給藥至少 1 小時後才能給予</strong>，否則碘會被用作合成甲狀腺素的原料加重風暴。
              <br>4. <strong>β-blocker（Propranolol 60–80 mg Q4H）</strong>：控制心率並阻斷外周轉化，哮喘者可改用 Diltiazem。
          </li>
          <li><strong>Myxedema Coma</strong>：
            <br>• <strong>核心處理原則</strong>：臨床診斷後立即啟動治療，不需等待實驗室報告。
            <br>• <strong>皮質類固醇優先</strong>：<strong>必須在給予Levothyroxine 之前先給予應激劑量糖皮質激素 (Hydrocortisone 50–100 mg Q6-8H)</strong>，以防甲狀腺素加速皮質醇代謝，誘發致命的急性腎上腺危機。
            <br>• <strong>甲狀腺素替代</strong>：首劑靜脈給予 Levothyroxine 200–400 mcg，隨後每日給予 1.6 mcg/kg IV。可聯用低劑量 Liothyronine (T3)。
          </li>
          <li><strong>腎上腺危機與 CIRCI</strong>：
            <br>• <strong>急性腎上腺危機</strong>：給予 IV 補充生理食鹽水，並立即給予 Hydrocortisone 200–300 mg/day。
            <br>• <strong>關鍵病患皮質類固醇不全 (CIRCI)</strong>：重症患者 HPA 軸受損。<strong>僅推薦用於液體復甦無效且持續需要血管加壓藥的敗血性休克患者</strong>。指引強烈反對使用Cosyntropin 刺激試驗來決定是否給藥，直接依臨床反應決定。
          </li>
        </ul>
      </div>
    </div>
  `
,
  "14": `
    <div class="highlights-card">
      <h2 class="highlights-title">第十四章 重點整理：Supportive and Preventive Medicine</h2>
      
      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>一、 加護病房每日照護評估 (FAST-HUG & MAIDENS)</h3>
        <ul class="highlight-list">
          <li><strong>FAST-HUG 核心要素</strong>：
            <br>• <strong>F - Feeding (餵食)</strong>：評估營養攝入，首選早期腸道營養（24–48 小時內啟動）。
            <br>• <strong>A - Analgesia (止痛)</strong>：使用 BPS 或 CPOT 工具評估並維持患者無痛。
            <br>• <strong>S - Sedation (鎮靜)</strong>：使用 RASS 或 SAS 工具評估，目標維持輕度鎮靜，每日執行鎮靜中斷 (SAT)。
            <br>• <strong>T - Thromboembolic prophylaxis (血栓預防)</strong>：評估 VTE 風險，給予藥物或機械預防。
            <br>• <strong>H - Head of bed elevation (床頭抬高)</strong>：維持床頭抬高 30–45 度，以降低胃食道逆流及Ventilator-Associated Pneumonia, VAP 風險。
            <br>• <strong>U - Stress Ulcer prophylaxis (應激性潰瘍預防)</strong>：僅針對具備指徵的高危患者給予。
            <br>• <strong>G - Glycemic control (血糖控制)</strong>：重症患者目標血糖控制於 <strong>140–180 mg/dL</strong> 之間。
          </li>
          <li><strong>擴充版本 FAST-HUGS BID</strong>：追加了 <strong>S - Spontaneous breathing trial (自主呼吸試驗)</strong>、<strong>B - Bowel regimen (排便管理)</strong>、<strong>I - Indwelling catheter removal (拔除留置導管)</strong>、<strong>D - De-escalation of antimicrobials (抗生素降階治療)</strong>，BID 評估。</li>
          <li><strong>MAIDENS 藥學評估工具</strong>：M - Medication reconciliation；A - Antibiotics；I - Indications；D - Dosing；E - 電解質與實驗室監測 (Electrolytes/Labs)；N - 交互作用與不良反應 (No drug interactions/ADRs)；S - Stop dates。</li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>二、 壓力性潰瘍預防 (SUP) 與靜脈血栓預防 (VTE)</h3>
        <ul class="highlight-list">
          <li><strong>應激性潰瘍預防 (SUP) 指徵</strong>：
            <br>• <strong>兩大核心獨立風險因子</strong>：<strong>機械通氣 &gt;= 48 小時</strong>、<strong>存在Coagulopathy</strong>（定義為血小板 &lt; 50,000 /mm³、INR &gt; 1.5 或 aPTT &gt; 2 倍對照值）。
            <br>• 其他風險因子：嚴重燒傷（&gt;35% TBSA）、嚴重腦外傷或脊髓損傷、1 年內有消化道出血史、器官移植術後。
          </li>
          <li><strong>SUP 藥物比較</strong>：
            <br>• <strong>H₂RA (如 Famotidine)</strong>：需依腎功能調整劑量（如 CrCl &lt; 50 mL/min 時減量）。<strong>長期連續使用（最快第 2 天）Tachyphylaxis</strong>。副作用包括精神混亂（特別是高齡、腎衰竭患者）與 QTc 延長。
            <br>• <strong>PPI (如 Pantoprazole, Omeprazole)</strong>：抑酸效果強，不產生耐受性。但會顯著增加加護病房<strong>困難梭狀芽孢桿菌感染 (CDI)</strong> 及<strong>吸入性肺炎</strong>的風險。
            <br>• <strong>停藥指引</strong>：一旦上述風險因子（如脫離呼吸器、凝血功能恢復）消失，應立即停用 SUP，避免不必要的藥物副作用與費用。
          </li>
          <li><strong>VTE 預防藥物與腎功能調整</strong>：
            <br>• <strong>Enoxaparin</strong>：正常腎功能使用 40 mg SC QD。<strong>在嚴重腎功能不全 (CrCl &lt; 30 mL/min) 時需減量至 30 mg SC QD</strong>，或改用 LDUH，以防蓄積出血。
            <br>• <strong>Dalteparin</strong>：5000 units SC QD。在嚴重腎功能不全患者中無明顯蓄積，不需強制調整劑量。
            <br>• <strong>Heparin (LDUH)</strong>：5000 units SC BID 或 TID。不經腎臟排泄，是嚴重腎衰竭（如進行透析）患者的首選。
            <br>• <strong>Fondaparinux</strong>：<strong>體重 &lt; 50 kg 或 CrCl &lt; 30 mL/min 者禁用</strong>。
          </li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>三、 肝素引導之Thrombocytopenia症 (Status / HIT) 管理</h3>
        <ul class="highlight-list">
          <li><strong>臨床診斷與 4Ts 評估系統</strong>：
            <br>• 評估四大指標：血小板下降幅度（通常下降 &gt;50%，且低限介於 20k–150k）、下降發生的時間（暴露後 5–10 天）、新發血栓形成、排除其他導致Thrombocytopenia的原因。
            <br>• <strong>評估決策</strong>：4Ts 評分 0–3 分為低危（陰性預測值 &gt; 99.8%），不需停藥或檢測；<strong>4Ts 評分 &gt;= 4 分（中/高危）時，必須立即停用所有肝素（包括管路沖洗液），並啟動非肝素類抗凝藥物</strong>。
          </li>
          <li><strong>非肝素抗凝藥物滴定與監測</strong>：
            <br>• <strong>Argatroban</strong>：一線直接凝血酶抑制劑。<strong>經肝臟清除，半衰期 40–50 分鐘</strong>。重度重症或合併肝功能不全患者的清除率顯著降低，<strong>起始劑量應從標準 2 mcg/kg/min 下調至 0.25–0.5 mcg/kg/min</strong>。目標監測為 aPTT 達到基準值的 1.5–3 倍。
            <br>• <strong>Bivalirudin</strong>：經腎臟與酶降解排泄，半衰期 25 分鐘。腎功能不全時需下調劑量（如 0.05–0.1 mg/kg/h）。
          </li>
          <li><strong>口服抗凝藥口服過渡 (Warfarin) 限制</strong>：
            <br>• <strong>絕對禁忌</strong>：在 HIT 急性期且<strong>血小板未恢復至 &gt;= 150,000 /mm³ 之前，絕對禁止使用Warfarin</strong>。過早使用會迅速耗竭蛋白 C 導致高凝狀態，誘發致命的微血管血栓與靜脈肢體壞疽。若診斷時已在使用Warfarin，需立即給予維生素 K 逆轉。
          </li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>四、 End-of-Life Care 與災難醫學</h3>
        <ul class="highlight-list">
          <li><strong>緩和醫療舒適藥物控制</strong>：
            <br>• <strong>疼痛與呼吸困難</strong>：<strong>靜脈注射鴉片類（Morphine 或Fentanyl）是主要支柱</strong>。應使用靜脈推注配合持續輸注，避免皮下或口服給藥（重症患者灌注差，吸收不可預測）。Morphine還能降低心臟負荷並緩解氣促感。
            <br>• <strong>譫妄與終末期躁動</strong>：首選<strong>Haloperidol 靜脈注射</strong>。在安寧照護中，不需為了防 QT 延長而常規監測 ECG，舒適是唯一目標。
            <br>• <strong>終末期呼吸道分泌物（死前喘鳴 Death Rattle）</strong>：由於吞嚥反射消失導致唾液蓄積。首選抗膽鹼藥，<strong>Glycopyrrolate 0.1 mg IV Q4H 因不穿過血腦屏障，Scopolamine Atropine 具有更少的中樞神經興奮/昏睡副作用</strong>。
            <br>• <strong>醫療簡化</strong>：應停用所有不必要的監測（如心電監護、指尖血糖、頻繁生命徵象監測）及藥物，並拔除 Foley 導尿管（若非尿瀦留），以減少對患者的干擾。
          </li>
          <li><strong>災難醫學四階段</strong>：Mitigation、Preparedness、Response、Recovery。藥師在Response階段負責藥物供應、SNS 調度、解毒劑調配、疫苗接種及協同診斷指南制定。
          </li>
          <li><strong>SDoH</strong>：經濟穩定性、教育程度、醫療可及性、社區環境與社會背景。無保險或 Medicaid 患者在 ICU 出院後發生認知與功能衰退的風險顯著24 mm Hg。
          </li>
        </ul>
      </div>
    </div>
  `
,
    "15": `
    <div class="highlights-card">
      <h2 class="highlights-title">第十五章 重點整理：Shock Syndromes I - Introduction, Vasodilatory, and Sepsis</h2>
      
      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>一、 休克定義與血液動力學評估 (Shock Definition & Assessment)</h3>
        <ul class="highlight-list">
          <li><strong>休克定義</strong>：急性循環衰竭導致組織灌流不足與細胞缺氧，使氧供 (Do2) 無法滿足細胞氧耗 (Vo2) 需求。</li>
          <li><strong>臨床與生化指標</strong>：SBP &lt; 90 mm Hg 或 MAP &lt; 70 mm Hg（或較基線下降 &gt; 40 mm Hg）；灌流不足表現為意識改變、尿量減少 (&lt; 0.5 mL/kg/h)、皮膚濕冷及毛細血管充盈時間延長；生化證據為 Lactate &gt; 2 mmol/L 及 Svo2/Scvo2 &lt; 70%。</li>
          <li><strong>休克分類</strong>：低血容量性 (Hypovolemic)、阻礙性 (Obstructive)、分佈性/血管擴張性 (Distributive/Vasodilatory) 和心因性 (Cardiogenic)。</li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>二、 輸液反應性與容量評估 (Fluid Responsiveness)</h3>
        <ul class="highlight-list">
          <li><strong>容量與反應性評估</strong>：靜態指標（如 CVP、PCWP）無法準確預測患者對補液的反應。動態指標能更準確地預測輸液反應性（即給予輸液後心輸出量 CO 增加 &gt;= 10%-15%）。</li>
          <li><strong>動態指標條件</strong>：脈壓變異度 (PPV &gt; 12.5%) 與每搏輸出量變異度 (SVV &gt; 11.6%) 適用於插管、無自主呼吸、竇性心律且潮氣量 &gt;= 8 mL/kg 的患者。</li>
          <li><strong>被動抬腿試驗 (PLR)</strong>：將患者平臥並抬高雙腿 45 度，可將約 300 mL 血液回流至心臟。若 CO 增加 &gt;= 10%-15%，提示具備輸液反應性，適用於心律不整或有自主呼吸的患者。</li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>三、 敗血症與敗血性休克處置 (Sepsis & Septic Shock)</h3>
        <ul class="highlight-list">
          <li><strong>Sepsis-3 診斷標準</strong>：
            <br>• <strong>Sepsis (敗血症)</strong>：因宿主對感染的反應失調而導致致命的器官功能障礙，定義為 SOFA 分數較基線增加 &gt;= 2 分。
            <br>• <strong>Septic Shock (敗血性休克)</strong>：在充分液體復甦下仍需使用血管收縮劑以維持 MAP &gt;= 65 mm Hg，且血清乳酸 (Lactate) &gt; 2 mmol/L。
          </li>
          <li><strong>早期輸液與晶體液選擇</strong>：診斷 3 小時內應給予至少 30 mL/kg 的等張晶體液進行復甦。首選 **Lactated Ringer's** 或 **Plasma-Lyte** 等平衡晶體液，以減少高氯性代謝性酸中毒與 AKI 風險。</li>
          <li><strong>抗生素與源頭控制</strong>：確診或懷疑 sepsis/septic shock 後 1 小時內應給予廣效性抗生素，並在 12 小時內進行感染源控制 (source control)。</li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>四、 血管活性藥物與輔助治療 (Vasoactive Medications & Adjuncts)</h3>
        <ul class="highlight-list">
          <li><strong>首選血管收縮劑</strong>：**Norepinephrine** 是治療 septic shock 的第一線藥物，能增加 SVR 並提升 MAP，且心律不整風險顯著低於 Dopamine。</li>
          <li><strong>聯合用藥</strong>：若 Norepinephrine 劑量達到 0.25–0.5 mcg/kg/min 仍無法維持 MAP &gt;= 65 mm Hg，應加用 **Vasopressin** (0.03 units/minute 固定劑量) 以協同提升血壓並降低 Norepinephrine 需求。Epinephrine 作為三線加用藥。</li>
          <li><strong>強心劑與類固醇</strong>：若合併心肌收縮力不足（如 Scvo2 &lt; 70% 且容積已補足），可聯用 **Dobutamine**。若使用足夠液體與血管收縮劑仍無法維持血流動力學穩定，應給予 **Hydrocortisone** (200 mg/day，分次給藥或持續輸注)，不需進行 ACTH 刺激試驗。</li>
        </ul>
      </div>
    </div>
  `,
  "16": `
    <div class="highlights-card">
      <h2 class="highlights-title">第十六章 重點整理：Shock Syndromes II - Hypovolemic, Critical Bleeding, and Obstructive</h2>
      
      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>一、 低血容量與創傷出血分級 (Hypovolemic Shock & Hemorrhage Class)</h3>
        <ul class="highlight-list">
          <li><strong>出血分級 (ATLS)</strong>：
            <br>• <strong>第一級 (Class I, &lt;15% 失血)</strong>：生命徵象正常。
            <br>• <strong>第二級 (Class II, 15%-30% 失血)</strong>：心搏過速，脈壓變窄。
            <br>• <strong>第三級 (Class III, 30%-40% 失血)</strong>：顯著心搏過速、低血壓、呼吸急促、意識模糊，需要輸血。
            <br>• <strong>第四級 (Class IV, &gt;40% 失血)</strong>：極度低血壓、瀕死狀態，需要立即啟動大量輸血。
          </li>
          <li><strong>復甦與允許性低血壓</strong>：創傷活動性出血（無 TBI）患者首選**允許性低血壓 (permissive hypotension)**，控制 SBP 於 80-90 mm Hg 之間，直到手術控制出血，避免過度積極補液沖刷血栓或加重稀釋性凝血病。</li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>二、 急性創傷凝血病與 TEG 監測 (ATC & TEG Monitoring)</h3>
        <ul class="highlight-list">
          <li><strong>ATC 與死亡三聯徵</strong>：由組織創傷、休克、低體溫、酸中毒和低血鈣共同引起的早期凝血障礙。死亡三聯徵包括低體溫 (Hypothermia)、酸中毒 (Acidosis) 與凝血病 (Coagulopathy)。</li>
          <li><strong>TEG 參數與治療策略</strong>：
            <br>• <strong>R 時間 (Reaction time)</strong>：代表凝血因子啟動時間，若延長首選 **FFP** 或 **4F-PCC**。
            <br>• <strong>K 時間/α 角度</strong>：代表血塊形成速度，與纖維蛋白原 (Fibrinogen) 相關，若異常首選 **Cryoprecipitate**。
            <br>• <strong>MA (Maximum Amplitude)</strong>：代表血塊最大強度，與血小板數量與功能相關，若異常首選 **Platelets** 或 **Desmopressin**。
            <br>• <strong>LY30</strong>：代表 30 分鐘時的血塊溶解比例，若升高提示纖溶亢進，首選 **Tranexamic acid (TXA)**。
          </li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>三、 止血與抗凝血劑逆轉處置 (Hemostasis & Anticoagulant Reversal)</h3>
        <ul class="highlight-list">
          <li><strong>Tranexamic acid (TXA)</strong>：嚴重創傷大出血患者應在受傷 3 小時內儘早給予 1 g 負荷劑量，隨後 8 小時內輸注 1 g。超過 3 小時給藥會增加死亡風險。</li>
          <li><strong>Warfarin 逆轉</strong>：大出血時立即給予 **4F-PCC** (依據 INR 調整劑量，最大單劑上限 5000 units) 聯合靜脈注射 **Phytonadione (Vitamin K)** 5-10 mg 緩慢輸注。</li>
          <li><strong>DOACs 逆轉</strong>：Dabigatran 引起的出血首選 **Idarucizumab** (5 g IV)；Factor Xa 抑制劑 (Apixaban, Rivaroxaban) 引起的出血首選 **Andexanet Alfa** 或 **4F-PCC**。</li>
          <li><strong>低血鈣與補鈣</strong>：輸入大量保存血品易因檸檬酸鹽 (Citrate) 螯合導致低血鈣。應監測游離鈣並及時補充 **Calcium chloride**（提供 3 倍於 Calcium gluconate 的游離鈣）。</li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>四、 阻礙性休克與肺栓塞處置 (Obstructive Shock & PE)</h3>
        <ul class="highlight-list">
          <li><strong>阻礙性休克原因</strong>：心臟壓塞 (Cardiac tamponade)、張力性氣胸 (Tension pneumothorax) 和 massive 肺栓塞 (PE)。</li>
          <li><strong>Massive PE (High risk PE)</strong>：定義為伴有持續性低血壓 (SBP &lt; 90 mm Hg) 或休克/心搏驟停的 PE。首選治療為**全身性溶栓 (Systemic thrombolysis)**，給予 Alteplase 100 mg 輸注 2 小時（心搏驟停時可立即推注 50 mg）。</li>
          <li><strong>Submassive PE (Intermediate-high risk PE)</strong>：血流動力學穩定但同時伴有右心室功能障礙與心肌損傷標記物 (Troponin/BNP) 陽性。若出現臨床惡化趨勢且全身溶栓出血風險高，首選**導管介入溶栓 (CDT)**。</li>
        </ul>
      </div>
    </div>
  `,
  "17": `
    <div class="highlights-card">
      <h2 class="highlights-title">第十七章 重點整理：Pain, Agitation/Sedation, Delirium, Immobility, Sleep Disruption, and Neuromuscular Blockade</h2>
      
      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>一、 疼痛評估與藥物治療 (Pain Assessment & Pharmacotherapy)</h3>
        <ul class="highlight-list">
          <li><strong>疼痛評估工具</strong>：自我報告是黃金標準。無法溝通但具備運動功能的重症患者，應使用 BPS（Behavioral Pain Scale，&gt; 5 提示有顯著疼痛）或 CPOT（Critical-Care Pain Observation Tool，&gt;= 3 提示有顯著疼痛）評估。不推薦單獨使用生命徵象評估疼痛。</li>
          <li><strong>靜脈鴉片類藥物選用</strong>：
            <br>• <strong>Fentanyl</strong>：起效最快且無活性代謝產物，但高脂溶性長期輸注易蓄積，清除率在肝硬化與營養不良患者中不可預測。
            <br>• <strong>Morphine</strong>：活性代謝物 M3G/M6G 在腎衰竭患者中蓄積（可致抽搐與延遲甦醒），且釋放組胺易致低血壓。
            <br>• <strong>Hydromorphone</strong>：水溶性高，無腎臟蓄積風險。
            <br>• <strong>Remifentanil</strong>：經血漿和組織酯酶清除，不依賴肝腎功能，半衰期極短（5-10分鐘），停藥需注意反彈性疼痛。
            <br>• <strong>Methadone</strong>：長效且具 NMDA 受體拮抗作用，可減輕鴉片類耐受性，但半衰期長且易致 QTc 延長。
          </li>
          <li><strong>非鴉片類輔助藥物</strong>：Acetaminophen（靜脈注射可能導致低血壓；腎衰竭需減量）、低劑量 Ketamine（1-2 mcg/kg/min 作為術後輔助，可減少鴉片類用量）及 gabapentinoids（治療神經病變性疼痛）。</li>
          <li><strong>鎮痛鎮靜 (Analgosedation)</strong>：提倡在給予任何鎮靜劑之前，先給予充足的鎮痛藥（疼痛控制優先），以調降鎮靜劑需求與相關不良反應。</li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>二、 躁動與鎮靜管理 (Agitation & Sedation Management)</h3>
        <ul class="highlight-list">
          <li><strong>評估與目標</strong>：使用 RASS 或 SAS 工具評估。PADIS 指引強烈推薦維持**輕度鎮靜**目標（RASS 評分 -2 至 +1，或 SAS 3 至 4），能顯著調降機械通氣時間與 ICU 住院天數。</li>
          <li><strong>鎮靜劑選用與比較</strong>：
            <br>• <strong>Propofol</strong>：起效快、甦醒快，但需監測低血壓、高三酸甘油酯及 PRIS（丙泊酚輸注症候群，通常在劑量 &gt; 50 mcg/kg/min 且使用 &gt; 48 小時後發生）。
            <br>• <strong>Dexmedetomidine</strong>：選擇性 α2 受體激動劑，提供協同鎮靜且不抑制呼吸驅動，能調降譫妄風險，但需注意心搏過緩與低/高血壓副作用。
            <br>• <strong>Benzodiazepines (Midazolam / Lorazepam)</strong>：指引建議優先選用非苯二氮平類藥物，因為 Benzodiazepines 會顯著增加譫妄風險並延長甦醒時間。
          </li>
          <li><strong>SAT 配合 SBT (自主覺醒與呼吸試驗)</strong>：每日評估患者是否符合 SAT 安全篩查，符合者停用所有鎮靜劑。若患者能配合指令或耐受停藥 &gt; 4 小時即為通過，隨後進行 SBT 評估以利儘早拔管。</li>
          <li><strong>藥物撤退症狀 (Withdrawal Syndrome)</strong>：長期高劑量使用鎮靜鎮痛劑的患者，在停藥時有 32% 機率發生撤退反應。此時應考慮重新給藥並緩慢滴定減量，Clonidine 可用於輔助 Dexmedetomidine 的撤退管理。</li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>三、 譫妄評估與防治 (Delirium Assessment & Prevention/Treatment)</h3>
        <ul class="highlight-list">
          <li><strong>譫妄分類與篩查</strong>：譫妄可分為高活動型 (hyperactive)、低活動型 (hypoactive，最常見且預後最差) 和混合型。應每 8-12 小時使用 CAM-ICU 或 ICDSC 評估一次。</li>
          <li><strong>非藥物預防（核心）</strong>：指引強調譫妄的防治應聚焦於非藥物介入，包括**早期活動/康復訓練**、**優化睡眠**（夜間減少噪音與光線、集中醫療操作）、**定時重定向與認知刺激**，以及**減少 benzodiazepines 和抗膽鹼藥物的暴露**。預防性使用 Haloperidol、Atypical Antipsychotics、Statins 或 Ketamine 已被證實無效。</li>
          <li><strong>藥物治療限制</strong>：
            <br>• MIND USA 試驗證實 Haloperidol 與 Ziprasidone 無法調降譫妄持續時間。
            <br>• 僅在機械通氣患者因嚴重譫妄躁動導致無法脫離呼吸器時，建議使用 **Dexmedetomidine** 輸注。
            <br>• 抗精神病藥（如 quetiapine, haloperidol）僅限於短期控制嚴重的幻覺、極度躁動或衝動行為，需注意 QTc 延長、EPS 及 NMS 副作用。
          </li>
          <li><strong>避免出院後不當持續用藥</strong>：ICU 期間新啟動的抗精神病藥、gabapentinoids 等，在出院時極易被無指徵地持續開立，出院前必須進行嚴格的藥物重整。</li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>四、 神經肌肉阻斷劑與監測 (Neuromuscular Blockade & TOF Monitoring)</h3>
        <ul class="highlight-list">
          <li><strong>重症使用指徵</strong>：主要用於早期重度 ARDS (Pao2/Fio2 &lt; 120-150 mm Hg) 以改善呼吸機同步性並減少肺損傷，通常限於短程使用（48小時內）。</li>
          <li><strong>肌鬆劑分類與清除</strong>：
            <br>• <strong>去極化肌鬆劑 (Succinylcholine)</strong>：起效最快，插管首選，但禁用於高血鉀、嚴重燒傷（&gt;24小時後）及多發性創傷患者，因有防致命性高血鉀與惡性高熱的風險。
            <br>• <strong>非去極化肌鬆劑</strong>：包括抗膽鹼類（**Vecuronium**, **Rocuronium**，具有肝腎蓄積風險）及苄基異喹啉類。
            <br>• **Cisatracurium**：經 Hofmann 消除（非器官依賴性降解），不經肝腎清除，在器官功能衰竭患者中最適合作為持續輸注藥物。
          </li>
          <li><strong>用藥監測與併發症處置</strong>：
            <br>• <strong>深鎮靜前提</strong>：必須在確認患者處於**完全無痛與深鎮靜狀態**後，才能給予肌鬆劑，以防患者在清醒狀態下發生全身癱瘓。
            <br>• <strong>TOF 監測</strong>：使用周邊神經刺激儀 (TOF) 監測，目標通常為 2/4 或 3/4 次收縮，TOF 0/4 提示過度肌鬆，需調低劑量以減少長期肌無力 (prolonged weakness) 風險。
            <br>• <strong>被動防護與併發症</strong>：肌鬆狀態下患者無法眨眼，必須給予**預防性眼部保護**（如眼藥膏、眼貼）以防角膜潰瘍；同時必須給予積極的 **VTE 藥物預防**（肌鬆患者深靜脈血栓風險增加達 8 倍）。
          </li>
        </ul>
      </div>
    </div>
  `,
"18": `
    <div class="highlights-card">
      <h2 class="highlights-title">第十八章 重點整理：Pulmonary Disorders I</h2>
      
      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>一、 ARDS 定義、病生理與流行病學</h3>
        <ul class="highlight-list">
          <li><strong>Berlin 定義基準</strong>：
            <br>• <strong>時間</strong>：已知臨床傷害或新發/惡化呼吸道症狀後 1 週內。
            <br>• <strong>影像</strong>：雙側浸潤，且無法以胸水、肺塌陷或結節完全解釋。
            <br>• <strong>水腫來源</strong>：呼吸衰竭無法以心衰竭或液體過載完全解釋（需做心臟超音波排除靜水壓性水腫）。
            <br>• <strong>氧合分級（PEEP/CPAP >= 5 cm H2O）</strong>：
              <br>&nbsp;&nbsp;- <strong>輕度 (Mild)</strong>：200 mm Hg &lt; Pao2/Fio2 &lt;= 300 mm Hg。
              <br>&nbsp;&nbsp;- <strong>中度 (Moderate)</strong>：100 mm Hg &lt; Pao2/Fio2 &lt;= 200 mm Hg。
              <br>&nbsp;&nbsp;- <strong>重度 (Severe)</strong>：Pao2/Fio2 &lt;= 100 mm Hg。
          </li>
          <li><strong>流行病學與預後</strong>：ARDS 約佔 ICU 入院人數的 10.4% 及機械通氣患者的 23.4%。中重度 ARDS 死亡率極高（中度 40.3%，重度 46.1%）。多器官衰竭是 ARDS 患者最主要的死亡原因。</li>
          <li><strong>病生理學分期</strong>：
            <br>• <strong>滲出期 (Exudative phase)</strong>：發病 1 週內。肺泡上皮與內皮受損，通透性增加，導致瀰漫性肺泡水腫、發炎細胞（中性球）浸潤、表面活性物質減少及肺泡塌陷。
            <br>• <strong>纖維增生期 (Fibroproliferative phase)</strong>：發病 7 天後。部分患者可逐漸康復，但惡化者會出現顯著的肺泡、間質及毛細血管纖維化，導致限制性肺病變。
          </li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>二、 機械通氣與肺保護換氣策略</h3>
        <ul class="highlight-list">
          <li><strong>肺保護性通氣策略 (Lung-Protective Ventilation)</strong>：此為 ARDS 管理的核心與金標準（來自 ARDSNet 研究）。
            <br>• <strong>潮氣量限制</strong>：限制在 <strong>4–8 mL/kg 預測體重 (PBW)</strong>（臨床常用理想體重計算），避免過度拉伸肺泡引起容量傷 (Volutrauma)。
            <br>• <strong>平台壓限制</strong>：限制吸氣末平台壓 <strong>Plateau Pressure &lt; 30 cm H2O</strong>，以防止氣壓傷 (Barotrauma)。
            <br>• <strong>PEEP 的設定</strong>：使用適當的高 PEEP 以促進肺泡重新張開 (Recruitment)，維持肺泡穩定，避免反覆塌陷與張開引起的剪力傷 (Atelectrauma)。
          </li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>三、 俯臥通氣與 ECMO 治療</h3>
        <ul class="highlight-list">
          <li><strong>俯臥通氣 (Prone Positioning)</strong>：
            <br>• <strong>機轉</strong>：改善通氣與血流灌流匹配 (V/Q matching)，減輕心臟及腹腔臟器重量對肺後部的壓迫，使潮氣量分配更均勻，減少呼吸器相關肺損傷。
            <br>• <strong>指徵與實施</strong>：對於<strong>中重度 ARDS（Pao2/Fio2 &lt; 150 mm Hg）</strong>患者，推薦早期實施，且每日俯臥時間應<strong>大於 12–16 小時</strong>（PROSEVA 試驗證實可顯著降低 28 天與 90 天死亡率）。
            <br>• <strong>禁忌症與監測</strong>：脊髓損傷、顱內壓增高為禁忌。實施時需妥善固定中央導管與氣管內管，防止脫落。
          </li>
          <li><strong>體外膜肺氧合 (ECMO)</strong>：
            <br>• <strong>指徵</strong>：用於極重度低氧血症（Pao2/Fio2 &lt; 80 mm Hg）或儘管優化呼吸器設定、使用肌鬆劑與俯臥通氣後，平台壓仍持續過高的患者（EOLIA 試驗及 2023 年指引推薦）。
            <br>• <strong>RESP 評分</strong>：用於預測 ARDS 患者啟動 ECMO 後的生存機率，但不用於決定是否啟動 ECMO。
          </li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>四、 液體管理 (FACTT 與 FACTT Lite)</h3>
        <ul class="highlight-list">
          <li><strong>液體保守與寬鬆策略 (FACTT 試驗)</strong>：
            <br>• <strong>保守型液體管理</strong>：維持 CVP &lt; 4 mm Hg。在血流動力學穩定（無休克、不需血管加壓藥）的患者中，使用利尿劑限制水分。
            <br>• <strong>預後改善</strong>：雖不影響 60 天死亡率，但能顯著<strong>增加無呼吸器天數 (ventilator-free days)</strong> 及減少 ICU 住院天數。
          </li>
          <li><strong>FACTT Lite 簡化協定</strong>：
            <br>• 臨床上無需侵入性肺動脈導管即可實施，根據 MAP、尿量與 CVP 決定利尿、輸液或僅監測。
            <br>• <strong>關鍵前提</strong>：必須在<strong>停用所有血管活性藥物且 MAP &gt;= 60 mm Hg 超過 12 小時</strong>後，方可開始實施保守利尿，以防誘發或加重低灌流狀態。
          </li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>五、 神經肌肉阻斷劑與皮質類固醇的應用</h3>
        <ul class="highlight-list">
          <li><strong>神經肌肉阻斷劑 (NMBAs)</strong>：
            <br>• <strong>指徵與劑量</strong>：早期重度 ARDS (Pao2/Fio2 &lt; 150 mm Hg) 患者，在發病 48 小時內啟動 <strong>Cisatracurium</strong> 持續輸注（15-mg bolus 後以 37.5 mg/hour 輸注共 48 小時）。
            <br>• <strong>臨床實證</strong>：ACURASYS 試驗顯示其能降低死亡率並增加無呼吸器天數；然而大型 ROSE 試驗（結合高 PEEP 肺保護通氣）顯示兩組 90 天死亡率無顯著差異。2023 指引反對常規對所有 ARDS 使用肌鬆，但可用於頑固性低氧血症或平台壓過高者。
            <br>• <strong>安全前提</strong>：給予肌鬆劑前，<strong>必須確保患者處於深度鎮靜與完全無痛狀態（目標 RASS -5 分）</strong>。
          </li>
          <li><strong>皮質類固醇 (Corticosteroids)</strong>：
            <br>• <strong>ARDS 應用</strong>：DEXA-ARDS 試驗顯示，在肺保護通氣下，對早期中重度 ARDS 給予 Dexamethasone (20 mg QD 5天，隨後 10 mg QD 5天) 可顯著增加無呼吸器天數。
            <br>• <strong>COVID-19 ARDS</strong>：RECOVERY 試驗證實，對需要氧氣支持或換氣的 COVID-19 患者，給予 Dexamethasone 6 mg QD (口服或靜脈注射) 可降低死亡率（CoDEX 試驗亦證實其在 COVID-19 ARDS 中能增加無呼吸器天數）。
          </li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>六、 快速序列插管 (RSI) 的藥物與順序</h3>
        <ul class="highlight-list">
          <li><strong>RSI 藥物順序與步驟</strong>：
            <br>• <strong>第一步：前置治療 (Pretreatment)</strong>：插管前給予，常用 **Fentanyl (1–3 mcg/kg)** 以減弱喉鏡操作引起的血壓升高等交感反射，或 **Lidocaine (1.5 mg/kg)** 以預防顱內壓 (ICP) 升高。
            <br>• <strong>第二步：誘導麻醉 (Induction)</strong>：給予快速起效的誘導藥物，使患者迅速失去意識：
              <br>&nbsp;&nbsp;- **Etomidate (0.2–0.6 mg/kg)**：對血流動力學影響極小，適用於休克不穩定患者，但會引起短暫腎上腺皮質抑制。
              <br>&nbsp;&nbsp;- **Ketamine (1–2 mg/kg IV)**：興奮交感神經，適用於低血壓、支氣管痙攣或腦外傷需要維持腦灌注者。
              <br>&nbsp;&nbsp;- **Propofol (1.5–2.5 mg/kg)**：降低 ICP，但會引起顯著低血壓，禁用於低血容量或休克患者。
              <br>&nbsp;&nbsp;- **Midazolam (0.2–0.3 mg/kg)**：起效慢且半衰期長，非 RSI 首選。
            <br>• <strong>第三步：神經肌肉阻斷 (Paralysis)</strong>：誘導後立即給予快速肌鬆劑：
              <br>&nbsp;&nbsp;- **Succinylcholine (1–2 mg/kg IV)**：去極化肌鬆劑，起效最快（1分鐘內），為 RSI 首選，但<strong>禁用於高血鉀、嚴重燒傷（>24小時後）、多發性創傷或肌失養症患者</strong>，防引發致命性高血鉀與惡性高熱。
              <br>&nbsp;&nbsp;- **Rocuronium (0.6–1.2 mg/kg)**：非去極化肌鬆劑，當 Succinylcholine 禁用時為首選替代藥物，不升高血鉀。
          </li>
        </ul>
      </div>
    </div>
  `,
"19": `
    <div class="highlights-card">
      <h2 class="highlights-title">第十九章 重點整理：Pulmonary Disorders II</h2>
      
      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>一、 囊腫性纖維化 (CF) 惡化與氣道清除</h3>
        <ul class="highlight-list">
          <li><strong>囊腫性纖維化 (Cystic Fibrosis)</strong>：體染色體隱性遺傳病，由 CFTR 基因突變引起。CFTR 通道異常會導致氯離子和碳酸氫根離子跨膜轉運受阻，使黏液脫水且酸性化，形成濃稠黏液阻礙纖毛清除。</li>
          <li><strong>急性惡化常伴感染菌種</strong>：
            <br>• <strong>嬰幼兒至青少年</strong>：金黃色葡萄球菌 (Staphylococcus aureus) 為最常見。
            <br>• <strong>11–30 歲</strong>：耐甲氧西林金黃色葡萄球菌 (MRSA) 盛行率上升。
            <br>• <strong>成年期</strong>：綠膿桿菌 (Pseudomonas aeruginosa) 盛行率高達 60% 以上，為最主要致病原。
          </li>
          <li><strong>抗綠膿桿菌經驗性治療</strong>：
            <br>• <strong>雙重涵蓋</strong>：建議聯合使用兩種不同機轉的抗綠膿桿菌藥物（一般為 β-lactam 類聯用氨基糖苷類）。
            <br>• <strong>氨基糖苷類（如 Tobramycin）</strong>：首選<strong>每日一次大劑量給藥 (10 mg/kg QD)</strong>，這與一日多次給藥相比療效相同且腎毒性較低。
          </li>
          <li><strong>療程與氣道清除輔助治療</strong>：
            <br>• <strong>療程 (STOP 試驗)</strong>：早期改善的患者給予 10 天抗生素療程即可，不需常規使用 14 天。
            <br>• <strong>氣道清除治療 (Airway Clearance Therapy)</strong>：積極胸腔物理治療、吸入 <strong>Dornase alfa</strong>（分解中性球 DNA，降低黏液黏稠度，B級推薦）與吸入 <strong>7% 高張食鹽水</strong>（促進水分移入氣道以稀釋黏液，B級推薦）。
          </li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>二、 肺動脈高壓 (PH) 定義與 WHO 分類</h3>
        <ul class="highlight-list">
          <li><strong>PH 的血流動力學定義</strong>：靜息狀態下經右心導管測得的<strong>平均肺動脈壓 (mPAP) &gt; 20 mm Hg</strong>。
            <br>• <strong>毛細血管前 PH (Pre-capillary PH)</strong>：mPAP &gt; 20 mm Hg 且 PCWP &lt;= 15 mm Hg 且 PVR &gt; 2 Wood units（常見於 Group 1, 3, 4, 5）。
            <br>• <strong>毛細血管後 PH (Post-capillary PH)</strong>：mPAP &gt; 20 mm Hg 且 PCWP &gt; 15 mm Hg 且 PVR &lt;= 2 Wood units（常見於 Group 2 左心疾病所致）。
          </li>
          <li><strong>WHO 五大臨床分類</strong>：
            <br>• <strong>Group 1 (PAH)</strong>：肺動脈高壓（原發性、遺傳性或藥物/毒素誘發）。
            <br>• <strong>Group 2</strong>：左心疾病引起的肺高壓。
            <br>• <strong>Group 3</strong>：慢性肺部疾病或缺氧引起的肺高壓（如 COPD、ILD）。
            <br>• <strong>Group 4</strong>：慢性血栓栓塞性肺高壓 (CTEPH)。
            <br>• <strong>Group 5</strong>：病因不明或多因素引起的肺高壓。
          </li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>三、 肺動脈高壓 (PAH) 的風險評估與藥物治療</h3>
        <ul class="highlight-list">
          <li><strong>血管加壓挑戰試驗 (Vasoreactivity Testing)</strong>：對於 Group 1 PAH 患者，插管/導管檢查時應進行血管活性挑戰。陽性反應者（mPAP 下降 &gt;= 10 且降至 &lt;= 40 mm Hg 且心輸出量增加或不變）首選<strong>高劑量鈣離子通道阻斷劑 (CCBs)</strong> 治療；陰性反應者禁用高劑量 CCBs。</li>
          <li><strong>風險分層與初始治療</strong>：
            <br>• <strong>低至中危患者（1年死亡風險 &lt; 20%，WHO FC I-III 級）</strong>：推薦初始<strong>雙聯口服治療</strong>：ERA 類（如 Macitentan、Bosentan）聯合 PDE-5i 類（如 Sildenafil、Tadalafil）。
            <br>• <strong>高危患者（1年死亡風險 &gt; 20%，WHO FC IV 級）</strong>：推薦初始<strong>三聯治療，必須包含持續靜脈輸注前列腺素類藥物（如 Epoprostenol）</strong>。Epoprostenol 是唯一被臨床證實能顯著降低高危 PAH 患者死亡率的藥物。
          </li>
          <li><strong>失代償性右心衰竭的急症處置</strong>：
            <br>• <strong>前負荷優化</strong>：嚴格限制液體，給予靜脈推注利尿劑 (Furosemide) 達到淨負平衡以緩解右心過載。
            <br>• <strong>後負荷降低</strong>：吸入血管擴張劑，暫時停用口服 CCBs 以免負性肌力加重休克。
            <br>• <strong>血流動力學支持</strong>：首選 <strong>Norepinephrine</strong> 維持 MAP（收縮外周血管以維持右心室灌注，對肺血管阻力影響小）；避免使用 Dopamine（易引發心律不整）與 Phenylephrine（收縮肺血管加重右心衰竭，禁用）。
          </li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>四、 氣喘急性發作 (Asthma Exacerbation) 嚴重度與處置</h3>
        <ul class="highlight-list">
          <li><strong>急性發作嚴重度分級 (GINA 2023)</strong>：
            <br>• <strong>輕中度</strong>：能說出完整句子，呼吸速率增加，心率 100–120 次/分，FEV1 &gt; 50% 預測值，Sao2 90%–95%。
            <br>• <strong>重度 (Severe)</strong>：只能說出單字/短語，呼吸速率 &gt; 30 次/分，心率 &gt; 120 次/分，使用輔助呼吸肌，FEV1 &lt;= 50% 預測值，Sao2 &lt; 90%。
            <br>• <strong>危及生命 (Life-threatening)</strong>：表現為嗜睡、意識混亂、寂靜胸腔（無呼吸音）。
          </li>
          <li><strong>急性期藥物治療方針</strong>：
            <br>• <strong>支氣管擴張劑</strong>：吸入短效 beta-2 激動劑 (SABA，如 Albuterol 霧化) 聯合吸入短效抗膽鹼藥 (Ipratropium，聯用可顯著降低住院率)。
            <br>• <strong>全身性類固醇</strong>：應在發病 1 小時內給予。<strong>Prednisone 40–50 mg QD 口服與靜脈注射等效</strong>，療程 5–7 天，不需逐漸減量 (tapering)。
            <br>• <strong>重症輔助藥物</strong>：對於重度/危及生命且初始治療無效者，給予<strong>靜脈注射硫酸鎂 2 g 輸注 20–30 分鐘</strong>。
            <br>• <strong>禁忌藥物</strong>：急性發作期<strong>禁用</strong>粘液溶解劑（如乙醯半胱氨酸，會惡化支氣管痙攣）與茶鹼類藥物（安全性低）。
          </li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>五、 慢性阻塞性肺病急性發作 (ECOPD) 嚴重度與抗感染管理</h3>
        <ul class="highlight-list">
          <li><strong>ECOPD 嚴重度診斷參數 (Rome Proposal)</strong>：
            <br>• <strong>輕度</strong>：僅需使用短效支氣管擴張劑。
            <br>• <strong>中度</strong>：需聯用支氣管擴張劑與口服類固醇，可聯用抗生素。
            <br>• <strong>重度</strong>：需要住院或急診就診，可合併急性呼吸衰竭。
          </li>
          <li><strong>急性呼吸衰竭分類 (GOLD 2024)</strong>：
            <br>• <strong>無呼吸衰竭</strong>：呼吸 12–20 次/分，無輔助肌使用，無神智改變，鼻導管氧氣可改善血氧。
            <br>• <strong>急性呼吸衰竭 - 非危及生命</strong>：呼吸 &gt; 24 次/分，使用輔助肌，無神智改變，鼻導管氧氣可改善，Paco2 50-60 mm Hg。
            <br>• <strong>急性呼吸衰竭 - 危及生命</strong>：呼吸 &gt; 24 次/分，使用輔助肌，<strong>新發神智改變</strong>，吸氧無法改善，Paco2 &gt; 60 mm Hg 或合併嚴重酸中毒 (pH &lt;= 7.25)。
          </li>
          <li><strong>給氧目標與皮質類固醇</strong>：
            <br>• <strong>控制性給氧</strong>：COPD 患者目標 Sao2 應嚴格控制在 <strong>88%–92%</strong> 之間。過度給氧（使 Sao2 &gt; 92%）會降低呼吸驅動，惡化高碳酸血症，直接增加死亡率。
            <br>• <strong>類固醇治療</strong>：推薦口服 <strong>Prednisone 40 mg QD 連續 5 天</strong>（REDUCE 試驗證實 5 天與 14 天療程效果相同且副作用少）。
          </li>
          <li><strong>抗生素使用指徵 (GOLD 指引)</strong>：
            <br>• <strong>三大指徵</strong>：(1) 具備三個核心症狀（呼吸困難加重、痰量增加、膿痰）；(2) 具備兩個核心症狀且其中一個為膿痰；(3) 需要使用無創 (NIV) 或有創通氣。
            <br>• <strong>療程與抗菌選擇</strong>：療程 5–7 天。初治輕症可選阿莫西林/克拉維酸、大環內酯；重症或有頻繁發作史者應考慮綠膿桿菌風險，選用呼吸喹諾酮類（如 Levofloxacin）或 Piperacillin/tazobactam 等。
          </li>
        </ul>
      </div>
    </div>
  `,
"20": `
    <div class="highlights-card">
      <h2 class="highlights-title">第二十章 重點整理：Toxicology</h2>
      
      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>一、 中毒流行病學與急診評估管理</h3>
        <ul class="highlight-list">
          <li><strong>中毒急診評估流程</strong>：
            <br>• <strong>首要步驟 (ABC)</strong>：穩定患者的氣道 (Airway)、呼吸 (Breathing) 與循環 (Circulation)。
            <br>• <strong>穩定後處理 (DEFG)</strong>：D - Decontamination (胃腸排毒)；E - Enhanced elimination (促進排除)；F - Focused antidote therapy (針對性解毒劑治療)；G - Get help (諮詢毒物中心)。
          </li>
          <li><strong>昏迷雞尾酒 (Coma Cocktail)</strong>：臨床上不推薦常規使用，僅在懷疑對應病因時給予：
            <br>• <strong>Dextrose 50% (D50W) 50 mL</strong>：用於治療低血糖（給藥前應儘可能先測血糖）。
            <br>• <strong>Thiamine 100 mg IV</strong>：預防/治療 Wernicke 腦病變（應在使用高糖前或同時給予）。
            <br>• <strong>Naloxone 0.04–2 mg IV</strong>：逆轉鴉片類藥物引起的呼吸抑制。
          </li>
          <li><strong>常見中毒症候群 (Toxidromes)</strong>：
            <br>• <strong>抗膽鹼能 (Anticholinergic)</strong>：譫妄、幻覺、皮膚發紅乾燥、無汗、發熱、心搏過速、瞳孔散大、腸鳴音減弱、尿瀦留。常用藥物：抗組織胺、三環抗憂鬱藥。
            <br>• <strong>膽鹼能 (Cholinergic)</strong>：SLUDGE 症狀（流涎、流淚、排尿、排便、胃腸不適、嘔吐）及心動過緩、瞳孔縮小。常用物：有機磷、氨基甲酸酯。
            <br>• <strong>鴉片類 (Opioid)</strong>：呼吸抑制（&lt; 12 次/分）、昏迷、針尖樣瞳孔、低血壓、心動過緩、腸鳴音減弱（腸麻痺）。
            <br>• <strong>擬交感神經能 (Sympathomimetic)</strong>：焦慮躁動、譫妄、大汗淋漓、瞳孔散大、發熱、高血壓、心搏過速、反射亢進。常用物：古柯鹼、安非他命。
          </li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>二、 胃腸排毒與排除促進法</h3>
        <ul class="highlight-list">
          <li><strong>活性碳 (Activated Charcoal)</strong>：
            <br>• <strong>指徵</strong>：一般在<strong>服藥後 1 小時內</strong>口服或經胃管給藥最有效。
            <br>• <strong>禁用情況</strong>：強酸、強鹼、醇類（甲醇/乙二醇）、氰化物、重金屬（鐵/鋰）及碳氫化合物中毒，這些物質活性碳無法有效結合，且會增加誤吸風險。
          </li>
          <li><strong>全腸灌洗 (Whole Bowel Irrigation, WBI)</strong>：
            <br>• 使用聚乙二醇電解質溶液 (PEG) 連續灌注 (成人 1500–2000 mL/hour)。
            <br>• <strong>指徵</strong>：適用於緩釋/控釋劑型藥物、重金屬（鋰、鐵）中毒，以及吞入毒品包裝（packers）者。
          </li>
          <li><strong>尿液鹼化 (Urine Alkalinization)</strong>：
            <br>• 靜脈給予碳酸氫鈉以維持尿 pH 7.5–8.5，血 pH 7.45–7.55。
            <br>• <strong>機轉</strong>：使弱酸性藥物在尿中解離成離子態（離子陷阱效應），防止腎小管重吸收，加速排泄。
            <br>• <strong>適用藥物</strong>：水楊酸類（Aspirin）、苯巴比妥（Phenobarbital）、氯磺丙脲。
            <br>• <strong>監測與補鉀</strong>：必須積極補鉀，因為低鉀血症會使腎小管排氫留鉀，導致尿液無法被鹼化。
          </li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>三、 特定藥物中毒：Acetaminophen & Salicylates</h3>
        <ul class="highlight-list">
          <li><strong>Acetaminophen (乙醯胺酚) 中毒</strong>：
            <br>• <strong>毒性機轉</strong>：過量藥物使結合代謝飽和，經 CYP2E1 代謝產生大量毒性中間產物 <strong>NAPQI</strong>，耗竭體內穀胱甘肽 (GSH) 後直接破壞肝細胞，導致肝壞死。
            <br>• <strong>解毒劑 (Acetylcysteine, NAC)</strong>：提供合成 GSH 的前體並直接與 NAPQI 結合解毒。
            <br>• <strong>給藥指徵</strong>：根據 <strong>Rumack-Matthew Nomogram</strong>（單次急性服用 4 小時後血藥濃度），若在治療線以上，或服藥時間不明但轉氨酶已升高，應立即啟動 NAC。
            <br>• <strong>靜脈 NAC 21小時三階段療程</strong>：第一階段 150 mg/kg 輸注 1 小時；第二階段 50 mg/kg 輸注 4 小時；第三階段 100 mg/kg 輸注 16 小時。
          </li>
          <li><strong>Salicylates (水楊酸/Aspirin) 中毒</strong>：
            <br>• <strong>臨床表現</strong>：早期直接興奮呼吸中樞引起過度換氣（呼吸性鹼中毒），隨後干擾線粒體氧化磷酸化，引發代謝性乳酸酸中毒、高熱、脫水與耳鳴。
            <br>• <strong>治療</strong>：給予碳酸氫鈉進行鹼化尿液治療（目標血 pH 7.45-7.55，尿 pH 7.5-8.5）。
            <br>• <strong>血液透析指徵</strong>：水楊酸濃度 &gt; 100 mg/dL（急性）或 &gt; 60 mg/dL（慢性）、昏迷/癲癇、重度酸中毒、難治性液體過載或急性腎衰竭。
          </li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>四、 鴉片類與醇類中毒管理</h3>
        <ul class="highlight-list">
          <li><strong>鴉片類 (Opioids) 中毒</strong>：
            <br>• <strong>臨床特徵</strong>：昏迷、呼吸抑制、針尖樣瞳孔。
            <br>• <strong>解毒劑 (Naloxone)</strong>：靜脈注射初始劑量為 <strong>0.04 mg</strong>（從小劑量滴定以防驟然引發嚴重的戒斷症狀）。
          </li>
          <li><strong>有毒醇類（甲醇/乙二醇）中毒</strong>：
            <br>• <strong>毒性物質</strong>：甲醇代謝物為甲酸（具視網膜毒性，致盲）；乙二醇代謝物為草酸/乙醇酸（產生草酸鈣結晶，致急性腎衰竭）。
            <br>• <strong>解毒劑 (Fomepizole)</strong>：強效心血管乙醇脫氫酶抑制劑，阻斷醇類轉化為有毒代謝物。
            <br>• <strong>透析調整</strong>：Fomepizole 易被透析清除，血液透析期間給藥頻率應縮短至<strong>每 4 小時一次 (10 mg/kg)</strong>。
          </li>
          <li><strong>酒精戒斷症候群 (Alcohol Withdrawal)</strong>：
            <br>• <strong>藥物治療</strong>：首選<strong>症狀觸發型苯二氮平類藥物（如 Lorazepam 或 Diazepam）</strong>，依據 CIWA-Ar 評分滴定。
            <br>• <strong>Phenobarbital (苯巴比妥)</strong>：可作為二線或難治性戒斷的替代方案，具 NMBA 受體拮抗作用。
          </li>
        </ul>
      </div>

      <div class="highlights-section">
        <h3 class="section-title"><span class="highlight-bullet"></span>五、 心血管藥物中毒管理</h3>
        <ul class="highlight-list">
          <li><strong>Beta-Blocker 中毒</strong>：
            <br>• <strong>解毒劑 (Glucagon)</strong>：初始 5–10 mg IV 推注，隨後持續輸注。其能活化腺苷酸環化酶增加 cAMP，改善心率與收縮力（僅適用於 β-blocker 中毒）。
          </li>
          <li><strong>鈣離子通道阻斷劑 (CCB) 中毒</strong>：
            <br>• <strong>一線治療</strong>：靜脈注射鈣劑（如氯化鈣 1–2 g 或葡萄糖酸鈣 3–6 g）以改善心肌收縮。
            <br>• <strong>高劑量胰島素療法 (HIET)</strong>：常規 regular insulin 1 unit/kg bolus，隨後 0.5–1 unit/kg/hour 輸注（最高可至 10 units/kg/h）。胰島素能改善心肌碳水化合物利用並具正性肌力。
            <br>• <strong>安全警示</strong>：HIET 會引起低血鉀，<strong>血鉀 &lt; 2.8 mEq/L 時禁用胰島素，必須在治療前及治療中積極補鉀</strong>；同時需每 15-30 分鐘監測血糖。
            <br>• <strong>靜脈脂肪乳劑 (Lipid Emulsion)</strong>：主要用於大劑量加壓藥與 HIET 無效的極重度瀕死患者。
          </li>
          <li><strong>Digoxin (地高辛) 中毒</strong>：
            <br>• <strong>臨床特徵</strong>：心律不整（房室傳導阻滯、室速）、噁心嘔吐、黃綠視覺異常。
            <br>• <strong>解毒劑 (Digoxin Fab 免疫抗體片段)</strong>：結合游離 digoxin。指徵包括：致命性心律不整、高鉀血症（&gt; 5.0–5.5 mEq/L）或急性大量服用（成人 &gt; 10 mg）。
          </li>
        </ul>
      </div>
    </div>
  `
};

// Default flat list for backward compatibility
let questions = allChapters["1"];