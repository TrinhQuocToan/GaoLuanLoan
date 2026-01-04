export interface Product {
    id: number;
    name: string;
    type: string;
    origin: string;
    description: string;
    price: string;
    image: string;
    features: string[];
}

export const products: Product[] = [
    {
        id: 1,
        name: 'Gạo Jasmine',
        type: 'Gạo thơm',
        origin: 'Đồng bằng sông Cửu Long',
        description: 'Gạo Jasmine thơm dẻo, hạt dài, màu trắng trong. Khi nấu cơm có mùi thơm tự nhiên đặc trưng.',
        price: '25.000đ/kg',
        image: '/assets/images/jasmine-rice.jpg',
        features: ['Hạt dài', 'Thơm tự nhiên', 'Dẻo mềm', 'Giàu dinh dưỡng']
    },
    {
        id: 2,
        name: 'Gạo ST25',
        type: 'Gạo cao cấp',
        origin: 'Sóc Trăng',
        description: 'Gạo ST25 đạt giải nhất cuộc thi gạo ngon nhất thế giới. Hạt gạo trắng trong, thơm nhẹ, cơm dẻo và ngọt tự nhiên.',
        price: '45.000đ/kg',
        image: '/assets/images/st25-rice.jpg',
        features: ['Giải nhất thế giới', 'Thơm nhẹ', 'Cơm ngọt', 'Cao cấp']
    },
    {
        id: 3,
        name: 'Gạo Nếp Than',
        type: 'Gạo nếp',
        origin: 'Cao Bằng',
        description: 'Gạo nếp than đặc sản vùng cao, màu tím đen tự nhiên, giàu chất chống oxi hóa, tốt cho sức khỏe.',
        price: '35.000đ/kg',
        image: '/assets/images/black-sticky-rice.jpg',
        features: ['Màu tự nhiên', 'Giàu dinh dưỡng', 'Chống oxi hóa', 'Đặc sản']
    },
    {
        id: 4,
        name: 'Gạo Lứt Hữu Cơ',
        type: 'Gạo lứt',
        origin: 'Đà Lạt',
        description: 'Gạo lứt hữu cơ trồng theo phương pháp tự nhiên, không hóa chất. Giữ nguyên lớp cám, giàu chất xơ và vitamin.',
        price: '40.000đ/kg',
        image: '/assets/images/brown-rice.jpg',
        features: ['Hữu cơ', 'Giàu chất xơ', 'Nhiều vitamin', 'Tốt cho sức khỏe']
    },
    {
        id: 5,
        name: 'Gạo Tám Thơm',
        type: 'Gạo thơm',
        origin: 'An Giang',
        description: 'Gạo tám thơm hạt tròn, trắng trong, mùi thơm đặc trưng. Cơm dẻo, ngon, phù hợp cho mọi bữa ăn gia đình.',
        price: '28.000đ/kg',
        image: '/assets/images/tam-thom-rice.jpg',
        features: ['Hạt tròn', 'Thơm đặc trưng', 'Cơm dẻo', 'Phổ biến']
    },
    {
        id: 6,
        name: 'Gạo Đỏ Huyết Rồng',
        type: 'Gạo đặc biệt',
        origin: 'Điện Biên',
        description: 'Gạo đỏ huyết rồng màu đỏ tự nhiên, giàu sắt và khoáng chất. Tốt cho người thiếu máu và phụ nữ sau sinh.',
        price: '50.000đ/kg',
        image: '/assets/images/red-rice.jpg',
        features: ['Màu đỏ tự nhiên', 'Giàu sắt', 'Nhiều khoáng chất', 'Quý hiếm']
    }
];
