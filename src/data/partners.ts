export interface Partner {
    id: number;
    name: string;
    description: string;
    logo: string;
    category: string;
}

export const partners: Partner[] = [
    {
        id: 1,
        name: 'Siêu Thị Co.op Mart',
        description: 'Hệ thống siêu thị lớn trên toàn quốc',
        logo: '/assets/images/partners/coopmart.jpg',
        category: 'Siêu thị'
    },
    {
        id: 2,
        name: 'Vinmart',
        description: 'Chuỗi siêu thị và cửa hàng tiện lợi',
        logo: '/assets/images/partners/vinmart.jpg',
        category: 'Siêu thị'
    },
    {
        id: 3,
        name: 'Big C',
        description: 'Trung tâm mua sắm và siêu thị',
        logo: '/assets/images/partners/bigc.jpg',
        category: 'Siêu thị'
    },
    {
        id: 4,
        name: 'Lotte Mart',
        description: 'Siêu thị cao cấp Hàn Quốc',
        logo: '/assets/images/partners/lottemart.jpg',
        category: 'Siêu thị'
    },
    {
        id: 5,
        name: 'Nhà Hàng Quán Ăn Ngon',
        description: 'Chuỗi nhà hàng ẩm thực Việt',
        logo: '/assets/images/partners/quanangon.jpg',
        category: 'Nhà hàng'
    },
    {
        id: 6,
        name: 'Cơm Niêu Singapore',
        description: 'Hệ thống cơm niêu chất lượng cao',
        logo: '/assets/images/partners/comnieu.jpg',
        category: 'Nhà hàng'
    }
];
