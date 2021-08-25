<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do MySQL
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Configurações do MySQL - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define( 'DB_NAME', 'wp_db' );

/** Usuário do banco de dados MySQL */
define( 'DB_USER', 'tiagocbatista' );

/** Senha do banco de dados MySQL */
define( 'DB_PASSWORD', 'Tcb@0396' );

/** Nome do host do MySQL */
define( 'DB_HOST', 'localhost' );

/** Charset do banco de dados a ser usado na criação das tabelas. */
define( 'DB_CHARSET', 'utf8mb4' );

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define( 'DB_COLLATE', '' );

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '-hlXU~^O79c%~~+j:rX*@5PtysFk=nwu6I<6HBR?:BXy4=%$[U.^`%GkrV3c3h#@' );
define( 'SECURE_AUTH_KEY',  'Qv(V^f`/uNH0Lx_6@QW-{_vyQ60}_{%>x*p8?F/fh7!$ecP:v4}2b!XYl[B6I&Er' );
define( 'LOGGED_IN_KEY',    '~pGmk,Hn+_6>R#z9)J~`.6 n]E%%ay2I*i=#U}O+h+aHS]n;2|F1jlFry!@^u4I5' );
define( 'NONCE_KEY',        'tv/kf-_-i.oV=,W%I`Aq8t8B:|d,&3D6 c>[CpDlDDv7g>5TRw@;4T|dJmX<h(:0' );
define( 'AUTH_SALT',        'AytTXk%(Migk> OkeLD[S|g []g],nCX_=+l_vSkw#b@4[osqlxh4s2f!J$B%P)+' );
define( 'SECURE_AUTH_SALT', 'KAUZ YNdwonC5[4N.3$PD?=;]NJ.MzHpHp9E LA*KrvR!V0Fu3k/]?@>^WKht>y ' );
define( 'LOGGED_IN_SALT',   'O^k/,^!ayYx+^DG,yaNsBz{1[&^z&8~J.x.!!Y>3m; f6B7)2ms}DN_HnbAVG}Ue' );
define( 'NONCE_SALT',       'GE+:yT5geH~R;1V#Y^[sPgR_+TA(<A_$BtS<X8Tmvq~,Fl>6Y^wqKr*Dl`&`st&u' );

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix = 'wp_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Configura as variáveis e arquivos do WordPress. */
require_once ABSPATH . 'wp-settings.php';
