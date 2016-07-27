import { Category, InlineResponse200, ModelReturn, Name, Order, Pet, SpecialModelName, Tag, User,  } from './api-models';
import {HttpResponseMessage} from 'aurelia-http-client';
import {inject, singleton} from 'aurelia-framework';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

/* tslint:disable:no-unused-variable */

export interface IApiExecutor {
    execute(methodeType: string, uri: string, needAuthorization: boolean, queryParams: any, bodyParams: any): Promise<HttpResponseMessage>;
    
}






@inject('IApiExecutor')
export class PetApi {

    constructor(private executor: IApiExecutor) { };


    /**
     * Add a new pet to the store
     * 
     * @param body Pet object that needs to be added to the store
     */
    public addPet (body?: Pet) : Promise<{ response: HttpResponseMessage  }> {
        const uri = '/api/pet';
        var queryParameters: any = {};
        var formParams: any = {};




        var bodyParams: any = body;

        return this.executor.execute('POST', uri, true, queryParameters, bodyParams).then((result) => {
            return { response: result };
        })
    }

    /**
     * Fake endpoint to test byte array in body parameter for adding a new pet to the store
     * 
     * @param body Pet object in the form of byte array
     */
    public addPetUsingByteArray (body?: string) : Promise<{ response: HttpResponseMessage  }> {
        const uri = '/api/pet?testing_byte_array=true';
        var queryParameters: any = {};
        var formParams: any = {};




        var bodyParams: any = body;

        return this.executor.execute('POST', uri, true, queryParameters, bodyParams).then((result) => {
            return { response: result };
        })
    }

    /**
     * Deletes a pet
     * 
     * @param petId Pet id to delete
     * @param apiKey 
     */
    public deletePet (petId: number, apiKey?: string) : Promise<{ response: HttpResponseMessage  }> {
        const uri = '/api/pet/{petId}'
            .replace('{' + 'petId' + '}', String(petId));
        var queryParameters: any = {};
        var formParams: any = {};

        // verify required parameter 'petId' is set
        if (!petId) {
            throw new Error('Missing required parameter petId when calling deletePet');
        }




        var bodyParams: any = null;

        return this.executor.execute('DELETE', uri, true, queryParameters, bodyParams).then((result) => {
            return { response: result };
        })
    }

    /**
     * Finds Pets by status
     * Multiple status values can be provided with comma separated strings
     * @param status Status values that need to be considered for query
     */
    public findPetsByStatus (status?: Array<string>) : Promise<{ response: HttpResponseMessage , content: Array<Pet>  }> {
        const uri = '/api/pet/findByStatus';
        var queryParameters: any = {};
        var formParams: any = {};


        if (status !== undefined) {
            queryParameters['status'] = status;
        }



        var bodyParams: any = null;

        return this.executor.execute('GET', uri, true, queryParameters, bodyParams).then((result) => {
            return { response: result, content: result.content  };
        })
    }

    /**
     * Finds Pets by tags
     * Muliple tags can be provided with comma seperated strings. Use tag1, tag2, tag3 for testing.
     * @param tags Tags to filter by
     */
    public findPetsByTags (tags?: Array<string>) : Promise<{ response: HttpResponseMessage , content: Array<Pet>  }> {
        const uri = '/api/pet/findByTags';
        var queryParameters: any = {};
        var formParams: any = {};


        if (tags !== undefined) {
            queryParameters['tags'] = tags;
        }



        var bodyParams: any = null;

        return this.executor.execute('GET', uri, true, queryParameters, bodyParams).then((result) => {
            return { response: result, content: result.content  };
        })
    }

    /**
     * Find pet by ID
     * Returns a pet when ID &lt; 10.  ID &gt; 10 or nonintegers will simulate API error conditions
     * @param petId ID of pet that needs to be fetched
     */
    public getPetById (petId: number) : Promise<{ response: HttpResponseMessage , content: Pet  }> {
        const uri = '/api/pet/{petId}'
            .replace('{' + 'petId' + '}', String(petId));
        var queryParameters: any = {};
        var formParams: any = {};

        // verify required parameter 'petId' is set
        if (!petId) {
            throw new Error('Missing required parameter petId when calling getPetById');
        }




        var bodyParams: any = null;

        return this.executor.execute('GET', uri, truetrue, queryParameters, bodyParams).then((result) => {
            return { response: result, content: result.content  };
        })
    }

