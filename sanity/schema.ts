import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import lector from './schemas/lector'
import lookingFor from './schemas/lookingFor'
import author from './schemas/author'
import language from './schemas/language'
import company from './schemas/company'
import review from './schemas/review'
import payment from './schemas/payment'
import pricelist from './schemas/pricelist'
import redirect from './schemas/redirect'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    language,
    company,
    review,
    post,
    category,
    lector,
    author,
    lookingFor,
    payment,
    pricelist,
    blockContent,
    redirect,
  ],
}
