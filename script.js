const questions = [
  {
    numb: 1,
    question: "What is the main greenhouse gas responsible for global warming?",
    answer: "a) Carbon dioxide",
    options: [
      "a) Carbon dioxide",
      "b) Methane",
      "c) Nitrous oxide",
      "d) Ozone"
    ]
  },
  {
    numb: 2,
    question: "Which of the following is a renewable energy source?",
    answer: "d) Solar power",
    options: [
      "a) Coal",
      "b) Natural gas",
      "c) Oil",
      "d) Solar power"
    ]
  },
  {
    numb: 3,
    question: "What is the term for the increase in the Earth's average surface temperature?",
    answer: "b) Global warming",
    options: [
      "a) Greenhouse effect",
      "b) Global warming",
      "c) Acid rain",
      "d) Ozone depletion"
    ]
  },
  {
    numb: 4,
    question: "Which sector contributes the most to global greenhouse gas emissions?",
    answer: "a) Energy production",
    options: [
      "a) Energy production",
      "b) Agriculture",
      "c) Industrial processes",
      "d) Waste management"
    ]
  },
  {
    numb: 5,
    question: "What is a significant effect of rising global temperatures on polar ice caps?",
    answer: "c) Melting",
    options: [
      "a) Expansion",
      "b) Stabilization",
      "c) Melting",
      "d) Formation of new ice"
    ]
  },
  {
    numb: 6,
    question: "Which international agreement aims to limit global warming to well below 2 degrees Celsius?",
    answer: "b) Paris Agreement",
    options: [
      "a) Kyoto Protocol",
      "b) Paris Agreement",
      "c) Montreal Protocol",
      "d) Copenhagen Accord"
    ]
  },
  {
    numb: 7,
    question: "What is the primary source of methane emissions?",
    answer: "a) Livestock",
    options: [
      "a) Livestock",
      "b) Transportation",
      "c) Industrial activities",
      "d) Deforestation"
    ]
  },
  {
    numb: 8,
    question: "Which type of energy is generated from the movement of water?",
    answer: "d) Hydropower",
    options: [
      "a) Solar power",
      "b) Wind power",
      "c) Geothermal energy",
      "d) Hydropower"
    ]
  },
  {
    numb: 9,
    question: "What is the effect of deforestation on the carbon cycle?",
    answer: "c) Increased atmospheric carbon dioxide",
    options: [
      "a) Decreased atmospheric carbon dioxide",
      "b) Increased oxygen levels",
      "c) Increased atmospheric carbon dioxide",
      "d) Stabilization of carbon levels"
    ]
  },
  {
    numb: 10,
    question: "What does the term 'carbon footprint' refer to?",
    answer: "b) The total amount of greenhouse gases emitted by an individual or organization",
    options: [
      "a) The amount of carbon absorbed by forests",
      "b) The total amount of greenhouse gases emitted by an individual or organization",
      "c) The carbon content in fossil fuels",
      "d) The reduction in carbon emissions through technology"
    ]
  },
  {
    numb: 11,
    question: "What is a key factor in the formation of acid rain?",
    answer: "a) Sulfur dioxide",
    options: [
      "a) Sulfur dioxide",
      "b) Carbon dioxide",
      "c) Methane",
      "d) Nitrogen oxides"
    ]
  },
  {
    numb: 12,
    question: "Which country is known for having the largest area of tropical rainforest?",
    answer: "b) Brazil",
    options: [
      "a) Congo",
      "b) Brazil",
      "c) Indonesia",
      "d) Peru"
    ]
  },
  {
    numb: 13,
    question: "Which of the following is a consequence of ocean acidification?",
    answer: "d) Harm to marine life",
    options: [
      "a) Increased sea level",
      "b) Higher global temperatures",
      "c) Decreased salinity",
      "d) Harm to marine life"
    ]
  },
  {
    numb: 14,
    question: "Which greenhouse gas is considered the most potent in terms of its global warming potential?",
    answer: "b) Methane",
    options: [
      "a) Carbon dioxide",
      "b) Methane",
      "c) Nitrous oxide",
      "d) Ozone"
    ]
  },
  {
    numb: 15,
    question: "What is the primary method of reducing carbon emissions in transportation?",
    answer: "d) Using electric vehicles",
    options: [
      "a) Increasing fuel efficiency",
      "b) Reducing travel distances",
      "c) Using biofuels",
      "d) Using electric vehicles"
    ]
  },
  {
    numb: 16,
    question: "What is the term for the gradual increase in Earth's average temperature due to greenhouse gas emissions?",
    answer: "a) Global warming",
    options: [
      "a) Global warming",
      "b) Climate change",
      "c) Greenhouse effect",
      "d) Temperature rise"
    ]
  },
  {
    numb: 17,
    question: "Which of the following is a non-renewable resource?",
    answer: "c) Coal",
    options: [
      "a) Solar energy",
      "b) Wind energy",
      "c) Coal",
      "d) Biomass"
    ]
  },
  {
    numb: 18,
    question: "What is the primary objective of reforestation?",
    answer: "b) To restore deforested areas",
    options: [
      "a) To increase urbanization",
      "b) To restore deforested areas",
      "c) To clear land for agriculture",
      "d) To build infrastructure"
    ]
  },
  {
    numb: 19,
    question: "Which of the following actions can help in carbon sequestration?",
    answer: "c) Planting trees",
    options: [
      "a) Industrialization",
      "b) Urban development",
      "c) Planting trees",
      "d) Deforestation"
    ]
  },
  {
    numb: 20,
    question: "What is the main goal of carbon offset programs?",
    answer: "a) To compensate for carbon emissions by funding projects that reduce emissions",
    options: [
      "a) To compensate for carbon emissions by funding projects that reduce emissions",
      "b) To ban fossil fuels",
      "c) To promote carbon trading",
      "d) To increase carbon emissions"
    ]
  },
  {
    numb: 21,
    question: "Which greenhouse gas is released primarily from agricultural activities?",
    answer: "d) Methane",
    options: [
      "a) Carbon dioxide",
      "b) Nitrous oxide",
      "c) Chlorofluorocarbons",
      "d) Methane"
    ]
  },
  {
    numb: 22,
    question: "What does the term 'climate adaptation' refer to?",
    answer: "b) Adjusting practices and systems to minimize the impact of climate change",
    options: [
      "a) Mitigating the causes of climate change",
      "b) Adjusting practices and systems to minimize the impact of climate change",
      "c) Reducing greenhouse gas emissions",
      "d) Promoting renewable energy"
    ]
  },
  {
    numb: 23,
    question: "Which of the following is a direct effect of global warming on weather patterns?",
    answer: "c) More frequent and severe weather events",
    options: [
      "a) More stable weather patterns",
      "b) Decreased temperatures",
      "c) More frequent and severe weather events",
      "d) Reduced precipitation"
    ]
  },
  {
    numb: 24,
    question: "Which region is most vulnerable to the effects of sea-level rise?",
    answer: "a) Coastal areas",
    options: [
      "a) Coastal areas",
      "b) Mountainous regions",
      "c) Desert regions",
      "d) Inland plains"
    ]
  },
  {
    numb: 25,
    question: "What is the primary purpose of the Intergovernmental Panel on Climate Change (IPCC)?",
    answer: "b) To assess scientific information related to climate change",
    options: [
      "a) To enforce climate change regulations",
      "b) To assess scientific information related to climate change",
      "c) To promote new technologies",
      "d) To fund climate change projects"
    ]
  },
  {
    numb: 26,
    question: "Which gas is primarily responsible for the greenhouse effect in the Earth's atmosphere?",
    answer: "a) Carbon dioxide",
    options: [
      "a) Carbon dioxide",
      "b) Methane",
      "c) Nitrous oxide",
      "d) Water vapor"
    ]
  },
  {
    numb: 27,
    question: "What is the impact of melting glaciers on global sea levels?",
    answer: "b) Increase in sea levels",
    options: [
      "a) Decrease in sea levels",
      "b) Increase in sea levels",
      "c) No impact on sea levels",
      "d) Stabilization of sea levels"
    ]
  },
  {
    numb: 28,
    question: "Which country is a major contributor to deforestation due to its agricultural expansion?",
    answer: "a) Brazil",
    options: [
      "a) Brazil",
      "b) Canada",
      "c) Australia",
      "d) Russia"
    ]
  },
  {
    numb: 29,
    question: "What is a major consequence of thawing permafrost?",
    answer: "c) Release of methane gas",
    options: [
      "a) Increased ice formation",
      "b) Decreased sea levels",
      "c) Release of methane gas",
      "d) Stabilization of temperatures"
    ]
  },
  {
    numb: 30,
    question: "What is the role of carbon capture and storage (CCS) technology?",
    answer: "b) To capture and store carbon dioxide emissions from industrial sources",
    options: [
      "a) To reduce carbon emissions in transportation",
      "b) To capture and store carbon dioxide emissions from industrial sources",
      "c) To increase the efficiency of solar panels",
      "d) To promote reforestation efforts"
    ]
  },
  {
    numb: 31,
    question: "Which of the following is an example of a climate mitigation strategy?",
    answer: "d) Developing renewable energy sources",
    options: [
      "a) Building more highways",
      "b) Increasing fossil fuel use",
      "c) Expanding urban areas",
      "d) Developing renewable energy sources"
    ]
  },
  {
    numb: 32,
    question: "What is a common method used to measure global temperature changes?",
    answer: "c) Satellite observations",
    options: [
      "a) Ground-based measurements",
      "b) Weather balloons",
      "c) Satellite observations",
      "d) Ocean buoys"
    ]
  },
  {
    numb: 33,
    question: "What is a significant impact of climate change on agriculture?",
    answer: "d) Altered growing seasons",
    options: [
      "a) Increased crop yields",
      "b) Stabilized weather patterns",
      "c) Decreased water availability",
      "d) Altered growing seasons"
    ]
  },
  {
    numb: 34,
    question: "Which of the following actions can help reduce carbon emissions in buildings?",
    answer: "b) Improving energy efficiency",
    options: [
      "a) Increasing building size",
      "b) Improving energy efficiency",
      "c) Using more fossil fuels",
      "d) Reducing insulation"
    ]
  },
  {
    numb: 35,
    question: "What is the main purpose of climate models?",
    answer: "a) To predict future climate conditions based on current data",
    options: [
      "a) To predict future climate conditions based on current data",
      "b) To measure past climate conditions",
      "c) To enforce climate policies",
      "d) To collect public opinions on climate change"
    ]
  },
  {
    numb: 36,
    question: "Which sector is most affected by extreme weather events such as hurricanes and floods?",
    answer: "d) Agriculture",
    options: [
      "a) Technology",
      "b) Healthcare",
      "c) Finance",
      "d) Agriculture"
    ]
  },
  {
    numb: 37,
    question: "What is the main goal of energy conservation?",
    answer: "b) To reduce overall energy consumption",
    options: [
      "a) To increase energy production",
      "b) To reduce overall energy consumption",
      "c) To switch to renewable energy sources",
      "d) To build more power plants"
    ]
  },
  {
    numb: 38,
    question: "What is the primary cause of ocean acidification?",
    answer: "c) Increased carbon dioxide levels",
    options: [
      "a) Increased salinity",
      "b) Decreased temperatures",
      "c) Increased carbon dioxide levels",
      "d) Increased marine biodiversity"
    ]
  },
  {
    numb: 39,
    question: "Which of the following is a common method to measure carbon footprint?",
    answer: "d) Using carbon calculators",
    options: [
      "a) Tracking fuel consumption",
      "b) Monitoring greenhouse gas emissions",
      "c) Measuring energy use",
      "d) Using carbon calculators"
    ]
  },
  {
    numb: 40,
    question: "What is the purpose of the Montreal Protocol?",
    answer: "a) To phase out substances that deplete the ozone layer",
    options: [
      "a) To phase out substances that deplete the ozone layer",
      "b) To reduce greenhouse gas emissions",
      "c) To promote renewable energy",
      "d) To protect endangered species"
    ]
  },
  {
    numb: 41,
    question: "Which gas is primarily responsible for depleting the ozone layer?",
    answer: "b) Chlorofluorocarbons (CFCs)",
    options: [
      "a) Carbon dioxide",
      "b) Chlorofluorocarbons (CFCs)",
      "c) Methane",
      "d) Nitrous oxide"
    ]
  },
  {
    numb: 42,
    question: "What is the role of the Kyoto Protocol?",
    answer: "a) To set legally binding targets for reducing greenhouse gas emissions",
    options: [
      "a) To set legally binding targets for reducing greenhouse gas emissions",
      "b) To promote international trade",
      "c) To fund climate change research",
      "d) To create renewable energy standards"
    ]
  },
  {
    numb: 43,
    question: "Which renewable energy source is dependent on the sun's rays?",
    answer: "a) Solar power",
    options: [
      "a) Solar power",
      "b) Wind power",
      "c) Hydropower",
      "d) Geothermal energy"
    ]
  },
  {
    numb: 44,
    question: "What effect does deforestation have on local climates?",
    answer: "b) Increased temperatures",
    options: [
      "a) Decreased temperatures",
      "b) Increased temperatures",
      "c) Stabilized temperatures",
      "d) Increased rainfall"
    ]
  },
  {
    numb: 45,
    question: "What is the primary aim of carbon trading systems?",
    answer: "d) To provide economic incentives for reducing emissions",
    options: [
      "a) To enforce emissions limits",
      "b) To fund renewable energy projects",
      "c) To increase industrial production",
      "d) To provide economic incentives for reducing emissions"
    ]
  },
  {
    numb: 46,
    question: "Which country has committed to achieving net-zero emissions by 2050?",
    answer: "c) United Kingdom",
    options: [
      "a) United States",
      "b) Canada",
      "c) United Kingdom",
      "d) Australia"
    ]
  },
  {
    numb: 47,
    question: "What is a common consequence of climate change on water resources?",
    answer: "d) Altered precipitation patterns",
    options: [
      "a) More stable water resources",
      "b) Increased water availability",
      "c) Decreased salinity",
      "d) Altered precipitation patterns"
    ]
  },
  {
    numb: 48,
    question: "Which type of power generation uses the Earth's internal heat?",
    answer: "a) Geothermal energy",
    options: [
      "a) Geothermal energy",
      "b) Hydropower",
      "c) Solar power",
      "d) Wind power"
    ]
  },
  {
    numb: 49,
    question: "What is the primary method of reducing emissions from industrial processes?",
    answer: "c) Implementing cleaner technologies",
    options: [
      "a) Increasing production",
      "b) Reducing workforce",
      "c) Implementing cleaner technologies",
      "d) Expanding operations"
    ]
  },
  {
    numb: 50,
    question: "What impact does melting ice in the Arctic have on global sea levels?",
    answer: "b) It contributes to rising sea levels",
    options: [
      "a) It has no impact",
      "b) It contributes to rising sea levels",
      "c) It stabilizes sea levels",
      "d) It reduces sea levels"
    ]
  },
  {
    numb: 51,
    question: "Which of the following is an indirect effect of climate change on human health?",
    answer: "c) Increased prevalence of vector-borne diseases",
    options: [
      "a) Decreased air pollution",
      "b) Improved water quality",
      "c) Increased prevalence of vector-borne diseases",
      "d) Reduced respiratory issues"
    ]
  },
  {
    numb: 52,
    question: "What is the term for the process of removing carbon dioxide from the atmosphere and storing it?",
    answer: "b) Carbon sequestration",
    options: [
      "a) Carbon capture",
      "b) Carbon sequestration",
      "c) Carbon offsetting",
      "d) Carbon trading"
    ]
  },
  {
    numb: 53,
    question: "Which type of energy production has the lowest greenhouse gas emissions?",
    answer: "d) Wind power",
    options: [
      "a) Coal power",
      "b) Natural gas power",
      "c) Nuclear power",
      "d) Wind power"
    ]
  },
  {
    numb: 54,
    question: "What is a key goal of the Paris Agreement?",
    answer: "a) To limit global warming to well below 2°C above pre-industrial levels",
    options: [
      "a) To limit global warming to well below 2°C above pre-industrial levels",
      "b) To ban all fossil fuel use",
      "c) To eliminate deforestation",
      "d) To achieve 100% renewable energy"
    ]
  },
  {
    numb: 55,
    question: "Which of the following is a major greenhouse gas released from livestock?",
    answer: "b) Methane",
    options: [
      "a) Carbon dioxide",
      "b) Methane",
      "c) Nitrous oxide",
      "d) Chlorofluorocarbons"
    ]
  },
  {
    numb: 56,
    question: "What is the main environmental benefit of using public transportation?",
    answer: "c) Reducing individual carbon emissions",
    options: [
      "a) Reducing travel time",
      "b) Increasing fuel efficiency",
      "c) Reducing individual carbon emissions",
      "d) Improving public health"
    ]
  },
  {
    numb: 57,
    question: "Which of the following energy sources is considered renewable?",
    answer: "a) Solar power",
    options: [
      "a) Solar power",
      "b) Natural gas",
      "c) Coal",
      "d) Nuclear power"
    ]
  },
  {
    numb: 58,
    question: "What is the main impact of climate change on polar ice caps?",
    answer: "d) Melting and reduction",
    options: [
      "a) Expansion and thickening",
      "b) Stabilization",
      "c) No significant impact",
      "d) Melting and reduction"
    ]
  },
  {
    numb: 59,
    question: "What type of energy is derived from the movement of water?",
    answer: "b) Hydropower",
    options: [
      "a) Solar power",
      "b) Hydropower",
      "c) Wind power",
      "d) Geothermal energy"
    ]
  },
  {
    numb: 60,
    question: "What is the impact of increased global temperatures on ocean currents?",
    answer: "c) Disruption of normal patterns",
    options: [
      "a) Strengthening of currents",
      "b) Stabilization of currents",
      "c) Disruption of normal patterns",
      "d) No impact"
    ]
  },
  {
    numb: 61,
    question: "What is the primary driver of recent global warming?",
    answer: "d) Human activities",
    options: [
      "a) Natural climate cycles",
      "b) Volcanic eruptions",
      "c) Solar radiation changes",
      "d) Human activities"
    ]
  },
  {
    numb: 62,
    question: "What is the main effect of increasing global temperatures on glaciers?",
    answer: "b) Accelerated melting",
    options: [
      "a) Stabilization",
      "b) Accelerated melting",
      "c) Expansion",
      "d) No effect"
    ]
  },
  {
    numb: 63,
    question: "Which international agreement focuses on limiting greenhouse gas emissions globally?",
    answer: "b) Paris Agreement",
    options: [
      "a) Montreal Protocol",
      "b) Paris Agreement",
      "c) Kyoto Protocol",
      "d) Copenhagen Accord"
    ]
  },
  {
    numb: 64,
    question: "What is the primary benefit of energy-efficient appliances?",
    answer: "a) Reducing energy consumption",
    options: [
      "a) Reducing energy consumption",
      "b) Increasing energy output",
      "c) Reducing maintenance costs",
      "d) Increasing appliance lifespan"
    ]
  },
  {
    numb: 65,
    question: "What is the main source of energy for geothermal power?",
    answer: "c) Earth's internal heat",
    options: [
      "a) Solar energy",
      "b) Wind energy",
      "c) Earth's internal heat",
      "d) Biomass"
    ]
  },
  {
    numb: 66,
    question: "What is the primary purpose of afforestation?",
    answer: "b) To increase forest cover",
    options: [
      "a) To reduce air pollution",
      "b) To increase forest cover",
      "c) To improve soil quality",
      "d) To create wildlife reserves"
    ]
  },
  {
    numb: 67,
    question: "Which country is leading in offshore wind energy production?",
    answer: "a) Denmark",
    options: [
      "a) Denmark",
      "b) Spain",
      "c) Japan",
      "d) United States"
    ]
  },
  {
    numb: 68,
    question: "What is the effect of increased global temperatures on sea ice extent?",
    answer: "c) Reduction in sea ice extent",
    options: [
      "a) Increase in sea ice extent",
      "b) No impact",
      "c) Reduction in sea ice extent",
      "d) Stabilization of sea ice extent"
    ]
  },
  {
    numb: 69,
    question: "Which sector contributes the most to greenhouse gas emissions worldwide?",
    answer: "a) Energy production",
    options: [
      "a) Energy production",
      "b) Agriculture",
      "c) Transportation",
      "d) Industry"
    ]
  },
  {
    numb: 70,
    question: "What is the primary cause of sea level rise?",
    answer: "b) Thermal expansion of seawater",
    options: [
      "a) Increased rainfall",
      "b) Thermal expansion of seawater",
      "c) Ice accumulation",
      "d) Increased freshwater influx"
    ]
  },
  {
    numb: 71,
    question: "What is a significant environmental benefit of reforestation?",
    answer: "c) Carbon sequestration",
    options: [
      "a) Improved soil fertility",
      "b) Increased water availability",
      "c) Carbon sequestration",
      "d) Enhanced biodiversity"
    ]
  },
  {
    numb: 72,
    question: "Which greenhouse gas is most potent in terms of global warming potential?",
    answer: "b) Methane",
    options: [
      "a) Carbon dioxide",
      "b) Methane",
      "c) Nitrous oxide",
      "d) Water vapor"
    ]
  },
  {
    numb: 73,
    question: "What is the primary function of carbon offsets?",
    answer: "d) To compensate for emissions by funding equivalent reductions elsewhere",
    options: [
      "a) To directly reduce emissions",
      "b) To promote renewable energy",
      "c) To increase energy efficiency",
      "d) To compensate for emissions by funding equivalent reductions elsewhere"
    ]
  },
  {
    numb: 74,
    question: "What is the primary source of energy for hydroelectric power?",
    answer: "a) Flowing water",
    options: [
      "a) Flowing water",
      "b) Solar energy",
      "c) Wind energy",
      "d) Biomass"
    ]
  },
  {
    numb: 75,
    question: "What is the effect of climate change on biodiversity?",
    answer: "b) Loss of species",
    options: [
      "a) Increase in species variety",
      "b) Loss of species",
      "c) Stabilization of ecosystems",
      "d) Increased genetic diversity"
    ]
  },
  {
    numb: 76,
    question: "What is the main goal of the Green New Deal?",
    answer: "c) To address climate change and economic inequality",
    options: [
      "a) To increase fossil fuel production",
      "b) To reduce environmental regulations",
      "c) To address climate change and economic inequality",
      "d) To promote international trade"
    ]
  },
  {
    numb: 77,
    question: "What is the primary impact of climate change on coral reefs?",
    answer: "a) Coral bleaching",
    options: [
      "a) Coral bleaching",
      "b) Increased coral growth",
      "c) Stabilization of reef structures",
      "d) Enhanced biodiversity"
    ]
  },
  {
    numb: 78,
    question: "What is the main benefit of using electric vehicles?",
    answer: "b) Reducing greenhouse gas emissions",
    options: [
      "a) Increasing driving range",
      "b) Reducing greenhouse gas emissions",
      "c) Lowering vehicle costs",
      "d) Improving battery performance"
    ]
  },
  {
    numb: 79,
    question: "What is the primary goal of sustainable agriculture?",
    answer: "c) To produce food without depleting natural resources",
    options: [
      "a) To increase crop yields",
      "b) To reduce agricultural costs",
      "c) To produce food without depleting natural resources",
      "d) To promote large-scale farming"
    ]
  },
  {
    numb: 80,
    question: "Which of the following practices can help reduce water usage in agriculture?",
    answer: "d) Drip irrigation",
    options: [
      "a) Flood irrigation",
      "b) Surface irrigation",
      "c) Sprinkler irrigation",
      "d) Drip irrigation"
    ]
  },
  {
    numb: 81,
    question: "What is the main cause of ocean acidification?",
    answer: "a) Increased carbon dioxide in the atmosphere",
    options: [
      "a) Increased carbon dioxide in the atmosphere",
      "b) Increased plastic pollution",
      "c) Increased water temperature",
      "d) Increased nutrient runoff"
    ]
  },
  {
    numb: 82,
    question: "What is the purpose of the United Nations Framework Convention on Climate Change (UNFCCC)?",
    answer: "c) To address global climate change through international cooperation",
    options: [
      "a) To promote economic development",
      "b) To protect endangered species",
      "c) To address global climate change through international cooperation",
      "d) To reduce plastic pollution"
    ]
  },
  {
    numb: 83,
    question: "What is the term for the gradual increase in Earth's average temperature?",
    answer: "a) Global warming",
    options: [
      "a) Global warming",
      "b) Greenhouse effect",
      "c) Climate variability",
      "d) Environmental degradation"
    ]
  },
  {
    numb: 84,
    question: "Which country is known for its extensive use of wind power?",
    answer: "a) Denmark",
    options: [
      "a) Denmark",
      "b) Germany",
      "c) China",
      "d) United States"
    ]
  },
  {
    numb: 85,
    question: "What is the main purpose of energy audits?",
    answer: "a) To identify opportunities for energy savings",
    options: [
      "a) To identify opportunities for energy savings",
      "b) To monitor energy production",
      "c) To increase energy consumption",
      "d) To assess environmental impact"
    ]
  },
  {
    numb: 86,
    question: "Which gas is a major component of natural gas?",
    answer: "a) Methane",
    options: [
      "a) Methane",
      "b) Carbon dioxide",
      "c) Nitrogen",
      "d) Propane"
    ]
  },
  {
    numb: 87,
    question: "What is the primary benefit of using renewable energy sources?",
    answer: "a) Reducing reliance on fossil fuels",
    options: [
      "a) Reducing reliance on fossil fuels",
      "b) Increasing energy costs",
      "c) Improving fossil fuel efficiency",
      "d) Enhancing energy security"
    ]
  },
  {
    numb: 88,
    question: "What is the primary challenge of transitioning to renewable energy?",
    answer: "b) High initial costs",
    options: [
      "a) Lack of technology",
      "b) High initial costs",
      "c) Limited resources",
      "d) Low efficiency"
    ]
  },
  {
    numb: 89,
    question: "What is the main environmental issue with using coal as an energy source?",
    answer: "c) High greenhouse gas emissions",
    options: [
      "a) Low energy output",
      "b) Limited availability",
      "c) High greenhouse gas emissions",
      "d) High cost"
    ]
  },
  {
    numb: 90,
    question: "Which of the following is a strategy for reducing personal carbon footprint?",
    answer: "d) Reducing meat consumption",
    options: [
      "a) Increasing air travel",
      "b) Using more plastic products",
      "c) Driving larger vehicles",
      "d) Reducing meat consumption"
    ]
  },
  {
    numb: 91,
    question: "What is the effect of climate change on polar bear populations?",
    answer: "a) Decreased habitat",
    options: [
      "a) Decreased habitat",
      "b) Increased population",
      "c) Improved hunting conditions",
      "d) No significant impact"
    ]
  },
  {
    numb: 92,
    question: "What is the primary benefit of using energy-efficient light bulbs?",
    answer: "a) Lower energy consumption",
    options: [
      "a) Lower energy consumption",
      "b) Increased brightness",
      "c) Longer lifespan",
      "d) Reduced heat production"
    ]
  },
  {
    numb: 93,
    question: "What is the main goal of the Clean Power Plan?",
    answer: "b) To reduce carbon emissions from power plants",
    options: [
      "a) To promote renewable energy",
      "b) To reduce carbon emissions from power plants",
      "c) To increase energy efficiency",
      "d) To phase out coal use"
    ]
  },
  {
    numb: 94,
    question: "Which international agreement was adopted to address climate change in 2015?",
    answer: "a) Paris Agreement",
    options: [
      "a) Paris Agreement",
      "b) Kyoto Protocol",
      "c) Montreal Protocol",
      "d) Copenhagen Accord"
    ]
  },
  {
    numb: 95,
    question: "What is the primary method of reducing greenhouse gas emissions in transportation?",
    answer: "d) Increasing fuel efficiency",
    options: [
      "a) Reducing vehicle weight",
      "b) Using alternative fuels",
      "c) Expanding public transportation",
      "d) Increasing fuel efficiency"
    ]
  },
  {
    numb: 96,
    question: "What is the main impact of increased global temperatures on sea levels?",
    answer: "b) Rising sea levels",
    options: [
      "a) No impact",
      "b) Rising sea levels",
      "c) Decreased sea levels",
      "d) Stabilized sea levels"
    ]
  },
  {
    numb: 97,
    question: "What is the primary benefit of implementing green roofs?",
    answer: "a) Reducing urban heat island effect",
    options: [
      "a) Reducing urban heat island effect",
      "b) Increasing building height",
      "c) Improving building aesthetics",
      "d) Reducing building costs"
    ]
  },
  {
    numb: 98,
    question: "What is the main cause of glacier retreat?",
    answer: "b) Increased global temperatures",
    options: [
      "a) Decreased snowfall",
      "b) Increased global temperatures",
      "c) Increased precipitation",
      "d) Decreased solar radiation"
    ]
  },
  {
    numb: 99,
    question: "What is the primary goal of using electric vehicles?",
    answer: "c) Reducing greenhouse gas emissions",
    options: [
      "a) Reducing travel time",
      "b) Increasing vehicle speed",
      "c) Reducing greenhouse gas emissions",
      "d) Enhancing vehicle performance"
    ]
  },
  {
    numb: 100,
    question: "What is the primary purpose of the Clean Development Mechanism (CDM)?",
    answer: "a) To assist developing countries in achieving sustainable development and reducing emissions",
    options: [
      "a) To assist developing countries in achieving sustainable development and reducing emissions",
      "b) To promote international trade",
      "c) To increase renewable energy investment",
      "d) To fund climate change research"
    ]
  }
]
