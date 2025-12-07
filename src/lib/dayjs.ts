/**
 * Configuração global do Dayjs usada em toda a aplicação.
 *
 * O Dayjs, por padrão, só consegue interpretar datas em formato ISO
 * (ex.: "2025-12-15"). Como nosso projeto utiliza datas no formato
 * brasileiro "DD/MM/YYYY", precisamos habilitar o plugin
 * `customParseFormat` para permitir o parsing correto dessas strings.
 *
 * Este arquivo centraliza a configuração e estende o Dayjs
 * com os plugins necessários, garantindo que qualquer importação de
 * `dayjs` a partir deste módulo consiga:
 *
 *   - interpretar datas no formato "DD/MM/YYYY"
 *   - manter consistência em toda a aplicação
 *
 * Sempre importar Dayjs a partir deste arquivo:
 *
 *   import dayjs from "@/lib/dayjs";
 */

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

export default dayjs;
