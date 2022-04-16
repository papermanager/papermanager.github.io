# Using the plugin

The Paper Manager plugin loads Paper Manager publications within content (ex. articles). It works in a similar way with the *Content - Load Modules* plugin, which is included in the core Joomla distribution. Special code snippets are used in the content that are translated into HTML code (lists of papers) in the front-end.

You have to enable the plugin before using it. To do this, navigate to *System &#8594; Manage &#8594; Plugins* and enable *Content - Paper Manager Plugin*.

From the same page (*System &#8594; Manage &#8594; Plugins &#8594; Content - Paper Manager Plugin*), the plugin's [default parameters](#plugin-parameters) can also be edited.

### Getting started with the Paper Manager plugin

- From the article manager, create an article titled *Journal Publications* and a menu item of the same name targeting this single article.
- Edit this article and insert the following code in its content:

```html
{loadpapers:authors=any:categories=1:years=any:months=any:lab=1:style=olreversed}
```

<p align="center">
  <img alt="PaperManagerPlugin" src="/img/paper_manager_plugin_tutorial_1_small.png" title="Paper Manager Plugin" />
</p>

- From the article manager, create an article titled *Author 2* and a menu item of the same name targeting this single article.
- Edit this article and insert the following code in its content:

```html
{loadpapers:authors=2:categories=any:years=any:months=any:lab=any:style=olreversed}
```

<p align="center">
  <img alt="PaperManagerPlugin" src="/img/paper_manager_plugin_tutorial_3_small.png" title="Paper Manager Plugin" />
</p>

- Create two menu items pointing to the two newly created articles.

<p align="center">
  <img alt="PaperManagerPlugin" src="/img/paper_manager_plugin_tutorial_2_small.png" title="Paper Manager Plugin" />
</p>

<p align="center">
  <img alt="PaperManagerPlugin" src="/img/paper_manager_plugin_tutorial_4_small.png" title="Paper Manager Plugin" />
</p>

### Code snippets syntax

Code snippets should be written in the following form. Each snippet works as a query to the plugin. The plugin processes the queries, retrieves the appropriate papers and generates the HTML code for each query/paper list.

```html
{loadpapers:authors=X:categories=X:years=X:months=X:lab=X:style=X}
```

*X* denotes a value. Six constraints are used in a single snippet:

- **authors**: The ID of a single author or the IDs of multiple authors separated by comma.
  - Value range: `1 | ... | n | any`
  - Examples: `1,20,12,23`, `any`
- **categories**: The ID of a single category or the IDs of multiple categories separated by comma.
  - Value range: `1 | ... | n | any`
  - Examples: `1,20,12,23`, `any`
- **years**: A single year (four digit format) or multiple years separated by comma.
  - Value range: `YYYY | any`
  - Examples: `2013,2014`, `any`
- **months**: A single month (range from 1 to 12 format) or multiple months separated by comma.
  - Value range: `1 | ... | 12 | any`
  - Examples: `7`, `any`
- **lab**: Defines whether to retrieve papers produced in the lab or outside of it. Value 1 stands for *produced in the lab* and 2 for *not produced in the lab*.
  - Value range: `1 | 2 | any`
  - Examples: `1`, `2`, `any`
- **style**: The code that will wrap the papers lists. ( [more...](#style) )
  - Value range: `ul | ol | olreversed | div | none | default`
  - Example: `olreversed`

To omit a constraint from the query, its value should be set to `any`. *authors*, *categories*, *years*, *months* and *lab* can be set to `any` if you don't want to constrain the output to some specific value. `any` does not work for *style* though. *style* accepts the value `default` in order to make use of the style set in the default [plugin's parameters](#plugin-parameters).

### Plugin parameters

To edit the parameters of the plugin, navigate to *System &#8594; Manage &#8594; Plugins &#8594; Content - Paper Manager Plugin*.

#### Style

The style of the code that will wrap papers lists. It can get the values `ul | ol | olreversed | div | none | default`. Each style outputs the following HTML code:

##### `ul` - Wrapped by unordered list

```html
<ul class="papermanager_front_list">
     <li class="papermanager_front_list_item">Item 1</li>
     <li class="papermanager_front_list_item">Item 2</li>
     ...
     <li class="papermanager_front_list_item">Item n</li>
</ul>
```

##### `ol` - Wrapped by ordered list

```html
<ol class="papermanager_front_list">
     <li class="papermanager_front_list_item">Item 1</li>
     <li class="papermanager_front_list_item">Item 2</li>
     ...
     <li class="papermanager_front_list_item">Item n</li>
</ol>
```

##### `olreversed` - Wrapped by reverse ordered list

```html
<ol reversed="" class="papermanager_front_list">
     <li class="papermanager_front_list_item">Item 1</li>
     <li class="papermanager_front_list_item">Item 2</li>
     ...
     <li class="papermanager_front_list_item">Item n</li>
</ol>
```

##### `div` - Wrapped by Divs

```html
<div class="papermanager_front_list">
     <div class="papermanager_front_list_item">Item 1</div>
     <div class="papermanager_front_list_item">Item 2</div>
      ...
     <div class="papermanager_front_list_item">Item n</div>
</div>
```

As it can be noticed, certain CSS classes are assigned to the generated HTML code to provide a way of stylizing the output. The following CSS rules can be used as a template:

```css
ul.papermanager_front_list{
}
ul.papermanager_front_list li.papermanager_front_list_item{
}
ol.papermanager_front_list{
}
ol.papermanager_front_list li.papermanager_front_list_item{
}
div.papermanager_front_list{
}
div.papermanager_front_list div.papermanager_front_list_item{
}
```
