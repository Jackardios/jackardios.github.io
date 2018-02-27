<?php
/**
 * Render Email template
 *
 * @param array $data
 * @return void
 */
function renderEmailTemplate($data)
{
	$html = <<<HTMLCONTENT
    <!doctype html>
    <html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
		<style>
            html,
            body {
				font-family: Verdana, sans-serif;
				font-size: 14px;
				background: #efefef;
				color: #003351;
			}
			.wrapper {
				max-width: 720px;
				padding: 15px;
				background: #efefef;
			}
			.title {
				font-size: 1.5rem;
				color: #5e7188;
			}
			.table {
				width: 100%;
				margin: 0 auto;
				overflow: auto;
				background: #fff;
				box-shadow: 0 3px 15px -5px rgba(0, 0, 0, .1);
				border-collapse: collapse;
			}
			.column {
				border: 1px solid #efefef;
				padding: 10px;
				overflow: hidden;
				max-height: 200px;
			}
			.column img {
                width: 100%;
                max-width: 150px;
                max-height: 150px;
			}
			.column--strong {
				font-weight: 700;
				color: #003351;
			}
		</style>
    </head>
	<body>
		<div class="wrapper">
			<h2 class="title">{$data['title']}</h2>
			<div class="content">{$data['content']}</div>
		</div>
    </body>
    </html>
HTMLCONTENT;

	return $html;
}

/**
 * Render html table for array data
 */
function renderHTMLTableForArray($array, $title = "Данные")
{
	$htmlTable = "<table class='table'><thead><tr><td class='column column--strong' colspan='2'>$title</td></tr></thead><tbody>";

	foreach ($array as $key => $value) {
		$htmlTable .= "<tr>";
		$htmlTable .= "<td class='column'>$key</td>";
		$htmlTable .= "<td class='column column--strong'>$value</td>";
		$htmlTable .= "</tr>";
	}

	$htmlTable .= "</tbody></table>";

	return $htmlTable;
}

/**
 * Get base url
 *
 * @return string - base url
 */
function get_base_url() {
    if( isset($_SERVER['HTTPS']) ){
        $protocol = ($_SERVER['HTTPS'] && $_SERVER['HTTPS'] != "off") ? "https" : "http";
    }
    else{
        $protocol = 'http';
    }
    return $protocol . "://" . $_SERVER['HTTP_HOST'];
}

/**
 * Send user call request to email (ajax action)
 */
try {
    // Валидация
    if (empty($_POST['user_site']) || empty($_POST['user_name']) || empty($_POST['user_phone'])) {
        throw new Exception('Пожалуйста, заполните все обязательные поля.');
    }

    // Подготовка email параметров
    $to = "salahutdinov.salavat@gmail.com";
    $site_url = get_base_url();
    $subject = "Новый заказ на  с сайта 'Google Adwards' [{$site_url}]";
    $headers = "Content-type: text/html; charset=UTF-8" . "\r\n";

    // Подготовка HTML кода email сообщения
    $userdataTable = renderHTMLTableForArray(array(
        "Сайт" => $_POST['user_site'],
        "Имя" => $_POST['user_name'],
        "Номер телефона" => $_POST['user_phone'],
    ), "Отправитель: ");

    $body = renderEmailTemplate(array(
        title => $subject,
        content => $userdataTable,
    ));

    // Отправка email сообщения
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(array('status' => 'success', 'message' => "Ваша заявка успешно отправлена"));
    } else {
        throw new Exception("Во время отправки запроса произошла внутренняя ошибка, попробуйте еще раз позднее.");
    }
} catch (Exception $e) {
    echo json_encode(array('status' => 'error', 'message' => $e->getMessage()));
}