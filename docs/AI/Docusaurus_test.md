
# Docusaurus test




```py title="test.py" showLineNumbers{2-3}
test codeblock
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn import metrics
import numpy as np

# Let's assume X and y are your features and target respectively
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)
```



:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::



:::warning

This is a codeblock **test** on `docusaurus`

:::










```jsx  title="HelloCodeTitle.js" showLineNumbers
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
```










In this code block, `npx` is a package runner tool that comes with `npm`. `@docusaurus/init@latest` is the latest version of the Docusaurus initialization package, `init` is the command to initialize a new project, `my-website` is the name of your new project, and `classic` is the template for your new Docusaurus website.

Here's an example of a Python code block for doing linear regression using the `sklearn` library:

```python
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn import metrics
import numpy as np

# Let's assume X and y are your features and target respectively
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)

regressor = LinearRegression()
regressor.fit(X_train, y_train) #training the algorithm

#To retrieve the intercept:
print(regressor.intercept_)
#For retrieving the slope:
print(regressor.coef_)

y_pred = regressor.predict(X_test)

print('Mean Absolute Error:', metrics.mean_absolute_error(y_test, y_pred))
print('Mean Squared Error:', metrics.mean_squared_error(y_test, y_pred))
print('Root Mean Squared Error:', np.sqrt(metrics.mean_squared_error(y_test, y_pred)))

```

Here's a Python code block for doing linear regression with important lines highlighted:

```python
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn import metrics
import numpy as np

# Let's assume X and y are your features and target respectively
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)

regressor = LinearRegression()
regressor.fit(X_train, y_train) #training the algorithm

#To retrieve the intercept:
print(regressor.intercept_) # Highlight
#For retrieving the slope:
print(regressor.coef_) # Highlight

y_pred = regressor.predict(X_test)

print('Mean Absolute Error:', metrics.mean_absolute_error(y_test, y_pred)) # Highlight
print('Mean Squared Error:', metrics.mean_squared_error(y_test, y_pred)) # Highlight
print('Root Mean Squared Error:', np.sqrt(metrics.mean_squared_error(y_test, y_pred))) # Highlight

```

## Introduction to Docusaurus

Docusaurus is a powerful tool for building documentation websites. It is open-source and built with React, allowing for a dynamic and modern user experience.

One of the key features of Docusaurus is its simplicity. It provides a straightforward setup process and a default template that makes it easy to create a clean, professional-looking documentation site.

Docusaurus supports Markdown, allowing you to write your documentation in a straightforward and readable format that can be easily converted into HTML. It also has built-in support for versioning, so you can easily manage and navigate different versions of your documentation.

## Benefits of Docusaurus

Docusaurus offers several benefits as a documentation tool:

- **Ease of Use**: With a straightforward setup process and support for Markdown, Docusaurus makes it easy to create and manage your documentation.
- **Versioning**: Docusaurus has built-in support for versioning, making it easy to manage different versions of your documentation and ensure users can access the information they need.
- **Customizability**: While Docusaurus provides a default template, it also allows you to customize your site to suit your needs, giving you control over the look and feel of your documentation.
- **Community Support**: As an open-source tool, Docusaurus has a strong community behind it, providing a wealth of resources and support for users.

In conclusion, Docusaurus is a robust, user-friendly tool for creating documentation websites. Whether you're documenting a project for a small team or managing documentation for a large open-source project, Docusaurus provides the features and flexibility you need.

| Pros | Cons |
| --- | --- |
| Ease of use with straightforward setup | Initial learning curve for those unfamiliar with React |
| Supports Markdown for easy documentation writing | Customization may require knowledge of React |
| Built-in support for versioning | Limited in design templates |
| Highly customizable | Might be complex for simple projects |
| Strong community support | Depends on community for updates and bug fixes |