Ext.define('Supplier.model.ItemList',
    {
        //不要忘了继承
        extend:'Ext.data.Model',
        fields:[
            'id',
            'platformSubOrderNo',
            'type',
            'status',
            'returnStatus',
            'offlineReturnStatus',
            'exchangedGoods',
            'exchanged',
            'productCode',
            'specInfo',
            'productName',
            'productSku',
            'cateName',
            'brandName',
            'price',
            'discountPrice',
            'buyCount',
            'repoNum',
            'discountFee',
            'goodsFee',
            'sharedDiscountFee',
            'sharedPostFee',
            'actualFee',
            'postCoverFee',
            'postCoverRefundFee',
            'serviceCoverFee',
            'serviceCoverRefundFee',
            'refundFee',
            'returnPostFee',
            'returnPostPayer',
            'offlineRefundFee',
            'offlineReturnPostFee',
            'offlineReturnPostPayer',
            'exchangePostFee',
            'exchangePostPayer',
            'orderItemGoodsFee',
            'priceDescription'
        ],
        idProperty: 'id'
    }
)