export default {
  success: true,
  data: {
    data: [{
      external_referer: '591432361242',
      status: 'Processing',
      last_update: {
        $date: '2018-09-05T01:05:26.000Z',
      },
      amount: {
        gtq: {
          grand_total: '300',
          total_sales_tax: '0',
          total_shipping_charge: '0',
          total_shipping_tax: '0',
          total_product_price: '300',
          total_adjustment: '0',
          adjustments: [],
        },
      },
      same_shipping_and_billing_address: false,
      billing_info: {
        nickname: 'Facturacion',
        address_type: 'Billing',
        external_referer: '532191635273',
        first_name: 'Angel Miguel',
        last_name: 'Sanchez',
        address_line_1: 'La calle shipp 22',
        address_line_2: 'Chiticoy',
        address_line_3: '',
        city: 'Baja Verapaz',
        state_or_province_name: 'Rabinal',
        country: 'GT',
        postal_code: '00000',
        email_1: 'miguel.carmona@edgebound.com',
        email_2: '',
        phone_1: '22112211',
        phone_2: '',
        fax_1: '1234567890123',
        fax_2: '',
        same_shipping_and_billing_address: true,
        custom_info: [{
          key: 'nit',
          value: 'CF',
        }],
      },
      promo_codes: [],
      items: [{
        part_number: 'I02_2598_196',
        quantity: '1',
        free_gift: false,
        amount: {
          gtq: {
            unit_price: '200',
            total_items: '200',
            total_adjustment: '0',
            adjustment: {},
            sales_tax: '0',
            shipping_charge: '0',
            shipping_tax: '0',
          },
        },
        item_status: {
          status: 'P',
          inventory: 'Available',
          fulfillment: 'Unreleased',
        },
        fulfillment_info: {
          available_date: {
            $date: '2018-09-05T01:04:21.493Z',
          },
          expected_ship_date: {
            $date: '2018-09-05T01:04:21.522Z',
          },
        },
        fulfillment_center: {
          id: '13901',
          name: 'clarogt',
        },
        shipping_info: {
          nickname: 'Envio',
          address_type: 'Shipping',
          external_referer: '532190338897',
          first_name: 'Angel Miguel',
          last_name: 'Sanchez',
          address_line_1: 'La calle shipp 22',
          address_line_2: 'Chiticoy',
          address_line_3: '',
          city: 'Baja Verapaz',
          state_or_province_name: 'Rabinal',
          country: 'GT',
          postal_code: '00000',
          email_1: 'miguel.carmona@edgebound.com',
          email_2: '',
          phone_1: '22112211',
          phone_2: '',
          fax_1: '1234567890123',
          fax_2: '',
          same_shipping_and_billing_address: true,
          custom_info: [{
            key: 'departamentoid',
            value: '2',
          },
          {
            key: 'municipioid',
            value: '3',
          },
          {
            key: 'pobladoid',
            value: '1175',
          },
          ],
        },
        product: {
          part_number: 'I01_2598_194A',
          buyable: true,
          available: true,
          locales: {
            es_gt: {
              description: 'HUAWEI Y6II NEGRO (P)',
              long_description: 'HUAWEI Y6II NEGRO (P)',
              name: 'HUAWEI Y6II NEGRO (P)',
              seo: {
                title: 'huawei-y6ii-negro-p',
                name: 'huawei-y6ii-negro-p',
              },
              categories: [{
                slug: 'prepago/celulares',
              },
              {
                slug: 'prepago',
              },
              ],
            },
          },
          attributes: [{
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-marca',
            value: 'Huawei',
            type: 'descriptive',
          },
          {
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-color',
            value: 'Negro',
            type: 'descriptive',
          },
          {
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-chars-mp3',
            value: '1',
            type: 'descriptive',
          },
          ],
          position: 1.0,
          last_update: {
            $date: '2018-08-15T18:17:13.275Z',
          },
          items: [{
            part_number: 'I02_2598_196',
            buyable: true,
            available: true,
            image_correlator: 'I02.2598.196',
            locales: {
              es_gt: {
                description: 'HUAWEI Y6II DORADO (P)',
                long_description: 'HUAWEI Y6II DORADO (P)',
                name: 'HUAWEI Y6II DORADO (P)',
                position: 1.0,
                seo: {
                  title: 'huawei-y6ii-dorado-p',
                  name: 'huawei-y6ii-dorado-p',
                },
              },
            },
            attributes: [{
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-marca',
              value: 'Huawei',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-color',
              value: 'Dorado',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-chars-mp3',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'def-color',
              value: 'Dorado',
              type: 'defining',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'def-capacidad',
              value: '16 GB',
              type: 'defining',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-a-name',
              value: 'Diseño',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-a-desc',
              value: 'Diseño',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-a-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-b-name',
              value: 'Pantalla',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-b-desc',
              value: 'Pantala',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-b-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-a-name',
              value: 'Diseño',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-a-desc',
              value: 'Diseño',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-a-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-b-name',
              value: 'Cámara',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-b-desc',
              value: 'Cámara',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-c-name',
              value: 'Rendimiento',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-c-desc',
              value: 'Rendimiento',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-c-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-a-name',
              value: 'Qué contiene la caja',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-b-name',
              value: 'Términos y condiciones',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-b-desc',
              value: 'Adaptador AC. Cable USB. Guía de inicio rápido. Audífonos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pantalla',
              value: '5.5 pulgadas',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pila',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-camara',
              value: '13.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-peso',
              value: '168 gramos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-tamano',
              value: '15.4 centímetros',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-renovable',
              value: 'No',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-duracion',
              value: '520 minutos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-espera',
              value: '36000 minutos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-capacidad',
              value: '3000mAh (carga con cable 220 minutos)',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-dimensiones',
              value: '154.3 x 77.1 x 8.45 mm',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-peso',
              value: '168 gramos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-pantalla',
              value: '5.5 Pulgadas',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-memoria',
              value: '16.0 GB',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-memoria-ext',
              value: 'Micro SD hasta 128GB',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-correo-soportado',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sistema-operativo',
              value: 'Android 6.0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sistema-operativo-version',
              value: 'Marshmallow',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-procesador',
              value: '1.2 GHz Octa Core',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sim',
              value: 'Nano USIM',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-videollamada',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-prueba-agua',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-trasera',
              value: '13.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-frontal',
              value: '8.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-flash',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-enfoque',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-hd',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-video',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-musica',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-radio',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-datos',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-banda',
              value: 'LTE',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth-st',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-wifi',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-gps',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-3g4g',
              value: 'NoSi',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-35mm',
              value: '3.5 mm',
              type: 'descriptive',
            },
            ],
            pricing: {
              gtq: {
                list_price: 200.0,
                offer_price: 200.0,
              },
            },
            position: 1.0,
            external_referer: '373022',
            images: [
              '/I02.2598.196/I02.2598.196_1.jpg',
              '/I02.2598.196/I02.2598.196_2.jpg',
              '/I02.2598.196/I02.2598.196_3.jpg',
              '/I02.2598.196/I02.2598.196_4.jpg',
              '/I02.2598.196/I02.2598.196_5.jpg',
              '/I02.2598.196/I02.2598.196_6.jpg',
              '/I02.2598.196/I02.2598.196_7.jpg',
              '/I02.2598.196/I02.2598.196_8.jpg',
            ],
          }],
        },
      },
      {
        part_number: 'I10_0002_020',
        quantity: '1',
        free_gift: false,
        amount: {
          gtq: {
            unit_price: '100',
            total_items: '100',
            total_adjustment: '0',
            adjustment: {},
            sales_tax: '0',
            shipping_charge: '0',
            shipping_tax: '0',
          },
        },
        item_status: {
          status: 'P',
          inventory: 'Available',
          fulfillment: 'Unreleased',
        },
        fulfillment_info: {
          available_date: {
            $date: '2018-09-05T01:04:25.647Z',
          },
          expected_ship_date: {
            $date: '2018-09-05T01:04:25.709Z',
          },
        },
        fulfillment_center: {
          id: '13901',
          name: 'clarogt',
        },
        shipping_info: {
          nickname: 'Envio',
          address_type: 'Shipping',
          external_referer: '532190338897',
          first_name: 'Angel Miguel',
          last_name: 'Sanchez',
          address_line_1: 'La calle shipp 22',
          address_line_2: 'Chiticoy',
          address_line_3: '',
          city: 'Baja Verapaz',
          state_or_province_name: 'Rabinal',
          country: 'GT',
          postal_code: '00000',
          email_1: 'miguel.carmona@edgebound.com',
          email_2: '',
          phone_1: '22112211',
          phone_2: '',
          fax_1: '1234567890123',
          fax_2: '',
          same_shipping_and_billing_address: true,
          custom_info: [{
            key: 'departamentoid',
            value: '2',
          },
          {
            key: 'municipioid',
            value: '3',
          },
          {
            key: 'pobladoid',
            value: '1175',
          },
          ],
        },
        product: {
          part_number: 'I10_0002_020A',
          locales: {
            es_gt: {
              description: 'TARJETA TELF MOVIL Q.10',
              long_description: 'TARJETA TELF MOVIL Q.10',
              name: 'TARJETA TELF MOVIL Q.10',
              seo: {
                title: 'tarjeta-telf-movil-q10',
                name: 'tarjeta-telf-movil-q10',
              },
              categories: [{
                slug: 'prepago/celulares',
              },
              {
                slug: 'prepago',
              },
              ],
            },
          },
          buyable: false,
          available: false,
          attributes: [{
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-chars-mp3',
            value: '0',
            type: 'descriptive',
          }],
          last_update: {
            $date: '2018-08-15T18:17:13.528Z',
          },
          items: [{
            part_number: 'I10_0002_020',
            buyable: true,
            available: false,
            locales: {
              es_gt: {
                description: 'TARJETA TELF MOVIL Q.10',
                long_description: 'TARJETA TELF MOVIL Q.10',
                name: 'TARJETA TELF MOVIL Q.10',
                position: 99.0,
                seo: {
                  title: 'tarjeta-telf-movil-q10',
                  name: 'tarjeta-telf-movil-q10',
                },
              },
            },
            attributes: [{
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-chars-mp3',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pila',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-correo-soportado',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-videollamada',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-prueba-agua',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-flash',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-enfoque',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-hd',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-video',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-musica',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-radio',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-datos',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth-st',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-wifi',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-gps',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-3g4g',
              value: 'NoNo',
              type: 'descriptive',
            },
            ],
            pricing: {
              gtq: {
                list_price: 100.0,
                offer_price: 100.0,
              },
            },
            image_correlator: 'I10.0002.020',
            external_referer: '372502',
            images: [
              '/I10.0002.020/I10.0002.020_1.jpg',
            ],
            position: 99.0,
          }],
          position: 99.0,
        },
      },
      ],
      checkout_date: {
        $date: '2018-12-28T01:12:26.000Z',
      },
      tracking_info: {
        shipments: [
          {
            tracking_url: 'https://www.cargoexpreso.com/tracking/?guia=',
            tracking_code: '1234',
            courier: 'cargoexpreso',
            items: [{
              part_number: 'I10_0002_020',
              quantity: '1',
              free_gift: false,
              amount: {
                gtq: {
                  unit_price: '100',
                  total_items: '100',
                  total_adjustment: '0',
                  adjustment: {},
                  sales_tax: '0',
                  shipping_charge: '0',
                  shipping_tax: '0',
                },
              },
              item_status: {
                status: 'P',
                inventory: 'Available',
                fulfillment: 'Unreleased',
              },
              fulfillment_info: {
                available_date: {
                  $date: '2018-09-05T01:04:25.647Z',
                },
                expected_ship_date: {
                  $date: '2018-09-05T01:04:25.709Z',
                },
              },
              fulfillment_center: {
                id: '13901',
                name: 'clarogt',
              },
              shipping_info: {
                nickname: 'Envio',
                address_type: 'Shipping',
                external_referer: '532190338897',
                first_name: 'Angel Miguel',
                last_name: 'Sanchez',
                address_line_1: 'La calle shipp 22',
                address_line_2: 'Chiticoy',
                address_line_3: '',
                city: 'Baja Verapaz',
                state_or_province_name: 'Rabinal',
                country: 'GT',
                postal_code: '00000',
                email_1: 'miguel.carmona@edgebound.com',
                email_2: '',
                phone_1: '22112211',
                phone_2: '',
                fax_1: '1234567890123',
                fax_2: '',
                same_shipping_and_billing_address: true,
                custom_info: [{
                  key: 'departamentoid',
                  value: '2',
                },
                {
                  key: 'municipioid',
                  value: '3',
                },
                {
                  key: 'pobladoid',
                  value: '1175',
                },
                ],
              },
              product: {
                part_number: 'I10_0002_020A',
                locales: {
                  es_gt: {
                    description: 'TARJETA TELF MOVIL Q.10',
                    long_description: 'TARJETA TELF MOVIL Q.10',
                    name: 'TARJETA TELF MOVIL Q.10',
                    seo: {
                      title: 'tarjeta-telf-movil-q10',
                      name: 'tarjeta-telf-movil-q10',
                    },
                    categories: [{
                      slug: 'prepago/celulares',
                    },
                    {
                      slug: 'prepago',
                    },
                    ],
                  },
                },
                buyable: false,
                available: false,
                attributes: [{
                  _meta: {
                    class: 'Attribute',
                    version: '1',
                  },
                  name: 'filt-chars-mp3',
                  value: '0',
                  type: 'descriptive',
                }],
                last_update: {
                  $date: '2018-08-15T18:17:13.528Z',
                },
                items: [{
                  part_number: 'I10_0002_020',
                  buyable: true,
                  available: false,
                  locales: {
                    es_gt: {
                      description: 'TARJETA TELF MOVIL Q.10',
                      long_description: 'TARJETA TELF MOVIL Q.10',
                      name: 'TARJETA TELF MOVIL Q.10',
                      position: 99.0,
                      seo: {
                        title: 'tarjeta-telf-movil-q10',
                        name: 'tarjeta-telf-movil-q10',
                      },
                    },
                  },
                  attributes: [{
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'filt-chars-mp3',
                    value: '0',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-incluye-pila',
                    value: '0',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-general-correo-soportado',
                    value: '0',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-general-videollamada',
                    value: '0',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-general-prueba-agua',
                    value: '0',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-entretenimiento-flash',
                    value: '0',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-entretenimiento-enfoque',
                    value: '0',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-entretenimiento-camara-hd',
                    value: '0',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-entretenimiento-video',
                    value: '0',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-entretenimiento-musica',
                    value: '0',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-entretenimiento-radio',
                    value: '0',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-conectividad-datos',
                    value: '0',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-conectividad-bluetooth',
                    value: '0',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-conectividad-bluetooth-st',
                    value: '0',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-conectividad-wifi',
                    value: '0',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-conectividad-gps',
                    value: '0',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-conectividad-3g4g',
                    value: 'NoNo',
                    type: 'descriptive',
                  },
                  ],
                  pricing: {
                    gtq: {
                      list_price: 100.0,
                      offer_price: 100.0,
                    },
                  },
                  image_correlator: 'I10.0002.020',
                  external_referer: '372502',
                  images: [
                    '/I10.0002.020/I10.0002.020_1.jpg',
                  ],
                  position: 99.0,
                }],
                position: 99.0,
              },
            }],
          },
          {
            tracking_url: 'https://www.cargoexpreso.com/tracking/?guia=',
            tracking_code: '4567',
            courier: 'cargoexpreso',
            items: [{
              part_number: 'I02_2598_196',
              quantity: '1',
              free_gift: false,
              amount: {
                gtq: {
                  unit_price: '200',
                  total_items: '200',
                  total_adjustment: '0',
                  adjustment: {},
                  sales_tax: '0',
                  shipping_charge: '0',
                  shipping_tax: '0',
                },
              },
              item_status: {
                status: 'P',
                inventory: 'Available',
                fulfillment: 'Unreleased',
              },
              fulfillment_info: {
                available_date: {
                  $date: '2018-09-05T01:04:21.493Z',
                },
                expected_ship_date: {
                  $date: '2018-09-05T01:04:21.522Z',
                },
              },
              fulfillment_center: {
                id: '13901',
                name: 'clarogt',
              },
              shipping_info: {
                nickname: 'Envio',
                address_type: 'Shipping',
                external_referer: '532190338897',
                first_name: 'Angel Miguel',
                last_name: 'Sanchez',
                address_line_1: 'La calle shipp 22',
                address_line_2: 'Chiticoy',
                address_line_3: '',
                city: 'Baja Verapaz',
                state_or_province_name: 'Rabinal',
                country: 'GT',
                postal_code: '00000',
                email_1: 'miguel.carmona@edgebound.com',
                email_2: '',
                phone_1: '22112211',
                phone_2: '',
                fax_1: '1234567890123',
                fax_2: '',
                same_shipping_and_billing_address: true,
                custom_info: [{
                  key: 'departamentoid',
                  value: '2',
                },
                {
                  key: 'municipioid',
                  value: '3',
                },
                {
                  key: 'pobladoid',
                  value: '1175',
                },
                ],
              },
              product: {
                part_number: 'I01_2598_194A',
                buyable: true,
                available: true,
                locales: {
                  es_gt: {
                    description: 'HUAWEI Y6II NEGRO (P)',
                    long_description: 'HUAWEI Y6II NEGRO (P)',
                    name: 'HUAWEI Y6II NEGRO (P)',
                    seo: {
                      title: 'huawei-y6ii-negro-p',
                      name: 'huawei-y6ii-negro-p',
                    },
                    categories: [{
                      slug: 'prepago/celulares',
                    },
                    {
                      slug: 'prepago',
                    },
                    ],
                  },
                },
                attributes: [{
                  _meta: {
                    class: 'Attribute',
                    version: '1',
                  },
                  name: 'filt-marca',
                  value: 'Huawei',
                  type: 'descriptive',
                },
                {
                  _meta: {
                    class: 'Attribute',
                    version: '1',
                  },
                  name: 'filt-color',
                  value: 'Negro',
                  type: 'descriptive',
                },
                {
                  _meta: {
                    class: 'Attribute',
                    version: '1',
                  },
                  name: 'filt-chars-mp3',
                  value: '1',
                  type: 'descriptive',
                },
                ],
                position: 1.0,
                last_update: {
                  $date: '2018-08-15T18:17:13.275Z',
                },
                items: [{
                  part_number: 'I02_2598_196',
                  buyable: true,
                  available: true,
                  image_correlator: 'I02.2598.196',
                  locales: {
                    es_gt: {
                      description: 'HUAWEI Y6II DORADO (P)',
                      long_description: 'HUAWEI Y6II DORADO (P)',
                      name: 'HUAWEI Y6II DORADO (P)',
                      position: 1.0,
                      seo: {
                        title: 'huawei-y6ii-dorado-p',
                        name: 'huawei-y6ii-dorado-p',
                      },
                    },
                  },
                  attributes: [{
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'filt-marca',
                    value: 'Huawei',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'filt-color',
                    value: 'Dorado',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'filt-chars-mp3',
                    value: '0',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'def-color',
                    value: 'Dorado',
                    type: 'defining',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'def-capacidad',
                    value: '16 GB',
                    type: 'defining',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-chars-ext-a-name',
                    value: 'Diseño',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-chars-ext-a-desc',
                    value: 'Diseño',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-chars-ext-a-img',
                    value: '1',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-chars-ext-b-name',
                    value: 'Pantalla',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-chars-ext-b-desc',
                    value: 'Pantala',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-chars-ext-b-img',
                    value: '1',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-chars-ostd-a-name',
                    value: 'Diseño',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-chars-ostd-a-desc',
                    value: 'Diseño',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-chars-ostd-a-img',
                    value: '1',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-chars-ostd-b-name',
                    value: 'Cámara',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-chars-ostd-b-desc',
                    value: 'Cámara',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-chars-ostd-c-name',
                    value: 'Rendimiento',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-chars-ostd-c-desc',
                    value: 'Rendimiento',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-chars-ostd-c-img',
                    value: '1',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-box-a-name',
                    value: 'Qué contiene la caja',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-box-b-name',
                    value: 'Términos y condiciones',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-box-b-desc',
                    value: 'Adaptador AC. Cable USB. Guía de inicio rápido. Audífonos',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-incluye-pantalla',
                    value: '5.5 pulgadas',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-incluye-pila',
                    value: '1',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-resumen-camara',
                    value: '13.0 megapixeles',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-resumen-peso',
                    value: '168 gramos',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-resumen-tamano',
                    value: '15.4 centímetros',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-general-bateria-renovable',
                    value: 'No',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-general-bateria-duracion',
                    value: '520 minutos',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-general-espera',
                    value: '36000 minutos',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-general-bateria-capacidad',
                    value: '3000mAh (carga con cable 220 minutos)',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-general-dimensiones',
                    value: '154.3 x 77.1 x 8.45 mm',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-general-peso',
                    value: '168 gramos',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-general-pantalla',
                    value: '5.5 Pulgadas',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-general-memoria',
                    value: '16.0 GB',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-general-memoria-ext',
                    value: 'Micro SD hasta 128GB',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-general-correo-soportado',
                    value: '1',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-general-sistema-operativo',
                    value: 'Android 6.0',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-general-sistema-operativo-version',
                    value: 'Marshmallow',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-general-procesador',
                    value: '1.2 GHz Octa Core',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-general-sim',
                    value: 'Nano USIM',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-general-videollamada',
                    value: '0',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-general-prueba-agua',
                    value: '0',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-entretenimiento-camara-trasera',
                    value: '13.0 megapixeles',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-entretenimiento-camara-frontal',
                    value: '8.0 megapixeles',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-entretenimiento-flash',
                    value: '1',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-entretenimiento-enfoque',
                    value: '1',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-entretenimiento-camara-hd',
                    value: '1',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-entretenimiento-video',
                    value: '1',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-entretenimiento-musica',
                    value: '1',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-entretenimiento-radio',
                    value: '0',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-conectividad-datos',
                    value: '1',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-conectividad-banda',
                    value: 'LTE',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-conectividad-bluetooth',
                    value: '1',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-conectividad-bluetooth-st',
                    value: '1',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-conectividad-wifi',
                    value: '1',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-conectividad-gps',
                    value: '1',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-conectividad-3g4g',
                    value: 'NoSi',
                    type: 'descriptive',
                  },
                  {
                    _meta: {
                      class: 'Attribute',
                      version: '1',
                    },
                    name: 'attr-techspech-conectividad-35mm',
                    value: '3.5 mm',
                    type: 'descriptive',
                  },
                  ],
                  pricing: {
                    gtq: {
                      list_price: 200.0,
                      offer_price: 200.0,
                    },
                  },
                  position: 1.0,
                  external_referer: '373022',
                  images: [
                    '/I02.2598.196/I02.2598.196_1.jpg',
                    '/I02.2598.196/I02.2598.196_2.jpg',
                    '/I02.2598.196/I02.2598.196_3.jpg',
                    '/I02.2598.196/I02.2598.196_4.jpg',
                    '/I02.2598.196/I02.2598.196_5.jpg',
                    '/I02.2598.196/I02.2598.196_6.jpg',
                    '/I02.2598.196/I02.2598.196_7.jpg',
                    '/I02.2598.196/I02.2598.196_8.jpg',
                  ],
                }],
              },
            }],
          },
        ],
        events: [
          {
            status: 'SHIPPING',
            tracking_code: '1234',
            description: '',
            location: '',
            timestamp: '1534797525',
          },
          {
            status: 'CLOSED',
            tracking_code: '1234',
            description: '',
            location: '',
            timestamp: '1535834325',
          },
        ],
      },
    },
    {
      external_referer: '591428693503',
      status: 'Processing',
      last_update: {
        $date: '2018-09-04T23:40:37.000Z',
      },
      amount: {
        gtq: {
          grand_total: '300',
          total_sales_tax: '0',
          total_shipping_charge: '0',
          total_shipping_tax: '0',
          total_product_price: '300',
          total_adjustment: '0',
          adjustments: [],
        },
      },
      same_shipping_and_billing_address: false,
      billing_info: {
        nickname: 'Facturacion',
        address_type: 'Billing',
        external_referer: '532184606183',
        first_name: 'Saul',
        last_name: 'Ramirez',
        address_line_1: 'La calle 11 fact',
        address_line_2: 'Salama',
        address_line_3: '',
        city: 'Baja Verapaz',
        state_or_province_name: 'Salama',
        country: 'GT',
        postal_code: '00000',
        email_1: 'miguel.carmona@edgebound.com',
        email_2: '',
        phone_1: '22222222',
        phone_2: '',
        fax_1: '',
        fax_2: '',
        same_shipping_and_billing_address: false,
        custom_info: [{
          key: 'departamentoid',
          value: '2',
        },
        {
          key: 'municipioid',
          value: '1',
        },
        {
          key: 'pobladoid',
          value: '1013',
        },
        {
          key: 'nit',
          value: '4444444444',
        },
        ],
      },
      promo_codes: [],
      items: [{
        part_number: 'I02_7032_449',
        quantity: '1',
        free_gift: false,
        amount: {
          gtq: {
            unit_price: '200',
            total_items: '200',
            total_adjustment: '0',
            adjustment: {},
            sales_tax: '0',
            shipping_charge: '0',
            shipping_tax: '0',
          },
        },
        item_status: {
          status: 'P',
          inventory: 'Available',
          fulfillment: 'Unreleased',
        },
        fulfillment_info: {
          available_date: {
            $date: '2018-09-04T23:33:49.203Z',
          },
          expected_ship_date: {
            $date: '2018-09-04T23:36:36.524Z',
          },
        },
        fulfillment_center: {
          id: '13901',
          name: 'clarogt',
        },
        shipping_info: {
          nickname: 'Envio',
          address_type: 'Shipping',
          external_referer: '532183238739',
          first_name: 'Angel Miguel',
          last_name: 'Sanchez',
          address_line_1: 'La calle shipp 22',
          address_line_2: 'Aristondos',
          address_line_3: '',
          city: 'El Progreso',
          state_or_province_name: 'Morazan',
          country: 'GT',
          postal_code: '00000',
          email_1: 'miguel.carmona@edgebound.com',
          email_2: '',
          phone_1: '22222222',
          phone_2: '',
          fax_1: '1234567890123',
          fax_2: '',
          same_shipping_and_billing_address: false,
          custom_info: [{
            key: 'departamentoid',
            value: '5',
          },
          {
            key: 'municipioid',
            value: '2',
          },
          {
            key: 'pobladoid',
            value: '698',
          },
          ],
        },
        product: {
          part_number: 'I01_7032_450A',
          buyable: true,
          available: true,
          locales: {
            es_gt: {
              description: 'SAMSUNG J1 SM-120M DORADO (P)',
              long_description: 'SAMSUNG J1 SM-120M DORADO (P)',
              name: 'SAMSUNG J1 SM-120M DORADO (P)',
              seo: {
                title: 'samsung-j1-sm-120m-dorado-p',
                name: 'samsung-j1-sm-120m-dorado-p',
              },
              categories: [{
                slug: 'prepago/celulares',
              },
              {
                slug: 'prepago',
              },
              ],
            },
          },
          attributes: [{
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-marca',
            value: 'Samsung',
            type: 'descriptive',
          },
          {
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-color',
            value: 'Dorado',
            type: 'descriptive',
          },
          {
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-chars-mp3',
            value: '1',
            type: 'descriptive',
          },
          ],
          position: 1.0,
          last_update: {
            $date: '2018-08-15T18:17:13.015Z',
          },
          items: [{
            part_number: 'I02_7032_449',
            buyable: true,
            available: true,
            image_correlator: 'I02.7032.449',
            locales: {
              es_gt: {
                description: 'SAMSUNG J1 6 SM-120M NEGRO (P)',
                long_description: 'SAMSUNG J1 6 SM-120M NEGRO (P)',
                name: 'SAMSUNG J1 6 SM-120M NEGRO (P)',
                position: 1.0,
                seo: {
                  title: 'samsung-j1-6-sm-120m-negro-p',
                  name: 'samsung-j1-6-sm-120m-negro-p',
                },
              },
            },
            attributes: [{
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-marca',
              value: 'Samsung',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-color',
              value: 'Negro',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-chars-mp3',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'def-color',
              value: 'Negro',
              type: 'defining',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'def-capacidad',
              value: '16 GB',
              type: 'defining',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-a-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-b-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-a-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-c-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-a-name',
              value: 'Qué contiene la caja',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-b-name',
              value: 'Términos y condiciones',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-b-desc',
              value: 'Adaptador AC. Cable USB. Guía de inicio rápido. Audífonos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pantalla',
              value: '4.5 pulgadas',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pila',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-camara',
              value: '5.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-peso',
              value: '122 gramos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-tamano',
              value: '12.9 centímetros',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-renovable',
              value: 'No',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-capacidad',
              value: '1850mAh',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-dimensiones',
              value: '129 x 68.2 x 8.9 mm',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-peso',
              value: '122 gramos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-pantalla',
              value: '4.5 pulgadas',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-memoria',
              value: '8.0 GB',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-memoria-ext',
              value: 'MicroSDHC (SD 2.0) hasta 128GB',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-correo-soportado',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sistema-operativo',
              value: 'Android 5.2',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sistema-operativo-version',
              value: 'Lollipop',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-procesador',
              value: '1.3 GHz Quad Core',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sim',
              value: 'Micro SIM',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-videollamada',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-prueba-agua',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-trasera',
              value: '5.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-frontal',
              value: '2.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-flash',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-enfoque',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-hd',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-video',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-musica',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-radio',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-datos',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-banda',
              value: 'LTE',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth-st',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-wifi',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-gps',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-3g4g',
              value: 'NoSi',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-35mm',
              value: '3.5 mm',
              type: 'descriptive',
            },
            ],
            pricing: {
              gtq: {
                list_price: 200.0,
                offer_price: 200.0,
              },
            },
            position: 1.0,
            external_referer: '373074',
            images: [
              '/I02.7032.449/I02.7032.449_1.jpg',
              '/I02.7032.449/I02.7032.449_3.jpg',
              '/I02.7032.449/I02.7032.449_5.jpg',
            ],
          }],
        },
      },
      {
        part_number: 'I10_0002_020',
        quantity: '1',
        free_gift: false,
        amount: {
          gtq: {
            unit_price: '100',
            total_items: '100',
            total_adjustment: '0',
            adjustment: {},
            sales_tax: '0',
            shipping_charge: '0',
            shipping_tax: '0',
          },
        },
        item_status: {
          status: 'P',
          inventory: 'Available',
          fulfillment: 'Unreleased',
        },
        fulfillment_info: {
          available_date: {
            $date: '2018-09-04T23:36:42.245Z',
          },
          expected_ship_date: {
            $date: '2018-09-04T23:36:42.281Z',
          },
        },
        fulfillment_center: {
          id: '13901',
          name: 'clarogt',
        },
        shipping_info: {
          nickname: 'Envio',
          address_type: 'Shipping',
          external_referer: '532183238739',
          first_name: 'Angel Miguel',
          last_name: 'Sanchez',
          address_line_1: 'La calle shipp 22',
          address_line_2: 'Aristondos',
          address_line_3: '',
          city: 'El Progreso',
          state_or_province_name: 'Morazan',
          country: 'GT',
          postal_code: '00000',
          email_1: 'miguel.carmona@edgebound.com',
          email_2: '',
          phone_1: '22222222',
          phone_2: '',
          fax_1: '1234567890123',
          fax_2: '',
          same_shipping_and_billing_address: false,
          custom_info: [{
            key: 'departamentoid',
            value: '5',
          },
          {
            key: 'municipioid',
            value: '2',
          },
          {
            key: 'pobladoid',
            value: '698',
          },
          ],
        },
        product: {
          part_number: 'I10_0002_020A',
          locales: {
            es_gt: {
              description: 'TARJETA TELF MOVIL Q.10',
              long_description: 'TARJETA TELF MOVIL Q.10',
              name: 'TARJETA TELF MOVIL Q.10',
              seo: {
                title: 'tarjeta-telf-movil-q10',
                name: 'tarjeta-telf-movil-q10',
              },
              categories: [{
                slug: 'prepago/celulares',
              },
              {
                slug: 'prepago',
              },
              ],
            },
          },
          buyable: false,
          available: false,
          attributes: [{
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-chars-mp3',
            value: '0',
            type: 'descriptive',
          }],
          last_update: {
            $date: '2018-08-15T18:17:13.528Z',
          },
          items: [{
            part_number: 'I10_0002_020',
            buyable: true,
            available: false,
            locales: {
              es_gt: {
                description: 'TARJETA TELF MOVIL Q.10',
                long_description: 'TARJETA TELF MOVIL Q.10',
                name: 'TARJETA TELF MOVIL Q.10',
                position: 99.0,
                seo: {
                  title: 'tarjeta-telf-movil-q10',
                  name: 'tarjeta-telf-movil-q10',
                },
              },
            },
            attributes: [{
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-chars-mp3',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pila',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-correo-soportado',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-videollamada',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-prueba-agua',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-flash',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-enfoque',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-hd',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-video',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-musica',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-radio',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-datos',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth-st',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-wifi',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-gps',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-3g4g',
              value: 'NoNo',
              type: 'descriptive',
            },
            ],
            pricing: {
              gtq: {
                list_price: 100.0,
                offer_price: 100.0,
              },
            },
            image_correlator: 'I10.0002.020',
            external_referer: '372502',
            images: [
              '/I10.0002.020/I10.0002.020_1.jpg',
            ],
            position: 99.0,
          }],
          position: 99.0,
        },
      },
      ],
      checkout_date: {
        $date: '2018-09-04T23:40:37.000Z',
      },
      tracking_info: {
        shipments: [
          {
            tracking_url: 'https://www.cargoexpreso.com/tracking/?guia=',
            tracking_code: '1234',
            courier: 'cargoexpreso',
            items: 'List<Item>',
          },
          {
            tracking_url: 'https://www.cargoexpreso.com/tracking/?guia=',
            tracking_code: '4567',
            courier: 'cargoexpreso',
            items: 'List<Item>',
          },
        ],
        events: [
          {
            status: 'PROCESS',
            tracking_code: '1234',
            description: '',
            location: '',
            timestamp: '1534262545',
          },
          {
            status: 'SHIPPING',
            tracking_code: '4567',
            description: '',
            location: '',
            timestamp: '1534262545',
          },
          {
            status: 'DELIVERED',
            tracking_code: '4567',
            description: '',
            location: '',
            timestamp: '1534462545',
          },
        ],
      },
    },
    {
      external_referer: '591420553534',
      status: 'Processing',
      last_update: {
        $date: '2018-08-04T21:03:40.000Z',
      },
      amount: {
        gtq: {
          grand_total: '300',
          total_sales_tax: '0',
          total_shipping_charge: '0',
          total_shipping_tax: '0',
          total_product_price: '300',
          total_adjustment: '0',
          adjustments: [],
        },
      },
      same_shipping_and_billing_address: false,
      billing_info: {
        nickname: 'Facturacion',
        address_type: 'Billing',
        external_referer: '532178839063',
        first_name: 'Alfredo',
        last_name: 'Sanchez',
        address_line_1: 'La calle 33 fact',
        address_line_2: 'Aristondos',
        address_line_3: '',
        city: 'El Progreso',
        state_or_province_name: 'Morazan',
        country: 'GT',
        postal_code: '00000',
        email_1: 'miguel.carmona@edgebound.com',
        email_2: '',
        phone_1: '66666666',
        phone_2: '',
        fax_1: '',
        fax_2: '',
        same_shipping_and_billing_address: false,
        custom_info: [{
          key: 'departamentoid',
          value: '5',
        },
        {
          key: 'municipioid',
          value: '2',
        },
        {
          key: 'pobladoid',
          value: '698',
        },
        {
          key: 'nit',
          value: '3333333333',
        },
        ],
      },
      promo_codes: [],
      items: [{
        part_number: 'I02_7032_449',
        quantity: '1',
        free_gift: false,
        amount: {
          gtq: {
            unit_price: '200',
            total_items: '200',
            total_adjustment: '0',
            adjustment: {},
            sales_tax: '0',
            shipping_charge: '0',
            shipping_tax: '0',
          },
        },
        item_status: {
          status: 'P',
          inventory: 'Available',
          fulfillment: 'Unreleased',
        },
        fulfillment_info: {
          available_date: {
            $date: '2018-09-04T20:55:19.258Z',
          },
          expected_ship_date: {
            $date: '2018-09-04T20:58:17.298Z',
          },
        },
        fulfillment_center: {
          id: '13901',
          name: 'clarogt',
        },
        shipping_info: {
          nickname: 'Envio',
          address_type: 'Shipping',
          external_referer: '532177801585',
          first_name: 'Angel Miguel',
          last_name: 'Arreola',
          address_line_1: 'La calle shipp 22',
          address_line_2: 'San Gabriel Pansuj',
          address_line_3: '',
          city: 'Baja Verapaz',
          state_or_province_name: 'San Miguel Chicaj',
          country: 'GT',
          postal_code: '00000',
          email_1: 'miguel.carmona@edgebound.com',
          email_2: '',
          phone_1: '22222222',
          phone_2: '',
          fax_1: '1234567890123',
          fax_2: '',
          same_shipping_and_billing_address: false,
          custom_info: [{
            key: 'departamentoid',
            value: '2',
          },
          {
            key: 'municipioid',
            value: '2',
          },
          {
            key: 'pobladoid',
            value: '1014',
          },
          ],
        },
        product: {
          part_number: 'I01_7032_450A',
          buyable: true,
          available: true,
          locales: {
            es_gt: {
              description: 'SAMSUNG J1 SM-120M DORADO (P)',
              long_description: 'SAMSUNG J1 SM-120M DORADO (P)',
              name: 'SAMSUNG J1 SM-120M DORADO (P)',
              seo: {
                title: 'samsung-j1-sm-120m-dorado-p',
                name: 'samsung-j1-sm-120m-dorado-p',
              },
              categories: [{
                slug: 'prepago/celulares',
              },
              {
                slug: 'prepago',
              },
              ],
            },
          },
          attributes: [{
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-marca',
            value: 'Samsung',
            type: 'descriptive',
          },
          {
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-color',
            value: 'Dorado',
            type: 'descriptive',
          },
          {
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-chars-mp3',
            value: '1',
            type: 'descriptive',
          },
          ],
          position: 1.0,
          last_update: {
            $date: '2018-08-15T18:17:13.015Z',
          },
          items: [{
            part_number: 'I02_7032_449',
            buyable: true,
            available: true,
            image_correlator: 'I02.7032.449',
            locales: {
              es_gt: {
                description: 'SAMSUNG J1 6 SM-120M NEGRO (P)',
                long_description: 'SAMSUNG J1 6 SM-120M NEGRO (P)',
                name: 'SAMSUNG J1 6 SM-120M NEGRO (P)',
                position: 1.0,
                seo: {
                  title: 'samsung-j1-6-sm-120m-negro-p',
                  name: 'samsung-j1-6-sm-120m-negro-p',
                },
              },
            },
            attributes: [{
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-marca',
              value: 'Samsung',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-color',
              value: 'Negro',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-chars-mp3',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'def-color',
              value: 'Negro',
              type: 'defining',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'def-capacidad',
              value: '16 GB',
              type: 'defining',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-a-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-b-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-a-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-c-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-a-name',
              value: 'Qué contiene la caja',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-b-name',
              value: 'Términos y condiciones',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-b-desc',
              value: 'Adaptador AC. Cable USB. Guía de inicio rápido. Audífonos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pantalla',
              value: '4.5 pulgadas',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pila',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-camara',
              value: '5.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-peso',
              value: '122 gramos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-tamano',
              value: '12.9 centímetros',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-renovable',
              value: 'No',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-capacidad',
              value: '1850mAh',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-dimensiones',
              value: '129 x 68.2 x 8.9 mm',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-peso',
              value: '122 gramos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-pantalla',
              value: '4.5 pulgadas',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-memoria',
              value: '8.0 GB',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-memoria-ext',
              value: 'MicroSDHC (SD 2.0) hasta 128GB',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-correo-soportado',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sistema-operativo',
              value: 'Android 5.2',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sistema-operativo-version',
              value: 'Lollipop',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-procesador',
              value: '1.3 GHz Quad Core',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sim',
              value: 'Micro SIM',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-videollamada',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-prueba-agua',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-trasera',
              value: '5.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-frontal',
              value: '2.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-flash',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-enfoque',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-hd',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-video',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-musica',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-radio',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-datos',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-banda',
              value: 'LTE',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth-st',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-wifi',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-gps',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-3g4g',
              value: 'NoSi',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-35mm',
              value: '3.5 mm',
              type: 'descriptive',
            },
            ],
            pricing: {
              gtq: {
                list_price: 200.0,
                offer_price: 200.0,
              },
            },
            position: 1.0,
            external_referer: '373074',
            images: [
              '/I02.7032.449/I02.7032.449_1.jpg',
              '/I02.7032.449/I02.7032.449_3.jpg',
              '/I02.7032.449/I02.7032.449_5.jpg',
            ],
          }],
        },
      },
      {
        part_number: 'I10_0002_020',
        quantity: '1',
        free_gift: false,
        amount: {
          gtq: {
            unit_price: '100',
            total_items: '100',
            total_adjustment: '0',
            adjustment: {},
            sales_tax: '0',
            shipping_charge: '0',
            shipping_tax: '0',
          },
        },
        item_status: {
          status: 'P',
          inventory: 'Available',
          fulfillment: 'Unreleased',
        },
        fulfillment_info: {
          available_date: {
            $date: '2018-09-04T20:58:27.748Z',
          },
          expected_ship_date: {
            $date: '2018-09-04T20:58:27.796Z',
          },
        },
        fulfillment_center: {
          id: '13901',
          name: 'clarogt',
        },
        shipping_info: {
          nickname: 'Envio',
          address_type: 'Shipping',
          external_referer: '532177801585',
          first_name: 'Angel Miguel',
          last_name: 'Arreola',
          address_line_1: 'La calle shipp 22',
          address_line_2: 'San Gabriel Pansuj',
          address_line_3: '',
          city: 'Baja Verapaz',
          state_or_province_name: 'San Miguel Chicaj',
          country: 'GT',
          postal_code: '00000',
          email_1: 'miguel.carmona@edgebound.com',
          email_2: '',
          phone_1: '22222222',
          phone_2: '',
          fax_1: '1234567890123',
          fax_2: '',
          same_shipping_and_billing_address: false,
          custom_info: [{
            key: 'departamentoid',
            value: '2',
          },
          {
            key: 'municipioid',
            value: '2',
          },
          {
            key: 'pobladoid',
            value: '1014',
          },
          ],
        },
        product: {
          part_number: 'I10_0002_020A',
          locales: {
            es_gt: {
              description: 'TARJETA TELF MOVIL Q.10',
              long_description: 'TARJETA TELF MOVIL Q.10',
              name: 'TARJETA TELF MOVIL Q.10',
              seo: {
                title: 'tarjeta-telf-movil-q10',
                name: 'tarjeta-telf-movil-q10',
              },
              categories: [{
                slug: 'prepago/celulares',
              },
              {
                slug: 'prepago',
              },
              ],
            },
          },
          buyable: false,
          available: false,
          attributes: [{
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-chars-mp3',
            value: '0',
            type: 'descriptive',
          }],
          last_update: {
            $date: '2018-08-15T18:17:13.528Z',
          },
          items: [{
            part_number: 'I10_0002_020',
            buyable: true,
            available: false,
            locales: {
              es_gt: {
                description: 'TARJETA TELF MOVIL Q.10',
                long_description: 'TARJETA TELF MOVIL Q.10',
                name: 'TARJETA TELF MOVIL Q.10',
                position: 99.0,
                seo: {
                  title: 'tarjeta-telf-movil-q10',
                  name: 'tarjeta-telf-movil-q10',
                },
              },
            },
            attributes: [{
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-chars-mp3',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pila',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-correo-soportado',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-videollamada',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-prueba-agua',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-flash',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-enfoque',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-hd',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-video',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-musica',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-radio',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-datos',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth-st',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-wifi',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-gps',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-3g4g',
              value: 'NoNo',
              type: 'descriptive',
            },
            ],
            pricing: {
              gtq: {
                list_price: 100.0,
                offer_price: 100.0,
              },
            },
            image_correlator: 'I10.0002.020',
            external_referer: '372502',
            images: [
              '/I10.0002.020/I10.0002.020_1.jpg',
            ],
            position: 99.0,
          }],
          position: 99.0,
        },
      },
      ],
      checkout_date: {
        $date: '2018-08-04T21:03:40.000Z',
      },
      tracking_info: {
        shipments: [
          {
            tracking_url: 'https://www.cargoexpreso.com/tracking/?guia=',
            tracking_code: '1234',
            courier: 'cargoexpreso',
            items: 'List<Item>',
          },
          {
            tracking_url: 'https://www.cargoexpreso.com/tracking/?guia=',
            tracking_code: '4567',
            courier: 'cargoexpreso',
            items: 'List<Item>',
          },
        ],
        events: [
          {
            status: 'PENDING',
            tracking_code: '1234',
            description: '',
            location: '',
            timestamp: '1531262545',
          },
          {
            status: 'PROCESS',
            tracking_code: '4567',
            description: '',
            location: '',
            timestamp: '1532262545',
          },
          {
            status: 'SHIPPING',
            tracking_code: '4567',
            description: '',
            location: '',
            timestamp: '1534262545',
          },
          {
            status: 'SHIPPING',
            tracking_code: '4567',
            description: '',
            location: '',
            timestamp: '1534462545',
          },
        ],
      },
    },
    {
      external_referer: '589329383502',
      status: 'Processing',
      last_update: {
        $date: '2018-08-31T18:16:15.000Z',
      },
      amount: {
        gtq: {
          grand_total: '300',
          total_sales_tax: '0',
          total_shipping_charge: '0',
          total_shipping_tax: '0',
          total_product_price: '300',
          total_adjustment: '0',
          adjustments: [],
        },
      },
      same_shipping_and_billing_address: false,
      billing_info: {
        nickname: 'Facturacion',
        address_type: 'Billing',
        external_referer: '531116817065',
        first_name: 'Angel Miguel',
        last_name: 'EBT',
        address_line_1: 'La Calle 33',
        address_line_2: 'Agroxintun',
        address_line_3: '',
        city: 'Alta Verapaz',
        state_or_province_name: 'Tamahu',
        country: 'GT',
        postal_code: '00000',
        email_1: 'miguel.carmona@edgebound.com',
        email_2: '',
        phone_1: '88888888',
        phone_2: '',
        fax_1: '1234567890123',
        fax_2: '',
        same_shipping_and_billing_address: true,
        custom_info: [],
      },
      promo_codes: [],
      items: [{
        part_number: 'I02_7032_449',
        quantity: '1',
        free_gift: false,
        amount: {
          gtq: {
            unit_price: '200',
            total_items: '200',
            total_adjustment: '0',
            adjustment: {},
            sales_tax: '0',
            shipping_charge: '0',
            shipping_tax: '0',
          },
        },
        item_status: {
          status: 'P',
          inventory: 'Available',
          fulfillment: 'Unreleased',
        },
        fulfillment_info: {
          available_date: {
            $date: '2018-08-31T18:12:20.839Z',
          },
          expected_ship_date: {
            $date: '2018-08-31T18:13:05.770Z',
          },
        },
        fulfillment_center: {
          id: '13901',
          name: 'clarogt',
        },
        shipping_info: {
          nickname: 'Envio',
          address_type: 'Shipping',
          external_referer: '531115829436',
          first_name: 'Angel Miguel',
          last_name: 'EBT',
          address_line_1: 'La Calle 33',
          address_line_2: 'Agroxintun',
          address_line_3: '',
          city: 'Alta Verapaz',
          state_or_province_name: 'Tamahu',
          country: 'GT',
          postal_code: '00000',
          email_1: 'miguel.carmona@edgebound.com',
          email_2: '',
          phone_1: '88888888',
          phone_2: '',
          fax_1: '1234567890123',
          fax_2: '',
          same_shipping_and_billing_address: true,
          custom_info: [{
            key: 'allowed_recipient_1',
            value: 'Salvador Calles',
          },
          {
            key: 'allowed_recipient_2',
            value: 'Dante Aligeri',
          },
          {
            key: 'referral_address',
            value: 'Edificio rojo',
          },
          {
            key: 'departamentoid',
            value: '1',
          },
          {
            key: 'municipioid',
            value: '5',
          },
          {
            key: 'pobladoid',
            value: '1145',
          },
          ],
        },
        product: {
          part_number: 'I01_7032_450A',
          buyable: true,
          available: true,
          locales: {
            es_gt: {
              description: 'SAMSUNG J1 SM-120M DORADO (P)',
              long_description: 'SAMSUNG J1 SM-120M DORADO (P)',
              name: 'SAMSUNG J1 SM-120M DORADO (P)',
              seo: {
                title: 'samsung-j1-sm-120m-dorado-p',
                name: 'samsung-j1-sm-120m-dorado-p',
              },
              categories: [{
                slug: 'prepago/celulares',
              },
              {
                slug: 'prepago',
              },
              ],
            },
          },
          attributes: [{
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-marca',
            value: 'Samsung',
            type: 'descriptive',
          },
          {
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-color',
            value: 'Dorado',
            type: 'descriptive',
          },
          {
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-chars-mp3',
            value: '1',
            type: 'descriptive',
          },
          ],
          position: 1.0,
          last_update: {
            $date: '2018-08-15T18:17:13.015Z',
          },
          items: [{
            part_number: 'I02_7032_449',
            buyable: true,
            available: true,
            image_correlator: 'I02.7032.449',
            locales: {
              es_gt: {
                description: 'SAMSUNG J1 6 SM-120M NEGRO (P)',
                long_description: 'SAMSUNG J1 6 SM-120M NEGRO (P)',
                name: 'SAMSUNG J1 6 SM-120M NEGRO (P)',
                position: 1.0,
                seo: {
                  title: 'samsung-j1-6-sm-120m-negro-p',
                  name: 'samsung-j1-6-sm-120m-negro-p',
                },
              },
            },
            attributes: [{
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-marca',
              value: 'Samsung',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-color',
              value: 'Negro',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-chars-mp3',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'def-color',
              value: 'Negro',
              type: 'defining',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'def-capacidad',
              value: '16 GB',
              type: 'defining',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-a-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-b-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-a-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-c-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-a-name',
              value: 'Qué contiene la caja',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-b-name',
              value: 'Términos y condiciones',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-b-desc',
              value: 'Adaptador AC. Cable USB. Guía de inicio rápido. Audífonos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pantalla',
              value: '4.5 pulgadas',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pila',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-camara',
              value: '5.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-peso',
              value: '122 gramos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-tamano',
              value: '12.9 centímetros',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-renovable',
              value: 'No',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-capacidad',
              value: '1850mAh',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-dimensiones',
              value: '129 x 68.2 x 8.9 mm',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-peso',
              value: '122 gramos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-pantalla',
              value: '4.5 pulgadas',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-memoria',
              value: '8.0 GB',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-memoria-ext',
              value: 'MicroSDHC (SD 2.0) hasta 128GB',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-correo-soportado',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sistema-operativo',
              value: 'Android 5.2',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sistema-operativo-version',
              value: 'Lollipop',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-procesador',
              value: '1.3 GHz Quad Core',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sim',
              value: 'Micro SIM',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-videollamada',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-prueba-agua',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-trasera',
              value: '5.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-frontal',
              value: '2.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-flash',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-enfoque',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-hd',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-video',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-musica',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-radio',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-datos',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-banda',
              value: 'LTE',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth-st',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-wifi',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-gps',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-3g4g',
              value: 'NoSi',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-35mm',
              value: '3.5 mm',
              type: 'descriptive',
            },
            ],
            pricing: {
              gtq: {
                list_price: 200.0,
                offer_price: 200.0,
              },
            },
            position: 1.0,
            external_referer: '373074',
            images: [
              '/I02.7032.449/I02.7032.449_1.jpg',
              '/I02.7032.449/I02.7032.449_3.jpg',
              '/I02.7032.449/I02.7032.449_5.jpg',
            ],
          }],
        },
      },
      {
        part_number: 'I10_0002_020',
        quantity: '1',
        free_gift: false,
        amount: {
          gtq: {
            unit_price: '100',
            total_items: '100',
            total_adjustment: '0',
            adjustment: {},
            sales_tax: '0',
            shipping_charge: '0',
            shipping_tax: '0',
          },
        },
        item_status: {
          status: 'P',
          inventory: 'Available',
          fulfillment: 'Unreleased',
        },
        fulfillment_info: {
          available_date: {
            $date: '2018-08-31T18:13:27.870Z',
          },
          expected_ship_date: {
            $date: '2018-08-31T18:13:27.913Z',
          },
        },
        fulfillment_center: {
          id: '13901',
          name: 'clarogt',
        },
        shipping_info: {
          nickname: 'Envio',
          address_type: 'Shipping',
          external_referer: '531115829436',
          first_name: 'Angel Miguel',
          last_name: 'EBT',
          address_line_1: 'La Calle 33',
          address_line_2: 'Agroxintun',
          address_line_3: '',
          city: 'Alta Verapaz',
          state_or_province_name: 'Tamahu',
          country: 'GT',
          postal_code: '00000',
          email_1: 'miguel.carmona@edgebound.com',
          email_2: '',
          phone_1: '88888888',
          phone_2: '',
          fax_1: '1234567890123',
          fax_2: '',
          same_shipping_and_billing_address: true,
          custom_info: [{
            key: 'allowed_recipient_1',
            value: 'Salvador Calles',
          },
          {
            key: 'allowed_recipient_2',
            value: 'Dante Aligeri',
          },
          {
            key: 'referral_address',
            value: 'Edificio rojo',
          },
          {
            key: 'departamentoid',
            value: '1',
          },
          {
            key: 'municipioid',
            value: '5',
          },
          {
            key: 'pobladoid',
            value: '1145',
          },
          ],
        },
        product: {
          part_number: 'I10_0002_020A',
          locales: {
            es_gt: {
              description: 'TARJETA TELF MOVIL Q.10',
              long_description: 'TARJETA TELF MOVIL Q.10',
              name: 'TARJETA TELF MOVIL Q.10',
              seo: {
                title: 'tarjeta-telf-movil-q10',
                name: 'tarjeta-telf-movil-q10',
              },
              categories: [{
                slug: 'prepago/celulares',
              },
              {
                slug: 'prepago',
              },
              ],
            },
          },
          buyable: false,
          available: false,
          attributes: [{
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-chars-mp3',
            value: '0',
            type: 'descriptive',
          }],
          last_update: {
            $date: '2018-08-15T18:17:13.528Z',
          },
          items: [{
            part_number: 'I10_0002_020',
            buyable: true,
            available: false,
            locales: {
              es_gt: {
                description: 'TARJETA TELF MOVIL Q.10',
                long_description: 'TARJETA TELF MOVIL Q.10',
                name: 'TARJETA TELF MOVIL Q.10',
                position: 99.0,
                seo: {
                  title: 'tarjeta-telf-movil-q10',
                  name: 'tarjeta-telf-movil-q10',
                },
              },
            },
            attributes: [{
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-chars-mp3',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pila',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-correo-soportado',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-videollamada',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-prueba-agua',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-flash',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-enfoque',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-hd',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-video',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-musica',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-radio',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-datos',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth-st',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-wifi',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-gps',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-3g4g',
              value: 'NoNo',
              type: 'descriptive',
            },
            ],
            pricing: {
              gtq: {
                list_price: 100.0,
                offer_price: 100.0,
              },
            },
            image_correlator: 'I10.0002.020',
            external_referer: '372502',
            images: [
              '/I10.0002.020/I10.0002.020_1.jpg',
            ],
            position: 99.0,
          }],
          position: 99.0,
        },
      },
      ],
      checkout_date: {
        $date: '2018-08-31T18:16:15.000Z',
      },
      tracking_info: {
        shipments: [
          {
            tracking_url: 'https://www.cargoexpreso.com/tracking/?guia=',
            tracking_code: '1234',
            courier: 'cargoexpreso',
            items: 'List<Item>',
          },
          {
            tracking_url: 'https://www.cargoexpreso.com/tracking/?guia=',
            tracking_code: '4567',
            courier: 'cargoexpreso',
            items: 'List<Item>',
          },
        ],
        events: [
          {
            status: 'PENDING',
            tracking_code: '1234',
            description: '',
            location: '',
            timestamp: '1534262545',
          },
          {
            status: 'PENDING',
            tracking_code: '4567',
            description: '',
            location: '',
            timestamp: '1534262545',
          },
          {
            status: 'SHIPPING',
            tracking_code: '4567',
            description: '',
            location: '',
            timestamp: '1534262545',
          },
          {
            status: 'SHIPPING',
            tracking_code: '1234',
            description: '',
            location: '',
            timestamp: '1534262545',
          },
          {
            status: 'DELIVERED',
            tracking_code: '4567',
            description: '',
            location: '',
            timestamp: '1534462545',
          },
          {
            status: 'DELIVERED',
            tracking_code: '1234',
            description: '',
            location: '',
            timestamp: '1534462545',
          },
        ],
      },
    },
    {
      external_referer: '589328583326',
      status: 'Processing',
      last_update: {
        $date: '2018-08-20T15:41:43.000Z',
      },
      amount: {
        gtq: {
          grand_total: '300',
          total_sales_tax: '0',
          total_shipping_charge: '0',
          total_shipping_tax: '0',
          total_product_price: '300',
          total_adjustment: '0',
          adjustments: [],
        },
      },
      same_shipping_and_billing_address: false,
      billing_info: {
        nickname: 'Facturacion',
        address_type: 'Billing',
        external_referer: '531112842153',
        first_name: 'TEST',
        last_name: 'CRED',
        address_line_1: 'La calle 11 fact',
        address_line_2: 'Aguacatan',
        address_line_3: '',
        city: 'Huehuetenango',
        state_or_province_name: 'Aguacatan',
        country: 'GT',
        postal_code: '00000',
        email_1: 'miguel.carmona@edgebound.com',
        email_2: '',
        phone_1: '88888888',
        phone_2: '',
        fax_1: '',
        fax_2: '',
        same_shipping_and_billing_address: false,
        custom_info: [{
          key: 'departamentoid',
          value: '8',
        },
        {
          key: 'municipioid',
          value: '2',
        },
        {
          key: 'pobladoid',
          value: '2657',
        },
        ],
      },
      promo_codes: [],
      items: [{
        part_number: 'I02_7032_449',
        quantity: '1',
        free_gift: false,
        amount: {
          gtq: {
            unit_price: '200',
            total_items: '200',
            total_adjustment: '0',
            adjustment: {},
            sales_tax: '0',
            shipping_charge: '0',
            shipping_tax: '0',
          },
        },
        item_status: {
          status: 'P',
          inventory: 'Available',
          fulfillment: 'Unreleased',
        },
        fulfillment_info: {
          available_date: {
            $date: '2018-08-31T15:37:19.385Z',
          },
          expected_ship_date: {
            $date: '2018-08-31T15:37:44.423Z',
          },
        },
        fulfillment_center: {
          id: '13901',
          name: 'clarogt',
        },
        shipping_info: {
          nickname: 'Envio',
          address_type: 'Shipping',
          external_referer: '531111755865',
          first_name: 'Test EB',
          last_name: 'QA',
          address_line_1: 'La Calle 33 shipp',
          address_line_2: 'Agencia Caex Guastatoya',
          address_line_3: '',
          city: 'El Progreso',
          state_or_province_name: 'Guastatoya',
          country: 'GT',
          postal_code: '00000',
          email_1: 'miguel.carmona@edgebound.com',
          email_2: '',
          phone_1: '33333333',
          phone_2: '',
          fax_1: '1234567890123',
          fax_2: '',
          same_shipping_and_billing_address: false,
          custom_info: [{
            key: 'allowed_recipient_1',
            value: 'Arturo Serda',
          },
          {
            key: 'allowed_recipient_2',
            value: 'Dante Aligeri',
          },
          {
            key: 'referral_address',
            value: 'Edificio azul',
          },
          {
            key: 'departamentoid',
            value: '5',
          },
          {
            key: 'municipioid',
            value: '1',
          },
          {
            key: 'pobladoid',
            value: '1268',
          },
          ],
        },
        product: {
          part_number: 'I01_7032_450A',
          buyable: true,
          available: true,
          locales: {
            es_gt: {
              description: 'SAMSUNG J1 SM-120M DORADO (P)',
              long_description: 'SAMSUNG J1 SM-120M DORADO (P)',
              name: 'SAMSUNG J1 SM-120M DORADO (P)',
              seo: {
                title: 'samsung-j1-sm-120m-dorado-p',
                name: 'samsung-j1-sm-120m-dorado-p',
              },
              categories: [{
                slug: 'prepago/celulares',
              },
              {
                slug: 'prepago',
              },
              ],
            },
          },
          attributes: [{
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-marca',
            value: 'Samsung',
            type: 'descriptive',
          },
          {
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-color',
            value: 'Dorado',
            type: 'descriptive',
          },
          {
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-chars-mp3',
            value: '1',
            type: 'descriptive',
          },
          ],
          position: 1.0,
          last_update: {
            $date: '2018-08-15T18:17:13.015Z',
          },
          items: [{
            part_number: 'I02_7032_449',
            buyable: true,
            available: true,
            image_correlator: 'I02.7032.449',
            locales: {
              es_gt: {
                description: 'SAMSUNG J1 6 SM-120M NEGRO (P)',
                long_description: 'SAMSUNG J1 6 SM-120M NEGRO (P)',
                name: 'SAMSUNG J1 6 SM-120M NEGRO (P)',
                position: 1.0,
                seo: {
                  title: 'samsung-j1-6-sm-120m-negro-p',
                  name: 'samsung-j1-6-sm-120m-negro-p',
                },
              },
            },
            attributes: [{
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-marca',
              value: 'Samsung',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-color',
              value: 'Negro',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-chars-mp3',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'def-color',
              value: 'Negro',
              type: 'defining',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'def-capacidad',
              value: '16 GB',
              type: 'defining',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-a-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-b-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-a-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-c-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-a-name',
              value: 'Qué contiene la caja',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-b-name',
              value: 'Términos y condiciones',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-b-desc',
              value: 'Adaptador AC. Cable USB. Guía de inicio rápido. Audífonos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pantalla',
              value: '4.5 pulgadas',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pila',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-camara',
              value: '5.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-peso',
              value: '122 gramos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-tamano',
              value: '12.9 centímetros',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-renovable',
              value: 'No',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-capacidad',
              value: '1850mAh',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-dimensiones',
              value: '129 x 68.2 x 8.9 mm',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-peso',
              value: '122 gramos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-pantalla',
              value: '4.5 pulgadas',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-memoria',
              value: '8.0 GB',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-memoria-ext',
              value: 'MicroSDHC (SD 2.0) hasta 128GB',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-correo-soportado',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sistema-operativo',
              value: 'Android 5.2',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sistema-operativo-version',
              value: 'Lollipop',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-procesador',
              value: '1.3 GHz Quad Core',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sim',
              value: 'Micro SIM',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-videollamada',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-prueba-agua',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-trasera',
              value: '5.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-frontal',
              value: '2.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-flash',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-enfoque',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-hd',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-video',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-musica',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-radio',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-datos',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-banda',
              value: 'LTE',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth-st',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-wifi',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-gps',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-3g4g',
              value: 'NoSi',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-35mm',
              value: '3.5 mm',
              type: 'descriptive',
            },
            ],
            pricing: {
              gtq: {
                list_price: 200.0,
                offer_price: 200.0,
              },
            },
            position: 1.0,
            external_referer: '373074',
            images: [
              '/I02.7032.449/I02.7032.449_1.jpg',
              '/I02.7032.449/I02.7032.449_3.jpg',
              '/I02.7032.449/I02.7032.449_5.jpg',
            ],
          }],
        },
      },
      {
        part_number: 'I10_0002_020',
        quantity: '1',
        free_gift: false,
        amount: {
          gtq: {
            unit_price: '100',
            total_items: '100',
            total_adjustment: '0',
            adjustment: {},
            sales_tax: '0',
            shipping_charge: '0',
            shipping_tax: '0',
          },
        },
        item_status: {
          status: 'P',
          inventory: 'Available',
          fulfillment: 'Unreleased',
        },
        fulfillment_info: {
          available_date: {
            $date: '2018-08-31T15:37:52.282Z',
          },
          expected_ship_date: {
            $date: '2018-08-31T15:37:52.314Z',
          },
        },
        fulfillment_center: {
          id: '13901',
          name: 'clarogt',
        },
        shipping_info: {
          nickname: 'Envio',
          address_type: 'Shipping',
          external_referer: '531111755865',
          first_name: 'Test EB',
          last_name: 'QA',
          address_line_1: 'La Calle 33 shipp',
          address_line_2: 'Agencia Caex Guastatoya',
          address_line_3: '',
          city: 'El Progreso',
          state_or_province_name: 'Guastatoya',
          country: 'GT',
          postal_code: '00000',
          email_1: 'miguel.carmona@edgebound.com',
          email_2: '',
          phone_1: '33333333',
          phone_2: '',
          fax_1: '1234567890123',
          fax_2: '',
          same_shipping_and_billing_address: false,
          custom_info: [{
            key: 'allowed_recipient_1',
            value: 'Arturo Serda',
          },
          {
            key: 'allowed_recipient_2',
            value: 'Dante Aligeri',
          },
          {
            key: 'referral_address',
            value: 'Edificio azul',
          },
          {
            key: 'departamentoid',
            value: '5',
          },
          {
            key: 'municipioid',
            value: '1',
          },
          {
            key: 'pobladoid',
            value: '1268',
          },
          ],
        },
        product: {
          part_number: 'I10_0002_020A',
          locales: {
            es_gt: {
              description: 'TARJETA TELF MOVIL Q.10',
              long_description: 'TARJETA TELF MOVIL Q.10',
              name: 'TARJETA TELF MOVIL Q.10',
              seo: {
                title: 'tarjeta-telf-movil-q10',
                name: 'tarjeta-telf-movil-q10',
              },
              categories: [{
                slug: 'prepago/celulares',
              },
              {
                slug: 'prepago',
              },
              ],
            },
          },
          buyable: false,
          available: false,
          attributes: [{
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-chars-mp3',
            value: '0',
            type: 'descriptive',
          }],
          last_update: {
            $date: '2018-08-15T18:17:13.528Z',
          },
          items: [{
            part_number: 'I10_0002_020',
            buyable: true,
            available: false,
            locales: {
              es_gt: {
                description: 'TARJETA TELF MOVIL Q.10',
                long_description: 'TARJETA TELF MOVIL Q.10',
                name: 'TARJETA TELF MOVIL Q.10',
                position: 99.0,
                seo: {
                  title: 'tarjeta-telf-movil-q10',
                  name: 'tarjeta-telf-movil-q10',
                },
              },
            },
            attributes: [{
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-chars-mp3',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pila',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-correo-soportado',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-videollamada',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-prueba-agua',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-flash',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-enfoque',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-hd',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-video',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-musica',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-radio',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-datos',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth-st',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-wifi',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-gps',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-3g4g',
              value: 'NoNo',
              type: 'descriptive',
            },
            ],
            pricing: {
              gtq: {
                list_price: 100.0,
                offer_price: 100.0,
              },
            },
            image_correlator: 'I10.0002.020',
            external_referer: '372502',
            images: [
              '/I10.0002.020/I10.0002.020_1.jpg',
            ],
            position: 99.0,
          }],
          position: 99.0,
        },
      },
      ],
      checkout_date: {
        $date: '2018-08-20T15:41:43.000Z',
      },
      tracking_info: {
        shipments: [
          {
            tracking_url: 'https://www.cargoexpreso.com/tracking/?guia=',
            tracking_code: '1234',
            courier: 'cargoexpreso',
            items: 'List<Item>',
          },
          {
            tracking_url: 'https://www.cargoexpreso.com/tracking/?guia=',
            tracking_code: '4567',
            courier: 'cargoexpreso',
            items: 'List<Item>',
          },
        ],
        events: [
          {
            status: 'PENDING',
            tracking_code: '1234',
            description: '',
            location: '',
            timestamp: '1534262545',
          },
          {
            status: 'PROCESS',
            tracking_code: '4567',
            description: '',
            location: '',
            timestamp: '1534262545',
          },
          {
            status: 'SHIPPING',
            tracking_code: '4567',
            description: '',
            location: '',
            timestamp: '1534462545',
          },
          {
            status: 'DELIVERED',
            tracking_code: '4567',
            description: '',
            location: '',
            timestamp: '1534662545',
          },
        ],
      },
    },
    {
      external_referer: '589327069164',
      status: 'Processing',
      last_update: {
        $date: '2018-07-31T15:10:09.000Z',
      },
      amount: {
        gtq: {
          grand_total: '300',
          total_sales_tax: '0',
          total_shipping_charge: '0',
          total_shipping_tax: '0',
          total_product_price: '300',
          total_adjustment: '0',
          adjustments: [],
        },
      },
      same_shipping_and_billing_address: false,
      billing_info: {
        nickname: 'Facturacion',
        address_type: 'Billing',
        external_referer: '531110198705',
        first_name: 'Miguel',
        last_name: 'Carmona Test',
        address_line_1: 'La calle 44 fact',
        address_line_2: 'Llano Largo',
        address_line_3: '',
        city: 'Guatemala',
        state_or_province_name: 'Guatemala',
        country: 'GT',
        postal_code: '00000',
        email_1: 'miguel.carmona@edgebound.com',
        email_2: '',
        phone_1: '44554455',
        phone_2: '',
        fax_1: '',
        fax_2: '',
        same_shipping_and_billing_address: false,
        custom_info: [{
          key: 'departamentoid',
          value: '7',
        },
        {
          key: 'municipioid',
          value: '1',
        },
        {
          key: 'pobladoid',
          value: '658',
        },
        ],
      },
      promo_codes: [],
      items: [{
        part_number: 'I02_7032_449',
        quantity: '1',
        free_gift: false,
        amount: {
          gtq: {
            unit_price: '200',
            total_items: '200',
            total_adjustment: '0',
            adjustment: {},
            sales_tax: '0',
            shipping_charge: '0',
            shipping_tax: '0',
          },
        },
        item_status: {
          status: 'P',
          inventory: 'Available',
          fulfillment: 'Unreleased',
        },
        fulfillment_info: {
          available_date: {
            $date: '2018-08-31T15:06:29.823Z',
          },
          expected_ship_date: {
            $date: '2018-08-31T15:06:29.858Z',
          },
        },
        fulfillment_center: {
          id: '13901',
          name: 'clarogt',
        },
        shipping_info: {
          nickname: 'Envio',
          address_type: 'Shipping',
          external_referer: '531109786177',
          first_name: 'Angel Miguel',
          last_name: 'Test Tienda',
          address_line_1: 'Barrio Central',
          address_line_2: '',
          address_line_3: '',
          city: 'Jutiapa',
          state_or_province_name: 'Asunción Mita',
          country: 'GT',
          postal_code: '0',
          email_1: 'miguel.carmona@edgebound.com',
          email_2: '',
          phone_1: '78457299',
          phone_2: '',
          fax_1: '',
          fax_2: '',
          same_shipping_and_billing_address: true,
          custom_info: [{
            key: 'departamentoid',
            value: '11',
          },
          {
            key: 'municipioid',
            value: '5',
          },
          {
            key: 'pobladoid',
            value: '914',
          },
          {
            key: 'referral_address',
            value: '',
          },
          ],
        },
        product: {
          part_number: 'I01_7032_450A',
          buyable: true,
          available: true,
          locales: {
            es_gt: {
              description: 'SAMSUNG J1 SM-120M DORADO (P)',
              long_description: 'SAMSUNG J1 SM-120M DORADO (P)',
              name: 'SAMSUNG J1 SM-120M DORADO (P)',
              seo: {
                title: 'samsung-j1-sm-120m-dorado-p',
                name: 'samsung-j1-sm-120m-dorado-p',
              },
              categories: [{
                slug: 'prepago/celulares',
              },
              {
                slug: 'prepago',
              },
              ],
            },
          },
          attributes: [{
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-marca',
            value: 'Samsung',
            type: 'descriptive',
          },
          {
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-color',
            value: 'Dorado',
            type: 'descriptive',
          },
          {
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-chars-mp3',
            value: '1',
            type: 'descriptive',
          },
          ],
          position: 1.0,
          last_update: {
            $date: '2018-08-15T18:17:13.015Z',
          },
          items: [{
            part_number: 'I02_7032_449',
            buyable: true,
            available: true,
            image_correlator: 'I02.7032.449',
            locales: {
              es_gt: {
                description: 'SAMSUNG J1 6 SM-120M NEGRO (P)',
                long_description: 'SAMSUNG J1 6 SM-120M NEGRO (P)',
                name: 'SAMSUNG J1 6 SM-120M NEGRO (P)',
                position: 1.0,
                seo: {
                  title: 'samsung-j1-6-sm-120m-negro-p',
                  name: 'samsung-j1-6-sm-120m-negro-p',
                },
              },
            },
            attributes: [{
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-marca',
              value: 'Samsung',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-color',
              value: 'Negro',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-chars-mp3',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'def-color',
              value: 'Negro',
              type: 'defining',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'def-capacidad',
              value: '16 GB',
              type: 'defining',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-a-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-b-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-a-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-c-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-a-name',
              value: 'Qué contiene la caja',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-b-name',
              value: 'Términos y condiciones',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-b-desc',
              value: 'Adaptador AC. Cable USB. Guía de inicio rápido. Audífonos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pantalla',
              value: '4.5 pulgadas',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pila',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-camara',
              value: '5.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-peso',
              value: '122 gramos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-tamano',
              value: '12.9 centímetros',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-renovable',
              value: 'No',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-capacidad',
              value: '1850mAh',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-dimensiones',
              value: '129 x 68.2 x 8.9 mm',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-peso',
              value: '122 gramos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-pantalla',
              value: '4.5 pulgadas',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-memoria',
              value: '8.0 GB',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-memoria-ext',
              value: 'MicroSDHC (SD 2.0) hasta 128GB',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-correo-soportado',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sistema-operativo',
              value: 'Android 5.2',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sistema-operativo-version',
              value: 'Lollipop',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-procesador',
              value: '1.3 GHz Quad Core',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sim',
              value: 'Micro SIM',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-videollamada',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-prueba-agua',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-trasera',
              value: '5.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-frontal',
              value: '2.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-flash',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-enfoque',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-hd',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-video',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-musica',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-radio',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-datos',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-banda',
              value: 'LTE',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth-st',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-wifi',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-gps',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-3g4g',
              value: 'NoSi',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-35mm',
              value: '3.5 mm',
              type: 'descriptive',
            },
            ],
            pricing: {
              gtq: {
                list_price: 200.0,
                offer_price: 200.0,
              },
            },
            position: 1.0,
            external_referer: '373074',
            images: [
              '/I02.7032.449/I02.7032.449_1.jpg',
              '/I02.7032.449/I02.7032.449_3.jpg',
              '/I02.7032.449/I02.7032.449_5.jpg',
            ],
          }],
        },
      },
      {
        part_number: 'I10_0002_020',
        quantity: '1',
        free_gift: false,
        amount: {
          gtq: {
            unit_price: '100',
            total_items: '100',
            total_adjustment: '0',
            adjustment: {},
            sales_tax: '0',
            shipping_charge: '0',
            shipping_tax: '0',
          },
        },
        item_status: {
          status: 'P',
          inventory: 'Available',
          fulfillment: 'Unreleased',
        },
        fulfillment_info: {
          available_date: {
            $date: '2018-08-31T15:06:34.388Z',
          },
          expected_ship_date: {
            $date: '2018-08-31T15:06:34.472Z',
          },
        },
        fulfillment_center: {
          id: '13901',
          name: 'clarogt',
        },
        shipping_info: {
          nickname: 'Envio',
          address_type: 'Shipping',
          external_referer: '531109786177',
          first_name: 'Angel Miguel',
          last_name: 'Test Tienda',
          address_line_1: 'Barrio Central',
          address_line_2: '',
          address_line_3: '',
          city: 'Jutiapa',
          state_or_province_name: 'Asunción Mita',
          country: 'GT',
          postal_code: '0',
          email_1: 'miguel.carmona@edgebound.com',
          email_2: '',
          phone_1: '78457299',
          phone_2: '',
          fax_1: '',
          fax_2: '',
          same_shipping_and_billing_address: true,
          custom_info: [{
            key: 'departamentoid',
            value: '11',
          },
          {
            key: 'municipioid',
            value: '5',
          },
          {
            key: 'pobladoid',
            value: '914',
          },
          {
            key: 'referral_address',
            value: '',
          },
          ],
        },
        product: {
          part_number: 'I10_0002_020A',
          locales: {
            es_gt: {
              description: 'TARJETA TELF MOVIL Q.10',
              long_description: 'TARJETA TELF MOVIL Q.10',
              name: 'TARJETA TELF MOVIL Q.10',
              seo: {
                title: 'tarjeta-telf-movil-q10',
                name: 'tarjeta-telf-movil-q10',
              },
              categories: [{
                slug: 'prepago/celulares',
              },
              {
                slug: 'prepago',
              },
              ],
            },
          },
          buyable: false,
          available: false,
          attributes: [{
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-chars-mp3',
            value: '0',
            type: 'descriptive',
          }],
          last_update: {
            $date: '2018-08-15T18:17:13.528Z',
          },
          items: [{
            part_number: 'I10_0002_020',
            buyable: true,
            available: false,
            locales: {
              es_gt: {
                description: 'TARJETA TELF MOVIL Q.10',
                long_description: 'TARJETA TELF MOVIL Q.10',
                name: 'TARJETA TELF MOVIL Q.10',
                position: 99.0,
                seo: {
                  title: 'tarjeta-telf-movil-q10',
                  name: 'tarjeta-telf-movil-q10',
                },
              },
            },
            attributes: [{
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-chars-mp3',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pila',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-correo-soportado',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-videollamada',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-prueba-agua',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-flash',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-enfoque',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-hd',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-video',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-musica',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-radio',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-datos',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth-st',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-wifi',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-gps',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-3g4g',
              value: 'NoNo',
              type: 'descriptive',
            },
            ],
            pricing: {
              gtq: {
                list_price: 100.0,
                offer_price: 100.0,
              },
            },
            image_correlator: 'I10.0002.020',
            external_referer: '372502',
            images: [
              '/I10.0002.020/I10.0002.020_1.jpg',
            ],
            position: 99.0,
          }],
          position: 99.0,
        },
      },
      ],
      checkout_date: {
        $date: '2018-07-31T15:10:09.000Z',
      },
      tracking_info: {
        shipments: [
          {
            tracking_url: 'https://www.cargoexpreso.com/tracking/?guia=',
            tracking_code: '1234',
            courier: 'cargoexpreso',
            items: 'List<Item>',
          },
          {
            tracking_url: 'https://www.cargoexpreso.com/tracking/?guia=',
            tracking_code: '4567',
            courier: 'cargoexpreso',
            items: 'List<Item>',
          },
        ],
        events: [
          {
            status: 'PENDING',
            tracking_code: '1234',
            description: '',
            location: '',
            timestamp: '1534262545',
          },
          {
            status: 'PROCESS',
            tracking_code: '4567',
            description: '',
            location: '',
            timestamp: '1534262545',
          },
          {
            status: 'SHIPPING',
            tracking_code: '4567',
            description: '',
            location: '',
            timestamp: '1534462545',
          },
          {
            status: 'CLOSED',
            tracking_code: '4567',
            description: '',
            location: '',
            timestamp: '1534862545',
          },
        ],
      },
    },
    {
      external_referer: '589323663262',
      status: 'Processing',
      last_update: {
        $date: '2018-06-31T14:51:44.000Z',
      },
      amount: {
        gtq: {
          grand_total: '400',
          total_sales_tax: '0',
          total_shipping_charge: '0',
          total_shipping_tax: '0',
          total_product_price: '400',
          total_adjustment: '0',
          adjustments: [],
        },
      },
      same_shipping_and_billing_address: false,
      billing_info: {
        nickname: 'Facturacion',
        address_type: 'Billing',
        external_referer: '531108474040',
        first_name: 'Miguel',
        last_name: 'Test',
        address_line_1: 'La calle 33 fact',
        address_line_2: 'Salama',
        address_line_3: '',
        city: 'Baja Verapaz',
        state_or_province_name: 'Salama',
        country: 'GT',
        postal_code: '00000',
        email_1: 'miguel.carmona@edgebound.com',
        email_2: '',
        phone_1: '12345678',
        phone_2: '',
        fax_1: '',
        fax_2: '',
        same_shipping_and_billing_address: false,
        custom_info: [{
          key: 'departamentoid',
          value: '2',
        },
        {
          key: 'municipioid',
          value: '1',
        },
        {
          key: 'pobladoid',
          value: '1013',
        },
        ],
      },
      promo_codes: [],
      items: [{
        part_number: 'I02_7032_449',
        quantity: '1',
        free_gift: false,
        amount: {
          gtq: {
            unit_price: '200',
            total_items: '200',
            total_adjustment: '0',
            adjustment: {},
            sales_tax: '0',
            shipping_charge: '0',
            shipping_tax: '0',
          },
        },
        item_status: {
          status: 'P',
          inventory: 'Available',
          fulfillment: 'Unreleased',
        },
        fulfillment_info: {
          available_date: {
            $date: '2018-08-31T14:43:53.217Z',
          },
          expected_ship_date: {
            $date: '2018-08-31T14:45:59.825Z',
          },
        },
        fulfillment_center: {
          id: '13901',
          name: 'clarogt',
        },
        shipping_info: {
          nickname: 'Envio',
          address_type: 'Shipping',
          external_referer: '531107421974',
          first_name: 'Angel Miguel',
          last_name: 'EB',
          address_line_1: '3 Av. 06-76 Cantón San Antonio',
          address_line_2: '',
          address_line_3: '',
          city: 'Guatemala',
          state_or_province_name: 'Amatitlan',
          country: 'GT',
          postal_code: '0',
          email_1: 'miguel.carmona@edgebound.com',
          email_2: '',
          phone_1: '66353730',
          phone_2: '',
          fax_1: '',
          fax_2: '',
          same_shipping_and_billing_address: true,
          custom_info: [{
            key: 'departamentoid',
            value: '7',
          },
          {
            key: 'municipioid',
            value: '14',
          },
          {
            key: 'pobladoid',
            value: '648',
          },
          {
            key: 'referral_address',
            value: '',
          },
          ],
        },
        product: {
          part_number: 'I01_7032_450A',
          buyable: true,
          available: true,
          locales: {
            es_gt: {
              description: 'SAMSUNG J1 SM-120M DORADO (P)',
              long_description: 'SAMSUNG J1 SM-120M DORADO (P)',
              name: 'SAMSUNG J1 SM-120M DORADO (P)',
              seo: {
                title: 'samsung-j1-sm-120m-dorado-p',
                name: 'samsung-j1-sm-120m-dorado-p',
              },
              categories: [{
                slug: 'prepago/celulares',
              },
              {
                slug: 'prepago',
              },
              ],
            },
          },
          attributes: [{
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-marca',
            value: 'Samsung',
            type: 'descriptive',
          },
          {
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-color',
            value: 'Dorado',
            type: 'descriptive',
          },
          {
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-chars-mp3',
            value: '1',
            type: 'descriptive',
          },
          ],
          position: 1.0,
          last_update: {
            $date: '2018-08-15T18:17:13.015Z',
          },
          items: [{
            part_number: 'I02_7032_449',
            buyable: true,
            available: true,
            image_correlator: 'I02.7032.449',
            locales: {
              es_gt: {
                description: 'SAMSUNG J1 6 SM-120M NEGRO (P)',
                long_description: 'SAMSUNG J1 6 SM-120M NEGRO (P)',
                name: 'SAMSUNG J1 6 SM-120M NEGRO (P)',
                position: 1.0,
                seo: {
                  title: 'samsung-j1-6-sm-120m-negro-p',
                  name: 'samsung-j1-6-sm-120m-negro-p',
                },
              },
            },
            attributes: [{
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-marca',
              value: 'Samsung',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-color',
              value: 'Negro',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-chars-mp3',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'def-color',
              value: 'Negro',
              type: 'defining',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'def-capacidad',
              value: '16 GB',
              type: 'defining',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-a-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-b-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-a-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-c-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-a-name',
              value: 'Qué contiene la caja',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-b-name',
              value: 'Términos y condiciones',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-b-desc',
              value: 'Adaptador AC. Cable USB. Guía de inicio rápido. Audífonos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pantalla',
              value: '4.5 pulgadas',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pila',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-camara',
              value: '5.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-peso',
              value: '122 gramos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-tamano',
              value: '12.9 centímetros',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-renovable',
              value: 'No',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-capacidad',
              value: '1850mAh',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-dimensiones',
              value: '129 x 68.2 x 8.9 mm',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-peso',
              value: '122 gramos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-pantalla',
              value: '4.5 pulgadas',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-memoria',
              value: '8.0 GB',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-memoria-ext',
              value: 'MicroSDHC (SD 2.0) hasta 128GB',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-correo-soportado',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sistema-operativo',
              value: 'Android 5.2',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sistema-operativo-version',
              value: 'Lollipop',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-procesador',
              value: '1.3 GHz Quad Core',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sim',
              value: 'Micro SIM',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-videollamada',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-prueba-agua',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-trasera',
              value: '5.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-frontal',
              value: '2.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-flash',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-enfoque',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-hd',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-video',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-musica',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-radio',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-datos',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-banda',
              value: 'LTE',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth-st',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-wifi',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-gps',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-3g4g',
              value: 'NoSi',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-35mm',
              value: '3.5 mm',
              type: 'descriptive',
            },
            ],
            pricing: {
              gtq: {
                list_price: 200.0,
                offer_price: 200.0,
              },
            },
            position: 1.0,
            external_referer: '373074',
            images: [
              '/I02.7032.449/I02.7032.449_1.jpg',
              '/I02.7032.449/I02.7032.449_3.jpg',
              '/I02.7032.449/I02.7032.449_5.jpg',
            ],
          }],
        },
      },
      {
        part_number: 'I10_0002_020',
        quantity: '2',
        free_gift: false,
        amount: {
          gtq: {
            unit_price: '100',
            total_items: '200',
            total_adjustment: '0',
            adjustment: {},
            sales_tax: '0',
            shipping_charge: '0',
            shipping_tax: '0',
          },
        },
        item_status: {
          status: 'P',
          inventory: 'Available',
          fulfillment: 'Unreleased',
        },
        fulfillment_info: {
          available_date: {
            $date: '2018-08-31T14:50:46.946Z',
          },
          expected_ship_date: {
            $date: '2018-08-31T14:50:46.986Z',
          },
        },
        fulfillment_center: {
          id: '13901',
          name: 'clarogt',
        },
        shipping_info: {
          nickname: 'Envio',
          address_type: 'Shipping',
          external_referer: '531107421974',
          first_name: 'Angel Miguel',
          last_name: 'EB',
          address_line_1: '3 Av. 06-76 Cantón San Antonio',
          address_line_2: '',
          address_line_3: '',
          city: 'Guatemala',
          state_or_province_name: 'Amatitlan',
          country: 'GT',
          postal_code: '0',
          email_1: 'miguel.carmona@edgebound.com',
          email_2: '',
          phone_1: '66353730',
          phone_2: '',
          fax_1: '',
          fax_2: '',
          same_shipping_and_billing_address: true,
          custom_info: [{
            key: 'departamentoid',
            value: '7',
          },
          {
            key: 'municipioid',
            value: '14',
          },
          {
            key: 'pobladoid',
            value: '648',
          },
          {
            key: 'referral_address',
            value: '',
          },
          ],
        },
        product: {
          part_number: 'I10_0002_020A',
          locales: {
            es_gt: {
              description: 'TARJETA TELF MOVIL Q.10',
              long_description: 'TARJETA TELF MOVIL Q.10',
              name: 'TARJETA TELF MOVIL Q.10',
              seo: {
                title: 'tarjeta-telf-movil-q10',
                name: 'tarjeta-telf-movil-q10',
              },
              categories: [{
                slug: 'prepago/celulares',
              },
              {
                slug: 'prepago',
              },
              ],
            },
          },
          buyable: false,
          available: false,
          attributes: [{
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-chars-mp3',
            value: '0',
            type: 'descriptive',
          }],
          last_update: {
            $date: '2018-08-15T18:17:13.528Z',
          },
          items: [{
            part_number: 'I10_0002_020',
            buyable: true,
            available: false,
            locales: {
              es_gt: {
                description: 'TARJETA TELF MOVIL Q.10',
                long_description: 'TARJETA TELF MOVIL Q.10',
                name: 'TARJETA TELF MOVIL Q.10',
                position: 99.0,
                seo: {
                  title: 'tarjeta-telf-movil-q10',
                  name: 'tarjeta-telf-movil-q10',
                },
              },
            },
            attributes: [{
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-chars-mp3',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pila',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-correo-soportado',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-videollamada',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-prueba-agua',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-flash',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-enfoque',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-hd',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-video',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-musica',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-radio',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-datos',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth-st',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-wifi',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-gps',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-3g4g',
              value: 'NoNo',
              type: 'descriptive',
            },
            ],
            pricing: {
              gtq: {
                list_price: 100.0,
                offer_price: 100.0,
              },
            },
            image_correlator: 'I10.0002.020',
            external_referer: '372502',
            images: [
              '/I10.0002.020/I10.0002.020_1.jpg',
            ],
            position: 99.0,
          }],
          position: 99.0,
        },
      },
      ],
      checkout_date: {
        $date: '2018-06-31T14:51:44.000Z',
      },
      tracking_info: {
        shipments: [
          {
            tracking_url: 'https://www.cargoexpreso.com/tracking/?guia=',
            tracking_code: '1234',
            courier: 'cargoexpreso',
            items: 'List<Item>',
          },
          {
            tracking_url: 'https://www.cargoexpreso.com/tracking/?guia=',
            tracking_code: '4567',
            courier: 'cargoexpreso',
            items: 'List<Item>',
          },
        ],
        events: [
          {
            status: 'PENDING',
            tracking_code: '1234',
            description: '',
            location: '',
            timestamp: '1534262545',
          },
          {
            status: 'PROCESS',
            tracking_code: '4567',
            description: '',
            location: '',
            timestamp: '1534262545',
          },
          {
            status: 'CANCELLED',
            tracking_code: '4567',
            description: '',
            location: '',
            timestamp: '1534462545',
          },
        ],
      },
    },
    {
      external_referer: '585112487015',
      status: 'Processing',
      last_update: {
        $date: '2018-05-29T23:01:07.000Z',
      },
      amount: {
        gtq: {
          grand_total: '300',
          total_sales_tax: '0',
          total_shipping_charge: '0',
          total_shipping_tax: '0',
          total_product_price: '300',
          total_adjustment: '0',
          adjustments: [],
        },
      },
      same_shipping_and_billing_address: false,
      billing_info: {
        nickname: 'Facturacion',
        address_type: 'Billing',
        external_referer: '529021196774',
        first_name: 'Christian',
        last_name: 'Tellez Test',
        address_line_1: 'La calle bill 33',
        address_line_2: 'Coban',
        address_line_3: '',
        city: 'Alta Verapaz',
        state_or_province_name: 'Coban',
        country: 'GT',
        postal_code: '00000',
        email_1: 'christian.badillo@edgebound.net',
        email_2: '',
        phone_1: '33223333',
        phone_2: '',
        fax_1: '1234567890123',
        fax_2: '',
        same_shipping_and_billing_address: false,
        custom_info: [{
          key: 'departamentoid',
          value: '1',
        },
        {
          key: 'municipioid',
          value: '1',
        },
        {
          key: 'pobladoid',
          value: '1005',
        },
        ],
      },
      promo_codes: [],
      items: [{
        part_number: 'I02_7032_449',
        quantity: '1',
        free_gift: false,
        amount: {
          gtq: {
            unit_price: '200',
            total_items: '200',
            total_adjustment: '0',
            adjustment: {},
            sales_tax: '0',
            shipping_charge: '0',
            shipping_tax: '0',
          },
        },
        item_status: {
          status: 'P',
          inventory: 'Available',
          fulfillment: 'Unreleased',
        },
        fulfillment_info: {
          available_date: {
            $date: '2018-08-29T22:02:17.884Z',
          },
          expected_ship_date: {
            $date: '2018-08-29T22:58:46.536Z',
          },
        },
        fulfillment_center: {
          id: '13901',
          name: 'clarogt',
        },
        shipping_info: {
          nickname: 'Envio',
          address_type: 'Shipping',
          external_referer: '529018684790',
          first_name: 'Christian',
          last_name: 'Tellez Test',
          address_line_1: 'La calle shipp 22',
          address_line_2: 'Coban',
          address_line_3: '',
          city: 'Alta Verapaz',
          state_or_province_name: 'Coban',
          country: 'GT',
          postal_code: '00000',
          email_1: 'christian.badillo@edgebound.net',
          email_2: '',
          phone_1: '33223333',
          phone_2: '',
          fax_1: '1234567890123',
          fax_2: '',
          same_shipping_and_billing_address: false,
          custom_info: [{
            key: 'allowed_recipient_1',
            value: 'Salvador Calles',
          },
          {
            key: 'allowed_recipient_2',
            value: 'Dante Aligeri',
          },
          {
            key: 'referral_address',
            value: 'Edificio rojo',
          },
          {
            key: 'departamentoid',
            value: '1',
          },
          {
            key: 'municipioid',
            value: '1',
          },
          {
            key: 'pobladoid',
            value: '1005',
          },
          ],
        },
        product: {
          part_number: 'I01_7032_450A',
          buyable: true,
          available: true,
          locales: {
            es_gt: {
              description: 'SAMSUNG J1 SM-120M DORADO (P)',
              long_description: 'SAMSUNG J1 SM-120M DORADO (P)',
              name: 'SAMSUNG J1 SM-120M DORADO (P)',
              seo: {
                title: 'samsung-j1-sm-120m-dorado-p',
                name: 'samsung-j1-sm-120m-dorado-p',
              },
              categories: [{
                slug: 'prepago/celulares',
              },
              {
                slug: 'prepago',
              },
              ],
            },
          },
          attributes: [{
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-marca',
            value: 'Samsung',
            type: 'descriptive',
          },
          {
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-color',
            value: 'Dorado',
            type: 'descriptive',
          },
          {
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-chars-mp3',
            value: '1',
            type: 'descriptive',
          },
          ],
          position: 1.0,
          last_update: {
            $date: '2018-08-15T18:17:13.015Z',
          },
          items: [{
            part_number: 'I02_7032_449',
            buyable: true,
            available: true,
            image_correlator: 'I02.7032.449',
            locales: {
              es_gt: {
                description: 'SAMSUNG J1 6 SM-120M NEGRO (P)',
                long_description: 'SAMSUNG J1 6 SM-120M NEGRO (P)',
                name: 'SAMSUNG J1 6 SM-120M NEGRO (P)',
                position: 1.0,
                seo: {
                  title: 'samsung-j1-6-sm-120m-negro-p',
                  name: 'samsung-j1-6-sm-120m-negro-p',
                },
              },
            },
            attributes: [{
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-marca',
              value: 'Samsung',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-color',
              value: 'Negro',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-chars-mp3',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'def-color',
              value: 'Negro',
              type: 'defining',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'def-capacidad',
              value: '16 GB',
              type: 'defining',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-a-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-b-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-a-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-c-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-a-name',
              value: 'Qué contiene la caja',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-b-name',
              value: 'Términos y condiciones',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-b-desc',
              value: 'Adaptador AC. Cable USB. Guía de inicio rápido. Audífonos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pantalla',
              value: '4.5 pulgadas',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pila',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-camara',
              value: '5.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-peso',
              value: '122 gramos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-tamano',
              value: '12.9 centímetros',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-renovable',
              value: 'No',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-capacidad',
              value: '1850mAh',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-dimensiones',
              value: '129 x 68.2 x 8.9 mm',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-peso',
              value: '122 gramos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-pantalla',
              value: '4.5 pulgadas',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-memoria',
              value: '8.0 GB',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-memoria-ext',
              value: 'MicroSDHC (SD 2.0) hasta 128GB',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-correo-soportado',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sistema-operativo',
              value: 'Android 5.2',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sistema-operativo-version',
              value: 'Lollipop',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-procesador',
              value: '1.3 GHz Quad Core',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sim',
              value: 'Micro SIM',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-videollamada',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-prueba-agua',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-trasera',
              value: '5.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-frontal',
              value: '2.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-flash',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-enfoque',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-hd',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-video',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-musica',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-radio',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-datos',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-banda',
              value: 'LTE',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth-st',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-wifi',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-gps',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-3g4g',
              value: 'NoSi',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-35mm',
              value: '3.5 mm',
              type: 'descriptive',
            },
            ],
            pricing: {
              gtq: {
                list_price: 200.0,
                offer_price: 200.0,
              },
            },
            position: 1.0,
            external_referer: '373074',
            images: [
              '/I02.7032.449/I02.7032.449_1.jpg',
              '/I02.7032.449/I02.7032.449_3.jpg',
              '/I02.7032.449/I02.7032.449_5.jpg',
            ],
          }],
        },
      },
      {
        part_number: 'I10_0002_020',
        quantity: '1',
        free_gift: false,
        amount: {
          gtq: {
            unit_price: '100',
            total_items: '100',
            total_adjustment: '0',
            adjustment: {},
            sales_tax: '0',
            shipping_charge: '0',
            shipping_tax: '0',
          },
        },
        item_status: {
          status: 'P',
          inventory: 'Available',
          fulfillment: 'Unreleased',
        },
        fulfillment_info: {
          available_date: {
            $date: '2018-08-29T22:58:52.935Z',
          },
          expected_ship_date: {
            $date: '2018-08-29T22:58:52.970Z',
          },
        },
        fulfillment_center: {
          id: '13901',
          name: 'clarogt',
        },
        shipping_info: {
          nickname: 'Envio',
          address_type: 'Shipping',
          external_referer: '529018684790',
          first_name: 'Christian',
          last_name: 'Tellez Test',
          address_line_1: 'La calle shipp 22',
          address_line_2: 'Coban',
          address_line_3: '',
          city: 'Alta Verapaz',
          state_or_province_name: 'Coban',
          country: 'GT',
          postal_code: '00000',
          email_1: 'christian.badillo@edgebound.net',
          email_2: '',
          phone_1: '33223333',
          phone_2: '',
          fax_1: '1234567890123',
          fax_2: '',
          same_shipping_and_billing_address: false,
          custom_info: [{
            key: 'allowed_recipient_1',
            value: 'Salvador Calles',
          },
          {
            key: 'allowed_recipient_2',
            value: 'Dante Aligeri',
          },
          {
            key: 'referral_address',
            value: 'Edificio rojo',
          },
          {
            key: 'departamentoid',
            value: '1',
          },
          {
            key: 'municipioid',
            value: '1',
          },
          {
            key: 'pobladoid',
            value: '1005',
          },
          ],
        },
        product: {
          part_number: 'I10_0002_020A',
          locales: {
            es_gt: {
              description: 'TARJETA TELF MOVIL Q.10',
              long_description: 'TARJETA TELF MOVIL Q.10',
              name: 'TARJETA TELF MOVIL Q.10',
              seo: {
                title: 'tarjeta-telf-movil-q10',
                name: 'tarjeta-telf-movil-q10',
              },
              categories: [{
                slug: 'prepago/celulares',
              },
              {
                slug: 'prepago',
              },
              ],
            },
          },
          buyable: false,
          available: false,
          attributes: [{
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-chars-mp3',
            value: '0',
            type: 'descriptive',
          }],
          last_update: {
            $date: '2018-08-15T18:17:13.528Z',
          },
          items: [{
            part_number: 'I10_0002_020',
            buyable: true,
            available: false,
            locales: {
              es_gt: {
                description: 'TARJETA TELF MOVIL Q.10',
                long_description: 'TARJETA TELF MOVIL Q.10',
                name: 'TARJETA TELF MOVIL Q.10',
                position: 99.0,
                seo: {
                  title: 'tarjeta-telf-movil-q10',
                  name: 'tarjeta-telf-movil-q10',
                },
              },
            },
            attributes: [{
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-chars-mp3',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pila',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-correo-soportado',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-videollamada',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-prueba-agua',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-flash',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-enfoque',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-hd',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-video',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-musica',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-radio',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-datos',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth-st',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-wifi',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-gps',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-3g4g',
              value: 'NoNo',
              type: 'descriptive',
            },
            ],
            pricing: {
              gtq: {
                list_price: 100.0,
                offer_price: 100.0,
              },
            },
            image_correlator: 'I10.0002.020',
            external_referer: '372502',
            images: [
              '/I10.0002.020/I10.0002.020_1.jpg',
            ],
            position: 99.0,
          }],
          position: 99.0,
        },
      },
      ],
      checkout_date: {
        $date: '2018-05-29T23:01:07.000Z',
      },
      tracking_info: {
        shipments: [
          {
            tracking_url: 'https://www.cargoexpreso.com/tracking/?guia=',
            tracking_code: '1234',
            courier: 'cargoexpreso',
            items: 'List<Item>',
          },
          {
            tracking_url: 'https://www.cargoexpreso.com/tracking/?guia=',
            tracking_code: '4567',
            courier: 'cargoexpreso',
            items: 'List<Item>',
          },
        ],
        events: [
          {
            status: 'PENDING',
            tracking_code: '1234',
            description: '',
            location: '',
            timestamp: '1534262545',
          },
          {
            status: 'PROCESS',
            tracking_code: '4567',
            description: '',
            location: '',
            timestamp: '1534262545',
          },
          {
            status: 'SHIPPING',
            tracking_code: '4567',
            description: '',
            location: '',
            timestamp: '1534462545',
          },
          {
            status: 'CLOSED',
            tracking_code: '4567',
            description: '',
            location: '',
            timestamp: '1534462545',
          },
        ],
      },
    },
    {
      external_referer: '584159109702',
      status: 'Processing',
      last_update: {
        $date: '2018-04-28T22:26:54.000Z',
      },
      amount: {
        gtq: {
          grand_total: '300',
          total_sales_tax: '0',
          total_shipping_charge: '0',
          total_shipping_tax: '0',
          total_product_price: '300',
          total_adjustment: '0',
          adjustments: [],
        },
      },
      same_shipping_and_billing_address: false,
      billing_info: {
        nickname: 'Facturacion',
        address_type: 'Billing',
        external_referer: '528594221028',
        first_name: 'Antonio',
        last_name: 'Test MX',
        address_line_1: '3 Av. 06-76 Cantón San Antonio',
        address_line_2: '',
        address_line_3: '',
        city: 'Guatemala',
        state_or_province_name: 'Amatitlan',
        country: 'GT',
        postal_code: '0',
        email_1: 'miguel.carmona@edgebound.com',
        email_2: '',
        phone_1: '66353730',
        phone_2: '',
        fax_1: '',
        fax_2: '',
        same_shipping_and_billing_address: true,
        custom_info: [],
      },
      promo_codes: [],
      items: [{
        part_number: 'I02_7032_449',
        quantity: '1',
        free_gift: false,
        amount: {
          gtq: {
            unit_price: '200',
            total_items: '200',
            total_adjustment: '0',
            adjustment: {},
            sales_tax: '0',
            shipping_charge: '0',
            shipping_tax: '0',
          },
        },
        item_status: {
          status: 'P',
          inventory: 'Available',
          fulfillment: 'Unreleased',
        },
        fulfillment_info: {
          available_date: {
            $date: '2018-08-28T22:17:36.142Z',
          },
          expected_ship_date: {
            $date: '2018-08-28T22:21:55.364Z',
          },
        },
        fulfillment_center: {
          id: '13901',
          name: 'clarogt',
        },
        shipping_info: {
          nickname: 'Envio',
          address_type: 'Shipping',
          external_referer: '528592794879',
          first_name: 'Antonio',
          last_name: 'Test MX',
          address_line_1: '3 Av. 06-76 Cantón San Antonio',
          address_line_2: '',
          address_line_3: '',
          city: 'Guatemala',
          state_or_province_name: 'Amatitlan',
          country: 'GT',
          postal_code: '0',
          email_1: 'miguel.carmona@edgebound.com',
          email_2: '',
          phone_1: '66353730',
          phone_2: '',
          fax_1: '',
          fax_2: '',
          same_shipping_and_billing_address: true,
          custom_info: [{
            key: 'departamentoid',
            value: '7',
          },
          {
            key: 'municipioid',
            value: '14',
          },
          {
            key: 'pobladoid',
            value: '648',
          },
          {
            key: 'referral_address',
            value: '',
          },
          ],
        },
        product: {
          part_number: 'I01_7032_450A',
          buyable: true,
          available: true,
          locales: {
            es_gt: {
              description: 'SAMSUNG J1 SM-120M DORADO (P)',
              long_description: 'SAMSUNG J1 SM-120M DORADO (P)',
              name: 'SAMSUNG J1 SM-120M DORADO (P)',
              seo: {
                title: 'samsung-j1-sm-120m-dorado-p',
                name: 'samsung-j1-sm-120m-dorado-p',
              },
              categories: [{
                slug: 'prepago/celulares',
              },
              {
                slug: 'prepago',
              },
              ],
            },
          },
          attributes: [{
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-marca',
            value: 'Samsung',
            type: 'descriptive',
          },
          {
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-color',
            value: 'Dorado',
            type: 'descriptive',
          },
          {
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-chars-mp3',
            value: '1',
            type: 'descriptive',
          },
          ],
          position: 1.0,
          last_update: {
            $date: '2018-08-15T18:17:13.015Z',
          },
          items: [{
            part_number: 'I02_7032_449',
            buyable: true,
            available: true,
            image_correlator: 'I02.7032.449',
            locales: {
              es_gt: {
                description: 'SAMSUNG J1 6 SM-120M NEGRO (P)',
                long_description: 'SAMSUNG J1 6 SM-120M NEGRO (P)',
                name: 'SAMSUNG J1 6 SM-120M NEGRO (P)',
                position: 1.0,
                seo: {
                  title: 'samsung-j1-6-sm-120m-negro-p',
                  name: 'samsung-j1-6-sm-120m-negro-p',
                },
              },
            },
            attributes: [{
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-marca',
              value: 'Samsung',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-color',
              value: 'Negro',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-chars-mp3',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'def-color',
              value: 'Negro',
              type: 'defining',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'def-capacidad',
              value: '16 GB',
              type: 'defining',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-a-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-b-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-a-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-c-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-a-name',
              value: 'Qué contiene la caja',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-b-name',
              value: 'Términos y condiciones',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-b-desc',
              value: 'Adaptador AC. Cable USB. Guía de inicio rápido. Audífonos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pantalla',
              value: '4.5 pulgadas',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pila',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-camara',
              value: '5.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-peso',
              value: '122 gramos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-tamano',
              value: '12.9 centímetros',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-renovable',
              value: 'No',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-capacidad',
              value: '1850mAh',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-dimensiones',
              value: '129 x 68.2 x 8.9 mm',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-peso',
              value: '122 gramos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-pantalla',
              value: '4.5 pulgadas',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-memoria',
              value: '8.0 GB',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-memoria-ext',
              value: 'MicroSDHC (SD 2.0) hasta 128GB',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-correo-soportado',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sistema-operativo',
              value: 'Android 5.2',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sistema-operativo-version',
              value: 'Lollipop',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-procesador',
              value: '1.3 GHz Quad Core',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sim',
              value: 'Micro SIM',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-videollamada',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-prueba-agua',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-trasera',
              value: '5.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-frontal',
              value: '2.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-flash',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-enfoque',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-hd',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-video',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-musica',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-radio',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-datos',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-banda',
              value: 'LTE',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth-st',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-wifi',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-gps',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-3g4g',
              value: 'NoSi',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-35mm',
              value: '3.5 mm',
              type: 'descriptive',
            },
            ],
            pricing: {
              gtq: {
                list_price: 200.0,
                offer_price: 200.0,
              },
            },
            position: 1.0,
            external_referer: '373074',
            images: [
              '/I02.7032.449/I02.7032.449_1.jpg',
              '/I02.7032.449/I02.7032.449_3.jpg',
              '/I02.7032.449/I02.7032.449_5.jpg',
            ],
          }],
        },
      },
      {
        part_number: 'I10_0002_020',
        quantity: '1',
        free_gift: false,
        amount: {
          gtq: {
            unit_price: '100',
            total_items: '100',
            total_adjustment: '0',
            adjustment: {},
            sales_tax: '0',
            shipping_charge: '0',
            shipping_tax: '0',
          },
        },
        item_status: {
          status: 'P',
          inventory: 'Available',
          fulfillment: 'Unreleased',
        },
        fulfillment_info: {
          available_date: {
            $date: '2018-08-28T22:24:02.716Z',
          },
          expected_ship_date: {
            $date: '2018-08-28T22:24:02.756Z',
          },
        },
        fulfillment_center: {
          id: '13901',
          name: 'clarogt',
        },
        shipping_info: {
          nickname: 'Envio',
          address_type: 'Shipping',
          external_referer: '528592794879',
          first_name: 'Antonio',
          last_name: 'Test MX',
          address_line_1: '3 Av. 06-76 Cantón San Antonio',
          address_line_2: '',
          address_line_3: '',
          city: 'Guatemala',
          state_or_province_name: 'Amatitlan',
          country: 'GT',
          postal_code: '0',
          email_1: 'miguel.carmona@edgebound.com',
          email_2: '',
          phone_1: '66353730',
          phone_2: '',
          fax_1: '',
          fax_2: '',
          same_shipping_and_billing_address: true,
          custom_info: [{
            key: 'departamentoid',
            value: '7',
          },
          {
            key: 'municipioid',
            value: '14',
          },
          {
            key: 'pobladoid',
            value: '648',
          },
          {
            key: 'referral_address',
            value: '',
          },
          ],
        },
        product: {
          part_number: 'I10_0002_020A',
          locales: {
            es_gt: {
              description: 'TARJETA TELF MOVIL Q.10',
              long_description: 'TARJETA TELF MOVIL Q.10',
              name: 'TARJETA TELF MOVIL Q.10',
              seo: {
                title: 'tarjeta-telf-movil-q10',
                name: 'tarjeta-telf-movil-q10',
              },
              categories: [{
                slug: 'prepago/celulares',
              },
              {
                slug: 'prepago',
              },
              ],
            },
          },
          buyable: false,
          available: false,
          attributes: [{
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-chars-mp3',
            value: '0',
            type: 'descriptive',
          }],
          last_update: {
            $date: '2018-08-15T18:17:13.528Z',
          },
          items: [{
            part_number: 'I10_0002_020',
            buyable: true,
            available: false,
            locales: {
              es_gt: {
                description: 'TARJETA TELF MOVIL Q.10',
                long_description: 'TARJETA TELF MOVIL Q.10',
                name: 'TARJETA TELF MOVIL Q.10',
                position: 99.0,
                seo: {
                  title: 'tarjeta-telf-movil-q10',
                  name: 'tarjeta-telf-movil-q10',
                },
              },
            },
            attributes: [{
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-chars-mp3',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pila',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-correo-soportado',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-videollamada',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-prueba-agua',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-flash',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-enfoque',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-hd',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-video',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-musica',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-radio',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-datos',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth-st',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-wifi',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-gps',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-3g4g',
              value: 'NoNo',
              type: 'descriptive',
            },
            ],
            pricing: {
              gtq: {
                list_price: 100.0,
                offer_price: 100.0,
              },
            },
            image_correlator: 'I10.0002.020',
            external_referer: '372502',
            images: [
              '/I10.0002.020/I10.0002.020_1.jpg',
            ],
            position: 99.0,
          }],
          position: 99.0,
        },
      },
      ],
      checkout_date: {
        $date: '2018-04-28T22:26:54.000Z',
      },
      tracking_info: {
        shipments: [
          {
            tracking_url: 'https://www.cargoexpreso.com/tracking/?guia=',
            tracking_code: '1234',
            courier: 'cargoexpreso',
            items: 'List<Item>',
          },
          {
            tracking_url: 'https://www.cargoexpreso.com/tracking/?guia=',
            tracking_code: '4567',
            courier: 'cargoexpreso',
            items: 'List<Item>',
          },
        ],
        events: [
          {
            status: 'PENDING',
            tracking_code: '1234',
            description: '',
            location: '',
            timestamp: '1534262545',
          },
        ],
      },
    },
    {
      external_referer: '584148383143',
      status: 'Processing',
      last_update: {
        $date: '2018-03-28T16:58:55.000Z',
      },
      amount: {
        gtq: {
          grand_total: '200',
          total_sales_tax: '0',
          total_shipping_charge: '0',
          total_shipping_tax: '0',
          total_product_price: '200',
          total_adjustment: '0',
          adjustments: [],
        },
      },
      same_shipping_and_billing_address: false,
      billing_info: {
        nickname: 'Facturacion',
        address_type: 'Billing',
        external_referer: '528577896284',
        first_name: 'Angel Miguel',
        last_name: 'EB',
        address_line_1: '3 Av. 06-76 Cantón San Antonio',
        address_line_2: '',
        address_line_3: '',
        city: 'Guatemala',
        state_or_province_name: 'Amatitlan',
        country: 'GT',
        postal_code: '0',
        email_1: 'miguel.carmona@edgebound.com',
        email_2: '',
        phone_1: '66353730',
        phone_2: '',
        fax_1: '',
        fax_2: '',
        same_shipping_and_billing_address: true,
        custom_info: [],
      },
      promo_codes: [],
      items: [{
        part_number: 'I02_2598_195',
        quantity: '1',
        free_gift: false,
        amount: {
          gtq: {
            unit_price: '200',
            total_items: '200',
            total_adjustment: '0',
            adjustment: {},
            sales_tax: '0',
            shipping_charge: '0',
            shipping_tax: '0',
          },
        },
        item_status: {
          status: 'P',
          inventory: 'Available',
          fulfillment: 'Unreleased',
        },
        fulfillment_info: {
          available_date: {
            $date: '2018-08-28T16:55:33.028Z',
          },
          expected_ship_date: {
            $date: '2018-08-28T16:55:53.267Z',
          },
        },
        fulfillment_center: {
          id: '13901',
          name: 'clarogt',
        },
        shipping_info: {
          nickname: 'Envio',
          address_type: 'Shipping',
          external_referer: '528576884776',
          first_name: 'Angel Miguel',
          last_name: 'EB',
          address_line_1: '3 Av. 06-76 Cantón San Antonio',
          address_line_2: '',
          address_line_3: '',
          city: 'Guatemala',
          state_or_province_name: 'Amatitlan',
          country: 'GT',
          postal_code: '0',
          email_1: 'miguel.carmona@edgebound.com',
          email_2: '',
          phone_1: '66353730',
          phone_2: '',
          fax_1: '',
          fax_2: '',
          same_shipping_and_billing_address: true,
          custom_info: [{
            key: 'departamentoid',
            value: '7',
          },
          {
            key: 'municipioid',
            value: '14',
          },
          {
            key: 'pobladoid',
            value: '648',
          },
          {
            key: 'referral_address',
            value: '',
          },
          ],
        },
        product: {
          part_number: 'I01_2598_194A',
          buyable: true,
          available: true,
          locales: {
            es_gt: {
              description: 'HUAWEI Y6II NEGRO (P)',
              long_description: 'HUAWEI Y6II NEGRO (P)',
              name: 'HUAWEI Y6II NEGRO (P)',
              seo: {
                title: 'huawei-y6ii-negro-p',
                name: 'huawei-y6ii-negro-p',
              },
              categories: [{
                slug: 'prepago/celulares',
              },
              {
                slug: 'prepago',
              },
              ],
            },
          },
          attributes: [{
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-marca',
            value: 'Huawei',
            type: 'descriptive',
          },
          {
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-color',
            value: 'Negro',
            type: 'descriptive',
          },
          {
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-chars-mp3',
            value: '1',
            type: 'descriptive',
          },
          ],
          position: 1.0,
          last_update: {
            $date: '2018-08-15T18:17:13.275Z',
          },
          items: [{
            part_number: 'I02_2598_195',
            buyable: true,
            available: true,
            image_correlator: 'I02.2598.195',
            locales: {
              es_gt: {
                description: 'HUAWEI Y6II NEGRO (P)',
                long_description: 'HUAWEI Y6II NEGRO (P)',
                name: 'HUAWEI Y6II NEGRO (P)',
                position: 1.0,
                seo: {
                  title: 'huawei-y6ii-negro-p',
                  name: 'huawei-y6ii-negro-p',
                },
              },
            },
            attributes: [{
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-marca',
              value: 'Huawei',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-color',
              value: 'Negro',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-chars-mp3',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'def-color',
              value: 'Negro',
              type: 'defining',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'def-capacidad',
              value: '16 GB',
              type: 'defining',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-a-name',
              value: 'Diseño',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-a-desc',
              value: 'Diseño',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-a-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-b-name',
              value: 'Pantalla',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-b-desc',
              value: 'Pantalla',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-b-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-a-name',
              value: 'Diseño',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-a-desc',
              value: 'Diseño',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-a-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-b-name',
              value: 'Cámara',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-b-desc',
              value: 'Cámara',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-c-name',
              value: 'Rendimiento',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-c-desc',
              value: 'Rendimiento',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-c-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-a-name',
              value: 'Qué contiene la caja',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-b-name',
              value: 'Términos y condiciones',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-b-desc',
              value: 'Adaptador AC. Cable USB. Guía de inicio rápido. Audífonos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pantalla',
              value: '5.5 pulgadas',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pila',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-camara',
              value: '13.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-peso',
              value: '168 gramos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-tamano',
              value: '15.4 centímetros',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-renovable',
              value: 'No',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-duracion',
              value: '520 minutos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-espera',
              value: '36000 minutos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-capacidad',
              value: '3000mAh (carga con cable 220 minutos)',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-dimensiones',
              value: '154.3 x 77.1 x 8.45 mm',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-peso',
              value: '168 gramos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-pantalla',
              value: '5.5 Pulgadas',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-memoria',
              value: '16.0 GB',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-memoria-ext',
              value: 'Micro SD hasta 128GB',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-correo-soportado',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sistema-operativo',
              value: 'Android 6.0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sistema-operativo-version',
              value: 'Marshmallow',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-procesador',
              value: '1.2 GHz Octa Core',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sim',
              value: 'Nano USIM',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-videollamada',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-prueba-agua',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-trasera',
              value: '13.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-frontal',
              value: '8.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-flash',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-enfoque',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-hd',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-video',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-musica',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-radio',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-datos',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-banda',
              value: 'LTE',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth-st',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-wifi',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-gps',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-3g4g',
              value: 'NoSi',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-35mm',
              value: '3.5 mm',
              type: 'descriptive',
            },
            ],
            pricing: {
              gtq: {
                list_price: 200.0,
                offer_price: 200.0,
              },
            },
            position: 1.0,
            external_referer: '373020',
            images: [
              '/I02.2598.195/I02.2598.195_1.jpg',
              '/I02.2598.195/I02.2598.195_2.jpg',
              '/I02.2598.195/I02.2598.195_3.jpg',
              '/I02.2598.195/I02.2598.195_4.jpg',
              '/I02.2598.195/I02.2598.195_5.jpg',
              '/I02.2598.195/I02.2598.195_6.jpg',
              '/I02.2598.195/I02.2598.195_7.jpg',
              '/I02.2598.195/I02.2598.195_8.jpg',
            ],
          }],
        },
      }],
      checkout_date: {
        $date: '2018-03-28T16:58:55.000Z',
      },
      tracking_info: {
        shipments: [
          {
            tracking_url: 'https://www.cargoexpreso.com/tracking/?guia=',
            tracking_code: '1234',
            courier: 'cargoexpreso',
            items: 'List<Item>',
          },
          {
            tracking_url: 'https://www.cargoexpreso.com/tracking/?guia=',
            tracking_code: '4567',
            courier: 'cargoexpreso',
            items: 'List<Item>',
          },
        ],
        events: [
          {
            status: 'PENDING',
            tracking_code: '1234',
            description: '',
            location: '',
            timestamp: '1534262545',
          },
          {
            status: 'PROCESS',
            tracking_code: '4567',
            description: '',
            location: '',
            timestamp: '1534292545',
          },
        ],
      },
    },
    {
      external_referer: '584066981911',
      status: 'Processing',
      last_update: {
        $date: '2018-02-20T18:31:30.000Z',
      },
      amount: {
        gtq: {
          grand_total: '300',
          total_sales_tax: '0',
          total_shipping_charge: '0',
          total_shipping_tax: '0',
          total_product_price: '300',
          total_adjustment: '0',
          adjustments: [],
        },
      },
      same_shipping_and_billing_address: false,
      billing_info: {
        nickname: 'Facturacion',
        address_type: 'Billing',
        external_referer: '528490515159',
        first_name: 'Rosa Maria',
        last_name: 'Campuzano Ruiz',
        address_line_1: 'Andador 43',
        address_line_2: 'San Gabriel Pansuj',
        address_line_3: '',
        city: 'Alta Verapaz',
        state_or_province_name: 'Salama',
        country: 'GT',
        postal_code: '00000',
        email_1: 'miguel.carmona@edgebound.com',
        email_2: '',
        phone_1: '2211221122',
        phone_2: '',
        fax_1: '1234567890124',
        fax_2: '',
        same_shipping_and_billing_address: true,
        custom_info: [],
      },
      promo_codes: [],
      items: [{
        part_number: 'I02_2598_194',
        quantity: '1',
        free_gift: false,
        amount: {
          gtq: {
            unit_price: '200',
            total_items: '200',
            total_adjustment: '0',
            adjustment: {},
            sales_tax: '0',
            shipping_charge: '0',
            shipping_tax: '0',
          },
        },
        item_status: {
          status: 'P',
          inventory: 'Available',
          fulfillment: 'Unreleased',
        },
        fulfillment_info: {
          available_date: {
            $date: '2018-08-20T18:27:56.193Z',
          },
          expected_ship_date: {
            $date: '2018-08-20T18:28:36.296Z',
          },
        },
        fulfillment_center: {
          id: '13901',
          name: 'clarogt',
        },
        shipping_info: {
          nickname: 'Envio',
          address_type: 'Shipping',
          external_referer: '528488926598',
          first_name: 'Rosa Maria',
          last_name: 'Campuzano Ruiz',
          address_line_1: 'Andador 43',
          address_line_2: 'San Gabriel Pansuj',
          address_line_3: '',
          city: 'Alta Verapaz',
          state_or_province_name: 'Salama',
          country: 'GT',
          postal_code: '00000',
          email_1: 'miguel.carmona@edgebound.com',
          email_2: '',
          phone_1: '2211221122',
          phone_2: '',
          fax_1: '1234567890124',
          fax_2: '',
          same_shipping_and_billing_address: true,
          custom_info: [{
            key: 'allowed_recipient_1',
            value: 'Arturo Serda',
          },
          {
            key: 'allowed_recipient_2',
            value: 'Roberto Bolaños',
          },
          {
            key: 'referral_address',
            value: 'Edificio azul',
          },
          {
            key: 'departamentoid',
            value: '1',
          },
          {
            key: 'municipioid',
            value: '1',
          },
          {
            key: 'pobladoid',
            value: '1014',
          },
          ],
        },
        product: {
          part_number: 'I01_2598_194A',
          buyable: true,
          available: true,
          locales: {
            es_gt: {
              description: 'HUAWEI Y6II NEGRO (P)',
              long_description: 'HUAWEI Y6II NEGRO (P)',
              name: 'HUAWEI Y6II NEGRO (P)',
              seo: {
                title: 'huawei-y6ii-negro-p',
                name: 'huawei-y6ii-negro-p',
              },
              categories: [{
                slug: 'prepago/celulares',
              },
              {
                slug: 'prepago',
              },
              ],
            },
          },
          attributes: [{
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-marca',
            value: 'Huawei',
            type: 'descriptive',
          },
          {
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-color',
            value: 'Negro',
            type: 'descriptive',
          },
          {
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-chars-mp3',
            value: '1',
            type: 'descriptive',
          },
          ],
          position: 1.0,
          last_update: {
            $date: '2018-08-15T18:17:13.275Z',
          },
          items: [{
            part_number: 'I02_2598_194',
            buyable: true,
            available: true,
            image_correlator: 'I02.2598.194',
            locales: {
              es_gt: {
                description: 'HUAWEI Y6II BLANCO (P)',
                long_description: 'HUAWEI Y6II BLANCO (P)',
                name: 'HUAWEI Y6II BLANCO (P)',
                position: 1.0,
                seo: {
                  title: 'huawei-y6ii-blanco-p',
                  name: 'huawei-y6ii-blanco-p',
                },
              },
            },
            attributes: [{
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-marca',
              value: 'Huawei',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-color',
              value: 'Blanco',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-chars-mp3',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'def-color',
              value: 'Blanco',
              type: 'defining',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'def-capacidad',
              value: '16 GB',
              type: 'defining',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-a-name',
              value: 'Diseño',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-a-desc',
              value: 'Diseño',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-a-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-b-name',
              value: 'Pantalla',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-b-desc',
              value: 'Pantalla',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-b-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-a-name',
              value: 'Diseño',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-a-desc',
              value: 'Diseño',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-a-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-b-name',
              value: 'Cámara',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-b-desc',
              value: 'Cámara',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-c-name',
              value: 'Rendimiento',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-c-desc',
              value: 'Rendimiento',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-c-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-a-name',
              value: 'Qué contiene la caja',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-b-name',
              value: 'Términos y condiciones',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-b-desc',
              value: 'Adaptador AC. Cable USB. Guía de inicio rápido. Audífonos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pantalla',
              value: '5.5 pulgadas',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pila',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-camara',
              value: '13.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-peso',
              value: '168 gramos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-tamano',
              value: '15.4 centímetros',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-renovable',
              value: 'No',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-duracion',
              value: '520 minutos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-espera',
              value: '36000 minutos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-capacidad',
              value: '3000mAh (carga con cable 220 minutos)',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-dimensiones',
              value: '154.3 x 77.1 x 8.45 mm',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-peso',
              value: '168 gramos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-pantalla',
              value: '5.5 Pulgadas',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-memoria',
              value: '16.0 GB',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-memoria-ext',
              value: 'Micro SD hasta 128GB',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-correo-soportado',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sistema-operativo',
              value: 'Android 6.0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sistema-operativo-version',
              value: 'Marshmallow',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-procesador',
              value: '1.2 GHz Octa Core',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sim',
              value: 'Nano USIM',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-videollamada',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-prueba-agua',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-trasera',
              value: '13.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-frontal',
              value: '8.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-flash',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-enfoque',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-hd',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-video',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-musica',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-radio',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-datos',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-banda',
              value: 'LTE',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth-st',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-wifi',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-gps',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-3g4g',
              value: 'NoSi',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-35mm',
              value: '3.5 mm',
              type: 'descriptive',
            },
            ],
            pricing: {
              gtq: {
                list_price: 200.0,
                offer_price: 200.0,
              },
            },
            position: 1.0,
            external_referer: '373021',
            images: [
              '/I02.2598.194/I02.2598.194_1.jpg',
              '/I02.2598.194/I02.2598.194_2.jpg',
              '/I02.2598.194/I02.2598.194_3.jpg',
              '/I02.2598.194/I02.2598.194_4.jpg',
              '/I02.2598.194/I02.2598.194_5.jpg',
              '/I02.2598.194/I02.2598.194_7.jpg',
              '/I02.2598.194/I02.2598.194_8.jpg',
            ],
          }],
        },
      },
      {
        part_number: 'I10_0002_020',
        quantity: '1',
        free_gift: false,
        amount: {
          gtq: {
            unit_price: '100',
            total_items: '100',
            total_adjustment: '0',
            adjustment: {},
            sales_tax: '0',
            shipping_charge: '0',
            shipping_tax: '0',
          },
        },
        item_status: {
          status: 'P',
          inventory: 'Available',
          fulfillment: 'Unreleased',
        },
        fulfillment_info: {
          available_date: {
            $date: '2018-08-20T18:27:56.194Z',
          },
          expected_ship_date: {
            $date: '2018-08-20T18:28:36.300Z',
          },
        },
        fulfillment_center: {
          id: '13901',
          name: 'clarogt',
        },
        shipping_info: {
          nickname: 'Envio',
          address_type: 'Shipping',
          external_referer: '528488926598',
          first_name: 'Rosa Maria',
          last_name: 'Campuzano Ruiz',
          address_line_1: 'Andador 43',
          address_line_2: 'San Gabriel Pansuj',
          address_line_3: '',
          city: 'Alta Verapaz',
          state_or_province_name: 'Salama',
          country: 'GT',
          postal_code: '00000',
          email_1: 'miguel.carmona@edgebound.com',
          email_2: '',
          phone_1: '2211221122',
          phone_2: '',
          fax_1: '1234567890124',
          fax_2: '',
          same_shipping_and_billing_address: true,
          custom_info: [{
            key: 'allowed_recipient_1',
            value: 'Arturo Serda',
          },
          {
            key: 'allowed_recipient_2',
            value: 'Roberto Bolaños',
          },
          {
            key: 'referral_address',
            value: 'Edificio azul',
          },
          {
            key: 'departamentoid',
            value: '1',
          },
          {
            key: 'municipioid',
            value: '1',
          },
          {
            key: 'pobladoid',
            value: '1014',
          },
          ],
        },
        product: {
          part_number: 'I10_0002_020A',
          locales: {
            es_gt: {
              description: 'TARJETA TELF MOVIL Q.10',
              long_description: 'TARJETA TELF MOVIL Q.10',
              name: 'TARJETA TELF MOVIL Q.10',
              seo: {
                title: 'tarjeta-telf-movil-q10',
                name: 'tarjeta-telf-movil-q10',
              },
              categories: [{
                slug: 'prepago/celulares',
              },
              {
                slug: 'prepago',
              },
              ],
            },
          },
          buyable: true,
          available: false,
          attributes: [{
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-chars-mp3',
            value: '0',
            type: 'descriptive',
          }],
          last_update: {
            $date: '2018-08-15T18:17:13.528Z',
          },
          items: [{
            part_number: 'I10_0002_020',
            buyable: true,
            available: false,
            locales: {
              es_gt: {
                description: 'TARJETA TELF MOVIL Q.10',
                long_description: 'TARJETA TELF MOVIL Q.10',
                name: 'TARJETA TELF MOVIL Q.10',
                position: 99.0,
                seo: {
                  title: 'tarjeta-telf-movil-q10',
                  name: 'tarjeta-telf-movil-q10',
                },
              },
            },
            attributes: [{
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-chars-mp3',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pila',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-correo-soportado',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-videollamada',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-prueba-agua',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-flash',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-enfoque',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-hd',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-video',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-musica',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-radio',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-datos',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth-st',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-wifi',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-gps',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-3g4g',
              value: 'NoNo',
              type: 'descriptive',
            },
            ],
            pricing: {
              gtq: {
                list_price: 100.0,
                offer_price: 100.0,
              },
            },
            image_correlator: 'I10.0002.020',
            external_referer: '372502',
            images: [
              '/I10.0002.020/I10.0002.020_1.jpg',
            ],
            position: 99.0,
          }],
          position: 99.0,
        },
      },
      ],
      checkout_date: {
        $date: '2018-02-20T18:31:30.000Z',
      },
      tracking_info: {
        shipments: [
          {
            tracking_url: 'https://www.cargoexpreso.com/tracking/?guia=',
            tracking_code: '1234',
            courier: 'cargoexpreso',
            items: 'List<Item>',
          },
          {
            tracking_url: 'https://www.cargoexpreso.com/tracking/?guia=',
            tracking_code: '4567',
            courier: 'cargoexpreso',
            items: 'List<Item>',
          },
        ],
        events: [
          {
            status: 'PENDING',
            tracking_code: '1234',
            description: '',
            location: '',
            timestamp: '1534262545',
          },
          {
            status: 'PROCESS',
            tracking_code: '4567',
            description: '',
            location: '',
            timestamp: '1534262545',
          },
          {
            status: 'UPDATE',
            tracking_code: '4567',
            description: '',
            location: '',
            timestamp: '1534462545',
          },
        ],
      },
    },
    {
      external_referer: '583021356539',
      status: 'Processing',
      last_update: {
        $date: '2018-01-17T22:35:04.000Z',
      },
      amount: {
        gtq: {
          grand_total: '300',
          total_sales_tax: '0',
          total_shipping_charge: '0',
          total_shipping_tax: '0',
          total_product_price: '300',
          total_adjustment: '0',
          adjustments: [],
        },
      },
      same_shipping_and_billing_address: false,
      billing_info: {
        nickname: 'Facturacion',
        address_type: 'Billing',
        external_referer: '527974025330',
        first_name: 'Angel Miguel',
        last_name: 'EB TEST',
        address_line_1: 'Calle No surtir',
        address_line_2: 'Vega Arriba\r',
        address_line_3: '',
        city: 'Chimaltenango',
        state_or_province_name: 'Chiquimula',
        country: 'GT',
        postal_code: '00000',
        email_1: 'miguel.carmona@edgebound.com',
        email_2: '',
        phone_1: '3434343434',
        phone_2: '',
        fax_1: '1234567890555',
        fax_2: '',
        same_shipping_and_billing_address: true,
        custom_info: [],
      },
      promo_codes: [],
      items: [{
        part_number: 'I02_2598_194',
        quantity: '1',
        free_gift: false,
        amount: {
          gtq: {
            unit_price: '200',
            total_items: '200',
            total_adjustment: '0',
            adjustment: {},
            sales_tax: '0',
            shipping_charge: '0',
            shipping_tax: '0',
          },
        },
        item_status: {
          status: 'P',
          inventory: 'Available',
          fulfillment: 'Unreleased',
        },
        fulfillment_info: {
          available_date: {
            $date: '2018-08-17T22:32:35.326Z',
          },
          expected_ship_date: {
            $date: '2018-08-17T22:33:10.905Z',
          },
        },
        fulfillment_center: {
          id: '13901',
          name: 'clarogt',
        },
        shipping_info: {
          nickname: 'Envio',
          address_type: 'Shipping',
          external_referer: '527973583560',
          first_name: 'Angel Miguel',
          last_name: 'EB TEST',
          address_line_1: 'Calle No surtir',
          address_line_2: 'Vega Arriba\r',
          address_line_3: '',
          city: 'Chimaltenango',
          state_or_province_name: 'Chiquimula',
          country: 'GT',
          postal_code: '00000',
          email_1: 'miguel.carmona@edgebound.com',
          email_2: '',
          phone_1: '3434343434',
          phone_2: '',
          fax_1: '1234567890555',
          fax_2: '',
          same_shipping_and_billing_address: true,
          custom_info: [{
            key: 'allowed_recipient_1',
            value: 'Salvador Calles',
          },
          {
            key: 'allowed_recipient_2',
            value: 'Alfredo Sarate',
          },
          {
            key: 'referral_address',
            value: 'Edificio rojo',
          },
          {
            key: 'departamentoid',
            value: '3',
          },
          {
            key: 'municipioid',
            value: '1',
          },
          {
            key: 'pobladoid',
            value: '866',
          },
          ],
        },
        product: {
          part_number: 'I01_2598_194A',
          buyable: true,
          available: true,
          locales: {
            es_gt: {
              description: 'HUAWEI Y6II NEGRO (P)',
              long_description: 'HUAWEI Y6II NEGRO (P)',
              name: 'HUAWEI Y6II NEGRO (P)',
              seo: {
                title: 'huawei-y6ii-negro-p',
                name: 'huawei-y6ii-negro-p',
              },
              categories: [{
                slug: 'prepago/celulares',
              },
              {
                slug: 'prepago',
              },
              ],
            },
          },
          attributes: [{
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-marca',
            value: 'Huawei',
            type: 'descriptive',
          },
          {
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-color',
            value: 'Negro',
            type: 'descriptive',
          },
          {
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-chars-mp3',
            value: '1',
            type: 'descriptive',
          },
          ],
          position: 1.0,
          last_update: {
            $date: '2018-08-15T18:17:13.275Z',
          },
          items: [{
            part_number: 'I02_2598_194',
            buyable: true,
            available: true,
            image_correlator: 'I02.2598.194',
            locales: {
              es_gt: {
                description: 'HUAWEI Y6II BLANCO (P)',
                long_description: 'HUAWEI Y6II BLANCO (P)',
                name: 'HUAWEI Y6II BLANCO (P)',
                position: 1.0,
                seo: {
                  title: 'huawei-y6ii-blanco-p',
                  name: 'huawei-y6ii-blanco-p',
                },
              },
            },
            attributes: [{
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-marca',
              value: 'Huawei',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-color',
              value: 'Blanco',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-chars-mp3',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'def-color',
              value: 'Blanco',
              type: 'defining',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'def-capacidad',
              value: '16 GB',
              type: 'defining',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-a-name',
              value: 'Diseño',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-a-desc',
              value: 'Diseño',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-a-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-b-name',
              value: 'Pantalla',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-b-desc',
              value: 'Pantalla',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-b-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-a-name',
              value: 'Diseño',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-a-desc',
              value: 'Diseño',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-a-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-b-name',
              value: 'Cámara',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-b-desc',
              value: 'Cámara',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-c-name',
              value: 'Rendimiento',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-c-desc',
              value: 'Rendimiento',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-c-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-a-name',
              value: 'Qué contiene la caja',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-b-name',
              value: 'Términos y condiciones',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-b-desc',
              value: 'Adaptador AC. Cable USB. Guía de inicio rápido. Audífonos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pantalla',
              value: '5.5 pulgadas',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pila',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-camara',
              value: '13.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-peso',
              value: '168 gramos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-tamano',
              value: '15.4 centímetros',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-renovable',
              value: 'No',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-duracion',
              value: '520 minutos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-espera',
              value: '36000 minutos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-capacidad',
              value: '3000mAh (carga con cable 220 minutos)',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-dimensiones',
              value: '154.3 x 77.1 x 8.45 mm',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-peso',
              value: '168 gramos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-pantalla',
              value: '5.5 Pulgadas',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-memoria',
              value: '16.0 GB',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-memoria-ext',
              value: 'Micro SD hasta 128GB',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-correo-soportado',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sistema-operativo',
              value: 'Android 6.0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sistema-operativo-version',
              value: 'Marshmallow',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-procesador',
              value: '1.2 GHz Octa Core',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sim',
              value: 'Nano USIM',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-videollamada',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-prueba-agua',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-trasera',
              value: '13.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-frontal',
              value: '8.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-flash',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-enfoque',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-hd',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-video',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-musica',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-radio',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-datos',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-banda',
              value: 'LTE',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth-st',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-wifi',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-gps',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-3g4g',
              value: 'NoSi',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-35mm',
              value: '3.5 mm',
              type: 'descriptive',
            },
            ],
            pricing: {
              gtq: {
                list_price: 200.0,
                offer_price: 200.0,
              },
            },
            position: 1.0,
            external_referer: '373021',
            images: [
              '/I02.2598.194/I02.2598.194_1.jpg',
              '/I02.2598.194/I02.2598.194_2.jpg',
              '/I02.2598.194/I02.2598.194_3.jpg',
              '/I02.2598.194/I02.2598.194_4.jpg',
              '/I02.2598.194/I02.2598.194_5.jpg',
              '/I02.2598.194/I02.2598.194_7.jpg',
              '/I02.2598.194/I02.2598.194_8.jpg',
            ],
          }],
        },
      },
      {
        part_number: 'I10_0002_020',
        quantity: '1',
        free_gift: false,
        amount: {
          gtq: {
            unit_price: '100',
            total_items: '100',
            total_adjustment: '0',
            adjustment: {},
            sales_tax: '0',
            shipping_charge: '0',
            shipping_tax: '0',
          },
        },
        item_status: {
          status: 'P',
          inventory: 'Available',
          fulfillment: 'Unreleased',
        },
        fulfillment_info: {
          available_date: {
            $date: '2018-08-17T22:32:35.326Z',
          },
          expected_ship_date: {
            $date: '2018-08-17T22:33:10.908Z',
          },
        },
        fulfillment_center: {
          id: '13901',
          name: 'clarogt',
        },
        shipping_info: {
          nickname: 'Envio',
          address_type: 'Shipping',
          external_referer: '527973583560',
          first_name: 'Angel Miguel',
          last_name: 'EB TEST',
          address_line_1: 'Calle No surtir',
          address_line_2: 'Vega Arriba\r',
          address_line_3: '',
          city: 'Chimaltenango',
          state_or_province_name: 'Chiquimula',
          country: 'GT',
          postal_code: '00000',
          email_1: 'miguel.carmona@edgebound.com',
          email_2: '',
          phone_1: '3434343434',
          phone_2: '',
          fax_1: '1234567890555',
          fax_2: '',
          same_shipping_and_billing_address: true,
          custom_info: [{
            key: 'allowed_recipient_1',
            value: 'Salvador Calles',
          },
          {
            key: 'allowed_recipient_2',
            value: 'Alfredo Sarate',
          },
          {
            key: 'referral_address',
            value: 'Edificio rojo',
          },
          {
            key: 'departamentoid',
            value: '3',
          },
          {
            key: 'municipioid',
            value: '1',
          },
          {
            key: 'pobladoid',
            value: '866',
          },
          ],
        },
        product: {
          part_number: 'I10_0002_020A',
          locales: {
            es_gt: {
              description: 'TARJETA TELF MOVIL Q.10',
              long_description: 'TARJETA TELF MOVIL Q.10',
              name: 'TARJETA TELF MOVIL Q.10',
              seo: {
                title: 'tarjeta-telf-movil-q10',
                name: 'tarjeta-telf-movil-q10',
              },
              categories: [{
                slug: 'prepago/celulares',
              },
              {
                slug: 'prepago',
              },
              ],
            },
          },
          buyable: true,
          available: false,
          attributes: [{
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-chars-mp3',
            value: '0',
            type: 'descriptive',
          }],
          last_update: {
            $date: '2018-08-15T18:17:13.528Z',
          },
          items: [{
            part_number: 'I10_0002_020',
            buyable: true,
            available: false,
            locales: {
              es_gt: {
                description: 'TARJETA TELF MOVIL Q.10',
                long_description: 'TARJETA TELF MOVIL Q.10',
                name: 'TARJETA TELF MOVIL Q.10',
                position: 99.0,
                seo: {
                  title: 'tarjeta-telf-movil-q10',
                  name: 'tarjeta-telf-movil-q10',
                },
              },
            },
            attributes: [{
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-chars-mp3',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pila',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-correo-soportado',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-videollamada',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-prueba-agua',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-flash',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-enfoque',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-hd',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-video',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-musica',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-radio',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-datos',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth-st',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-wifi',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-gps',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-3g4g',
              value: 'NoNo',
              type: 'descriptive',
            },
            ],
            pricing: {
              gtq: {
                list_price: 100.0,
                offer_price: 100.0,
              },
            },
            image_correlator: 'I10.0002.020',
            external_referer: '372502',
            images: [
              '/I10.0002.020/I10.0002.020_1.jpg',
            ],
            position: 99.0,
          }],
          position: 99.0,
        },
      },
      ],
      checkout_date: {
        $date: '2018-01-17T22:35:04.000Z',
      },
      tracking_info: {
        shipments: [
          {
            tracking_url: 'https://www.cargoexpreso.com/tracking/?guia=',
            tracking_code: '1234',
            courier: 'cargoexpreso',
            items: 'List<Item>',
          },
          {
            tracking_url: 'https://www.cargoexpreso.com/tracking/?guia=',
            tracking_code: '4567',
            courier: 'cargoexpreso',
            items: 'List<Item>',
          },
        ],
        events: [
          {
            status: 'PENDING',
            tracking_code: '1234',
            description: '',
            location: '',
            timestamp: '1534262545',
          },
          {
            status: 'PROCESS',
            tracking_code: '4567',
            description: '',
            location: '',
            timestamp: '1534262545',
          },
          {
            status: 'CANCELLED',
            tracking_code: '4567',
            description: '',
            location: '',
            timestamp: '1534462545',
          },
        ],
      },
    },
    {
      external_referer: '583019565336',
      status: 'Processing',
      last_update: {
        $date: '2018-04-17T18:52:06.000Z',
      },
      amount: {
        gtq: {
          grand_total: '300',
          total_sales_tax: '0',
          total_shipping_charge: '0',
          total_shipping_tax: '0',
          total_product_price: '300',
          total_adjustment: '0',
          adjustments: [],
        },
      },
      same_shipping_and_billing_address: false,
      billing_info: {
        nickname: 'Facturacion',
        address_type: 'Billing',
        external_referer: '527972026749',
        first_name: 'Alfredo Test',
        last_name: 'Mx Test',
        address_line_1: 'No Surtir calle',
        address_line_2: 'Cerro Colorado\r',
        address_line_3: '',
        city: 'El Progreso',
        state_or_province_name: 'Escuintla',
        country: 'GT',
        postal_code: '00000',
        email_1: 'miguel.carmona@edgebound.com',
        email_2: '',
        phone_1: '2211221122',
        phone_2: '',
        fax_1: '1234567890123',
        fax_2: '',
        same_shipping_and_billing_address: true,
        custom_info: [],
      },
      promo_codes: [],
      items: [{
        part_number: 'I02_2598_194',
        quantity: '1',
        free_gift: false,
        amount: {
          gtq: {
            unit_price: '200',
            total_items: '200',
            total_adjustment: '0',
            adjustment: {},
            sales_tax: '0',
            shipping_charge: '0',
            shipping_tax: '0',
          },
        },
        item_status: {
          status: 'P',
          inventory: 'Available',
          fulfillment: 'Unreleased',
        },
        fulfillment_info: {
          available_date: {
            $date: '2018-08-17T18:42:15.201Z',
          },
          expected_ship_date: {
            $date: '2018-08-17T18:42:47.717Z',
          },
        },
        fulfillment_center: {
          id: '13901',
          name: 'clarogt',
        },
        shipping_info: {
          nickname: 'Envio',
          address_type: 'Shipping',
          external_referer: '527971562587',
          first_name: 'Alfredo Test',
          last_name: 'Mx Test',
          address_line_1: 'No Surtir calle',
          address_line_2: 'Cerro Colorado\r',
          address_line_3: '',
          city: 'El Progreso',
          state_or_province_name: 'Escuintla',
          country: 'GT',
          postal_code: '00000',
          email_1: 'miguel.carmona@edgebound.com',
          email_2: '',
          phone_1: '2211221122',
          phone_2: '',
          fax_1: '1234567890123',
          fax_2: '',
          same_shipping_and_billing_address: true,
          custom_info: [{
            key: 'allowed_recipient_1',
            value: 'Salvador Calles',
          },
          {
            key: 'allowed_recipient_2',
            value: 'Sergio Venegas',
          },
          {
            key: 'referral_address',
            value: 'Edificio rojo',
          },
          {
            key: 'departamentoid',
            value: '5',
          },
          {
            key: 'municipioid',
            value: '1',
          },
          {
            key: 'pobladoid',
            value: '417',
          },
          ],
        },
        product: {
          part_number: 'I01_2598_194A',
          buyable: true,
          available: true,
          locales: {
            es_gt: {
              description: 'HUAWEI Y6II NEGRO (P)',
              long_description: 'HUAWEI Y6II NEGRO (P)',
              name: 'HUAWEI Y6II NEGRO (P)',
              seo: {
                title: 'huawei-y6ii-negro-p',
                name: 'huawei-y6ii-negro-p',
              },
              categories: [{
                slug: 'prepago/celulares',
              },
              {
                slug: 'prepago',
              },
              ],
            },
          },
          attributes: [{
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-marca',
            value: 'Huawei',
            type: 'descriptive',
          },
          {
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-color',
            value: 'Negro',
            type: 'descriptive',
          },
          {
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-chars-mp3',
            value: '1',
            type: 'descriptive',
          },
          ],
          position: 1.0,
          last_update: {
            $date: '2018-08-15T18:17:13.275Z',
          },
          items: [{
            part_number: 'I02_2598_194',
            buyable: true,
            available: true,
            image_correlator: 'I02.2598.194',
            locales: {
              es_gt: {
                description: 'HUAWEI Y6II BLANCO (P)',
                long_description: 'HUAWEI Y6II BLANCO (P)',
                name: 'HUAWEI Y6II BLANCO (P)',
                position: 1.0,
                seo: {
                  title: 'huawei-y6ii-blanco-p',
                  name: 'huawei-y6ii-blanco-p',
                },
              },
            },
            attributes: [{
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-marca',
              value: 'Huawei',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-color',
              value: 'Blanco',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-chars-mp3',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'def-color',
              value: 'Blanco',
              type: 'defining',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'def-capacidad',
              value: '16 GB',
              type: 'defining',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-a-name',
              value: 'Diseño',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-a-desc',
              value: 'Diseño',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-a-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-b-name',
              value: 'Pantalla',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-b-desc',
              value: 'Pantalla',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-b-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-a-name',
              value: 'Diseño',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-a-desc',
              value: 'Diseño',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-a-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-b-name',
              value: 'Cámara',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-b-desc',
              value: 'Cámara',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-c-name',
              value: 'Rendimiento',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-c-desc',
              value: 'Rendimiento',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-c-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-a-name',
              value: 'Qué contiene la caja',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-b-name',
              value: 'Términos y condiciones',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-b-desc',
              value: 'Adaptador AC. Cable USB. Guía de inicio rápido. Audífonos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pantalla',
              value: '5.5 pulgadas',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pila',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-camara',
              value: '13.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-peso',
              value: '168 gramos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-tamano',
              value: '15.4 centímetros',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-renovable',
              value: 'No',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-duracion',
              value: '520 minutos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-espera',
              value: '36000 minutos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-capacidad',
              value: '3000mAh (carga con cable 220 minutos)',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-dimensiones',
              value: '154.3 x 77.1 x 8.45 mm',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-peso',
              value: '168 gramos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-pantalla',
              value: '5.5 Pulgadas',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-memoria',
              value: '16.0 GB',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-memoria-ext',
              value: 'Micro SD hasta 128GB',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-correo-soportado',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sistema-operativo',
              value: 'Android 6.0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sistema-operativo-version',
              value: 'Marshmallow',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-procesador',
              value: '1.2 GHz Octa Core',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sim',
              value: 'Nano USIM',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-videollamada',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-prueba-agua',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-trasera',
              value: '13.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-frontal',
              value: '8.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-flash',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-enfoque',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-hd',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-video',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-musica',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-radio',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-datos',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-banda',
              value: 'LTE',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth-st',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-wifi',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-gps',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-3g4g',
              value: 'NoSi',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-35mm',
              value: '3.5 mm',
              type: 'descriptive',
            },
            ],
            pricing: {
              gtq: {
                list_price: 200.0,
                offer_price: 200.0,
              },
            },
            position: 1.0,
            external_referer: '373021',
            images: [
              '/I02.2598.194/I02.2598.194_1.jpg',
              '/I02.2598.194/I02.2598.194_2.jpg',
              '/I02.2598.194/I02.2598.194_3.jpg',
              '/I02.2598.194/I02.2598.194_4.jpg',
              '/I02.2598.194/I02.2598.194_5.jpg',
              '/I02.2598.194/I02.2598.194_7.jpg',
              '/I02.2598.194/I02.2598.194_8.jpg',
            ],
          }],
        },
      },
      {
        part_number: 'I10_0002_020',
        quantity: '1',
        free_gift: false,
        amount: {
          gtq: {
            unit_price: '100',
            total_items: '100',
            total_adjustment: '0',
            adjustment: {},
            sales_tax: '0',
            shipping_charge: '0',
            shipping_tax: '0',
          },
        },
        item_status: {
          status: 'P',
          inventory: 'Available',
          fulfillment: 'Unreleased',
        },
        fulfillment_info: {
          available_date: {
            $date: '2018-08-17T18:42:15.201Z',
          },
          expected_ship_date: {
            $date: '2018-08-17T18:42:47.720Z',
          },
        },
        fulfillment_center: {
          id: '13901',
          name: 'clarogt',
        },
        shipping_info: {
          nickname: 'Envio',
          address_type: 'Shipping',
          external_referer: '527971562587',
          first_name: 'Alfredo Test',
          last_name: 'Mx Test',
          address_line_1: 'No Surtir calle',
          address_line_2: 'Cerro Colorado\r',
          address_line_3: '',
          city: 'El Progreso',
          state_or_province_name: 'Escuintla',
          country: 'GT',
          postal_code: '00000',
          email_1: 'miguel.carmona@edgebound.com',
          email_2: '',
          phone_1: '2211221122',
          phone_2: '',
          fax_1: '1234567890123',
          fax_2: '',
          same_shipping_and_billing_address: true,
          custom_info: [{
            key: 'allowed_recipient_1',
            value: 'Salvador Calles',
          },
          {
            key: 'allowed_recipient_2',
            value: 'Sergio Venegas',
          },
          {
            key: 'referral_address',
            value: 'Edificio rojo',
          },
          {
            key: 'departamentoid',
            value: '5',
          },
          {
            key: 'municipioid',
            value: '1',
          },
          {
            key: 'pobladoid',
            value: '417',
          },
          ],
        },
        product: {
          part_number: 'I10_0002_020A',
          locales: {
            es_gt: {
              description: 'TARJETA TELF MOVIL Q.10',
              long_description: 'TARJETA TELF MOVIL Q.10',
              name: 'TARJETA TELF MOVIL Q.10',
              seo: {
                title: 'tarjeta-telf-movil-q10',
                name: 'tarjeta-telf-movil-q10',
              },
              categories: [{
                slug: 'prepago/celulares',
              },
              {
                slug: 'prepago',
              },
              ],
            },
          },
          buyable: true,
          available: false,
          attributes: [{
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-chars-mp3',
            value: '0',
            type: 'descriptive',
          }],
          last_update: {
            $date: '2018-08-15T18:17:13.528Z',
          },
          items: [{
            part_number: 'I10_0002_020',
            buyable: true,
            available: false,
            locales: {
              es_gt: {
                description: 'TARJETA TELF MOVIL Q.10',
                long_description: 'TARJETA TELF MOVIL Q.10',
                name: 'TARJETA TELF MOVIL Q.10',
                position: 99.0,
                seo: {
                  title: 'tarjeta-telf-movil-q10',
                  name: 'tarjeta-telf-movil-q10',
                },
              },
            },
            attributes: [{
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-chars-mp3',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pila',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-correo-soportado',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-videollamada',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-prueba-agua',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-flash',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-enfoque',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-hd',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-video',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-musica',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-radio',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-datos',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth-st',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-wifi',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-gps',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-3g4g',
              value: 'NoNo',
              type: 'descriptive',
            },
            ],
            pricing: {
              gtq: {
                list_price: 100.0,
                offer_price: 100.0,
              },
            },
            image_correlator: 'I10.0002.020',
            external_referer: '372502',
            images: [
              '/I10.0002.020/I10.0002.020_1.jpg',
            ],
            position: 99.0,
          }],
          position: 99.0,
        },
      },
      ],
      checkout_date: {
        $date: '2018-04-17T18:52:06.000Z',
      },
      tracking_info: {
        shipments: [
          {
            tracking_url: 'https://www.cargoexpreso.com/tracking/?guia=',
            tracking_code: '1234',
            courier: 'cargoexpreso',
            items: 'List<Item>',
          },
          {
            tracking_url: 'https://www.cargoexpreso.com/tracking/?guia=',
            tracking_code: '4567',
            courier: 'cargoexpreso',
            items: 'List<Item>',
          },
        ],
        events: [
          {
            status: 'PROCESS',
            tracking_code: '1234',
            description: '',
            location: '',
            timestamp: '1534262545',
          },
          {
            status: 'SHIPPING',
            tracking_code: '4567',
            description: '',
            location: '',
            timestamp: '1534262545',
          },
          {
            status: 'DELIVERED',
            tracking_code: '4567',
            description: '',
            location: '',
            timestamp: '1534462545',
          },
        ],
      },
    },
    {
      external_referer: '581983906094',
      status: 'Processing',
      last_update: {
        $date: '2017-12-17T07:00:52.000Z',
      },
      amount: {
        gtq: {
          grand_total: '300',
          total_sales_tax: '0',
          total_shipping_charge: '0',
          total_shipping_tax: '0',
          total_product_price: '300',
          total_adjustment: '0',
          adjustments: [],
        },
      },
      same_shipping_and_billing_address: false,
      billing_info: {
        nickname: 'Facturacion',
        address_type: 'Billing',
        external_referer: '527470226944',
        first_name: 'Aramis',
        last_name: 'Mx Test',
        address_line_1: 'Calle sin surtir',
        address_line_2: 'San Jose Del Golfo\r',
        address_line_3: '',
        city: 'Escuintla',
        state_or_province_name: 'San Jose Pinula',
        country: 'GT',
        postal_code: '00000',
        email_1: 'miguel.carmona@edgebound.com',
        email_2: '',
        phone_1: '2211221122',
        phone_2: '',
        fax_1: '1234567890123',
        fax_2: '',
        same_shipping_and_billing_address: true,
        custom_info: [],
      },
      promo_codes: [],
      items: [{
        part_number: 'I02_2598_194',
        quantity: '1',
        free_gift: false,
        amount: {
          gtq: {
            unit_price: '200',
            total_items: '200',
            total_adjustment: '0',
            adjustment: {},
            sales_tax: '0',
            shipping_charge: '0',
            shipping_tax: '0',
          },
        },
        item_status: {
          status: 'P',
          inventory: 'Available',
          fulfillment: 'Unreleased',
        },
        fulfillment_info: {
          available_date: {
            $date: '2018-08-17T06:58:33.769Z',
          },
          expected_ship_date: {
            $date: '2018-08-17T06:58:33.800Z',
          },
        },
        fulfillment_center: {
          id: '13901',
          name: 'clarogt',
        },
        shipping_info: {
          nickname: 'Envio',
          address_type: 'Shipping',
          external_referer: '527468560137',
          first_name: 'Aramis',
          last_name: 'Mx Test',
          address_line_1: 'Calle sin surtir',
          address_line_2: 'San Jose Del Golfo\r',
          address_line_3: '',
          city: 'Escuintla',
          state_or_province_name: 'San Jose Pinula',
          country: 'GT',
          postal_code: '00000',
          email_1: 'miguel.carmona@edgebound.com',
          email_2: '',
          phone_1: '2211221122',
          phone_2: '',
          fax_1: '1234567890123',
          fax_2: '',
          same_shipping_and_billing_address: true,
          custom_info: [{
            key: 'allowed_recipient_1',
            value: 'Salvador Calles',
          },
          {
            key: 'allowed_recipient_2',
            value: 'Sergio Venegas',
          },
          {
            key: 'referral_address',
            value: 'Edificio rojo',
          },
          {
            key: 'departamentoid',
            value: '6',
          },
          {
            key: 'municipioid',
            value: '3',
          },
          {
            key: 'pobladoid',
            value: '661',
          },
          ],
        },
        product: {
          part_number: 'I01_2598_194A',
          buyable: true,
          available: true,
          locales: {
            es_gt: {
              description: 'HUAWEI Y6II NEGRO (P)',
              long_description: 'HUAWEI Y6II NEGRO (P)',
              name: 'HUAWEI Y6II NEGRO (P)',
              seo: {
                title: 'huawei-y6ii-negro-p',
                name: 'huawei-y6ii-negro-p',
              },
              categories: [{
                slug: 'prepago/celulares',
              },
              {
                slug: 'prepago',
              },
              ],
            },
          },
          attributes: [{
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-marca',
            value: 'Huawei',
            type: 'descriptive',
          },
          {
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-color',
            value: 'Negro',
            type: 'descriptive',
          },
          {
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-chars-mp3',
            value: '1',
            type: 'descriptive',
          },
          ],
          position: 1.0,
          last_update: {
            $date: '2018-08-15T18:17:13.275Z',
          },
          items: [{
            part_number: 'I02_2598_194',
            buyable: true,
            available: true,
            image_correlator: 'I02.2598.194',
            locales: {
              es_gt: {
                description: 'HUAWEI Y6II BLANCO (P)',
                long_description: 'HUAWEI Y6II BLANCO (P)',
                name: 'HUAWEI Y6II BLANCO (P)',
                position: 1.0,
                seo: {
                  title: 'huawei-y6ii-blanco-p',
                  name: 'huawei-y6ii-blanco-p',
                },
              },
            },
            attributes: [{
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-marca',
              value: 'Huawei',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-color',
              value: 'Blanco',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-chars-mp3',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'def-color',
              value: 'Blanco',
              type: 'defining',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'def-capacidad',
              value: '16 GB',
              type: 'defining',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-a-name',
              value: 'Diseño',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-a-desc',
              value: 'Diseño',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-a-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-b-name',
              value: 'Pantalla',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-b-desc',
              value: 'Pantalla',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-b-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-a-name',
              value: 'Diseño',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-a-desc',
              value: 'Diseño',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-a-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-b-name',
              value: 'Cámara',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-b-desc',
              value: 'Cámara',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-c-name',
              value: 'Rendimiento',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-c-desc',
              value: 'Rendimiento',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-c-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-a-name',
              value: 'Qué contiene la caja',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-b-name',
              value: 'Términos y condiciones',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-b-desc',
              value: 'Adaptador AC. Cable USB. Guía de inicio rápido. Audífonos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pantalla',
              value: '5.5 pulgadas',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pila',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-camara',
              value: '13.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-peso',
              value: '168 gramos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-tamano',
              value: '15.4 centímetros',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-renovable',
              value: 'No',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-duracion',
              value: '520 minutos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-espera',
              value: '36000 minutos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-capacidad',
              value: '3000mAh (carga con cable 220 minutos)',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-dimensiones',
              value: '154.3 x 77.1 x 8.45 mm',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-peso',
              value: '168 gramos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-pantalla',
              value: '5.5 Pulgadas',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-memoria',
              value: '16.0 GB',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-memoria-ext',
              value: 'Micro SD hasta 128GB',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-correo-soportado',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sistema-operativo',
              value: 'Android 6.0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sistema-operativo-version',
              value: 'Marshmallow',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-procesador',
              value: '1.2 GHz Octa Core',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sim',
              value: 'Nano USIM',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-videollamada',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-prueba-agua',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-trasera',
              value: '13.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-frontal',
              value: '8.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-flash',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-enfoque',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-hd',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-video',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-musica',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-radio',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-datos',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-banda',
              value: 'LTE',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth-st',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-wifi',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-gps',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-3g4g',
              value: 'NoSi',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-35mm',
              value: '3.5 mm',
              type: 'descriptive',
            },
            ],
            pricing: {
              gtq: {
                list_price: 200.0,
                offer_price: 200.0,
              },
            },
            position: 1.0,
            external_referer: '373021',
            images: [
              '/I02.2598.194/I02.2598.194_1.jpg',
              '/I02.2598.194/I02.2598.194_2.jpg',
              '/I02.2598.194/I02.2598.194_3.jpg',
              '/I02.2598.194/I02.2598.194_4.jpg',
              '/I02.2598.194/I02.2598.194_5.jpg',
              '/I02.2598.194/I02.2598.194_7.jpg',
              '/I02.2598.194/I02.2598.194_8.jpg',
            ],
          }],
        },
      },
      {
        part_number: 'I10_0002_020',
        quantity: '1',
        free_gift: false,
        amount: {
          gtq: {
            unit_price: '100',
            total_items: '100',
            total_adjustment: '0',
            adjustment: {},
            sales_tax: '0',
            shipping_charge: '0',
            shipping_tax: '0',
          },
        },
        item_status: {
          status: 'P',
          inventory: 'Available',
          fulfillment: 'Unreleased',
        },
        fulfillment_info: {
          available_date: {
            $date: '2018-08-17T06:58:34.355Z',
          },
          expected_ship_date: {
            $date: '2018-08-17T06:58:34.383Z',
          },
        },
        fulfillment_center: {
          id: '13901',
          name: 'clarogt',
        },
        shipping_info: {
          nickname: 'Envio',
          address_type: 'Shipping',
          external_referer: '527468560137',
          first_name: 'Aramis',
          last_name: 'Mx Test',
          address_line_1: 'Calle sin surtir',
          address_line_2: 'San Jose Del Golfo\r',
          address_line_3: '',
          city: 'Escuintla',
          state_or_province_name: 'San Jose Pinula',
          country: 'GT',
          postal_code: '00000',
          email_1: 'miguel.carmona@edgebound.com',
          email_2: '',
          phone_1: '2211221122',
          phone_2: '',
          fax_1: '1234567890123',
          fax_2: '',
          same_shipping_and_billing_address: true,
          custom_info: [{
            key: 'allowed_recipient_1',
            value: 'Salvador Calles',
          },
          {
            key: 'allowed_recipient_2',
            value: 'Sergio Venegas',
          },
          {
            key: 'referral_address',
            value: 'Edificio rojo',
          },
          {
            key: 'departamentoid',
            value: '6',
          },
          {
            key: 'municipioid',
            value: '3',
          },
          {
            key: 'pobladoid',
            value: '661',
          },
          ],
        },
        product: {
          part_number: 'I10_0002_020A',
          locales: {
            es_gt: {
              description: 'TARJETA TELF MOVIL Q.10',
              long_description: 'TARJETA TELF MOVIL Q.10',
              name: 'TARJETA TELF MOVIL Q.10',
              seo: {
                title: 'tarjeta-telf-movil-q10',
                name: 'tarjeta-telf-movil-q10',
              },
              categories: [{
                slug: 'prepago/celulares',
              },
              {
                slug: 'prepago',
              },
              ],
            },
          },
          buyable: true,
          available: false,
          attributes: [{
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-chars-mp3',
            value: '0',
            type: 'descriptive',
          }],
          last_update: {
            $date: '2018-08-15T18:17:13.528Z',
          },
          items: [{
            part_number: 'I10_0002_020',
            buyable: true,
            available: false,
            locales: {
              es_gt: {
                description: 'TARJETA TELF MOVIL Q.10',
                long_description: 'TARJETA TELF MOVIL Q.10',
                name: 'TARJETA TELF MOVIL Q.10',
                position: 99.0,
                seo: {
                  title: 'tarjeta-telf-movil-q10',
                  name: 'tarjeta-telf-movil-q10',
                },
              },
            },
            attributes: [{
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-chars-mp3',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pila',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-correo-soportado',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-videollamada',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-prueba-agua',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-flash',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-enfoque',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-hd',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-video',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-musica',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-radio',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-datos',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth-st',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-wifi',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-gps',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-3g4g',
              value: 'NoNo',
              type: 'descriptive',
            },
            ],
            pricing: {
              gtq: {
                list_price: 100.0,
                offer_price: 100.0,
              },
            },
            image_correlator: 'I10.0002.020',
            external_referer: '372502',
            images: [
              '/I10.0002.020/I10.0002.020_1.jpg',
            ],
            position: 99.0,
          }],
          position: 99.0,
        },
      },
      ],
      checkout_date: {
        $date: '2017-12-17T07:00:52.000Z',
      },
      tracking_info: {
        shipments: [
          {
            tracking_url: 'https://www.cargoexpreso.com/tracking/?guia=',
            tracking_code: '1234',
            courier: 'cargoexpreso',
            items: 'List<Item>',
          },
          {
            tracking_url: 'https://www.cargoexpreso.com/tracking/?guia=',
            tracking_code: '4567',
            courier: 'cargoexpreso',
            items: 'List<Item>',
          },
        ],
        events: [
          {
            status: 'PENDING',
            tracking_code: '1234',
            description: '',
            location: '',
            timestamp: '1534262545',
          },
          {
            status: 'PROCESS',
            tracking_code: '4567',
            description: '',
            location: '',
            timestamp: '1534262545',
          },
          {
            status: 'SHIPPING',
            tracking_code: '4567',
            description: '',
            location: '',
            timestamp: '1534462545',
          },
        ],
      },
    },
    {
      external_referer: '581981975246',
      status: 'Processing',
      last_update: {
        $date: '2017-08-17T06:15:14.000Z',
      },
      amount: {
        gtq: {
          grand_total: '300',
          total_sales_tax: '0',
          total_shipping_charge: '0',
          total_shipping_tax: '0',
          total_product_price: '300',
          total_adjustment: '0',
          adjustments: [],
        },
      },
      same_shipping_and_billing_address: false,
      billing_info: {
        nickname: 'Facturacion',
        address_type: 'Billing',
        external_referer: '527467529475',
        first_name: 'Alfonso',
        last_name: 'Tellez Test',
        address_line_1: 'No surtir 22',
        address_line_2: 'Siquinala\r',
        address_line_3: '',
        city: 'El Progreso',
        state_or_province_name: 'La Democracia',
        country: 'GT',
        postal_code: '00000',
        email_1: 'miguel.carmona@edgebound.com',
        email_2: '',
        phone_1: '3322332233',
        phone_2: '',
        fax_1: '1234567890123',
        fax_2: '',
        same_shipping_and_billing_address: true,
        custom_info: [],
      },
      promo_codes: [],
      items: [{
        part_number: 'I02_2598_194',
        quantity: '1',
        free_gift: false,
        amount: {
          gtq: {
            unit_price: '200',
            total_items: '200',
            total_adjustment: '0',
            adjustment: {},
            sales_tax: '0',
            shipping_charge: '0',
            shipping_tax: '0',
          },
        },
        item_status: {
          status: 'P',
          inventory: 'Available',
          fulfillment: 'Unreleased',
        },
        fulfillment_info: {
          available_date: {
            $date: '2018-08-17T06:11:45.439Z',
          },
          expected_ship_date: {
            $date: '2018-08-17T06:11:45.468Z',
          },
        },
        fulfillment_center: {
          id: '13901',
          name: 'clarogt',
        },
        shipping_info: {
          nickname: 'Envio',
          address_type: 'Shipping',
          external_referer: '527467002346',
          first_name: 'Alfonso',
          last_name: 'Tellez Test',
          address_line_1: 'No surtir 22',
          address_line_2: 'Siquinala\r',
          address_line_3: '',
          city: 'El Progreso',
          state_or_province_name: 'La Democracia',
          country: 'GT',
          postal_code: '00000',
          email_1: 'miguel.carmona@edgebound.com',
          email_2: '',
          phone_1: '3322332233',
          phone_2: '',
          fax_1: '1234567890123',
          fax_2: '',
          same_shipping_and_billing_address: true,
          custom_info: [{
            key: 'allowed_recipient_1',
            value: 'Salvador Calles',
          },
          {
            key: 'allowed_recipient_2',
            value: 'Sergio Venegas',
          },
          {
            key: 'referral_address',
            value: 'Edificio rojo',
          },
          {
            key: 'departamentoid',
            value: '5',
          },
          {
            key: 'municipioid',
            value: '3',
          },
          {
            key: 'pobladoid',
            value: '431',
          },
          ],
        },
        product: {
          part_number: 'I01_2598_194A',
          buyable: true,
          available: true,
          locales: {
            es_gt: {
              description: 'HUAWEI Y6II NEGRO (P)',
              long_description: 'HUAWEI Y6II NEGRO (P)',
              name: 'HUAWEI Y6II NEGRO (P)',
              seo: {
                title: 'huawei-y6ii-negro-p',
                name: 'huawei-y6ii-negro-p',
              },
              categories: [{
                slug: 'prepago/celulares',
              },
              {
                slug: 'prepago',
              },
              ],
            },
          },
          attributes: [{
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-marca',
            value: 'Huawei',
            type: 'descriptive',
          },
          {
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-color',
            value: 'Negro',
            type: 'descriptive',
          },
          {
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-chars-mp3',
            value: '1',
            type: 'descriptive',
          },
          ],
          position: 1.0,
          last_update: {
            $date: '2018-08-15T18:17:13.275Z',
          },
          items: [{
            part_number: 'I02_2598_194',
            buyable: true,
            available: true,
            image_correlator: 'I02.2598.194',
            locales: {
              es_gt: {
                description: 'HUAWEI Y6II BLANCO (P)',
                long_description: 'HUAWEI Y6II BLANCO (P)',
                name: 'HUAWEI Y6II BLANCO (P)',
                position: 1.0,
                seo: {
                  title: 'huawei-y6ii-blanco-p',
                  name: 'huawei-y6ii-blanco-p',
                },
              },
            },
            attributes: [{
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-marca',
              value: 'Huawei',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-color',
              value: 'Blanco',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-chars-mp3',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'def-color',
              value: 'Blanco',
              type: 'defining',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'def-capacidad',
              value: '16 GB',
              type: 'defining',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-a-name',
              value: 'Diseño',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-a-desc',
              value: 'Diseño',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-a-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-b-name',
              value: 'Pantalla',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-b-desc',
              value: 'Pantalla',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ext-b-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-a-name',
              value: 'Diseño',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-a-desc',
              value: 'Diseño',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-a-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-b-name',
              value: 'Cámara',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-b-desc',
              value: 'Cámara',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-c-name',
              value: 'Rendimiento',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-c-desc',
              value: 'Rendimiento',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-chars-ostd-c-img',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-a-name',
              value: 'Qué contiene la caja',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-b-name',
              value: 'Términos y condiciones',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-box-b-desc',
              value: 'Adaptador AC. Cable USB. Guía de inicio rápido. Audífonos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pantalla',
              value: '5.5 pulgadas',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pila',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-camara',
              value: '13.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-peso',
              value: '168 gramos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-resumen-tamano',
              value: '15.4 centímetros',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-renovable',
              value: 'No',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-duracion',
              value: '520 minutos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-espera',
              value: '36000 minutos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-bateria-capacidad',
              value: '3000mAh (carga con cable 220 minutos)',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-dimensiones',
              value: '154.3 x 77.1 x 8.45 mm',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-peso',
              value: '168 gramos',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-pantalla',
              value: '5.5 Pulgadas',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-memoria',
              value: '16.0 GB',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-memoria-ext',
              value: 'Micro SD hasta 128GB',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-correo-soportado',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sistema-operativo',
              value: 'Android 6.0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sistema-operativo-version',
              value: 'Marshmallow',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-procesador',
              value: '1.2 GHz Octa Core',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-sim',
              value: 'Nano USIM',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-videollamada',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-prueba-agua',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-trasera',
              value: '13.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-frontal',
              value: '8.0 megapixeles',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-flash',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-enfoque',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-hd',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-video',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-musica',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-radio',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-datos',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-banda',
              value: 'LTE',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth-st',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-wifi',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-gps',
              value: '1',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-3g4g',
              value: 'NoSi',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-35mm',
              value: '3.5 mm',
              type: 'descriptive',
            },
            ],
            pricing: {
              gtq: {
                list_price: 200.0,
                offer_price: 200.0,
              },
            },
            position: 1.0,
            external_referer: '373021',
            images: [
              '/I02.2598.194/I02.2598.194_1.jpg',
              '/I02.2598.194/I02.2598.194_2.jpg',
              '/I02.2598.194/I02.2598.194_3.jpg',
              '/I02.2598.194/I02.2598.194_4.jpg',
              '/I02.2598.194/I02.2598.194_5.jpg',
              '/I02.2598.194/I02.2598.194_7.jpg',
              '/I02.2598.194/I02.2598.194_8.jpg',
            ],
          }],
        },
      },
      {
        part_number: 'I10_0002_020',
        quantity: '1',
        free_gift: false,
        amount: {
          gtq: {
            unit_price: '100',
            total_items: '100',
            total_adjustment: '0',
            adjustment: {},
            sales_tax: '0',
            shipping_charge: '0',
            shipping_tax: '0',
          },
        },
        item_status: {
          status: 'P',
          inventory: 'Available',
          fulfillment: 'Unreleased',
        },
        fulfillment_info: {
          available_date: {
            $date: '2018-08-17T06:11:46.100Z',
          },
          expected_ship_date: {
            $date: '2018-08-17T06:11:46.128Z',
          },
        },
        fulfillment_center: {
          id: '13901',
          name: 'clarogt',
        },
        shipping_info: {
          nickname: 'Envio',
          address_type: 'Shipping',
          external_referer: '527467002346',
          first_name: 'Alfonso',
          last_name: 'Tellez Test',
          address_line_1: 'No surtir 22',
          address_line_2: 'Siquinala\r',
          address_line_3: '',
          city: 'El Progreso',
          state_or_province_name: 'La Democracia',
          country: 'GT',
          postal_code: '00000',
          email_1: 'miguel.carmona@edgebound.com',
          email_2: '',
          phone_1: '3322332233',
          phone_2: '',
          fax_1: '1234567890123',
          fax_2: '',
          same_shipping_and_billing_address: true,
          custom_info: [{
            key: 'allowed_recipient_1',
            value: 'Salvador Calles',
          },
          {
            key: 'allowed_recipient_2',
            value: 'Sergio Venegas',
          },
          {
            key: 'referral_address',
            value: 'Edificio rojo',
          },
          {
            key: 'departamentoid',
            value: '5',
          },
          {
            key: 'municipioid',
            value: '3',
          },
          {
            key: 'pobladoid',
            value: '431',
          },
          ],
        },
        product: {
          part_number: 'I10_0002_020A',
          locales: {
            es_gt: {
              description: 'TARJETA TELF MOVIL Q.10',
              long_description: 'TARJETA TELF MOVIL Q.10',
              name: 'TARJETA TELF MOVIL Q.10',
              seo: {
                title: 'tarjeta-telf-movil-q10',
                name: 'tarjeta-telf-movil-q10',
              },
              categories: [{
                slug: 'prepago/celulares',
              },
              {
                slug: 'prepago',
              },
              ],
            },
          },
          buyable: true,
          available: false,
          attributes: [{
            _meta: {
              class: 'Attribute',
              version: '1',
            },
            name: 'filt-chars-mp3',
            value: '0',
            type: 'descriptive',
          }],
          last_update: {
            $date: '2018-08-15T18:17:13.528Z',
          },
          items: [{
            part_number: 'I10_0002_020',
            buyable: true,
            available: false,
            locales: {
              es_gt: {
                description: 'TARJETA TELF MOVIL Q.10',
                long_description: 'TARJETA TELF MOVIL Q.10',
                name: 'TARJETA TELF MOVIL Q.10',
                position: 99.0,
                seo: {
                  title: 'tarjeta-telf-movil-q10',
                  name: 'tarjeta-telf-movil-q10',
                },
              },
            },
            attributes: [{
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'filt-chars-mp3',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-incluye-pila',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-correo-soportado',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-videollamada',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-general-prueba-agua',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-flash',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-enfoque',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-camara-hd',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-video',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-musica',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-entretenimiento-radio',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-datos',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-bluetooth-st',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-wifi',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-gps',
              value: '0',
              type: 'descriptive',
            },
            {
              _meta: {
                class: 'Attribute',
                version: '1',
              },
              name: 'attr-techspech-conectividad-3g4g',
              value: 'NoNo',
              type: 'descriptive',
            },
            ],
            pricing: {
              gtq: {
                list_price: 100.0,
                offer_price: 100.0,
              },
            },
            image_correlator: 'I10.0002.020',
            external_referer: '372502',
            images: [
              '/I10.0002.020/I10.0002.020_1.jpg',
            ],
            position: 99.0,
          }],
          position: 99.0,
        },
      },
      ],
      checkout_date: {
        $date: '2017-08-17T06:15:14.000Z',
      },
      tracking_info: {
        shipments: [
          {
            tracking_url: 'https://www.cargoexpreso.com/tracking/?guia=',
            tracking_code: '1234',
            courier: 'cargoexpreso',
            items: 'List<Item>',
          },
          {
            tracking_url: 'https://www.cargoexpreso.com/tracking/?guia=',
            tracking_code: '4567',
            courier: 'cargoexpreso',
            items: 'List<Item>',
          },
        ],
        events: [
          {
            status: 'PENDING',
            tracking_code: '1234',
            description: '',
            location: '',
            timestamp: '1534262545',
          },
          {
            status: 'PROCESS',
            tracking_code: '4567',
            description: '',
            location: '',
            timestamp: '1534262545',
          },
          {
            status: 'UPDATE',
            tracking_code: '4567',
            description: '',
            location: '',
            timestamp: '1534462545',
          },
          {
            status: 'SHIPPING',
            tracking_code: '4567',
            description: '',
            location: '',
            timestamp: '1534462545',
          },
          {
            status: 'DELIVERED',
            tracking_code: '4567',
            description: '',
            location: '',
            timestamp: '1534462545',
          },
        ],
      },
    },
    ],
  },
};
