<template>
<ion-content class="ion-padding">

<button type="button" @click="closeModal()" style="margin-left:97%;background-color: #fff;">
<ion-icon :icon="close"></ion-icon> 
</button>

<p class="p-no-center" style="text-align:justify">
Términos y Condiciones
<br><br>
01 - Capacidad
Los Servicios sólo están disponibles para personas que tengan capacidad legal para contratar (en adelante, el “Usuario”, o en plural, los “Usuarios”). No podrán utilizar los Servicios las personas que no tengan esa capacidad, los menores de edad o Usuarios de Upgrap que hayan sido suspendidos temporalmente o inhabilitados definitivamente. Para registrar un Usuario como Empresa, se deberá contar con la capacidad suficiente como para contratar a nombre y representación de tal entidad como así también de obligar a la misma en los términos de este Acuerdo.
<br><br>
02 - Registración
Es obligatorio completar el formulario de registración en todos sus campos con datos válidos para poder utilizar los servicios que brinda Upgrap. El Usuario deberá completar el mencionado formulario de registración con la información personal que le sea solicitada de manera exacta, precisa y verdadera (en adelante, los "Datos Personales") y asume el compromiso de actualizar los Datos Personales conforme resulte necesario. El Usuario presta expresa conformidad con que Upgrap utilice diversos medios para identificar sus datos personales, asumiendo el Usuario la obligación de revisarlos y mantenerlos actualizados. Upgrap NO se responsabiliza por la certeza de los Datos Personales de los Usuarios. Los Usuarios garantizan y responden, en cualquier caso, de la veracidad, exactitud, vigencia y autenticidad de sus Datos Personales. A su exclusiva discreción, Upgrap podrá requerir una registración adicional a los Usuarios que operen como concesionarias o inmobiliarias, como requisito para que dichos Usuarios accedan a paquetes especiales de publicaciones. En estos casos, una vez efectuada la registración adicional, las ofertas de venta de automóviles o inmuebles que realicen las concesionarias o inmobiliarias, respectivamente, sólo se publicarán en Upgrap a través de alguno de dichos paquetes o bajo las modalidades que Upgrap habilite para este tipo de Usuarios. Upgrap se reserva el derecho de solicitar algún comprobante y/o dato adicional a efectos de corroborar los Datos Personales, así como de suspender temporal o definitivamente a aquellos Usuarios cuyos datos no hayan podido ser confirmados. En estos casos de inhabilitación, se dará de baja todos los artículos publicados, así como las ofertas realizadas, sin que ello genere algún derecho a resarcimiento.
<br><br>
Upgrap se reserva el derecho de solicitar una indemnización o daño ulterior ocasionado por el usuario.
<br><br>
El Usuario accederá a su cuenta personal (en adelante, la "Cuenta") mediante el ingreso de su Apodo y clave de seguridad personal elegida (en adelante, la "Clave de Seguridad"). El Usuario se obliga a mantener la confidencialidad de su Clave de Seguridad. La Cuenta es personal, única e intransferible, y está prohibido que un mismo Usuario registre o posea más de una Cuenta. En caso que Upgrap detecte distintas Cuentas que contengan datos coincidentes o relacionados, podrá cancelar, suspender o inhabilitarlas. El Usuario será responsable por todas las operaciones efectuadas en su Cuenta, pues el acceso a la misma está restringido al ingreso y uso de su Clave de Seguridad, de conocimiento exclusivo del Usuario. El Usuario se compromete a notificar a Upgrap en forma inmediata y por medio idóneo y fehaciente, cualquier uso no autorizado de su Cuenta, así como el ingreso por terceros no autorizados a la misma. Se aclara que está prohibida la venta, cesión o transferencia de la Cuenta (incluyendo la reputación y calificaciones) bajo ningún título, salvo expresa autorización de Upgrap. Upgrap se reserva el derecho de rechazar cualquier solicitud de registración o de cancelar una registración previamente aceptada, sin que esté obligado a comunicar o exponer las razones de su decisión y sin que ello genere algún derecho a indemnización o resarcimiento.
<br><br>
Está terminantemente prohibido publicar fotos con contenido sexual, drogas, violencia, entre otros contenidos ilícitos por ley vigente en el país que corresponde.
<br><br>
Upgrap solamente se encarga de compartir información publicada por cada uno de sus usuarios. No se responsabiliza directa o indirectamente por los intercambios y/o transacciones realizados dentro de la plataforma.
<br><br>
Upgrap no se responsabiliza por robos/secuestros y todo suceso que pueda ocurrir de ntro y fuera de la plataforma. El usuario es 100 % responsable de sus publicaciones hechas en la plataforma así como también de cualquier coordinación o reunión física o virtual entre usuarios de Upgrap.
</p>
</ion-content>
</template>

<script>
import { IonContent,modalController  } from '@ionic/vue';
import { defineComponent } from 'vue';
import { close } from 'ionicons/icons';

export default defineComponent({
name: 'Popover',

components: { IonContent },
setup() {
	return { close }
},
methods :{
  async closeModal() {
      const modal = await modalController
      return modal.dismiss();
    },
}
});
</script>