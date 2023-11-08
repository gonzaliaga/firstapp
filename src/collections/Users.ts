import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
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
      name: 'telephone',
      label: 'Telephone',
      type: 'text',
      required: true,
    },
    {
      name: 'direction',
      label: 'Adress',
      type: 'text',
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',

    }
  ],
}

export default Users
