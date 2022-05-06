import { Titulo } from "../../components/Titulo"
import { Card, Container, Text, Spacer } from "@nextui-org/react"
import { Menu } from "../../components/Menu"
import { PiePagina } from "../../components/PiePagina"


export default function index() {
  const Subtitulo = ({ texto }) => {
    return (
      <Text h2 css={{ fontFamily: "Poppins" }}>
        {texto}
      </Text>
    )
  }

  const Parrafo = ({ texto }) => {
    return (
      <>
        <Text h3 css={{ textAlign: "justify", fontFamily: "Poppins" }} weight="light">
          {texto}
        </Text>
        <br />
      </>
    )
  }

  const Lista = ({ list }) => {
    return (
      <>
        {

          list.map((item, index) => {
            return (
              <ul key={index}>
                <Text h3 css={{ textAlign: "justify", fontFamily: "Poppins" }} weight="light">
                  - {item}
                </Text>
              </ul>
            )
          })
        }
        <br />
      </>
    )
  }

  return (
    <>
      <Menu />
      <Titulo texto="Aviso de privacidad" />
      <Container>
        <Card>
          <Container css={{ paddingTop: "2%", paddingBottom: "2%" }}>
            <Parrafo texto=" Héctor García Maldonado mejor conocido como Ingen10 ® Automatización y Control, con domicilio en Calle 5 de mayo # 18, Cuautepec de Hinojosa, Hidalgo y portal de internet www.ingenioayc.com, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:" />
            <Subtitulo texto="Obligaciones y Responsabilidades" />
            <Parrafo texto="Al acceder o usar el Sitio, Usted se obliga a cumplir con estos Términos y Condiciones así como con cualquier aviso especial, instrucciones de acceso o de uso que se encuentren anunciados en el Sitio. Usted deberá actuar en todo momento conforme a la ley, la costumbre y la buena fe. Usted no podrá hacer cambios o alteraciones al Sitio o a cualquier parte del Contenido o de los servicios que puedan aparecer en dicho Sitio y no podrá deteriorar en forma alguna la integridad o la operación del mismo. Sin limitar la generalidad de cualquier otra disposición contenida en estos Términos y Condiciones, en caso de incumplir, ya sea con dolo o negligencia, acciones u omisiones, cualquiera de las obligaciones señaladas en estos Términos y Condiciones, Usted será responsable por la totalidad de los daños y perjuicios que esto pueda causar a Ingen10 ® Automatización y Control, nuestras afiliados, socios comerciales o así como cualquier tercero." />
            <Subtitulo texto="¿Para qué fines utilizaremos sus datos personales?" />
            <Parrafo texto="Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:" />
            <Lista list={["Respuesta a mensajes del formulario de contacto", "Prestación de cualquier servicio solicitado."]} />
            <Subtitulo texto="¿Qué datos personales utilizaremos para estos fines?" />
            <Parrafo texto="Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales:" />
            <Lista list={["Datos de identificación y contacto.", "Datos laborales.", "Datos patrimoniales y/o financieros."]} />
            <Parrafo texto="Es importante señalar que los datos proporcionados serán utilizados únicamente con motivo de la operación que nos relaciona y se tratarán para todos los fines vinculados con dicha relación, tales como: proveer los servicios que ha solicitado; notificarle sobre nuevos servicios o productos que tengan relación con los ya contratados o adquiridos; comunicarle sobre cambios en los mismos; realizar evaluaciones periódicas de nuestros servicios a efecto de mejorar la calidad de los mismos; evaluar la calidad del servicio que brindamos, y en general, para dar cumplimiento a las obligaciones que hemos contraído con usted, siendo de  entera responsabilidad de quien los proporciona, que dichos datos sean correos, actuales y/o vigentes; excluyendo de responsabilidad a Ingen10 ® Automatización y Control, de conflictos derivados de cualquier información proporcionada, de igual manera no nos hacemos responsables de los daños y perjuicios que pudiera ocasionar la utilización de las herramientas e informaciones contenidas en esta página." />
            <Subtitulo texto="¿Cómo puede acceder, rectificar o cancelar sus datos personales, u oponerse a su uso o ejercer la revocación de consentimiento?" />
            <Parrafo texto="Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO." />
            <Parrafo texto="Para el ejercicio de cualquiera de los derechos ARCO, debe enviar una petición vía correo electrónico a ingenio_joaquin@outlook.com y deberá contener:" />
            <Lista list={["Nombre completo del titular.", "Domicilio.", "Teléfono.", "Correo electrónico usado en este sitio web.", "Copia de una identificación oficial adjunta."]} />
            <Parrafo texto='Asunto: "Derechos ARCO"' />
            <Parrafo texto="Descripción: El objeto del escrito, los cuales pueden ser de manera enunciativa más no limitativa los siguientes: Revocación del consentimiento para tratar sus datos personales; y/o Notificación del uso indebido del tratamiento de sus datos personales; y/o Ejercitar sus Derechos ARCO, con una descripción clara y precisa de los datos a Acceder, Rectificar, Cancelar o bien, Oponerse." />
            <Parrafo texto="En caso de Rectificación de datos personales, deberá indicar la modificación exacta y anexar la documentación soporte; es importante en caso de revocación del consentimiento, que tenga en cuenta que no en todos los casos podremos atender su solicitud o concluir el uso de forma inmediata, ya que es posible que por alguna obligación legal requiramos seguir tratando sus datos personales. Asimismo, usted deberá considerar que para ciertos fines, la revocación de su consentimiento implicará que no le podamos seguir prestando el servicio que nos solicitó, o la conclusión de su relación con nosotros." />
            <Subtitulo texto="¿En cuántos días le daremos respuesta a su solicitud?" />
            <Parrafo texto="3 a 5 días hábiles" />
            <Subtitulo texto="¿Por qué medio le comunicaremos la respuesta a su solicitud?" />
            <Parrafo texto="Al mismo correo electrónico de donde se envío la petición." />
            <Subtitulo texto="Uso de tecnologías de rastreo en nuestro portal de internet" />
            <Parrafo texto="Le informamos que en nuestra página de internet utilizamos cookies, web beacons u otras tecnologías, a través de las cuales es posible monitorear su comportamiento como usuario de internet, así como brindarle un mejor servicio y experiencia al navegar en nuestra página. Los datos personales que obtenemos de estas tecnologías de rastreo son los siguientes:" />
            <Lista list={["Región en la que se encuentra el usuario.", "Contacto de WhatsApp, teléfono o correo electrónico."]} />
            <Parrafo texto="Estas cookies, web beacons y otras tecnologías pueden ser deshabilitadas. Para conocer cómo hacerlo, consulte el menú de ayuda de su navegador. Tenga en cuenta que, en caso de desactivar las cookies, es posible que no pueda acceder a ciertas funciones personalizadas en nuestros sitio web." />
            <Subtitulo texto="¿Cómo puede conocer los cambios en este aviso de privacidad?" />
            <Parrafo texto="El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas. Nos comprometemos a mantener actualizado este aviso de privacidad sobre los cambios que pueda sufrir y siempre podrá consultar las actualizaciones que existan en el sitio web www.ingenioayc.com." />
            <Text h4 css={{ textAlign: "end",fontFamily: "Poppins" }}>
              Última actualización de este aviso de privacidad: 05/05/2022
            </Text>
          </Container>
        </Card>
      </Container>
      <Spacer y={4}/>
      <PiePagina />
    </>
  )
}
