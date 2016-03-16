


    export interface Category {


        "id"?: number;


        "name"?: string;

    }







    export interface InlineResponse200 {


        "photoUrls"?: Array<string>;


        "name"?: string;


        "id": number;


        "category"?: any;


        "tags"?: Array<Tag>;


        /**
        * pet status in the store
        */

        "status"?: InlineResponse200.StatusEnum;

    }



export namespace InlineResponse200 {












    export enum StatusEnum { 
        available,
        pending,
        sold
    }


}





    export interface ModelReturn {


        "return"?: number;

    }







    export interface Name {


        "name"?: number;

    }







    export interface Order {


        "id"?: number;


        "petId"?: number;


        "quantity"?: number;


        "shipDate"?: Date;


        /**
        * Order Status
        */

        "status"?: Order.StatusEnum;


        "complete"?: boolean;

    }



export namespace Order {










    export enum StatusEnum { 
        placed,
        approved,
        delivered
    }




}





    export interface Pet {


        "id"?: number;


        "category"?: Category;


        "name": string;


        "photoUrls": Array<string>;


        "tags"?: Array<Tag>;


        /**
        * pet status in the store
        */

        "status"?: Pet.StatusEnum;

    }



export namespace Pet {












    export enum StatusEnum { 
        available,
        pending,
        sold
    }


}





    export interface SpecialModelName {


        "$Special[propertyName]"?: number;

    }







    export interface Tag {


        "id"?: number;


        "name"?: string;

    }







    export interface User {


        "id"?: number;


        "username"?: string;


        "firstName"?: string;


        "lastName"?: string;


        "email"?: string;


        "password"?: string;


        "phone"?: string;


        /**
        * User Status
        */

        "userStatus"?: number;

    }