    /**
     * Fake endpoint to test inline arbitrary object return by &#39;Find pet by ID&#39;
     * Returns a pet when ID &lt; 10.  ID &gt; 10 or nonintegers will simulate API error conditions
     * @param petId ID of pet that needs to be fetched
     */
    public getPetByIdInObject (petId: number) : Promise<{ response: HttpResponseMessage , content: InlineResponse200  }> {
        const uri = '/api/pet/{petId}?response=inline_arbitrary_object'
            .replace('{' + 'petId' + '}', String(petId));
        var queryParameters: any = {};
        var formParams: any = {};

        // verify required parameter 'petId' is set
        if (!petId) {
            throw new Error('Missing required parameter petId when calling getPetByIdInObject');
        }




        var bodyParams: any = null;

        return this.executor.execute('GET', uri, truetrue, queryParameters, bodyParams).then((result) => {
            return { response: result, content: result.content  };
        })
    }

    /**
     * Fake endpoint to test byte array return by &#39;Find pet by ID&#39;
     * Returns a pet when ID &lt; 10.  ID &gt; 10 or nonintegers will simulate API error conditions
     * @param petId ID of pet that needs to be fetched
     */
    public petPetIdtestingByteArraytrueGet (petId: number) : Promise<{ response: HttpResponseMessage , content: string  }> {
        const uri = '/api/pet/{petId}?testing_byte_array=true'
            .replace('{' + 'petId' + '}', String(petId));
        var queryParameters: any = {};
        var formParams: any = {};

        // verify required parameter 'petId' is set
        if (!petId) {
            throw new Error('Missing required parameter petId when calling petPetIdtestingByteArraytrueGet');
        }




        var bodyParams: any = null;

        return this.executor.execute('GET', uri, truetrue, queryParameters, bodyParams).then((result) => {
            return { response: result, content: result.content  };
        })
    }

    /**
     * Update an existing pet
     * 
     * @param body Pet object that needs to be added to the store
     */
    public updatePet (body?: Pet) : Promise<{ response: HttpResponseMessage  }> {
        const uri = '/api/pet';
        var queryParameters: any = {};
        var formParams: any = {};




        var bodyParams: any = body;

        return this.executor.execute('PUT', uri, true, queryParameters, bodyParams).then((result) => {
            return { response: result };
        })
    }

    /**
     * Updates a pet in the store with form data
     * 
     * @param petId ID of pet that needs to be updated
     * @param name Updated name of the pet
     * @param status Updated status of the pet
     */
    public updatePetWithForm (petId: string, name?: string, status?: string) : Promise<{ response: HttpResponseMessage  }> {
        const uri = '/api/pet/{petId}'
            .replace('{' + 'petId' + '}', String(petId));
        var queryParameters: any = {};
        var formParams: any = {};

        // verify required parameter 'petId' is set
        if (!petId) {
            throw new Error('Missing required parameter petId when calling updatePetWithForm');
        }



        if (name !== undefined) {
            formParams['name'] = name;
        }

        if (status !== undefined) {
            formParams['status'] = status;
        }


        var bodyParams: any = null;

        return this.executor.execute('POST', uri, true, queryParameters, bodyParams).then((result) => {
            return { response: result };
        })
    }

    /**
     * uploads an image
     * 
     * @param petId ID of pet to update
     * @param additionalMetadata Additional data to pass to server
     * @param file file to upload
     */
    public uploadFile (petId: number, additionalMetadata?: string, file?: any) : Promise<{ response: HttpResponseMessage  }> {
        const uri = '/api/pet/{petId}/uploadImage'
            .replace('{' + 'petId' + '}', String(petId));
        var queryParameters: any = {};
        var formParams: any = {};

        // verify required parameter 'petId' is set
        if (!petId) {
            throw new Error('Missing required parameter petId when calling uploadFile');
        }



        if (additionalMetadata !== undefined) {
            formParams['additionalMetadata'] = additionalMetadata;
        }

        if (file !== undefined) {
            formParams['file'] = file;
        }


        var bodyParams: any = null;

        return this.executor.execute('POST', uri, true, queryParameters, bodyParams).then((result) => {
            return { response: result };
        })
    }

}





