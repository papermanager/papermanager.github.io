# Using the component

The Paper Manager component lets the user manage the paper collection. It offers three CRUD editors. One for the paper categories, another for the authors and a third one for the papers themselves. Each can be accessed from the administration by navigating to *Components &#8594; Paper Manager &#8594; Categories*, *Components &#8594; Paper Manager &#8594; Authors* and *Components &#8594; Paper Manager &#8594; Papers* respectively. Each item in these lists has the following fields:

- Categories
  - `ID`: Record number in the database.
  - `Title`: The title of the category.
- Authors
  - `ID`: Record number in the database.
  - `Name`: The first and last name of the author.
- Papers
  - `ID`: Record number in the database.
  - `Title`: The title of the paper.
  - `Authors`: List of the paper's authors. Multiple authors can be selected. The authors can be edited in *Components &#8594; Paper Manager &#8594; Authors*.
  - `Category`: The paper's category. A single category can be selected. The categories can be edited in *Components &#8594; Paper Manager &#8594; Categories*.
  - `Year`: The year of the publication.
  - `Month`: The month of the publication.
  - `Produced In Lab`: Checkbox – checked if the paper was produced in the lab. This field is relevant only on research lab or organization websites and not on personal profile websites.
  - `HTML Text`: The HTML text that will be used by the plugin to display the paper entry on the site.

<p align="center">
  <img alt="PaperManagerER" src="/img/paper_manager_er.png" title="Paper Manager ER" />
</p>

### Getting started with the Paper Manager component

- From the administration, navigate to *Components &#8594; Paper Manager &#8594; Categories* and add the following entries:
  - Title: `Journal Publications`
  - Title: `Conference Publications`

<p align="center">
  <img alt="PaperManagerCategories" src="/img/paper_manager_tutorial_categories_small.png" title="Paper Manager Categories" />
</p>

- Navigate to *Components &#8594; Paper Manager &#8594; Authors* and add the following entries:
  - Name: `Author 1`
  - Name: `Author 2`
  - Name: `Author 3`
  - Name: `Author 4`
  - Name: `Author 5`

<p align="center">
  <img alt="PaperManagerAuthors" src="/img/paper_manager_tutorial_authors_small.png" title="Paper Manager Authors" />
</p>

- Navigate to *Components &#8594; Paper Manager &#8594; Papers* and add the following entries:
  - Title: `Paper 1`,<br />
    Authors: `{Author 2, Author 4, Author 5}`,<br />
    Category: `Journal Publications`,<br />
    Year: `2013`,<br />
    Month: `April`,<br />
    Produced in Lab: `Not Checked`,<br />
    HTML Text: `Author 2, Author 4, Author 5. Paper 1. Journal of Something 10(1):25-35`
  - Title: `Paper 2`,<br />
    Authors: `{Author 1, Author 3, Author 5}`,<br />
    Category: `Journal Publications`,<br />
    Year: `2014`,<br />
    Month: `January`,<br />
    Produced in Lab: `Checked`,<br />
    HTML Text: `Author 1, Author 3, Author 5. Paper 2. Journal of Something Else 25(3):36-55`
  - Title: `Paper 3`,<br />
    Authors: `{Author 1, Author 3, Author 4}`,<br />
    Category: `Journal Publications`,<br />
    Year: `2013`,<br />
    Month: `February`,<br />
    Produced in Lab: `Checked`,<br />
    HTML Text: `Author 1, Author 3, Author 4. Paper 3. Journal of Something Different 6(4):28-49`
  - Title: `Paper 4`,<br />
    Authors: `{Author 2, Author 3, Author 4}`,<br />
    Category: `Conference Publications`,<br />
    Year: `2013`,<br />
    Month: `August`,<br />
    Produced in Lab: `Checked`,<br />
    HTML Text: `Author 2, Author 4, Author 5. Paper 4. 5th International Conference of Something, Athens, Greece, July 5-6, 2013`

<p align="center">
  <img alt="PaperManagerPaper" src="/img/paper_manager_tutorial_paper_small.png" title="Paper Manager Paper" />
</p>

<p align="center">
  <img alt="PaperManagerPapers" src="/img/paper_manager_tutorial_papers_small.png" title="Paper Manager Papers" />
</p>
