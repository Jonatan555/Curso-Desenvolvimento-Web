SELECT * FROM orders;
SELECT * FROM orders ORDER BY pais DESC;

SELECT DISTINCT pais FROM orders ORDER BY pais;
SELECT DISTINCT categoria FROM orders ORDER BY segmento;

SELECT * FROM orders WHERE pais LIKE '%ia';
SELECT * FROM orders WHERE pais LIKE '%ar%';
SELECT * FROM orders WHERE região LIKE '_ar%';

SELECT * FROM orders WHERE pais IN  ('Brasil', 'Argentina');

SELECT
     count(*) AS QTD,
     ROUND(SUM(total_vendas), 4),
     MIN(total_vendas),
     MAX(total_vendas),
     AVG(total_vendas)

FROM orders WHERE pais = 'Brazil';
 
SELECT pais, ROUND(SUM(total_vendas))
FROM orders
GROUP BY pais
ORDER BY Total DESC LIMIT 10;

SELECT id_pedido, COUNT(id_pedido)
FROM orders GROUP BY id_pedido;

SELECT * FROM orders WHERE id_pedido = 'AE-2011-9160';