@inject('IApiExecutor')
export class StoreApi {

    constructor(private executor: IApiExecutor) { };


    /**
     * Delete purchase order by ID
     * For valid response try integer IDs with value &lt; 1000. Anything above 1000 or nonintegers will generate API errors
     * @param orderId ID of the order that needs to be deleted
     */
    public deleteOrder (orderId: string) : Promise<{ response: HttpResponseMessage  }> {
        const uri = '/api/store/order/{orderId}'
            .replace('{' + 'orderId' + '}', String(orderId));
        var queryParameters: any = {};
        var formParams: any = {};

        // verify required parameter 'orderId' is set
        if (!orderId) {
            throw new Error('Missing required parameter orderId when calling deleteOrder');
        }




        var bodyParams: any = null;

        return this.executor.execute('DELETE', uri, false, queryParameters, bodyParams).then((result) => {
            return { response: result };
        })
    }

    /**
     * Finds orders by status
     * A single status value can be provided as a string
     * @param status Status value that needs to be considered for query
     */
    public findOrdersByStatus (status?: string) : Promise<{ response: HttpResponseMessage , content: Array<Order>  }> {
        const uri = '/api/store/findByStatus';
        var queryParameters: any = {};
        var formParams: any = {};


        if (status !== undefined) {
            queryParameters['status'] = status;
        }



        var bodyParams: any = null;

        return this.executor.execute('GET', uri, truetrue, queryParameters, bodyParams).then((result) => {
            return { response: result, content: result.content  };
        })
    }

    /**
     * Returns pet inventories by status
     * Returns a map of status codes to quantities
     */
    public getInventory () : Promise<{ response: HttpResponseMessage , content: { [key: string]: number; }  }> {
        const uri = '/api/store/inventory';
        var queryParameters: any = {};
        var formParams: any = {};




        var bodyParams: any = null;

        return this.executor.execute('GET', uri, true, queryParameters, bodyParams).then((result) => {
            return { response: result, content: result.content  };
        })
    }

    /**
     * Fake endpoint to test arbitrary object return by &#39;Get inventory&#39;
     * Returns an arbitrary object which is actually a map of status codes to quantities
     */
    public getInventoryInObject () : Promise<{ response: HttpResponseMessage , content: any  }> {
        const uri = '/api/store/inventory?response=arbitrary_object';
        var queryParameters: any = {};
        var formParams: any = {};




        var bodyParams: any = null;

        return this.executor.execute('GET', uri, true, queryParameters, bodyParams).then((result) => {
            return { response: result, content: result.content  };
        })
    }

    /**
     * Find purchase order by ID
     * For valid response try integer IDs with value &lt;= 5 or &gt; 10. Other values will generated exceptions
     * @param orderId ID of pet that needs to be fetched
     */
    public getOrderById (orderId: string) : Promise<{ response: HttpResponseMessage , content: Order  }> {
        const uri = '/api/store/order/{orderId}'
            .replace('{' + 'orderId' + '}', String(orderId));
        var queryParameters: any = {};
        var formParams: any = {};

        // verify required parameter 'orderId' is set
        if (!orderId) {
            throw new Error('Missing required parameter orderId when calling getOrderById');
        }




        var bodyParams: any = null;

        return this.executor.execute('GET', uri, truetrue, queryParameters, bodyParams).then((result) => {
            return { response: result, content: result.content  };
        })
    }

    /**
     * Place an order for a pet
     * 
     * @param body order placed for purchasing the pet
     */
    public placeOrder (body?: Order) : Promise<{ response: HttpResponseMessage , content: Order  }> {
        const uri = '/api/store/order';
        var queryParameters: any = {};
        var formParams: any = {};




        var bodyParams: any = body;

        return this.executor.execute('POST', uri, truetrue, queryParameters, bodyParams).then((result) => {
            return { response: result, content: result.content  };
        })
    }

}





@inject('IApiExecutor')
export class UserApi {

    constructor(private executor: IApiExecutor) { };


