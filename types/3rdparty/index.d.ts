import _ from "lodash"

declare module "lodash" {
    interface lodashStatic {
        multiply(multiplier:number,multiplicand:number): number 
    }
}