const template = 
`---
title             : "The title"
shorttitle        : "Title"

author: 
  - name          : "First Author"
    affiliation   : "1"
    corresponding : yes    # Define only one corresponding author
    address       : "Postal address"
    email         : "my@email.com"
    role:         # Contributorship roles (e.g., CRediT, https://casrai.org/credit/)
      - "Conceptualization"
      - "Writing - Original Draft Preparation"
      - "Writing - Review & Editing"
  - name          : "Ernst-August Doelle"
    affiliation   : "1,2"
    role:
      - "Writing - Review & Editing"
      - "Supervision"

affiliation:
  - id            : "1"
    institution   : "Wilhelm-Wundt-University"
  - id            : "2"
    institution   : "Konstanz Business School"

authornote: |
  Add complete departmental affiliations for each author here. Each new line herein must be indented, like this line.

  Enter author note here.

abstract: |
  One or two sentences providing a **basic introduction** to the field,  comprehensible to a scientist in any discipline.
  
  Two to three sentences of **more detailed background**, comprehensible  to scientists in related disciplines.
  
  One sentence clearly stating the **general problem** being addressed by  this particular study.
  
  One sentence summarizing the main result (with the words "**here we show**" or their equivalent).
  
  Two or three sentences explaining what the **main result** reveals in direct comparison to what was thought to be the case previously, or how the  main result adds to previous knowledge.
  
  One or two sentences to put the results into a more **general context**.
  
  Two or three sentences to provide a **broader perspective**, readily comprehensible to a scientist in any discipline.
  
  <!-- https://tinyurl.com/ybremelq -->
  
keywords          : "keywords"
wordcount         : "X"

bibliography      : ["r-references.bib", "bibliography.bib"]

floatsintext      : no
linenumbers       : yes
draft             : no
mask              : no

figurelist        : no
tablelist         : no
footnotelist      : no

classoption       : "man"
output            : papaja::apa6_pdf
---

\`\`\`{r setup, include = FALSE}
library("papaja")
r_refs("r-references.bib")
\`\`\`

\`\`\`{r analysis-preferences}
# Seed for random number generation
set.seed(42)
knitr::opts_chunk$set(cache.extra = knitr::rand_seed)
\`\`\`



# Methods
We report how we determined our sample size, all data exclusions (if any), all manipulations, and all measures in the study. <!-- 21-word solution (Simmons, Nelson & Simonsohn, 2012; retrieved from http://ssrn.com/abstract=2160588) -->

## Participants

## Material

## Procedure

## Data analysis
We used \`r cite_r("r-references.bib")\` for all our analyses.


# Results

# Discussion


\\newpage

# References

::: {#refs custom-style="Bibliography"}
:::
`

const rReferences =
`@Manual{R-base,
    title = {R: A Language and Environment for Statistical Computing},
    author = {{R Core Team}},
    organization = {R Foundation for Statistical Computing},
    address = {Vienna, Austria},
    year = {2022},
    url = {https://www.R-project.org/},
}
@Manual{R-papaja,
    title = {{papaja}: {Prepare} reproducible {APA} journal articles with {R Markdown}},
    author = {Frederik Aust and Marius Barth},
    year = {2022},
    note = {R package version 0.1.1},
    url = {https://github.com/crsh/papaja},
}
@Manual{R-tinylabels,
    title = {{tinylabels}: Lightweight Variable Labels},
    author = {Marius Barth},
    year = {2022},
    note = {R package version 0.2.3},
    url = {https://cran.r-project.org/package=tinylabels},
}
`

const readme =
`# A new research project!

Just explain your study here, tell others who you are and what you did.
 
---

You can start by editing \`source.Rmd\`.

## The template
- **source.Rmd:** The main document.
- **r-references.bib:** References to the R project, papaja and tinylabels.
- **bibliography.bib:** Your own bibliography.
- **raw-data/:** The data you collected.
- **processed-data/:** The data after processing.
- **doc/:** Any materials you used for your study.
- **0-Preprocessing.R:** Script for preprocessing the data. You can create other script files: <execution order>-<title>.R
`;

module.exports = {
    template, rReferences, readme
}