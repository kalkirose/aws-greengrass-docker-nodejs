FROM amazon/aws-iot-greengrass

WORKDIR .

ENTRYPOINT ["/greengrass-entrypoint.sh"]
