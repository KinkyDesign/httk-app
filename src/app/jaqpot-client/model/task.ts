/**
 * Jaqpot API
 * Jaqpot v4 (Quattro) is the 4th version of a YAQP, a RESTful web service which can be used to train machine learning models and use them to obtain toxicological predictions for given chemical compounds or engineered nano materials. The project is written in Java8 and JEE7.
 *
 * OpenAPI spec version: 4.0.3
 * Contact: hampos@me.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { ErrorReport } from './errorReport';
import { MetaInfo } from './metaInfo';


export interface Task {
    meta?: MetaInfo;

    ontologicalClasses?: Array<string>;

    visible?: boolean;

    temporary?: boolean;

    featured?: boolean;

    resultUri?: string;

    result?: string;

    percentageCompleted?: number;

    errorReport?: ErrorReport;

    httpStatus?: number;

    duration?: number;

    type?: Task.TypeEnum;

    id?: string;

    _id?: string;

    status?: Task.StatusEnum;

}
export namespace Task {
    export enum TypeEnum {
        TRAINING = <any> 'TRAINING',
        PREDICTION = <any> 'PREDICTION',
        PREPARATION = <any> 'PREPARATION',
        VALIDATION = <any> 'VALIDATION'
    }
    export enum StatusEnum {
        RUNNING = <any> 'RUNNING',
        COMPLETED = <any> 'COMPLETED',
        CANCELLED = <any> 'CANCELLED',
        ERROR = <any> 'ERROR',
        REJECTED = <any> 'REJECTED',
        QUEUED = <any> 'QUEUED'
    }
}