    /**
     * Create user
     * This can only be done by the logged in user.
     * @param body Created user object
     */
    public createUser (body?: User) : Promise<{ response: HttpResponseMessage  }> {
        const uri = '/api/user';
        var queryParameters: any = {};
        var formParams: any = {};




        var bodyParams: any = body;

        return this.executor.execute('POST', uri, false, queryParameters, bodyParams).then((result) => {
            return { response: result };
        })
    }

    /**
     * Creates list of users with given input array
     * 
     * @param body List of user object
     */
    public createUsersWithArrayInput (body?: Array<User>) : Promise<{ response: HttpResponseMessage  }> {
        const uri = '/api/user/createWithArray';
        var queryParameters: any = {};
        var formParams: any = {};




        var bodyParams: any = body;

        return this.executor.execute('POST', uri, false, queryParameters, bodyParams).then((result) => {
            return { response: result };
        })
    }

    /**
     * Creates list of users with given input array
     * 
     * @param body List of user object
     */
    public createUsersWithListInput (body?: Array<User>) : Promise<{ response: HttpResponseMessage  }> {
        const uri = '/api/user/createWithList';
        var queryParameters: any = {};
        var formParams: any = {};




        var bodyParams: any = body;

        return this.executor.execute('POST', uri, false, queryParameters, bodyParams).then((result) => {
            return { response: result };
        })
    }

    /**
     * Delete user
     * This can only be done by the logged in user.
     * @param username The name that needs to be deleted
     */
    public deleteUser (username: string) : Promise<{ response: HttpResponseMessage  }> {
        const uri = '/api/user/{username}'
            .replace('{' + 'username' + '}', String(username));
        var queryParameters: any = {};
        var formParams: any = {};

        // verify required parameter 'username' is set
        if (!username) {
            throw new Error('Missing required parameter username when calling deleteUser');
        }




        var bodyParams: any = null;

        return this.executor.execute('DELETE', uri, true, queryParameters, bodyParams).then((result) => {
            return { response: result };
        })
    }

    /**
     * Get user by user name
     * 
     * @param username The name that needs to be fetched. Use user1 for testing.
     */
    public getUserByName (username: string) : Promise<{ response: HttpResponseMessage , content: User  }> {
        const uri = '/api/user/{username}'
            .replace('{' + 'username' + '}', String(username));
        var queryParameters: any = {};
        var formParams: any = {};

        // verify required parameter 'username' is set
        if (!username) {
            throw new Error('Missing required parameter username when calling getUserByName');
        }




        var bodyParams: any = null;

        return this.executor.execute('GET', uri, false, queryParameters, bodyParams).then((result) => {
            return { response: result, content: result.content  };
        })
    }

    /**
     * Logs user into the system
     * 
     * @param username The user name for login
     * @param password The password for login in clear text
     */
    public loginUser (username?: string, password?: string) : Promise<{ response: HttpResponseMessage , content: string  }> {
        const uri = '/api/user/login';
        var queryParameters: any = {};
        var formParams: any = {};


        if (username !== undefined) {
            queryParameters['username'] = username;
        }

        if (password !== undefined) {
            queryParameters['password'] = password;
        }



        var bodyParams: any = null;

        return this.executor.execute('GET', uri, false, queryParameters, bodyParams).then((result) => {
            return { response: result, content: result.content  };
        })
    }

    /**
     * Logs out current logged in user session
     * 
     */
    public logoutUser () : Promise<{ response: HttpResponseMessage  }> {
        const uri = '/api/user/logout';
        var queryParameters: any = {};
        var formParams: any = {};




        var bodyParams: any = null;

        return this.executor.execute('GET', uri, false, queryParameters, bodyParams).then((result) => {
            return { response: result };
        })
    }

    /**
     * Updated user
     * This can only be done by the logged in user.
     * @param username name that need to be deleted
     * @param body Updated user object
     */
    public updateUser (username: string, body?: User) : Promise<{ response: HttpResponseMessage  }> {
        const uri = '/api/user/{username}'
            .replace('{' + 'username' + '}', String(username));
        var queryParameters: any = {};
        var formParams: any = {};

        // verify required parameter 'username' is set
        if (!username) {
            throw new Error('Missing required parameter username when calling updateUser');
        }




        var bodyParams: any = body;

        return this.executor.execute('PUT', uri, false, queryParameters, bodyParams).then((result) => {
            return { response: result };
        })
    }

}

