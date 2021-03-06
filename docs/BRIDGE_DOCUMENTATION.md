<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [User][1]
    -   [getCurrentUserName][2]
        -   [Examples][3]
    -   [getCurrentUserEmail][4]
    -   [getCurrentUserRegions][5]
    -   [getAccessToken][6]
-   [Storage][7]
    -   [getItem][8]
        -   [Parameters][9]
        -   [Examples][10]
    -   [setItem][11]
        -   [Parameters][12]
        -   [Examples][13]
    -   [getGlobalItem][14]
        -   [Parameters][15]
    -   [setGlobalItem][16]
        -   [Parameters][17]
-   [Emails][18]
    -   [sendEmail][19]
        -   [Parameters][20]
        -   [Examples][21]
    -   [sendEmailHtml][22]
        -   [Parameters][23]
        -   [Examples][24]
    -   [sendEmailWithFileAttachmentFromBase64][25]
        -   [Parameters][26]
        -   [Examples][27]

## User

### getCurrentUserName

Get the current user's username

#### Examples

```javascript
Modus.getCurrentUserName().then((username) => { });
```

Returns **[Promise][28]&lt;[string][29]>** promise with the username

**Meta**

-   **version**: iOS - 1.7.9  | Android - 2.1.6  |  Windows - 4.3.0.0

### getCurrentUserEmail

Get the current user's email

Returns **[Promise][28]&lt;[string][29]>** current user email

**Meta**

-   **version**: iOS - 2.6  | Android - 2.1.6  |  Windows - 5.0.0.0

### getCurrentUserRegions

Returns the currently logged in user's regions

Returns **[Promise][28]&lt;[Array][30]&lt;[string][29]>>** List of current user's regions

**Meta**

-   **version**: iOS - 2.6.3  | Android - 2.1.6  |  Windows - N/A

### getAccessToken

Returns the currently logged in user's access token

Returns **[Promise][28]&lt;[string][29]>** An access token

**Meta**

-   **version**: iOS - 5.0.8  | Android - N/A  |  Windows - N/A

## Storage

### getItem

Gets a value for a specified key from the native local database

#### Parameters

-   `key` **[string][29]** name of the "key" you want to retrieve the value of

#### Examples

```javascript
Modus.getItem("test").then((val) => { 
      //do something
  });
```

Returns **[Promise][28]&lt;[string][29]>** The value of the key. If key does not exist `null` is returned

**Meta**

-   **version**: iOS - 1.7.0  | Android - N/A  |  Windows - N/A

### setItem

Sets a value for a specified key to the native local database

#### Parameters

-   `key` **[string][29]** name of the "key" you want to set the value of
-   `value` **[string][29]** The value you want to assign to the key

#### Examples

```javascript
Modus.setItem("test", "Hello World!").then(() =>{ 
      // success!
      // no value returned
  });
```

**Meta**

-   **version**: iOS - 1.7.0  | Android - N/A  |  Windows - 5.1.0.0

### getGlobalItem

Gets a value for a specified key from the native local database. This value is accessible between different web bundles

#### Parameters

-   `key` **[string][29]** name of the "key" you want to retrieve the value of

Returns **[Promise][28]&lt;[string][29]>** The value of the key. If key does not exist `null` is returned

**Meta**

-   **version**: iOS - 1.7.0  | Android - N/A  |  Windows - N/A

### setGlobalItem

Sets a value for a specified key to the native local database. This value is accessible between different web bundles

#### Parameters

-   `key` **[string][29]** name of the "key" you want to set the value of
-   `value` **[string][29]** The value you want to assign to the key

**Meta**

-   **version**: iOS - 1.7.0  | Android - N/A  |  Windows - 5.1.0.0

## Emails

### sendEmail

#### Parameters

-   `to` **[string][29]** reciept email address
-   `cc` **[string][29]** carbon copy email address
-   `subject` **[string][29]** subject of the email
-   `body` **[string][29]** body of the email (plaintext only)

#### Examples

```javascript
Modus.sendEmail("test@gmail.com", "", "Test Subject Line", "Test body").then(() =>{
//email sent successfully
});
```

Returns **[Promise][28]** . No data returned.

**Meta**

-   **version**: iOS - 1.7.0  | Android - 2.1.6+  |  Windows - N/A

### sendEmailHtml

#### Parameters

-   `to` **[string][29]** reciept email address
-   `cc` **[string][29]** carbon copy email address
-   `subject` **[string][29]** subject of the email
-   `html` **[string][29]** body of the email (HTML)

#### Examples

```javascript
Modus.sendEmail("test@gmail.com", "", "Test Subject Line", "<h1>Hello World!</h1>").then(() =>
      //email sent successfully
  }).catch((ex) =>{
      //email failed to send
  });
```

Returns **[Promise][28]** . No data returned.

**Meta**

-   **version**: iOS - 1.7.0  | Android - 2.1.6+  |  Windows - N/A

### sendEmailWithFileAttachmentFromBase64

#### Parameters

-   `data`  
-   `to` **[string][29]** destination email address
-   `cc` **[string][29]** carbon copy email address
-   `subject` **[string][29]** subject of the email
-   `html` **[string][29]** body of the email (plaintext)
-   `attachmentName` **[string][29]** file name of the attachment (you must include the extension)
-   `attachmentBase64` **[string][29]** Base 64 representation of the file you would like to attach

#### Examples

```javascript
Modus.sendEmail("test@gmail.com", "", "Subject Line for HTML", "Check out my attachments").then(() =>
      //email sent successfully
  }).catch((ex) =>{
      //email failed to send
  });
```

Returns **[Promise][28]** . No data returned.

**Meta**

-   **version**: iOS - 5.0.8+  | Android - 4.3.0+  |  Windows - 5.0.0.0+

[1]: #user

[2]: #getcurrentusername

[3]: #examples

[4]: #getcurrentuseremail

[5]: #getcurrentuserregions

[6]: #getaccesstoken

[7]: #storage

[8]: #getitem

[9]: #parameters

[10]: #examples-1

[11]: #setitem

[12]: #parameters-1

[13]: #examples-2

[14]: #getglobalitem

[15]: #parameters-2

[16]: #setglobalitem

[17]: #parameters-3

[18]: #emails

[19]: #sendemail

[20]: #parameters-4

[21]: #examples-3

[22]: #sendemailhtml

[23]: #parameters-5

[24]: #examples-4

[25]: #sendemailwithfileattachmentfrombase64

[26]: #parameters-6

[27]: #examples-5

[28]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise

[29]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[30]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array
