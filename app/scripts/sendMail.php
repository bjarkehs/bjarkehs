<?
require_once 'swift/swift_required.php';

$subject = "Subject";
$email = "Email";
$name = "Name";
$body = "Test body";

$message = Swift_Message::newInstance();

$message->setSubject($subject);
$message->setFrom(array($email => $name));
$message->setTo(array('contact@bjarkehs.dk'));
$message->setBody($body);

$transport = Swift_SmtpTransport::newInstance('smtp.example.org', 25);

$transport->setUsername('username');
$transport->setPassword('password');

$mailer = Swift_Mailer::newInstance($transport);

$result = $mailer->send($message);