title: Getty Images API

description: 

social: false

===

# Getty Images API



## Content

Tag: [Artists](#artists)

* [***BETA*** Search for images by a photographer](#beta-search-for-images-by-a-photographer)
* [***BETA*** Search for videos by a photographer](#beta-search-for-videos-by-a-photographer)

Tag: [AssetChanges](#assetchanges)

* [Generates asset changes.](#generates-asset-changes)
* [Confirm asset changes acknowledges receipt of asset changes.](#confirm-asset-changes-acknowledges-receipt-of-asset-changes)
* [Retrieves the channel data for the partner. This data can be used to populate the channel_id parameter in the Put Asset Changes query.](#retrieves-the-channel-data-for-the-partner-this-data-can-be-used-to-populate-the-channel-id-parameter-in-the-put-asset-changes-query)

Tag: [AssetRegistration](#assetregistration)

* [Register a list of customer assets.](#register-a-list-of-customer-assets)

Tag: [Boards](#boards)

* [***BETA*** Get all boards that the user participates in](#beta-get-all-boards-that-the-user-participates-in)
* [***BETA*** Create a new board](#beta-create-a-new-board)
* [***BETA*** Get assets and metadata for a specific board](#beta-get-assets-and-metadata-for-a-specific-board)
* [***BETA*** Update a board](#beta-update-a-board)
* [***BETA*** Delete a board](#beta-delete-a-board)
* [***BETA*** Add assets to a board](#beta-add-assets-to-a-board)
* [***BETA*** Remove assets from a board](#beta-remove-assets-from-a-board)
* [***BETA*** Add an asset to a board](#beta-add-an-asset-to-a-board)
* [***BETA*** Remove an asset from a board](#beta-remove-an-asset-from-a-board)
* [***BETA*** Get comments from a board](#beta-get-comments-from-a-board)
* [***BETA*** Add a comment to a board](#beta-add-a-comment-to-a-board)
* [***BETA*** Delete a comment from a board](#beta-delete-a-comment-from-a-board)

Tag: [Collections](#collections)

* [Gets collections applicable for the customer.](#gets-collections-applicable-for-the-customer)

Tag: [Countries](#countries)

* [Gets countries codes and names.](#gets-countries-codes-and-names)

Tag: [Downloads](#downloads)

* [Returns information about a customer's downloaded assets.](#returns-information-about-a-customer's-downloaded-assets)
* [Download an image](#download-an-image)
* [Download a video](#download-a-video)

Tag: [Events](#events)

* [Get metadata for multiple events](#get-metadata-for-multiple-events)
* [Get metadata for a single event](#get-metadata-for-a-single-event)

Tag: [Images](#images)

* [Get metadata for multiple images by supplying multiple image ids](#get-metadata-for-multiple-images-by-supplying-multiple-image-ids)
* [Get metadata for a single image by supplying one image id](#get-metadata-for-a-single-image-by-supplying-one-image-id)
* [Search for images similar to an image](#search-for-images-similar-to-an-image)

Tag: [Products](#products)

* [Get Products](#get-products)

Tag: [Purchases](#purchases)

* [Get Previously Purchased Images and Video](#get-previously-purchased-images-and-video)
* [Get Previously Purchased Images](#get-previously-purchased-images)

Tag: [Search](#search)

* [Search for events](#search-for-events)
* [Search for both creative and editorial images](#search-for-both-creative-and-editorial-images)
* [Search for creative images only](#search-for-creative-images-only)
* [Search for editorial images only](#search-for-editorial-images-only)
* [Search for both creative and editorial videos](#search-for-both-creative-and-editorial-videos)
* [Search for creative videos](#search-for-creative-videos)
* [Search for editorial videos](#search-for-editorial-videos)

Tag: [Usage](#usage)

* [Report usage of assets via a batch format.](#report-usage-of-assets-via-a-batch-format)

Tag: [Videos](#videos)

* [Get metadata for multiple videos by supplying multiple video ids](#get-metadata-for-multiple-videos-by-supplying-multiple-video-ids)
* [Get metadata for a single video by supplying one video id](#get-metadata-for-a-single-video-by-supplying-one-video-id)
* [***BETA*** Get videos similar to a video by supplying one video id](#beta-get-videos-similar-to-a-video-by-supplying-one-video-id)

[Definitions](#definitions)

* [System.Object](#/definitions/System.Object)
* [GettyImages.Models.Artists.ImageSearchResults](#/definitions/GettyImages.Models.Artists.ImageSearchResults)
* [GettyImages.Models.Artists.ImageSearchItem](#/definitions/GettyImages.Models.Artists.ImageSearchItem)
* [GettyImages.Models.Artists.DisplaySize](#/definitions/GettyImages.Models.Artists.DisplaySize)
* [GettyImages.Models.Artists.Keyword](#/definitions/GettyImages.Models.Artists.Keyword)
* [GettyImages.Models.Artists.VideoSearchResults](#/definitions/GettyImages.Models.Artists.VideoSearchResults)
* [GettyImages.Models.Artists.VideoSearchItem](#/definitions/GettyImages.Models.Artists.VideoSearchItem)
* [GettyImages.Models.Collections.CollectionsList](#/definitions/GettyImages.Models.Collections.CollectionsList)
* [GettyImages.Models.Collections.Collection](#/definitions/GettyImages.Models.Collections.Collection)
* [GettyImages.Models.Countries.CountriesList](#/definitions/GettyImages.Models.Countries.CountriesList)
* [GettyImages.Models.Countries.Country](#/definitions/GettyImages.Models.Countries.Country)
* [GettyImages.Models.CuratedSets.CuratedSet](#/definitions/GettyImages.Models.CuratedSets.CuratedSet)
* [GettyImages.Models.Customers.CustomerInfoResponse](#/definitions/GettyImages.Models.Customers.CustomerInfoResponse)
* [GettyImages.Services.Core.SecurityToken](#/definitions/GettyImages.Services.Core.SecurityToken)
* [GettyImages.Models.Downloads.PremiumAccessDownloadData](#/definitions/GettyImages.Models.Downloads.PremiumAccessDownloadData)
* [GettyImages.Models.Downloads.GetDownloadsResponse](#/definitions/GettyImages.Models.Downloads.GetDownloadsResponse)
* [GettyImages.Models.Downloads.GetDownloadsResponse.Download](#/definitions/GettyImages.Models.Downloads.GetDownloadsResponse.Download)
* [GettyImages.Models.Downloads.GetDownloadsResponse.DownloadDetails](#/definitions/GettyImages.Models.Downloads.GetDownloadsResponse.DownloadDetails)
* [GettyImages.Models.Downloads.User](#/definitions/GettyImages.Models.Downloads.User)
* [GettyImages.Models.Events.Event](#/definitions/GettyImages.Models.Events.Event)
* [GettyImages.Models.HeroImage](#/definitions/GettyImages.Models.HeroImage)
* [GettyImages.Models.LocationEvent](#/definitions/GettyImages.Models.LocationEvent)
* [GettyImages.Models.HeroImageDisplaySize](#/definitions/GettyImages.Models.HeroImageDisplaySize)
* [GettyImages.Models.Events.EventsResult](#/definitions/GettyImages.Models.Events.EventsResult)
* [GettyImages.Models.Images.ImagesDetail](#/definitions/GettyImages.Models.Images.ImagesDetail)
* [GettyImages.Models.Images.ImageDetail](#/definitions/GettyImages.Models.Images.ImageDetail)
* [GettyImages.Models.AllowedUse](#/definitions/GettyImages.Models.AllowedUse)
* [GettyImages.Models.Images.ImageDetailDisplaySize](#/definitions/GettyImages.Models.Images.ImageDetailDisplaySize)
* [GettyImages.Models.Images.ImageDownloadSize](#/definitions/GettyImages.Models.Images.ImageDownloadSize)
* [GettyImages.Models.Images.EditorialSource](#/definitions/GettyImages.Models.Images.EditorialSource)
* [GettyImages.Models.Keyword](#/definitions/GettyImages.Models.Keyword)
* [GettyImages.Models.Images.Link](#/definitions/GettyImages.Models.Images.Link)
* [GettyImages.Models.MaxDimensions](#/definitions/GettyImages.Models.MaxDimensions)
* [GettyImages.Models.ReferralDestination](#/definitions/GettyImages.Models.ReferralDestination)
* [GettyImages.Models.IStockLicense](#/definitions/GettyImages.Models.IStockLicense)
* [GettyImages.Models.Images.ImageDownloadAuthorization](#/definitions/GettyImages.Models.Images.ImageDownloadAuthorization)
* [GettyImages.Models.Search.SearchResults[GettyImages.Models.Search.ImageSearchItem]](#/definitions/GettyImages.Models.Search.SearchResults[GettyImages.Models.Search.ImageSearchItem])
* [GettyImages.Models.Search.ImageSearchItem](#/definitions/GettyImages.Models.Search.ImageSearchItem)
* [GettyImages.Models.Search.ImageSearchItemDisplaySize](#/definitions/GettyImages.Models.Search.ImageSearchItemDisplaySize)
* [GettyImages.Models.Download](#/definitions/GettyImages.Models.Download)
* [GettyImages.Models.Products.ProductsResult](#/definitions/GettyImages.Models.Products.ProductsResult)
* [GettyImages.Models.Products.Product](#/definitions/GettyImages.Models.Products.Product)
* [GettyImages.Models.Products.DownloadRequirements](#/definitions/GettyImages.Models.Products.DownloadRequirements)
* [GettyImages.Models.Products.OverageDetails](#/definitions/GettyImages.Models.Products.OverageDetails)
* [GettyImages.Models.Purchases.PreviousPurchases](#/definitions/GettyImages.Models.Purchases.PreviousPurchases)
* [GettyImages.Models.Purchases.PreviousPurchase](#/definitions/GettyImages.Models.Purchases.PreviousPurchase)
* [GettyImages.Models.Purchases.PreviousAssetPurchases](#/definitions/GettyImages.Models.Purchases.PreviousAssetPurchases)
* [GettyImages.Models.Purchases.PreviousAssetPurchase](#/definitions/GettyImages.Models.Purchases.PreviousAssetPurchase)
* [GettyImages.Models.Search.CreativeImageSearchResults](#/definitions/GettyImages.Models.Search.CreativeImageSearchResults)
* [GettyImages.Models.Search.ImageSearchItemCreative](#/definitions/GettyImages.Models.Search.ImageSearchItemCreative)
* [GettyImages.Models.Search.EditorialImageSearchResults](#/definitions/GettyImages.Models.Search.EditorialImageSearchResults)
* [GettyImages.Models.Search.ImageSearchItemEditorial](#/definitions/GettyImages.Models.Search.ImageSearchItemEditorial)
* [GettyImages.Models.Search.EditorialSource](#/definitions/GettyImages.Models.Search.EditorialSource)
* [GettyImages.Models.Search.VideoSearchResults[GettyImages.Models.Artists.VideoSearchItem]](#/definitions/GettyImages.Models.Search.VideoSearchResults[GettyImages.Models.Artists.VideoSearchItem])
* [GettyImages.Models.Search.CreativeVideoSearchResults](#/definitions/GettyImages.Models.Search.CreativeVideoSearchResults)
* [GettyImages.Models.Search.VideoSearchItem](#/definitions/GettyImages.Models.Search.VideoSearchItem)
* [GettyImages.Models.Search.VideoSearchItemDisplaySize](#/definitions/GettyImages.Models.Search.VideoSearchItemDisplaySize)
* [GettyImages.Models.Search.EditorialVideoSearchResults](#/definitions/GettyImages.Models.Search.EditorialVideoSearchResults)
* [GettyImages.Models.Search.EventsSearchResult](#/definitions/GettyImages.Models.Search.EventsSearchResult)
* [GettyImages.Models.Search.CreativeImageSearchLightResults](#/definitions/GettyImages.Models.Search.CreativeImageSearchLightResults)
* [GettyImages.Models.Search.ImageSearchLightItemCreative](#/definitions/GettyImages.Models.Search.ImageSearchLightItemCreative)
* [GettyImages.Models.Videos.VideoDetail](#/definitions/GettyImages.Models.Videos.VideoDetail)
* [GettyImages.Models.Videos.VideoDetailDisplaySize](#/definitions/GettyImages.Models.Videos.VideoDetailDisplaySize)
* [GettyImages.Models.Videos.VideoDownloadSize](#/definitions/GettyImages.Models.Videos.VideoDownloadSize)
* [GettyImages.Models.Videos.VideoDownloadAuthorization](#/definitions/GettyImages.Models.Videos.VideoDownloadAuthorization)
* [GettyImages.Models.Videos.VideosDetail](#/definitions/GettyImages.Models.Videos.VideosDetail)
* [RegisterAssetsRequest](#/definitions/RegisterAssetsRequest)
* [Object](#/definitions/Object)
* [report_usage_batch_request](#/definitions/report_usage_batch_request)
* [asset_usage](#/definitions/asset_usage)
* [report_usage_batch_response](#/definitions/report_usage_batch_response)
* [AssetChanges](#/definitions/AssetChanges)
* [ChangedAssetDetail](#/definitions/ChangedAssetDetail)
* [PartnerChannelList](#/definitions/PartnerChannelList)
* [PartnerChannel](#/definitions/PartnerChannel)
* [BoardList](#/definitions/BoardList)
* [BoardListBoard](#/definitions/BoardListBoard)
* [Asset](#/definitions/Asset)
* [DisplaySize](#/definitions/DisplaySize)
* [BoardInfo](#/definitions/BoardInfo)
* [BoardCreated](#/definitions/BoardCreated)
* [BoardDetail](#/definitions/BoardDetail)
* [BoardPermissions](#/definitions/BoardPermissions)
* [Links](#/definitions/Links)
* [BoardAsset](#/definitions/BoardAsset)
* [AddBoardAssetsResult](#/definitions/AddBoardAssetsResult)
* [CommentsList](#/definitions/CommentsList)
* [Comment](#/definitions/Comment)
* [BoardCommentPermissions](#/definitions/BoardCommentPermissions)
* [Collaborator](#/definitions/Collaborator)
* [CommentPermissions](#/definitions/CommentPermissions)
* [CommentRequest](#/definitions/CommentRequest)
* [CommentCreated](#/definitions/CommentCreated)

## Artists

### ***BETA*** Search for images by a photographer

    GET https://api.gettyimages.com//v3/artists/images

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|query|`artist_name`|_string_|Name of artist for desired images|
|query|`fields`|[&nbsp;string&nbsp;]|Comma separated list of fields. Allows restricting which fields are returned. If no fields are selected, the summary_set of fields are returned.|
|query|`page`|_integer_|Identifies page to return. Default page is 1.|
|query|`page_size`|_integer_|Specifies page size. Default page_size is 10, maximum page_size is 100.|

#### Responses

_Code_ `200`: OK

_Schema_: [_GettyImages.Models.Artists.ImageSearchResults_](#/definitions/GettyImages.Models.Artists.ImageSearchResults)

_Code_ `400`: InvalidParameterValue

_Code_ `401`: Unauthorized

### ***BETA*** Search for videos by a photographer

    GET https://api.gettyimages.com//v3/artists/videos

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|query|`artist_name`|_string_|Name of artist for desired images|
|query|`fields`|[&nbsp;string&nbsp;]|Comma separated list of fields. Allows restricting which fields are returned. If no fields are selected, the summary_set of fields are returned.|
|query|`page`|_integer_|Identifies page to return. Default page is 1.|
|query|`page_size`|_integer_|Specifies page size. Default page_size is 10, maximum page_size is 100.|

#### Responses

_Code_ `200`: OK

_Schema_: [_GettyImages.Models.Artists.VideoSearchResults_](#/definitions/GettyImages.Models.Artists.VideoSearchResults)

_Code_ `400`: InvalidParameterValue

_Code_ `401`: Unauthorized

## AssetChanges

### Generates asset changes.

    PUT https://api.gettyimages.com//v3/asset-changes/change-sets

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|query|`channel_id`|_integer_|Specifies the id of the channel for the asset data. Valid channel ids can be found in the results of the Get Partner Channel query.|
|query|`batch_size`|_integer_|Specifies the number of assets to return. The default is 10; maximum is 500.|

#### Responses

_Code_ `200`: OK

_Schema_: [_AssetChanges_](#/definitions/AssetChanges)

_Code_ `403`: Your access token does not authorize access to this resource

_Code_ `404`: The channel you specified does not exist

### Confirm asset changes acknowledges receipt of asset changes.

    DELETE https://api.gettyimages.com//v3/asset-changes/change-sets/{change-set-id}

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|path|`change-set-id`|_integer_||

#### Responses

_Code_ `200`: OK

_Code_ `403`: Your access token does not authorize access to this resource

_Code_ `404`: Transaction was not found

### Retrieves the channel data for the partner. This data can be used to populate the channel_id parameter in the Put Asset Changes query.

    GET https://api.gettyimages.com//v3/asset-changes/channels

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|

#### Responses

_Code_ `200`: OK

_Schema_: [_PartnerChannelList_](#/definitions/PartnerChannelList)

## AssetRegistration

### Register a list of customer assets.

    POST https://api.gettyimages.com//v3/asset-registrations

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|body|`request`|[_RegisterAssetsRequest_](#/definitions/RegisterAssetsRequest)||
|header|`Api-Key`|_string_|Provide your API key.|

##### Example

```application/json
{}
```

#### Responses

_Code_ `200`: Success - The assets were successfully registered.

_Schema_: [_Object_](#/definitions/Object)

_Code_ `401`: AuthorizationTokenRequired - Authorization token was missing or not valid.

_Code_ `500`: AssetRegistrationFailed - There was a failure when registering assets.

## Boards

### ***BETA*** Get all boards that the user participates in

    GET https://api.gettyimages.com//v3/boards

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|query|`board_relationship`|_string_|Search for boards the user owns or has been invited to as an editor.|
|query|`page`|_integer_|Request results starting at a page number (default is 1).|
|query|`pageSize`|_integer_|Request number of boards to return in each page. (default is 30).|
|query|`sort_order`|_string_|Sort the list of boards by last update date or name. Defaults to date_last_updated_descending.|

#### Responses

_Code_ `200`: OK

_Schema_: [_BoardList_](#/definitions/BoardList)

_Code_ `400`: InvalidParameterValue

_Code_ `401`: Unauthorized

### ***BETA*** Create a new board

    POST https://api.gettyimages.com//v3/boards

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|body|`new_board`|[_BoardInfo_](#/definitions/BoardInfo)||
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|

##### Example

```application/json
{}
```

#### Responses

_Code_ `201`: Created

_Schema_: [_BoardCreated_](#/definitions/BoardCreated)

_Code_ `400`: InvalidParameterValue

_Code_ `401`: Unauthorized

### ***BETA*** Get assets and metadata for a specific board

    GET https://api.gettyimages.com//v3/boards/{board_id}

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|path|`board_id`|_string_||

#### Responses

_Code_ `200`: OK

_Schema_: [_BoardDetail_](#/definitions/BoardDetail)

_Code_ `400`: InvalidParameterValue

_Code_ `401`: Unauthorized

_Code_ `404`: BoardNotFound

### ***BETA*** Update a board

    PUT https://api.gettyimages.com//v3/boards/{board_id}

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|body|`board_info`|[_BoardInfo_](#/definitions/BoardInfo)||
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|path|`board_id`|_string_||

##### Example

```application/json
{}
```

#### Responses

_Code_ `204`: Updated

_Code_ `400`: InvalidParameterValue

_Code_ `401`: Unauthorized

_Code_ `403`: InsufficientAccess

_Code_ `404`: BoardNotFound

### ***BETA*** Delete a board

    DELETE https://api.gettyimages.com//v3/boards/{board_id}

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|path|`board_id`|_string_||

#### Responses

_Code_ `204`

_Code_ `400`: InvalidParameterValue

_Code_ `401`: Unauthorized

_Code_ `403`: InsufficientAccess

_Code_ `404`: BoardNotFound

### ***BETA*** Add assets to a board

    PUT https://api.gettyimages.com//v3/boards/{board_id}/assets

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|body|`board_assets`|[&nbsp;undefined&nbsp;]||
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|path|`board_id`|_string_||

#### Responses

_Code_ `201`: Created

_Schema_: [_AddBoardAssetsResult_](#/definitions/AddBoardAssetsResult)

_Code_ `400`: InvalidParameterValue

_Code_ `401`: Unauthorized

_Code_ `403`: InsufficientAccess

_Code_ `404`: BoardNotFound

### ***BETA*** Remove assets from a board

    DELETE https://api.gettyimages.com//v3/boards/{board_id}/assets

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|path|`board_id`|_string_||
|query|`asset_ids`|[&nbsp;string&nbsp;]|List the assets to be removed from the board.|

#### Responses

_Code_ `204`: No Content

_Code_ `400`: InvalidParameterValue

_Code_ `401`: Unauthorized

_Code_ `403`: InsufficientAccess

_Code_ `404`: BoardNotFound

### ***BETA*** Add an asset to a board

    PUT https://api.gettyimages.com//v3/boards/{board_id}/assets/{asset_id}

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|path|`asset_id`|_string_||
|path|`board_id`|_string_||

#### Responses

_Code_ `201`: Created

_Schema_: [_Object_](#/definitions/Object)

_Code_ `400`: InvalidParameterValue

_Code_ `401`: Unauthorized

_Code_ `403`: AssetNotFound

_Code_ `404`: BoardNotFound

### ***BETA*** Remove an asset from a board

    DELETE https://api.gettyimages.com//v3/boards/{board_id}/assets/{asset_id}

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|path|`asset_id`|_string_||
|path|`board_id`|_string_||

#### Responses

_Code_ `204`: No Content

_Code_ `400`: InvalidParameterValue

_Code_ `401`: Unauthorized

_Code_ `403`: InsufficientAccess

_Code_ `404`: BoardNotFound

### ***BETA*** Get comments from a board

    GET https://api.gettyimages.com//v3/boards/{board_id}/comments

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|path|`board_id`|_string_||

#### Responses

_Code_ `200`: OK

_Schema_: [_CommentsList_](#/definitions/CommentsList)

_Code_ `400`: InvalidParameterValue

_Code_ `401`: Unauthorized

_Code_ `404`: BoardNotFound

### ***BETA*** Add a comment to a board

    POST https://api.gettyimages.com//v3/boards/{board_id}/comments

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|body|`comment`|[_CommentRequest_](#/definitions/CommentRequest)||
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|path|`board_id`|_string_||

##### Example

```application/json
{}
```

#### Responses

_Code_ `201`: Created

_Schema_: [_CommentCreated_](#/definitions/CommentCreated)

_Code_ `400`: InvalidParameterValue

_Code_ `401`: Unauthorized

_Code_ `403`: InsufficientAccess

_Code_ `404`: BoardNotFound

### ***BETA*** Delete a comment from a board

    DELETE https://api.gettyimages.com//v3/boards/{board_id}/comments/{comment_id}

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|path|`board_id`|_string_||
|path|`comment_id`|_string_||

#### Responses

_Code_ `204`: CommentDeleted

_Schema_: [_Object_](#/definitions/Object)

_Code_ `400`: InvalidParameterValue

_Code_ `401`: Unauthorized

_Code_ `403`: InsufficientAccess

_Code_ `404`: BoardNotFound

## Collections

### Gets collections applicable for the customer.

    GET https://api.gettyimages.com//v3/collections

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|

#### Responses

_Code_ `200`: OK

_Schema_: [_GettyImages.Models.Collections.CollectionsList_](#/definitions/GettyImages.Models.Collections.CollectionsList)

_Code_ `401`: Unauthorized

## Countries

### Gets countries codes and names.

    GET https://api.gettyimages.com//v3/countries

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|

#### Responses

_Code_ `200`: OK

_Schema_: [_GettyImages.Models.Countries.CountriesList_](#/definitions/GettyImages.Models.Countries.CountriesList)

_Code_ `401`: Unauthorized

## Downloads

### Returns information about a customer's downloaded assets.

    GET https://api.gettyimages.com//v3/downloads

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|query|`company_downloads`|_boolean_|If specified, returns the list of previously downloaded images for all users in your company. Your account must be enabled for this functionality. Contact your Getty Images account rep for more information. Default is false.|
|query|`end_date`|_string_|If specified, select assets downloaded on or before this date. Dates should be submitted in ISO<br/><br/>                8601 format (i.e., YYYY-MM-DD hh:mm:ss.sss). If time is omitted, midnight is assumed. Date/times are UTC.|
|query|`page`|_integer_|Identifies page to return. Default is 1.|
|query|`page_size`|_integer_|Specifies page size. Default is 30, maximum page_size is 100.|
|query|`product_type`|_string_|Specifies product type to be included in the previous download results. To get previous iStockPhoto credit downloads, credit_pack must be selected.|
|query|`start_date`|_string_|If specified, select assets downloaded on or after this date. Dates should be submitted in ISO<br/><br/>                8601 format (i.e., YYYY-MM-DD hh:mm:ss.sss). If time is omitted, midnight is assumed. Date/times are UTC.|

#### Responses

_Code_ `200`: OK

_Schema_: [_GettyImages.Models.Downloads.GetDownloadsResponse_](#/definitions/GettyImages.Models.Downloads.GetDownloadsResponse)

_Code_ `400`: Bad request

_Code_ `401`: AuthorizationTokenRequired

_Code_ `403`: Forbidden

### Download an image

    POST https://api.gettyimages.com//v3/downloads/images/{id}

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|body|`download_details`|[_GettyImages.Models.Downloads.PremiumAccessDownloadData_](#/definitions/GettyImages.Models.Downloads.PremiumAccessDownloadData)||
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|path|`id`|_string_|<remarks><br/><br/>                    Id of image to download.<br/><br/>                </remarks>|
|query|`auto_download`|_boolean_|<remarks><br/><br/>                    Specifies whether to auto-download the image. If true is specified, a 303 SeeOther status is returned with a<br/><br/>                    Location header set to the location of the image.<br/><br/>                    If false is specified, the download URI will be returned in the response message.<br/><br/>                </remarks>|
|query|`file_type`|_string_|<remarks><br/><br/>                    File Type expressed with three character file extension.<br/><br/>                </remarks>|
|query|`height`|_string_|<remarks><br/><br/>                    Specifies the pixel height of the particular image to download.<br/><br/>                    Available heights can be found in the images/{ids} response for the specific image.<br/><br/>                    If left blank, it will return the largest available size.<br/><br/>                </remarks>|
|query|`product_id`|_integer_|<remarks><br/><br/>                    Identifier of the instance for the selected product offering type.<br/><br/>                </remarks>|
|query|`product_type`|_string_|<remarks><br/><br/>                    Product type.<br/><br/>                </remarks>|

##### Example

```application/json
{}
```

#### Responses

_Code_ `200`: OK

_Schema_: [_System.Object_](#/definitions/System.Object)

_Code_ `303`: See Other

_Code_ `400`: InvalidRequestParameterValue

_Code_ `401`: AuthorizationTokenRequired

_Code_ `404`: ImageNotFound

### Download a video

    POST https://api.gettyimages.com//v3/downloads/videos/{id}

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|path|`id`|_string_|<remarks><br/><br/>                    Id of video to download.<br/><br/>                </remarks>|
|query|`auto_download`|_boolean_|<remarks><br/><br/>                    Specifies whether to auto-download the video. If true is specified, a 303 SeeOther status is returned with a<br/><br/>                    Location header set to the location of the video.<br/><br/>                    If false is specified, the download URI will be returned in the response message.<br/><br/>                </remarks>|
|query|`product_id`|_integer_|<remarks><br/><br/>                    Identifier of the instance for the selected product offering type.<br/><br/>                </remarks>|
|query|`size`|_string_|Specifies the size to be downloaded.|

#### Responses

_Code_ `200`: OK

_Schema_: [_System.Object_](#/definitions/System.Object)

_Code_ `303`: See Other

_Code_ `400`: ProductIdNotSpecified

_Code_ `401`: AuthorizationTokenRequired

_Code_ `404`: VideoNotFound

## Events

### Get metadata for multiple events

    GET https://api.gettyimages.com//v3/events

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|query|`fields`|[&nbsp;string&nbsp;]|A comma separated list of fields to return in the response.|
|query|`ids`|[&nbsp;integer&nbsp;]|A comma separated list of event ids.|

#### Responses

_Code_ `200`: OK

_Schema_: [_GettyImages.Models.Events.EventsResult_](#/definitions/GettyImages.Models.Events.EventsResult)

_Code_ `400`: InvalidParameterValue

_Code_ `401`: Unauthorized

_Code_ `404`: EventNotFound

### Get metadata for a single event

    GET https://api.gettyimages.com//v3/events/{id}

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|path|`id`|_integer_|An event id.|
|query|`fields`|[&nbsp;string&nbsp;]|A comma separated list of fields to return in the response.|

#### Responses

_Code_ `200`: OK

_Schema_: [_GettyImages.Models.Events.Event_](#/definitions/GettyImages.Models.Events.Event)

_Code_ `400`: InvalidParameterValue

_Code_ `401`: Unauthorized

_Code_ `404`: EventNotFound

## Images

### Get metadata for multiple images by supplying multiple image ids

    GET https://api.gettyimages.com//v3/images

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|query|`ids`|[&nbsp;string&nbsp;]|Specifies one or more image ids to return. Use comma delimiter when requesting multiple ids.|
|query|`fields`|[&nbsp;string&nbsp;]|Specifies fields to return. Defaults to 'summary_set'.|

#### Responses

_Code_ `200`: OK

_Schema_: [_GettyImages.Models.Images.ImagesDetail_](#/definitions/GettyImages.Models.Images.ImagesDetail)

_Code_ `400`: InvalidParameterValue

_Code_ `401`: AuthorizationTokenRequired

_Code_ `403`: UnauthorizedDisplaySize

_Code_ `404`: ImageNotFound

### Get metadata for a single image by supplying one image id

    GET https://api.gettyimages.com//v3/images/{id}

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|path|`id`|_string_|An image id. For more than one image please use the /v3/images endpoint.|
|query|`fields`|[&nbsp;string&nbsp;]|Specifies fields to return. Defaults to 'summary_set'.|

#### Responses

_Code_ `200`: OK

_Schema_: [_GettyImages.Models.Images.ImagesDetail_](#/definitions/GettyImages.Models.Images.ImagesDetail)

_Code_ `400`: InvalidParameterValue

_Code_ `401`: AuthorizationTokenRequired

_Code_ `403`: UnauthorizedDisplaySize

_Code_ `404`: ImageNotFound

### Search for images similar to an image

    GET https://api.gettyimages.com//v3/images/{id}/similar

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|path|`id`|_string_|Identifies an existing image|
|query|`fields`|[&nbsp;string&nbsp;]|Specifies fields to return. Defaults to 'summary_set'.|
|query|`page`|_integer_|Identifies page to return. Default is 1.|
|query|`page_size`|_integer_|Specifies page size. Default is 30, maximum page_size is 100.|

#### Responses

_Code_ `200`: OK

_Schema_: [_GettyImages.Models.Search.SearchResults[GettyImages.Models.Search.ImageSearchItem]_](#/definitions/GettyImages.Models.Search.SearchResults[GettyImages.Models.Search.ImageSearchItem])

_Code_ `400`: InvalidParameterValue

_Code_ `401`: AuthorizationTokenRequired

_Code_ `403`: UnauthorizedDisplaySize

_Code_ `404`: ImageNotFound

## Products

### Get Products

    GET https://api.gettyimages.com//v3/products

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|query|`fields`|[&nbsp;string&nbsp;]|Comma separated list of fields. Allows product download requirements to be returned.|

#### Responses

_Code_ `200`: OK

_Schema_: [_GettyImages.Models.Products.ProductsResult_](#/definitions/GettyImages.Models.Products.ProductsResult)

_Code_ `400`: InvalidParameterValue

_Code_ `401`: Unauthorized

## Purchases

### Get Previously Purchased Images and Video

    GET https://api.gettyimages.com//v3/purchased-assets

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|query|`end_date`|_string_|If specified, retrieves previous purchases on or before this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD).|
|query|`page`|_integer_|Identifies page to return. Default is 1.|
|query|`page_size`|_integer_|Specifies page size. Default is 75, maximum page_size is 100.|
|query|`start_date`|_string_|If specified, retrieves previous purchases on or after this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD).|

#### Responses

_Code_ `200`: OK

_Schema_: [_GettyImages.Models.Purchases.PreviousAssetPurchases_](#/definitions/GettyImages.Models.Purchases.PreviousAssetPurchases)

_Code_ `400`: PageNumberLessThanOne

_Code_ `401`: Unauthorized

### Get Previously Purchased Images

    GET https://api.gettyimages.com//v3/purchased-images

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|query|`end_date`|_string_|If specified, retrieves previous purchases on or before this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD).|
|query|`page`|_integer_|Identifies page to return. Default is 1.|
|query|`page_size`|_integer_|Specifies page size. Default is 75, maximum page_size is 100.|
|query|`start_date`|_string_|If specified, retrieves previous purchases on or after this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD).|

#### Responses

_Code_ `200`: OK

_Schema_: [_GettyImages.Models.Purchases.PreviousPurchases_](#/definitions/GettyImages.Models.Purchases.PreviousPurchases)

_Code_ `400`: PageNumberLessThanOne

_Code_ `401`: Unauthorized

## Search

### Search for events

    GET https://api.gettyimages.com//v3/search/events

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|query|`date_from`|_string_|Filters to events that start on or after this date. Use ISO 8601 format (e.g., 1999-12-31).|
|query|`date_to`|_string_|Filters to events that start on or before this date. Use ISO 8601 format (e.g., 1999-12-31).|
|query|`editorial_segment`|_string_|Filters to events with a matching editorial segment.|
|query|`fields`|[&nbsp;string&nbsp;]|Specifies fields to return. Default set is 'id','name','start_date'.|
|query|`page`|_integer_|Request results starting at a page number (default is 1, maximum is 50).|
|query|`page_size`|_integer_|Request number of images to return in each page.|
|query|`phrase`|_string_|Filters to events related to this phrase|

#### Responses

_Code_ `200`: OK

_Schema_: [_GettyImages.Models.Search.EventsSearchResult_](#/definitions/GettyImages.Models.Search.EventsSearchResult)

_Code_ `400`: InvalidParameterValue

_Code_ `401`: AuthorizationTokenRequired

_Code_ `403`: UnauthorizedDisplaySize

### Search for both creative and editorial images

    GET https://api.gettyimages.com//v3/search/images

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|query|`age_of_people`|[&nbsp;string&nbsp;]|Filter based on the age of individuals in an image.|
|query|`artists`|_string_|Search for images by specific artists (free-text, comma-separated list of artists).|
|query|`collection_codes`|[&nbsp;string&nbsp;]|Filter by collection codes (comma-separated list). Include or exclude based on collections_filter_type.|
|query|`collections_filter_type`|_string_|Provides searching based on specified collection(s).|
|query|`color`|_string_|Filter based on predominant color in an image. Use 6 character hexidecimal format (e.g., #002244). Note: when specified, results will not contain editorial images.|
|query|`compositions`|[&nbsp;string&nbsp;]|Filter based on image composition.|
|query|`embed_content_only`|_boolean_|Restrict search results to embeddable images. The default is false.|
|query|`ethnicity`|[&nbsp;string&nbsp;]|Filter search results based on the ethnicity of individuals in an image.|
|query|`event_ids`|[&nbsp;integer&nbsp;]|Filter based on specific events|
|query|`exclude_nudity`|_boolean_|Excludes images containing nudity. The default is false.|
|query|`fields`|[&nbsp;string&nbsp;]|Specifies fields to return. Defaults to 'summary_set'.|
|query|`file_types`|[&nbsp;string&nbsp;]|Return only images having a specific file type.|
|query|`graphical_styles`|[&nbsp;string&nbsp;]|Filter based on graphical style of the image.|
|query|`keyword_ids`|[&nbsp;integer&nbsp;]|Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.|
|query|`license_models`|[&nbsp;string&nbsp;]|Specifies the image licensing model(s).|
|query|`minimum_size`|_string_|Filter based on minimum size requested.|
|query|`number_of_people`|[&nbsp;string&nbsp;]|Filter based on the number of people in the image.|
|query|`orientations`|[&nbsp;string&nbsp;]|Return only images with selected aspect ratios.|
|query|`page`|_integer_|Request results starting at a page number (default is 1).|
|query|`page_size`|_integer_|Request number of images to return in each page.|
|query|`phrase`|_string_|Search images using a search phrase.|
|query|`prestige_content_only`|_boolean_|Restrict search results to prestige images. The default is false.|
|query|`product_types`|[&nbsp;string&nbsp;]|Filter images to those having product types from the selected list.|
|query|`sort_order`|_string_|Select sort order of results.|
|query|`specific_people`|[&nbsp;string&nbsp;]|Return only images associated with specific people (using a comma-delimited list).|

#### Responses

_Code_ `200`: OK

_Schema_: [_GettyImages.Models.Search.SearchResults[GettyImages.Models.Search.ImageSearchItem]_](#/definitions/GettyImages.Models.Search.SearchResults[GettyImages.Models.Search.ImageSearchItem])

_Code_ `400`: InvalidParameterValue

_Code_ `401`: AuthorizationTokenRequired

_Code_ `403`: UnauthorizedDisplaySize

### Search for creative images only

    GET https://api.gettyimages.com//v3/search/images/creative

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|query|`age_of_people`|[&nbsp;string&nbsp;]|Filter based on the age of individuals in an image.|
|query|`artists`|_string_|Search for images by specific artists (free-text, comma-separated list of artists).|
|query|`collection_codes`|[&nbsp;string&nbsp;]|Filter by collection codes (comma-separated list). Include or exclude based on collections_filter_type.|
|query|`collections_filter_type`|_string_|Use to include or exclude collections from search.|
|query|`color`|_string_|Filter based on predominant color in an image. Use 6 character hexidecimal format (e.g., #002244).|
|query|`compositions`|[&nbsp;string&nbsp;]|Filter based on image composition.|
|query|`embed_content_only`|_boolean_|Restrict search results to embeddable images. The default is false.|
|query|`ethnicity`|[&nbsp;string&nbsp;]|Filter search results based on the ethnicity of individuals in an image.|
|query|`exclude_nudity`|_boolean_|Excludes images containing nudity. The default is false.|
|query|`fields`|[&nbsp;string&nbsp;]|Specifies fields to return. Defaults to 'summary_set'.|
|query|`file_types`|[&nbsp;string&nbsp;]|Return only images having a specific file type.|
|query|`graphical_styles`|[&nbsp;string&nbsp;]|Filter based on graphical style of the image.|
|query|`keyword_ids`|[&nbsp;integer&nbsp;]|Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.|
|query|`license_models`|[&nbsp;string&nbsp;]|Specifies the image licensing model(s).|
|query|`minimum_size`|_string_|Filter based on minimum size requested.|
|query|`number_of_people`|[&nbsp;string&nbsp;]|Filter based on the number of people in the image.|
|query|`orientations`|[&nbsp;string&nbsp;]|Return only images with selected aspect ratios.|
|query|`page`|_integer_|Request results starting at a page number (default is 1).|
|query|`page_size`|_integer_|Request number of images to return in each page.|
|query|`phrase`|_string_|Search images using a search phrase.|
|query|`prestige_content_only`|_boolean_|Restrict search results to prestige images. The default is false.|
|query|`product_types`|[&nbsp;string&nbsp;]|Filter images to those having product types from the selected list.|
|query|`sort_order`|_string_|Select sort order of results.|

#### Responses

_Code_ `200`: OK

_Schema_: [_GettyImages.Models.Search.CreativeImageSearchResults_](#/definitions/GettyImages.Models.Search.CreativeImageSearchResults)

_Code_ `400`: InvalidParameterValue

_Code_ `401`: AuthorizationTokenRequired

_Code_ `403`: UnauthorizedDisplaySize

### Search for editorial images only

    GET https://api.gettyimages.com//v3/search/images/editorial

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|query|`age_of_people`|[&nbsp;string&nbsp;]|Filter based on the age of individuals in an image.|
|query|`artists`|_string_|Search for images by specific artists (free-text, comma-separated list of artists).|
|query|`collection_codes`|[&nbsp;string&nbsp;]|Filter by collections (comma-separated list of collection codes). Include or exclude based on collections_filter_type.|
|query|`collections_filter_type`|_string_|Use to include or exclude collections from search.|
|query|`compositions`|[&nbsp;string&nbsp;]|Filter based on image composition.|
|query|`editorial_segments`|[&nbsp;string&nbsp;]|Return only events with a matching editorial segment.|
|query|`embed_content_only`|_boolean_|Restrict search results to embeddable images. The default is false.|
|query|`end_date`|_string_|Return only images that are created on or before this date. Use ISO 8601 format (e.g., 1999-12-31).|
|query|`entity_uris`|[&nbsp;string&nbsp;]|specify linked data entity uri.|
|query|`ethnicity`|[&nbsp;string&nbsp;]|Filter search results based on the ethnicity of individuals in an image.|
|query|`event_ids`|[&nbsp;integer&nbsp;]|Filter based on specific events|
|query|`exclude_nudity`|_boolean_|Excludes images containing nudity. The default is false.|
|query|`fields`|[&nbsp;string&nbsp;]|Specifies fields to return. Defaults to 'summary_set'.|
|query|`file_types`|[&nbsp;string&nbsp;]|Return only images having a specific file type.|
|query|`graphical_styles`|[&nbsp;string&nbsp;]|Filter based on graphical style of the image.|
|query|`keyword_ids`|[&nbsp;integer&nbsp;]|Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.|
|query|`minimum_quality_rank`|_integer_|Filter search results based on minimum quality ranking. Possible values 1, 2, 3 with 1 being best.|
|query|`minimum_size`|_string_|Filter based on minimum size requested.|
|query|`number_of_people`|[&nbsp;string&nbsp;]|Filter based on the number of people in the image.|
|query|`orientations`|[&nbsp;string&nbsp;]|Return only images with selected aspect ratios.|
|query|`page`|_integer_|Request results starting at a page number (default is 1).|
|query|`page_size`|_integer_|Request number of images to return in each page.|
|query|`phrase`|_string_|Search images using a search phrase.|
|query|`product_types`|[&nbsp;string&nbsp;]|Filter images to those having product types from the selected list.|
|query|`sort_order`|_string_|Select sort order of results.|
|query|`specific_people`|[&nbsp;string&nbsp;]|Return only images associated with specific people (using a comma-delimited list).|
|query|`start_date`|_string_|Return only images that are created on or after this date. Use ISO 8601 format (e.g., 1999-12-31).|

#### Responses

_Code_ `200`: OK

_Schema_: [_GettyImages.Models.Search.EditorialImageSearchResults_](#/definitions/GettyImages.Models.Search.EditorialImageSearchResults)

_Code_ `400`: InvalidParameterValue

_Code_ `401`: AuthorizationTokenRequired

_Code_ `403`: UnauthorizedDisplaySize

### Search for both creative and editorial videos

    GET https://api.gettyimages.com//v3/search/videos

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|query|`age_of_people`|[&nbsp;string&nbsp;]|Provides filtering according to the age of individuals in a video.|
|query|`collection_codes`|[&nbsp;string&nbsp;]|Provides filtering by collection code.|
|query|`collections_filter_type`|_string_|Provides searching based on specified collection(s).|
|query|`editorial_video_types`|[&nbsp;string&nbsp;]|Allows filtering by types of video.|
|query|`exclude_nudity`|_boolean_|Excludes images containing nudity. The default is false.|
|query|`fields`|[&nbsp;string&nbsp;]|Specifies fields to return. Defaults to 'summary_set'.|
|query|`format_available`|_string_|Filters according to the digital video format available on a film asset.|
|query|`frame_rates`|[&nbsp;string&nbsp;]|Provides filtering by video frame rate (frames/second).|
|query|`keyword_ids`|[&nbsp;integer&nbsp;]|Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.|
|query|`license_models`|[&nbsp;string&nbsp;]|Specifies the video licensing model(s).|
|query|`page`|_integer_|Identifies page to return. Default is 1.|
|query|`page_size`|_integer_|Specifies page size. Default is 30, maximum page_size is 100.|
|query|`phrase`|_string_|Free-text search query.|
|query|`product_types`|[&nbsp;string&nbsp;]|Provides filtering by a list of product types.|
|query|`sort_order`|_string_|Allows sorting of results.|
|query|`specific_people`|[&nbsp;string&nbsp;]|Provides filtering by specific peoples' names.|

#### Responses

_Code_ `200`: OK

_Schema_: [_GettyImages.Models.Search.VideoSearchResults[GettyImages.Models.Artists.VideoSearchItem]_](#/definitions/GettyImages.Models.Search.VideoSearchResults[GettyImages.Models.Artists.VideoSearchItem])

_Code_ `400`: InvalidParameterValue

_Code_ `401`: AuthorizationTokenRequired

_Code_ `403`: UnauthorizedDisplaySize

### Search for creative videos

    GET https://api.gettyimages.com//v3/search/videos/creative

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|query|`age_of_people`|[&nbsp;string&nbsp;]|Provides filtering according to the age of individuals in a video.|
|query|`collection_codes`|[&nbsp;string&nbsp;]|Provides filtering by collection code.|
|query|`collections_filter_type`|_string_|Provides searching based on specified collection(s).|
|query|`exclude_nudity`|_boolean_|Excludes images containing nudity. The default is false.|
|query|`fields`|[&nbsp;string&nbsp;]|Specifies fields to return. Defaults to 'summary_set'.|
|query|`format_available`|_string_|Filters according to the digital video format available on a film asset.|
|query|`frame_rates`|[&nbsp;string&nbsp;]|Provides filtering by video frame rate (frames/second).|
|query|`keyword_ids`|[&nbsp;integer&nbsp;]|Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.|
|query|`license_models`|[&nbsp;string&nbsp;]|Specifies the video licensing model(s).|
|query|`page`|_integer_|Identifies page to return. Default is 1.|
|query|`page_size`|_integer_|Specifies page size. Default is 30, maximum page_size is 100.|
|query|`phrase`|_string_|Free-text search query.|
|query|`product_types`|[&nbsp;string&nbsp;]|Allows filtering by a list of product types.|
|query|`sort_order`|_string_|Allows sorting of results.|

#### Responses

_Code_ `200`: OK

_Schema_: [_GettyImages.Models.Search.CreativeVideoSearchResults_](#/definitions/GettyImages.Models.Search.CreativeVideoSearchResults)

_Code_ `400`: InvalidParameterValue

_Code_ `401`: AuthorizationTokenRequired

_Code_ `403`: UnauthorizedDisplaySize

### Search for editorial videos

    GET https://api.gettyimages.com//v3/search/videos/editorial

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|query|`age_of_people`|[&nbsp;string&nbsp;]|Provides filtering according to the age of individuals in a video.|
|query|`collection_codes`|[&nbsp;string&nbsp;]|Provides filtering by collection code.|
|query|`collections_filter_type`|_string_|Provides searching based on specified collection(s).|
|query|`editorial_video_types`|[&nbsp;string&nbsp;]|Allows filtering by types of video.|
|query|`entity_uris`|[&nbsp;string&nbsp;]|specify link data entity uri.|
|query|`exclude_nudity`|_boolean_|Excludes images containing nudity. The default is false.|
|query|`fields`|[&nbsp;string&nbsp;]|Specifies fields to return. Defaults to 'summary_set'.|
|query|`format_available`|_string_|Filters according to the digital video format available on a film asset.|
|query|`frame_rates`|[&nbsp;string&nbsp;]|Provides filtering by video frame rate (frames/second).|
|query|`keyword_ids`|[&nbsp;integer&nbsp;]|Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.|
|query|`page`|_integer_|Identifies page to return. Default is 1.|
|query|`page_size`|_integer_|Specifies page size. Default is 30, maximum page_size is 100.|
|query|`phrase`|_string_|Free-text search query.|
|query|`product_types`|[&nbsp;string&nbsp;]|Allows filtering by a list of product types.|
|query|`sort_order`|_string_|Allows sorting of results.|
|query|`specific_people`|[&nbsp;string&nbsp;]|Allows filtering by specific peoples' names.|

#### Responses

_Code_ `200`: OK

_Schema_: [_GettyImages.Models.Search.EditorialVideoSearchResults_](#/definitions/GettyImages.Models.Search.EditorialVideoSearchResults)

_Code_ `400`: InvalidParameterValue

_Code_ `401`: AuthorizationTokenRequired

_Code_ `403`: UnauthorizedDisplaySize

## Usage

### Report usage of assets via a batch format.

    PUT https://api.gettyimages.com//v3/usage-batches/{id}

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|body|`request`|[_report_usage_batch_request_](#/definitions/report_usage_batch_request)||
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|path|`id`|_string_|Specifies a unique batch transaction id to identify the report.|

##### Example

```application/json
{}
```

#### Responses

_Code_ `200`: Success - All usages reported were successfully recorded.

_Schema_: [_report_usage_batch_response_](#/definitions/report_usage_batch_response)

_Code_ `400`: InvalidRequest - The content of the request was invalid. Most commonly this is due to either too many assets specified, no assets or invalid JSON.

_Code_ `401`: AuthorizationTokenRequired - Authorization token was missing or not valid.

_Code_ `409`: TransactionIdDuplicated - The id parameter supplied was already used in a previous usage report.

## Videos

### Get metadata for multiple videos by supplying multiple video ids

    GET https://api.gettyimages.com//v3/videos

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|query|`ids`|[&nbsp;string&nbsp;]|Specifies one or more video ids to return. Use comma delimiter when requesting multiple ids.|
|query|`fields`|[&nbsp;string&nbsp;]|Specifies fields to return. Defaults to 'summary_set'.|

#### Responses

_Code_ `200`: OK

_Schema_: [_GettyImages.Models.Videos.VideosDetail_](#/definitions/GettyImages.Models.Videos.VideosDetail)

_Code_ `400`: InvalidParameterValue

_Code_ `401`: AuthorizationTokenRequired

_Code_ `403`: UnauthorizedDisplaySize

_Code_ `404`: VideosNotFound

### Get metadata for a single video by supplying one video id

    GET https://api.gettyimages.com//v3/videos/{id}

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|path|`id`|_string_|A video id. For more than one video please use the /v3/video endpoint.|
|query|`fields`|[&nbsp;string&nbsp;]|comma delimited list of fields to retrive for the video|

#### Responses

_Code_ `200`: OK

_Schema_: [_GettyImages.Models.Videos.VideoDetail_](#/definitions/GettyImages.Models.Videos.VideoDetail)

_Code_ `400`: InvalidParameterValue

_Code_ `401`: AuthorizationTokenRequired

_Code_ `403`: UnauthorizedDisplaySize

_Code_ `404`: VideosNotFound

### ***BETA*** Get videos similar to a video by supplying one video id

    GET https://api.gettyimages.com//v3/videos/{id}/similar

#### Request

##### Parameters

|Position|Name|Type|Description|
|---|---|---|---|
|header|`Api-Key`|_string_|Provide your API key.|
|header|`Accept-Language`|_string_|Provide a header to specify the language of result values.|
|header|`Authorization`|_string_|Provide access token in the format of 'Bearer {token}'.|
|path|`id`|_string_|A video id.|
|query|`fields`|[&nbsp;string&nbsp;]|comma delimited list of fields to retrive for the videos|
|query|`page`|_integer_|Identifies page to return. Default is 1.|
|query|`page_size`|_integer_|Specifies page size. Default is 30, maximum page_size is 100.|

#### Responses

_Code_ `200`: OK

_Schema_: [_GettyImages.Models.Artists.VideoSearchResults_](#/definitions/GettyImages.Models.Artists.VideoSearchResults)

_Code_ `400`: InvalidParameterValue

_Code_ `401`: AuthorizationTokenRequired

_Code_ `403`: UnauthorizedDisplaySize

_Code_ `404`: VideosNotFound

## Definitions

<h3 id='/definitions/System.Object'>System.Object</h3>

System.Object

|Name|Type|Description|
|---|---|---|

<h3 id='/definitions/GettyImages.Models.Artists.ImageSearchResults'>GettyImages.Models.Artists.ImageSearchResults</h3>

GettyImages.Models.Artists.ImageSearchResults

|Name|Type|Description|
|---|---|---|
|`result_count`|_integer_||
|`images`|[&nbsp;[_GettyImages.Models.Artists.ImageSearchItem_](#/definitions/GettyImages.Models.Artists.ImageSearchItem)&nbsp;]||

<h3 id='/definitions/GettyImages.Models.Artists.ImageSearchItem'>GettyImages.Models.Artists.ImageSearchItem</h3>

GettyImages.Models.Artists.ImageSearchItem

|Name|Type|Description|
|---|---|---|
|`alternative_ids`|_object_||
|`asset_family`|_string_||
|`asset_type`|_string_||
|`caption`|_string_||
|`collection_code`|_string_||
|`collection_name`|_string_||
|`date_submitted`|_string_||
|`display_sizes`|[&nbsp;[_GettyImages.Models.Artists.DisplaySize_](#/definitions/GettyImages.Models.Artists.DisplaySize)&nbsp;]||
|`id`|_string_||
|`keywords`|[&nbsp;[_GettyImages.Models.Artists.Keyword_](#/definitions/GettyImages.Models.Artists.Keyword)&nbsp;]||
|`license_model`|_string_||
|`title`|_string_||

<h3 id='/definitions/GettyImages.Models.Artists.DisplaySize'>GettyImages.Models.Artists.DisplaySize</h3>

GettyImages.Models.Artists.DisplaySize

|Name|Type|Description|
|---|---|---|
|`is_watermarked`|_boolean_||
|`name`|_string_||
|`uri`|_string_||
|`aspect_ratio`|_string_||

<h3 id='/definitions/GettyImages.Models.Artists.Keyword'>GettyImages.Models.Artists.Keyword</h3>

GettyImages.Models.Artists.Keyword

|Name|Type|Description|
|---|---|---|
|`keyword_id`|_string_||
|`text`|_string_||
|`type`|_string_||

<h3 id='/definitions/GettyImages.Models.Artists.VideoSearchResults'>GettyImages.Models.Artists.VideoSearchResults</h3>

GettyImages.Models.Artists.VideoSearchResults

|Name|Type|Description|
|---|---|---|
|`result_count`|_integer_||
|`videos`|[&nbsp;[_GettyImages.Models.Artists.VideoSearchItem_](#/definitions/GettyImages.Models.Artists.VideoSearchItem)&nbsp;]||

<h3 id='/definitions/GettyImages.Models.Artists.VideoSearchItem'>GettyImages.Models.Artists.VideoSearchItem</h3>

GettyImages.Models.Artists.VideoSearchItem

|Name|Type|Description|
|---|---|---|
|`alternative_ids`|_object_||
|`asset_family`|_string_||
|`asset_type`|_string_||
|`caption`|_string_||
|`collection_code`|_string_||
|`collection_name`|_string_||
|`date_submitted`|_string_||
|`display_sizes`|[&nbsp;[_GettyImages.Models.Artists.DisplaySize_](#/definitions/GettyImages.Models.Artists.DisplaySize)&nbsp;]||
|`id`|_string_||
|`keywords`|[&nbsp;[_GettyImages.Models.Artists.Keyword_](#/definitions/GettyImages.Models.Artists.Keyword)&nbsp;]||
|`license_model`|_string_||
|`title`|_string_||

<h3 id='/definitions/GettyImages.Models.Collections.CollectionsList'>GettyImages.Models.Collections.CollectionsList</h3>

GettyImages.Models.Collections.CollectionsList

|Name|Type|Description|
|---|---|---|
|`collections`|[&nbsp;[_GettyImages.Models.Collections.Collection_](#/definitions/GettyImages.Models.Collections.Collection)&nbsp;]||

<h3 id='/definitions/GettyImages.Models.Collections.Collection'>GettyImages.Models.Collections.Collection</h3>

GettyImages.Models.Collections.Collection

|Name|Type|Description|
|---|---|---|
|`asset_family`|_string_||
|`code`|_string_||
|`id`|_integer_||
|`license_model`|_string_||
|`name`|_string_||
|`product_types`|[&nbsp;string&nbsp;]||

<h3 id='/definitions/GettyImages.Models.Countries.CountriesList'>GettyImages.Models.Countries.CountriesList</h3>

GettyImages.Models.Countries.CountriesList

|Name|Type|Description|
|---|---|---|
|`countries`|[&nbsp;[_GettyImages.Models.Countries.Country_](#/definitions/GettyImages.Models.Countries.Country)&nbsp;]||

<h3 id='/definitions/GettyImages.Models.Countries.Country'>GettyImages.Models.Countries.Country</h3>

GettyImages.Models.Countries.Country

|Name|Type|Description|
|---|---|---|
|`iso_alpha_2`|_string_||
|`iso_alpha_3`|_string_||
|`name`|_string_||

<h3 id='/definitions/GettyImages.Models.CuratedSets.CuratedSet'>GettyImages.Models.CuratedSets.CuratedSet</h3>

GettyImages.Models.CuratedSets.CuratedSet

|Name|Type|Description|
|---|---|---|
|`set_id`|_string_||
|`title`|_string_||
|`description`|_string_||
|`date_created`|_string_||
|`date_last_updated`|_string_||
|`hero_image_uri`|_string_||
|`assets`|[&nbsp;string&nbsp;]||
|`keywords`|[&nbsp;string&nbsp;]||

<h3 id='/definitions/GettyImages.Models.Customers.CustomerInfoResponse'>GettyImages.Models.Customers.CustomerInfoResponse</h3>

GettyImages.Models.Customers.CustomerInfoResponse

|Name|Type|Description|
|---|---|---|
|`user_name`|_string_||
|`email_address`|_string_||
|`is_active`|_boolean_||

<h3 id='/definitions/GettyImages.Services.Core.SecurityToken'>GettyImages.Services.Core.SecurityToken</h3>

GettyImages.Services.Core.SecurityToken

|Name|Type|Description|
|---|---|---|
|`SystemId`|_string_||
|`UserId`|_string_||
|`Created`|_string_||
|`Expires`|_string_||
|`SecureOnly`|_boolean_||
|`ClientId`|_string_||
|`ClientIP`|_string_||
|`RememberedUser`|_boolean_||
|`AuthId`|_string_||
|`RenewalEnds`|_string_||
|`ActAsSystemId`|_string_||
|`VisitorId`|_string_||
|`SystemRole`|_string_||
|`AdminId`|_string_||

<h3 id='/definitions/GettyImages.Models.Downloads.PremiumAccessDownloadData'>GettyImages.Models.Downloads.PremiumAccessDownloadData</h3>

GettyImages.Models.Downloads.PremiumAccessDownloadData

|Name|Type|Description|
|---|---|---|
|`download_notes`|_string_||
|`project_code`|_string_||

<h3 id='/definitions/GettyImages.Models.Downloads.GetDownloadsResponse'>GettyImages.Models.Downloads.GetDownloadsResponse</h3>

GettyImages.Models.Downloads.GetDownloadsResponse

|Name|Type|Description|
|---|---|---|
|`result_count`|_integer_||
|`downloads`|[&nbsp;[_GettyImages.Models.Downloads.GetDownloadsResponse.Download_](#/definitions/GettyImages.Models.Downloads.GetDownloadsResponse.Download)&nbsp;]||

<h3 id='/definitions/GettyImages.Models.Downloads.GetDownloadsResponse.Download'>GettyImages.Models.Downloads.GetDownloadsResponse.Download</h3>

GettyImages.Models.Downloads.GetDownloadsResponse.Download

|Name|Type|Description|
|---|---|---|
|`date_downloaded`|_string_||
|`id`|_string_||
|`product_type`|_string_||
|`thumb_uri`|_string_||
|`agreement_name`|_string_||
|`download_details`|_object_||
|`user`|_object_||
|`size_name`|_string_||

<h3 id='/definitions/GettyImages.Models.Downloads.GetDownloadsResponse.DownloadDetails'>GettyImages.Models.Downloads.GetDownloadsResponse.DownloadDetails</h3>

GettyImages.Models.Downloads.GetDownloadsResponse.DownloadDetails

|Name|Type|Description|
|---|---|---|
|`download_notes`|_string_||
|`project_code`|_string_||

<h3 id='/definitions/GettyImages.Models.Downloads.User'>GettyImages.Models.Downloads.User</h3>

GettyImages.Models.Downloads.User

|Name|Type|Description|
|---|---|---|
|`username`|_string_||
|`first_name`|_string_||
|`middle_name`|_string_||
|`last_name`|_string_||

<h3 id='/definitions/GettyImages.Models.Events.Event'>GettyImages.Models.Events.Event</h3>

GettyImages.Models.Events.Event

|Name|Type|Description|
|---|---|---|
|`child_event_count`|_integer_||
|`editorial_segments`|[&nbsp;string&nbsp;]||
|`hero_image`|_object_||
|`id`|_integer_||
|`image_count`|_integer_||
|`location`|_object_||
|`name`|_string_||
|`start_date`|_string_||

<h3 id='/definitions/GettyImages.Models.HeroImage'>GettyImages.Models.HeroImage</h3>

GettyImages.Models.HeroImage

|Name|Type|Description|
|---|---|---|
|`id`|_string_||
|`display_sizes`|[&nbsp;[_GettyImages.Models.HeroImageDisplaySize_](#/definitions/GettyImages.Models.HeroImageDisplaySize)&nbsp;]||

<h3 id='/definitions/GettyImages.Models.LocationEvent'>GettyImages.Models.LocationEvent</h3>

GettyImages.Models.LocationEvent

|Name|Type|Description|
|---|---|---|
|`city`|_string_||
|`country`|_string_||
|`state_province`|_string_||
|`venue`|_string_||

<h3 id='/definitions/GettyImages.Models.HeroImageDisplaySize'>GettyImages.Models.HeroImageDisplaySize</h3>

GettyImages.Models.HeroImageDisplaySize

|Name|Type|Description|
|---|---|---|
|`name`|_string_||
|`is_watermarked`|_boolean_||
|`uri`|_string_||

<h3 id='/definitions/GettyImages.Models.Events.EventsResult'>GettyImages.Models.Events.EventsResult</h3>

GettyImages.Models.Events.EventsResult

|Name|Type|Description|
|---|---|---|
|`events`|[&nbsp;[_GettyImages.Models.Events.Event_](#/definitions/GettyImages.Models.Events.Event)&nbsp;]||
|`events_not_found`|[&nbsp;integer&nbsp;]||

<h3 id='/definitions/GettyImages.Models.Images.ImagesDetail'>GettyImages.Models.Images.ImagesDetail</h3>

GettyImages.Models.Images.ImagesDetail

|Name|Type|Description|
|---|---|---|
|`images`|[&nbsp;[_GettyImages.Models.Images.ImageDetail_](#/definitions/GettyImages.Models.Images.ImageDetail)&nbsp;]||
|`images_not_found`|[&nbsp;string&nbsp;]||

<h3 id='/definitions/GettyImages.Models.Images.ImageDetail'>GettyImages.Models.Images.ImageDetail</h3>

GettyImages.Models.Images.ImageDetail

|Name|Type|Description|
|---|---|---|
|`allowed_use`|_object_||
|`alternative_ids`|_object_||
|`artist`|_string_||
|`artist_title`|_string_||
|`asset_family`|_string_||
|`asset_type`|_string_||
|`call_for_image`|_boolean_||
|`caption`|_string_||
|`city`|_string_||
|`collection_code`|_string_||
|`collection_id`|_integer_||
|`collection_name`|_string_||
|`color_type`|_string_||
|`copyright`|_string_||
|`country`|_string_||
|`credit_line`|_string_||
|`date_camera_shot`|_string_||
|`date_created`|_string_||
|`date_submitted`|_string_||
|`display_sizes`|[&nbsp;[_GettyImages.Models.Images.ImageDetailDisplaySize_](#/definitions/GettyImages.Models.Images.ImageDetailDisplaySize)&nbsp;]||
|`download_sizes`|[&nbsp;[_GettyImages.Models.Images.ImageDownloadSize_](#/definitions/GettyImages.Models.Images.ImageDownloadSize)&nbsp;]||
|`editorial_segments`|[&nbsp;string&nbsp;]||
|`editorial_source`|_object_||
|`event_ids`|[&nbsp;integer&nbsp;]||
|`graphical_style`|_string_||
|`id`|_string_||
|`keywords`|[&nbsp;[_GettyImages.Models.Keyword_](#/definitions/GettyImages.Models.Keyword)&nbsp;]||
|`largest_downloads`|[&nbsp;[_GettyImages.Models.Images.ImageDownloadSize_](#/definitions/GettyImages.Models.Images.ImageDownloadSize)&nbsp;]||
|`license_model`|_string_||
|`links`|[&nbsp;[_GettyImages.Models.Images.Link_](#/definitions/GettyImages.Models.Images.Link)&nbsp;]||
|`max_dimensions`|_object_||
|`orientation`|_string_||
|`people`|[&nbsp;string&nbsp;]||
|`prestige`|_boolean_||
|`product_types`|[&nbsp;string&nbsp;]||
|`quality_rank`|_integer_||
|`referral_destinations`|[&nbsp;[_GettyImages.Models.ReferralDestination_](#/definitions/GettyImages.Models.ReferralDestination)&nbsp;]||
|`state_province`|_string_||
|`title`|_string_||
|`uri_oembed`|_string_||
|`istock_licenses`|[&nbsp;[_GettyImages.Models.IStockLicense_](#/definitions/GettyImages.Models.IStockLicense)&nbsp;]||

<h3 id='/definitions/GettyImages.Models.AllowedUse'>GettyImages.Models.AllowedUse</h3>

GettyImages.Models.AllowedUse

|Name|Type|Description|
|---|---|---|
|`how_can_i_use_it`|_string_|Indicates how the asset can be used|
|`release_info`|_string_|Indicates release status|
|`usage_restrictions`|[&nbsp;string&nbsp;]||

<h3 id='/definitions/GettyImages.Models.Images.ImageDetailDisplaySize'>GettyImages.Models.Images.ImageDetailDisplaySize</h3>

GettyImages.Models.Images.ImageDetailDisplaySize

|Name|Type|Description|
|---|---|---|
|`height`|_integer_|Indicates the height in pixels|
|`is_watermarked`|_boolean_|Indicates whether the image is watermarked.|
|`name`|_string_|Identifies the name of the display size|
|`uri`|_string_|Identifies the URI for the image|
|`width`|_integer_|Indicates the width in pixels|

<h3 id='/definitions/GettyImages.Models.Images.ImageDownloadSize'>GettyImages.Models.Images.ImageDownloadSize</h3>

GettyImages.Models.Images.ImageDownloadSize

|Name|Type|Description|
|---|---|---|
|`bytes`|_integer_||
|`downloads`|[&nbsp;[_GettyImages.Models.Images.ImageDownloadAuthorization_](#/definitions/GettyImages.Models.Images.ImageDownloadAuthorization)&nbsp;]||
|`height`|_integer_||
|`media_type`|_string_||
|`name`|_string_||
|`width`|_integer_||

<h3 id='/definitions/GettyImages.Models.Images.EditorialSource'>GettyImages.Models.Images.EditorialSource</h3>

GettyImages.Models.Images.EditorialSource

|Name|Type|Description|
|---|---|---|
|`id`|_integer_||
|`name`|_string_||

<h3 id='/definitions/GettyImages.Models.Keyword'>GettyImages.Models.Keyword</h3>

GettyImages.Models.Keyword

|Name|Type|Description|
|---|---|---|
|`keyword_id`|_string_||
|`text`|_string_||
|`type`|_string_||
|`relevance`|_integer_||
|`entity_uris`|[&nbsp;string&nbsp;]||
|`entity_types`|[&nbsp;string&nbsp;]||

<h3 id='/definitions/GettyImages.Models.Images.Link'>GettyImages.Models.Images.Link</h3>

GettyImages.Models.Images.Link

|Name|Type|Description|
|---|---|---|
|`rel`|_string_||
|`uri`|_string_||

<h3 id='/definitions/GettyImages.Models.MaxDimensions'>GettyImages.Models.MaxDimensions</h3>

GettyImages.Models.MaxDimensions

|Name|Type|Description|
|---|---|---|
|`height`|_integer_||
|`width`|_integer_||

<h3 id='/definitions/GettyImages.Models.ReferralDestination'>GettyImages.Models.ReferralDestination</h3>

GettyImages.Models.ReferralDestination

|Name|Type|Description|
|---|---|---|
|`site_name`|_string_||
|`uri`|_string_||

<h3 id='/definitions/GettyImages.Models.IStockLicense'>GettyImages.Models.IStockLicense</h3>

GettyImages.Models.IStockLicense

|Name|Type|Description|
|---|---|---|
|`license_type`|_string_||
|`credits`|_integer_||

<h3 id='/definitions/GettyImages.Models.Images.ImageDownloadAuthorization'>GettyImages.Models.Images.ImageDownloadAuthorization</h3>

GettyImages.Models.Images.ImageDownloadAuthorization

|Name|Type|Description|
|---|---|---|
|`product_id`|_string_||
|`product_type`|_string_||
|`uri`|_string_||
|`agreement_name`|_string_||

<h3 id='/definitions/GettyImages.Models.Search.SearchResults[GettyImages.Models.Search.ImageSearchItem]'>GettyImages.Models.Search.SearchResults[GettyImages.Models.Search.ImageSearchItem]</h3>

GettyImages.Models.Search.SearchResults[GettyImages.Models.Search.ImageSearchItem]

|Name|Type|Description|
|---|---|---|
|`result_count`|_integer_||
|`images`|[&nbsp;[_GettyImages.Models.Search.ImageSearchItem_](#/definitions/GettyImages.Models.Search.ImageSearchItem)&nbsp;]||

<h3 id='/definitions/GettyImages.Models.Search.ImageSearchItem'>GettyImages.Models.Search.ImageSearchItem</h3>

GettyImages.Models.Search.ImageSearchItem

|Name|Type|Description|
|---|---|---|
|`allowed_use`|_object_||
|`alternative_ids`|_object_||
|`artist`|_string_||
|`asset_family`|_string_||
|`call_for_image`|_boolean_||
|`caption`|_string_||
|`collection_code`|_string_||
|`collection_id`|_integer_||
|`collection_name`|_string_||
|`color_type`|_string_||
|`copyright`|_string_||
|`date_camera_shot`|_string_||
|`date_created`|_string_||
|`display_sizes`|[&nbsp;[_GettyImages.Models.Search.ImageSearchItemDisplaySize_](#/definitions/GettyImages.Models.Search.ImageSearchItemDisplaySize)&nbsp;]||
|`editorial_segments`|[&nbsp;string&nbsp;]||
|`event_ids`|[&nbsp;integer&nbsp;]||
|`graphical_style`|_string_||
|`id`|_string_||
|`keywords`|[&nbsp;[_GettyImages.Models.Keyword_](#/definitions/GettyImages.Models.Keyword)&nbsp;]||
|`largest_downloads`|[&nbsp;[_GettyImages.Models.Download_](#/definitions/GettyImages.Models.Download)&nbsp;]||
|`license_model`|_string_||
|`max_dimensions`|_object_||
|`orientation`|_string_||
|`people`|[&nbsp;string&nbsp;]||
|`prestige`|_boolean_||
|`product_types`|[&nbsp;string&nbsp;]||
|`quality_rank`|_integer_||
|`referral_destinations`|[&nbsp;[_GettyImages.Models.ReferralDestination_](#/definitions/GettyImages.Models.ReferralDestination)&nbsp;]||
|`title`|_string_||
|`uri_oembed`|_string_||
|`istock_licenses`|[&nbsp;[_GettyImages.Models.IStockLicense_](#/definitions/GettyImages.Models.IStockLicense)&nbsp;]||

<h3 id='/definitions/GettyImages.Models.Search.ImageSearchItemDisplaySize'>GettyImages.Models.Search.ImageSearchItemDisplaySize</h3>

GettyImages.Models.Search.ImageSearchItemDisplaySize

|Name|Type|Description|
|---|---|---|
|`is_watermarked`|_boolean_||
|`name`|_string_||
|`uri`|_string_||

<h3 id='/definitions/GettyImages.Models.Download'>GettyImages.Models.Download</h3>

GettyImages.Models.Download

|Name|Type|Description|
|---|---|---|
|`product_id`|_string_||
|`product_type`|_string_||
|`uri`|_string_||
|`agreement_name`|_string_||

<h3 id='/definitions/GettyImages.Models.Products.ProductsResult'>GettyImages.Models.Products.ProductsResult</h3>

GettyImages.Models.Products.ProductsResult

|Name|Type|Description|
|---|---|---|
|`products`|[&nbsp;[_GettyImages.Models.Products.Product_](#/definitions/GettyImages.Models.Products.Product)&nbsp;]||

<h3 id='/definitions/GettyImages.Models.Products.Product'>GettyImages.Models.Products.Product</h3>

GettyImages.Models.Products.Product

|Name|Type|Description|
|---|---|---|
|`application_website`|_string_||
|`credits_remaining`|_integer_||
|`download_limit`|_integer_||
|`download_limit_duration`|_string_||
|`download_limit_reset_utc_date`|_string_||
|`downloads_remaining`|_integer_||
|`expiration_utc_date`|_string_||
|`id`|_integer_||
|`name`|_string_||
|`status`|_string_||
|`type`|_string_||
|`download_requirements`|_object_||
|`premium_access_download_requirements`|_object_||
|`overage`|_object_||
|`agreement_name`|_string_||
|`imagepack_resolution`|_string_||

<h3 id='/definitions/GettyImages.Models.Products.DownloadRequirements'>GettyImages.Models.Products.DownloadRequirements</h3>

GettyImages.Models.Products.DownloadRequirements

|Name|Type|Description|
|---|---|---|
|`is_note_required`|_boolean_||
|`is_project_code_required`|_boolean_||
|`project_codes`|[&nbsp;string&nbsp;]||

<h3 id='/definitions/GettyImages.Models.Products.OverageDetails'>GettyImages.Models.Products.OverageDetails</h3>

GettyImages.Models.Products.OverageDetails

|Name|Type|Description|
|---|---|---|
|`limit`|_integer_||
|`remaining`|_integer_||
|`count`|_integer_||
|`overages_reached`|_boolean_||

<h3 id='/definitions/GettyImages.Models.Purchases.PreviousPurchases'>GettyImages.Models.Purchases.PreviousPurchases</h3>

GettyImages.Models.Purchases.PreviousPurchases

|Name|Type|Description|
|---|---|---|
|`result_count`|_integer_||
|`previous_purchases`|[&nbsp;[_GettyImages.Models.Purchases.PreviousPurchase_](#/definitions/GettyImages.Models.Purchases.PreviousPurchase)&nbsp;]||

<h3 id='/definitions/GettyImages.Models.Purchases.PreviousPurchase'>GettyImages.Models.Purchases.PreviousPurchase</h3>

GettyImages.Models.Purchases.PreviousPurchase

|Name|Type|Description|
|---|---|---|
|`date_purchased`|_string_||
|`image_id`|_string_||
|`license_model`|_string_||
|`order_id`|_string_||
|`thumb_uri`|_string_||

<h3 id='/definitions/GettyImages.Models.Purchases.PreviousAssetPurchases'>GettyImages.Models.Purchases.PreviousAssetPurchases</h3>

GettyImages.Models.Purchases.PreviousAssetPurchases

|Name|Type|Description|
|---|---|---|
|`result_count`|_integer_||
|`previous_purchases`|[&nbsp;[_GettyImages.Models.Purchases.PreviousAssetPurchase_](#/definitions/GettyImages.Models.Purchases.PreviousAssetPurchase)&nbsp;]||

<h3 id='/definitions/GettyImages.Models.Purchases.PreviousAssetPurchase'>GettyImages.Models.Purchases.PreviousAssetPurchase</h3>

GettyImages.Models.Purchases.PreviousAssetPurchase

|Name|Type|Description|
|---|---|---|
|`date_purchased`|_string_||
|`asset_id`|_string_||
|`asset_type`|_string_||
|`license_model`|_string_||
|`order_id`|_string_||
|`thumb_uri`|_string_||
|`size_name`|_string_||
|`file_size_in_bytes`|_string_||
|`download_uri`|_string_||

<h3 id='/definitions/GettyImages.Models.Search.CreativeImageSearchResults'>GettyImages.Models.Search.CreativeImageSearchResults</h3>

GettyImages.Models.Search.CreativeImageSearchResults

|Name|Type|Description|
|---|---|---|
|`result_count`|_integer_||
|`images`|[&nbsp;[_GettyImages.Models.Search.ImageSearchItemCreative_](#/definitions/GettyImages.Models.Search.ImageSearchItemCreative)&nbsp;]||

<h3 id='/definitions/GettyImages.Models.Search.ImageSearchItemCreative'>GettyImages.Models.Search.ImageSearchItemCreative</h3>

GettyImages.Models.Search.ImageSearchItemCreative

|Name|Type|Description|
|---|---|---|
|`allowed_use`|_object_||
|`alternative_ids`|_object_||
|`artist`|_string_||
|`asset_family`|_string_||
|`call_for_image`|_boolean_||
|`caption`|_string_||
|`collection_code`|_string_||
|`collection_id`|_integer_||
|`collection_name`|_string_||
|`color_type`|_string_||
|`copyright`|_string_||
|`date_camera_shot`|_string_||
|`date_created`|_string_||
|`display_sizes`|[&nbsp;[_GettyImages.Models.Search.ImageSearchItemDisplaySize_](#/definitions/GettyImages.Models.Search.ImageSearchItemDisplaySize)&nbsp;]||
|`graphical_style`|_string_||
|`id`|_string_||
|`keywords`|[&nbsp;[_GettyImages.Models.Keyword_](#/definitions/GettyImages.Models.Keyword)&nbsp;]||
|`largest_downloads`|[&nbsp;[_GettyImages.Models.Download_](#/definitions/GettyImages.Models.Download)&nbsp;]||
|`license_model`|_string_||
|`max_dimensions`|_object_||
|`orientation`|_string_||
|`prestige`|_boolean_||
|`product_types`|[&nbsp;string&nbsp;]||
|`quality_rank`|_integer_||
|`referral_destinations`|[&nbsp;[_GettyImages.Models.ReferralDestination_](#/definitions/GettyImages.Models.ReferralDestination)&nbsp;]||
|`title`|_string_||
|`uri_oembed`|_string_||

<h3 id='/definitions/GettyImages.Models.Search.EditorialImageSearchResults'>GettyImages.Models.Search.EditorialImageSearchResults</h3>

GettyImages.Models.Search.EditorialImageSearchResults

|Name|Type|Description|
|---|---|---|
|`result_count`|_integer_||
|`images`|[&nbsp;[_GettyImages.Models.Search.ImageSearchItemEditorial_](#/definitions/GettyImages.Models.Search.ImageSearchItemEditorial)&nbsp;]||

<h3 id='/definitions/GettyImages.Models.Search.ImageSearchItemEditorial'>GettyImages.Models.Search.ImageSearchItemEditorial</h3>

GettyImages.Models.Search.ImageSearchItemEditorial

|Name|Type|Description|
|---|---|---|
|`allowed_use`|_object_||
|`alternative_ids`|_object_||
|`artist`|_string_||
|`asset_family`|_string_||
|`call_for_image`|_boolean_||
|`caption`|_string_||
|`collection_code`|_string_||
|`collection_id`|_integer_||
|`collection_name`|_string_||
|`color_type`|_string_||
|`copyright`|_string_||
|`date_camera_shot`|_string_||
|`date_created`|_string_||
|`display_sizes`|[&nbsp;[_GettyImages.Models.Search.ImageSearchItemDisplaySize_](#/definitions/GettyImages.Models.Search.ImageSearchItemDisplaySize)&nbsp;]||
|`editorial_segments`|[&nbsp;string&nbsp;]||
|`editorial_source`|_object_||
|`event_ids`|[&nbsp;integer&nbsp;]||
|`graphical_style`|_string_||
|`id`|_string_||
|`keywords`|[&nbsp;[_GettyImages.Models.Keyword_](#/definitions/GettyImages.Models.Keyword)&nbsp;]||
|`largest_downloads`|[&nbsp;[_GettyImages.Models.Download_](#/definitions/GettyImages.Models.Download)&nbsp;]||
|`license_model`|_string_||
|`max_dimensions`|_object_||
|`orientation`|_string_||
|`people`|[&nbsp;string&nbsp;]||
|`product_types`|[&nbsp;string&nbsp;]||
|`quality_rank`|_integer_||
|`referral_destinations`|[&nbsp;[_GettyImages.Models.ReferralDestination_](#/definitions/GettyImages.Models.ReferralDestination)&nbsp;]||
|`title`|_string_||
|`uri_oembed`|_string_||

<h3 id='/definitions/GettyImages.Models.Search.EditorialSource'>GettyImages.Models.Search.EditorialSource</h3>

GettyImages.Models.Search.EditorialSource

|Name|Type|Description|
|---|---|---|
|`id`|_integer_||

<h3 id='/definitions/GettyImages.Models.Search.VideoSearchResults[GettyImages.Models.Artists.VideoSearchItem]'>GettyImages.Models.Search.VideoSearchResults[GettyImages.Models.Artists.VideoSearchItem]</h3>

GettyImages.Models.Search.VideoSearchResults[GettyImages.Models.Artists.VideoSearchItem]

|Name|Type|Description|
|---|---|---|
|`result_count`|_integer_||
|`videos`|[&nbsp;[_GettyImages.Models.Artists.VideoSearchItem_](#/definitions/GettyImages.Models.Artists.VideoSearchItem)&nbsp;]||

<h3 id='/definitions/GettyImages.Models.Search.CreativeVideoSearchResults'>GettyImages.Models.Search.CreativeVideoSearchResults</h3>

GettyImages.Models.Search.CreativeVideoSearchResults

|Name|Type|Description|
|---|---|---|
|`result_count`|_integer_||
|`videos`|[&nbsp;[_GettyImages.Models.Search.VideoSearchItem_](#/definitions/GettyImages.Models.Search.VideoSearchItem)&nbsp;]||

<h3 id='/definitions/GettyImages.Models.Search.VideoSearchItem'>GettyImages.Models.Search.VideoSearchItem</h3>

GettyImages.Models.Search.VideoSearchItem

|Name|Type|Description|
|---|---|---|
|`id`|_string_||
|`allowed_use`|_object_||
|`artist`|_string_||
|`asset_family`|_string_||
|`caption`|_string_||
|`clip_length`|_string_||
|`collection_id`|_integer_||
|`collection_code`|_string_||
|`collection_name`|_string_||
|`color_type`|_string_||
|`copyright`|_string_||
|`date_created`|_string_||
|`display_sizes`|[&nbsp;[_GettyImages.Models.Search.VideoSearchItemDisplaySize_](#/definitions/GettyImages.Models.Search.VideoSearchItemDisplaySize)&nbsp;]||
|`era`|_string_||
|`keywords`|[&nbsp;[_GettyImages.Models.Keyword_](#/definitions/GettyImages.Models.Keyword)&nbsp;]||
|`largest_downloads`|[&nbsp;[_GettyImages.Models.Download_](#/definitions/GettyImages.Models.Download)&nbsp;]||
|`license_model`|_string_||
|`mastered_to`|_string_||
|`originally_shot_on`|_string_||
|`product_types`|[&nbsp;string&nbsp;]||
|`referral_destinations`|[&nbsp;[_GettyImages.Models.ReferralDestination_](#/definitions/GettyImages.Models.ReferralDestination)&nbsp;]||
|`shot_speed`|_string_||
|`source`|_string_||
|`title`|_string_||
|`istock_licenses`|[&nbsp;[_GettyImages.Models.IStockLicense_](#/definitions/GettyImages.Models.IStockLicense)&nbsp;]||

<h3 id='/definitions/GettyImages.Models.Search.VideoSearchItemDisplaySize'>GettyImages.Models.Search.VideoSearchItemDisplaySize</h3>

GettyImages.Models.Search.VideoSearchItemDisplaySize

|Name|Type|Description|
|---|---|---|
|`is_watermarked`|_boolean_||
|`name`|_string_||
|`uri`|_string_||
|`aspect_ratio`|_string_||

<h3 id='/definitions/GettyImages.Models.Search.EditorialVideoSearchResults'>GettyImages.Models.Search.EditorialVideoSearchResults</h3>

GettyImages.Models.Search.EditorialVideoSearchResults

|Name|Type|Description|
|---|---|---|
|`result_count`|_integer_||
|`videos`|[&nbsp;[_GettyImages.Models.Search.VideoSearchItem_](#/definitions/GettyImages.Models.Search.VideoSearchItem)&nbsp;]||

<h3 id='/definitions/GettyImages.Models.Search.EventsSearchResult'>GettyImages.Models.Search.EventsSearchResult</h3>

GettyImages.Models.Search.EventsSearchResult

|Name|Type|Description|
|---|---|---|
|`events`|[&nbsp;[_GettyImages.Models.Events.Event_](#/definitions/GettyImages.Models.Events.Event)&nbsp;]||
|`result_count`|_integer_||

<h3 id='/definitions/GettyImages.Models.Search.CreativeImageSearchLightResults'>GettyImages.Models.Search.CreativeImageSearchLightResults</h3>

GettyImages.Models.Search.CreativeImageSearchLightResults

|Name|Type|Description|
|---|---|---|
|`result_count`|_integer_||
|`images`|[&nbsp;[_GettyImages.Models.Search.ImageSearchLightItemCreative_](#/definitions/GettyImages.Models.Search.ImageSearchLightItemCreative)&nbsp;]||

<h3 id='/definitions/GettyImages.Models.Search.ImageSearchLightItemCreative'>GettyImages.Models.Search.ImageSearchLightItemCreative</h3>

GettyImages.Models.Search.ImageSearchLightItemCreative

|Name|Type|Description|
|---|---|---|
|`id`|_string_||
|`title`|_string_||
|`display_sizes`|[&nbsp;[_GettyImages.Models.Search.ImageSearchItemDisplaySize_](#/definitions/GettyImages.Models.Search.ImageSearchItemDisplaySize)&nbsp;]||

<h3 id='/definitions/GettyImages.Models.Videos.VideoDetail'>GettyImages.Models.Videos.VideoDetail</h3>

GettyImages.Models.Videos.VideoDetail

|Name|Type|Description|
|---|---|---|
|`id`|_string_||
|`allowed_use`|_object_||
|`artist`|_string_||
|`asset_family`|_string_||
|`caption`|_string_||
|`clip_length`|_string_||
|`collection_id`|_integer_||
|`collection_code`|_string_||
|`collection_name`|_string_||
|`color_type`|_string_||
|`copyright`|_string_||
|`date_created`|_string_||
|`display_sizes`|[&nbsp;[_GettyImages.Models.Videos.VideoDetailDisplaySize_](#/definitions/GettyImages.Models.Videos.VideoDetailDisplaySize)&nbsp;]||
|`download_sizes`|[&nbsp;[_GettyImages.Models.Videos.VideoDownloadSize_](#/definitions/GettyImages.Models.Videos.VideoDownloadSize)&nbsp;]||
|`editorial_segments`|[&nbsp;string&nbsp;]||
|`era`|_string_||
|`keywords`|[&nbsp;[_GettyImages.Models.Keyword_](#/definitions/GettyImages.Models.Keyword)&nbsp;]||
|`license_model`|_string_||
|`mastered_to`|_string_||
|`originally_shot_on`|_string_||
|`product_types`|[&nbsp;string&nbsp;]||
|`referral_destinations`|[&nbsp;[_GettyImages.Models.ReferralDestination_](#/definitions/GettyImages.Models.ReferralDestination)&nbsp;]||
|`shot_speed`|_string_||
|`source`|_string_||
|`title`|_string_||
|`istock_licenses`|[&nbsp;[_GettyImages.Models.IStockLicense_](#/definitions/GettyImages.Models.IStockLicense)&nbsp;]||

<h3 id='/definitions/GettyImages.Models.Videos.VideoDetailDisplaySize'>GettyImages.Models.Videos.VideoDetailDisplaySize</h3>

GettyImages.Models.Videos.VideoDetailDisplaySize

|Name|Type|Description|
|---|---|---|
|`is_watermarked`|_boolean_|Indicates whether the image is watermarked.|
|`name`|_string_|Identifies the name of the display size|
|`uri`|_string_|Identifies the URI for the image|
|`aspect_ratio`|_string_|Identifies the URI for the image|

<h3 id='/definitions/GettyImages.Models.Videos.VideoDownloadSize'>GettyImages.Models.Videos.VideoDownloadSize</h3>

GettyImages.Models.Videos.VideoDownloadSize

|Name|Type|Description|
|---|---|---|
|`bit_depth`|_string_||
|`broadcast_video_standard`|_string_||
|`compression`|_string_||
|`content_type`|_string_||
|`description`|_string_||
|`downloads`|[&nbsp;[_GettyImages.Models.Videos.VideoDownloadAuthorization_](#/definitions/GettyImages.Models.Videos.VideoDownloadAuthorization)&nbsp;]||
|`format`|_string_||
|`frame_rate`|_number_||
|`frame_size`|_string_||
|`height`|_number_||
|`interlaced`|_boolean_||
|`name`|_string_||
|`width`|_integer_||

<h3 id='/definitions/GettyImages.Models.Videos.VideoDownloadAuthorization'>GettyImages.Models.Videos.VideoDownloadAuthorization</h3>

GettyImages.Models.Videos.VideoDownloadAuthorization

|Name|Type|Description|
|---|---|---|
|`product_id`|_string_||
|`product_type`|_string_||
|`uri`|_string_||
|`agreement_name`|_string_||

<h3 id='/definitions/GettyImages.Models.Videos.VideosDetail'>GettyImages.Models.Videos.VideosDetail</h3>

GettyImages.Models.Videos.VideosDetail

|Name|Type|Description|
|---|---|---|
|`videos`|[&nbsp;[_GettyImages.Models.Videos.VideoDetail_](#/definitions/GettyImages.Models.Videos.VideoDetail)&nbsp;]||
|`videos_not_found`|[&nbsp;string&nbsp;]||

<h3 id='/definitions/RegisterAssetsRequest'>RegisterAssetsRequest</h3>

Specify request containing the list of asset ids you want to register.

|Name|Type|Description|
|---|---|---|
|`asset_ids`|[&nbsp;string&nbsp;]||

<h3 id='/definitions/Object'>Object</h3>

Object

|Name|Type|Description|
|---|---|---|

<h3 id='/definitions/report_usage_batch_request'>report_usage_batch_request</h3>

Specifies the request information for the Batch Usages endpoint.

|Name|Type|Description|
|---|---|---|
|`asset_usages`|[&nbsp;[_asset_usage_](#/definitions/asset_usage)&nbsp;]||

<h3 id='/definitions/asset_usage'>asset_usage</h3>

Specifies the id, usage quantity, and date of when an asset was used.

|Name|Type|Description|
|---|---|---|
|`asset_id`|_string_|Specifies the Id of the asset that was used.|
|`quantity`|_integer_|Specifies the number of times the asset was used.|
|`usage_date`|_string_|Identifies the date the asset was used, in ISO 8601 format (e.g., YYYY-MM-DD), time is not needed.|

<h3 id='/definitions/report_usage_batch_response'>report_usage_batch_response</h3>

Specifies the response from the Batch Usages endpoint.

|Name|Type|Description|
|---|---|---|
|`invalid_assets`|[&nbsp;string&nbsp;]||
|`total_asset_usages_processed`|_integer_|Specifies the number of asset usage records that were successfully recorded.|

<h3 id='/definitions/AssetChanges'>AssetChanges</h3>

AssetChanges

|Name|Type|Description|
|---|---|---|
|`change_set_id`|_string_|Contains the identifier for the change-set resource. Passed into ConfirmAssetChanges requests to confirm receipt of the asset changes in the response.|
|`changed_assets`|[&nbsp;[_ChangedAssetDetail_](#/definitions/ChangedAssetDetail)&nbsp;]||

<h3 id='/definitions/ChangedAssetDetail'>ChangedAssetDetail</h3>

ChangedAssetDetail

|Name|Type|Description|
|---|---|---|
|`asset_changed_utc_datetime`|_string_|Contains the date of the asset change.|
|`asset_lifecycle`|_string_|Contains the type of change this asset change is. (i.e. "New," "Updated" or "Deleted")|
|`asset_type`|_string_|Contains the type of asset this asset change is (i.e. "Image").|
|`id`|_string_|Contains the Id for the asset change.|
|`uri`|_string_|Contains the asset download URL for assets with an AssetLifecycle of "New."|

<h3 id='/definitions/PartnerChannelList'>PartnerChannelList</h3>

PartnerChannelList

|Name|Type|Description|
|---|---|---|
|`channels`|[&nbsp;[_PartnerChannel_](#/definitions/PartnerChannel)&nbsp;]||

<h3 id='/definitions/PartnerChannel'>PartnerChannel</h3>

partner_channel

|Name|Type|Description|
|---|---|---|
|`asset_family`|_string_|Specifies the asset family for the channel (e.g. "editorial" or "creative")|
|`channel_id`|_integer_|Specifies the identification number for the channel|
|`channel_type`|_string_|Specifies the channel type (i.e. "New," "Updated" or "Deleted")|
|`start_date`|_string_||
|`notification_count`|_integer_|Specifies the current count of notifications pending in the channel|

<h3 id='/definitions/BoardList'>BoardList</h3>

BoardList

|Name|Type|Description|
|---|---|---|
|`boards`|[&nbsp;[_BoardListBoard_](#/definitions/BoardListBoard)&nbsp;]||
|`board_count`|_integer_||

<h3 id='/definitions/BoardListBoard'>BoardListBoard</h3>

BoardListBoard

|Name|Type|Description|
|---|---|---|
|`id`|_string_||
|`asset_count`|_integer_||
|`date_created`|_string_||
|`date_last_updated`|_string_||
|`description`|_string_||
|`hero_asset`|_object_||
|`name`|_string_||
|`board_relationship`|_string_||

<h3 id='/definitions/Asset'>Asset</h3>

Asset

|Name|Type|Description|
|---|---|---|
|`id`|_string_||
|`asset_type`|_string_||
|`date_added`|_string_||
|`display_sizes`|[&nbsp;[_DisplaySize_](#/definitions/DisplaySize)&nbsp;]||

<h3 id='/definitions/DisplaySize'>DisplaySize</h3>

DisplaySize

|Name|Type|Description|
|---|---|---|
|`name`|_string_||
|`uri`|_string_||

<h3 id='/definitions/BoardInfo'>BoardInfo</h3>

BoardInfo

|Name|Type|Description|
|---|---|---|
|`name`|_string_||
|`description`|_string_||

<h3 id='/definitions/BoardCreated'>BoardCreated</h3>

BoardCreated

|Name|Type|Description|
|---|---|---|
|`id`|_string_||

<h3 id='/definitions/BoardDetail'>BoardDetail</h3>

BoardDetail

|Name|Type|Description|
|---|---|---|
|`id`|_string_||
|`asset_count`|_integer_||
|`assets`|[&nbsp;[_Asset_](#/definitions/Asset)&nbsp;]||
|`date_created`|_string_||
|`date_last_updated`|_string_||
|`description`|_string_||
|`name`|_string_||
|`comment_count`|_integer_||
|`permissions`|_object_||
|`links`|_object_||

<h3 id='/definitions/BoardPermissions'>BoardPermissions</h3>

BoardPermissions

|Name|Type|Description|
|---|---|---|
|`can_delete_board`|_boolean_||
|`can_invite_to_board`|_boolean_||
|`can_update_name`|_boolean_||
|`can_update_description`|_boolean_||
|`can_add_assets`|_boolean_||
|`can_remove_assets`|_boolean_||

<h3 id='/definitions/Links'>Links</h3>

Links

|Name|Type|Description|
|---|---|---|
|`invitation`|_string_||
|`share`|_string_||

<h3 id='/definitions/BoardAsset'>BoardAsset</h3>

BoardAsset

|Name|Type|Description|
|---|---|---|
|`asset_id`|_string_||

<h3 id='/definitions/AddBoardAssetsResult'>AddBoardAssetsResult</h3>

AddBoardAssetsResult

|Name|Type|Description|
|---|---|---|
|`assets_added`|[&nbsp;[_BoardAsset_](#/definitions/BoardAsset)&nbsp;]||
|`assets_not_added`|[&nbsp;string&nbsp;]||

<h3 id='/definitions/CommentsList'>CommentsList</h3>

CommentsList

|Name|Type|Description|
|---|---|---|
|`comments`|[&nbsp;[_Comment_](#/definitions/Comment)&nbsp;]||
|`permissions`|_object_||

<h3 id='/definitions/Comment'>Comment</h3>

Comment

|Name|Type|Description|
|---|---|---|
|`created_by`|_object_||
|`date_created`|_string_||
|`id`|_string_||
|`permissions`|_object_||
|`text`|_string_||

<h3 id='/definitions/BoardCommentPermissions'>BoardCommentPermissions</h3>

BoardCommentPermissions

|Name|Type|Description|
|---|---|---|
|`can_add_comment`|_boolean_||

<h3 id='/definitions/Collaborator'>Collaborator</h3>

Collaborator

|Name|Type|Description|
|---|---|---|
|`first_name`|_string_||
|`last_name`|_string_||

<h3 id='/definitions/CommentPermissions'>CommentPermissions</h3>

CommentPermissions

|Name|Type|Description|
|---|---|---|
|`can_delete_comment`|_boolean_||

<h3 id='/definitions/CommentRequest'>CommentRequest</h3>

CommentRequest

|Name|Type|Description|
|---|---|---|
|`text`|_string_||

<h3 id='/definitions/CommentCreated'>CommentCreated</h3>

CommentCreated

|Name|Type|Description|
|---|---|---|
|`id`|_string_||