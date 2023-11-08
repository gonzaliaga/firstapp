import { CollectionConfig } from 'payload/types'

const Products: CollectionConfig = {
    slug: 'Products',
    //auth: true,
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true,
        },
        {
            name: 'price',
            label: 'Price',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            label: 'Description',
            type: 'text',
            required: true,
        },
        {
            name: 'image',
            label: 'Image',
            type: 'upload',
            relationTo: 'media',

        }
    ],
}

export default Products