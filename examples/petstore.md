title: Swagger Petstore

description: This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.

social: false

===

# Swagger Petstore

This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.

## Content

Tag: [pet](#pet)

* [Add a new pet to the store](#add-a-new-pet-to-the-store)
* [Update an existing pet](#update-an-existing-pet)
* [Finds Pets by status](#finds-pets-by-status)
* [Finds Pets by tags](#finds-pets-by-tags)
* [Find pet by ID](#find-pet-by-id)
* [Updates a pet in the store with form data](#updates-a-pet-in-the-store-with-form-data)
* [Deletes a pet](#deletes-a-pet)
* [uploads an image](#uploads-an-image)

Tag: [store](#store)

* [Returns pet inventories by status](#returns-pet-inventories-by-status)
* [Place an order for a pet](#place-an-order-for-a-pet)
* [Find purchase order by ID](#find-purchase-order-by-id)
* [Delete purchase order by ID](#delete-purchase-order-by-id)

Tag: [user](#user)

* [Create user](#create-user)
* [Creates list of users with given input array](#creates-list-of-users-with-given-input-array)
* [Creates list of users with given input array](#creates-list-of-users-with-given-input-array)
* [Logs user into the system](#logs-user-into-the-system)
* [Logs out current logged in user session](#logs-out-current-logged-in-user-session)
* [Get user by user name](#get-user-by-user-name)
* [Updated user](#updated-user)
* [Delete user](#delete-user)

[Definitions](#definitions)

* [Order](#/definitions/Order)
* [User](#/definitions/User)
* [Category](#/definitions/Category)
* [Tag](#/definitions/Tag)
* [Pet](#/definitions/Pet)
* [ApiResponse](#/definitions/ApiResponse)

## pet

Everything about your Pets

### Add a new pet to the store

    POST http://petstore.swagger.io/v2/pet

#### Request

##### Parameters

Position|Name|Type|Description
---|---|---|---
body|`body`|[_Pet_](#/definitions/Pet)|

##### Example

```application/json
{
  "name": "doggie"
}
```

#### Responses

_Code_ `405`: Invalid input

### Update an existing pet

    PUT http://petstore.swagger.io/v2/pet

#### Request

##### Parameters

Position|Name|Type|Description
---|---|---|---
body|`body`|[_Pet_](#/definitions/Pet)|

##### Example

```application/json
{
  "name": "doggie"
}
```

#### Responses

_Code_ `400`: Invalid ID supplied

_Code_ `404`: Pet not found

_Code_ `405`: Validation exception

### Finds Pets by status

    GET http://petstore.swagger.io/v2/pet/findByStatus

#### Request

##### Parameters

Position|Name|Type|Description
---|---|---|---
query|`status`|_array_|Status values that need to be considered for filter

##### Example

#### Responses

_Code_ `200`: successful operation

_Schema_: [ [_Pet_](#/definitions/Pet) ]

_Code_ `400`: Invalid status value

### Finds Pets by tags

    GET http://petstore.swagger.io/v2/pet/findByTags

#### Request

##### Parameters

Position|Name|Type|Description
---|---|---|---
query|`tags`|_array_|Tags to filter by

##### Example

#### Responses

_Code_ `200`: successful operation

_Schema_: [ [_Pet_](#/definitions/Pet) ]

_Code_ `400`: Invalid tag value

### Find pet by ID

    GET http://petstore.swagger.io/v2/pet/{petId}

#### Request

##### Parameters

Position|Name|Type|Description
---|---|---|---
path|`petId`|_integer_|ID of pet to return

##### Example

#### Responses

_Code_ `200`: successful operation

_Schema_: [_Pet_](#/definitions/Pet)

_Code_ `400`: Invalid ID supplied

_Code_ `404`: Pet not found

### Updates a pet in the store with form data

    POST http://petstore.swagger.io/v2/pet/{petId}

#### Request

##### Parameters

Position|Name|Type|Description
---|---|---|---
path|`petId`|_integer_|ID of pet that needs to be updated
formData|`name`|_string_|Updated name of the pet
formData|`status`|_string_|Updated status of the pet

##### Example

#### Responses

_Code_ `405`: Invalid input

### Deletes a pet

    DELETE http://petstore.swagger.io/v2/pet/{petId}

#### Request

##### Parameters

Position|Name|Type|Description
---|---|---|---
header|`api_key`|_string_|
path|`petId`|_integer_|Pet id to delete

##### Example

#### Responses

_Code_ `400`: Invalid ID supplied

_Code_ `404`: Pet not found

### uploads an image

    POST http://petstore.swagger.io/v2/pet/{petId}/uploadImage

#### Request

##### Parameters

Position|Name|Type|Description
---|---|---|---
path|`petId`|_integer_|ID of pet to update
formData|`additionalMetadata`|_string_|Additional data to pass to server
formData|`file`|_file_|file to upload

##### Example

#### Responses

_Code_ `200`: successful operation

_Schema_: [_ApiResponse_](#/definitions/ApiResponse)

## store

Access to Petstore orders

### Returns pet inventories by status

    GET http://petstore.swagger.io/v2/store/inventory

#### Request

#### Responses

_Code_ `200`: successful operation

_Schema_:

Name|Type|Description
---|---|---

### Place an order for a pet

    POST http://petstore.swagger.io/v2/store/order

#### Request

##### Parameters

Position|Name|Type|Description
---|---|---|---
body|`body`|[_Order_](#/definitions/Order)|

##### Example

```application/json
{}
```

#### Responses

_Code_ `200`: successful operation

_Schema_: [_Order_](#/definitions/Order)

_Code_ `400`: Invalid Order

### Find purchase order by ID

    GET http://petstore.swagger.io/v2/store/order/{orderId}

#### Request

##### Parameters

Position|Name|Type|Description
---|---|---|---
path|`orderId`|_integer_|ID of pet that needs to be fetched

##### Example

#### Responses

_Code_ `200`: successful operation

_Schema_: [_Order_](#/definitions/Order)

_Code_ `400`: Invalid ID supplied

_Code_ `404`: Order not found

### Delete purchase order by ID

    DELETE http://petstore.swagger.io/v2/store/order/{orderId}

#### Request

##### Parameters

Position|Name|Type|Description
---|---|---|---
path|`orderId`|_integer_|ID of the order that needs to be deleted

##### Example

#### Responses

_Code_ `400`: Invalid ID supplied

_Code_ `404`: Order not found

## user

Operations about user

### Create user

    POST http://petstore.swagger.io/v2/user

#### Request

##### Parameters

Position|Name|Type|Description
---|---|---|---
body|`body`|[_User_](#/definitions/User)|

##### Example

```application/json
{}
```

#### Responses

_Code_ `default`: successful operation

### Creates list of users with given input array

    POST http://petstore.swagger.io/v2/user/createWithArray

#### Request

##### Parameters

Position|Name|Type|Description
---|---|---|---
body|`body`|_array_|

##### Example

#### Responses

_Code_ `default`: successful operation

### Creates list of users with given input array

    POST http://petstore.swagger.io/v2/user/createWithList

#### Request

##### Parameters

Position|Name|Type|Description
---|---|---|---
body|`body`|_array_|

##### Example

#### Responses

_Code_ `default`: successful operation

### Logs user into the system

    GET http://petstore.swagger.io/v2/user/login

#### Request

##### Parameters

Position|Name|Type|Description
---|---|---|---
query|`username`|_string_|The user name for login
query|`password`|_string_|The password for login in clear text

##### Example

#### Responses

_Code_ `200`: successful operation

_Code_ `400`: Invalid username/password supplied

### Logs out current logged in user session

    GET http://petstore.swagger.io/v2/user/logout

#### Request

#### Responses

_Code_ `default`: successful operation

### Get user by user name

    GET http://petstore.swagger.io/v2/user/{username}

#### Request

##### Parameters

Position|Name|Type|Description
---|---|---|---
path|`username`|_string_|The name that needs to be fetched. Use user1 for testing. 

##### Example

#### Responses

_Code_ `200`: successful operation

_Schema_: [_User_](#/definitions/User)

_Code_ `400`: Invalid username supplied

_Code_ `404`: User not found

### Updated user

    PUT http://petstore.swagger.io/v2/user/{username}

#### Request

##### Parameters

Position|Name|Type|Description
---|---|---|---
path|`username`|_string_|name that need to be updated
body|`body`|[_User_](#/definitions/User)|

##### Example

```application/json
{}
```

#### Responses

_Code_ `400`: Invalid user supplied

_Code_ `404`: User not found

### Delete user

    DELETE http://petstore.swagger.io/v2/user/{username}

#### Request

##### Parameters

Position|Name|Type|Description
---|---|---|---
path|`username`|_string_|The name that needs to be deleted

##### Example

#### Responses

_Code_ `400`: Invalid username supplied

_Code_ `404`: User not found

## Definitions

<h3 id='/definitions/Order'>Order</h3>

Order

Name|Type|Description
---|---|---
`id`|_integer_|
`petId`|_integer_|
`quantity`|_integer_|
`shipDate`|_string_|
`status`|_string_|Order Status
`complete`|_boolean_|

<h3 id='/definitions/User'>User</h3>

User

Name|Type|Description
---|---|---
`id`|_integer_|
`username`|_string_|
`firstName`|_string_|
`lastName`|_string_|
`email`|_string_|
`password`|_string_|
`phone`|_string_|
`userStatus`|_integer_|User Status

<h3 id='/definitions/Category'>Category</h3>

Category

Name|Type|Description
---|---|---
`id`|_integer_|
`name`|_string_|

<h3 id='/definitions/Tag'>Tag</h3>

Tag

Name|Type|Description
---|---|---
`id`|_integer_|
`name`|_string_|

<h3 id='/definitions/Pet'>Pet</h3>

Pet

Name|Type|Description
---|---|---
`id`|_integer_|
`category`|_object_|
`name`|_string_|
`photoUrls`|_array_|
`tags`|_array_|
`status`|_string_|pet status in the store

<h3 id='/definitions/ApiResponse'>ApiResponse</h3>

ApiResponse

Name|Type|Description
---|---|---
`code`|_integer_|
`type`|_string_|
`message`|_string_|