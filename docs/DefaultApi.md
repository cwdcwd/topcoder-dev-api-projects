# TcProjectService.DefaultApi

All URIs are relative to *http://api.topcoder-dev.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**directProjectsPost**](DefaultApi.md#directProjectsPost) | **POST** /direct/projects | 
[**directProjectsProjectIdBillingaccountDelete**](DefaultApi.md#directProjectsProjectIdBillingaccountDelete) | **DELETE** /direct/projects/{projectId}/billingaccount | 
[**directProjectsProjectIdBillingaccountPost**](DefaultApi.md#directProjectsProjectIdBillingaccountPost) | **POST** /direct/projects/{projectId}/billingaccount | 
[**directProjectsProjectIdCopilotDelete**](DefaultApi.md#directProjectsProjectIdCopilotDelete) | **DELETE** /direct/projects/{projectId}/copilot | 
[**directProjectsProjectIdCopilotPost**](DefaultApi.md#directProjectsProjectIdCopilotPost) | **POST** /direct/projects/{projectId}/copilot | 
[**directProjectsProjectIdGet**](DefaultApi.md#directProjectsProjectIdGet) | **GET** /direct/projects/{projectId} | 
[**directProjectsProjectIdMilestonesPost**](DefaultApi.md#directProjectsProjectIdMilestonesPost) | **POST** /direct/projects/{projectId}/milestones | 
[**directProjectsProjectIdPermissionsDelete**](DefaultApi.md#directProjectsProjectIdPermissionsDelete) | **DELETE** /direct/projects/{projectId}/permissions | 
[**directProjectsProjectIdPermissionsGet**](DefaultApi.md#directProjectsProjectIdPermissionsGet) | **GET** /direct/projects/{projectId}/permissions | 
[**directProjectsProjectIdPermissionsPost**](DefaultApi.md#directProjectsProjectIdPermissionsPost) | **POST** /direct/projects/{projectId}/permissions | 
[**directProjectsProjectIdPermissionsPut**](DefaultApi.md#directProjectsProjectIdPermissionsPut) | **PUT** /direct/projects/{projectId}/permissions | 
[**directProjectsUserGet**](DefaultApi.md#directProjectsUserGet) | **GET** /direct/projects/user | 


<a name="directProjectsPost"></a>
# **directProjectsPost**
> ProjectPostResponse directProjectsPost(body)



Create Project

### Example
```javascript
var TcProjectService = require('tc_project_service');
var defaultClient = TcProjectService.ApiClient.default;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new TcProjectService.DefaultApi();

var body = new TcProjectService.ProjectRequestBody(); // ProjectRequestBody | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.directProjectsPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProjectRequestBody**](ProjectRequestBody.md)|  | 

### Return type

[**ProjectPostResponse**](ProjectPostResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="directProjectsProjectIdBillingaccountDelete"></a>
# **directProjectsProjectIdBillingaccountDelete**
> BillingAccountPostResponse directProjectsProjectIdBillingaccountDelete(projectId, body)



Remove Billing Account

### Example
```javascript
var TcProjectService = require('tc_project_service');
var defaultClient = TcProjectService.ApiClient.default;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new TcProjectService.DefaultApi();

var projectId = "projectId_example"; // String | the project id

var body = new TcProjectService.BillingAccountBody(); // BillingAccountBody | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.directProjectsProjectIdBillingaccountDelete(projectId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the project id | 
 **body** | [**BillingAccountBody**](BillingAccountBody.md)|  | 

### Return type

[**BillingAccountPostResponse**](BillingAccountPostResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="directProjectsProjectIdBillingaccountPost"></a>
# **directProjectsProjectIdBillingaccountPost**
> BillingAccountPostResponse directProjectsProjectIdBillingaccountPost(projectId, body)



Associate Billing Account

### Example
```javascript
var TcProjectService = require('tc_project_service');
var defaultClient = TcProjectService.ApiClient.default;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new TcProjectService.DefaultApi();

var projectId = "projectId_example"; // String | the project id

var body = new TcProjectService.BillingAccountBody(); // BillingAccountBody | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.directProjectsProjectIdBillingaccountPost(projectId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the project id | 
 **body** | [**BillingAccountBody**](BillingAccountBody.md)|  | 

### Return type

[**BillingAccountPostResponse**](BillingAccountPostResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="directProjectsProjectIdCopilotDelete"></a>
# **directProjectsProjectIdCopilotDelete**
> CopilotDeleteResponse directProjectsProjectIdCopilotDelete(projectId, body)



Remove Copilot

### Example
```javascript
var TcProjectService = require('tc_project_service');
var defaultClient = TcProjectService.ApiClient.default;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new TcProjectService.DefaultApi();

var projectId = "projectId_example"; // String | the project id

var body = new TcProjectService.CopilotRequestBody(); // CopilotRequestBody | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.directProjectsProjectIdCopilotDelete(projectId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the project id | 
 **body** | [**CopilotRequestBody**](CopilotRequestBody.md)|  | 

### Return type

[**CopilotDeleteResponse**](CopilotDeleteResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="directProjectsProjectIdCopilotPost"></a>
# **directProjectsProjectIdCopilotPost**
> CopilotPostResponse directProjectsProjectIdCopilotPost(projectId, body)



Add Copilot

### Example
```javascript
var TcProjectService = require('tc_project_service');
var defaultClient = TcProjectService.ApiClient.default;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new TcProjectService.DefaultApi();

var projectId = "projectId_example"; // String | the project id

var body = new TcProjectService.CopilotRequestBody(); // CopilotRequestBody | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.directProjectsProjectIdCopilotPost(projectId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the project id | 
 **body** | [**CopilotRequestBody**](CopilotRequestBody.md)|  | 

### Return type

[**CopilotPostResponse**](CopilotPostResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="directProjectsProjectIdGet"></a>
# **directProjectsProjectIdGet**
> ProjectGetResponse directProjectsProjectIdGet(projectId)



Retrieves project general info

### Example
```javascript
var TcProjectService = require('tc_project_service');
var defaultClient = TcProjectService.ApiClient.default;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new TcProjectService.DefaultApi();

var projectId = "projectId_example"; // String | the project id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.directProjectsProjectIdGet(projectId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the project id | 

### Return type

[**ProjectGetResponse**](ProjectGetResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="directProjectsProjectIdMilestonesPost"></a>
# **directProjectsProjectIdMilestonesPost**
> AddMilestoneResponse directProjectsProjectIdMilestonesPost(projectId, body)



Add Milestone

### Example
```javascript
var TcProjectService = require('tc_project_service');
var defaultClient = TcProjectService.ApiClient.default;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new TcProjectService.DefaultApi();

var projectId = "projectId_example"; // String | the project id

var body = new TcProjectService.AddMilestoneRequest(); // AddMilestoneRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.directProjectsProjectIdMilestonesPost(projectId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the project id | 
 **body** | [**AddMilestoneRequest**](AddMilestoneRequest.md)|  | 

### Return type

[**AddMilestoneResponse**](AddMilestoneResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="directProjectsProjectIdPermissionsDelete"></a>
# **directProjectsProjectIdPermissionsDelete**
> GenericResponse directProjectsProjectIdPermissionsDelete(projectId, body)



Delete Project Permissions

### Example
```javascript
var TcProjectService = require('tc_project_service');
var defaultClient = TcProjectService.ApiClient.default;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new TcProjectService.DefaultApi();

var projectId = "projectId_example"; // String | the project id

var body = new TcProjectService.PermissionsBody(); // PermissionsBody | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.directProjectsProjectIdPermissionsDelete(projectId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the project id | 
 **body** | [**PermissionsBody**](PermissionsBody.md)|  | 

### Return type

[**GenericResponse**](GenericResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="directProjectsProjectIdPermissionsGet"></a>
# **directProjectsProjectIdPermissionsGet**
> ProjectPermissionsGetResponse directProjectsProjectIdPermissionsGet(projectId)



Retrieves project permissions list

### Example
```javascript
var TcProjectService = require('tc_project_service');
var defaultClient = TcProjectService.ApiClient.default;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new TcProjectService.DefaultApi();

var projectId = "projectId_example"; // String | the project id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.directProjectsProjectIdPermissionsGet(projectId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the project id | 

### Return type

[**ProjectPermissionsGetResponse**](ProjectPermissionsGetResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="directProjectsProjectIdPermissionsPost"></a>
# **directProjectsProjectIdPermissionsPost**
> GenericResponse directProjectsProjectIdPermissionsPost(projectId, body)



Add Project Permissions

### Example
```javascript
var TcProjectService = require('tc_project_service');
var defaultClient = TcProjectService.ApiClient.default;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new TcProjectService.DefaultApi();

var projectId = "projectId_example"; // String | the project id

var body = new TcProjectService.PermissionsBody(); // PermissionsBody | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.directProjectsProjectIdPermissionsPost(projectId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the project id | 
 **body** | [**PermissionsBody**](PermissionsBody.md)|  | 

### Return type

[**GenericResponse**](GenericResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="directProjectsProjectIdPermissionsPut"></a>
# **directProjectsProjectIdPermissionsPut**
> GenericResponse directProjectsProjectIdPermissionsPut(projectId, body)



Update Project Permissions

### Example
```javascript
var TcProjectService = require('tc_project_service');
var defaultClient = TcProjectService.ApiClient.default;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new TcProjectService.DefaultApi();

var projectId = "projectId_example"; // String | the project id

var body = new TcProjectService.PermissionsBody(); // PermissionsBody | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.directProjectsProjectIdPermissionsPut(projectId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the project id | 
 **body** | [**PermissionsBody**](PermissionsBody.md)|  | 

### Return type

[**GenericResponse**](GenericResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="directProjectsUserGet"></a>
# **directProjectsUserGet**
> UserProjectsGetResponse directProjectsUserGet()



Retrieves user projects

### Example
```javascript
var TcProjectService = require('tc_project_service');
var defaultClient = TcProjectService.ApiClient.default;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new TcProjectService.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.directProjectsUserGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserProjectsGetResponse**](UserProjectsGetResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

