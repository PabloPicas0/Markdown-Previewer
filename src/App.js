import React, { useState } from "react";
import "./App.css";

import Editor from "./editor";
import Previewer from "./previewer";

let welcomeText = `# Markdown Previewer 
---
Hi, I'm [Paweł](https://github.com/PabloPicas0), and this is my React Markdown Previewer

The project was only for learning purposes and as a part of **Front End Development Libraries Projects** by [FreeCodeCamp](https://www.freecodecamp.org/)

The challange can be finded [Here](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer)

![freeCodeCamp](https://camo.githubusercontent.com/d069971a0af4d9e393066dc77ced000cff23a1f6bbfbb9e7704a870192a926ca/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f66726565636f646563616d702f776964652d736f6369616c2d62616e6e65722e706e67)

## Markdown usage is simple, here it is basic syntax:
<br/>
<br/>

### 1. Headings:
<br/>

# Largest Heading
---
## Second Largest Heading
---
### Third Largest Heading
---
###### Smallest Heading
---
<br/>

### 2. Styling Text
<br/>
Inline code

*Italic text* or _Italic text_

**Bold text** or __Bold text__

_**Bold and italic text**_

or

***Bold and italic text***

**Bold with _italic nesting_**

~~Strikethrough text~~

> NOTE: Text is rendered on a new line only if there is an empty line in between.
---

### 3. Lists

- Unordered list
* Unordered list

1. Ordered list
1. Ordered list

- **Writing under the same list item**

Add two to three whitespaces below a list item to render a paragraph under the list item

- **Unordered list nesting**
- Unordered nested list item
- Unordered nested list item
   - Unordered nested list item

1. **Ordered list nesting**
1. Ordered nested list item
1. Ordered nested list item
   1. Ordered nested list item

1. **Ordered and unordered list nesting**
- Unordered nested list item
   1. Ordered nested list item
   1. Ordered nested list item
- Unordered nested list item

> NOTE: Keep adding 3 whitespaces before hyphen for every level of nesting.
---

### 4. Quoting Text
<br/>

> Quoted text

>> Nested quote

---

### 5. Task Lists
</br>

- [x] Complete task
- [x] Complete task
- [x] Complete task
- [ ] Incomplete task

---

### 7. Quoting Code
<br/>

\`\`\`
// this is a multi-line code:

function doSomething(code) {
  if (code === 0) {
    return "Done!";
  }
  doSomething(code - 1)
}
\`\`\`

And here is example of inline code:

> \` let message = "Thank you for using Preview Markdown!"; \`
`;

function App() {
  const [input, setInput] = useState(welcomeText);
  const [onlyEdit, setOnlyEdit] = useState(false);
  const [onlyPreview, setOnlyPreview] = useState(false);

  const handlePreviewClick = () => {
    setOnlyPreview((lastPreview) => !lastPreview);
  };

  const handleEditClick = () => {
    setOnlyEdit((lastEdit) => !lastEdit);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="container-fluid bg-dark">
      <div className="min-vh-100 row">
        <div
          style={{ display: onlyPreview ? "none" : "block" }}
          className={`col-lg-${onlyEdit ? "12" : "5"} mt-3`}>
          <Editor
            input={input}
            change={handleChange}
            click={handleEditClick}
            onlyEdit={onlyEdit}
          />
        </div>
        <div
          style={{ display: onlyEdit ? "none" : "block" }}
          className={`col-lg-${onlyPreview ? "12" : "7"} mt-3`}>
          <Previewer
            input={input}
            onlyPreview={onlyPreview}
            click={handlePreviewClick}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
