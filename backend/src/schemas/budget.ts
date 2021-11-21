import { DataResponse } from '../controllers/responses'
import { AccountModel } from './account'

/**
 * @example {
 *   id: "abc123",
 *   name: "My Budget",
 *   created: "2011-10-05T14:48:00.000Z",
 *   updated: "2011-10-05T14:48:00.000Z",
 * }
 */
export interface BudgetModel {
  /**
   * Unique id
   */
  id: string

  /**
   * Budget name
   */
  name: string

  /**
   * Budget's accounts
   */
  accounts: AccountModel[]

  /**
   * Amount left to budget
   */
  toBeBudgeted: number

  /**
   * Datetime user was created
   */
  created: string

  /**
   * Datetime user was updated
   */
  updated: string
}

/**
 * @example {
 *  "name": "My Budget",
 * }
 */
export interface BudgetRequest {
  name: string
}

export type BudgetResponse = DataResponse<BudgetModel>

export type BudgetsResponse = DataResponse<BudgetModel[]>
