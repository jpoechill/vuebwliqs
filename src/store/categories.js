const categories = [
  {
    categoryName: 'Spirits',
    categoryShortName: 'spirits',
    subCategories: [
      // {
      //   subCategoryName: 'Bourbon',
      //   subCategoryShortName: 'bourbon',
      //   subCategoryBrands: []
      // },
      {
        subCategoryName: 'Tequila',
        subCategoryShortName: 'tequila',
        subCategoryBrands: []
      },
      {
        subCategoryName: 'Vodka',
        subCategoryShortName: 'vodka',
        subCategoryBrands: [
          {
            brandName: 'Hangar 1',
            brandShortName: 'hangar1',
            brandItems: []
          }
        ]
      },
      {
        subCategoryName: 'Whiskey',
        subCategoryShortName: 'whiskey',
        subCategoryBrands: []
      }
    ]
  },
  {
    categoryName: 'Crafts',
    categoryShortName: 'crafts',
    subCategories: [
      {
        subCategoryName: '6 Packs',
        subCategoryShortName: '6packs',
        brands: [
        ]
      },
      {
        subCategoryName: '24 oz',
        subCategoryShortName: 'tallbottles',
        brands: [
        ]
      }
    ]
  },
  {
    categoryName: 'Wines',
    categoryShortName: 'wines',
    subCategories: [
      {
        subCategoryName: 'Cab. Sauvignon',
        subCategoryShortName: 'cabs',
        brands: []
      },
      {
        subCategoryName: 'Pinot Noir',
        subCategoryShortName: 'pinot-noir',
        brands: []
      },
      {
        subCategoryName: 'Red Wine',
        subCategoryShortName: 'reds',
        brands: []
      },
      {
        subCategoryName: 'Zinfandel',
        subCategoryShortName: 'zinfandel',
        brands: []
      }
    ]
  },
  {
    categoryName: 'Specialty',
    categoryShortName: 'specialty',
    subCategories: [
      {
        subCategoryName: 'Absinthe',
        subCategoryShortName: 'absinthe',
        brands: []
      },
      {
        subCategoryName: 'Champagne',
        subCategoryShortName: 'champagne',
        brands: []
      },
      {
        subCategoryName: 'Liqueur',
        subCategoryShortName: 'liqueur',
        brands: []
      },
      {
        subCategoryName: 'Vermouth',
        subCategoryShortName: 'vermouth',
        brands: []
      },
    ]
  },
  {
    categoryName: 'Misc',
    categoryShortName: 'misc',
    subCategories: [
      {
        subCategoryName: 'Mixers',
        subCategoryShortName: 'mixers',
        brands: []
      },
      {
        subCategoryName: 'Soda',
        subCategoryShortName: 'soda',
        brands: []
      },
      {
        subCategoryName: 'Water',
        subCategoryShortName: 'water',
        brands: []
      }
    ]
  },
]

export default categories
