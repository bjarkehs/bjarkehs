<?
require_once 'swift/swift_required.php';

$subject = 'Mail from BjarkeHS';
$senderEmail = 'admin@bjarkehs.dk';
$password = 'password';
$senderName = 'Bjarke Søndergaard';
$data = json_decode(file_get_contents("php://input"));
$contactName = $data->name;
$contactEmail = $data->email;
$contactMessage = $data->message;
if (empty($contactName) || empty($contactEmail) || empty($contactMessage)) {
    die();
}
$body = $contactName . " <" . $contactEmail . ">\n\n" . $contactMessage;

$message = Swift_Message::newInstance();

$message->setSubject($subject);
$message->setFrom(array($senderEmail => $senderName));
$message->setTo(array('kontakt@bjarkehs.dk'));
$message->setBody($body);

$transport = Swift_SmtpTransport::newInstance('smtp.live.com', 587, 'tls');

$transport->setUsername($senderEmail);
$transport->setPassword($password);

$mailer = Swift_Mailer::newInstance($transport);

$result = $mailer->send($message);

if ($result)
{
  echo "Sent\n";
}
else
{
  echo "Failed\n";
}